$(function(){
  Newsfeed.ajaxRequest();
  Newsfeed.twitterStreamStart();
  var socket = io('http://localhost:3000/');

  $("#twitter-feed").hide();

  $('body').on("click", ".twitter-button", function(){
    $("#twitter-feed").empty();
    $(".wait").show();
    var hashArray   = $(this).siblings().text().split(/(?=#)/);
    console.log(hashArray)

    socket.emit('updateSearch', hashArray);
    $("#twitter-overlay").trigger("click");

  })

  setTimeout(function(){
    $(".rotate").textrotator({
      animation: "flip", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 2000 // How many milliseconds until the next word show.    
    })

  }, 10)


  });

  $("#stopSearch").on("click", function(){
    socket.emit('stopSearch');
  });
})

var Newsfeed = Newsfeed || {};

Newsfeed.loop = function(data){
  $.each(data, function(index, article) {
    Newsfeed.appendArticle(article, index);
  })
}

Newsfeed.appendArticle = function(data, index) {
  $('#newsfeed_ul').append('<div class="col s12 m6"><div class="card"><div class="card-image waves-effect waves-block waves-light"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4"><img src=' + data.article.image+'>'
    + data.article.title + 
   '<i class="material-icons right"></i><div id="twitterBox"></span><div id="hashTagContainer"></div><button class="twitter-button"><span class="rotate eighty" id="hashtags_'+index+'"></span><span class="twenty"><i class="fa fa-twitter fa-2x"></i></span></button></div></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'
  + data.article.title + 
    '<i class="material-icons right">X</i></span><p>'+data.article.article+'</div></div></div>')

  $.each(data.hashtags.hashtags, function(i, hashtag) {
    $('#hashtags_'+index).append(hashtag+",")
    // document.getElementById("hashtags_").innerHTML = data.hashtags.hashtags.toString();
  })
}

Newsfeed.twitterStreamStart = function(){
  var socket = io('http://localhost:3000/');


  socket.on('connect', function(tweet){
   console.log("Connected with twitter!");
 });

  var count = 0;
  socket.on('tweets', function(tweet){
    $("#twitter-feed").show();
    $(".wait").fadeOut();

    count ++;
    console.log(count)
    console.log(tweet)


    var html = '<div class="row"><div class="col-md-6 col-md-offset-3 tweet"><img class="twitter-pic" src="' + tweet.user.profile_image_url + '" class="avatar pull-left"/><div class="names"><span class="full-name">' + tweet.user.name + ' </span><span class="username">@' +tweet.user.screen_name + '</span></div><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div>';
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