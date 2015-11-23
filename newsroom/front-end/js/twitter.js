$(function(){
  var socket = io('http://localhost:3000/');

  socket.on('connect', function(tweet){
   console.log("Connected!");
  });

  socket.on('tweets', function(tweet){
   console.log(tweet)
  });
});