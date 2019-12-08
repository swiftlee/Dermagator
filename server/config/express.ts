import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import config from './config';
import {createDefaultAdmin} from "../utils/userUtils";
import adminRouter from '../api/admin';
import contactRouter from '../api/contact';
import updateRouter from "../api/aboutUpdate";
import uploadRouter from "../api/upload";

console.log(`${process.env.DB_URI} and ${config.db.uri}`);

mongoose.connect(process.env.DB_URI || config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Established connection to Mongo.")).catch(err => console.log(err));
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// initialize app
const app = express();

// enable request logging for development debugging
app.use(morgan('dev'));

// static public dir

// body parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// test
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../../client/build', 'index.html'));
    });
}

// create default administrator
createDefaultAdmin();

// routes
app.use('/api/admin', adminRouter);
app.use('/api/contact', contactRouter);
app.use('/api/update', updateRouter);
app.use('/api/upload', uploadRouter);

export default app;
