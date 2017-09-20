$(function () {
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
})
