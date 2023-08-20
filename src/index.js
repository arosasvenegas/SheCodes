let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  //show the city write in the search bar
  function searchCity (event){
    event.preventDefault();
    let searchInput = document.querySelector("#searchInput");

    let showCity = document.querySelector("#city");
    
    showCity.innerHTML = searchInput.value;

  } 
  let form = document.querySelector("#searchForm")
  form.addEventListener("submit", searchCity)

 //FUNCTION FORMAT DATE
  function formatDate(date){
  
  let hours = date.getHours();
  if (hours < 10){
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes(); 
  if (minutes < 10){
    minutes = `0${minutes}`;
  }

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];
  
  return `${day} ${hours}:${minutes}`
  }

  let showDate = document.querySelector("#today") 
  let currentTime = new Date();
  showDate.innerHTML = formatDate(currentTime);

  //temperature convert fahrenheit
  function convertToFahrenheit(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let temperature = temperatureElement.innerHTML;
    temperature = Number(temperature);
    temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
  }
    let fahrenheitTemperature = document.querySelector("#fahrenheit")
    fahrenheitTemperature.addEventListener("click", convertToFahrenheit);
    

  //ALERT
  /*let city = prompt("Enter a city");
  city = city.toLowerCase();
  if (weather[city] !== undefined) {
    let temperature = weather[city].temp;
    let humidity = weather[city].humidity;
    let celsiusTemperature = Math.round(temperature);
    let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
  
    alert(
      `It is currently ${celsiusTemperature}(${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }*/


  //challenge weather api

  function showTemperature(response){
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    console.log(`the temperature is ${city} is ${temperature}°C`);
  }
  let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  let units = "metric";
  let city = "Sydney";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);

  //geolocation api
  function showPosition(position) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = `Your latitude is ${position.coords.latitude} and your longitude ${position.coords.longitude}`;
  }

  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let button =  document.querySelector(".location");
  button.addEventListener("click", getCurrentPosition);

  //challenge geolocation api
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp)
  console.log(temperature);
}

  function retrievePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature)
  }

  

  navigator.geolocation.getCurrentPosition(retrievePosition);

  //http://api.openweathermap.org/geo/1.0/reverse?lat=-33.7030078&lon=-70.8244576&appid=bb0df6985c2eab6a171d64a6bacbb4e1&units=metric // con las coordenadas puede mostrar una ciudad 

  