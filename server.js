
// DEPENDENCIES // 
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var flash = require('connect-flash');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var mongoose = require('mongoose');
var colors = require('colors');
var config = require('./webpack.config.js');
var app = express();


const Todo = require("./src/models/todo");


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cookieParser());
app.use(session({
  secret: "anystringoftext",
  saveUninitialized: true,
  resave: true
}));

passport.use(new FacebookStrategy({
    clientID: "1069014643231376",
    clientSecret: "9444b312cd76258791a90d3be85bed54",
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
  }
));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



// DATABASE //
let uri = "mongodb://adam:J3W5G5zKcV94xsuJ@cluster0-shard-00-00-j5zaf.mongodb.net:27017,cluster0-shard-00-01-j5zaf.mongodb.net:27017,cluster0-shard-00-02-j5zaf.mongodb.net:27017/TodoAPP?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
console.log(colors.yellow("\nConnecting to database..."))
mongoose.connect(uri);

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

require('./routes')(app, passport);


// START SERVER //
const PORT = 8080;

app.listen(PORT, function () {
  console.log( colors.green('Listening on port '+PORT) );
})