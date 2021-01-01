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
    //計算
    case "ENTER":
      var data2 = state.data.slice();
      var s = action.value;
      data2.unshift(s);
      var num = s.replace(/[^0-9]/g, "");
      var number2 = state.number.slice();
      number2.unshift(num);
      var result = state.result * 1 + num * 1;
      return {
        message: "ENTER",
        data: data2,
        number: number2,
        result: result
      };
    //reset

    case "RESET":
      return {
        message: "RESET",
        data: [],
        number: [],
        result: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsiaW5pdGlhbCIsIm1lc3NhZ2UiLCJkYXRhIiwibnVtYmVyIiwicmVzdWx0IiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhMiIsInNsaWNlIiwicyIsInZhbHVlIiwidW5zaGlmdCIsIm51bSIsInJlcGxhY2UiLCJudW1iZXIyIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDWkMsU0FBTyxFQUFFLE9BREc7QUFFWkMsTUFBSSxFQUFFLEVBRk07QUFHWkMsUUFBTSxFQUFFLEVBSEk7QUFJWkMsUUFBTSxFQUFFO0FBSkksQ0FBaEIsQyxDQU9BOztBQUNBLFNBQVNDLGNBQVQsR0FBaUQ7QUFBQSxNQUF6QkMsS0FBeUIsdUVBQWpCTixPQUFpQjtBQUFBLE1BQVJPLE1BQVE7O0FBQzdDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJO0FBQ0EsU0FBSyxPQUFMO0FBQ0ksVUFBSUMsS0FBSyxHQUFHSCxLQUFLLENBQUNKLElBQU4sQ0FBV1EsS0FBWCxFQUFaO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHSixNQUFNLENBQUNLLEtBQWY7QUFDQUgsV0FBSyxDQUFDSSxPQUFOLENBQWNGLENBQWQ7QUFDQSxVQUFJRyxHQUFHLEdBQUdILENBQUMsQ0FBQ0ksT0FBRixDQUFVLFNBQVYsRUFBcUIsRUFBckIsQ0FBVjtBQUNBLFVBQUlDLE9BQU8sR0FBR1YsS0FBSyxDQUFDSCxNQUFOLENBQWFPLEtBQWIsRUFBZDtBQUNBTSxhQUFPLENBQUNILE9BQVIsQ0FBZ0JDLEdBQWhCO0FBQ0EsVUFBSVYsTUFBTSxHQUFJRSxLQUFLLENBQUNGLE1BQU4sR0FBZSxDQUFoQixHQUFzQlUsR0FBRyxHQUFHLENBQXpDO0FBQ0EsYUFBTztBQUNIYixlQUFPLEVBQUUsT0FETjtBQUVIQyxZQUFJLEVBQUVPLEtBRkg7QUFHSE4sY0FBTSxFQUFFYSxPQUhMO0FBSUhaLGNBQU0sRUFBRUE7QUFKTCxPQUFQO0FBT0o7O0FBQ0EsU0FBSyxPQUFMO0FBQ0ksYUFBTztBQUNISCxlQUFPLEVBQUUsT0FETjtBQUVIQyxZQUFJLEVBQUUsRUFGSDtBQUdIQyxjQUFNLEVBQUUsRUFITDtBQUlIQyxjQUFNLEVBQUU7QUFKTCxPQUFQOztBQU1KO0FBQ0ksYUFBT0UsS0FBUDtBQTFCUjtBQTRCSCxDLENBRUQ7OztBQUNPLFNBQVNXLFNBQVQsR0FBb0M7QUFBQSxNQUFqQlgsS0FBaUIsdUVBQVROLE9BQVM7QUFDdkMsU0FBT2tCLHlEQUFXLENBQUNiLGNBQUQsRUFBaUJDLEtBQWpCLEVBQXdCYSw2REFBZSxDQUFDQyxtREFBRCxDQUF2QyxDQUFsQjtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2ExNzM1YTJlM2M2ZjVhZmMyYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuXHJcbmNvbnN0IGluaXRpYWwgPSB7XHJcbiAgICBtZXNzYWdlOiBcIlNUQVJUXCIsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIG51bWJlcjogW10sXHJcbiAgICByZXN1bHQ6IDBcclxufVxyXG5cclxuLy/jg6zjg4fjg6Xjg7zjgrXjg7xcclxuZnVuY3Rpb24gY291bnRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAvL+ioiOeul1xyXG4gICAgICAgIGNhc2UgXCJFTlRFUlwiOlxyXG4gICAgICAgICAgICBsZXQgZGF0YTIgPSBzdGF0ZS5kYXRhLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGxldCBzID0gYWN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICBkYXRhMi51bnNoaWZ0KHMpO1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gcy5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIik7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIyID0gc3RhdGUubnVtYmVyLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIG51bWJlcjIudW5zaGlmdChudW0pO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gKHN0YXRlLnJlc3VsdCAqIDEpICsgKG51bSAqIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFTlRFUlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YTIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IG51bWJlcjIsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9yZXNldFxyXG4gICAgICAgIGNhc2UgXCJSRVNFVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJSRVNFVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IFtdLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3JlZHV4LXN0b3Jl6Zai5L+CXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9