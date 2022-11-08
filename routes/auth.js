const express = require('express');
const router = express.Router();

const students = require('../data/students');

router.post('/', function(req, res, next) {
  const email = req.body?.email;
  const pass = req.body?.password;
  const student = students.find(e => e.email == email);
  if (!student){
    res.status(404);
    res.json({error: 'El email no corresponde a un estudiante'});
  }
  else {
    if(student.password == pass)
      res.json(student);
    else{
      res.status(400);
      res.json({error: 'Contraseña incorrecta'});
    }
  }
});

module.exports = router;
