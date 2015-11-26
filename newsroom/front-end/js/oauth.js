$(bindEvents)

function bindEvents(){
  var buttons = [
  ".twitter-login-button"
  ]

  $.each(buttons, function(index, button){
    $(button).on("click", authenticate);
  })
}

function authenticate(){
  var authType = $(this).data('auth');

  switch (authType){
    case "twitter":
      return hello(authType).login().then(console.log.bind(console), console.log.bind(console))
      break;
    default:
      return hello(authType).login()
      break; 
  }
}

hello.on('auth.login', function(auth){
  hello(auth.network).api('/me').then(function(data){
    data.access_token = hello(auth.network).getAuthResponse().access_token;
    ajaxRequest("post", "http://localhost:3000/api/" + auth.network, data, authenticationSuccessful)
  })
})

hello.init({
  twitter: "kebvQmjLrKdpec4X59upXG3We"
},{
  redirect_uri: window.location.href,
  oauth_proxy: "http://localhost:3000/proxy"
});










