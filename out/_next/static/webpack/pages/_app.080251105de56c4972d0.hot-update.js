webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./store/reducers.js");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var store;

function initStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
}

var initializeStore = function initializeStore(preloadedState) {
  var _store2;

  var _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // 导航到具有初始Redux状态的页面后, 合并 state
  // state中的当前状态，并创建一个新state


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // 重置当前 store

    store = undefined;
  }

  if (false) {}
  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  _s();

  var store = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return initializeStore(initialState);
  }, [initialState]);
  return store;
}

_s(useStore, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsic3RvcmUiLCJpbml0U3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsWUFBbkIsRUFBaUM7QUFDL0IsU0FBT0MseURBQVcsQ0FDaEJDLGlEQURnQixFQUVoQkYsWUFGZ0IsRUFHaEJHLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDQyxtREFBRCxDQUFoQixDQUhILENBQWxCO0FBS0Q7O0FBRU0sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxjQUFELEVBQW9CO0FBQUE7O0FBQ2pELE1BQUlDLE1BQU0sY0FBR1YsS0FBSCw2Q0FBWUMsU0FBUyxDQUFDUSxjQUFELENBQS9CLENBRGlELENBR2pEO0FBQ0E7OztBQUNBLE1BQUlBLGNBQWMsSUFBSVQsS0FBdEIsRUFBNkI7QUFDM0JVLFVBQU0sR0FBR1QsU0FBUyxpQ0FDYkQsS0FBSyxDQUFDVyxRQUFOLEVBRGEsR0FFYkYsY0FGYSxFQUFsQixDQUQyQixDQUszQjs7QUFDQVQsU0FBSyxHQUFHWSxTQUFSO0FBQ0Q7O0FBR0QsYUFBbUM7QUFDbkMsTUFBSSxDQUFDWixLQUFMLEVBQVlBLEtBQUssR0FBR1UsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQW5CTTtBQXFCQSxTQUFTRyxRQUFULENBQWtCWCxZQUFsQixFQUFnQztBQUFBOztBQUNyQyxNQUFNRixLQUFLLEdBQUdjLHFEQUFPLENBQUM7QUFBQSxXQUFNTixlQUFlLENBQUNOLFlBQUQsQ0FBckI7QUFBQSxHQUFELEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPRixLQUFQO0FBQ0Q7O0dBSGVhLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wODAyNTExMDVkZTU2YzQ5NzJkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xyXG5cclxubGV0IHN0b3JlXHJcblxyXG5mdW5jdGlvbiBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcmVkdWNlcnMsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpXHJcblxyXG4gIC8vIOWvvOiIquWIsOWFt+acieWIneWni1JlZHV454q25oCB55qE6aG16Z2i5ZCOLCDlkIjlubYgc3RhdGVcclxuICAvLyBzdGF0ZeS4reeahOW9k+WJjeeKtuaAge+8jOW5tuWIm+W7uuS4gOS4quaWsHN0YXRlXHJcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XHJcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xyXG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcclxuICAgIH0pXHJcbiAgICAvLyDph43nva7lvZPliY0gc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICBcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=