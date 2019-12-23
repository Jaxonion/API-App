function learnItButtonClicked() {
  $('form').submit(function(e) {
    e.preventDefault();
    console.log(`'learnItButtonClicked' function ran`);
    $('.right-box').empty();
    $('.left-box').empty();
    $('.small').empty();
    $('.container').addClass('transition');
    $('.top-box').addClass('top-box-transition');
    $('.bottom-box').addClass('bottom-box-transition');
    $('.right-box').css('display', 'flex');
    $('.left-box').css('display', 'flex');
    createWeatherUrl();
    createYoutubeUrl();
  });
}


//weather API

//handles creating weather Url call for API
function createWeatherUrl() {
  let baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
  let searchQuery = '?zip=' + $('.whereToSkate').val()
  let apiKey = '&APPID=c6074c7eba5c1cd1fa563dd6e3da11ad'
  let fullUrl = baseUrl + searchQuery + apiKey
  getWeather(fullUrl);
}

function getWeather(fullUrl) {
  fetch(fullUrl)
  .then(response => {
    if (response.ok) {
      return response;
    }
    else {
      throw new Error('weather not found. Try another ZIP code')
    }
  })
  .then(response => response.json())
  .then(responseJson => displayWeather(responseJson))
  .catch(err => {
    alert('weather not found for ZIP code')
    $('.left-box').append(`<div><h1>No results found</h1></div>`)
  })
}

function displayWeather(responseJson) {
  console.log(responseJson);
  degrees = Math.round(((responseJson.main.temp - 273.15) * 9/5 + 32)*100) /100
  console.log(responseJson.main.temp)
  $('.left-box').append(`<h1 class='placeName'>${responseJson.name}, ${responseJson.sys.country}</h1><h1 class='temp'>The temperature is ${degrees} degrees fehrenheit</h1><h1 class='weatherDescription'>${responseJson.weather[0].description}</h1>`)
}

//Youtube API

//creates Url for youtube API call
function createYoutubeUrl() {
  console.log(`'createYoutubeUrl' function ran`)
  let baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+'
  let searchInput = $('.trickToLearn').val().split(' ').join('+')
  let key = 'key=AIzaSyDLlwVQIrGTshAL35APhWShrpj5aaBx1DM'
  let fullUrl = baseUrl + searchInput + '&' + key
  //console.log(`fullUrl is '${fullUrl}'`)
  youtubeApiCall(fullUrl);
}

//fetches Youtube API data
function youtubeApiCall(fullUrl) {
  console.log(`'youtubeApiCall' function ran`)
  console.log(fullUrl)
  fetch(fullUrl)
  .then(response => {
    if (response.ok) {
      return response;
    }
    else {
      alert("couldn't find youtube videos")
    }
  })
  .then(response => response.json())
  .then(responseJson => displayYoutube(responseJson))
}

//displays a list of hyperlinks to youtube videos
function displayYoutube(responseJson) {
  //console.log(responseJson)
  //console.log(response.items.length) 
  https://www.youtube.com/watch?v=${responseJson.items[i].id.videoId}
  for (i = 0; i < 5; i++) {
    //console.log(responseJson.items[i].snippet.title)
    //console.log(responseJson.items[i].id.videoId)
    $('.right-box').append(`<div class='result results-${i}'><a target='_blank' href='https://www.youtube.com/watch?v=${responseJson.items[i].id.videoId}'>${responseJson.items[i].snippet.title}</a></div>`)
  }
}


//calls the clicked button function
learnItButtonClicked();

  