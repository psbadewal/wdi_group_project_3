///USERS JAVASCRIPT
$(init);

function init(){
  $("form").on("submit", submitForm);
  $(".logout-link").on("click", logout);
  $(".users-link").on("click", users);
  $(".login-link, .register-link, .users-link").on("click", showPage);
  hideErrors();
  checkLoginState();  
}

function checkLoginState(){
  if (getToken()) {
    return loggedInState();
  } else {
    return loggedOutState();
  }
}

function showPage() {
  event.preventDefault();
  var linkClass = $(this).attr("class").split("-")[0]
  $("section").hide();
  hideErrors();
  return $("#" + linkClass).show();
}

function submitForm(){
  event.preventDefault();

  var method = $(this).attr("method");
  var url    = "http://localhost:3000/api" + $(this).attr("action");
  var data   = $(this).serialize();

  return ajaxRequest(method, url, data, authenticationSuccessful);
}

function users(){
  event.preventDefault();
  return getUsers();
}

function logout(){
  event.preventDefault();
  removeToken();
  return loggedOutState();
}

function getUsers(){
  return ajaxRequest("get", "http://localhost:3000/api/users", null, displayUsers)
}

function displayUsers(data){
  hideErrors();
  hideUsers();
  return $.each(data.users, function(index, user) {
    $(".users").prepend('<div class="media">' +
                          '<div class="media-left">' +
                          
                          '</div>' +
                          '<div class="media-body">' +
                            '<h4 class="media-heading">@' + user.local.firstName + '</h4>' +
                            '<p>' + user.local.lastName + '</p>'+
                          '</div>' +
                        '</div>');
  });
}

function hideUsers(){
  return $(".users").empty();
}

function hideErrors(){
  return $(".alert").removeClass("show").addClass("hide");
}

function displayErrors(data){
  return $(".alert").text(data).removeClass("hide").addClass("show");
}

function loggedInState(){
  $("section").hide();  //log-out button shows
  $(".logged-out").hide();
  // $("#users").hide(); 
  $(".logged-in").show(); //log-out button
  $("#article-dropdown").show()
  return getUsers();
}

function loggedOutState(){
  $(".logged-in").hide();
  $("section").show();
  $("logged-out").hide();
  $("#register").hide();
  $("#article-dropdown").hide()
  return hideUsers();
}

function authenticationSuccessful(data) {
  if (data.token) setToken(data.token);
  return checkLoginState();
}

function setToken(token) {
  return localStorage.setItem("token", token)
}

function getToken() {
  return localStorage.getItem("token");
}

function removeToken() {
  return localStorage.clear();
}

function setRequestHeader(xhr, settings) {
  var token = getToken();
  if (token) return xhr.setRequestHeader('Authorization','Bearer ' + token);
}

function ajaxRequest(method, url, data, callback) {
  return $.ajax({
    method: method,
    url: url,
    data: data,
    beforeSend: setRequestHeader,
  }).done(function(data){
    if (callback) return callback(data);
  }).fail(function(data) {
    displayErrors(data.responseJSON.message);
  });
}


//NEWS FEED API
function initTwo() {
  ajaxRequestGet()
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
    '</h4></div><div class="collapsible-body"><p>'+data.article.article+'</p><img src=' + data.article.image+'><div id="hashtags_'+count+'"><button class="btn" id="twitter-button">Start Twitter</button></div></div><div id="twitter-area"></div></li>')

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
   var html = '<div class="row"><div class="col-md-6 col-md-offset-3 tweet"><img src="' + tweet.user_profile_image + '" class="avatar pull-left"/><div class="names"><span class="full-name">' + tweet.name + ' </span><span class="username">@' +tweet.screen_name + '</span></div><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div>';
    $('#twitter-area').prepend(html)
  });
};


function ajaxRequestGet() {
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

