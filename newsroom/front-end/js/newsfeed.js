<<<<<<< HEAD
//Ajax get request to localhost:3000/api/articles 

//Loop trough the them and display them on the site 
//  -Make html mockup in javascript to display articles 

=======
>>>>>>> bd99f21855a51e8ecdbb8d485888cbc6b62dfb5b
$(init)


function init() {
  ajaxRequest
}

function loop(data){
  var i = 0;
  for (i; i < data.length; i++) {
<<<<<<< HEAD
  appendArticle(data[i]); 
  }
}

function appendArticle(data) {
  console.log(data)
  $('#newsfeed_ul').append('<li><div class="collapsible-header"><h4>' + data.article.title +
    '</h4></div><div class="collapsible-body"><p>'+data.article.article+'</p><img src=' + data.article.image+'></div></li>')
}

=======
  appendArticle(data[i]);
  // showHashes(data[i]) 
  }
}
var count = 0;
function appendArticle(data) {
  count ++;
  $('#newsfeed_ul').append('<li><div class="collapsible-header"><h4>' + data.article.title +
    '</h4></div><div class="collapsible-body"><p>'+data.article.article+'</p><img src=' + data.article.image+'><div id="hashtags_'+count+'"></div></div></li>')
  var i = 0;
  for (i; i<data.hashtags.hashtags.length; i++) {
    $('#hashtags_'+count).append("<p>" + data.hashtags.hashtags[i] + "</p><button>Start Twitter</button")
  }
}

// function showHashes(data) {
//   console.log(data)
//   var test = $('#test')
//   test.append(data)
// }

>>>>>>> bd99f21855a51e8ecdbb8d485888cbc6b62dfb5b
function ajaxRequest() {
  return $.ajax({
    method: "get",
    url: "http://localhost:3000/api/articles",
  }).done(function(data){
<<<<<<< HEAD
  
=======
  console.log(data)
>>>>>>> bd99f21855a51e8ecdbb8d485888cbc6b62dfb5b
    return loop(data)
  }).fail(function(data) {
    displayErrors(data.responseJSON.message);
  });
}