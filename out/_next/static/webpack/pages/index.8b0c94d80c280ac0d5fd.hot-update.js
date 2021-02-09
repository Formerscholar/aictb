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
      setrtIsAni = _useState2[1]; // console.log('====================================')
  // console.log(props)
  // console.log('====================================')
  // const router = useRouter()
  // const state = useSelector((state) => state)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(startClock())
  // }, [])
  // const linkClick = () => {
  //   router.push({
  //     pathname: '/about',
  //     query: {
  //       set: 'xxx',
  //     },
  //   })
  //   // router.push('/about?name=123')
  // }
  // const linkDeailClick = () => {
  //   console.log('====================================')
  //   console.log('prefetch')
  //   console.log('====================================')
  //   router.push(`/list?data=obj`)
  // }


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
      lineNumber: 70,
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
                      lineNumber: 93,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      children: em
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: ltIsAni ? className + 'img animate__animated animate__backInRight' : className + 'img',
                    src: img,
                    alt: "Show_img"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: rtIsAni ? className + 'img animate__animated animate__backInLeft' : className + 'img',
                    src: img,
                    alt: "Show_img"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                    className: rtIsAni ? 'text_box animate__animated animate__backInRight' : 'text_box',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      children: em
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true), idx === 3 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                  className: "foot",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 23
                }, _this)]
              }, idx, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJIb21lIiwidXNlU3RhdGUiLCJsdElzQW5pIiwic2V0THRJc0FuaSIsInJ0SXNBbmkiLCJzZXRydElzQW5pIiwib25MZWF2ZSIsIm9yaWdpbiIsImRlc3RpbmF0aW9uIiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiYWZ0ZXJMb2FkIiwiSG9tZU1haW4iLCJtYXAiLCJpZHgiLCJ0aXRsZSIsImVtIiwiaW1nIiwiYmciLCJsZWZ0SXNUZXh0IiwiY2xhc3NOYW1lIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw0TUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhFQUFSO0FBQUE7QUFBQSxjQUFRLGtDQUFSO0FBQUE7QUFBQSxFQUF6QjtNQUFNRCxTO0FBQ04sSUFBTUUsU0FBUyxHQUFHRCxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUMsUztBQUVTLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUFBLG1CQUVDRixzREFBUSxDQUFDLEtBQUQsQ0FGVDtBQUFBLE1BRXRCRyxPQUZzQjtBQUFBLE1BRWJDLFVBRmEsa0JBRzdCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFXRTtBQUNFLDZCQUFTLEVBQ1BmLE9BQU8sR0FDSCxpREFERyxHQUVILFVBSlI7QUFBQSw0Q0FPRTtBQUFBLGdDQUFLYTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUEYsZUFRRTtBQUFBLGdDQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVhGO0FBQUEsZ0NBN0JKLEVBb0RHRixHQUFHLEtBQUssQ0FBUixpQkFDQztBQUFTLDJCQUFTLEVBQUMsTUFBbkI7QUFBQSx5Q0FDRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXJESjtBQUFBLGlCQUNPQSxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFBQSxhQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETTtBQUFBO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJHRDs7R0F0S3VCaEIsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YjBjOTRkODBjMjgwYWMwZDVmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9pbmRleC5sZXNzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RGdWxscGFnZSBmcm9tICdAZnVsbHBhZ2UvcmVhY3QtZnVsbHBhZ2UnXHJcbmltcG9ydCB7IEhvbWVNYWluIH0gZnJvbSAnQC9jb25mJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IEFJX2hlYWRlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfaGVhZGVyL0FJX2hlYWRlcicpKVxyXG5jb25zdCBBSV9mb290ZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2Zvb3Rlci9BSV9mb290ZXInKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2x0SXNBbmksIHNldEx0SXNBbmldID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3J0SXNBbmksIHNldHJ0SXNBbmldID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8gY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpXHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgLy8gY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpXHJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgLy8gY29uc3Qgc3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKVxyXG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goc3RhcnRDbG9jaygpKVxyXG4gIC8vIH0sIFtdKVxyXG5cclxuXHJcbiAgLy8gY29uc3QgbGlua0NsaWNrID0gKCkgPT4ge1xyXG4gIC8vICAgcm91dGVyLnB1c2goe1xyXG4gIC8vICAgICBwYXRobmFtZTogJy9hYm91dCcsXHJcbiAgLy8gICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgc2V0OiAneHh4JyxcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pXHJcbiAgLy8gICAvLyByb3V0ZXIucHVzaCgnL2Fib3V0P25hbWU9MTIzJylcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IGxpbmtEZWFpbENsaWNrID0gKCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpXHJcbiAgLy8gICBjb25zb2xlLmxvZygncHJlZmV0Y2gnKVxyXG4gIC8vICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpXHJcbiAgLy8gICByb3V0ZXIucHVzaChgL2xpc3Q/ZGF0YT1vYmpgKVxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3Qgb25MZWF2ZSA9IChvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG9yaWdpbiwgZGlyZWN0aW9uKVxyXG5cclxuICAgIGNvbnN0IHsgaW5kZXggfSA9IGRlc3RpbmF0aW9uXHJcbiAgICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IDIpIHtcclxuICAgICAgc2V0THRJc0FuaSh0cnVlKVxyXG4gICAgICBzZXRydElzQW5pKGZhbHNlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0THRJc0FuaShmYWxzZSlcclxuICAgICAgc2V0cnRJc0FuaSh0cnVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWZ0ZXJMb2FkID0gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2cob3JpZ2luLCBkaXJlY3Rpb24pXHJcblxyXG4gICAgY29uc3QgeyBpbmRleCB9ID0gZGVzdGluYXRpb25cclxuICAgIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMikge1xyXG4gICAgICBzZXRMdElzQW5pKHRydWUpXHJcbiAgICAgIHNldHJ0SXNBbmkoZmFsc2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRMdElzQW5pKGZhbHNlKVxyXG4gICAgICBzZXRydElzQW5pKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImhvbWVcIj5cclxuICAgICAgPEFJX2hlYWRlciB0aXRsZT1cIummlumhtVwiIGN1cnJlbnRJbmRleD17MH0gLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPFJlYWN0RnVsbHBhZ2VcclxuICAgICAgICAgIG9uTGVhdmU9e29uTGVhdmV9XHJcbiAgICAgICAgICBhZnRlckxvYWQ9e2FmdGVyTG9hZH1cclxuICAgICAgICAgIHJlbmRlcj17KCkgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3RGdWxscGFnZS5XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIHtIb21lTWFpbi5tYXAoXHJcbiAgICAgICAgICAgICAgICAoeyB0aXRsZSwgZW0sIGltZywgYmcsIGxlZnRJc1RleHQsIGNsYXNzTmFtZSB9LCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiZ30pYCB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xlZnRJc1RleHQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdElzQW5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHRfYm94IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJbkxlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHRfYm94J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+e2VtfTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdElzQW5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2xhc3NOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW1nIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JhY2tJblJpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzTmFtZSArICdpbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNob3dfaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ0SXNBbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc05hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbWcgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFzc05hbWUgKyAnaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTaG93X2ltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ0SXNBbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dF9ib3ggYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHRfYm94J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+e2VtfTwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2lkeCA9PT0gMyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBSV9mb290ZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9SZWFjdEZ1bGxwYWdlLldyYXBwZXI+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgey8qIDxjb2RlPntKU09OLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgNCl9PC9jb2RlPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIGhlbGxvXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8c3Bhbj57cHJvcHMubXNnfTwvc3Bhbj5cclxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy8xLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgPGgxPui3s+i9rGFib3V0PC9oMT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgIHBhdGhuYW1lOiAnL2Fib3V0JyxcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcxMjMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxPui3s+i9rGFib3V05Lyg5Y+CPC9oMT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17bGlua0NsaWNrfT5cclxuICAgICAgICBqc+i3s+i9rGFib3V0XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtsaW5rRGVhaWxDbGlja30+XHJcbiAgICAgICAganPot7PovaxsaXN0XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxQaG9uZSAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9