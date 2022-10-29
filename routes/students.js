const express = require('express');
const router = express.Router();

const students = require('../data/students');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ student: 'Capucho' })
});

router.get('/all', function(req, res, next) {
  res.json({students: students});
});

module.exports = router;
