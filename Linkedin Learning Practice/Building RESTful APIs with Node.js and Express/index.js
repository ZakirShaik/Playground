import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.send(`Node and express server is running on port ${PORT}`)
});      // first end point


app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));