var express        = require('express');
var cors           = require('cors');
var path           = require('path');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var passport       = require('passport');
var cookieParser   = require("cookie-parser");
var methodOverride = require("method-override");
var jwt            = require('jsonwebtoken');
var oauthshim      = require('./config/shim');
var creds          = require("./config/credentials")
var expressJWT     = require('express-jwt');
var app            = express();

// twitterDevelopment
var server         = require('http').createServer(app);
var port           = process.env.PORT || 3000;
var Twit           = require('twit');
var io             = require('socket.io').listen(server);


// twitterDevelopment
var config         = require('./config/config');
var User           = require('./models/user');
var secret         = require('./config/config').secret;

mongoose.connect(config.database);

require('./config/passport')(passport);

// Define a path where to put this OAuth Shim
app.all('/proxy', oauthshim);

// Initiate the shim with credentials
oauthshim.init(creds);

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());

app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
    { url: '/api/login',    methods: ['POST'] },
    { url: '/api/register', methods: ['POST'] },
    { url: '/api/twitter',  methods: ['POST'] },
    { url: '/api/articles', methods: ['GET'] },
    { url: '/proxy',        methods: ['GET'] },
    ]
  }));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({message: 'Unauthorized request.'});
  }
  next();
});

/////////////////////////////////////////////////////
app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});
/////////////////

var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream;

io.on('connect', function(socket){
  console.log("connected")
  if (stream) {
    stream.stop();
    stream = null;
  }

  socket.on('updateSearch', function (hashtags) {
    // console.log(hashtags)
    if (stream) {
      stream.stop();
      stream = null;
    }

    stream = twitter.stream("statuses/filter", { track: hashtags, lang: "en" });
    stream.on('tweet',function(tweet){
      console.log(tweet);
      io.emit('tweets', tweet);
    })
  });

  socket.on('stopSearch', function() {
    if (stream) {
      stream.stop();
      stream = null;
    }
  })
});

//////////////////////////////////////////////////

var routes = require('./config/routes');
app.use("/api", routes);

server.listen(3000);
console.log("server is running")