var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose')
var bluebird = require('bluebird')
var cors = require('cors')

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api.route')
var http = require('http');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../titan-frontend/dist/titan-frontend')));
app.use(cors())

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

mongoose.Promise = bluebird
mongoose.connect('mongodb://yura:yura1234@ds131753.mlab.com:31753/bets', { useNewUrlParser: true })
.then(() => {
  console.log(`Succesfully Connected to the
  Mongodb Database  at URL : mongodb://127.0.0.1:27017/bet`)
})
.catch(() => {
  console.log(`Error Connecting to the Mongodb 
  Database at URL : mongodb://127.0.0.1:27017/bet`)
})

// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + './../titan-frontend/dist/titan-frontend/index.html'));
});

// Other stuffs ...
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL());

//Use the Routes
app.use('/', indexRouter);
//Use the API routes for all routes matching /api

app.use('/api', apiRouter);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
var port = process.env.PORT || '3000';
server.listen(process.env.PORT || '3000', () => {
  console.log(port, 'port')
});

module.exports = app;
