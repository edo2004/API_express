const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const students = require('../data/students');

router.get('/', function(req, res, next) {
  const email = req.query?.email;
  const pass = req.query?.password;
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


router.post('/', upload.none(), function(req, res, next) {
  const formData = req.body;
  console.log('form data', formData);
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
