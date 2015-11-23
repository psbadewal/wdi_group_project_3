$(startup);

function startup(){
  var apiKey = "..."
  ajaxRequest(apiKey, callbackFunction)
}

function ajaxRequest(key, callback){
  return $.ajax({
    method: "get",
    url: "http://content.guardianapis.com/search?api-key=" + key,
  }).done(function(data){
    callback(data)
  })
}

function callbackFunction(data){
  var newsFeed = data.response.results;
  var i = 0;
  for (i;i<newsFeed.length;i++){
    console.log(newsFeed[i].webTitle)
  }
}

// function ajaxRequest(method, url, data, callback) {
//   return $.ajax({
//     method: method,
//     url: url,
//     data: data,
//     beforeSend: setRequestHeader,
//   }).done(function(data){
//     if (callback) return callback(data);
//   }).fail(function(data) {
//     displayErrors(data.responseJSON.message);
//   });
// }
