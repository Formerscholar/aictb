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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "E:\\code\\work\\website\\pages\\help\\[...type].tsx",
    _s = $RefreshSig$();



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
  _s();

  var _this = this;

  var list = props.list,
      type = props.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(type),
      typeCurrent = _useState[0],
      setTypeCurrent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(list.helpsList),
      helpLists = _useState2[0],
      setHelpLists = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isDel = _useState3[0],
      setisDel = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('0'),
      delId = _useState4[0],
      setDelId = _useState4[1];

  console.log(helpLists);

  var onSearch = function onSearch(value) {
    return console.log(value);
  };

  var setType = function setType(typeId) {
    setisDel(false);
    setTypeCurrent(typeId.toString());
  };

  var showDeatail = function showDeatail(iid) {
    setDelId(iid);
    setisDel(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "Student",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_header, {
      title: "\u5E2E\u52A9\u4E2D\u5FC3",
      currentIndex: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "banner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
          lineNumber: 84,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "main_body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lt_warp",
          children: list === null || list === void 0 ? void 0 : list.helpsType.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: item.id == typeCurrent ? 'lt_item current' : 'lt_item',
              onClick: function onClick() {
                return setType(item.id);
              },
              children: item.name
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "rt_box",
          children: !isDel ? helpLists.map(function (item) {
            return item.help_category_id == typeCurrent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ri_item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "title",
                onClick: function onClick() {
                  return showDeatail(item.id);
                },
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content",
                dangerouslySetInnerHTML: {
                  __html: item.desc
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 23
              }, _this)]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 21
            }, _this) : '';
          }) : helpLists.map(function (item) {
            if (item.id == delId) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ri_item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "title",
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  dangerouslySetInnerHTML: {
                    __html: item.content
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 25
                }, _this)]
              }, item.id, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 23
              }, _this);
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

