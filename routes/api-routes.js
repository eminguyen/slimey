// configure environment variables in .env
require('dotenv').config()

// sendgrid api dependency
var sgMail = require('@sendgrid/mail');

// configure api key for access
sgMail.setApiKey(process.env.api_key);

// set up express 
var express = require("express");

// sets up a router to handle client requests
var router = express.Router();

// path to join files
var path = require('path');

// Middle-ware to test client requests
var bodyParser = require('body-parser');

// parse application/json
router.use(bodyParser.json());

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '/client/index.html'));
});

router.get('/render', function(req, res){
  res.sendFile(path.join(__dirname, '..', '/public/images/slime.png'));
})

router.post("/send/mail", function (req, res) {
  console.log(req.body);
  
  // set up email message object
  var msg = {
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.text,
  };

  // send mail
  sgMail.send(msg);
  
  res.send("message sent");
});

module.exports = router;