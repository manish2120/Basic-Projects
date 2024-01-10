const API_KEY = `9eac1f1f4c3228f77d6e95ee60e05bae`;
const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('.weather');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
  getWeather(search.value);
  event.preventDefault();
})

const getWeather = async (city) => {
  weather.innerHTML = `<h4 class="text-white">Loading...</h4>`;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(URL);
  const result = await response.json();
  return showWeather(result);
}

const showWeather = (result) => {
  console.log(result);
  if(result.cod === 404) {
    weather.innerHTML = "City not found";
  }
  else {
    weather.innerHTML = 
    `<div>
    <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png">
    </div>
    <div>
    <h3>Country : ${result.sys.country}</h3>
    <h3>Temperature : ${result.main.temp}</h3>
    </div>`;
  }
}