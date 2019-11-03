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
