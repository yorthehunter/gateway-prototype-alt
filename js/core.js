
$(function() {



  $('#toggle').click(function(){
    $('nav.main').slideToggle( "fast" );
    $('#toggle').toggleClass('active');
    return false;
  });



  $('.footer-toggle').click(function(){
    $('footer').toggleClass('opened');
    window.scrollBy(0,20)
    return false;
  });


  $('.divet-link').click(function(){
    $('.toggleable-gender').slideToggle( "fast" );
    return false;
  });


// set content on click
  $('.button').click(function(e) {
      e.preventDefault();
      setContent($(this));
  });

  // set content on load
  $('.button.active').length && setContent($('.button.active'));

  function setContent($el) {
      $('.button').removeClass('active');
      $('.container').hide();

      $el.addClass('active');
      $($el.data('rel')).show();
  }

  $('#get-started').click(function(){
            //$(this).animate(function(){
                $('html, body').animate({
                    scrollTop: $("#get-started-form").offset().top
                     }, 700);
            //});
    return false;
  });

  $('.get-started').click(function(){
            //$(this).animate(function(){
                $('html, body').animate({
                    scrollTop: $("#get-started-form").offset().top
                     }, 700);
            //});
    return false;
  });





});



