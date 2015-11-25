$(function(){
  Newsfeed.ajaxRequest();
  Newsfeed.twitterStreamStart();

  $('body').on("click", ".twitter-button", function(){
    var hashArray   = $(this).siblings().text().split(/(?=#)/);
    var twitterArea = $(this).parent().next().attr("id");
    var socket = io('http://localhost:3000/');
    socket.emit('updateSearch', [hashArray, twitterArea]);
  })
})

var Newsfeed = Newsfeed || {};

Newsfeed.loop = function(data){
  return $.each(data, function(index, article) {
    Newsfeed.appendArticle(article, index);
  })
}

Newsfeed.appendArticle = function(data, index) {
  $('#newsfeed_ul').append('<li><div class="collapsible-header"><h4>' + data.article.title +
    '</h4></div><div class="collapsible-body"><p>'+data.article.article+'</p><img src=' + data.article.image+'><div id="hashtags_'+index+'"><button class="twitter-button">Start Twitter</button></div><div id="twitter-area_'+index+'"></div></div></li>')

  $.each(data.hashtags.hashtags, function(i, hashtag) {
    $('#hashtags_'+index).append("<p>" + data.hashtags.hashtags[i] + "</p>")
  })
}

Newsfeed.sendHash = function(hashArray){

  Newsfeed.twitterStreamStart();
}

Newsfeed.twitterStreamStart = function(){
  var socket = io('http://localhost:3000/');

  socket.on('connect', function(tweet){
   console.log("Connected!");
 });

  socket.on('tweets', function(array){
    var tweet       = array[0];
    var twitterArea = array[1];
    var html = '<div class="row"><div class="col-md-6 col-md-offset-3 tweet"><img src="' + tweet.user.profile_image_url + '" class="avatar pull-left"/><div class="names"><span class="full-name">' + tweet.user.name + ' </span><span class="username">@' +tweet.user.screen_name + '</span></div><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div>';
    $("#" + twitterArea).prepend(html);
  });
};

Newsfeed.showHashes = function(data) {
  console.log(data)
  var test = $('#test')
  test.append(data)
}

Newsfeed.ajaxRequest = function() {
  $.ajax({
    method: "get",
    url: "http://localhost:3000/api/articles",
  }).done(function(data){
    return Newsfeed.loop(data)
  }).fail(function(data) {
    displayErrors(data.responseJSON.message);
  });
}
