
$(function() {



  $('#toggle').click(function(){
    $('nav.main').slideToggle( "fast" );
    $('#toggle').toggleClass('active');
    return false;
  });


  $('#secondary-toggle').click(function(){
    $('.secondary-nav').slideToggle( "fast" );
    $('#secondary-toggle').toggleClass('active');
    return false;
  });


  // $('#toggle-secondary').click(function(){
  //   $('.secondary-nav').slideToggle( "fast" );
  //   $('#toggle-secondary').toggleClass('active');
  //   return false;
  // });


  $('.nav__style-tips').hover(function(){
    $('.men-or-women').slideToggle( "fast" );
    $('.nav__style-tips').toggleClass('active');
    return false;
  });



  $('.gender-toggle').hover(function(){
    $('.toggle-gender').animate({width: 'toggle'}, {duration: 200});
    return false;
  });





  $('.footer-toggle').click(function(){
    $('#below-the-footer-fold').slideToggle( "fast" );
    var desiredHeight = $(window).height() - 120;
    $('html, body').animate({
        scrollTop: $("#below-the-footer-fold").offset().top - desiredHeight
    }, 500);
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



