"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["main"],{

/***/ "./modules/games-api.js":
/*!******************************!*\
  !*** ./modules/games-api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameAPi)\n/* harmony export */ });\nclass GameAPi {\r\n  constructor() {\r\n    this.gameName = '{ \"name\": \"Card Scores\"}';\r\n    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\r\n    this.gameID = createGame().then((result) => {\r\n      return result;\r\n    });\r\n  }\r\n\r\n  sendRequest(method, url, data) {\r\n    const promise = new Promise((resolve, reject) => { \r\n      const req = new XMLHttpRequest();\r\n      req.open(method, url);\r\n      req.responseType = 'json';\r\n      req.onload = () => {\r\n        if (req.status === 200) {\r\n          resolve(req.response);\r\n        } else {\r\n          reject('Game not yet created');\r\n        }\r\n      };\r\n      req.send(JSON.stringify(data));\r\n    });\r\n    return promise;\r\n  }\r\n\r\n  static getScore() {\r\n    if (this.gameID) {\r\n      return this.sendRequest('GET', this.url);\r\n    }\r\n    return \"No scores added\";\r\n  }\r\n\r\n  addScores(gname, gscore) {\r\n    if (this.game) {\r\n      return sendRequest('POST', this.url, {name: gname, score: gscore});\r\n    } else {\r\n      const result = this.createGame(this.gameName);\r\n      if (result) {\r\n        return sendRequest('POST', this.url, {name: gname, score: gscore});\r\n      } else {\r\n        return \"Could not create game\";\r\n      }\r\n    }\r\n  }\r\n\r\n  createGame() {\r\n    return new Promise((resolve, reject) => {\r\n      const req = new XMLHttpRequest();\r\n      req.open('POST', this.url);\r\n      req.onload = () => {\r\n        if (req.status === 200) {\r\n          const res = req.response.result.split(' ');  \r\n          if (res[res.length - 1].split('.')[0] == 'Added') {\r\n            const gameId = res[3];\r\n            resolve(gameId);\r\n          }\r\n          resolve(req.response);\r\n        } else {\r\n          reject(false);\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://leaderboard/./modules/games-api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_games_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/games-api.js */ \"./modules/games-api.js\");\n \r\n\r\nconst refreshBtn = document.querySelector('.refresh');\r\n\r\n\r\nrefreshBtn.addEventListener('click', () => {\r\n  console.log(_modules_games_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getScore);\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);