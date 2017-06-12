
// DEPENDENCIES // 
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var mongoose = require('mongoose');
var colors = require('colors');
var config = require('./webpack.config.js');
var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// DATABASE //
console.log(colors.yellow("\nConnecting to database..."))
mongoose.connect('mongodb://127.0.0.1/TodoDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, colors.red('connection error:') ) );
db.once('open', function(){
    console.log(colors.green("Connected to database!") );
})


// HOT MODULE RELOADING //
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

// ROUTING //
app.use(express.static(__dirname + '/dist')); 
app.use(express.static(__dirname + '/public')); 

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})

app.post('/', function (req, res) {
    console.log(req.body);
  res.send('POST request to homepage');
});


// START SERVER //
const PORT = 3000;

app.listen(PORT, function () {
  console.log( colors.green('Listening on port '+PORT) );
})