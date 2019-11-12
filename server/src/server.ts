import express from 'express';
import * as path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Use env port or default
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server now running on port ${port}!`));
