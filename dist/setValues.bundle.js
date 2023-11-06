"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["setValues"],{

/***/ "./src/getForecast.js":
/*!****************************!*\
  !*** ./src/getForecast.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getForecast)
/* harmony export */ });
async function getForecast(requestedLocation) {
    const newLocation = requestedLocation;
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=c7c264a3ef2c42fab4801504233010&q=' + newLocation + '&days=3&aqi=no&alerts=no', {mode: 'cors'});
    const forecastData = await response.json();
    return forecastData;
}

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(requestedLocation) {
    const newLocation = requestedLocation;
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=c7c264a3ef2c42fab4801504233010&q=' + newLocation + '&nocache=' + new Date().getTime(), {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}

/***/ }),

/***/ "./src/setValues.js":
/*!**************************!*\
  !*** ./src/setValues.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var _getForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getForecast */ "./src/getForecast.js");
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");




async function setValues(weatherLocation) {
    let weather = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherLocation);
    let forecast = await (0,_getForecast__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherLocation);

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/setValues.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0VmFsdWVzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLGtLQUFrSyxhQUFhO0FBQy9LO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0EseUtBQXlLLGFBQWE7QUFDdEw7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHdDO0FBQ0Y7OztBQUd2QjtBQUNmLHdCQUF3Qix1REFBVTtBQUNsQyx5QkFBeUIsd0RBQVc7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldEZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2V0VmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KHJlcXVlc3RlZExvY2F0aW9uKSB7XG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSByZXF1ZXN0ZWRMb2NhdGlvbjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jN2MyNjRhM2VmMmM0MmZhYjQ4MDE1MDQyMzMwMTAmcT0nICsgbmV3TG9jYXRpb24gKyAnJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vJywge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZm9yZWNhc3REYXRhO1xufSIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIocmVxdWVzdGVkTG9jYXRpb24pIHtcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IHJlcXVlc3RlZExvY2F0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9YzdjMjY0YTNlZjJjNDJmYWI0ODAxNTA0MjMzMDEwJnE9JyArIG5ld0xvY2F0aW9uICsgJyZub2NhY2hlPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn0iLCJpbXBvcnQgZ2V0Rm9yZWNhc3QgZnJvbSBcIi4vZ2V0Rm9yZWNhc3RcIjtcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL2dldFdlYXRoZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZXRWYWx1ZXMod2VhdGhlckxvY2F0aW9uKSB7XG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyKHdlYXRoZXJMb2NhdGlvbik7XG4gICAgbGV0IGZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3Qod2VhdGhlckxvY2F0aW9uKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUZW1wQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpO1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbkNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudExvY2F0aW9uJyk7XG4gICAgY29uc3QgY3VycmVudENvbmRpdGlvbkNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmRpdGlvbicpO1xuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50V2VhdGhlckljb24nKTtcblxuICAgIGNvbnN0IHRvZGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlGb3JlY2FzdCcpO1xuICAgIGNvbnN0IHRvZGF5Rm9yZWNhc3RJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlGb3JlY2FzdEltZycpXG5cbiAgICBjb25zdCB0b21vcnJvd0ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvbW9ycm93Rm9yZWNhc3QnKTtcbiAgICBjb25zdCB0b21vcnJvd0ZvcmVjYXN0SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvbW9ycm93Rm9yZWNhc3RJbWcnKVxuXG4gICAgY29uc3QgbmV4dEZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRGb3JlY2FzdCcpO1xuICAgIGNvbnN0IG5leHRGb3JlY2FzdEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Rm9yZWNhc3RJbWcnKVxuXG4gICAgY3VycmVudFRlbXBDYXJkLmlubmVyVGV4dCA9IHdlYXRoZXIuY3VycmVudC50ZW1wX2YgKyAnXFx4QjAnICsgJ0YnO1xuICAgIGN1cnJlbnRMb2NhdGlvbkNhcmQuaW5uZXJUZXh0ID0gd2VhdGhlci5sb2NhdGlvbi5uYW1lO1xuICAgIGN1cnJlbnRDb25kaXRpb25DYXJkLmlubmVyVGV4dCA9IHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICBjdXJyZW50V2VhdGhlckljb24uc3JjID0gd2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgdG9kYXlGb3JlY2FzdC5pbm5lclRleHQgPSBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgdG9kYXlGb3JlY2FzdEltZy5zcmMgPSBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICB0b21vcnJvd0ZvcmVjYXN0LmlubmVyVGV4dCA9IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dDtcbiAgICB0b21vcnJvd0ZvcmVjYXN0SW1nLnNyYyA9IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIG5leHRGb3JlY2FzdC5pbm5lclRleHQgPSBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgbmV4dEZvcmVjYXN0SW1nLnNyYyA9IGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICByZXR1cm47XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==