/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  (0, _app2.default)();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  console.log("App started");

  var state = (0, _default_state2.default)();

  // addNewCell(state)
  // addNewCell(state)

  var rootEl = document.getElementById("root");
  (0, _render2.default)(rootEl, state);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") console.log("Up");
    if (e.key === "ArrowDown") console.log("Down");
    if (e.key === "ArrowLeft") {
      (0, _move_left2.default)(state);
      // addNewCell(state)
      (0, _render2.default)(rootEl, state);
    }
    if (e.key === "ArrowRight") {
      (0, _move_right2.default)(state);
      // addNewCell(state)
      (0, _render2.default)(rootEl, state);
    }
  });
};

var _render = __webpack_require__(2);

var _render2 = _interopRequireDefault(_render);

var _default_state = __webpack_require__(4);

var _default_state2 = _interopRequireDefault(_default_state);

var _add_new_cell = __webpack_require__(5);

var _add_new_cell2 = _interopRequireDefault(_add_new_cell);

var _move_left = __webpack_require__(6);

var _move_left2 = _interopRequireDefault(_move_left);

var _move_right = __webpack_require__(7);

var _move_right2 = _interopRequireDefault(_move_right);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rootEl, state) {
  var gridEl = document.createElement("div");
  gridEl.setAttribute("id", "grid");
  gridEl.classList.add("grid");

  state.grid.forEach(function (row, rowIndex) {
    row.forEach(function (cell, cellIndex) {
      var cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      cellEl.classList.add("cell" + cell);
      cellEl.innerHTML = cell;
      cellEl.style.left = cellIndex * _constants.CELL_SIZE;
      cellEl.style.top = rowIndex * _constants.CELL_SIZE;
      gridEl.appendChild(cellEl);
    });
  });

  var oldGrid = document.getElementById("grid");
  if (oldGrid) rootEl.replaceChild(gridEl, oldGrid);else rootEl.appendChild(gridEl);
};

var _constants = __webpack_require__(3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CELL_SIZE = exports.CELL_SIZE = 65;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    grid: [[2, 4, 2, null], [2, null, 4, 2], [2, 4, null, 2], [2, null, null, 4]],
    score: 0
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  var newCell = void 0;
  var grid = state.grid;
  if (Math.random() > 0.1) newCell = 2;else newCell = 4;

  var randomRow = Math.round(Math.random() * (grid.length - 1));
  var randomCol = Math.round(Math.random() * (grid.length - 1));
  var selectedCell = grid[randomRow][randomCol];
  while (selectedCell) {
    randomRow = Math.round(Math.random() * (grid.length - 1));
    randomCol = Math.round(Math.random() * (grid.length - 1));
    selectedCell = grid[randomRow][randomCol];
  }
  grid[randomRow][randomCol] = newCell;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  state.grid.forEach(function (row) {
    row.forEach(function (cell, cellIndex) {
      if (!cell) return;
      if (cellIndex === 0) return;

      var newCellIndex = cellIndex - 1;
      if (row[newCellIndex]) newCellIndex = cellIndex;

      while (!row[newCellIndex - 1] && newCellIndex > 0) {
        newCellIndex--;
      }if (row[cellIndex] === row[newCellIndex - 1]) {
        row[newCellIndex - 1] = row[newCellIndex - 1] + row[cellIndex];
        row[cellIndex] = null;
      } else if (!row[newCellIndex]) {
        row[newCellIndex] = cell;
        row[cellIndex] = null;
      }
    });
  });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  state.grid.forEach(function (row) {
    var rowLength = row.length - 1;
    row.reverse().forEach(function (cell, cellIndex) {
      if (!cell) return;
      if (cellIndex === rowLength) return;

      var newCellIndex = cellIndex + 1;

      if (row[newCellIndex]) newCellIndex = cellIndex;
      while (!row[newCellIndex + 1] && newCellIndex < rowLength) {
        newCellIndex++;
      }if (row[cellIndex] === row[newCellIndex + 1]) {
        row[newCellIndex + 1] = row[newCellIndex + 1] + row[cellIndex];
        row[cellIndex] = null;
      } else if (!row[newCellIndex]) {
        row[newCellIndex] = cell;
        row[cellIndex] = null;
      }
    });
  });
};

/***/ })
/******/ ]);