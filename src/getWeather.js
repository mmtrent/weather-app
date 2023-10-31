export default async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=c7c264a3ef2c42fab4801504233010&q=south_lake_tahoe', {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}