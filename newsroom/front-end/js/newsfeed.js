//Ajax get request to localhost:3000/api/articles 

//Loop trough the them and display them on the site 
//  -Make html mockup in javascript to display articles 

$(init)


function init() {
  ajaxRequest
}

function loop(data){
  var i = 0;
  for (i; i < data.length; i++) {
  appendArticle(data[i]); 
  }
}

function appendArticle(data) {
  console.log(data)
  $('#newsfeed_ul').append('<li><div class="collapsible-header"><h4>' + data.article.title +
    '</h4></div><div class="collapsible-body"><p>'+data.article.article+'</p><img src=' + data.article.image+'></div></li>')
}

function ajaxRequest() {
  return $.ajax({
    method: "get",
    url: "http://localhost:3000/api/articles",
  }).done(function(data){
  
    return loop(data)
  }).fail(function(data) {
    displayErrors(data.responseJSON.message);
  });
}