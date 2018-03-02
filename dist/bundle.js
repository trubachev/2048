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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (line, state) {
  line.forEach(function (cell, index) {

    if (!line[index]) {
      var cutSize = 0;

      while (cutSize < line.length - index) {
        if (line[index + cutSize]) break;
        cutSize++;
      }

      if (cutSize > 0 && cutSize !== line.length - index) line = line.concat(line.splice(index, cutSize));
    }

    if (index === line.length - 1) return;

    if (!line[index]) return;
    if (line[index + 1] && line[index] === line[index + 1]) {
      line[index] += line[index + 1];
      line[index + 1] = null;
      state.score += line[index];
    } else if (line[index - 1] && line[index] === line[index - 1]) {
      line[index - 1] += line[index - 1];
      line[index] = null;
      state.score += line[index - 1];
    }
  });
  return line;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
(function webpackMissingModule() { throw new Error("Cannot find module \"test/*\""); }());
(function webpackMissingModule() { throw new Error("Cannot find module \"/tmp/testBundle.js\""); }());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(3);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  (0, _app2.default)();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  console.log("2048 app started");

  var state = void 0;

  var rootEl = document.getElementById("root");

  newGame();

  document.addEventListener("keydown", function (e) {
    if (state.result) return;
    if (e.key === "ArrowUp") (0, _controls.moveUp)(state, controllCallback);
    if (e.key === "ArrowDown") (0, _controls.moveDown)(state, controllCallback);
    if (e.key === "ArrowLeft") (0, _controls.moveLeft)(state, controllCallback);
    if (e.key === "ArrowRight") (0, _controls.moveRight)(state, controllCallback);
  });

  var newGameButton = document.getElementById("new-game");
  newGameButton.addEventListener("click", function (e) {
    e.preventDefault();
    newGame();
  });

  function newGame() {
    state = (0, _default_state2.default)();
    (0, _controls.addNewCell)(state);
    (0, _controls.addNewCell)(state);
    (0, _index2.default)(state, rootEl);
  }

  function controllCallback(state, stateChanged) {
    if (stateChanged) {
      (0, _controls.addNewCell)(state);
      if ((0, _controls.isWin)(state)) state.result = "win";
    }

    if (!(0, _controls.canMove)(state)) state.result = "lose";
    (0, _index2.default)(state, rootEl);
  }
};

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

var _default_state = __webpack_require__(10);

var _default_state2 = _interopRequireDefault(_default_state);

var _controls = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state, rootEl) {

  (0, _score2.default)(state, rootEl);
  (0, _grid2.default)(state, rootEl);
  (0, _result2.default)(state, rootEl);
  (0, _controls2.default)(state, rootEl);
};

var _grid = __webpack_require__(5);

var _grid2 = _interopRequireDefault(_grid);

var _score = __webpack_require__(7);

var _score2 = _interopRequireDefault(_score);

var _result = __webpack_require__(8);

var _result2 = _interopRequireDefault(_result);

var _controls = __webpack_require__(9);

