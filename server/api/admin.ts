import express, {Router} from 'express';
import config from '../config/config';
import {User} from '../models/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import validateUser from '../validation/validateUser';
import validateUserCreation from '../validation/validateUserCreation';
import {hashString} from '../utils/stringUtils';
import isEmpty = require('is-empty');

const adminRouter = Router();
adminRouter.get('/verify', (req: express.Request, res: express.Response) => {
	if (req.isAuthenticated()) {
		const ClientUser = {
			user: req.user,
			loggedIn: true
		};
		return res.send({
			success: true,
			message: 'Valid session',
			user: ClientUser
		});
	} else {
		const emptyUser = {
			user: '',
			loggedIn: false
		};
		return res.send({
			success: false,
			message: 'Couldn\'t find session',
			user: emptyUser
		});
	}
});

adminRouter.get('/user', async (req: express.Request, res: express.Response) => {
	if (req.body) {
		const email = req.query.email;
		let document;
		await User.find((email === 'FINDALL' ? {} : {email: email}), (err, doc) => {

			if (err) {
				throw err;
			}

			if (doc) {
				document = doc;
			}
		});

		if (document) {
			res.status(200).json(document);
		} else {
			res.status(400).json({});
		}
	}
});

// todo: validate body
adminRouter.post('/modify', (req: express.Request, res: express.Response) => {
	const token = req.body.token || '';
	const decoded: any = JSON.parse(JSON.stringify(jwt.decode(token.substring(7, token.length).trim())));
	const time = Date.now() / 1000;
	// jwtToken.exp > time
	if (decoded.exp > time && (decoded.permissions.includes('super') || decoded.permissions.includes('user-edit'))) {
		const newName = req.body.newName;
		const email = req.body.email;
		const newEmail = req.body.newEmail;
		const password = req.body.password;
		const password1 = req.body.password1;
		const data = [newName, newEmail, password, password1];
		const permissions = req.body.permissions;
		const updatedData = {name: '', email: '', password: '', password1: '', permissions: [...permissions]};
		console.log('permz', req.body.permissions);
		data.forEach((item, i) => {
			if (!(item instanceof Array) && item.trim() !== '') {
				switch (i) {
					case 0:
						updatedData.name = item;
						break;
					case 1:
						updatedData.email = item;
						break;
					case 2:
						updatedData.password = item;
						break;
					case 3:
						updatedData.password1 = item;
						break;
				}
			} else {
				switch (i) {
					case 0:
						delete updatedData.name;
						break;
					case 1:
						delete updatedData.email;
						break;
					case 2:
						delete updatedData.password;
						delete updatedData.password1;
						break;
					case 3:
						delete updatedData.password;
						delete updatedData.password1;
						break;
					case 4:
						updatedData.permissions = updatedData.permissions.filter(entry => entry !== null);
						break;
					default:
						break;
				}
			}
		});

		console.log('UPDATED:', updatedData);

		const updateUser = () => User.updateOne({email: email}, updatedData).then(resolve => {
			if (resolve) {
				return res.status(200).json({success: true});
			}
		}).catch(err => {
			if (err) {
				throw err;
			}
			return res.status(400).json({success: false});
		});

		if (!isEmpty(updatedData)) {
			console.log(updatedData);
			if (updatedData.password1 === updatedData.password) {
				if (!isEmpty(password)) {
					hashString(password).then(hashedPass => {
						updatedData.password = hashedPass;
						delete updatedData.password1;
					}).finally(updateUser);
				} else {
					updateUser();
				}
			}
		} else {
			res.status(200).json({});
		}
	} else {
		res.status(400).json({error: 'No data to update.'});
	}
});

adminRouter.post('/delete', (req: express.Request, res: express.Response) => {
	if (req.body.token) {
		const token = req.body.token;
		const decoded: any = JSON.parse(JSON.stringify(jwt.decode(token.substring(7, token.length).trim())));
		const time = Date.now() / 1000;
		// jwtToken.exp > time
		if (decoded.exp > time && (decoded.permissions.includes('super') || decoded.permissions.includes('user-edit'))) {
			if (decoded.email !== req.body.email) {
				User.remove({email: req.body.email}).then(doc => res.status(200).json({success: true})).catch(err => console.log(err));
			} else
				res.status(400).json({deletion: 'You cannot delete yourself!'});
		}
	}
});

adminRouter.post('/create', (req: express.Request, res: express.Response) => {
	const {errors, isValid} = validateUserCreation(req.body);
	console.log(errors);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	// find user by email
	User.findOne({email: req.body.email}).then((user: any) => {
		if (user) {
			return res.status(400).json({email: 'Email already exists.'});
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				permissions: req.body.permissions
			});

			// Hash password before saving in database
			hashString(newUser.password).then(hash => {
				newUser.password = hash;
				newUser
					.save()
					.then(user => res.json(user))
					.catch(err => console.log(err));
			});
		}
	});
});

adminRouter.post('/login', (req: express.Request, res: express.Response) => {
	//validating login
	console.log(req.body);
	const {errors, isValid} = validateUser(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email: string = req.body.email;
	const password: string = req.body.password;
	// find user by email
	User.findOne({email: email}).then((user) => {
		// check if user exists
		if (!user) {
			return res.status(404).json({emailnotfound: 'Email not found.'});
		}
		// check password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// user matched
				// create JWT Payload
				const payload = {
					id: user.id,
					name: user.name,
					email: user.email,
					permissions: user.permissions
				};

				// sign token
				jwt.sign(
					payload,
					process.env.SECRET_KEY || config.jwt.SECRET_KEY,
					{
						expiresIn: 86400 // 1 day in seconds
					},
					(err, token) => {
						const jwtAuth = 'Bearer ' + token;
						res.setHeader('Authorization', jwtAuth);
						req.headers['Authorization'] = jwtAuth;
						res.status(200).json({
							success: true,
						});
					}
				);

			} else {
				return res
					.status(400)
					.json({passwordincorrect: 'Incorrect password.'});
			}
		});
	});
});
export default adminRouter;
