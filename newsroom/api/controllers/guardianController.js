var request = require('request');
var AYLIENTextAPI = require('aylien_textapi');

var guardian_api_key = process.env.THEGUARDIAN_NEWS_API

var textapi = new AYLIENTextAPI({
  application_id: process.env.AYLIEN_APPLICATION_ID,
  application_key: process.env.AYLIEN_KEY
});

// Get request 10 articles
function getArticles(req, res){
  var finalResults = [
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
},
{
  "url": "http://www.theguardian.com/world/live/2015/nov/24/russian-jet-downed-by-turkish-planes-near-syrian-border-live-updates",
  "article": {
    "author": "Matthew Weaver",
    "image": "",
    "article": "President Erdogan was said to be especially annoyed that he was not consulted about Russia’s intentions during his visit to Moscow in September when he met President Vladimir Putin.\n\nTurkey has a long history of tension with Russia over unresolved disputes such as Moscow’s support for Nagorno-Karabakh, the Armenian-controlled breakaway enclave in Azerbaijan.\n\nOttoman Turkey and Tsarist Russia fought a war in 1877-78. And Stalin briefly laid claim to parts of eastern Turkey at the end of the Second World War.\n\nBut ties have improved in recent times, with a series of energy and trade deals. Russia is now Turkey’s second-largest trading partner and 60% of its natural gas comes from Russia.\n\nEconomic dependence is one powerful reason, among several, why Erdogan will not want this latest border incident to escalate into a wider confrontation – although this is something that may not be entirely within his control.\n\nSergei Lavrov, Russia’s foreign minister, is due to visit Ankara on Wednesday for bilateral talks. Turkish officials said the visit would go ahead as planned, even as they consult with Nato in Brussels. There will be much to discuss.",
    "videos": [],
    "title": "Russian fighter jet downed near Turkey-Syria border – live updates",
    "feeds": []
  },
  "hashtags": {
    "language": "en",
    "hashtags": [
    "#Russia",
    "#Turkey",
    "#Moscow",
    "#Brussels",
    "#WorldWarII",
    "#Azerbaijan",
    "#RussianEmpire",
    "#SergeyLavrov",
    "#VladimirPutin",
    "#FighterAircraft",
    "#NaturalGas",
    "#Ankara",
    "#NagornoKarabakh"
    ]
  }
}
];
  return res.status(200).json(finalResults);
}

// function getArticles(req, res){
//   request('http://content.guardianapis.com/search?api-key=' + guardian_api_key, function (err, data) {
//     if (err) return console.log (err);

//     if (!err && data.statusCode === 200) {
//       var dataObject = JSON.parse(data.body)
//       var apiResults = dataObject.response.results

//       apiResults.forEach(function(result) {
//         var url = apiResults[0].webUrl;
//         var numberOfResults = apiResults.length;
//         aylienCombined(req, res, url, numberOfResults);
//       });
//     }
//   })
// }

// var finalResults = [];

// function returnJSON(req, res, url, results, numberOfResults) {
//   if (!url && !results) return res.status(200).json({ message: "There was an error " });

//   finalResults.push({
//     url: url,
//     article: results[0].result,
//     hashtags: results[1].result
//   });

//   // Should finish on 10 10
//   console.log(finalResults.length, numberOfResults);

//   while (finalResults.length !== numberOfResults) return false;
//   return res.status(200).json(finalResults);
// }

// function aylienCombined(req, res, url, numberOfResults) {
//   textapi.combined({
//     url: url,
//     "endpoint": ["extract", "hashtags"]
//   }, function(error, result) {
//     if (error === null) {
//       returnJSON(req, res, url, result.results, numberOfResults)
//     } else {
//       returnJSON(req, res, null, null, numberOfResults)
//     }
//   })
// }


module.exports = {
  getArticles:  getArticles
}