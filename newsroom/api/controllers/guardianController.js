var request = require('request');
var AYLIENTextAPI = require('aylien_textapi');

var guardian_api_key = process.env.THEGUARDIAN_NEWS_API

var textapi = new AYLIENTextAPI({
  application_id: process.env.AYLIEN_APPLICATION_ID,
  application_key: process.env.AYLIEN_KEY
});

// Get request 10 articles
function getArticles(req, res){
  request('http://content.guardianapis.com/search?api-key=' + guardian_api_key, function (err, data) {
    if (err) return console.log (err);

    if (!err && data.statusCode === 200) {
      var dataObject = JSON.parse(data.body)
      var apiResults = dataObject.response.results

      apiResults.forEach(function(result) {
        var url = apiResults[0].webUrl;
        var numberOfResults = apiResults.length;
        aylienCombined(req, res, url, numberOfResults);
      });
    }
  })
}

var finalResults = [];
function returnJSON(req, res, url, results, numberOfResults) {
  if (!url && !results) return res.status(200).json({ message: "There was an error " });

  finalResults.push({
    url: url,
    article: results[0].result,
    hashtags: results[1].result
  });

  // Should finish on 10 10
  console.log(finalResults.length, numberOfResults);

  while (finalResults.length !== numberOfResults) return false;
  return res.status(200).json(finalResults);
}

function aylienCombined(req, res, url, numberOfResults) {
  textapi.combined({
    url: url,
    "endpoint": ["extract", "hashtags"]
  }, function(error, result) {
    if (error === null) {
      returnJSON(req, res, url, result.results, numberOfResults)
    } else {
      returnJSON(req, res, null, null, numberOfResults)
    }
  })
}

function aylienArticle(){

}

function aylienHashtags(){
  
}


module.exports = {
  getArticles:  getArticles
}