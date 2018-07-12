const express = require('express');
const app = express();
var port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}!`));

app.use(express.static('public'));

app.post('/', function(req, res) {
  
  // res.end();
})