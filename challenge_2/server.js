var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('client'));
app.get('client/index.html', function(req, res) {
  res.sendFile(__dirname + "/" + 'index.html');
})

app.post('/', urlencodedParser, function(req, res) {
  console.log(req);
  response = {
    CSV: req.body.input
  };
  res.end(JSON.stringify(response));
})


// app.get('/process_get', function(req, res) {
//   response = {
//     CSV: req.query.input
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// })

app.listen(port, () => console.log(`listening on ${port}`));
