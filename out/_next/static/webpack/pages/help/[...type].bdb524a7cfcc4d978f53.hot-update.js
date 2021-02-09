webpackHotUpdate_N_E("pages/help/[...type]",{

/***/ "./pages/help/[...type].tsx":
/*!**********************************!*\
  !*** ./pages/help/[...type].tsx ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_helplist_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/helplist.less */ "./styles/helplist.less");
/* harmony import */ var _styles_helplist_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_helplist_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "E:\\code\\work\\website\\pages\\help\\[...type].tsx";


var AI_header = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
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
var AI_footer = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c3 = function _c3() {
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
var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search;
var __N_SSG = true;
function List(props) {
  var _this = this;

  var list = props.list;
  console.log(list);

  var onSearch = function onSearch(value) {
    return console.log(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "Student",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_header, {
      title: "\u5E2E\u52A9\u4E2D\u5FC3",
      currentIndex: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "banner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "search_box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Search, {
          className: "search",
          placeholder: "\u67E5\u627E\u60A8\u9700\u8981\u7684\u5185\u5BB9",
          allowClear: true,
          enterButton: "\u641C\u7D22",
          size: "large",
          onSearch: onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "main_body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lt_warp",
          children: list.helpsType.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "lt_item current",
              children: ["/", item.name]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "rt_box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ri_item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "title",
              children: "APP/\u5C0F\u7A0B\u5E8F\u5982\u4F55\u52A0\u5165\u73ED\u7EA7\uFF1F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content",
              children: "APP/\u5C0F\u7A0B\u5E8F\u5728\u300A\u6211\u7684\u300B\u9875\u9762\u201C\u7ED1\u5B9A\u73ED\u7EA7\u201D\u5185\u8F93\u5165\u73ED\u7EA7ID\u6216\u8005\u8001\u5E08\u624B\u673A\u53F7\u67E5\u627E\u73ED\u7EA7\uFF0C\u627E\u5230\u73ED\u7EA7\u540E\u201C\u70B9\u51FB\u201D\u52A0\u5165\u73ED\u7EA7 \u5373\u53EF\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ri_item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "title",
              children: "\u90AE\u7BB1\u672A\u6536\u5230\u4E0B\u8F7D\u7684\u9519\u9898\u672C\u600E\u4E48\u529E\uFF1F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content",
              children: "\u5728\u300A\u6211\u7684\u300B\u9875\u9762\u4E2A\u4EBA\u4FE1\u606F\u91CC\u70B9\u51FB\u8FDB\u5165\uFF0C\u5728\u4FE1\u606F\u5217\u8868\u5185\u68C0\u67E5\u90AE\u7BB1\u662F\u5426\u8F93\u5165\u6B63\u786E\uFF1B\u5982\u679C\u6B63\u786E\u4E14\u672A\u6536\u5230\u90AE\u4EF6\uFF0C\u53EF\u4EE5\u5728\u610F\u89C1 \u53CD\u9988\u7ED9\u6211\u4EEC\u7559\u8A00\uFF0C\u6211\u4EEC\u4F1A\u53CA\u65F6\u5904\u7406\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
_c5 = List;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "AI_header$dynamic");
$RefreshReg$(_c2, "AI_header");
$RefreshReg$(_c3, "AI_footer$dynamic");
$RefreshReg$(_c4, "AI_footer");
$RefreshReg$(_c5, "List");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9bLi4udHlwZV0udHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJTZWFyY2giLCJMaXN0IiwicHJvcHMiLCJsaXN0IiwiY29uc29sZSIsImxvZyIsIm9uU2VhcmNoIiwidmFsdWUiLCJoZWxwc1R5cGUiLCJtYXAiLCJpdGVtIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUNOLElBQU1FLFNBQVMsR0FBR0QsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEVBQVI7QUFBQTtBQUFBLGNBQVEsa0NBQVI7QUFBQTtBQUFBLEVBQXpCO01BQU1DLFM7SUFJRUMsTSx5REFBQUEsTTs7QUFnRE8sU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEsTUFDMUJDLElBRDBCLEdBQ2pCRCxLQURpQixDQUMxQkMsSUFEMEI7QUFFbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUVBLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxXQUFXSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWixDQUFYO0FBQUEsR0FBakI7O0FBQ0Esc0JBQ0U7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFBLDRCQUNFLHFFQUFDLFNBQUQ7QUFBVyxXQUFLLEVBQUMsMEJBQWpCO0FBQXdCLGtCQUFZLEVBQUU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBUyxpQkFBUyxFQUFDLFlBQW5CO0FBQUEsK0JBQ0UscUVBQUMsTUFBRDtBQUNFLG1CQUFTLEVBQUMsUUFEWjtBQUVFLHFCQUFXLEVBQUMsa0RBRmQ7QUFHRSxvQkFBVSxNQUhaO0FBSUUscUJBQVcsRUFBQyxjQUpkO0FBS0UsY0FBSSxFQUFDLE9BTFA7QUFNRSxrQkFBUSxFQUFFRDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFZRTtBQUFTLGlCQUFTLEVBQUMsV0FBbkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLG9CQUVJSCxJQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixVQUFBQyxJQUFJLEVBQUk7QUFDekIsZ0NBQ0U7QUFBSyx1QkFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQWlEQSxJQUFJLENBQUNDLElBQXREO0FBQUEsZUFBc0NELElBQUksQ0FBQ0UsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUlELFdBTEQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBMkJFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVFFO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQTJERSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErREQ7TUFwRXVCWCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hlbHAvWy4uLnR5cGVdLmJkYjUyNGE3Y2ZjYzRkOTc4ZjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2hlbHBsaXN0Lmxlc3MnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuY29uc3QgQUlfaGVhZGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9oZWFkZXIvQUlfaGVhZGVyJykpXHJcbmNvbnN0IEFJX2Zvb3RlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfZm9vdGVyL0FJX2Zvb3RlcicpKVxyXG5pbXBvcnQgeyBJbnB1dCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IGdldGhlbHBzVHlwZURldGFpbCB9IGZyb20gJ0Avc2VydmljZXMvcHVibGljJ1xyXG5cclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IFsnOCcsICczJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc5JywgJzMnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzgnLCAnNCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IFsnOScsICc0J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSB9ID0gcGFyYW1zXHJcbiAgY29uc29sZS5sb2codHlwZSlcclxuXHJcbiAgY29uc3QgeyBjb2RlLCBkYXRhLCBtc2cgfSA9IGF3YWl0IGdldGhlbHBzVHlwZURldGFpbCh7XHJcbiAgICB0eXBlOiB0eXBlWzFdLFxyXG4gIH0pXHJcbiAgaWYgKGNvZGUgIT09IDIwMCkge1xyXG4gICAgbWVzc2FnZS5lcnJvcihtc2cpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlzdDogZGF0YSxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBsaXN0IH0gPSBwcm9wc1xyXG4gIGNvbnNvbGUubG9nKGxpc3QpXHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gKHZhbHVlKSA9PiBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIlN0dWRlbnRcIj5cclxuICAgICAgPEFJX2hlYWRlciB0aXRsZT1cIuW4ruWKqeS4reW/g1wiIGN1cnJlbnRJbmRleD17Mn0gLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFubmVyXCI+PC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlYXJjaF9ib3hcIj5cclxuICAgICAgICAgIDxTZWFyY2hcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmn6Xmib7mgqjpnIDopoHnmoTlhoXlrrlcIlxyXG4gICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgIGVudGVyQnV0dG9uPVwi5pCc57SiXCJcclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpbl9ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X3dhcnBcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpc3QuaGVscHNUeXBlLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbSBjdXJyZW50XCIga2V5PXtpdGVtLmlkfT4ve2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+5Yqg55ufPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPui/kOiQpTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7mnI3liqE8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+5bqU55SoPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPuezu+e7nzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7mlrDmiYvmjIfljZc8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtIGN1cnJlbnRcIj7luLjop4Hpl67popg8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+6KeG6aKR6Kej6K+0PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPuaLjeeFp+ivhuWIqzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7nj63nuqforr7nva48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+562U5qGI6Kej5p6QPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPnZpcOWFheWAvDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7nvLTotLnlvILluLg8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+55+l6K+G54K5PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPuWQjeagoei1hOa6kDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7pl67popjlj43ppog8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnRfYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlfaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5BUFAv5bCP56iL5bqP5aaC5L2V5Yqg5YWl54+t57qn77yfPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICBBUFAv5bCP56iL5bqP5Zyo44CK5oiR55qE44CL6aG16Z2i4oCc57uR5a6a54+t57qn4oCd5YaF6L6T5YWl54+t57qnSUTmiJbogIXogIHluIjmiYvmnLrlj7fmn6Xmib7nj63nuqfvvIzmib7liLDnj63nuqflkI7igJzngrnlh7vigJ3liqDlhaXnj63nuqdcclxuICAgICAgICAgICAgICAgIOWNs+WPr+OAglxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaV9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPumCrueuseacquaUtuWIsOS4i+i9veeahOmUmemimOacrOaAjuS5iOWKnu+8nzwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAg5Zyo44CK5oiR55qE44CL6aG16Z2i5Liq5Lq65L+h5oGv6YeM54K55Ye76L+b5YWl77yM5Zyo5L+h5oGv5YiX6KGo5YaF5qOA5p+l6YKu566x5piv5ZCm6L6T5YWl5q2j56Gu77yb5aaC5p6c5q2j56Gu5LiU5pyq5pS25Yiw6YKu5Lu277yM5Y+v5Lul5Zyo5oSP6KeBXHJcbiAgICAgICAgICAgICAgICDlj43ppojnu5nmiJHku6znlZnoqIDvvIzmiJHku6zkvJrlj4rml7blpITnkIbjgIJcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEFJX2Zvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=