import getWeather from "./getWeather";

console.log('Hi');

(async () => {
    const weather = await getWeather();
    console.log(weather);
})();