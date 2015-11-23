// module.export = function(){

//   var Twit           = require('twit');
//   var twitter = new Twit({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token: process.env.TWITTER_ACCESS_TOKEN,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//   });

//   var stream = twitter.stream("statuses/filter", { track: ["#london", "#paris"] });

//   io.on('connect', function(socket){
//     console.log("connected")
//     stream.on('tweet',function(tweet){
//       io.emit('tweets', tweet);
//     })
//   });
// };
