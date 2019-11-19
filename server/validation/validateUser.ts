import express, {Router} from '/express';
import {User} from '../models/User';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';

const adminRouter = Router();

adminRouter.post('login', async (req : express.Request, res: express.Response) => {
    //validating login

    const schema=Joi.object({
        email: Joi.string().required().email(),
        password:Joi.string().required()
    })

    const{error} =schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Checking if the email exist in database
    const user =await User.findOne({email:req.body.email});
    if(!user)return res.status(400).send('Email or password is wrong');
    //password is correct
    const validPass=await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid Password');
    //create and assign token
    const token =jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);
});
module.exports=adminRouter;

