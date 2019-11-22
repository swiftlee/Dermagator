import express, {Router} from 'express';
import config from '../config/config';
import {User} from '../models/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import validateUser from '../validation/validateUser';
var bodyParser = require('body-parser'); 


const adminRouter = Router();
adminRouter.get('/verify', (req:express.Request,res:express.Response)=>{
	if(req.isAuthenticated()){
		const ClientUser={
			user:req.user,
			loggedIn:true
		};
		return res.send({
			success:true,
			message:"Valid session",
			user:ClientUser
		});
	}else{
		const emptyUser={
			user:"",
			loggedIn:false
		}
		return res.send({
			success:false,
			message:"Couldn't find session",
			user:emptyUser
		})
	}
})
adminRouter.post('/create', (req: express.Request, res: express.Response) => {

});

adminRouter.post('/login', (req: express.Request, res: express.Response) => {
	//validating login
	console.log(req.body);
	const {errors, isValid} = validateUser(req.body);
	if (!isValid) {
		console.log("Sup I wonder how you got here")
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
					name: user.name,
					permissions: user.permissions
				};

				// sign token
				jwt.sign(
					payload,
					process.env.SECRET_KEY || config.jwt.SECRET_KEY,
					{
						expiresIn: 31556926 // 1 year in seconds
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
					.json({ passwordincorrect: 'Incorrect password.' });
			}
		});
	});
});
export default adminRouter;
