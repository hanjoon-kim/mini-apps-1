const express = require('express');
const app = express();

var port = 3000;

app.use(express.static('public'));


app.listen(port, () => console.log(`Listening on ${port}!`));