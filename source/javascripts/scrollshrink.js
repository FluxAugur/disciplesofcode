$(window).scroll(function() {
  if ($(document).scrollTop() > 25) {
    var elements = document.getElementsByClassName('jumbotron');
    $(elements[0]).addClass('shrink');
    var div = document.getElementById('call-to-action');
    $(document).scrollTop = 400;
    document.getElementById('call-to-action').style.height = '45px';
  } else {
    var elements = document.getElementsByClassName('jumbotron');
    $(elements[0]).removeClass('shrink');
    document.getElementById('call-to-action').style.height = '350px';
  }
});