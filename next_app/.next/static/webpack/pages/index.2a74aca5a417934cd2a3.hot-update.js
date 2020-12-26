webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "C:\\Users\\pc\\Documents\\GitHub\\reactjs\\next_app\\components\\Counter.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Counter = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Counter, _Component);

  var _super = _createSuper(Counter);

  function Counter(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Counter);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "msgStyle", {
      fontSize: "16pt",
      backgroundColor: "#eef",
      padding: "5px"
    });

    _this.state = {
      counter: 0,
      msg: "counter:0"
    };
    _this.doAction = _this.doAction.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Counter, [{
    key: "doAction",
    value: function doAction() {
      this.setState(function (state) {
        var num = state.counter + 1;
        return {
          counter: num,
          msg: "counter:" + num
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _jsxDEV2;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", (_jsxDEV2 = {
        onClick: this.doAction,
        style: this.msgStyle
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsxDEV2, "style", this.msgStyle), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsxDEV2, "children", this.state.msg), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }, this);
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudGVyLmpzIl0sIm5hbWVzIjpbIkNvdW50ZXIiLCJwcm9wcyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInN0YXRlIiwiY291bnRlciIsIm1zZyIsImRvQWN0aW9uIiwiYmluZCIsInNldFN0YXRlIiwibnVtIiwibXNnU3R5bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFDcUJBLE87Ozs7O0FBTWpCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsbU5BTFI7QUFDUEMsY0FBUSxFQUFFLE1BREg7QUFFUEMscUJBQWUsRUFBRSxNQUZWO0FBR1BDLGFBQU8sRUFBRTtBQUhGLEtBS1E7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBRSxDQURBO0FBRVRDLFNBQUcsRUFBRTtBQUZJLEtBQWI7QUFJQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCx5R0FBaEI7QUFOZTtBQVFsQjs7OzsrQkFDVTtBQUNQLFdBQUtDLFFBQUwsQ0FBYyxVQUFDTCxLQUFELEVBQVc7QUFDckIsWUFBTU0sR0FBRyxHQUFHTixLQUFLLENBQUNDLE9BQU4sR0FBZ0IsQ0FBNUI7QUFDQSxlQUFRO0FBQ0pBLGlCQUFPLEVBQUVLLEdBREw7QUFFSkosYUFBRyxFQUFFLGFBQWFJO0FBRmQsU0FBUjtBQUlILE9BTkQ7QUFPSDs7OzZCQUNRO0FBQUE7O0FBQ0wsMEJBQU87QUFBRyxlQUFPLEVBQUUsS0FBS0gsUUFBakI7QUFBMkIsYUFBSyxFQUFFLEtBQUtJO0FBQXZDLHNIQUNJLEtBQUtBLFFBRFQsbUhBRUYsS0FBS1AsS0FBTCxDQUFXRSxHQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUlIOzs7O0VBN0JnQ00sK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE3NGFjYTVhNDE3OTM0Y2QyYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBtc2dTdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxNnB0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZWZcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjVweFwiXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb3VudGVyOiAwLFxyXG4gICAgICAgICAgICBtc2c6IFwiY291bnRlcjowXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuICAgIGRvQWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHN0YXRlLmNvdW50ZXIgKyAxO1xyXG4gICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXI6IG51bSxcclxuICAgICAgICAgICAgICAgIG1zZzogXCJjb3VudGVyOlwiICsgbnVtXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8cCBvbkNsaWNrPXt0aGlzLmRvQWN0aW9ufSBzdHlsZT17dGhpcy5tc2dTdHlsZX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoaXMubXNnU3R5bGV9PlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tc2d9XHJcbiAgICAgICAgPC9wPjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=