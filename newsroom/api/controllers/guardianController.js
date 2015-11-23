var request = require('request');

var api_key = "27p9pvgpraxcfgkexvesemun"
var url = 'theguardian.com';

// Get requiest 10 articles

function getArticals(){
  request('http://content.guardianapis.com/search?api-key=' + api_key , function (err, message, data) {
    if(err) return console.log (err)
    if (!err && message.statusCode == 200) {
      var newsFeed = data.response.results 
      console.log(newsFeed);
    }
  });
}

getArticals()