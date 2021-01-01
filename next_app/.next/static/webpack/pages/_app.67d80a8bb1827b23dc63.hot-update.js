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
        data: data2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsiaW5pdGlhbCIsIm1lc3NhZ2UiLCJkYXRhIiwibnVtYmVyIiwicmVzdWx0IiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhMiIsInNsaWNlIiwicyIsInZhbHVlIiwidW5zaGlmdCIsIm51bSIsInJlcGxhY2UiLCJudW1iZXIyIiwiY291bnQiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNaQyxTQUFPLEVBQUUsT0FERztBQUVaQyxNQUFJLEVBQUUsRUFGTTtBQUdaQyxRQUFNLEVBQUUsRUFISTtBQUlaQyxRQUFNLEVBQUU7QUFKSSxDQUFoQixDLENBT0E7O0FBQ0EsU0FBU0MsY0FBVCxHQUFpRDtBQUFBLE1BQXpCQyxLQUF5Qix1RUFBakJOLE9BQWlCO0FBQUEsTUFBUk8sTUFBUTs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0k7QUFDQSxTQUFLLE9BQUw7QUFDSSxVQUFJQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0osSUFBTixDQUFXUSxLQUFYLEVBQVo7QUFDQSxVQUFJQyxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBZjtBQUNBSCxXQUFLLENBQUNJLE9BQU4sQ0FBY0YsQ0FBZDtBQUNBLFVBQUlHLEdBQUcsR0FBR0gsQ0FBQyxDQUFDSSxPQUFGLENBQVUsU0FBVixFQUFxQixFQUFyQixDQUFWO0FBQ0EsVUFBSUMsT0FBTyxHQUFHVixLQUFLLENBQUNILE1BQU4sQ0FBYU8sS0FBYixFQUFkO0FBQ0FNLGFBQU8sQ0FBQ0gsT0FBUixDQUFnQkMsR0FBaEI7QUFDQSxVQUFJVixNQUFNLEdBQUlFLEtBQUssQ0FBQ0YsTUFBTixHQUFlLENBQWhCLEdBQXNCVSxHQUFHLEdBQUcsQ0FBekM7QUFDQSxhQUFPO0FBQ0hiLGVBQU8sRUFBRSxPQUROO0FBRUhDLFlBQUksRUFBRU87QUFGSCxPQUFQOztBQU1KLFNBQUssT0FBTDtBQUNJLGFBQU87QUFDSFIsZUFBTyxFQUFFLE9BRE47QUFFSGdCLGFBQUssRUFBRWpCLE9BQU8sQ0FBQ2lCO0FBRlosT0FBUDs7QUFJSjtBQUNJLGFBQU9YLEtBQVA7QUF0QlI7QUF3QkgsQyxDQUVEOzs7QUFDTyxTQUFTWSxTQUFULEdBQW9DO0FBQUEsTUFBakJaLEtBQWlCLHVFQUFUTixPQUFTO0FBQ3ZDLFNBQU9tQix5REFBVyxDQUFDZCxjQUFELEVBQWlCQyxLQUFqQixFQUF3QmMsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBbEI7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY3ZDgwYThiYjE4MjdiMjNkYzYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcblxyXG5jb25zdCBpbml0aWFsID0ge1xyXG4gICAgbWVzc2FnZTogXCJTVEFSVFwiLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBudW1iZXI6IFtdLFxyXG4gICAgcmVzdWx0OiAwXHJcbn1cclxuXHJcbi8v44Os44OH44Ol44O844K144O8XHJcbmZ1bmN0aW9uIGNvdW50ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgLy/oqIjnrpdcclxuICAgICAgICBjYXNlIFwiRU5URVJcIjpcclxuICAgICAgICAgICAgbGV0IGRhdGEyID0gc3RhdGUuZGF0YS5zbGljZSgpO1xyXG4gICAgICAgICAgICBsZXQgcyA9IGFjdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgZGF0YTIudW5zaGlmdChzKTtcclxuICAgICAgICAgICAgbGV0IG51bSA9IHMucmVwbGFjZSgvW14wLTldL2csIFwiXCIpO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyMiA9IHN0YXRlLm51bWJlci5zbGljZSgpO1xyXG4gICAgICAgICAgICBudW1iZXIyLnVuc2hpZnQobnVtKTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IChzdGF0ZS5yZXN1bHQgKiAxKSArIChudW0gKiAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRU5URVJcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEyLFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjYXNlIFwiUkVTRVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUkVTRVRcIixcclxuICAgICAgICAgICAgICAgIGNvdW50OiBpbml0aWFsLmNvdW50LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3JlZHV4LXN0b3Jl6Zai5L+CXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9