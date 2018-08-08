var express = require('express');
var router = express.Router();

// define the test route
router.get('/test', function(req, res) {
  res.render('test', { main: 'Ezreal'});
});

module.exports = router;