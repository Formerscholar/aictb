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
              children: "/"
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9bLi4udHlwZV0udHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJTZWFyY2giLCJMaXN0IiwicHJvcHMiLCJsaXN0IiwiY29uc29sZSIsImxvZyIsIm9uU2VhcmNoIiwidmFsdWUiLCJoZWxwc1R5cGUiLCJtYXAiLCJpdGVtIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw0TUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhFQUFSO0FBQUE7QUFBQSxjQUFRLGtDQUFSO0FBQUE7QUFBQSxFQUF6QjtNQUFNRCxTO0FBQ04sSUFBTUUsU0FBUyxHQUFHRCxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUMsUztJQUlFQyxNLHlEQUFBQSxNOztBQWdETyxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDakJELEtBRGlCLENBQzFCQyxJQUQwQjtBQUVsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBRUEsTUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFdBQVdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaLENBQVg7QUFBQSxHQUFqQjs7QUFDQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUEsNEJBQ0UscUVBQUMsU0FBRDtBQUFXLFdBQUssRUFBQywwQkFBakI7QUFBd0Isa0JBQVksRUFBRTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFTLGlCQUFTLEVBQUMsWUFBbkI7QUFBQSwrQkFDRSxxRUFBQyxNQUFEO0FBQ0UsbUJBQVMsRUFBQyxRQURaO0FBRUUscUJBQVcsRUFBQyxrREFGZDtBQUdFLG9CQUFVLE1BSFo7QUFJRSxxQkFBVyxFQUFDLGNBSmQ7QUFLRSxjQUFJLEVBQUMsT0FMUDtBQU1FLGtCQUFRLEVBQUVEO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQVlFO0FBQVMsaUJBQVMsRUFBQyxXQUFuQjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsb0JBRUlILElBQUksQ0FBQ0ssU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUFDLElBQUksRUFBSTtBQUN6QixnQ0FDSjtBQUFLLHVCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBLGVBQXNDQSxJQUFJLENBQUNDLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREk7QUFJRCxXQUxEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQTJCRTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFRRTtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUEyREUscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0REO01BcEV1QlYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oZWxwL1suLi50eXBlXS43ZGY1NWQ3ODEwZDZlNTdjMGMwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9oZWxwbGlzdC5sZXNzJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IEFJX2hlYWRlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfaGVhZGVyL0FJX2hlYWRlcicpKVxyXG5jb25zdCBBSV9mb290ZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2Zvb3Rlci9BSV9mb290ZXInKSlcclxuaW1wb3J0IHsgSW5wdXQsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBnZXRoZWxwc1R5cGVEZXRhaWwgfSBmcm9tICdAL3NlcnZpY2VzL3B1YmxpYydcclxuXHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzgnLCAnMyddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IFsnOScsICczJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc4JywgJzQnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzknLCAnNCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB7IHR5cGUgfSA9IHBhcmFtc1xyXG4gIGNvbnNvbGUubG9nKHR5cGUpXHJcblxyXG4gIGNvbnN0IHsgY29kZSwgZGF0YSwgbXNnIH0gPSBhd2FpdCBnZXRoZWxwc1R5cGVEZXRhaWwoe1xyXG4gICAgdHlwZTogdHlwZVsxXSxcclxuICB9KVxyXG4gIGlmIChjb2RlICE9PSAyMDApIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IobXNnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxpc3Q6IGRhdGEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IHsgbGlzdCB9ID0gcHJvcHNcclxuICBjb25zb2xlLmxvZyhsaXN0KVxyXG5cclxuICBjb25zdCBvblNlYXJjaCA9ICh2YWx1ZSkgPT4gY29uc29sZS5sb2codmFsdWUpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJTdHVkZW50XCI+XHJcbiAgICAgIDxBSV9oZWFkZXIgdGl0bGU9XCLluK7liqnkuK3lv4NcIiBjdXJyZW50SW5kZXg9ezJ9IC8+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJhbm5lclwiPjwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWFyY2hfYm94XCI+XHJcbiAgICAgICAgICA8U2VhcmNoXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5p+l5om+5oKo6ZyA6KaB55qE5YaF5a65XCJcclxuICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICBlbnRlckJ1dHRvbj1cIuaQnOe0olwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5fYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF93YXJwXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaXN0LmhlbHBzVHlwZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW0gY3VycmVudFwiIGtleT17aXRlbS5pZH0+LzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7liqDnm588L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+6L+Q6JClPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPuacjeWKoTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7lupTnlKg8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+57O757ufPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPuaWsOaJi+aMh+WNlzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW0gY3VycmVudFwiPuW4uOingemXrumimDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7op4bpopHop6Por7Q8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+5ouN54Wn6K+G5YirPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPuePree6p+iuvue9rjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7nrZTmoYjop6PmnpA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+dmlw5YWF5YC8PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPue8tOi0ueW8guW4uDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X2l0ZW1cIj7nn6Xor4bngrk8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF9pdGVtXCI+5ZCN5qCh6LWE5rqQPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfaXRlbVwiPumXrumimOWPjemmiDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydF9ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaV9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFQUC/lsI/nqIvluo/lpoLkvZXliqDlhaXnj63nuqfvvJ88L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIEFQUC/lsI/nqIvluo/lnKjjgIrmiJHnmoTjgIvpobXpnaLigJznu5Hlrprnj63nuqfigJ3lhoXovpPlhaXnj63nuqdJROaIluiAheiAgeW4iOaJi+acuuWPt+afpeaJvuePree6p++8jOaJvuWIsOePree6p+WQjuKAnOeCueWHu+KAneWKoOWFpeePree6p1xyXG4gICAgICAgICAgICAgICAg5Y2z5Y+v44CCXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+6YKu566x5pyq5pS25Yiw5LiL6L2955qE6ZSZ6aKY5pys5oCO5LmI5Yqe77yfPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICDlnKjjgIrmiJHnmoTjgIvpobXpnaLkuKrkurrkv6Hmga/ph4zngrnlh7vov5vlhaXvvIzlnKjkv6Hmga/liJfooajlhoXmo4Dmn6Xpgq7nrrHmmK/lkKbovpPlhaXmraPnoa7vvJvlpoLmnpzmraPnoa7kuJTmnKrmlLbliLDpgq7ku7bvvIzlj6/ku6XlnKjmhI/op4FcclxuICAgICAgICAgICAgICAgIOWPjemmiOe7meaIkeS7rOeVmeiogO+8jOaIkeS7rOS8muWPiuaXtuWkhOeQhuOAglxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8QUlfZm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==