DROP DATABASE shoptime;

CREATE DATABASE shoptime;

USE shoptime;

CREATE TABLE purchases (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(50) NOT NULL,
  addressOne varchar(255) NOT NULL,
  addressTwo varchar(255),
  city varchar(50) NOT NULL,
  state varchar(25) NOT NULL,
  zipcode int NOT NULL,
  phoneNumber varchar(20) NOT NULL,
  creditCard varchar(20) NOT NULL,
  expireDate varchar(10) NOT NULL,
  cvv int NOT NULL,
  billingZip int NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO purchases 
(name, email, password, addressOne, addressTwo, city, 
state, zipcode, phoneNumber, creditCard, expireDate, cvv, billingZip)
VALUES ('Hanjoon Kim', 'hanjoon3@hotmail.com', 'nicksucks', 
'1515 Pullman Way', 'APT #230', 'Oakland', 'CA', 94607, '4807100560', 
'1234123412341234', '05/30', 523, 94607)