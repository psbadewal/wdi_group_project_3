var request = require('request');
var AYLIENTextAPI = require('aylien_textapi');

var guardian_api_key = process.env.THEGUARDIAN_NEWS_API

var textapi = new AYLIENTextAPI({
  application_id: process.env.AYLIEN_APPLICATION_ID,
  application_key: process.env.AYLIEN_KEY
});

var articles = []

// Get requiest 10 articles
function getArticles(req, res){
  request('http://content.guardianapis.com/search?api-key=' + guardian_api_key, function (err, data) {
    if(err) return console.log (err)
      if (!err && data.statusCode == 200) {
        var dataObject = JSON.parse(data.body)
        var dataObjectRes = dataObject.response.results

        var i = 0;
        for (i;i<dataObject.response.results.length;i++){
          var url = dataObject.response.results[i].webUrl;
          aylienArticle(req, res, url)
        }
     }
   })
res.status(200).json({ articles: articles });
}


function aylienArticle(req, res, url){
  textapi.extract({
    url: url,
    best_image: true
  }, function(error, response) {
    if (error === null) {
      console.log(response)
      articles.push(response)

    }
  });
}


// function aylienHashes(req,res,url){
//   textapi.hashtags({
//     url: url
//   }, function(error, response) {
//     if (error === null) {
//       // console.log(response.hashtags);
//       // return response
//     }
//   });
// }

module.exports = {
  getArticles:  getArticles
}