var passport = require("passport");
var User     = require('../models/user');
var secret   = require('../config/config').secret 
var jwt      = require('jsonwebtoken');

function register(req, res, next) {
  var localStrategy = passport.authenticate('local-signup', function(err, user, info) {
    if (err) return res.status(500).json({ message: 'Something went wrong!' });
    if (info) return res.status(401).json({ message: info.message });
    if (!user) return res.status(401).json({ message: 'User already exists!' });

    // User has authenticated so issue token 
    var token = jwt.sign(user, secret, { expiresIn: 60*60*24 });

    // Send back the token to the front-end to store
    return res.status(200).json({ 
      success: true,
      message: "Thank you for authenticating",
      token: token,
      user: user
    });
  });

  return localStrategy(req, res, next);
};


function login(req, res, next) {
  User.findOne({
    "local.email": req.body.email
  }, function(err, user) {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(403).json({ message: 'No user found.' });
    if (!user.validPassword(req.body.password)) return res.status(403).json({ message: 'Authentication failed.' });

    var token = jwt.sign(user, secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      success: true,
      message: 'Welcome!',
      token: token,
      user: user
    });
  });
};

function twitter(req, res, next){
  var profile = req.body;
  console.log(profile)

  var access_token = profile.access_token;
  if (!access_token) return res.status(500).json({ message: 'No Access Token provided.' });

  // Searching by twitter id, not email as twitter doesn't give emails
  User.findOneAndUpdate({ 
    'twitter.id' : profile.id 
  }, {
    'twitter.access_token' : profile.access_token
  }, function(err, user) {
    console.log(err)
    if (err) return res.status(500).json({ message: 'Something went wrong. '});

    // Return existing user
    if (user) {
      var token = jwt.sign(user, secret, { expiresIn: 60*60*24 });

      return res.status(200).json({
        success: true,
        message: 'Welcome!',
        token: token,
        user: user
      });
    }

    // Create new user
    var newUser                  = new User();
    newUser.twitter.id           = profile.id;
    newUser.twitter.access_token = profile.access_token;
    newUser.twitter.screen_name  = profile.screen_name;
    newUser.twitter.location     = profile.location;
    newUser.twitter.description  = profile.description;
    newUser.twitter.first_name   = profile.first_name;
    newUser.twitter.last_name    = profile.last_name;

    newUser.local.firstName      = profile.first_name;
    newUser.local.lastName       = profile.last_name;

    // Giving a password for mandatory field -> It will not be used.
    newUser.local.email          = "temp" + profile.access_token + "@twitter.com";
    newUser.local.password       = profile.access_token;

    return newUser.save(function(err, user) {
      if (err) return res.status(500).json({ message: 'Something went wrong.' });
      var token = jwt.sign(user, secret, { expiresIn: 60*60*24 });

      return res.status(200).json({
        success: true,
        message: 'Welcome!',
        token: token,
        user: user
      });
    });
  });
}

module.exports = {
  login:    login,
  register: register,
  twitter:  twitter
}