_s(List, "oM0YrGMMfgiCo74JyaZDWQajpCI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9bLi4udHlwZV0udHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJTZWFyY2giLCJMaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsInVzZVN0YXRlIiwidHlwZUN1cnJlbnQiLCJzZXRUeXBlQ3VycmVudCIsImhlbHBzTGlzdCIsImhlbHBMaXN0cyIsInNldEhlbHBMaXN0cyIsImlzRGVsIiwic2V0aXNEZWwiLCJkZWxJZCIsInNldERlbElkIiwiY29uc29sZSIsImxvZyIsIm9uU2VhcmNoIiwidmFsdWUiLCJzZXRUeXBlIiwidHlwZUlkIiwidG9TdHJpbmciLCJzaG93RGVhdGFpbCIsImlpZCIsImhlbHBzVHlwZSIsIm1hcCIsIml0ZW0iLCJpZCIsIm5hbWUiLCJoZWxwX2NhdGVnb3J5X2lkIiwidGl0bGUiLCJfX2h0bWwiLCJkZXNjIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUNOLElBQU1FLFNBQVMsR0FBR0QsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEVBQVI7QUFBQTtBQUFBLGNBQVEsa0NBQVI7QUFBQTtBQUFBLEVBQXpCO01BQU1DLFM7QUFHTjtJQUVRQyxNLHlEQUFBQSxNOztBQWlETyxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDWEQsS0FEVyxDQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsSUFEb0IsR0FDWEYsS0FEVyxDQUNwQkUsSUFEb0I7O0FBQUEsa0JB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QkFERixlQU9FO0FBQ0UseUJBQVMsRUFBQyxTQURaO0FBRUUsdUNBQXVCLEVBQUU7QUFBRUMsd0JBQU0sRUFBRUwsSUFBSSxDQUFDTTtBQUFmO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQSxlQUE4Qk4sSUFBSSxDQUFDQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURLLEdBY0wsRUFkRjtBQWdCRCxXQWpCRCxDQURILEdBbUJHbEIsU0FBUyxDQUFDZ0IsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN0QixnQkFBSUEsSUFBSSxDQUFDQyxFQUFMLElBQVdkLEtBQWYsRUFBc0I7QUFDcEIsa0NBQ0U7QUFBSyx5QkFBUyxFQUFDLFNBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsT0FBZjtBQUFBLDRCQUF3QmEsSUFBSSxDQUFDSTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFDRSwyQkFBUyxFQUFDLFNBRFo7QUFFRSx5Q0FBdUIsRUFBRTtBQUFFQywwQkFBTSxFQUFFTCxJQUFJLENBQUNPO0FBQWY7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBLGlCQUE4QlAsSUFBSSxDQUFDQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBU0Q7QUFDRixXQVpEO0FBcEJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBa0VFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNFRDs7R0ExRnVCMUIsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oZWxwL1suLi50eXBlXS4wMWM2ZGE2YmJjYzQ5ZDRmOTZlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9oZWxwbGlzdC5sZXNzJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IEFJX2hlYWRlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfaGVhZGVyL0FJX2hlYWRlcicpKVxyXG5jb25zdCBBSV9mb290ZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2Zvb3Rlci9BSV9mb290ZXInKSlcclxuaW1wb3J0IHsgSW5wdXQsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBnZXRoZWxwc1R5cGVEZXRhaWwgfSBmcm9tICdAL3NlcnZpY2VzL3B1YmxpYydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzgnLCAnMyddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IFsnOScsICczJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc4JywgJzQnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzknLCAnNCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB7IHR5cGUgfSA9IHBhcmFtc1xyXG4gIGNvbnNvbGUubG9nKHR5cGUpXHJcblxyXG4gIGNvbnN0IHsgY29kZSwgZGF0YSwgbXNnIH0gPSBhd2FpdCBnZXRoZWxwc1R5cGVEZXRhaWwoe1xyXG4gICAgdHlwZTogdHlwZVsxXSxcclxuICB9KVxyXG4gIGlmIChjb2RlICE9PSAyMDApIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IobXNnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHR5cGU6IHR5cGVbMF0sXHJcbiAgICAgIGxpc3Q6IGRhdGEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IHsgbGlzdCwgdHlwZSB9ID0gcHJvcHNcclxuICBjb25zdCBbdHlwZUN1cnJlbnQsIHNldFR5cGVDdXJyZW50XSA9IHVzZVN0YXRlKHR5cGUpXHJcbiAgY29uc3QgW2hlbHBMaXN0cywgc2V0SGVscExpc3RzXSA9IHVzZVN0YXRlKGxpc3QuaGVscHNMaXN0KVxyXG4gIGNvbnN0IFtpc0RlbCwgc2V0aXNEZWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2RlbElkLCBzZXREZWxJZF0gPSB1c2VTdGF0ZSgnMCcpXHJcbiAgY29uc29sZS5sb2coaGVscExpc3RzKVxyXG5cclxuICBjb25zdCBvblNlYXJjaCA9ICh2YWx1ZSkgPT4gY29uc29sZS5sb2codmFsdWUpXHJcblxyXG4gIGNvbnN0IHNldFR5cGUgPSAodHlwZUlkKSA9PiB7XHJcbiAgICBzZXRpc0RlbChmYWxzZSlcclxuICAgIHNldFR5cGVDdXJyZW50KHR5cGVJZC50b1N0cmluZygpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd0RlYXRhaWwgPSAoaWlkKSA9PiB7XHJcbiAgICBzZXREZWxJZChpaWQpXHJcbiAgICBzZXRpc0RlbCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJTdHVkZW50XCI+XHJcbiAgICAgIDxBSV9oZWFkZXIgdGl0bGU9XCLluK7liqnkuK3lv4NcIiBjdXJyZW50SW5kZXg9ezJ9IC8+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJhbm5lclwiPjwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWFyY2hfYm94XCI+XHJcbiAgICAgICAgICA8U2VhcmNoXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5p+l5om+5oKo6ZyA6KaB55qE5YaF5a65XCJcclxuICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICBlbnRlckJ1dHRvbj1cIuaQnOe0olwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5fYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF93YXJwXCI+XHJcbiAgICAgICAgICAgIHtsaXN0Py5oZWxwc1R5cGUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID09IHR5cGVDdXJyZW50ID8gJ2x0X2l0ZW0gY3VycmVudCcgOiAnbHRfaXRlbSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0X2JveFwiPlxyXG4gICAgICAgICAgICB7IWlzRGVsXHJcbiAgICAgICAgICAgICAgPyBoZWxwTGlzdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmhlbHBfY2F0ZWdvcnlfaWQgPT0gdHlwZUN1cnJlbnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaV9pdGVtXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93RGVhdGFpbChpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5kZXNjIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IGhlbHBMaXN0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gZGVsSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaV9pdGVtXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLmNvbnRlbnQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8QUlfZm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==