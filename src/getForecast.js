export default async function getForecast(requestedLocation) {
    const newLocation = requestedLocation;
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=c7c264a3ef2c42fab4801504233010&q=' + newLocation + '&days=3&aqi=no&alerts=no', {mode: 'cors'});
    const forecastData = await response.json();
    return forecastData;
}