import {Router, Request, Response} from 'express';
import mailgun from 'mailgun-js';
import config from "../config/config";
import validateMail from "../validation/validateMail";

const contactRouter = Router();
const mgun = mailgun({
    apiKey: process.env.MAILGUN_API_KEY || config.mail.key,
    domain: process.env.MAILGUN_DOMAIN || config.mail.domain,
    publicApiKey: process.env.MAILGUN_API_KEY || config.mail.public_key
});
const grecaptcha = require("grecaptcha"); // typings are broken for grecaptcha, must use require
const client = new grecaptcha(process.env.CAPTCHA_SECRET || config.captcha.secret);

contactRouter.post('/email', (req: Request, res: Response) => {
    if (!req.body.valid)
        return res.status(400).json(req.body);

    client.verify(req.body.token).then((accepted : any) => {
        if (accepted) {
            const {errors, isValid} = validateMail(req.body);
            if (!isValid)
                return res.status(400).json(errors);

            mgun.messages().send({
                from: `Dermagator User <${req.body.email}>`,
                to: process.env.EMAIL_TO && process.env.EMAIL_TO.split(',') || config.mail.to,
                subject: req.body.subject,
                text: req.body.text
            }).then(() => res.status(200).json({success: true}))
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err);
                });
        } else {
            return res.status(400).json({recaptcha: 'The reCaptcha token was denied!'});
        }
    });
});

export default contactRouter;