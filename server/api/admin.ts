import express, {Router} from 'express';
import {User} from '../models/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import validateUser from '../validation/validateUser';

const adminRouter = Router();

adminRouter.post('/create', (req: express.Request, res: express.Response) => {

});

adminRouter.post('/login', async (req: express.Request, res: express.Response) => {
	//validating login

	const {errors, isValid} = validateUser(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email : string = req.body.email;
	const password : string = req.body.password;

	// find user by email
	User.findOne({ email: email }).then((user) => {
		// check if user exists
		if (!user) {
			return res.status(404).json({ emailnotfound: 'Email not found.' });
		}

		// check password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// user matched
				// create JWT Payload
				const payload = {
					id: user.id,
					name: user.name
				};

				// sign token
				jwt.sign(
					payload,
					process.env.SECRET_KEY,
					{
						expiresIn: 31556926 // 1 year in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							token: 'Bearer ' + token
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: 'Incorrect password.' });
			}
		});
	});
});
export default adminRouter;
