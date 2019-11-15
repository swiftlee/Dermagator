import express from 'express';
import {config} from "dotenv";

const result = config();
const app = express();

if (result.error)
    throw result.error;

app.use(express.static("/client/build/"));
app.get('*', (req, res) => {
    res.sendFile('/client/build/index.html');
});

// Use env port or default
console.log(`THE PORT IS THIS THING: ${process.env.PORT}`);
const port = 5000;
app.listen(port, () => console.log(`Server now running on port ${port}!`));
