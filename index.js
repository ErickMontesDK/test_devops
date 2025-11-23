const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hola desde Node.js y Express!</h1><p>Este es un proyecto basico.</p>');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
