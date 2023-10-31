import getWeather from "./getWeather";

const currentTempCard = document.getElementById('currentTemp');

export default async function setValues() {
    let weather = await getWeather();
    currentTempCard.innerText = weather.current.temp_f;
};