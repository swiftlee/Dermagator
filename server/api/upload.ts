import express, {Router} from 'express';
import multer from 'multer';
import path from 'path';

const uploadRouter = Router();

// init multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, '../../../client/public/header-images'),
    filename: (req, file, cb) => {
        console.log("IMAGE-" + Date.now() + path.extname(file.originalname));
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage}).array('file', 200);

uploadRouter.post('/img', (req: express.Request, res: express.Response) => {
    console.log('something0');
    console.log('request body', req.body);
    upload(req, res, err => {
        if (err)
            return res.status(400).json({success: false});
        else
            return res.status(200).json({success: true});
    });
});

export default uploadRouter;