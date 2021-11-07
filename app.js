const APP_ID = 'cbca74a827bcc6fce0f943fcaf87cf1c';
const DEFAULT_VALUE = '--';

const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weahterState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const speed = document.querySelector('.speed');

searchInput.addEventListener('change', (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`,
  ).then(async (res) => {
    const data = await res.json();
    console.log(data);
    cityName.innerHTML = data.name || DEFAULT_VALUE;
    weahterState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
    weatherIcon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    );
    temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    sunrise.innerHTML =
      moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
    sunset.innerHTML =
      moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
    humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
    speed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
  });
});
