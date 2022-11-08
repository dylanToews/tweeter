$(document).ready(function() {
  // --- our code goes here ---

    $('#tweet-text').on('keyup', function(event) {
      let content = $("#tweet-text").val()
      console.log(content)
      console.log(content.length)
    })
   

console.log("something happened")

});

