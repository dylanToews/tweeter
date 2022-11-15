$(document).ready(function() {


  //Creates tweet element html for insertion 

  const createTweetElement = function(tweetData) {
    let tweetText = tweetData.content.text;
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
          <p id ="content-text">${escape(tweetText)}</p>
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




  // Error handling functions 

  const createError = function(error) {
    $('#er').slideDown();
    $('#er').html(`
    <i class="fa-solid fa-triangle-exclamation"></i>
      Birds may fly free, but on tweeter we need you to follow our character guidlines of 140 characters or less
      <i class="fa-solid fa-triangle-exclamation"></i>`);
  };

  const hideError = function(error) {
    $('#er').slideUp();
  };

  // Navbar function for button controled slide down of text area
  $(function() {
    $('#nav-btn').on('click', function() {
      $('.new-tweet').slideDown();
      $('textarea').focus();
    });
  });


  // Prevent cross-site-scripting via text input

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };



  // Handles new tweet on submit via ajax

  $('.title-input').on('submit', function(event) {
    event.preventDefault();
    let counter = $('.counter').val();
    if (counter < 140 && counter >= 0) {
      $.ajax('/tweets', {
        method: 'POST',
        data: $(this).serialize(),
      })
        .then(function() {
          loadTweets();
        });
    }
    hideError();
    if (counter == 140 || counter == null || counter < 0) {
      createError();
    }
    $('#tweet-text').val('');
    $('.counter').val('140');
  });



  // Renders and loads existing tweets

  const renderTweets = function(tweets) {
    $('.all-tweets').empty();
    for (let tweet of tweets) {
      $('.all-tweets').append(createTweetElement(tweet));
    }
  };


  const loadTweets = function() {
    $.ajax('/tweets', {
      method: 'GET',
    })
      .then(function(event) {
        renderTweets(event.reverse());
      });
  };
  loadTweets();
});

