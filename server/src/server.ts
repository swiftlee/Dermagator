import express from 'express';
import path from 'path';
import {config} from "dotenv";

const result = config();
const app = express();

if (result.error)
    throw result.error;

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Use env port or default
console.log(`THE PORT IS THIS THING: ${process.env.PORT}`);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server now running on port ${port}!`));
