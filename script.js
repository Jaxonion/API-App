function learnItButtonClicked() {
    $('.input-form').on('click', '.learnIt', event => {
      console.log(`'learnItButtonClicked' function ran`)
      $('.right-box').empty()
      $('.small').empty()
      $('.container').addClass('transition')
      $('.top-box').addClass('top-box-transition')
      $('.bottom-box').addClass('bottom-box-transition')
      $('.right-box').css('display', 'flex')
      $('.left-box').css('display', 'flex')
      createWeatherUrl()
      createYoutubeUrl()
    })
  }
  
  
  //weather API
  
  //handles creating weather Url call for API
  function createWeatherUrl() {
    console.log(`'createWeatherUrl' function ran`)
    let baseUrl = ''
    let searchQuery = ''
    let queryString = ''
  }
  
  //fetches weather API data
  function weatherApiCall(fullUrl) {
    console.log(`'weatherApiCall' function ran`)
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
    .then(responseJson => displayWeather(responseJson))
  }
  
  //displays weather information
  function displayWeather(responseJson) {
    console.log(`'displayWeather' function ran`)
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
  