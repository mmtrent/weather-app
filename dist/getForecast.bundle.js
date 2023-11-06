"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["getForecast"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getForecast.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Rm9yZWNhc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0Esa0tBQWtLLGFBQWE7QUFDL0s7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0Rm9yZWNhc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QocmVxdWVzdGVkTG9jYXRpb24pIHtcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IHJlcXVlc3RlZExvY2F0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWM3YzI2NGEzZWYyYzQyZmFiNDgwMTUwNDIzMzAxMCZxPScgKyBuZXdMb2NhdGlvbiArICcmZGF5cz0zJmFxaT1ubyZhbGVydHM9bm8nLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBmb3JlY2FzdERhdGE7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9