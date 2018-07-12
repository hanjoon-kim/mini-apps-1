const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');


var con = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'shoptime'
});

var port = 3000;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/', function(req, res) {
  console.log(req.body, 'at da server');
  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    var query = `INSERT INTO purchases (name, email, password, addressOne,
    addressTwo, city, state, zipcode, phoneNumber, creditCard, expireDate, cvv,
    billingZip) VALUES (${req.body.name}, ${req.body.email}, ${req.body.password},
    ${req.body.addressOne}, ${req.body.addressTwo}, ${req.body.city}, ${req.body.state},
    ${req.body.zipcode}, ${req.body.phoneNumber},
    ${req.body.creditCard}, ${req.body.expireDate}, ${req.body.cvv}, ${req.body.billingZip})`;
    
    con.query(query, function(err, result) {
      if (err) throw err;
      console.log('1 record inserted')
    })
  });

  res.end();
})
app.listen(port, () => console.log(`Listening on port ${port}!`));