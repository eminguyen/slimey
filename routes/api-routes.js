// Set up express 
var express = require("express");

// Sets up a router to handle client requests
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Wassup HACKUCI!");
});

module.exports = router;