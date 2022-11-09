/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Within the client.js file, we're going to define a function createTweetElement that takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet.
$(document).ready(function() {


  const timeCalculator = function(tweetDate) {

    let todaysTimestamp = new Date();

    let todaysTimeObject = {
      year: todaysTimestamp.getFullYear(),
      month: todaysTimestamp.getMonth(),
      date: todaysTimestamp.getDate(),
    };

    let daysBetweenYears = (todaysTimeObject.year - tweetDate.year) * 365;
    let daysBetweenMonths = (todaysTimeObject.month - tweetDate.month) * 30;
    let daysBeteen = todaysTimeObject.date - tweetDate.date;

    let result = daysBetweenYears + daysBetweenMonths + daysBeteen;

    return result;
  };




  const createTweetElement = function(tweetData) {

    const tweetTimestamp = new Date(tweetData.created_at);

    const tweetTimeObject = {
      year: tweetTimestamp.getFullYear(),
      month: tweetTimestamp.getMonth(),
      date: tweetTimestamp.getDate(),
    };

    const difference = `${timeCalculator(tweetTimeObject)} days ago`;

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
          <p class="date-created">${difference}</p>
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



  // const tweetData = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png",
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // };

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  $('.title-input').on('submit', function(event) {
    event.preventDefault();

    console.log(event);


    $.ajax('/tweets', { method: 'POST', data: $(this).serialize() });
    
    // $.ajax({

    //   method: 'POST'
    //   // data : event.serialize()
    // })


  });




  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      $('.all-tweets').append(createTweetElement(tweet));
    }


  };

  renderTweets(data);



});

