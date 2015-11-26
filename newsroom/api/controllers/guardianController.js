var request = require('request');
var AYLIENTextAPI = require('aylien_textapi');

var guardian_api_key = process.env.THEGUARDIAN_NEWS_API

var textapi = new AYLIENTextAPI({
  application_id: process.env.AYLIEN_APPLICATION_ID,
  application_key: process.env.AYLIEN_KEY
});

// // Get request 10 articles
function getArticles(req, res){
  var finalResults = [
  {
    "url": "http://www.theguardian.com/politics/2015/nov/25/corbyn-v-cameron-at-pmqs-women-domestic-violence",
    "article": {
        "author": "Andrew Sparrow",
        "image": "https://i.guim.co.uk/img/media/f55623c47367b58a8ae8c6c1e9b1b10db40c9650/0_0_5807_3484/master/5807.jpg?w=1920&q=85&auto=format&sharp=10&s=77607069f5bc417c628a1d5de906590d",
        "article": "David Cameron opened with a warm tribute to Chris Martin, his private personal secretary (PPS), before being questioned on issues from whether Wednesday’s autumn statement would support families, to his government’s infrastructure plan, and action on Syria. On this last point the prime minister said in clear terms: “The question for the house: can we wait for the political settlement before we act? My answer to that is, no, we cannot wait.” He was also reminded of the legacy of intervening in Libya and pressed on how much thought had been given to the “reconstruction and rebuilding” of Syria. \n\n\n\nJeremy Corbyn went for the jugular, pressing Cameron on his weak points, particularly public services covering women’s safety. He told the prime minister that Wednesday was the International Day of Elimination of Violence Against Women. Corbyn asked Cameron why a third of women were turned away from refuges. Cameron replied unconvincingly that his government had done the most on this issue. He didn’t respond to the particular point but said his government was doing much to tackle forced marriages and stop female genital mutilation.\n\nA relatively low-key exchange, but Corbyn chose two subjects where Cameron was vulnerable and scored some modest hits (although he could probably have pushed Cameron harder about the Rudd leak). Cameron clearly felt a little frustrated about not being able to say more on the domestic violence announcement coming in the autumn statement, but he and Corbyn both knew that what they said would soon be forgotten in the light of the pending announcements.\n\nCameron brought the house together when he paid tribute to Martin, calling him “my Bernard”:\n\n\n\nEveryone in this house and perhaps people watching this at home know from Yes Prime Minister the central role that Bernard, the prime minister’s principle PPS, plays in the life of the prime minister of No 10 Downing Street. Well this morning, my Bernard, my principal private secretary died of cancer. Chris Martin was only 42. He was one of the most loyal, hard-working, dedicated public servants that I have ever come across. I’ve no idea what his politics were but he would go to the ends of the earth and back again for his prime minister, for No 10 and for the team he worked for. Today we’re leaving the official’s seat in the box where he used to sit empty as a mark of respect to him. \n\n\n\nCorbyn went for Cameron’s weakness, not only on women’s safety services, but his record on green issues: \n\n\n\nFor more on PMQs read our politics live blog with Andrew Sparrow.\n\n",
        "videos": [
        "https://www.youtube.com/embed/SM4X1jvteuQ?wmode=opaque&feature=oembed"
        ],
        "title": "Corbyn v Cameron at PMQs: waving the white ribbon for women",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#Syria",
        "#ChrisMartin",
        "#AutumnStatement",
        "#Cancer",
        "#10DowningStreet",
        "#ForcedMarriage",
        "#Environmentalism",
        "#ThisMorning",
        "#TheWhiteRibbon",
        "#DavidCameron",
        "#JeremyCorbyn",
        "#FemaleGenitalMutilation",
        "#Libya",
        "#YesMinister"
        ]
    }
},
{
    "url": "http://www.theguardian.com/guardian-masterclasses/2015/nov/25/how-to-use-your-digital-camera-a-photography-course-david-levene",
    "article": {
        "author": "David Levene",
        "image": "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/11/25/1448457904123/bd5f7cd2-0b7e-4c15-aea3-9c347a093ab5-2060x1236.jpeg?w=1920&q=85&auto=format&sharp=10&s=fc84296e824169bae172857188e42aae",
        "article": "Learn how to move from auto to manual settings at this fantastic seminar with Guardian photographer David Levene. In the space of three hours, you’ll learn how to operate your digital SLR camera, and receive tips on how to become a more creative photographer. Plus, you’ll have the chance to receive feedback on your work from David, enabling you to improve your photography skills and create images to be truly proud of.\n\nPlease note this class is mainly theoretical, although there will be opportunities to practice using the settings on your camera during the class\n\nDavid Levene has worked as a photographer for the Guardian since 2001. His awards include winning first prize for Live News Photograph of the Year at the Press Photographers Awards in 2010, for his work documenting the aftermath of the 2010 earthquake in Haiti. Explore his work for the Guardian here.\n\nSign up to our newsletter and you’ll be among the first to find out about our latest courses and special offers. You can also follow us on Twitter, and read our latest articles and interviews on our blog.\n\nDate: Sunday 24 January 2016\n\nTimes: 10am-1pm\n\nLocation: The Guardian, Kings Place, 90 York Way, London N1 9GU\n\nPrice: £99 (includes VAT, booking fee and drinks)\n\nEvent capacity: 36\n\nTo contact us, click here. Terms and conditions can be found here.\n\nReturns policy\n\nTickets may be refunded if you contact us at least 14 days before the course start date. Please see our terms and conditions for more information on our refund policy.",
        "videos": [],
        "title": "How to use your digital camera: A photography course with David Levene",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#VAT",
        "#SLR",
        "#ValueaddedTax",
        "#N1",
        "#YorkWay",
        "#KingsPlace",
        "#TheGuardian",
        "#2010HaitiEarthquake",
        "#DigitalSinglelensReflexCamera",
        "#Twitter",
        "#London"
        ]
    }
},
{
    "url": "http://www.theguardian.com/politics/2015/nov/25/labour-furious-timing-jeremy-corbyn-syria-briefing-autumn-statement",
    "article": {
        "author": "Rowena Mason",
        "image": "https://i.guim.co.uk/img/media/c449b0d04a22292d5b5653d7027c23969128a6d8/0_7_2019_1211/master/2019.jpg?w=1920&q=85&auto=format&sharp=10&s=331d3ef1eec2631485bf755246918011",
        "article": "Labour has reacted with fury after Jeremy Corbyn was invited to a government security briefing on airstrikes in Syria with just 12 hours’ notice and at a time that clashes with the autumn statement.\n\nSenior Labour aides accused No 10 of playing “outrageous political games” after Cabinet Office officials offered Corbyn and his team a briefing at a time he was clearly unable to attend.\n\nDavid Cameron has said he plans to stage a quick Commons vote on extending airstrikes in Syria next week. He will make an oral statement to MPs this Thursday and then ask them to consider his proposals over the weekend before going to a full debate and vote.\n\nIt would be convention for the leader of the opposition to receive a fuller security briefing before then, so that he and his shadow cabinet can come to a collective decision about whether to back airstrikes and whether MPs will be given a free vote.\n\nThe government had already given a security briefing on Tuesday to the DUP, which has eight MPs, about the case for UK airstrikes against Isis to be extended to Syria.\n\nAfter Labour said it had not received an invitation to such a briefing, it is understood the Cabinet Office sent an email at 8.11pm on Tuesday night to Corbyn’s secretary inviting his team to Whitehall for a discussion about military action between 11.30am and 1pm the next day.\n\nAt that time, Corbyn and his entire shadow cabinet were to be at prime minister’s questions, followed by the autumn statement.\n\nOn Tuesday night, the Cabinet Office insisted Corbyn had been offered a briefing, but Hilary Benn, the shadow foreign secretary, was unaware of the late invitation, so it was reported as a split between Benn and Corbyn.\n\nA senior Labour aide claimed this was a deliberate attempt by No 10 to manufacture a division between the two men.\n\nThere is a collective Labour agreement to push for a political settlement in Syria but to remain open to the possibility of military action if David Cameron makes a convincing case. However, Corbyn has made it clear that he is not in favour of airstrikes, while Benn has sounded more open to the idea.\n\nLabour was also frustrated that briefing on offer was a session with Sir Mark Lyall Grant, the prime minister’s national security adviser, rather than with Cameron himself.\n\nWhen Cameron was making the case for airstrikes in Syria in 2013, he held a personal meeting with former Labour leader Ed Miliband.\n\nAsked about the invitation, Cameron’s official spokesman would only say that the prime minister had been clear in public that all privy counsellors were entitled to security briefings if they asked for them.\n\n“We have offered briefings to everyone who wants to have a briefing, any privy counsellors who ask for one. It is effectively an open invite,” he said.\n\n“The PM has been clear at every point he has talked about it that he is happy for the government to provide briefings.”\n\nHe said he would not “get into questions about process and who invited who when”. \n\n\n\nIn prime minister’s questions, Corbyn did not mention the possibility of airstrikes in Syria.\n\nBut asked about the issue by the SNP, Cameron said: “We cannot afford to wait for a political settlement in Syria before we act.”",
        "videos": [],
        "title": "Labour furious over timing of Jeremy Corbyn Syria briefing",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#Syria",
        "#LabourParty",
        "#CabinetOffice",
        "#ShadowCabinet",
        "#DavidCameron",
        "#AutumnStatement",
        "#ShadowForeignSecretary",
        "#Division",
        "#Isis",
        "#EdMiliband",
        "#GovernmentOfTheUnitedKingdom",
        "#HilaryBenn",
        "#JeremyCorbyn",
        "#ConscienceVote",
        "#MarkLyallGrant"
        ]
    }
},
{
    "url": "http://www.theguardian.com/commentisfree/2015/nov/25/northern-white-rhino-extinction-endangered-animals-save",
    "article": {
        "author": "Jeremy Hance",
        "image": "https://i.guim.co.uk/img/media/b4f633cf723284f3371344e80290f31031b11733/0_146_4096_2459/master/4096.jpg?w=1920&q=85&auto=format&sharp=10&s=93eb35782983808543bd6a12d911c017",
        "article": "On Sunday, zookeepers euthanised a 41-year-old rhino who was suffering from a painful bacterial infection at the San Diego zoo safari park. Zoo animals perish all the time – and this one died largely of old age – so why is this worthy of global news? Because the rhino, a female named Nola, represented 25% of her subspecies’ global population.\n\nThe northern white rhino once roamed a large chunk of central Africa, but centuries of poaching have left the subspecies on life support. With Nola’s death, only three aging individuals survive, all under constant armed guard at the Ol Pejeta Conservancy in Kenya – and all unlikely to reproduce.\n\nThis dismal story of the northern white rhino is both similar and very different from its closest cousin. In the late 19th century, the southern white rhino was believed to be extinct. Then a tiny population was found. From this last, lucky group, conservationists built a population 20,000-strong, making it the most secure of the world’s rhinos. The northern rhino has had several close calls as well, but now it seems its number is up.\n\nStill, scientists debate what exactly we are losing. Taxonomists have long considered the northern and southern white as subspecies. But a 2010 paper argued that northern white rhinos are actually a distinct species based both on their genetics and morphology (physical attributes); other rhino experts contested the paper, preferring the traditional classification. While that debate goes on, it’s important to remember that the distinction is somewhat artificial (one might even argue arbitrary) as it represents our very human desire to classify things into hierarchies. What’s decidedly true is that we are on the verge of losing another genetically, physically and behaviourally distinct rhino due to the lie that their horns cure hangovers.\n\nIn 2009, I was fortunate enough to meet Tam, a male Bornean rhino in a sanctuary in Malaysia. He made whistling sounds and rubbed his massive body up against the fence as he enjoyed his breakfast. He was gentle as a 700kg lamb. But like Nola, Tam, is now one of the last of his kind. There may be only three Bornean rhinos – a subspecies of Sumatran rhinos – left on our planet.\n\nLess than 100 individuals of both the Sumatran and Javan rhino survive in the wild. The last Vietnamese rhino – a subspecies of the Javan – was killed by poachers in 2010. And in South Africa, poachers are killing more than a thousand white rhinos a year.\n\nToday, saving the northern white rhino means turning increasingly toward science fiction. Using frozen genetic material, San Diego plans to create a southern and northern rhino hybrid. Down the road, it’s possible that scientists could create a full northern white rhino embryo and use a southern white rhino to carry it.\n\nBut what’s really notable about the northern white rhino’s current plight is not its steady march toward extinction, but rather the fact that we get to count down the remaining individuals one by one like some abacus-wielding Grim Reaper. There are currently thousands - maybe millions - of species on the same track toward annihilation today, but the vast majority go unaided, unprotected and unnoticed. Many of them haven’t even been given names, as their forest homes are falling or their ocean corners are acidifying. The northern white rhino is just one of these endangered earthlings.\n\nIt doesn’t have to be this way. In an age of mass extinction – with unknown impacts on human society – wildlife conservation remains massively underfunded and unsupported. In the US, funding for the environment and animals, which includes animal rights groups, represented just 3% of charitable giving in 2014. The UK public sector spent less than £60m on international biodiversity in 2013. Yet, aggressive actions to save our planet’s wild diversity would also mitigate climate change, clean up our oceans, and safeguard our food and water supplies, in addition to giving our children a world nearly as wild and diverse as the one we inherited.\n\nAfter all, what makes the Earth unique in our solar system – and maybe the whole universe – isn’t just the northern white rhinos (or the Homo sapiens) but our whole wild panoply of life. Nola’s death shouldn’t just make us concerned for rhinos, but for every species great and small, famous and inconspicuous.",
        "videos": [],
        "title": "This rhino’s death should make us worry about all creatures – great and small | Jeremy Hance",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#Subspecies",
        "#NorthernWhiteRhinoceros",
        "#WhiteRhinoceros",
        "#Nola",
        "#OlPejetaConservancy",
        "#CountyDown",
        "#SouthAfrica",
        "#JavanRhinoceros",
        "#Malaysia",
        "#SanDiego",
        "#Human",
        "#Death",
        "#AnimalRights",
        "#Poaching",
        "#Embryo",
        "#ScienceFiction",
        "#Biodiversity",
        "#Kenya",
        "#Vietnam",
        "#ConservationBiology",
        "#SanDiegoZooSafariPark",
        "#ExtinctionEvent",
        "#ClimateChange"
        ]
    }
},
{
    "url": "http://www.theguardian.com/politics/2015/nov/25/david-cameron-tribute-my-bernard-death-chris-martin",
    "article": {
        "author": "Frances Perraudin",
        "image": "https://i.guim.co.uk/img/media/bdcd096c7205eb954cdddf5fd13a4790706a2cbd/0_0_2432_1459/master/2432.jpg?w=1920&q=85&auto=format&sharp=10&s=0b5bd8135b06d6797297bb061e12d87d",
        "article": "David Cameron has paid an emotional tribute to his principal private secretary, Chris Martin, who died of cancer on Wednesday morning.\n\nSpeaking before prime minister’s question time in parliament, Cameron said Martin was “someone between a father and a brother” to members of the “No 10 family”, and that he was one of the most loyal, hardworking and dedicated public servants he had worked with.\n\n“Everyone in this house and many people watching at home know from [the television programme] Yes, Prime Minister the central role that Bernard, the prime minister’s principal PPS, plays in the life of the prime minister and No 10 Downing Street,” Cameron said.\n\n“Well, this morning my Bernard, my principal private secretary, died of cancer. Chris Martin was only 42. He was one of the most loyal, hardworking, dedicated public servants that I’ve ever come across.\n\n\n\n“I’ve no idea what his politics were, but he would go to the ends of the earth and back again for his prime minister, for No 10 and for the team he worked for.”\n\nMartin started his career in the civil service after graduating with a degree in politics from the University of Bristol in 1996. He rose to become the press secretary to the chancellor of the exchequer – first Gordon Brown, then Alistair Darling – between April 2006 and November 2007.\n\nHe joined the Cabinet Office in January 2010, where he became the second most powerful official in No 10, deputy to the cabinet secretary, Jeremy Heywood.\n\nCameron said: “Today we are leaving the seat in the officials box, where he used to sit, empty as a mark of respect to him. We think of his wife, Zoe, his family, the wider No 10 family – because it is a bit like a family, and we feel we’ve lost someone between a father and a brother to all of us – and whatever happens we’ll never forget him.”\n\nJeremy Corbyn, the Labour leader, said Martin had played a valuable role when Labour was in power. Other leading Labour figures including Yvette Cooper and John Healey also paid tribute.",
        "videos": [
        "https://www.youtube.com/embed/SM4X1jvteuQ?wmode=opaque&feature=oembed"
        ],
        "title": "David Cameron pays tribute to 'my Bernard' after aide's death",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#LabourParty",
        "#Cancer",
        "#ChrisMartin",
        "#DavidCameron",
        "#Bristol",
        "#AlistairDarling",
        "#10DowningStreet",
        "#GordonBrown",
        "#CabinetOffice",
        "#PrimeMinisterOfTheUnitedKingdom",
        "#ThisMorning",
        "#JeremyHeywood",
        "#JeremyCorbyn",
        "#JohnHealey",
        "#YvetteCooper"
        ]
    }
},
{
    "url": "http://www.theguardian.com/global-development/2015/nov/25/somaliland-drought-gargara-we-need-what-all-humans-need",
    "article": {
        "author": "Clár Ní",
        "image": "https://i.guim.co.uk/img/media/2213a2c71c57c6bd5e2cd2e43ef9d1895d2aef50/0_149_2250_1350/master/2250.jpg?w=1920&q=85&auto=format&sharp=10&s=746ab0142053308d161ea522cbdde87b",
        "article": "Hassan Haji Towakal has lived in one of the world’s toughest environments for 80 years. He has seen many droughts, but the recent prolonged lack of rainfall is the worst he has experienced in Somaliland, the breakaway country situated in Somalia’s relatively peaceful northern corner.\n\nThe drought, which has left roughly 240,000 people without enough food and killed between 35% to 40% of Somaliland’s precious livestock, has also made Haji Towakal question the future of pastoralism – the only life he has known.\n\n“I do not have livestock now. The drought is still here … I am struggling but I don’t have any answers. People were always busy herding livestock. They would come to the town to buy and sell, but now they are not in a good shape,” he said.\n\nWearing a black waistcoat and clutching a blue and white walking stick, he sits on a plastic chair in the village of Gargara, a cluster of flimsy shelters fashioned from branches and sticks, and a few low stone buildings.\n\nGargara is about a three-hour drive on bone-jangling tracks from the capital, Hargeisa, but it might be on another planet.\n\nHargeisa is a sprawling mix of pastel coloured, one-storey shops, new estates of smart bungalows, and busy green stands where men cluster to buy the mild stimulant khat as goats and camels wander by. Gargara has wells – which is why about 1,000 people have come here over the past five years – but little else.\n\nSomaliland is a textbook example of how tackling climate change and attaining sustainable development – as defined by the global goals adopted in New York this September – are two sides of the same coin.\n\nCaught as it is in the political tailwind of efforts to end the crisis in Somalia, where al-Shabaab militants are still fighting African peacekeepers and the government, the country is still struggling for international recognition. But in rural areas, the state is barely real even to its own people.\n\nOnly about one-third of the population has access to safe drinking water. Life expectancy in the country, which has a population of approximately 3.5 million people, is just 53 years for men and 56 for women. Across Somalia as a whole, only about 33% of people have access to electricity.\n\nThe World Bank has estimated that gross domestic product for Somaliland was $1.4bn (£930m) in 2012, giving the country GDP per capita of just $347. That makes Somalilanders the fourth poorest people in the world, just ahead of the populations of Malawi, the Democratic Republic of the Congo, and Burundi. Somaliland relies mainly on livestock exports and remittances from overseas. Foreign investors are still wary because of the unresolved political situation.\n\nConversations with pastoralists in Gargara and other nearby villages make it clear that drought places an unbearable burden on people who already tick all the humanitarian needs boxes.\n\n\n\n“Water is a basic need for humans and every living thing. It is something that is general and personal. All communities need it, whether it comes from shallow wells or any water assistance,” Haji Towakal says.\n\nThe arrival of so many displaced people has strained existing resources, creating tension locally. Save the Children is building new wells on the outskirts of the village to provide free water to the displaced people, but other concerns need addressing.\n\n“I have in mind so many things,” Haji Towakal says. “Children should be sent to school on proper scholarships, and learn income-generating skills. Each one should get money to study for business to gain a better livelihood. I need cash for my children. I need health for my family.\n\n“There is no hospital here. There is a health centre but it does not support us. It doesn’t have drugs. There are nurses but no one assists them for payments or restocking. It’s there as a premises but it is not functional.”\n\n“We need what all humans need. Latrines are very important. We need health. The displaced people need shelter. They need education and schools,” he says.\n\nThe displaced people live in cramped domed huts – branches, thatching and cloth placed over a frame of sticks – close to the village. Many have been here for five years, since the rains started to fail and their villages ran out of water.\n\nSahel Siyal Mohamed, 26, tells of her journey from the village of Biyo Cade, three years ago. She walked with her two-year-old son on her back, while her three-year-old boy walked by her side, clutching her hand. It took two days.\n\n\n\n“It was full of struggle … You tell your children they just need to sleep. We got tired a lot.”\n\nFrom 60 sheep and goats, she now has just three sheep and two goats. She has tried to make a new life in Gargara by selling tea, but the villagers are now too poor for such purchases.\n\n“If you try to cook food to sell, there is no market. You end up eating it yourself,” she says as her two-year-old daughter squirms in her lap. “Now, my life is full of worry … I don’t like staying here but I have to. I won’t go back unless there is something to go back to.”\n\n\n\nIn a report this month, the World Bank said as many as 100 million people globally could slide into extreme poverty because of rising temperatures. The bank said efforts to stabilise climate change should incorporate strategies to eradicate poverty, and called for social safety nets and universal healthcare for poor people.\n\nAt the weekend, before UN talks begin in Paris to agree a global deal to limit climate change, action/2015 campaign members will participate in global climate marches to put pressure on politicians to agree a deal that will accelerate action and ensure no individual is left behind.\n\nAbdikarim, nine, might be forgiven for feeling he has already been forgotten. He and his family left their village, Faahiye, for Gargara five years ago. They used to have 200 animals. Now they have 10.\n\nHe doesn’t go to school; only about half of children between six and 13 go to primary school in Somaliland. He herds goats, fetches water for his mother, Shukri, and amuses himself with stones – the only plaything in a place where footballs are a luxury too far. But dreams, however unrealistic, cost nothing.\n\n“I want to be a minister, of education. A lot of people came here advocating for education. I would like to have a school here,” he says. There is a school in Gargara, but there is not enough room, and not enough teachers for all the new arrivals, and many cannot afford the fees.\n\n“I am just disappointed all the time,” says Abdikarim.“I ask God all the time to bring more rain. I get thirsty. When I am thirsty, I can’t walk, I can’t do anything. I just sit down.”",
        "videos": [],
        "title": "Somaliland stricken by drought: 'We need what all humans need' | Clár Ní Chonghaile",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#Somaliland",
        "#Somalia",
        "#Goat",
        "#ClimateChange",
        "#WorldBank",
        "#Hargeisa",
        "#GrossDomesticProduct",
        "#Sahel",
        "#Remittance",
        "#Tea",
        "#Paris",
        "#Environmentalism",
        "#AlShabaab",
        "#DemocraticRepublicOfTheCongo",
        "#Malawi",
        "#NewYork",
        "#Agriculture",
        "#Burundi",
        "#SustainableDevelopment",
        "#UniversalHealthCare",
        "#Bank",
        "#Camel",
        "#GDP",
        "#Democracy",
        "#SocialSafetyNet"
        ]
    }
},
{
    "url": "http://www.theguardian.com/music/2015/nov/25/the-playlist-jazz-london-jazz-festival-kamasi-washington-maria-schneider-sheila-jordan-and-more",
    "article": {
        "author": "John Fordham",
        "image": "https://i.guim.co.uk/img/media/128f64a9f0d1f8758498dcd9d3a37d03bea66698/220_267_2674_1604/master/2674.jpg?w=1920&q=85&auto=format&sharp=10&s=6886ac8d2c06d7be51b8a37e4ecda18c",
        "article": "This young London band – the name means “good is good” in the Dagaare language of Ghana – played one of the LJF launch day’s 20-odd gigs on 13 November, and kicked off Jazz on 3’s live broadcast from Ronnie Scott’s that night. Leader Bex Burch learned how to build and play the gyil – the region’s traditional wooden xylophone – while living and farming in a Ghanaian village for three years, and then came home to form Vula Viel as a mix of religious and communal songs, electronics, free-jazz and Steve Reich’s minimalism. The group’s virtuosity, but also their infectious enthusiasm, delighted the first-night crowd.\n\nThe headline-grabbing festival curtain-raiser is always the Jazz Voice gala at the Barbican – the celebration of a century of popular song featuring Guy Barker’s 42-piece orchestra and a cast of A-list vocalists, including this year the US soul singer Jarrod Lawson. Discreetly tucked away at Sloane Square’s Cadogan Hall on that same night, however, was a performance by uber-cool American quartet James Farm. Featuring sax supremo Joshua Redman and the hip pianist and composer Aaron Parks, the band was just as dazzlingly smart live as they are on disc, but quite a bit more vivid and creatively loose-limbed. \n\n\n\n\n\nKamasi Washington, the powerful US saxophonist and composer, has moved from session work with hip-hop star Kendrick Lamar and jazz workshops with community bands around Los Angeles to being one of the most talked-about jazz artists in the world this year – for the earthily intense playing, and decisive sweeps across jazz, classical and pop/hip-hop styles on his rightly-named 2015 triple album The Epic. A stripped-down Washington band played the festival’s second night (and an unscheduled extra Sunday performance, following the cancellation of their Paris concert), in a double bill shared with the UK’s 2014 Mercury prize contenders GoGo Penguin. \n\n\n\n\n\nThe Art Ensemble of Chicago, one of the finest jazz bands to come out of that city, didn’t play the festival – but a landmark for the pioneering Chicago collective that helped them and many others to grow was celebrated in workshops, performances and talks by local players. This year marks the 50th anniversary of the Association for the Advancement of Creative Musicians (AACM), the self-help and educational group originally founded by pianist Muhal Richard Abrams to raise the profile of African-American experimental music – particularly free-improvised jazz – and still very active now. The Art Ensemble, with the late Lester Bowie on trumpet, Roscoe Mitchell and Joseph Jarman on saxes, Malachi Favors on bass and Famoudou Don Moye on drums, were a classic AACM band in their espousal of musical democracy and creative freedom, explicit African roots, and experimentation with a popular touch. \n\n\n\nIt was a memorable festival for pianists – with Keith Jarrett the most famous, but Cuban-American David Virelles, Texan Helen Sung and Britons Gwilym Simcock, Liam Noble, Kit Downes, Ivo Neame, Andrew McCormack and rising star Jacob Collier all making their presences felt. The Polish star Marcin Wasilewski shared a double bill with Helen Sung on 15 November. Spark of Life was the title track of the album to which they devoted much of their set.\n\nThe composer Maria Schneider brought her long-running New York orchestra to the festival, and introduced much of the music from this year’s vivid evocation of her rural homelands and their inhabitants, The Thompson Fields. Schneider learned a lot as an assistant to one of jazz’s greatest big-ensemble writers, Gil Evans, but she knows plenty about classical music too, leads a band that knows her methods inside out, and mixes urban bite and a rare jazz mission to pay her respects to nature. This version of Hang Gliding, an old Schneider favourite, was caught in London in 2005.\n\n\n\nThe memory of Kenny Wheeler, the late great expat Canadian trumpeter and composer, was commemorated during the festival in a concert that brought together many of his long-time kindred spirits – including saxophonist Evan Parker, vocalist Norma Winstone and bassist Dave Holland. This cut of Angel Song, one of Wheeler’s wistful classics, is from the 1996 album of the same name – featuring the composer, Holland on bass, Bill Frisell on guitar and Lee Konitz on alto sax.\n\n\n\nSheila Jordan, the mischievously ingenious 87-year-old vocalist, told a New York audience this year “if it wasn’t for jazz music, I wouldn’t be alive today”. The jazz natural, who grew up concocting her own vocal lines to Charlie Parker solos – and even moved Parker himself to call her “the singer with the million-dollar ears” – played the Pizza Express Jazz Club on 21 November. \n\n\n\n\n\nSheila Jordan was in the audience at the Guildhall School’s Milton Court theatre the next night to check out a singer after her own heart – Theo Bleckmann, the Dortmund-born New Yorker who has been collaborating with German pianist Julia Hülsmann on a Kurt Weill project that catches the menace in some of those songs in a way few jazz interpretations do. Hülsmann’s fine band with Bleckmann and UK expat Tom Arthurs on trumpet played the festival’s last night. \n\n\n\nKeith Jarrett has waited until his senior years to start swearing at the bearers of his hated cameraphones, but though he did that before the encores began on his first-ever concert for the London jazz festival, he followed the outburst with an amiable welcome for the crowd’s requests, and almost gave the impression of enjoying his own stereotype as a short-fuse genius. Some find Jarrett’s mannerisms and his we-are-not-worthy audience a pain, but he’s forgotten more about improvising on a piano than many performers ever learn. His most informal and least-exalted playing settings are some of his most engaging, though – such as this effortlessly lyrical home-recording of the 1950s pop hit No Moon at All in 2007, with the late bassist Charlie Haden. \n\n",
        "videos": [
        "https://www.youtube.com/embed/tClLN_Dcy9g?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/AokCirClNt4?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/KqJJ-2cRR0M?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/_thfiAkwXxU?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/am0GP6CZgLo?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/wdIW_AoTi_4?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/M30eYaIr-hI?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/53qPY_jzHZU?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/OfC87qaopcg?wmode=opaque&feature=oembed",
        "https://www.youtube.com/embed/EqDbVQOgYnc?wmode=opaque&feature=oembed"
        ],
        "title": "The playlist: jazz – London jazz festival, Kamasi Washington, Maria Schneider, Sheila Jordan and more",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#Jazz",
        "#SheilaJordan",
        "#LondonJazzFestival",
        "#MariaSchneider",
        "#Chicago",
        "#NewYork",
        "#Ghana",
        "#Legislation",
        "#Orchestra",
        "#KeithJarrett",
        "#London",
        "#HelenSung",
        "#AaronParks",
        "#BarbicanCentre",
        "#JohnMilton",
        "#MuhalRichardAbrams",
        "#NormaWinstone",
        "#GuyBarker",
        "#KennyWheeler",
        "#JosephJarman",
        "#ExperimentalMusic",
        "#SloaneSquare",
        "#Canadians",
        "#MarcinWasilewski",
        "#Moon",
        "#AfricanAmericanMusic",
        "#PizzaExpress",
        "#Paris",
        "#LeeKonitz",
        "#GilEvans",
        "#Theatre",
        "#CubanAmerican",
        "#JoshuaRedman",
        "#Germany",
        "#ClassicalMusic",
        "#Poland",
        "#RoscoeMitchell",
        "#SteveReich",
        "#MercuryRecords",
        "#Xylophone",
        "#DagaareLanguage",
        "#IvoNeame",
        "#LiamNoble",
        "#TheNewYorker",
        "#WashingtonDC",
        "#GwilymSimcock",
        "#Spirit",
        "#TheoBleckmann",
        "#LosAngeles",
        "#RonnieScottsJazzClub",
        "#MalachiFavors",
        "#DonMoye",
        "#CharlieParker",
        "#CameraPhone",
        "#AACM",
        "#KitDownes",
        "#CadoganHall",
        "#CharlieHaden",
        "#LesterBowie",
        "#EvanParker",
        "#BillFrisell",
        "#KurtWeill",
        "#KendrickLamar",
        "#AssociationForTheAdvancementOfCreativeMusicians",
        "#Democracy",
        "#DaveHolland"
        ]
    }
},
{
    "url": "http://www.theguardian.com/commentisfree/2015/nov/25/russia-jet-diplomatic-syrian-conflict-us-russia",
    "article": {
        "author": "Yavuz Baydar",
        "image": "https://i.guim.co.uk/img/media/6af9c32b5ea693acc4f9d04c4fc1248369904331/0_219_2000_1200/master/2000.jpg?w=1920&q=85&auto=format&sharp=10&s=129faf15beeeae7939a2461e153895b7",
        "article": "No matter which side is responsible, the downing of the Russian plane over the southernmost part of the Turkish border will only complicate further the already complex picture of the conflict in Syria. And, regardless of what shape this crisis will take, it increases the pressure on the two main “playmakers” who define the rules of engagement, be that militarily or diplomatically: the US and Russia.\n\nTuesday’s incident is not entirely without precedent. Already at the earliest stages of the conflict, in June 2012, a Turkish reconnaissance aircraft was downed over the Mediterranean off Latakia. There were suspicions that the Phantom fighter was shot down by a missile fired from a Russian base at the shore. Russia strongly denied the accusations, and the case was eventually closed.\n\nBut, even if the background to the latest downing is the same, the circumstances are different this time. The latest incident has come as Russian airforce intensifies its military activity at north-eastern Syria, targeting what it claims are terrorist units affiliated with al-Nusra. Russian media recently reported that many settlements in the area, mainly Turkmen, were al-Nusra nests, involved in fierce anti-Assad activities.\n\nTensions between Ankara and Moscow have been high in the past month, as clashes and bombing have moved closer to the border areas. A few violations came as a harbinger of escalation in what, at this stage, looks like a “turf war”, in which Russia is decidedly engaged in clearing a large area along the coast, dedicated to the Assad regime.\n\nTurkey, whose Syria strategy has been looking increasingly vague and reactive recently, may now have stronger arguments to call for a no-fly zone along its entire border area. Until the downing, the US, Russia and the EU had countered persistent Turkish demands by saying that, in the context of enhanced war against jihadists in Syria, there already was a de facto no-fly zone. Turkey may have gained new arguments now, but given the delicacy of the talks and growing visibility of Russia, France and even the US, they are likely to fall on deaf ears.\n\nIn the heat of the moment, both Ankara and Moscow’s immediate reactions to the incident have been highly emotional. Hours after the downing, Serdar Kılıç, Turkish ambassador in Washington DC, tweeted that “nobody should test our patience”, using a phrase, coined and used excessively by Turkish prime minister Ahmet Davutoğlu. Putin described the incident as “a stab in the back, carried out by the accomplices of terrorists”.\n\nBoth sides have reasons to be nervous. Putin knows that he is facing the blowback for Russia’s assertive, active involvement in Syria and that there may be more to come. Yet he also knows that since Turkey is strongly energy dependent to Russia, his ruling AKP has its hands tied in bilateral relations. There are also some not so well concealed signs in Russia’s statements that Moscow has some circumstantial evidence indicating Turkish-Islamic State oil trade cooperation in its hands.\n\nThe nervousness displayed by the AKP administration, in Ankara, has a lot to do with Turkey’s Syria policy being in ever-growing disarray, and its failure to set priorities to help resolve the conflict. As the Syrian quagmire deepened, old anti-Kurdish fixations in Ankara came to the surface, and clashed with the priorities of its allies, centred on Isis. Ankara’s blocking moves against the only combat force on ground, the PKK-YPG axis, has impeded the fight against jihadists, and its constant redrawing of red-lines (Kurds, Turkmens, no-fly zone, Assad gone etc) may have been frustrating the White House, but does not seem to affect Moscow. Recently, Moscow’s rapprochement with the Syrian Kurds, the PYD, only added to the huge complexity of the situation.\n\nIn the recent G20 summit, President Recep Tayyip Erdoğan was once more keen to underline that “terror has no religion and there should be no our terrorist and your terrorist”. By indiscriminately bombing Turkmen villages, Putin, as it were, returns this message to the sender.\n\nSo, the tension now rises between one determined and one undecided, conflicted player – one lucid on strategy, the other lacking it. If any, the lesson to be drawn from this showdown is this: any solution of the Syrian conflict will be based on a precondition that the US and Russia put aside their differences, agree in principle on the future of the region, build a joint intelligence gathering and coordinated battle scheme against jihadists, and demand utter clarity of the positions of their myopic, egocentric allies. Unless they do so, more complications, and risks beyond turf wars will be knocking at the door.",
        "videos": [],
        "title": "The shooting down of a Russian jet tangles the diplomatic web still further | Yavuz Baydar",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#Russia",
        "#Turkey",
        "#Syria",
        "#Moscow",
        "#Ankara",
        "#NoflyZone",
        "#AKP",
        "#Turkmenistan",
        "#Kurds",
        "#AlNusraFront",
        "#JusticeAndDevelopmentParty",
        "#DemocraticUnionParty",
        "#Isis",
        "#Blowback",
        "#PYD",
        "#Latakia",
        "#RecepTayyipErdoğan",
        "#PresidencyOfGeorgeWBush",
        "#FighterAircraft",
        "#G20MajorEconomies",
        "#WashingtonDC",
        "#MediterraneanSea",
        "#AhmetDavutoğlu",
        "#TurkmenPeople",
        "#FrenchThirdRepublic"
        ]
    }
},
{
    "url": "http://www.theguardian.com/us-news/2015/nov/25/missouri-death-row-reggie-clemons-convictions-dismissed",
    "article": {
        "author": "Ed Pilkington",
        "image": "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/audio/video/2013/2/12/1360696109608/Death-penalty-on-trial-Re-011.jpg?w=700&q=85&auto=format&sharp=10&s=530c86a91082fea44f390f094d39b97d",
        "article": "Reggie Clemons, a Missouri prisoner who has spent 22 years on death row for the 1991 rape and murder of two sisters, has had his convictions thrown out by the state’s highest court on grounds that he was denied a fair trial through prosecutorial misconduct.\n\nThe supreme court of Missouri voted 4-3 on Tuesday to vacate Clemons’ murder convictions and remove him from death row. The ruling was the culmination of an epic six-year legal battle in which the prisoner sought to prove that prosecutors had violated his constitutional rights by withholding evidence at trial that his police confession had been beaten out of him.\n\nThe ruling gives the state of Missouri 60 days to decide whether to retry Clemons, 43, for acting as an accomplice in the murders on 5 April 1991 of Julie and Robin Kerry. The attorney general’s office on Tuesday night told the Guardian it was reviewing the court’s decision and gave no indication of what its next move would be.\n\nThe sisters were pushed from a bridge into the Mississippi river and drowned, though Robin’s body was never found. On the night of the murders the sisters had been on the bridge with their cousin Thomas Cummins.\n\nThey met a group of four young men – Clemons, then aged 19, Marlin Gray who was executed in 2005, his cousin Antonio Richardson who is serving a life sentence, and Daniel Winfrey who negotiated a plea deal and was released in 2007. The case was highly racially charged as Clemons, Gray and Richardson were black, while Winfrey, the Kerry sisters and Cummins were white.\n\nClemons’ mother Vera Thomas said that she hoped the state would now fully exonerate her son. “This has been a 24-year fight for justice. I’m lost for words,” she said.\n\nShe added that in the wake of the dismissal of her son’s murder convictions, she recalled the experience in 2009 in which Clemons came within 12 days of being killed by lethal injection. A stay of execution at that point triggered a special review into the case that was only resolved on Tuesday with the supreme court decision.\n\nThree years ago the Guardian published a series of investigative articles on the case in which the glaring legal problems with Clemons’ prosecution were disclosed. The series identified 21 discrepancies in the way the prosecution unfolded, including the fact that the Chain of Rocks bridge across the Mississippi straddles the boundary between Missouri and Illinois and had the spot from which the sisters were pushed been just a few feet away in Illinois, which abolished the death penalty in 2011, Clemons would not have been facing execution.\n\nThe Guardian also highlighted witness testimony that Clemons had displayed signs of bruising on his face soon after he was arrested for the Kerry murders. That evidence, and the fact that it was not disclosed to the defendants’ lawyers before trial, was a key part of Tuesday’s ruling to cast down his murder convictions.\n\nThe supreme court’s chief justice, Patricia Breckenridge, who wrote the ruling, catalogued what she said was “substantial evidence” that in the run-up to the Clemons trial, state prosecutors had suppressed evidence that he had physical signs of bruising on his face. “The record includes substantial, credible evidence that Mr Clemons’ confession was coerced by physical abuse inflicted by the police that would require that his confession be suppressed.”\n\nJoshua Levine, a lawyer with Simpson Thacher & Bartlett who represented Clemons during his prolonged legal challenge, said that the court had upheld the prisoner’s constitutional right to a fair trial. “That is all he’s ever sought from the beginning.”\n\nLevine said that the ruling struck a significant blow in the fight for fair trials. “It is fundamental to the nature of a fair trial that a defendant’s coerced confession cannot and should not be used against him.”\n\nDespite the dramatic turn of affairs, Clemons will not be a free man any time soon. In addition to the 60-day period, he is also serving a consecutive 2007 sentence for assaulting a prison guard.\n\nThe Guardian understands that the supreme court judges had some difficulty in reaching their decision. The panel of seven judges was reduced to six after one member recused himself from the case, and the remaining judges were then evenly split three against three.\n\nThe deadlock was only broken recently when a replacement seventh judge was appointed to the court specifically to bring the Clemons deliberations to a conclusion.",
        "videos": [],
        "title": "Missouri supreme court rules to dismiss death row inmate's murder convictions",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#Missouri",
        "#DeathRow",
        "#JohnKerry",
        "#TheGuardian",
        "#Mississippi",
        "#Illinois",
        "#SimpsonThacherBartlett",
        "#CapitalPunishment",
        "#DickGrayson",
        "#SupremeCourtOfMissouri",
        "#LethalInjection"
        ]
    }
},
{
    "url": "http://www.theguardian.com/politics/live/2015/nov/25/spending-review-george-osborne-autumn-statement-",
    "article": {
        "author": "Andrew Sparrow",
        "image": "https://i.guim.co.uk/img/media/8efb28c055dadcb14547b2d064ddf0b78db7b728/0_0_1020_575/master/1020.jpg?w=780&q=85&auto=format&sharp=10&s=8b9e11dbac07b8a900136c689e4f1564",
        "article": "One of the criticisms of George Osborne as chancellor is that he can be too clever by half, that some of his political schemes are so devious that they can backfire. For anyone advancing this theory, the welfare cap now looks like an ideal example.\n\nOsborne announced a welfare cap, a cap on the overall amount the government can spend on certain welfare payments, in the budget of 2014. It is not the same as the benefits cap, the cap on the amount of benefits that an out-of-work family can receive (originally £26,000, but now being cut to £20,000 for families outside London.) The benefits cap proved remarkably popular with voters, and so Osborne decided to apply the same principle to overall welfare spending. At the time it was perceived primarily as a trap for Labour; Osborne was hoping that the opposition would vote against, thus allowing him to depict them as profligate with welfare spending. In the event this ploy failed, because Ed Miliband and Ed Balls decided their party should vote in favour of the welfare cap, and the issue quickly dropped out of the political headlines.\n\nAs a restraint on government the welfare cap was always relatively ineffective because, under Osborne’s proposal, any government could break i and spend more if it wanted to. But it would have to go to the Commons to win approval in a vote. Osborne argued that this would prove embarrassing, and that the unappetising prospect of having to ask MPs to vote for extra welfare spending would act as a deterrent.\n\nIn the debate on the welfare cap in March 2014 he said that breaching the welfare cap would be “a failure of public expenditure control”. Any chancellor taking this step would have to admit that what they really want is “higher welfare bills”, he said.\n\nThe charter makes clear what will happen if the welfare cap is breached. The chancellor must come to parliament, account for the failure of public expenditure control, and set out the action that will be taken to address the breach ... The welfare cap brings responsibility, accountability and fairness. Those who want to undo our welfare reforms will now have to tell us about the other cuts that they will make, or else come clean and admit to the public that what they really want are higher welfare bills .. From now on, any government who want to spend more on welfare will have to be honest with the public—honest about the costs—and secure the approval of parliament in order to breach the cap.\n\nExpect those words to be flung back at Osborne this afternoon. Now it seems that he is going to have to go to parliament himself and admit that he’s the one asking for “higher welfare bills” because he’s failed to meet his own spending targets.",
        "videos": [],
        "title": "Spending review 2015: George Osborne scraps tax credit cuts - live",
        "feeds": []
    },
    "hashtags": {
        "language": "en",
        "hashtags": [
        "#LordChancellor",
        "#GeorgeOsborne",
        "#EdBalls",
        "#EdMiliband",
        "#London",
        "#LabourParty"
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
