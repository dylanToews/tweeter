$(document).ready(function() {


  const createTweetElement = function(tweetData) {

    let output = `
    <article class="tweets-article">
        <header class="article-header">
          <div class='img-name'>
            <img src=${tweetData.user.avatars}>
            <p id="user-name">${tweetData.user.name}</p>
          </div>
          <p id="profile-tag">${tweetData.user.handle}</p>
        </header>
        <div class="tweet-content">
          <p id ="content-text">${tweetData.content.text}</p>
        </div>
        <hr />
        <footer>
          <p class="date-created">${timeago.format(tweetData.created_at)}</p>
          <p id="tweet-icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-regular fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </p>
        </footer>
      </article>
    `;

    return output;

  };


  const createError = function(error){
    $('#er').slideDown()
    $('#er').html(`
    <i class="fa-solid fa-triangle-exclamation"></i>
      Birds may fly free, but on tweeter we need you to follow our character guidlines
      <i class="fa-solid fa-triangle-exclamation"></i>`)
  }

  


  $('.title-input').on('submit', function(event) {
    event.preventDefault();

    let counter = $('.counter').val();
    console.log(counter);
    if (counter < 140) {

      $.ajax('/tweets', {
        method: 'POST',
        data: $(this).serialize()
      });

    }
    if (counter == 140  || counter == null) {
      createError()
    }
  });



  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      $('.all-tweets').append(createTweetElement(tweet));
    }
  };


  const loadTweets = function() {

    $.ajax('/tweets', {
      method: 'GET',
    })
      .then(function(event) {
        renderTweets(event);
      });
  };

  loadTweets();
});

