require('./style.css')
import getSearch from "./getSearch";

const currentTempCard = document.getElementById('currentTemp');
const currentLocationCard = document.getElementById('currentLocation');
const currentConditionCard = document.getElementById('currentCondition');
const currentWeatherIcon = document.getElementById('currentWeatherIcon');
const currentWeatherImg = document.createElement('img');
currentWeatherIcon.appendChild(currentWeatherImg);

const todayForecast = document.getElementById('todayForecast');
const todayForecastImgDiv = document.getElementById('todayForecastImg')
const todayForecastImg = document.createElement('img');
todayForecastImgDiv.appendChild(todayForecastImg);

const tomorrowForecast = document.getElementById('tomorrowForecast');
const tomorrowForecastImgDiv = document.getElementById('tomorrowForecastImg')
const tomorrowForecastImg = document.createElement('img');
tomorrowForecastImgDiv.appendChild(tomorrowForecastImg);

const nextForecast = document.getElementById('nextForecast');
const nextForecastImgDiv = document.getElementById('nextForecastImg')
const nextForecastImg = document.createElement('img');
nextForecastImgDiv.appendChild(nextForecastImg);

const searchButton = document.getElementById('locationSearchButton');

searchButton.addEventListener('click', getSearch);