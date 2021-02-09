webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/index.less */ "./styles/index.less");
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/conf */ "./conf/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "E:\\code\\work\\website\\pages\\index.tsx",
    _s = $RefreshSig$();






var AI_header = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! @/components/AI_header/AI_header */ "./components/AI_header/AI_header.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @/components/AI_header/AI_header */ "./components/AI_header/AI_header.tsx")];
    },
    modules: ['@/components/AI_header/AI_header']
  }
});
_c2 = AI_header;
var AI_footer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c3 = function _c3() {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! @/components/AI_footer/AI_footer */ "./components/AI_footer/AI_footer.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @/components/AI_footer/AI_footer */ "./components/AI_footer/AI_footer.tsx")];
    },
    modules: ['@/components/AI_footer/AI_footer']
  }
});
_c4 = AI_footer;
function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      ltIsAni = _useState[0],
      setLtIsAni = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      rtIsAni = _useState2[0],
      setrtIsAni = _useState2[1];

  var onLeave = function onLeave(origin, destination, direction) {
    console.log(origin, direction);
    var index = destination.index;

    if (index === 0 || index === 2) {
      setLtIsAni(true);
      setrtIsAni(false);
    } else {
      setLtIsAni(false);
      setrtIsAni(true);
    }
  };

  var afterLoad = function afterLoad(origin, destination, direction) {
    console.log(origin, direction);
    var index = destination.index;

    if (index === 0 || index === 2) {
      setLtIsAni(true);
      setrtIsAni(false);
    } else {
      setLtIsAni(false);
      setrtIsAni(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "home",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_header, {
      title: "\u9996\u9875",
      currentIndex: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onLeave: onLeave,
        afterLoad: afterLoad,
        render: function render() {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default.a.Wrapper, {
            children: _conf__WEBPACK_IMPORTED_MODULE_4__["HomeMain"].map(function (_ref, idx) {
              var title = _ref.title,
                  em = _ref.em,
                  img = _ref.img,
                  bg = _ref.bg,
                  leftIsText = _ref.leftIsText,
                  className = _ref.className;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                className: "section",
                style: {
                  backgroundImage: "url(".concat(bg, ")")
                },
                children: [leftIsText ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                    className: ltIsAni ? 'text_box animate__animated animate__backInLeft' : 'text_box',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      children: em
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: ltIsAni ? className + 'img animate__animated animate__backInRight' : className + 'img',
                    src: img,
                    alt: "Show_img"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: rtIsAni ? className + 'img animate__animated animate__backInLeft' : className + 'img',
                    src: img,
                    alt: "Show_img"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                    className: rtIsAni ? 'text_box animate__animated animate__backInRight' : 'text_box',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      children: em
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true), idx === 3 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                  className: "foot",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 23
                }, _this)]
              }, idx, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Home, "Nd6msjzti/MOxNrUu4RITdRO2sE=");

_c5 = Home;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "AI_header$dynamic");
$RefreshReg$(_c2, "AI_header");
$RefreshReg$(_c3, "AI_footer$dynamic");
$RefreshReg$(_c4, "AI_footer");
$RefreshReg$(_c5, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJIb21lIiwidXNlU3RhdGUiLCJsdElzQW5pIiwic2V0THRJc0FuaSIsInJ0SXNBbmkiLCJzZXRydElzQW5pIiwib25MZWF2ZSIsIm9yaWdpbiIsImRlc3RpbmF0aW9uIiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiYWZ0ZXJMb2FkIiwiSG9tZU1haW4iLCJtYXAiLCJpZHgiLCJ0aXRsZSIsImVtIiwiaW1nIiwiYmciLCJsZWZ0SXNUZXh0IiwiY2xhc3NOYW1lIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw0TUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhFQUFSO0FBQUE7QUFBQSxjQUFRLGtDQUFSO0FBQUE7QUFBQSxFQUF6QjtNQUFNRCxTO0FBQ04sSUFBTUUsU0FBUyxHQUFHRCxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUMsUztBQUVTLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUFBLG1CQUVDRixzREFBUSxDQUFDLEtBQUQsQ0FGVDtBQUFBLE1BRXRCRyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBSTdCLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBU0MsV0FBVCxFQUFzQkMsU0FBdEIsRUFBb0M7QUFDbERDLFdB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QTtBQUFBLDZCQVBGLGVBUUU7QUFBQSxnQ0FBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFYRjtBQUFBLGdDQTdCSixFQW9ER0YsR0FBRyxLQUFLLENBQVIsaUJBQ0M7QUFBUywyQkFBUyxFQUFDLE1BQW5CO0FBQUEseUNBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFyREo7QUFBQSxpQkFDT0EsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBQUEsYUFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE07QUFBQTtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyR0Q7O0dBekl1QmhCLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzhjYjcwNzk2ZDk0M2E5YzkxM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvaW5kZXgubGVzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RnVsbHBhZ2UgZnJvbSAnQGZ1bGxwYWdlL3JlYWN0LWZ1bGxwYWdlJ1xyXG5pbXBvcnQgeyBIb21lTWFpbiB9IGZyb20gJ0AvY29uZidcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5jb25zdCBBSV9oZWFkZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2hlYWRlci9BSV9oZWFkZXInKSlcclxuY29uc3QgQUlfZm9vdGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9mb290ZXIvQUlfZm9vdGVyJykpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtsdElzQW5pLCBzZXRMdElzQW5pXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtydElzQW5pLCBzZXRydElzQW5pXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBvbkxlYXZlID0gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2cob3JpZ2luLCBkaXJlY3Rpb24pXHJcblxyXG4gICAgY29uc3QgeyBpbmRleCB9ID0gZGVzdGluYXRpb25cclxuICAgIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMikge1xyXG4gICAgICBzZXRMdElzQW5pKHRydWUpXHJcbiAgICAgIHNldHJ0SXNBbmkoZmFsc2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRMdElzQW5pKGZhbHNlKVxyXG4gICAgICBzZXRydElzQW5pKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZnRlckxvYWQgPSAob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhvcmlnaW4sIGRpcmVjdGlvbilcclxuXHJcbiAgICBjb25zdCB7IGluZGV4IH0gPSBkZXN0aW5hdGlvblxyXG4gICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAyKSB7XHJcbiAgICAgIHNldEx0SXNBbmkodHJ1ZSlcclxuICAgICAgc2V0cnRJc0FuaShmYWxzZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEx0SXNBbmkoZmFsc2UpXHJcbiAgICAgIHNldHJ0SXNBbmkodHJ1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiaG9tZVwiPlxyXG4gICAgICA8QUlfaGVhZGVyIHRpdGxlPVwi6aaW6aG1XCIgY3VycmVudEluZGV4PXswfSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8UmVhY3RGdWxscGFnZVxyXG4gICAgICAgICAgb25MZWF2ZT17b25MZWF2ZX1cclxuICAgICAgICAgIGFmdGVyTG9hZD17YWZ0ZXJMb2FkfVxyXG4gICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdEZ1bGxwYWdlLldyYXBwZXI+XHJcbiAgICAgICAgICAgICAge0hvbWVNYWluLm1hcChcclxuICAgICAgICAgICAgICAgICh7IHRpdGxlLCBlbSwgaW1nLCBiZywgbGVmdElzVGV4dCwgY2xhc3NOYW1lIH0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JnfSlgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGVmdElzVGV4dCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx0SXNBbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dF9ib3ggYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dF9ib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57ZW19PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx0SXNBbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc05hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbWcgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhc3NOYW1lICsgJ2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiU2hvd19pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRJc0FuaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzTmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ltZyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzTmFtZSArICdpbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNob3dfaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRJc0FuaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0X2JveCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dF9ib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57ZW19PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7aWR4ID09PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFJX2Zvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1JlYWN0RnVsbHBhZ2UuV3JhcHBlcj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7LyogPGNvZGU+e0pTT04uc3RyaW5naWZ5KHN0YXRlLCBudWxsLCA0KX08L2NvZGU+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgaGVsbG9cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxzcGFuPntwcm9wcy5tc2d9PC9zcGFuPlxyXG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzLzEucG5nXCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICA8aDE+6Lez6L2sYWJvdXQ8L2gxPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgcGF0aG5hbWU6ICcvYWJvdXQnLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgbmFtZTogJzEyMycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+6Lez6L2sYWJvdXTkvKDlj4I8L2gxPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtsaW5rQ2xpY2t9PlxyXG4gICAgICAgIGpz6Lez6L2sYWJvdXRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2xpbmtEZWFpbENsaWNrfT5cclxuICAgICAgICBqc+i3s+i9rGxpc3RcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFBob25lIC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=