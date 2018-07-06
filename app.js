var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var schedule = require('node-schedule');
var qingqiu = require('./utility/updateToken')
var fs = require('fs')

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var token = "";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/MP_verify_5Wvcg0Pz0fw9WY2E.txt', function (req, res) {
    // res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(fs.readFileSync(__dirname + '/MP_verify_5Wvcg0Pz0fw9WY2E.txt'));
})
app.use('/', index);
app.use('/users', users);
app.get('/refreshToken', function (req, res, next) {
    qingqiu().then((d) => {
        token = JSON.parse(d);
        console.log("token:", token);
        res.sendStatus(200);
    }, err => {
        res.sendStatus(400);
    });
});
app.get('/getToken', function (req, res, next) {
    console.log('getToken:', token);
    res.send(token);
});

// app.get('/app', function (req, res, next) {
//     res.redirect('./dist/index.html');
// })

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

var j = schedule.scheduleJob('0 * * * *', function(){
    console.log('自动刷新token', new Date().getTime());
    qingqiu().then(d => {
        token = JSON.parse(d);
    });
});

qingqiu().then(res => {
    console.log("开始启动 - token:", token);
})
module.exports = app;
