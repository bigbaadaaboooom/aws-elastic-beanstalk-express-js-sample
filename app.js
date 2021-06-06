const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("This is a test that definitely isn't just Hello World!"));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
