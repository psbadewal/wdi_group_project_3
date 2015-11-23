var request = require('request');

var api_key = process.env.THEGUARDIAN_NEWS_API

// Get requiest 10 articles
function getArticles(){
  request('http://content.guardianapis.com/search?api-key=' + api_key , function (err, data) {
    if(err) return console.log (err)
    if (!err && data.statusCode == 200) {
      var dataObject = JSON.parse(data.body)
      var i = 0;
      for (i;i<dataObject.response.results.length;i++){
         console.log(dataObject.response.results[i].webUrl)
      }
    }
  });
}

getArticles()