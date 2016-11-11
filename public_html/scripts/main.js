function smoothScroll(duration) {
  $('nav a').on('click', function (event) {
    var target = $($(this).attr('href'));
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, duration);
  });
}

$(document).ready(function() {
  smoothScroll(1000);
})
