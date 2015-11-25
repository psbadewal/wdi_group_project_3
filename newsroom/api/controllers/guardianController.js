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
"url": "http://www.theguardian.com/uk-news/2015/nov/25/uk-mail-boss-guy-buswell-departs-second-profits-warning",
"article": {
"author": "Sean Farrell",
"image": "",
"article": "The boss of UK Mail has left the parcels and logistics company a week after it issued a second profits warning in three months as a result of prolonged problems at its new automated delivery centre.\n\nThe company said Guy Buswell had stepped down with immediate effect and by mutual agreement. UK Mail’s founder and chairman, Peter Kane, will run the business while the board looks for a replacement.\n\nUK Mail issued a profit warning in August for the current year, blaming a glut of large parcels that its new hub in Ryton-on-Dunsmore, near Coventry, could not deal with. The problems led to a loss of customers and reduced volumes.\n\n\n\nIts interim dividend was cut by a quarter last week after profit more than halved in the first six months. Buswell said problems at Ryton meant next year’s profits would be worse than expected.\n\nKane said: “The board and I would like to thank Guy for his contribution to the company over the past 10 years in his role as chief executive and wish him well for the future.”\n\nBuswell joined UK Mail in 1989 and, after a spell working elsewhere, rejoined in 1997, becoming chief executive in 2005. Kane set up UK Mail, which competes with Royal Mail, 40 years ago and was chief executive before becoming chairman in 2001.\n\n\n\nUK Mail shares fell 3.4% to 309p and are down 41% since August’s profit warning.",
"videos": [],
"title": "UK Mail boss Guy Buswell departs after second profits warning",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#Kane",
"#RytonTyneAndWear",
"#RoyalMail",
"#RytononDunsmore",
"#Coventry"
]
}
},
{
"url": "http://www.theguardian.com/money/2015/nov/25/mortgage-lending-hit-seven-year-high-october-bba-borrowers",
"article": {
"author": "Hilary Osborne",
"image": "",
"article": "Britain’s banks lent more money through mortgages in October than at any point since the summer of 2008, figures show, as low interest rates and rising incomes tempted more people into the market.\n\nGross mortgage lending hit £12.9bn during the month, 26% higher than in October 2014 and the highest figure since August 2008, according to the latest data from the British Bankers’ Association (BBA).\n\nMortgage lending for house purchases slowed in the latter half of 2014, but has been growing again this year, and in October there were 77,951 approvals – 21% more than in the same month last year.\n\nRemortgaging was up by 34% year on year, at 24,275 approvals.\n\nThe BBA said the average value of mortgages approved for house purchases was £175,600, while remortgagers typically borrowed £172,800.\n\nRecent months have seen a price war among mortgage lenders, which has led to some of the cheapest deals on record. Borrowers looking to fix their mortgage for five years can pay as little as 2.14%, while those fixing for two years can get a rate as low as 1.15%.\n\nRichard Woolhouse, chief economist at the BBA, said: “These statistics show that housing market activity remained strong in October, with gross mortgage borrowing 26% higher than a year ago and at its highest level for seven years.\n\n“Consumers remain confident and their incomes are growing. Mortgage rates are at multi-year lows and people are snapping up the competitive deals being offered by banks.”\n\nPersonal loan rates have also been plummeting, leading to a rise in borrowing, which the Bank of England warned on Tuesday “ultimately might be an issue that the financial policy committee might want to look at fairly carefully”.\n\n\n\nThe BBA said that over the past year, net borrowing through personal loans had been rising at an annual rate of about 5%, with increased demand reflecting better credit availability, lower interest rates and stronger household finances.\n\nDuring October, £228m was borrowed through personal loans and overdrafts – more than double the £109m figure for September, but less than half the £494m worth of debt taken on in March.\n\nAnnual growth in high street banks’ credit card borrowing was 5% in October, the BBA said, exceeding the 3.9% growth in the wider credit card market.\n\nAcross the whole market, card use continued to rise, with 223m purchases in October, worth a total of £12.4bn. The BBA said 51m credit card accounts were open, and about two-thirds of these carried a balance.\n\nWhile personal loan rates are usually fixed for the term of borrowing, credit card rates are subject to change. Recently Barclaycard told its 10.5 million customers it was linking its interest rates to the Bank of England base rate, meaning any increase by the Bank will lead to higher costs.\n\nHoward Archer, chief UK economist at IHS Global Insight, said consumer credit had increased but “not raced ahead”.\n\nHowever, he added: “In considering borrowing, consumers need to allow for the fact that interest rates will likely start to rise during 2016, even if the increases are likely to be gradual and limited compared to past norms.”",
"videos": [],
"title": "Mortgage lending hit seven-year high in October",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#InterestRate",
"#Economics",
"#England",
"#Capitalism",
"#GlobalInsight",
"#Barclays",
"#FinancialPolicyCommittee"
]
}
},
{
"url": "http://www.theguardian.com/society/2015/nov/25/excess-winter-deaths-rose-more-than-150-43900-2014",
"article": {
"author": "Haroon Siddique",
"image": "",
"article": "\n\nThere were an estimated 43,900 excess winter deaths in England and Wales in 2014/15, a 15-year high attributed partly to the lack of effectiveness of last year’s flu vaccine.\n\nThe Office for National Statistics (ONS) figures show that the number of excess winter deaths rose by 151% compared with 2013/14, representing the biggest yearly increase since records began.\n\nThe average temperature last winter was 4.8C, 1.4 C lower than in 2014/15, but there have been lower averages in five out of the past 10 years. \n\n\n\nClaudia Wells, at the ONS, said that the rise in deaths could be attributed to problems with the flu vaccine last year, which were caused by a mismatch between the strain used to make the vaccine and that which emerged as the main threat.\n\n“What we saw is at the beginning of the winter, the flu vaccine was quoted to have quite a low effectiveness between 3% or 4%. By the end of the period it was quoted a 34% but that is still below what we would expect, which is at least 50% effectiveness. \n\n\n\n“It [flu] was associated with more deaths than we expected. As it wasn’t a particularly cold winter we do think it was probably down to ineffectiveness of the flu vaccine.”\n\nElderly people, individuals with low incomes in the UK (up to 9 million live in fuel poverty), those with mental health disabilities, babies and children under five, and pregnant women are considered vulnerable when the outside temperature drops below 6°C.\n\nThe majority of deaths (36,300) occurred among people aged 75 and over and respiratory diseases were the underlying cause of death in more than a third of cases. Circulatory diseases caused almost a quarter of all excess winter deaths and dementia and Alzheimer’s disease were responsible for more excess winter deaths (9,100) than ever before.\n\nThe ONS wrote: “The reasons for the seasonal pattern in deaths from dementia and Alzheimer’s disease are not clear. However, it may be related to the greater vulnerability of people with these conditions to respiratory diseases, difficulties with self-care, and falls, all of which may be more important in winter months.”\n\n\n\nThe excess winter mortality measure looks at deaths in the winter period (December to March), compared with those in the rest of the year.\n\nAs in previous years, there were more excess winter deaths in females than in males. Male excess winter deaths increased from 7,210 to 18,400, and female deaths from 10,250 to 25,500 between 2013/14 and 2014/15.\n\n\n\nJanet Morrison, Chief Executive of older people’s charity Independent Age, described the figures as shocking. She said: “Even discounting the impact of the flu, the figures are still far higher than in previous years.”\n\n“Councils, the government and energy companies need to help with things like insulating homes and assistance with energy bills for vulnerable customers. But there are also simple things we can all do like checking on our frail and elderly family and neighbours in cold weather. And making sure they are able to take-up their flu vaccination, wrap-up warm and eat well.”\n\nAt midday on Wednesday, National Pensioners Convention members will highlight the scale of winter deaths among the country’s older population by releasing one black balloon for every 1,000 people who died last winter from cold-related illnesses. The demonstration will take place at Westminster.\n\nNew NHS guidelines published in March said that plumbers, heating engineers and meter installers should alert the authorities when they visit a “dangerously cold home” in order to help reduce the toll of winter deaths\n\nThe excess winter mortality index was highest in the south-west in 2014/15 and joint lowest in Yorkshire and the Humber, and Wales.\n\n",
"videos": [],
"title": "Huge rise in winter deaths last year blamed on ineffective flu vaccine",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#Vaccination",
"#Wales",
"#Dementia",
"#FuelPoverty",
"#NHS",
"#NationalHealthService",
"#England",
"#TheOffice",
"#ClaudiaWells",
"#Yorkshire",
"#Westminster",
"#Humber"
]
}
},
{
"url": "http://www.theguardian.com/media/2015/nov/25/mail-online-us-almost-doubles-advertising-revenues",
"article": {
"author": "Mark Sweney",
"image": "",
"article": "The popularity of Mail Online’s US site is starting to translate into meaningful revenue with advertising growth of more than 60% in the last eight weeks – almost double the rate it has seen over the last year.\n\nMail Online derives 40% of its 212 million monthly unique users from US readers, more than view it in its home market in the UK, but to date the site’s scale has not been matched by the potential of advertising revenue generation.\n\nThe US site experienced 38% year-on-year revenue growth in parent company DMGT’s financial year to the end of September, making about £18m in advertising for the period.\n\nHowever, in the first eight weeks of its new financial year, Mail Online US has seen advertising revenue surge by 64%.\n\n“The US is the standout story in terms of growth,” said Stephen Daintith, finance chief at DMGT. “Over the last year there has been a concerted effort to raise the trade profile, the ad agency profile, of Mail Online in the US. There has been lots of TV coverage, much more than we see in the UK, which has raised awareness among media agencies and in their [advertising] buying schedules. The [scale of] audience in the US is now starting to deliver the rewards we expected.”\n\nHe added that initiatives such as a tie-up with Snapchat’s Discover service, which sees 10 stories carrying ads, and the development of e-commerce revenues have started to pay off.\n\nIt is perhaps the growth surge of the US-site that leads Daintith to hang on to the possibility of making £100m in ad revenues by the end of September 2016.\n\nMail Online missed its 2015 target of £80m, it made £73m in the year to the end of September, as year-on-year growth slowed from 41% to 18%.\n\n“We are very pleased with the progress we continue to make with Mail Online,” Daintith said. “We are well on our way to the £100m target [for 2016] that we set back in 2011. It is clearly an ambitious target, but we are not going to change it. We will work hard to get there but if we miss it by a little, it is not a disaster.”\n\nDaintith said that in the eight weeks of trading since DMGT’s financial year end in September, for only Mail Online – stripping out the very small revenue from Metro.co.uk which is usually included in Mail Online figures – ad growth has been running at 27%.\n\nThis is up on what Daintith said was a 23% figure for Mail Online-only ad revenues for the year to the end of September.\n\nThe officially reported growth figure for Mail Online of 18% for the year to the end of September includes Metro.co.uk, he said.\n\nMail Online derived about 66% of its £73m in total revenues from the UK in the year to the end of September, with 25% coming from the US and 9% the rest of the world.\n\nIn audience terms, the US is the biggest market accounting for 40% of monthly unique browsers, with 35% from the UK and 25% from the rest of the world.\n\nDMGT also shed some light on the performance of Elite Daily, the news and entertainment site acquired in January, which some media reports said has suffered a significant audience slump since the deal.\n\nDaintith said it has doubled revenues from $5m (£3.3m) to $10m over the last year and has brought on new advertisers, including Burger King, Delta Airlines and Captain Morgan Rum.\n\nIt is running at about 30 million unique monthly browsers, he said.\n\n“I think Elite Daily has had a really good start [under DMGT ownership],” Daintith said. “You get peaks and troughs in audience, just as we do on Mail Online, depending on the news of the day. It is difficult to look at just one or two months in isolation.”",
"videos": [],
"title": "Mail Online US almost doubles advertising growth",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#DailyMail",
"#Metro",
"#Snapchat",
"#Ecommerce",
"#BurgerKing",
"#DeltaAirLines"
]
}
},
{
"url": "http://www.theguardian.com/business/2015/nov/25/travel-industry-in-greatest-turmoil-in-30-years-after-paris-attacks-says-thomas-cook-boss",
"article": {
"author": "Sean Farrell",
"image": "",
"article": "The travel industry is facing the greatest turmoil in 30 years because of the recent series of incidents capped by the terrorist attacks on Paris, said Thomas Cook chief executive Peter Fankhauser.\n\nHe pointed to a “string of external shocks” including the killing of 38 holidaymakers in Tunisia in June and the bombing of a Russian plane flying from Egypt that killed all 224 people on board last month.\n\nThose terrorist attacks were followed by the murder of 130 people in Paris last week. International tensions increased on Tuesday when Turkish aircraft shot down a Russian fighter over Turkey’s border with Syria.\n\nFankhauser, who has run the tour operator for the past year, said: “There is an unprecedented level of disruption in [more] of our markets. In my 30 years in the industry I have never seen anything like it.”\n\nHe said Thomas Cook had experienced a fall in bookings from France and other European countries after the Paris attacks. But he said he expected confidence to return quickly, as it did after other incidents such as the deliberate crashing of a Germanwings passenger plane by its co-pilot in May.\n\n“If you have a shock like Tunisia or the Germanwings crash you have a decline in bookings because people don’t want to think about holidays immediately. The confidence is coming back quite soon. This is what we had in our experience of the last shocks.”\n\nHis comments echoed those made by Carolyn McCall, the boss of easyJet, who said last week that the budget airline had seen a drop-off in passengers flying in and out of France but that travel was such a big part of people’s lives that the desire to fly would resume soon.\n\nThomas Cook has cancelled flights to Egypt until December and Fankhauser said he would follow government instructions at a meeting scheduled for Wednesday. EasyJet and British Airways’ owner IAG have already delayed any flights to Egypt until January.\n\nFankhauser was talking as he unveiled Thomas Cook’s first annual net profit for five years, during which the company almost collapsed. He said Thomas Cook was at a turning point despite the turbulent backdrop.\n\n\n\nFor the year ended 30 September, Thomas Cook swung to a post-tax profit of £19m from a loss of £115m a year earlier. Pre-tax profit was £170m, compared with a loss of £114m the year before.\n\n\n\nThe company’s shares rose almost 10% to 108p.\n\nPerformance was driven by good business in the UK, where underlying earnings rose 42% to £119m. The current year has started well with strong winter holiday trading in the UK and northern Europe, the company said. The company is launching a new brand, Casa Cook, aimed at urban professionals as it seeks to move upmarket.\n\nAs well as facing financial problems and external shocks, Thomas Cook was beset by an outcry over its treatment of the family of two children who died at a hotel booked through the company in 2006. Christi and Bobby Shepherd were killed by carbon monoxide poisoning caused by a faulty boiler at a bungalow attached to a hotel in Corfu.\n\nAfter almost a decade during which the company kept the children’s parents at arm’s length, Fankhauser apologised in May and agreed to work with Sharon Wood and Neil Shepherd. Last week Thomas Cook launched a Safer Tourism Foundation with the support of Sharon Wood.\n\nFankhauser said: “The past year has also presented considerable challenges for Thomas Cook as we confronted the mistakes that were made following the deaths of Bobby and Christi Shepherd in Corfu nine years ago. The fact that I have got to this stage with Sharon says a lot about how far we have come.”",
"videos": [],
"title": "Travel industry in 'greatest turmoil in 30 years' after Paris attacks, says Thomas Cook boss",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#ThomasCook",
"#Paris",
"#Egypt",
"#France",
"#Corfu",
"#Russia",
"#Turkey",
"#Tunisia",
"#Germanwings",
"#EasyJet",
"#LowcostCarrier",
"#Syria",
"#CarbonMonoxidePoisoning",
"#BritishAirways"
]
}
},
{
"url": "http://www.theguardian.com/uk-news/2015/nov/25/uk-mail-boss-guy-buswell-departs-second-profits-warning",
"article": {
"author": "Sean Farrell",
"image": "",
"article": "The boss of UK Mail has left the parcels and logistics company a week after it issued a second profits warning in three months as a result of prolonged problems at its new automated delivery centre.\n\nThe company said Guy Buswell had stepped down with immediate effect and by mutual agreement. UK Mail’s founder and chairman, Peter Kane, will run the business while the board looks for a replacement.\n\nUK Mail issued a profit warning in August for the current year, blaming a glut of large parcels that its new hub in Ryton-on-Dunsmore, near Coventry, could not deal with. The problems led to a loss of customers and reduced volumes.\n\n\n\nIts interim dividend was cut by a quarter last week after profit more than halved in the first six months. Buswell said problems at Ryton meant next year’s profits would be worse than expected.\n\nKane said: “The board and I would like to thank Guy for his contribution to the company over the past 10 years in his role as chief executive and wish him well for the future.”\n\nBuswell joined UK Mail in 1989 and, after a spell working elsewhere, rejoined in 1997, becoming chief executive in 2005. Kane set up UK Mail, which competes with Royal Mail, 40 years ago and was chief executive before becoming chairman in 2001.\n\n\n\nUK Mail shares fell 3.4% to 309p and are down 41% since August’s profit warning.",
"videos": [],
"title": "UK Mail boss Guy Buswell departs after second profits warning",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#Kane",
"#RytonTyneAndWear",
"#RoyalMail",
"#RytononDunsmore",
"#Coventry"
]
}
},
{
"url": "http://www.theguardian.com/money/2015/nov/25/mortgage-lending-hit-seven-year-high-october-bba-borrowers",
"article": {
"author": "Hilary Osborne",
"image": "",
"article": "Britain’s banks lent more money through mortgages in October than at any point since the summer of 2008, figures show, as low interest rates and rising incomes tempted more people into the market.\n\nGross mortgage lending hit £12.9bn during the month, 26% higher than in October 2014 and the highest figure since August 2008, according to the latest data from the British Bankers’ Association (BBA).\n\nMortgage lending for house purchases slowed in the latter half of 2014, but has been growing again this year, and in October there were 77,951 approvals – 21% more than in the same month last year.\n\nRemortgaging was up by 34% year on year, at 24,275 approvals.\n\nThe BBA said the average value of mortgages approved for house purchases was £175,600, while remortgagers typically borrowed £172,800.\n\nRecent months have seen a price war among mortgage lenders, which has led to some of the cheapest deals on record. Borrowers looking to fix their mortgage for five years can pay as little as 2.14%, while those fixing for two years can get a rate as low as 1.15%.\n\nRichard Woolhouse, chief economist at the BBA, said: “These statistics show that housing market activity remained strong in October, with gross mortgage borrowing 26% higher than a year ago and at its highest level for seven years.\n\n“Consumers remain confident and their incomes are growing. Mortgage rates are at multi-year lows and people are snapping up the competitive deals being offered by banks.”\n\nPersonal loan rates have also been plummeting, leading to a rise in borrowing, which the Bank of England warned on Tuesday “ultimately might be an issue that the financial policy committee might want to look at fairly carefully”.\n\n\n\nThe BBA said that over the past year, net borrowing through personal loans had been rising at an annual rate of about 5%, with increased demand reflecting better credit availability, lower interest rates and stronger household finances.\n\nDuring October, £228m was borrowed through personal loans and overdrafts – more than double the £109m figure for September, but less than half the £494m worth of debt taken on in March.\n\nAnnual growth in high street banks’ credit card borrowing was 5% in October, the BBA said, exceeding the 3.9% growth in the wider credit card market.\n\nAcross the whole market, card use continued to rise, with 223m purchases in October, worth a total of £12.4bn. The BBA said 51m credit card accounts were open, and about two-thirds of these carried a balance.\n\nWhile personal loan rates are usually fixed for the term of borrowing, credit card rates are subject to change. Recently Barclaycard told its 10.5 million customers it was linking its interest rates to the Bank of England base rate, meaning any increase by the Bank will lead to higher costs.\n\nHoward Archer, chief UK economist at IHS Global Insight, said consumer credit had increased but “not raced ahead”.\n\nHowever, he added: “In considering borrowing, consumers need to allow for the fact that interest rates will likely start to rise during 2016, even if the increases are likely to be gradual and limited compared to past norms.”",
"videos": [],
"title": "Mortgage lending hit seven-year high in October",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#InterestRate",
"#Economics",
"#England",
"#Capitalism",
"#GlobalInsight",
"#Barclays",
"#FinancialPolicyCommittee"
]
}
},
{
"url": "http://www.theguardian.com/uk-news/2015/nov/25/spending-review-autumn-statement-ministers-body-language-might-tell-us",
"article": {
"author": "Andrew Sparrow",
"image": "",
"article": "Here are some pictures of ministers arriving and leaving Number 10 for today’s autumn statement cabinet meeting.\n\nTheresa May, the home secretary, is braced for cuts - and did not look overly cheerful.\n\nHealth is getting more money, which may be why Jeremy Hunt looked more upbeat.\n\nThe Department for Business is expecting cuts. Here’s Sajid Javid, the business secretary, and Priti Patel, the employment minister.\n\nGod knows what’s happening to the small business budget, but Anna Soubry, the small business minister, looks like she’s had a shock.\n\nUnlike David Cameron who looks, well, as smug as ever ...",
"videos": [],
"title": "Spending review: what ministers' body language might tell us",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#PritiPatel",
"#SecretaryOfStateForBusinessInnovationAndSkills",
"#TheresaMay",
"#SajidJavid",
"#JeremyHunt",
"#DavidCameron",
"#AnnaSoubry"
]
}
},
{
"url": "http://www.theguardian.com/media/2015/nov/25/mail-online-us-almost-doubles-advertising-revenues",
"article": {
"author": "Mark Sweney",
"image": "",
"article": "The popularity of Mail Online’s US site is starting to translate into meaningful revenue with advertising growth of more than 60% in the last eight weeks – almost double the rate it has seen over the last year.\n\nMail Online derives 40% of its 212 million monthly unique users from US readers, more than view it in its home market in the UK, but to date the site’s scale has not been matched by the potential of advertising revenue generation.\n\nThe US site experienced 38% year-on-year revenue growth in parent company DMGT’s financial year to the end of September, making about £18m in advertising for the period.\n\nHowever, in the first eight weeks of its new financial year, Mail Online US has seen advertising revenue surge by 64%.\n\n“The US is the standout story in terms of growth,” said Stephen Daintith, finance chief at DMGT. “Over the last year there has been a concerted effort to raise the trade profile, the ad agency profile, of Mail Online in the US. There has been lots of TV coverage, much more than we see in the UK, which has raised awareness among media agencies and in their [advertising] buying schedules. The [scale of] audience in the US is now starting to deliver the rewards we expected.”\n\nHe added that initiatives such as a tie-up with Snapchat’s Discover service, which sees 10 stories carrying ads, and the development of e-commerce revenues have started to pay off.\n\nIt is perhaps the growth surge of the US-site that leads Daintith to hang on to the possibility of making £100m in ad revenues by the end of September 2016.\n\nMail Online missed its 2015 target of £80m, it made £73m in the year to the end of September, as year-on-year growth slowed from 41% to 18%.\n\n“We are very pleased with the progress we continue to make with Mail Online,” Daintith said. “We are well on our way to the £100m target [for 2016] that we set back in 2011. It is clearly an ambitious target, but we are not going to change it. We will work hard to get there but if we miss it by a little, it is not a disaster.”\n\nDaintith said that in the eight weeks of trading since DMGT’s financial year end in September, for only Mail Online – stripping out the very small revenue from Metro.co.uk which is usually included in Mail Online figures – ad growth has been running at 27%.\n\nThis is up on what Daintith said was a 23% figure for Mail Online-only ad revenues for the year to the end of September.\n\nThe officially reported growth figure for Mail Online of 18% for the year to the end of September includes Metro.co.uk, he said.\n\nMail Online derived about 66% of its £73m in total revenues from the UK in the year to the end of September, with 25% coming from the US and 9% the rest of the world.\n\nIn audience terms, the US is the biggest market accounting for 40% of monthly unique browsers, with 35% from the UK and 25% from the rest of the world.\n\nDMGT also shed some light on the performance of Elite Daily, the news and entertainment site acquired in January, which some media reports said has suffered a significant audience slump since the deal.\n\nDaintith said it has doubled revenues from $5m (£3.3m) to $10m over the last year and has brought on new advertisers, including Burger King, Delta Airlines and Captain Morgan Rum.\n\nIt is running at about 30 million unique monthly browsers, he said.\n\n“I think Elite Daily has had a really good start [under DMGT ownership],” Daintith said. “You get peaks and troughs in audience, just as we do on Mail Online, depending on the news of the day. It is difficult to look at just one or two months in isolation.”",
"videos": [],
"title": "Mail Online US almost doubles advertising growth",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#DailyMail",
"#Metro",
"#Snapchat",
"#Ecommerce",
"#BurgerKing",
"#DeltaAirLines"
]
}
},
{
"url": "http://www.theguardian.com/uk-news/2015/nov/25/spending-review-autumn-statement-ministers-body-language-might-tell-us",
"article": {
"author": "Andrew Sparrow",
"image": "",
"article": "Here are some pictures of ministers arriving and leaving Number 10 for today’s autumn statement cabinet meeting.\n\nTheresa May, the home secretary, is braced for cuts - and did not look overly cheerful.\n\nHealth is getting more money, which may be why Jeremy Hunt looked more upbeat.\n\nThe Department for Business is expecting cuts. Here’s Sajid Javid, the business secretary, and Priti Patel, the employment minister.\n\nGod knows what’s happening to the small business budget, but Anna Soubry, the small business minister, looks like she’s had a shock.\n\nUnlike David Cameron who looks, well, as smug as ever ...",
"videos": [],
"title": "Spending review: what ministers' body language might tell us",
"feeds": []
},
"hashtags": {
"language": "en",
"hashtags": [
"#PritiPatel",
"#SecretaryOfStateForBusinessInnovationAndSkills",
"#TheresaMay",
"#SajidJavid",
"#JeremyHunt",
"#DavidCameron",
"#AnnaSoubry"
]
}
}
]
  return res.status(200).json(finalResults);
}

// function getArticles(req, res){
//   request('http://content.guardianapis.com/search?api-key=' + guardian_api_key, function (err, data) {
//     if (err) return console.log (err);

//     if (!err && data.statusCode === 200) {
//       var dataObject = JSON.parse(data.body)
//       var apiResults = dataObject.response.results

//       apiResults.forEach(function(result,index) {
//         var url = apiResults[index].webUrl;
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