$(function () {
  var aboutSection = $('#about').position().top,
      commuterSection = $('#commuter-series').position().top - 300,
      homeSection = $('#home-series').position().top - 300,
      photoSection = $('#photo').position().top - 200;
      blogSection = $('#blog').position().top - 200;

  $(window).on('scroll', function () {
    var position = $(document).scrollTop();

    if (position < 50) {
      console.log('asdf');
      $('#side-nav li').removeClass('selected');
    }

    if (position < aboutSection && position > 200) {
      console.log('sfa');
      $('.about-nav').addClass('selected').siblings().removeClass('selected');
    }

    if (position > commuterSection) {
      $('.commuter-nav').addClass('selected').siblings().removeClass('selected');
    }

    if (position > homeSection) {
      $('.home-nav').addClass('selected').siblings().removeClass('selected');
    }

    if (position > photoSection) {
      $('.photo-nav').addClass('selected').siblings().removeClass('selected');
    }

    if (position > blogSection) {
      $('.blog-nav').addClass('selected').siblings().removeClass('selected');
    }
  })

  // Scroll to area
  $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });

  // Nav
  $('#side-nav li').on('click', function () {
    $(this).addClass('selected').siblings().removeClass('selected');
  })

  $('.logo').on('click', function () {
    $('body').animate({
        scrollTop: 0
    }, 500);
    $('#side-nav li').removeClass('selected');
  })

  // mobile nav
  $('.hamburger').on('click', function () {
    $('#side-nav').toggleClass('show-nav');
  })

  // Hide tooltip
  setTimeout(function () {
    $('.tooltip').css('bottom', '-10rem')
  }, 10000)

})
