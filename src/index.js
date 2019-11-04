function displayTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}ºC`;
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = response.data.weather[0].main;
  let weatherIcon = document.querySelector("#icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", response.data.weather[0].description);
  celsiusTemperature = response.data.main.temp;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchInput.value;

  let apiKey = "14b0c56139feeed41482ca86bba4198c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&APPID=${apiKey}`;

  axios.get(`${apiUrl}`).then(displayTemperature);
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&units=metric&APPID=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayFahrenheitTemperature(event) {
  let temperature = document.querySelector("#temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperature.innerHTML = `${Math.round(fahrenheitTemperature)}ºF`;
}

function displayCelsiusTemperature(event) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(celsiusTemperature)}ºC`;
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) [(hours = `0${hours}`)];
  let minutes = date.getMinutes();
  if (minutes < 10) [(minutes = `0${minutes}`)];
  return `${hours}:${minutes}`;
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.list[0];
  forecastElement.innerHTML = `
        <div class="col-2">
          <h3><img src="http://openweathermap.org/img/wn/${
            forecast.weather[0].icon
          }@2x.png"/>${formatHours(forecast.dt * 1000)}</h3>
          <h4>${Math.round(forecast.main.temp_max)}ºC/<span>${Math.round(
    forecast.main.temp_min
  )}ºC</span></h4>
        </div>`;
  forecast = response.data.list[1];
  forecastElement.innerHTML += `
        <div class="col-2">
          <h3><img src="http://openweathermap.org/img/wn/${
            forecast.weather[0].icon
          }@2x.png"/>${formatHours(forecast.dt * 1000)}</h3>
          <h4>${Math.round(forecast.main.temp_max)}ºC/<span>${Math.round(
    forecast.main.temp_min
  )}ºC</span></h4>
        </div>`;
  forecast = response.data.list[2];
  forecastElement.innerHTML += `
        <div class="col-2">
          <h3><img src="http://openweathermap.org/img/wn/${
            forecast.weather[0].icon
          }@2x.png"/>${formatHours(forecast.dt * 1000)}</h3>
          <h4>${Math.round(forecast.main.temp_max)}ºC/<span>${Math.round(
    forecast.main.temp_min
  )}ºC</span></h4>
        </div>`;
  forecast = response.data.list[3];
  forecastElement.innerHTML += `
        <div class="col-2">
          <h3><img src="http://openweathermap.org/img/wn/${
            forecast.weather[0].icon
          }@2x.png"/>${formatHours(forecast.dt * 1000)}</h3>
          <h4>${Math.round(forecast.main.temp_max)}ºC/<span>${Math.round(
    forecast.main.temp_min
  )}ºC</span></h4>
        </div>`;
  forecast = response.data.list[4];
  forecastElement.innerHTML += `
        <div class="col-2">
          <h3><img src="http://openweathermap.org/img/wn/${
            forecast.weather[0].icon
          }@2x.png"/>${formatHours(forecast.dt * 1000)}</h3>
          <h4>${Math.round(forecast.main.temp_max)}ºC/<span>${Math.round(
    forecast.main.temp_min
  )}ºC</span></h4>
        </div>`;
  forecast = response.data.list[5];
  forecastElement.innerHTML += `
        <div class="col-2">
          <h3><img src="http://openweathermap.org/img/wn/${
            forecast.weather[0].icon
          }@2x.png"/>${formatHours(forecast.dt * 1000)}</h3>
          <h4>${Math.round(forecast.main.temp_max)}ºC/<span>${Math.round(
    forecast.main.temp_min
  )}ºC</span></h4>
        </div>`;
}

let now = new Date();
let currentDateTime = document.querySelector("#current-date-time");
let date = now.getDate();
let year = now.getFullYear();
let month = now.getMonth();
let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let days = weekDays[now.getDay()];
let monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let months = monthName[now.getMonth()];
let hours = now.getHours();
let minutes = now.getMinutes();
currentDateTime.innerHTML = `${days}, ${months} ${date}, ${year} - ${hours}:${minutes}`;

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let fahrenheitButton = document.querySelector(".btn-secondary-f");
fahrenheitButton.addEventListener("click", displayFahrenheitTemperature);

let celsiusButton = document.querySelector(".btn-secondary-c");
celsiusButton.addEventListener("click", displayCelsiusTemperature);
