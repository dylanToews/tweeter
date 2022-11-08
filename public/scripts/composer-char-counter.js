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
    $('.counter').val(140 - content.length)  
    
  });


  console.log("something happened");

});

