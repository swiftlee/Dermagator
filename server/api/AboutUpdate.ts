import express,{Router, Request, Response} from 'express';
import config from "../config/config";
import fs from 'fs';
import { json } from 'body-parser';
import path from 'path'

const updateAboutRouter = Router();

updateAboutRouter.post('/updateAbout', (req: Request, res: Response) => {
    const jsonString=JSON.stringify(req.body);
    console.log("What we got from request:");
    console.log(jsonString);
    
    fs.writeFileSync('../client/src/data/AboutPage.json',jsonString);
    console.log("hello bitch")
    res.send("hello")
});

export default updateAboutRouter;