var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');


var cookieSession = require('cookie-session');
var config = require('config');

var app = express();
app.use(cors());
app.options('*', cors());


var db = config.get('db');

console.log(process.env.NODE_ENV);

mongoose.connect(config.db, function(err, res){
	if(err)
		console.log('DB FAILED');
	else
		console.log('DB SUCCESS');
});
var db = mongoose.connection;

var appRoute  = require('./routes/app');
// var api       = require('./routes/api');
var userRoute = require('./routes/users');
var sessionsRoute = require('./routes/sessions');
// var definitionsRoute = require(require('./routes/definitions'));
// var logsRoute = require('./routes/logs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));
app.use(morgan('dev'));
app.use('/', appRoute);
// app.use('/api', api);
app.use('/api/users', userRoute);
app.use('/api/login',sessionsRoute);
// app.use('/api/definitions', definitionsRoute);
// app.use('/api/logs', logsRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
