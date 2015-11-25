$(function(){
  Newsfeed.ajaxRequest();
  Newsfeed.twitterStreamStart();

  $("#twitter-feed").hide();

  $('body').on("click", ".twitter-button", function(){
    var hashArray   = $(this).siblings().text().split(/(?=#)/);
    var socket = io('http://localhost:3000/');
    socket.emit('updateSearch', hashArray);
  })
})

var Newsfeed = Newsfeed || {};

Newsfeed.loop = function(data){
  return $.each(data, function(index, article) {
    Newsfeed.appendArticle(article, index);
  })
}

Newsfeed.appendArticle = function(data, index) {
  $('#newsfeed_ul').append('<div class="col s12 m6"><div class="card"><div class="card-image waves-effect waves-block waves-light"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4"><img src=' + data.article.image+'>'
   + data.article.title + 
   '<i class="material-icons right"></i></span><p><a class="twitter-button" href="#">What Twitter says!</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'
  + data.article.title + 
    '<i class="material-icons right">X</i></span><p>'+data.article.article+'</p><div id="hashtags_'+index+'"></p></div></div></div>')

  $.each(data.hashtags.hashtags, function(i, hashtag) {
    $('#hashtags_'+index).append("<p>" + data.hashtags.hashtags[i] + "</p>")
  })
}

Newsfeed.twitterStreamStart = function(){
  var socket = io('http://localhost:3000/');

  socket.on('connect', function(tweet){
   console.log("Connected!");
 });

  var count = 0;
  socket.on('tweets', function(tweet){
    count ++;
    console.log(count)
    console.log(tweet)
    $("#twitter-feed").show();
    var html = '<div class="row"><div class="col-md-6 col-md-offset-3 tweet"><img src="' + tweet.user.profile_image_url + '" class="avatar pull-left"/><div class="names"><span class="full-name">' + tweet.user.name + ' </span><span class="username">@' +tweet.user.screen_name + '</span></div><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div>';
    $("#twitter-feed").append(html);
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