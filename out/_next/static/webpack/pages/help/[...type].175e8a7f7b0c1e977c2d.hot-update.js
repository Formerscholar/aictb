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
    setisDel(true);
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
                lineNumber: 112,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content",
                dangerouslySetInnerHTML: {
                  __html: item.desc
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 23
              }, _this)]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 21
            }, _this) : '';
          }) : '详情'
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
      lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9bLi4udHlwZV0udHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJTZWFyY2giLCJMaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsInVzZVN0YXRlIiwidHlwZUN1cnJlbnQiLCJzZXRUeXBlQ3VycmVudCIsImhlbHBzTGlzdCIsImhlbHBMaXN0cyIsInNldEhlbHBMaXN0cyIsImlzRGVsIiwic2V0aXNEZWwiLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJ2YWx1ZSIsInNldFR5cGUiLCJ0eXBlSWQiLCJ0b1N0cmluZyIsInNob3dEZWF0YWlsIiwiaWlkIiwiaGVscHNUeXBlIiwibWFwIiwiaXRlbSIsImlkIiwibmFtZSIsImhlbHBfY2F0ZWdvcnlfaWQiLCJ0aXRsZSIsIl9faHRtbCIsImRlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEVBQVI7QUFBQTtBQUFBLGNBQVEsa0NBQVI7QUFBQTtBQUFBLEVBQXpCO01BQU1ELFM7QUFDTixJQUFNRSxTQUFTLEdBQUdELG1EQUFPO0FBQUEsU0FBQyw0TUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhFQUFSO0FBQUE7QUFBQSxjQUFRLGtDQUFSO0FBQUE7QUFBQSxFQUF6QjtNQUFNQyxTO0FBR047SUFFUUMsTSx5REFBQUEsTTs7QUFpRE8sU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsTUFDMUJDLElBRDBCLEdBQ1hELEtBRFcsQ0FDMUJDLElBRDBCO0FBQUEsTUFDcEJDLElBRG9CLEdBQ1hGLEtBRFcsQ0FDcEJFLElBRG9COztBQUFBLGtCQUVJQyxzREFBUSxDQUFDRCxJQUFELENBRlo7QUFB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OEJOLElBQUksQ0FBQ0MsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESyxHQWNMLEVBZEY7QUFnQkQsV0FqQkQsQ0FESCxHQW1CRztBQXBCTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQXNERSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwREQ7O0dBNUV1QnhCLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVscC9bLi4udHlwZV0uMTc1ZThhN2Y3YjBjMWU5NzdjMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvaGVscGxpc3QubGVzcydcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5jb25zdCBBSV9oZWFkZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2hlYWRlci9BSV9oZWFkZXInKSlcclxuY29uc3QgQUlfZm9vdGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9mb290ZXIvQUlfZm9vdGVyJykpXHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgZ2V0aGVscHNUeXBlRGV0YWlsIH0gZnJvbSAnQC9zZXJ2aWNlcy9wdWJsaWMnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXRcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc4JywgJzMnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzknLCAnMyddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IFsnOCcsICc0J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc5JywgJzQnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgeyB0eXBlIH0gPSBwYXJhbXNcclxuICBjb25zb2xlLmxvZyh0eXBlKVxyXG5cclxuICBjb25zdCB7IGNvZGUsIGRhdGEsIG1zZyB9ID0gYXdhaXQgZ2V0aGVscHNUeXBlRGV0YWlsKHtcclxuICAgIHR5cGU6IHR5cGVbMV0sXHJcbiAgfSlcclxuICBpZiAoY29kZSAhPT0gMjAwKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKG1zZylcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0eXBlOiB0eXBlWzBdLFxyXG4gICAgICBsaXN0OiBkYXRhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QocHJvcHMpIHtcclxuICBjb25zdCB7IGxpc3QsIHR5cGUgfSA9IHByb3BzXHJcbiAgY29uc3QgW3R5cGVDdXJyZW50LCBzZXRUeXBlQ3VycmVudF0gPSB1c2VTdGF0ZSh0eXBlKVxyXG4gIGNvbnN0IFtoZWxwTGlzdHMsIHNldEhlbHBMaXN0c10gPSB1c2VTdGF0ZShsaXN0LmhlbHBzTGlzdClcclxuICBjb25zdCBbaXNEZWwsIHNldGlzRGVsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnNvbGUubG9nKGhlbHBMaXN0cylcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSAodmFsdWUpID0+IGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cclxuICBjb25zdCBzZXRUeXBlID0gKHR5cGVJZCkgPT4ge1xyXG4gICAgc2V0VHlwZUN1cnJlbnQodHlwZUlkLnRvU3RyaW5nKCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93RGVhdGFpbCA9IChpaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlpZClcclxuICAgIHNldGlzRGVsKHRydWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIlN0dWRlbnRcIj5cclxuICAgICAgPEFJX2hlYWRlciB0aXRsZT1cIuW4ruWKqeS4reW/g1wiIGN1cnJlbnRJbmRleD17Mn0gLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFubmVyXCI+PC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlYXJjaF9ib3hcIj5cclxuICAgICAgICAgIDxTZWFyY2hcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmn6Xmib7mgqjpnIDopoHnmoTlhoXlrrlcIlxyXG4gICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgIGVudGVyQnV0dG9uPVwi5pCc57SiXCJcclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpbl9ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx0X3dhcnBcIj5cclxuICAgICAgICAgICAge2xpc3Q/LmhlbHBzVHlwZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT0gdHlwZUN1cnJlbnQgPyAnbHRfaXRlbSBjdXJyZW50JyA6ICdsdF9pdGVtJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VHlwZShpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnRfYm94XCI+XHJcbiAgICAgICAgICAgIHshaXNEZWxcclxuICAgICAgICAgICAgICA/IGhlbHBMaXN0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaGVscF9jYXRlZ29yeV9pZCA9PSB0eXBlQ3VycmVudCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpX2l0ZW1cIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dEZWF0YWlsKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLmRlc2MgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogJ+ivpuaDhSd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEFJX2Zvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=