function displayTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}ºC`;
  let weatherDescription = document.querySelector("#description");
  console.log(
    (weatherDescription.innerHTML = response.data.weather.description)
  );
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

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
