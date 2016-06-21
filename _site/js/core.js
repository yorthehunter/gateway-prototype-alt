
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


  $('footer .nav__style-tips').hover(function(){
    $('footer .men-or-women').slideToggle( "fast" );
    return false;
  });

  $('header .nav__style-tips').hover(function(){
    $('header .men-or-women').slideToggle( "fast" );
    $('header .nav__style-tips').toggleClass('active');
    return false;
  });


  $('.social-close').click(function(){
    $('.pick-a-channel').slideToggle( "fast" );
    return false;
  });

  $('.social-open').click(function(){
    $('.pick-a-channel').slideToggle( "fast" );
    return false;
  });



  // $('.gender-toggle').hover(function(){
  //   $('.toggle-gender').animate({width: 'toggle'}, {duration: 200});
  //   return false;
  // });



  $('.footer-toggle').click(function(){
    $('#below-the-footer-fold').slideToggle( "fast" );
    var desiredHeight = $(window).height() - 220;
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
                    scrollTop: $("#get-started-form").offset().top - 50
                     }, 700);
            //});
    return false;
  });

  $('.get-started').click(function(){
            //$(this).animate(function(){
                $('html, body').animate({
                    scrollTop: $("#get-started-form").offset().top - 50
                     }, 700);
            //});
    return false;
  });

  $('input').focus(
    function(){
        $(this).parent('.form-group').addClass('focus');
    }).blur(
    function(){
        $(this).parent('.form-group').removeClass('focus');
        $(this).parent('.form-group').addClass('left');
    });

  $('label.btn-default').click(function(){
      $(this).closest('.btn-group').children('label.btn-default').removeClass('active');
      $(this).addClass('active')
    return false;
  });

  $('.mens-signup').click(function(){
      $('.get-started-form').addClass('mens');
      $('.get-started-container').addClass('mens');
    return false;
  });

  $('.womens-signup').click(function(){
      $('.get-started-form').removeClass('mens');
      $('.get-started-container').removeClass('mens');
    return false;
  });



});



