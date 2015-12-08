# NewsRoom
#### Newsroom is an interactive news app with live social media commentary.
######GA WDI16 London - Group Project: Guus Van Oijen, Calum Campbell, and Pritpal Singh Badewal


​​NewsRoom provides 10 articles once the user has registered or logged in through the webiste or through Twitter. Each article has a number of suggested hashtags animating below their headlines. Once the user clicks on the animating hashtags, a Twitter feed pops out. This popout window only displays the tweets that contain and match the suggested hashtags for each article. To read a article, the user clicks on a headline. The article then toggles up. The user can close the window by clicking the 'X' icon on the top right side of the article.

####Approach / How it works
####The build 
#####Back-end

- This web application has been built on NodeJs' framework Express with Mongo as its database
- It uses passport and passport-local authentication modules to enable the user to register, login and logout. 
- It uses the Guardian API to extract articles from the Guardian News website
- It uses the Aylien API to return the article by the Guardian with suggested hashtags
- Twitter API in combination with socket.io enables the website to display tweets
- OAuth is used to enable the user to login into the website via Twitter

#####Front-end
- Materialize.css is the CSS framework for NewsRoom
- The navbar, the cards which contain the articles and the popout windows have been created with Materialize.css
- Custom HTML 5, CSS and jQuery are also used
- Font Awesome, which is a CSS toolkit is used to implement some icons 
- Simple Text Rotator is used to flip the suggested hashtags one at a time
- The Google Web Font: "Playfair Display" is used.
​
​
#### Challenges and Wins

#####Back-end

1. Combining Guardian API with Aylien API
    
    - Made a get request from the Guardian API and made a connection to send the webUrl of each Guardian article to Aylien API 
    - Guardian API only delivered limited data
    - The big challenge was sending and receiving data from and to the Aylien API occured asynchronously. 
    - In order to avoid receiving data asynchronously, we temporarily altered the nature of the data transmission

2. Extracting relevant tweets from the Twitter API having received the suggested hashtags from the Aylien API
    - Created another web socket channel at the front-end and back-end to send the array of suggested hashtags to the back-end in order to extract the relevant tweets

#####Front-end

​1. The main challenge we faced building the front-end was to display the suggested hashtags in a rotating flip animation. We used a simple text rotator. However, each article was created with the cards provided by Materialize. In order to display the article, each part of the article had to be appended into the html in a jquery function. A timeout function for the animation helped to solve this problem. We also used to the siblings in the HTML so allowances had to be made when appending new hashtags.
