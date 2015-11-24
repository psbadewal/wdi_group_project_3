$(init)


function init() {
  ajaxRequest
}

function loop(data){
  var i = 0;
  for (i; i < data.length; i++) {
  appendArticle(data[i]);
  // showHashes(data[i]) 
  }
}
var count = 0;
function appendArticle(data) {
  count ++;
  $('#newsfeed_ul').append('<li><div class="collapsible-header"><h4>' + data.article.title +
    '</h4></div><div class="collapsible-body"><p>'+data.article.article+'</p><img src=' + data.article.image+'><div id="hashtags_'+count+'"><button id="twitter-button">Start Twitter</button</div></div></li>')

  $( '#twitter-button' ).on("click", twitterStreamStart)

  var i = 0;
  for (i; i<data.hashtags.hashtags.length; i++) {
    $('#hashtags_'+count).append("<p>" + data.hashtags.hashtags[i] + "</p>")
  }
}


function twitterStreamStart(){
  var socket = io('http://localhost:3000/');

  socket.on('connect', function(tweet){
   console.log("Connected!");
  });

  socket.on('tweets', function(tweet){
   console.log(tweet)
  });
};

// function showHashes(data) {
//   console.log(data)
//   var test = $('#test')
//   test.append(data)
// }

function ajaxRequest() {
  return $.ajax({
    method: "get",
    url: "http://localhost:3000/api/articles",
  }).done(function(data){
  console.log(data)
    return loop(data)
  }).fail(function(data) {
    displayErrors(data.responseJSON.message);
  });
}