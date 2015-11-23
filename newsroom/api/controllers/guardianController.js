var request = require('request');
var AYLIENTextAPI = require('aylien_textapi');

var guardian_api_key = process.env.THEGUARDIAN_NEWS_API

var textapi = new AYLIENTextAPI({
  application_id: process.env.AYLIEN_APPLICATION_ID,
  application_key: process.env.AYLIEN_KEY
});



// Get requiest 10 articles
function getArticles(req, res){
  request('http://content.guardianapis.com/search?api-key=' + guardian_api_key , function (err, data) {
    if(err) return console.log (err)
      if (!err && data.statusCode == 200) {
        var dataObject = JSON.parse(data.body)

      //output to api
      // res.status(200).json({ dataObject: dataObject });

      var i = 0;
      for (i;i<dataObject.response.results.length;i++){
       var url = dataObject.response.results[i].webUrl
       //Get the text and picture of the article
       aylienAtricle(req, res, url)

       //Get the hashed of the article
       aylienHashes(req,res,url)
       
       //Put it all together in a json hash
     }
   }
 });
}

function aylienAtricle(req, res, url){
  textapi.extract({
    url: url,
    best_image: true
  }, function(error, response) {
    if (error === null) {
      return response;
    }
  });
}
function aylienHashes(req,res,url){

  textapi.hashtags({
    url: url
  }, function(error, response) {
    if (error === null) {
      console.log(response.hashtags);
    }
  });
}



module.exports = {
  getArticles:  getArticles
}