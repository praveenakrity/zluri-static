/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BROWSER\": () => (/* binding */ BROWSER),\n/* harmony export */   \"EXTENSIONS_ID\": () => (/* binding */ EXTENSIONS_ID)\n/* harmony export */ });\nconst BROWSER = {\n    CHROME: 'c',\n    FIREFOX: 'f',\n    EDGE: 'e',\n}\n\nconst EXTENSIONS_ID = {\n    CHROME_1: 'loliglbconoogcjanejkjohbiabmejjf',\n    CHROME_2: 'jfapniijljdpmcoddhpdjgklohpinmbk',\n    EDGE: 'loliglbconoogcjanejkjohbiabmejjf',\n    FIREFOX: 'loliglbconoogcjanejkjohbiabmejjf'\n}\n\n//# sourceURL=webpack://zluri-static/./constants.js?");

/***/ }),

/***/ "./src/tokenStore.js":
/*!***************************!*\
  !*** ./src/tokenStore.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./constants.js\");\n\n\nconst url = window.location.search\nconst urlParams = new URLSearchParams(url)\nconst browser = urlParams.get('b')\nconsole.log(_constants_js__WEBPACK_IMPORTED_MODULE_0__.BROWSER)\n// console.log(process.env.NAME)\n\nif(browser) {\n  if(browser == 'c') {\n    let token = JSON.parse(localStorage.getItem('chrome_token'))\n    if(token) {\n      window.location.replace(`chrome-extension://${_constants_js__WEBPACK_IMPORTED_MODULE_0__.EXTENSIONS_ID.CHROME_2}/options.html?token=${JSON.stringify(token)}`)\n    }\n  } else {\n    console.log(\"jfapniijljdpmcoddhpdjgklohpinmbk\")\n  }\n}\n\n\n\n/* Generates and Sets Access Token and Refresh Token to Local Storage */\nconst rand = () => Math.random().toString(36)\n  \nconst access_token = () => rand()\n  \nconst refresh_token = () => rand() + rand()\n\n//chrome\nconst c_at = access_token();\nconst c_rt = refresh_token();\n\n//firefox\nconst f_at = access_token();\nconst f_rt = refresh_token();\n\n//edge\nconst e_at = access_token();\nconst e_rt = refresh_token();\n\nvar tokens = {}\n\ntokens.chrome = {\n  'at': c_at,\n  'rt': c_rt\n}\n\n\ntokens.firefox = {\n  'at': f_at,\n  'rt': f_rt\n}\n\ntokens.edge = {\n  'at': e_at,\n  'rt': e_rt\n}\n\n// console.table(tokens)\n\ndocument.addEventListener('DOMContentLoaded',() => {\n    // console.log(tokens)\n    localStorage.setItem('chrome_token',JSON.stringify(tokens.chrome))\n    localStorage.setItem('firefox_token',JSON.stringify(tokens.firefox))\n    localStorage.setItem('edge_token',JSON.stringify(tokens.edge))\n    // console.log(BROWSER)\n})\n\n//# sourceURL=webpack://zluri-static/./src/tokenStore.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tokenStore.js");
/******/ 	
/******/ })()
;