webpackHotUpdate_N_E("pages/help",{

/***/ "./pages/help/index.tsx":
/*!******************************!*\
  !*** ./pages/help/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Help; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _styles_help_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/help.less */ "./styles/help.less");
/* harmony import */ var _styles_help_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_help_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/services */ "./services/index.js");





var _jsxFileName = "E:\\code\\work\\website\\pages\\help\\index.tsx",
    _s = $RefreshSig$();




var AI_header = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! @/components/AI_header/AI_header */ "./components/AI_header/AI_header.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @/components/AI_header/AI_header */ "./components/AI_header/AI_header.tsx")];
    },
    modules: ['@/components/AI_header/AI_header']
  }
});
_c2 = AI_header;
var AI_footer = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c3 = function _c3() {
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


var __N_SSG = true;
function Help(props) {
  _s();

  var _this = this;

  var helpsList = props.helpsList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('4'),
      type = _useState[0],
      setType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(helpsList),
      helpLists = _useState2[0],
      sethelpLists = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var pageTohelpDel = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(type) {
      var _yield$request, code, data, msg;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setType(type);
              _context.next = 3;
              return Object(_services__WEBPACK_IMPORTED_MODULE_8__["default"])({
                url: '/api/gethelpsList',
                method: 'GET',
                params: {
                  type: type
                }
              });

            case 3:
              _yield$request = _context.sent;
              code = _yield$request.code;
              data = _yield$request.data;
              msg = _yield$request.msg;

              if (code === 200) {
                sethelpLists(data);
              } else {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error(msg);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function pageTohelpDel(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var moreClick = function moreClick() {
    router.push("/help/".concat(type));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "Help",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_header, {
      title: "\u5E2E\u52A9\u4E2D\u5FC3",
      currentIndex: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "banner",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "type_change",
          onClick: function onClick() {
            return pageTohelpDel(4);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_student.png",
            alt: "help_student"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "student_text",
            children: "\u6211\u662F\u5B66\u751F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "type_change",
          "class": true,
          onClick: function onClick() {
            return pageTohelpDel(3);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_teacher.png",
            alt: "help_teacher"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "teacher_text",
            children: "\u6211\u662F\u8001\u5E08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "newbie",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "top_box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "lt_title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              className: "text",
              children: "\u65B0\u624B\u6307\u5357"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "help_icon",
              src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
              alt: "help_icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "rt_more",
            onClick: moreClick,
            children: ["\u67E5\u770B\u66F4\u591A", '>', '>']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "grid_box",
          children: helpLists.map(function (item) {
            return item.help_category_id === 8 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "item",
              children: item.title
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, _this) : '';
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "newbie",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "top_box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "lt_title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              className: "text",
              children: "\u5E38\u89C1\u95EE\u9898"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "help_icon",
              src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
              alt: "help_icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "rt_more",
            onClick: moreClick,
            children: ["\u67E5\u770B\u66F4\u591A", '>', '>']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "grid_box",
          children: helpLists.map(function (item) {
            return item.help_category_id === 9 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "item",
              children: item.title
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this) : '';
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "video",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "title",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\u89C6\u9891\u4ECB\u7ECD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "help_icon",
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
            alt: "help_icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("video", {
          width: "100%",
          controls: true,
          className: "video_dom",
          autoPlay: true,
          loop: true,
          src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/movie.mp4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(Help, "7MFM2U6Z5K1ZYGl/HfT4tXrl8PY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c5 = Help;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "AI_header$dynamic");
$RefreshReg$(_c2, "AI_header");
$RefreshReg$(_c3, "AI_footer$dynamic");
$RefreshReg$(_c4, "AI_footer");
$RefreshReg$(_c5, "Help");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9pbmRleC50c3giXSwibmFtZXMiOlsiQUlfaGVhZGVyIiwiZHluYW1pYyIsIkFJX2Zvb3RlciIsIkhlbHAiLCJwcm9wcyIsImhlbHBzTGlzdCIsInVzZVN0YXRlIiwidHlwZSIsInNldFR5cGUiLCJoZWxwTGlzdHMiLCJzZXRoZWxwTGlzdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYWdlVG9oZWxwRGVsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImNvZGUiLCJkYXRhIiwibXNnIiwiZXJyb3IiLCJtb3JlQ2xpY2siLCJwdXNoIiwibWFwIiwiaXRlbSIsImhlbHBfY2F0ZWdvcnlfaWQiLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUNOLElBQU1FLFNBQVMsR0FBR0QsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEVBQVI7QUFBQTtBQUFBLGNBQVEsa0NBQVI7QUFBQTtBQUFBLEVBQXpCO01BQU1DLFM7QUFHTjtBQUNBOztBQWtCZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxNQUMxQkMsU0FEMEIsR0FDWkQsS0FEWSxDQUMxQkMsU0FEMEI7O0FBQUEsa0JBRVZDLHNEQUFRLENBQUMsR0FBRCxDQUZFO0FBQUEsTUFFM0JDLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdBRixzREFBUSxDQUFDRCxTQUFELENBSFI7QUFBQSxNQUczQkksU0FIMkI7QUFBQSxNQUdoQkMsWUFIZ0I7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RixJQUFJLENBQUNHLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREssR0FLTCxFQUxGO0FBT0QsV0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUNGLGVBdUVFO0FBQVMsaUJBQVMsRUFBQyxPQUFuQjtBQUFBLGdDQUNFO0FBQVMsbUJBQVMsRUFBQyxPQUFuQjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFDRSxxQkFBUyxFQUFDLFdBRFo7QUFFRSxlQUFHLEVBQUMsa0VBRk47QUFHRSxlQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVNFO0FBQ0UsZUFBSyxFQUFDLE1BRFI7QUFFRSxrQkFBUSxNQUZWO0FBR0UsbUJBQVMsRUFBQyxXQUhaO0FBSUUsa0JBQVEsTUFKVjtBQUtFLGNBQUksTUFMTjtBQU1FLGFBQUcsRUFBQztBQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBNEZFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdHRDs7R0ExSHVCekIsSTtVQUlQUyxxRDs7O01BSk9ULEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVscC4zZTY1YmNmOWZhMjY2MWE5MDcwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9oZWxwLmxlc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IEFJX2hlYWRlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfaGVhZGVyL0FJX2hlYWRlcicpKVxyXG5jb25zdCBBSV9mb290ZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2Zvb3Rlci9BSV9mb290ZXInKSlcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IGdldGhlbHBzTGlzdCB9IGZyb20gJ0Avc2VydmljZXMvcHVibGljJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdAL3NlcnZpY2VzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgY29kZSwgZGF0YSwgbXNnIH0gPSBhd2FpdCBnZXRoZWxwc0xpc3Qoe1xyXG4gICAgdHlwZTogNCxcclxuICB9KVxyXG4gIGlmIChjb2RlICE9PSAyMDApIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IobXNnKVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaGVscHNMaXN0OiBkYXRhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbHAocHJvcHMpIHtcclxuICBjb25zdCB7IGhlbHBzTGlzdCB9ID0gcHJvcHNcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnNCcpXHJcbiAgY29uc3QgW2hlbHBMaXN0cywgc2V0aGVscExpc3RzXSA9IHVzZVN0YXRlKGhlbHBzTGlzdClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBwYWdlVG9oZWxwRGVsID0gYXN5bmMgKHR5cGUpID0+IHtcclxuICAgIHNldFR5cGUodHlwZSlcclxuICAgIGNvbnN0IHsgY29kZSwgZGF0YSwgbXNnIH0gPSBhd2FpdCByZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL2FwaS9nZXRoZWxwc0xpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIGlmIChjb2RlID09PSAyMDApIHtcclxuICAgICAgc2V0aGVscExpc3RzKGRhdGEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKG1zZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG1vcmVDbGljayA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvaGVscC8ke3R5cGV9YClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiSGVscFwiPlxyXG4gICAgICA8QUlfaGVhZGVyIHRpdGxlPVwi5biu5Yqp5Lit5b+DXCIgY3VycmVudEluZGV4PXsyfSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInR5cGVfY2hhbmdlXCIgb25DbGljaz17KCkgPT4gcGFnZVRvaGVscERlbCg0KX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX3N0dWRlbnQucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJoZWxwX3N0dWRlbnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3R1ZGVudF90ZXh0XCI+5oiR5piv5a2m55SfPC9oMT5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInR5cGVfY2hhbmdlXCIgY2xhc3Mgb25DbGljaz17KCkgPT4gcGFnZVRvaGVscERlbCgzKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX3RlYWNoZXIucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJoZWxwX3RlYWNoZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGVhY2hlcl90ZXh0XCI+5oiR5piv6ICB5biIPC9oMT5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibmV3YmllXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b3BfYm94XCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImx0X3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0XCI+5paw5omL5oyH5Y2XPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVscF9pY29uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWljdGIub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS93ZWJzaXRlL2hlbHBfaWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiaGVscF9pY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJ0X21vcmVcIiBvbkNsaWNrPXttb3JlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIOafpeeci+abtOWkmnsnPid9XHJcbiAgICAgICAgICAgICAgeyc+J31cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZF9ib3hcIj5cclxuICAgICAgICAgICAge2hlbHBMaXN0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5oZWxwX2NhdGVnb3J5X2lkID09PSA4ID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5ld2JpZVwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wX2JveFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsdF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dFwiPuW4uOingemXrumimDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX2ljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJydF9tb3JlXCIgb25DbGljaz17bW9yZUNsaWNrfT5cclxuICAgICAgICAgICAgICDmn6XnnIvmm7TlpJp7Jz4nfVxyXG4gICAgICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWRfYm94XCI+XHJcbiAgICAgICAgICAgIHtoZWxwTGlzdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaGVscF9jYXRlZ29yeV9pZCA9PT0gOSA/IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aWRlb1wiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+6KeG6aKR5LuL57uNPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVscF9pY29uXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX2ljb24ucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJoZWxwX2ljb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvX2RvbVwiXHJcbiAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvbW92aWUubXA0XCJcclxuICAgICAgICAgID48L3ZpZGVvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8QUlfZm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==