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

  var list = props.list,
      type = props.type;
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
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "banner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "main_body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lt_warp",
          children: list === null || list === void 0 ? void 0 : list.helpsType.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: item.id == type ? 'lt_item current' : 'lt_item',
              onClick: function onClick() {
                return setType(item.id);
              },
              children: item.name
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
              lineNumber: 93,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content",
              children: "APP/\u5C0F\u7A0B\u5E8F\u5728\u300A\u6211\u7684\u300B\u9875\u9762\u201C\u7ED1\u5B9A\u73ED\u7EA7\u201D\u5185\u8F93\u5165\u73ED\u7EA7ID\u6216\u8005\u8001\u5E08\u624B\u673A\u53F7\u67E5\u627E\u73ED\u7EA7\uFF0C\u627E\u5230\u73ED\u7EA7\u540E\u201C\u70B9\u51FB\u201D\u52A0\u5165\u73ED\u7EA7 \u5373\u53EF\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ri_item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "title",
              children: "\u90AE\u7BB1\u672A\u6536\u5230\u4E0B\u8F7D\u7684\u9519\u9898\u672C\u600E\u4E48\u529E\uFF1F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "content",
              children: "\u5728\u300A\u6211\u7684\u300B\u9875\u9762\u4E2A\u4EBA\u4FE1\u606F\u91CC\u70B9\u51FB\u8FDB\u5165\uFF0C\u5728\u4FE1\u606F\u5217\u8868\u5185\u68C0\u67E5\u90AE\u7BB1\u662F\u5426\u8F93\u5165\u6B63\u786E\uFF1B\u5982\u679C\u6B63\u786E\u4E14\u672A\u6536\u5230\u90AE\u4EF6\uFF0C\u53EF\u4EE5\u5728\u610F\u89C1 \u53CD\u9988\u7ED9\u6211\u4EEC\u7559\u8A00\uFF0C\u6211\u4EEC\u4F1A\u53CA\u65F6\u5904\u7406\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9bLi4udHlwZV0udHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJTZWFyY2giLCJMaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJvblNlYXJjaCIsInZhbHVlIiwiaGVscHNUeXBlIiwibWFwIiwiaXRlbSIsImlkIiwic2V0VHlwZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw0TUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhFQUFSO0FBQUE7QUFBQSxjQUFRLGtDQUFSO0FBQUE7QUFBQSxFQUF6QjtNQUFNRCxTO0FBQ04sSUFBTUUsU0FBUyxHQUFHRCxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUMsUztJQUlFQyxNLHlEQUFBQSxNOztBQWlETyxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDWEQsS0FEVyxDQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsSUFEb0IsR0FDWEYsS0FEVyxDQUNwQkUsSUFEb0I7QUFFbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaOztBQUVBLE1BQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxXQUFXSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWixDQUFYO0FBQUEsR0FBakI7O0FBQ0Esc0JBQ0U7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFBLDRCQUNFLHFFQUFDLFNBQUQ7QUFBVyxXQUFLLEVBQUMsMEJBQWpCO0FBQXdCLGtCQUFZLEVBQUU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBUyxpQkFBUyxFQUFDLFlBQW5CO0FBQUEsK0JBQ0UscUVBQUMsTUFBRDtBQUNFLG1CQUFTLEVBQUMsUUFEWjtBQUVFLHFCQUFXLEVBQUMsa0RBRmQ7QUFHRSxvQkFBVSxNQUhaO0FBSUUscUJBQVcsRUFBQyxjQUpkO0FBS0UsY0FBSSxFQUFDLE9BTFA7QUFNRSxrQkFBUSxFQUFFRDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFZRTtBQUFTLGlCQUFTLEVBQUMsV0FBbkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLG9CQUNHSixJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRU0sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzdCLGdDQUNFO0FBQ0UsdUJBQVMsRUFBRUEsSUFBSSxDQUFDQyxFQUFMLElBQVdSLElBQVgsR0FBa0IsaUJBQWxCLEdBQXNDLFNBRG5EO0FBR0UscUJBQU8sRUFBRTtBQUFBLHVCQUFJUyxPQUFPLENBQUNGLElBQUksQ0FBQ0MsRUFBTixDQUFYO0FBQUEsZUFIWDtBQUFBLHdCQUtHRCxJQUFJLENBQUNHO0FBTFIsZUFFT0gsSUFBSSxDQUFDQyxFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFTRCxXQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWNFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVFFO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBOENFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtERDtNQXZEdUJYLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVscC9bLi4udHlwZV0uOGQ5ZWNiZDAyODUzNmViN2I0MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvaGVscGxpc3QubGVzcydcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5jb25zdCBBSV9oZWFkZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2hlYWRlci9BSV9oZWFkZXInKSlcclxuY29uc3QgQUlfZm9vdGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9mb290ZXIvQUlfZm9vdGVyJykpXHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgZ2V0aGVscHNUeXBlRGV0YWlsIH0gZnJvbSAnQC9zZXJ2aWNlcy9wdWJsaWMnXHJcblxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXRcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc4JywgJzMnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzknLCAnMyddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IFsnOCcsICc0J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc5JywgJzQnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgeyB0eXBlIH0gPSBwYXJhbXNcclxuICBjb25zb2xlLmxvZyh0eXBlKVxyXG5cclxuICBjb25zdCB7IGNvZGUsIGRhdGEsIG1zZyB9ID0gYXdhaXQgZ2V0aGVscHNUeXBlRGV0YWlsKHtcclxuICAgIHR5cGU6IHR5cGVbMV0sXHJcbiAgfSlcclxuICBpZiAoY29kZSAhPT0gMjAwKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKG1zZylcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0eXBlOiB0eXBlWzBdLFxyXG4gICAgICBsaXN0OiBkYXRhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QocHJvcHMpIHtcclxuICBjb25zdCB7IGxpc3QsIHR5cGUgfSA9IHByb3BzXHJcbiAgY29uc29sZS5sb2cobGlzdClcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSAodmFsdWUpID0+IGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiU3R1ZGVudFwiPlxyXG4gICAgICA8QUlfaGVhZGVyIHRpdGxlPVwi5biu5Yqp5Lit5b+DXCIgY3VycmVudEluZGV4PXsyfSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYW5uZXJcIj48L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VhcmNoX2JveFwiPlxyXG4gICAgICAgICAgPFNlYXJjaFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuafpeaJvuaCqOmcgOimgeeahOWGheWuuVwiXHJcbiAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgZW50ZXJCdXR0b249XCLmkJzntKJcIlxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluX2JvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfd2FycFwiPlxyXG4gICAgICAgICAgICB7bGlzdD8uaGVscHNUeXBlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbS5pZCA9PSB0eXBlID8gJ2x0X2l0ZW0gY3VycmVudCcgOiAnbHRfaXRlbSd9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnNldFR5cGUoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0X2JveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+QVBQL+Wwj+eoi+W6j+WmguS9leWKoOWFpeePree6p++8nzwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgQVBQL+Wwj+eoi+W6j+WcqOOAiuaIkeeahOOAi+mhtemdouKAnOe7keWumuePree6p+KAneWGhei+k+WFpeePree6p0lE5oiW6ICF6ICB5biI5omL5py65Y+35p+l5om+54+t57qn77yM5om+5Yiw54+t57qn5ZCO4oCc54K55Ye74oCd5Yqg5YWl54+t57qnXHJcbiAgICAgICAgICAgICAgICDljbPlj6/jgIJcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlfaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj7pgq7nrrHmnKrmlLbliLDkuIvovb3nmoTplJnpopjmnKzmgI7kuYjlip7vvJ88L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIOWcqOOAiuaIkeeahOOAi+mhtemdouS4quS6uuS/oeaBr+mHjOeCueWHu+i/m+WFpe+8jOWcqOS/oeaBr+WIl+ihqOWGheajgOafpemCrueuseaYr+WQpui+k+WFpeato+ehru+8m+WmguaenOato+ehruS4lOacquaUtuWIsOmCruS7tu+8jOWPr+S7peWcqOaEj+ingVxyXG4gICAgICAgICAgICAgICAg5Y+N6aaI57uZ5oiR5Lus55WZ6KiA77yM5oiR5Lus5Lya5Y+K5pe25aSE55CG44CCXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxBSV9mb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9