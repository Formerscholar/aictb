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
                  onClick: function onClick() {
                    return showDeatail(item.id);
                  },
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  dangerouslySetInnerHTML: {
                    __html: item.desc
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
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
      lineNumber: 150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9bLi4udHlwZV0udHN4Il0sIm5hbWVzIjpbIkFJX2hlYWRlciIsImR5bmFtaWMiLCJBSV9mb290ZXIiLCJTZWFyY2giLCJMaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsInVzZVN0YXRlIiwidHlwZUN1cnJlbnQiLCJzZXRUeXBlQ3VycmVudCIsImhlbHBzTGlzdCIsImhlbHBMaXN0cyIsInNldEhlbHBMaXN0cyIsImlzRGVsIiwic2V0aXNEZWwiLCJkZWxJZCIsInNldERlbElkIiwiY29uc29sZSIsImxvZyIsIm9uU2VhcmNoIiwidmFsdWUiLCJzZXRUeXBlIiwidHlwZUlkIiwidG9TdHJpbmciLCJzaG93RGVhdGFpbCIsImlpZCIsImhlbHBzVHlwZSIsIm1hcCIsIml0ZW0iLCJpZCIsIm5hbWUiLCJoZWxwX2NhdGVnb3J5X2lkIiwidGl0bGUiLCJfX2h0bWwiLCJkZXNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw0TUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhFQUFSO0FBQUE7QUFBQSxjQUFRLGtDQUFSO0FBQUE7QUFBQSxFQUF6QjtNQUFNRCxTO0FBQ04sSUFBTUUsU0FBUyxHQUFHRCxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUMsUztBQUdOO0lBRVFDLE0seURBQUFBLE07O0FBaURPLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUFBLE1BQzFCQyxJQUQwQixHQUNYRCxLQURXLENBQzFCQyxJQUQwQjtBQUFBLE1BQ3BCQyxJQURvQixHQUNYRixLQURXLENBQ3BCRSxJQURvQjs7QUFBQSxrQkFFSUMsc0RBQVEs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ZjA0MGFiZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvaGVscGxpc3QubGVzcydcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5jb25zdCBBSV9oZWFkZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2hlYWRlci9BSV9oZWFkZXInKSlcclxuY29uc3QgQUlfZm9vdGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9mb290ZXIvQUlfZm9vdGVyJykpXHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgZ2V0aGVscHNUeXBlRGV0YWlsIH0gZnJvbSAnQC9zZXJ2aWNlcy9wdWJsaWMnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXRcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc4JywgJzMnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiBbJzknLCAnMyddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6IFsnOCcsICc0J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogWyc5JywgJzQnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgeyB0eXBlIH0gPSBwYXJhbXNcclxuICBjb25zb2xlLmxvZyh0eXBlKVxyXG5cclxuICBjb25zdCB7IGNvZGUsIGRhdGEsIG1zZyB9ID0gYXdhaXQgZ2V0aGVscHNUeXBlRGV0YWlsKHtcclxuICAgIHR5cGU6IHR5cGVbMV0sXHJcbiAgfSlcclxuICBpZiAoY29kZSAhPT0gMjAwKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKG1zZylcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0eXBlOiB0eXBlWzBdLFxyXG4gICAgICBsaXN0OiBkYXRhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QocHJvcHMpIHtcclxuICBjb25zdCB7IGxpc3QsIHR5cGUgfSA9IHByb3BzXHJcbiAgY29uc3QgW3R5cGVDdXJyZW50LCBzZXRUeXBlQ3VycmVudF0gPSB1c2VTdGF0ZSh0eXBlKVxyXG4gIGNvbnN0IFtoZWxwTGlzdHMsIHNldEhlbHBMaXN0c10gPSB1c2VTdGF0ZShsaXN0LmhlbHBzTGlzdClcclxuICBjb25zdCBbaXNEZWwsIHNldGlzRGVsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtkZWxJZCwgc2V0RGVsSWRdID0gdXNlU3RhdGUoJzAnKVxyXG4gIGNvbnNvbGUubG9nKGhlbHBMaXN0cylcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSAodmFsdWUpID0+IGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cclxuICBjb25zdCBzZXRUeXBlID0gKHR5cGVJZCkgPT4ge1xyXG4gICAgc2V0aXNEZWwoZmFsc2UpXHJcbiAgICBzZXRUeXBlQ3VycmVudCh0eXBlSWQudG9TdHJpbmcoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dEZWF0YWlsID0gKGlpZCkgPT4ge1xyXG4gICAgc2V0RGVsSWQoaWlkKVxyXG4gICAgc2V0aXNEZWwodHJ1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiU3R1ZGVudFwiPlxyXG4gICAgICA8QUlfaGVhZGVyIHRpdGxlPVwi5biu5Yqp5Lit5b+DXCIgY3VycmVudEluZGV4PXsyfSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYW5uZXJcIj48L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VhcmNoX2JveFwiPlxyXG4gICAgICAgICAgPFNlYXJjaFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuafpeaJvuaCqOmcgOimgeeahOWGheWuuVwiXHJcbiAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgZW50ZXJCdXR0b249XCLmkJzntKJcIlxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluX2JvZHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHRfd2FycFwiPlxyXG4gICAgICAgICAgICB7bGlzdD8uaGVscHNUeXBlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9PSB0eXBlQ3VycmVudCA/ICdsdF9pdGVtIGN1cnJlbnQnIDogJ2x0X2l0ZW0nXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydF9ib3hcIj5cclxuICAgICAgICAgICAgeyFpc0RlbFxyXG4gICAgICAgICAgICAgID8gaGVscExpc3RzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5oZWxwX2NhdGVnb3J5X2lkID09IHR5cGVDdXJyZW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlfaXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0RlYXRhaWwoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0uZGVzYyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBoZWxwTGlzdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGRlbElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlfaXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0RlYXRhaWwoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0uZGVzYyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxBSV9mb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9