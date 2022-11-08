$(document).ready(function() {
  // --- our code goes here ---\


  // const tweetForm = $('.new-tweet');
  // const tweetText = tweetForm.find('textarea');
  // const counter = tweetForm.find('.counter');
  // console.log(counter.defaultValue);

  $('#tweet-text').on('keyup', function(event) {
    let content = event.target.value;
    console.log(content);
    console.log(content.length);
    $('.counter').val(140 - content.length);

    if ($('.counter').val() < 0) {
      $('.counter').css("color", "red");
    }
    if ($('.counter').val() > 0) {
      $('.counter').css("color", "rgb(182, 176, 167)");
    }
  
    
  });


  console.log("something happened");

});

