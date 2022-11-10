$(document).ready(function() {

  $('#tweet-text').on('keyup', function(event) {
    let content = event.target.value;

    $('.counter').val(140 - content.length);

    if ($('.counter').val() < 0) {
      $('.counter').css("color", "red");
    }
    if ($('.counter').val() > 0) {
      $('.counter').css("color", "rgb(182, 176, 167)");
    }
  
    
  });

});

