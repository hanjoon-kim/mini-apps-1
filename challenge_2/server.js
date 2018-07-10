var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('client'));
app.get('client/index.html', function(req, res) {
  res.sendFile(__dirname + "/" + 'index.html');
})

app.get('/process_get', function(req, res) {
  response = {
    CSV: req.query.input
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

app.listen(port, () => console.log(`listening on ${port}`));
