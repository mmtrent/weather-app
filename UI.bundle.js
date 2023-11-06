"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["UI"],{

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");


const currentTempCard = document.getElementById('currentTemp');

async function setValues() {
    let weather = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__["default"])();
    currentTempCard.innerText = weather.current.temp_f;
};

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
async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=c7c264a3ef2c42fab4801504233010&q=south_lake_tahoe', {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/UI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDOztBQUV0Qzs7QUFFZTtBQUNmLHdCQUF3Qix1REFBVTtBQUNsQztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Ysc0lBQXNJLGFBQWE7QUFDbko7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0V2VhdGhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9nZXRXZWF0aGVyXCI7XG5cbmNvbnN0IGN1cnJlbnRUZW1wQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZXRWYWx1ZXMoKSB7XG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyKCk7XG4gICAgY3VycmVudFRlbXBDYXJkLmlubmVyVGV4dCA9IHdlYXRoZXIuY3VycmVudC50ZW1wX2Y7XG59OyIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1jN2MyNjRhM2VmMmM0MmZhYjQ4MDE1MDQyMzMwMTAmcT1zb3V0aF9sYWtlX3RhaG9lJywge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=