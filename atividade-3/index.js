const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const APP_PORT = 8080;
const app = express();

app.get('/', async (_, res) => {
    const indexFile = await fs.readFile(path.resolve('index.html'), {
        encoding: 'utf8',
    });

    res.send(indexFile);
})

app.get(`/somar/:a/:b`, (req, res) => {
    const { a, b } = req.params;
    const result = Number(a) + Number(b);

    res.send(`Resultado: ${result}`);
});

app.get(`/subtratir/:a/:b`, (req, res) => {
    const { a, b } = req.params;
    const result = a - b;

    res.send(`Resultado: ${result}`);
});

app.get(`/dividir/:a/:b`, (req, res) => {
    const { a, b } = req.params;
    const result = a / b;

    res.send(`Resultado: ${result}`);
});

app.get(`/multiplicar/:a/:b`, (req, res) => {
    const { a, b } = req.params;
    const result = a * b;

    res.send(`Resultado: ${result}`);
});

app.get('/')

app.listen(APP_PORT, () => {
    console.log('Server started on port: ', APP_PORT);
});

