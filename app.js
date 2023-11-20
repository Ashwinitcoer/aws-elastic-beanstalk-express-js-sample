const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World, Never ever Give Up!We have successfully deployed our application'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
