module.exports = [
  {
     name: "twitter",
     client_id: process.env.TWITTER_CONSUMER_KEY_LOGIN,
     client_secret: process.env.TWITTER_CONSUMER_SECRET_LOGIN,
     grant_url: "https://api.twitter.com/oauth/access_token",
     domain: "http://localhost:8000/"
   }
 ]