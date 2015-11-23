var request = require('request');

var api_key = process.env.THEGUARDIAN_NEWS_API

// Get requiest 10 articles
function getArticles(req, res){
  request('http://content.guardianapis.com/search?api-key=' + api_key , function (err, data) {
    if(err) return console.log (err)
    if (!err && data.statusCode == 200) {
      var dataObject = JSON.parse(data.body)
      res.status(200).json({ dataObject: dataObject });
      var i = 0;
      for (i;i<dataObject.response.results.length;i++){
         console.log(dataObject.response.results[i].webUrl)
      }
    }
  });
}
module.exports = {
  getArticles: getArticles
}