var _controls2 = _interopRequireDefault(_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(6);

exports.default = function (state, rootEl) {
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CELL_SIZE = exports.CELL_SIZE = 65;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state, rootEl) {
  var scoreLabel = document.getElementById("score");
  if (scoreLabel) scoreLabel.innerHTML = "Score: " + state.score;else {
    scoreLabel = document.createElement("h2");
    scoreLabel.setAttribute("id", "score");
    scoreLabel.innerHTML = "Score: " + state.score;
    rootEl.appendChild(scoreLabel);
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state, rootEl) {

  var resultText = void 0;

  if (state.result) resultText = "You " + state.result;else resultText = "";

  var resultLabel = document.getElementById("result");
  if (!resultLabel) {
    resultLabel = document.createElement("h2");
    resultLabel.setAttribute("id", "result");
    rootEl.appendChild(resultLabel);
  }

  resultLabel.innerHTML = resultText;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state, rootEl) {

  var newButton = document.getElementById("new-game");
  if (!newButton) {
    newButton = document.createElement("button");
    newButton.setAttribute("id", "new-game");
    newButton.classList.add("button");
    newButton.innerHTML = "new game";
    rootEl.appendChild(newButton);
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    grid: [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]],
    score: 0,
    result: null
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewCell = exports.moveRight = exports.moveLeft = exports.moveDown = exports.moveUp = exports.canMove = exports.isWin = undefined;

var _add_new_cell = __webpack_require__(12);

var _add_new_cell2 = _interopRequireDefault(_add_new_cell);

var _move_left = __webpack_require__(13);

var _move_left2 = _interopRequireDefault(_move_left);

var _move_right = __webpack_require__(14);

var _move_right2 = _interopRequireDefault(_move_right);

var _move_up = __webpack_require__(15);

var _move_up2 = _interopRequireDefault(_move_up);

var _move_down = __webpack_require__(16);

var _move_down2 = _interopRequireDefault(_move_down);

var _can_move = __webpack_require__(17);

var _can_move2 = _interopRequireDefault(_can_move);

var _is_win = __webpack_require__(18);

var _is_win2 = _interopRequireDefault(_is_win);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.isWin = _is_win2.default;
exports.canMove = _can_move2.default;
exports.moveUp = _move_up2.default;
exports.moveDown = _move_down2.default;
exports.moveLeft = _move_left2.default;
exports.moveRight = _move_right2.default;
exports.addNewCell = _add_new_cell2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  var newCell = void 0;
  var grid = state.grid;
  if (Math.random() > 0.1) newCell = 2;else newCell = 4;

  var canAddCell = grid.map(function (row) {
    return row.indexOf(null) === -1;
  }).indexOf(false) !== -1;

  if (!canAddCell) return;

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _move_line = __webpack_require__(0);

var _move_line2 = _interopRequireDefault(_move_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, callback) {
  var oldGrid = state.grid.toString();

  state.grid = state.grid.map(function (line) {
    return (0, _move_line2.default)(line, state);
  });

  var newGrid = state.grid.toString();

  var gridChanged = oldGrid !== newGrid;

  callback(state, gridChanged);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _move_line = __webpack_require__(0);

var _move_line2 = _interopRequireDefault(_move_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, callback) {

  var oldGrid = state.grid.toString();

  state.grid = state.grid.map(function (line) {
    return (0, _move_line2.default)(line.reverse(), state).reverse();
  });

  var newGrid = state.grid.toString();

  var gridChanged = oldGrid !== newGrid;

  callback(state, gridChanged);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _move_line = __webpack_require__(0);

var _move_line2 = _interopRequireDefault(_move_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, callback) {
  var oldGrid = state.grid.toString();

  var rotatedGrid = state.grid[0].map(function (col, i) {
    return state.grid.map(function (row) {
      return row[i];
    });
  });

  rotatedGrid = rotatedGrid.map(function (line) {
    return (0, _move_line2.default)(line, state);
  });

  rotatedGrid = rotatedGrid[0].map(function (col, i) {
    return rotatedGrid.map(function (row) {
      return row[i];
    });
  });
  rotatedGrid = rotatedGrid[0].map(function (col, i) {
    return rotatedGrid.map(function (row) {
      return row[i];
    });
  });

  state.grid = rotatedGrid[0].map(function (col, i) {
    return rotatedGrid.map(function (row) {
      return row[i];
    });
  });

  var newGrid = state.grid.toString();

  var gridChanged = oldGrid !== newGrid;

  callback(state, gridChanged);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _move_line = __webpack_require__(0);

var _move_line2 = _interopRequireDefault(_move_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, callback) {
  var oldGrid = state.grid.toString();

  var rotatedGrid = state.grid[0].map(function (col, i) {
    return state.grid.map(function (row) {
      return row[i];
    });
  });
  rotatedGrid = rotatedGrid[0].map(function (col, i) {
    return rotatedGrid.map(function (row) {
      return row[i];
    });
  });
  rotatedGrid = rotatedGrid[0].map(function (col, i) {
    return rotatedGrid.map(function (row) {
      return row[i];
    });
  });

  rotatedGrid = rotatedGrid.map(function (line) {
    return (0, _move_line2.default)(line.reverse(), state).reverse();
  });

  state.grid = rotatedGrid[0].map(function (col, i) {
    return rotatedGrid.map(function (row) {
      return row[i];
    });
  });

  var newGrid = state.grid.toString();

  var gridChanged = oldGrid !== newGrid;

  callback(state, gridChanged);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {

  for (var i = 0; i < state.grid.length; i++) {
    for (var j = 0; j < state.grid[0].length; j++) {
      if (!state.grid[i][j]) return true;

      if (state.grid[i][j] === state.grid[i][j + 1]) return true;
      if (i === state.grid.length - 1) continue;
      if (state.grid[i][j] === state.grid[i + 1][j]) return true;
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {

  for (var i = 0; i < state.grid.length; i++) {
    for (var j = 0; j < state.grid[0].length; j++) {
      if (state.grid[i][j] >= 2048) return true;
    }
  }return false;
};

/***/ })
/******/ ]);