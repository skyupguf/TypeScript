import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello TypeScript');
});

app.listen(port, () => {
    console.log(`server listening ${port}`);
});