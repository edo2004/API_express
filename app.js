var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

var studentsRouter = require('./routes/students');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

var app = express();
app.set('view engine', 'pug')
const DIRECTORIO_PERMITIDO_CORS = ["http://localhost:5500", "https://cariai.com", "https://cariai.com/cVhlaTdqekZaZkkyL1U4RDROVjFiUWRwb2tWbjdsQi9LWC9za2oyQllVLzNPWmNkWEhVeUtPdDVwL1RSdFRscTBMU010bTVLZHVnPQ==@em@"];

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use(cors({
//   origin: DIRECTORIO_PERMITIDO_CORS
// }));
app.use('/students', studentsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.statusCode(404);
  res.send('NotFound')
  //next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
