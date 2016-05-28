$(document).ready(function() {    
});

$(function() {
    var defaultText = $(this).val();
    $('#mc_embed_signup .email').focus(function() {
      $(this).val('');
      }); 
 });


$(document).ready(function(){
    $(".video").fitVids();
});


function Resize() {
  $(function() {
    $('.home  section').css('min-height', $(window).height())
  });
}


$(document).ready(function() {  
  Resize();
  
  $(window).resize(function() {
    Resize();
  });   
});

$(document).ready(function(){
  var $window = $(window);
  $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
   
      $(window).scroll(function() {
          
  var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed')); 
           
          // Put together our final background position
          var coords = '50% '+ yPos + 'px';

          // Move the background
          $bgobj.css({ backgroundPosition: coords });
      }); 
  }); 
}); 