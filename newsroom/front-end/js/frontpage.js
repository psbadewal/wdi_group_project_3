$(function(){
 FrontSlider.ajaxRequest()
})

var FrontSlider = FrontSlider || {} 

FrontSlider.appendArticle = function(data, index) {
  console.log(data.article.image)
  $('#front-slider').append("<li><img src="+ data.article.image + 
    "><div class='caption center-align'><h3 class='bold'>"+ data.article.title +
    "</h3><h5 class='hashtags'> <g> " + data.hashtags.hashtags[2] + "</g> <g> " + data.hashtags.hashtags[3] + "</g> <g> " + data.hashtags.hashtags[4] + "</g></h5></div></li>")
}


FrontSlider.loop = function(data){
  $.each(data, function(index, data) {
     FrontSlider.appendArticle(data, index);
   })
  $('.slider').slider({ full_width: true, indicators:false, transition:600, height:800, interval:6000 });
}


FrontSlider.ajaxRequest = function() {
  $.ajax({
    method: "get",
    url: "http://localhost:3000/api/articles",
  }).done(function(data){
    return FrontSlider.loop(data)
  }).fail(function(data) {
    displayErrors(data.responseJSON.message);
  });
}