var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = bluebird
mongoose.connect('mongodb://yuraAmin:yura1212@ds131753.mlab.com:31753/bets', { useNewUrlParser: true })
.then(() => {
  console.log(`Succesfully Connected to the
  Mongodb Database  at URL : mongodb://127.0.0.1:27017/bet`)
})
.catch(() => {
  console.log(`Error Connecting to the Mongodb 
  Database at URL : mongodb://127.0.0.1:27017/bet`)
})


//Use the Routes
app.use('/', indexRouter);
//Use the API routes for all routes matching /api

app.use('/api', apiRouter);


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
