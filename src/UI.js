import getForecast from "./getForecast";
import getWeather from "./getWeather";

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

let location;

export default async function setValues(location) {
    let weather = await getWeather(location);
    let forecast = await getForecast(location);
    currentTempCard.innerText = weather.current.temp_f + '\xB0' + 'F';
    currentLocationCard.innerText = weather.location.name;
    currentConditionCard.innerText = weather.current.condition.text;
    currentWeatherImg.src = weather.current.condition.icon;

    todayForecast.innerText = forecast.forecast.forecastday[0].day.condition.text;
    todayForecastImg.src = forecast.forecast.forecastday[0].day.condition.icon;

    tomorrowForecast.innerText = forecast.forecast.forecastday[1].day.condition.text;
    tomorrowForecastImg.src = forecast.forecast.forecastday[1].day.condition.icon;

    nextForecast.innerText = forecast.forecast.forecastday[2].day.condition.text;
    nextForecastImg.src = forecast.forecast.forecastday[2].day.condition.icon;

    console.log(forecast);
};

const getSearch = () => {
    location = document.getElementsByName('locationSearch')[0].value;
    setValues(location);
}

const searchButton = document.getElementById('locationSearchButton');
searchButton.addEventListener('click', getSearch);

const defaultLocation = 'South Lake Tahoe'
