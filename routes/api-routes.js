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

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '/client/index.html'));
});

router.get('/render', function(req, res){
  res.sendFile(path.join(__dirname, '..', '/public/images/slime.png'));
})

router.get("/send/mail", function (req, res) {
  // set up email message object
  var msg = {
    to: 'clarkphan24@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  // send mail
  sgMail.send(msg);
  
  res.send("message sent");
});

module.exports = router;