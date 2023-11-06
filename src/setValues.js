import getForecast from "./getForecast";
import getWeather from "./getWeather";


export default async function setValues(weatherLocation) {
    let weather = await getWeather(weatherLocation);
    let forecast = await getForecast(weatherLocation);

    const currentTempCard = document.getElementById('currentTemp');
    const currentLocationCard = document.getElementById('currentLocation');
    const currentConditionCard = document.getElementById('currentCondition');
    const currentWeatherIcon = document.getElementById('currentWeatherIcon');

    const todayForecast = document.getElementById('todayForecast');
    const todayForecastImg = document.getElementById('todayForecastImg')

    const tomorrowForecast = document.getElementById('tomorrowForecast');
    const tomorrowForecastImg = document.getElementById('tomorrowForecastImg')

    const nextForecast = document.getElementById('nextForecast');
    const nextForecastImg = document.getElementById('nextForecastImg')

    currentTempCard.innerText = weather.current.temp_f + '\xB0' + 'F';
    currentLocationCard.innerText = weather.location.name;
    currentConditionCard.innerText = weather.current.condition.text;
    currentWeatherIcon.src = weather.current.condition.icon;

    todayForecast.innerText = forecast.forecast.forecastday[0].day.condition.text;
    todayForecastImg.src = forecast.forecast.forecastday[0].day.condition.icon;

    tomorrowForecast.innerText = forecast.forecast.forecastday[1].day.condition.text;
    tomorrowForecastImg.src = forecast.forecast.forecastday[1].day.condition.icon;

    nextForecast.innerText = forecast.forecast.forecastday[2].day.condition.text;
    nextForecastImg.src = forecast.forecast.forecastday[2].day.condition.icon;
    return;
};