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

  console.log(helpLists);

  var onSearch = function onSearch(value) {
    return console.log(value);
  };

  var setType = function setType(typeId) {
    setTypeCurrent(typeId.toString());
  };

  var showDeatail = function showDeatail(iid) {
    console.log(iid);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "Student",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_header, {
      title: "\u5E2E\u52A9\u4E2D\u5FC3",
      currentIndex: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "banner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
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
              lineNumber: 95,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "rt_box",
          children: helpLists.map(function (item) {
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
                lineNumber: 111,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content",
                dangerouslySetInnerHTML: {
                  __html: item.desc
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 19
              }, _this)]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, _this) : '';
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

_s(List, "XOZ3wE6U7N4idTlrDn0XfRkPJSs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9bLi4udHlwZV0udHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJTZWFyY2giLCJMaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsInVzZVN0YXRlIiwidHlwZUN1cnJlbnQiLCJzZXRUeXBlQ3VycmVudCIsImhlbHBzTGlzdCIsImhlbHBMaXN0cyIsInNldEhlbHBMaXN0cyIsImlzRGVsIiwic2V0aXNEZWwiLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJ2YWx1ZSIsInNldFR5cGUiLCJ0eXBlSWQiLCJ0b1N0cmluZyIsInNob3dEZWF0YWlsIiwiaWlkIiwiaGVscHNUeXBlIiwibWFwIiwiaXRlbSIsImlkIiwibmFtZSIsImhlbHBfY2F0ZWdvcnlfaWQiLCJ0aXRsZSIsIl9faHRtbCIsImRlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEVBQVI7QUFBQTtBQUFBLGNBQVEsa0NBQVI7QUFBQTtBQUFBLEVBQXpCO01BQU1ELFM7QUFDTixJQUFNRSxTQUFTLEdBQUdELG1EQUFPO0FBQUEsU0FBQyw0TUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhFQUFSO0FBQUE7QUFBQSxjQUFRLGtDQUFSO0FBQUE7QUFBQSxFQUF6QjtNQUFNQyxTO0FBR047SUFFUUMsTSx5REFBQUEsTTs7QUFpRE8sU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsTUFDMUJDLElBRDBCLEdBQ1hELEtBRFcsQ0FDMUJDLElBRDBCO0FBQUEsTUFDcEJDLElBRG9CLEdBQ1hGLEtBRFcsQ0FDcEJFLElBRG9COztBQUFBLGtCQUVJQyxzREFBUSxDQUFDRCxJQUFELENBRlo7QUFB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QUEscUJBREssR0FTTCxFQVRGO0FBV0QsV0FaQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBK0NFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1ERDs7R0FyRXVCeEIsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oZWxwL1suLi50eXBlXS42Nzk1NjY0NWNlYmM3ZjliOTVjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9oZWxwbGlzdC5sZXNzJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IEFJX2hlYWRlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfaGVhZGVyL0FJX2hlYWRlcicpKVxyXG5jb25zdCBBSV9mb290ZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2Zvb3Rlci9BSV9mb290ZXInKSlcclxuaW1wb3J0IHsgSW5wdXQsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBnZXRoZWxwc1R5cGVEZXRhaWwgfSBmcm9tICdAL3NlcnZpY2VzL3B1YmxpYydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzgnLCAnMyddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IFsnOScsICczJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc4JywgJzQnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzknLCAnNCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB7IHR5cGUgfSA9IHBhcmFtc1xyXG4gIGNvbnNvbGUubG9nKHR5cGUpXHJcblxyXG4gIGNvbnN0IHsgY29kZSwgZGF0YSwgbXNnIH0gPSBhd2FpdCBnZXRoZWxwc1R5cGVEZXRhaWwoe1xyXG4gICAgdHlwZTogdHlwZVsxXSxcclxuICB9KVxyXG4gIGlmIChjb2RlICE9PSAyMDApIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IobXNnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHR5cGU6IHR5cGVbMF0sXHJcbiAgICAgIGxpc3Q6IGRhdGEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IHsgbGlzdCwgdHlwZSB9ID0gcHJvcHNcclxuICBjb25zdCBbdHlwZUN1cnJlbnQsIHNldFR5cGVDdXJyZW50XSA9IHVzZVN0YXRlKHR5cGUpXHJcbiAgY29uc3QgW2hlbHBMaXN0cywgc2V0SGVscExpc3RzXSA9IHVzZVN0YXRlKGxpc3QuaGVscHNMaXN0KVxyXG4gIGNvbnN0IFtpc0RlbCwgc2V0aXNEZWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc29sZS5sb2coaGVscExpc3RzKVxyXG5cclxuICBjb25zdCBvblNlYXJjaCA9ICh2YWx1ZSkgPT4gY29uc29sZS5sb2codmFsdWUpXHJcblxyXG4gIGNvbnN0IHNldFR5cGUgPSAodHlwZUlkKSA9PiB7XHJcbiAgICBzZXRUeXBlQ3VycmVudCh0eXBlSWQudG9TdHJpbmcoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dEZWF0YWlsID0gKGlpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWlkKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJTdHVkZW50XCI+XHJcbiAgICAgIDxBSV9oZWFkZXIgdGl0bGU9XCLluK7liqnkuK3lv4NcIiBjdXJyZW50SW5kZXg9ezJ9IC8+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJhbm5lclwiPjwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWFyY2hfYm94XCI+XHJcbiAgICAgICAgICA8U2VhcmNoXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5p+l5om+5oKo6ZyA6KaB55qE5YaF5a65XCJcclxuICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICBlbnRlckJ1dHRvbj1cIuaQnOe0olwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5fYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdF93YXJwXCI+XHJcbiAgICAgICAgICAgIHtsaXN0Py5oZWxwc1R5cGUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID09IHR5cGVDdXJyZW50ID8gJ2x0X2l0ZW0gY3VycmVudCcgOiAnbHRfaXRlbSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0X2JveFwiPlxyXG4gICAgICAgICAgICB7aGVscExpc3RzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLmhlbHBfY2F0ZWdvcnlfaWQgPT0gdHlwZUN1cnJlbnQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpX2l0ZW1cIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgb25DbGljaz17KCk9PnNob3dEZWF0YWlsKGl0ZW0uaWQpfT57aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5kZXNjIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEFJX2Zvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=