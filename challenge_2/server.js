var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  console.log(req.body);
  var inputObj = req.body;
  var final = createCsv(inputObj);
  res.end(final);
});


app.listen(port, () => console.log(`listening on ${port}`));

var createCsv = function(inputObj) {

  var listEmployees = function(inputObj) {
    let row = '';
    
    for (let key in inputObj) {
      if (!Array.isArray(inputObj[key])) {
        row += ', ' + inputObj[key];
      }
    }
    
    row = row.slice(2) + '<br>';
    final += row;

    for (let i = 0; i < inputObj.children.length; i++) {
      listEmployees(inputObj.children[i]);
    }
  };

  var final = setHeaders(inputObj);
  listEmployees(inputObj);

  return final;
};

var setHeaders = function(inputObj) {
  var final = '';
  
  for (let key in inputObj) {
    final += ', ' + key;
  }
  
  final = final.slice(2);
  final = final.substring(0, final.length - 10) + '<br>';

  return final;
};


