"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["getSearch"],{

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

/***/ "./src/getSearch.js":
/*!**************************!*\
  !*** ./src/getSearch.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSearch)
/* harmony export */ });
/* harmony import */ var _setValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setValues */ "./src/setValues.js");


function getSearch () {
    let weatherLocation = document.getElementsByName('locationSearch')[0].value;
    (0,_setValues__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherLocation);    
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getSearch.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2VhcmNoLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLGtLQUFrSyxhQUFhO0FBQy9LO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTG9DOztBQUVyQjtBQUNmO0FBQ0EsSUFBSSxzREFBUztBQUNiOzs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQSx5S0FBeUssYUFBYTtBQUN0TDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMd0M7QUFDRjs7O0FBR3ZCO0FBQ2Ysd0JBQXdCLHVEQUFVO0FBQ2xDLHlCQUF5Qix3REFBVzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0U2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2V0VmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KHJlcXVlc3RlZExvY2F0aW9uKSB7XG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSByZXF1ZXN0ZWRMb2NhdGlvbjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jN2MyNjRhM2VmMmM0MmZhYjQ4MDE1MDQyMzMwMTAmcT0nICsgbmV3TG9jYXRpb24gKyAnJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vJywge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZm9yZWNhc3REYXRhO1xufSIsImltcG9ydCBzZXRWYWx1ZXMgZnJvbSBcIi4vc2V0VmFsdWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNlYXJjaCAoKSB7XG4gICAgbGV0IHdlYXRoZXJMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdsb2NhdGlvblNlYXJjaCcpWzBdLnZhbHVlO1xuICAgIHNldFZhbHVlcyh3ZWF0aGVyTG9jYXRpb24pOyAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHJlcXVlc3RlZExvY2F0aW9uKSB7XG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSByZXF1ZXN0ZWRMb2NhdGlvbjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWM3YzI2NGEzZWYyYzQyZmFiNDgwMTUwNDIzMzAxMCZxPScgKyBuZXdMb2NhdGlvbiArICcmbm9jYWNoZT0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCksIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59IiwiaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL2dldEZvcmVjYXN0XCI7XG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9nZXRXZWF0aGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2V0VmFsdWVzKHdlYXRoZXJMb2NhdGlvbikge1xuICAgIGxldCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlcih3ZWF0aGVyTG9jYXRpb24pO1xuICAgIGxldCBmb3JlY2FzdCA9IGF3YWl0IGdldEZvcmVjYXN0KHdlYXRoZXJMb2NhdGlvbik7XG5cbiAgICBjb25zdCBjdXJyZW50VGVtcENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRlbXAnKTtcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb25DYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRMb2NhdGlvbicpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb25DYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25kaXRpb24nKTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFdlYXRoZXJJY29uJyk7XG5cbiAgICBjb25zdCB0b2RheUZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Rm9yZWNhc3QnKTtcbiAgICBjb25zdCB0b2RheUZvcmVjYXN0SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Rm9yZWNhc3RJbWcnKVxuXG4gICAgY29uc3QgdG9tb3Jyb3dGb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b21vcnJvd0ZvcmVjYXN0Jyk7XG4gICAgY29uc3QgdG9tb3Jyb3dGb3JlY2FzdEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b21vcnJvd0ZvcmVjYXN0SW1nJylcblxuICAgIGNvbnN0IG5leHRGb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Rm9yZWNhc3QnKTtcbiAgICBjb25zdCBuZXh0Rm9yZWNhc3RJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEZvcmVjYXN0SW1nJylcblxuICAgIGN1cnJlbnRUZW1wQ2FyZC5pbm5lclRleHQgPSB3ZWF0aGVyLmN1cnJlbnQudGVtcF9mICsgJ1xceEIwJyArICdGJztcbiAgICBjdXJyZW50TG9jYXRpb25DYXJkLmlubmVyVGV4dCA9IHdlYXRoZXIubG9jYXRpb24ubmFtZTtcbiAgICBjdXJyZW50Q29uZGl0aW9uQ2FyZC5pbm5lclRleHQgPSB3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgY3VycmVudFdlYXRoZXJJY29uLnNyYyA9IHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24uaWNvbjtcblxuICAgIHRvZGF5Rm9yZWNhc3QuaW5uZXJUZXh0ID0gZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIHRvZGF5Rm9yZWNhc3RJbWcuc3JjID0gZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgdG9tb3Jyb3dGb3JlY2FzdC5pbm5lclRleHQgPSBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgdG9tb3Jyb3dGb3JlY2FzdEltZy5zcmMgPSBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICBuZXh0Rm9yZWNhc3QuaW5uZXJUZXh0ID0gZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIG5leHRGb3JlY2FzdEltZy5zcmMgPSBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgcmV0dXJuO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=