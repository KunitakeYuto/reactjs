webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../../../node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");


var initial = {
  message: "START",
  data: [],
  number: [],
  result: 0
}; //レデューサー

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "INCREMENT":
      return {
        message: "INCREMENT",
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        message: "DECREMENT",
        count: state.count - 1
      };

    case "RESET":
      return {
        message: "RESET",
        count: initial.count
      };

    default:
      return state;
  }
} //redux-store関係


function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsiaW5pdGlhbCIsIm1lc3NhZ2UiLCJkYXRhIiwibnVtYmVyIiwicmVzdWx0IiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb3VudCIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ1pDLFNBQU8sRUFBRSxPQURHO0FBRVpDLE1BQUksRUFBRSxFQUZNO0FBR1pDLFFBQU0sRUFBRSxFQUhJO0FBSVpDLFFBQU0sRUFBRTtBQUpJLENBQWhCLEMsQ0FPQTs7QUFDQSxTQUFTQyxjQUFULEdBQWlEO0FBQUEsTUFBekJDLEtBQXlCLHVFQUFqQk4sT0FBaUI7QUFBQSxNQUFSTyxNQUFROztBQUM3QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLFdBQUw7QUFDSSxhQUFPO0FBQ0hQLGVBQU8sRUFBRSxXQUROO0FBRUhRLGFBQUssRUFBRUgsS0FBSyxDQUFDRyxLQUFOLEdBQWM7QUFGbEIsT0FBUDs7QUFJSixTQUFLLFdBQUw7QUFDSSxhQUFPO0FBQ0hSLGVBQU8sRUFBRSxXQUROO0FBRUhRLGFBQUssRUFBRUgsS0FBSyxDQUFDRyxLQUFOLEdBQWM7QUFGbEIsT0FBUDs7QUFJSixTQUFLLE9BQUw7QUFDSSxhQUFPO0FBQ0hSLGVBQU8sRUFBRSxPQUROO0FBRUhRLGFBQUssRUFBRVQsT0FBTyxDQUFDUztBQUZaLE9BQVA7O0FBSUo7QUFDSSxhQUFPSCxLQUFQO0FBakJSO0FBbUJILEMsQ0FFRDs7O0FBQ08sU0FBU0ksU0FBVCxHQUFvQztBQUFBLE1BQWpCSixLQUFpQix1RUFBVE4sT0FBUztBQUN2QyxTQUFPVyx5REFBVyxDQUFDTixjQUFELEVBQWlCQyxLQUFqQixFQUF3Qk0sNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBbEI7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY5NTk3MDhkNzM2ZTYwYzgyMWY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcblxyXG5jb25zdCBpbml0aWFsID0ge1xyXG4gICAgbWVzc2FnZTogXCJTVEFSVFwiLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBudW1iZXI6IFtdLFxyXG4gICAgcmVzdWx0OiAwXHJcbn1cclxuXHJcbi8v44Os44OH44Ol44O844K144O8XHJcbmZ1bmN0aW9uIGNvdW50ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIklOQ1JFTUVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJTkNSRU1FTlRcIixcclxuICAgICAgICAgICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCArIDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiREVDUkVNRU5UXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRFQ1JFTUVOVFwiLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJSRVNFVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJSRVNFVFwiLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IGluaXRpYWwuY291bnQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vcmVkdXgtc3RvcmXplqLkv4JcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZShzdGF0ZSA9IGluaXRpYWwpIHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=