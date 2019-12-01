import express, {Router} from 'express';
import config from '../config/config';
import {User} from '../models/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import validateUser from '../validation/validateUser';
import validateUserCreation from '../validation/validateUserCreation';
import {hashString} from '../utils/stringUtils';

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

adminRouter.get('/user', (req: express.Request, res: express.Response) => {
	if (req.body) {
		const email = req.body.email;
		User.find((email === 'FINDALL' ? {} : {email: email}), doc => {
			if (doc) {
				res.status(200).json(doc);
			}

			res.status(400).json({});
		});
	}
});

adminRouter.post('/create', (req: express.Request, res: express.Response) => {
	const {errors, isValid} = validateUserCreation(req.body);
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
				password: req.body.password
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
