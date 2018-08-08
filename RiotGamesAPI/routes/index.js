var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.render('index', {title:'League of Legends'});
});

// define the test route
router.get('/test', function(req, res) {
  res.render('test', { main: 'Ezreal'});
});

// define the History route
router.get('/history', function(rq, res) {
  res.render('history', { history:'Story of the League'});
});

// define the test route
router.get('/champ1', function(req, res) {
  res.render('champ1', { champ1: 'Aatrox'});
});

// define the History route
router.get('/champ2', function(rq, res) {
  res.render('champ2', { champ2:'Ahri'});
});
// define the test route
router.get('/champ3', function(req, res) {
  res.render('champ3', { champ3: 'Ezreal'});
});

// define the History route
router.get('/champ4', function(rq, res) {
  res.render('champ4', { champ4:'Caitlyn'});
});
// define the test route
router.get('/champ5', function(req, res) {
  res.render('champ5', { champ5: 'Vayne'});
});

// define the History route
router.get('/champ6', function(rq, res) {
  res.render('champ6', { champ6: 'Xayah'});
});
module.exports = router;