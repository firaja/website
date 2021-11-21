var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  let bits = '';
  const probability = Math.random();
  const entropy = Math.round(- (probability * Math.log2(probability) + (1 - probability) * Math.log2(1 - probability))* 100) / 100;
  for (i = 0; i < 1024; i++) {
    bits += Math.random() < probability ? '1 ' : '0 ';
  }
  res.render('404',  {
    title: '404 :(',
    year: new Date().getFullYear(),
    entropy: entropy,
    bits: bits
});
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
