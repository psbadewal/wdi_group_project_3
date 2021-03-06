///USERS JAVASCRIPT
$(init);

function init(){
  $("#front-slider").on("click", loginEverywhere)
  $("form").on("submit", submitForm);
  $(".logout-link").on("click", logout);
  $(".users-link").on("click", users);
  $(".login-link, .register-link").on("click", showPage);
  hideErrors();
  checkLoginState();  
}

function loginEverywhere(){
  console.log("Clicked on the main page")
  $('#login').openModal();
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
  $('#agree-button').trigger("click")
  $('#agree-button-login').trigger("click")

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
  $("#article-dropdown").show();
  $(".home-page").hide();
  return getUsers();
}

function loggedOutState(){
  $(".logged-in").hide();
  $(".home-page").show();
  $("section").hide();
  $(".logged-out").show();
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

////////////

$(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal();


 });



