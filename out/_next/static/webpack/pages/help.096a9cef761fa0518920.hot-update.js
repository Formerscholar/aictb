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

  var moreClick = function moreClick(status) {
    router.push("/help/".concat(type, "/").concat(status));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "Help",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_header, {
      title: "\u5E2E\u52A9\u4E2D\u5FC3",
      currentIndex: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: type == '4' ? 'student_text current' : 'student_text',
            children: "\u6211\u662F\u5B66\u751F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "type_change",
          onClick: function onClick() {
            return pageTohelpDel(3);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_teacher.png",
            alt: "help_teacher"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: type == '3' ? 'teacher_text current' : 'teacher_text',
            children: "\u6211\u662F\u8001\u5E08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "help_icon",
              src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
              alt: "help_icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "rt_more",
            onClick: function onClick() {
              return moreClick('novice');
            },
            children: ["\u67E5\u770B\u66F4\u591A", '>', '>']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "grid_box",
          children: helpLists.map(function (item) {
            return item.help_category_id === 8 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "item",
              children: item.title
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, _this) : '';
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "help_icon",
              src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
              alt: "help_icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "rt_more",
            onClick: moreClick,
            children: ["\u67E5\u770B\u66F4\u591A", '>', '>']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "grid_box",
          children: helpLists.map(function (item) {
            return item.help_category_id === 9 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "item",
              children: item.title
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, _this) : '';
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "video",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "title",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\u89C6\u9891\u4ECB\u7ECD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "help_icon",
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
            alt: "help_icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
          lineNumber: 143,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9pbmRleC50c3giXSwibmFtZXMiOlsiQUlfaGVhZGVyIiwiZHluYW1pYyIsIkFJX2Zvb3RlciIsIkhlbHAiLCJwcm9wcyIsImhlbHBzTGlzdCIsInVzZVN0YXRlIiwidHlwZSIsInNldFR5cGUiLCJoZWxwTGlzdHMiLCJzZXRoZWxwTGlzdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYWdlVG9oZWxwRGVsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImNvZGUiLCJkYXRhIiwibXNnIiwiZXJyb3IiLCJtb3JlQ2xpY2siLCJzdGF0dXMiLCJwdXNoIiwibWFwIiwiaXRlbSIsImhlbHBfY2F0ZWdvcnlfaWQiLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUNOLElBQU1FLFNBQVMsR0FBR0QsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEVBQVI7QUFBQTtBQUFBLGNBQVEsa0NBQVI7QUFBQTtBQUFBLEVBQXpCO01BQU1DLFM7QUFHTjtBQUNBOztBQWlCZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxNQUMxQkMsU0FEMEIsR0FDWkQsS0FEWSxDQUMxQkMsU0FEMEI7O0FBQUEsa0JBRVZDLHNEQUFRLENBQUMsR0FBRCxDQUZFO0FBQUEsTUFFM0JDLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdBRixzREFBUSxDQUFDRCxTQUFELENBSFI7QUFBQSxNQUczQkksU0FIMkI7QUFBQSxNQUdo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QVYsQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdkIsbUJBQU9BLElBQUksQ0FBQ0MsZ0JBQUwsS0FBMEIsQ0FBMUIsZ0JBQ0w7QUFBTSx1QkFBUyxFQUFDLE1BQWhCO0FBQUEsd0JBQ0dELElBQUksQ0FBQ0U7QUFEUixlQUE0QkYsSUFBSSxDQUFDRyxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURLLEdBS0wsRUFMRjtBQU9ELFdBUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBERixlQStFRTtBQUFTLGlCQUFTLEVBQUMsT0FBbkI7QUFBQSxnQ0FDRTtBQUFTLG1CQUFTLEVBQUMsT0FBbkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0UscUJBQVMsRUFBQyxXQURaO0FBRUUsZUFBRyxFQUFDLGtFQUZOO0FBR0UsZUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRTtBQUNFLGVBQUssRUFBQyxNQURSO0FBRUUsa0JBQVEsTUFGVjtBQUdFLG1CQUFTLEVBQUMsV0FIWjtBQUlFLGtCQUFRLE1BSlY7QUFLRSxjQUFJLE1BTE47QUFNRSxhQUFHLEVBQUM7QUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQW9HRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3R0Q7O0dBbEl1QjFCLEk7VUFJUFMscUQ7OztNQUpPVCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hlbHAuMDk2YTljZWY3NjFmYTA1MTg5MjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvaGVscC5sZXNzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5jb25zdCBBSV9oZWFkZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2hlYWRlci9BSV9oZWFkZXInKSlcclxuY29uc3QgQUlfZm9vdGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9mb290ZXIvQUlfZm9vdGVyJykpXHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBnZXRoZWxwc0xpc3QgfSBmcm9tICdAL3NlcnZpY2VzL3B1YmxpYydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnQC9zZXJ2aWNlcydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGNvZGUsIGRhdGEsIG1zZyB9ID0gYXdhaXQgZ2V0aGVscHNMaXN0KHtcclxuICAgIHR5cGU6IDQsXHJcbiAgfSlcclxuICBpZiAoY29kZSAhPT0gMjAwKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKG1zZylcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBoZWxwc0xpc3Q6IGRhdGEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVscChwcm9wcykge1xyXG4gIGNvbnN0IHsgaGVscHNMaXN0IH0gPSBwcm9wc1xyXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKCc0JylcclxuICBjb25zdCBbaGVscExpc3RzLCBzZXRoZWxwTGlzdHNdID0gdXNlU3RhdGUoaGVscHNMaXN0KVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IHBhZ2VUb2hlbHBEZWwgPSBhc3luYyAodHlwZSkgPT4ge1xyXG4gICAgc2V0VHlwZSh0eXBlKVxyXG4gICAgY29uc3QgeyBjb2RlLCBkYXRhLCBtc2cgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICcvYXBpL2dldGhlbHBzTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgaWYgKGNvZGUgPT09IDIwMCkge1xyXG4gICAgICBzZXRoZWxwTGlzdHMoZGF0YSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IobXNnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9yZUNsaWNrID0gKHN0YXR1cykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYC9oZWxwLyR7dHlwZX0vJHtzdGF0dXN9YClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiSGVscFwiPlxyXG4gICAgICA8QUlfaGVhZGVyIHRpdGxlPVwi5biu5Yqp5Lit5b+DXCIgY3VycmVudEluZGV4PXsyfSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInR5cGVfY2hhbmdlXCIgb25DbGljaz17KCkgPT4gcGFnZVRvaGVscERlbCg0KX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX3N0dWRlbnQucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJoZWxwX3N0dWRlbnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3R5cGUgPT0gJzQnID8gJ3N0dWRlbnRfdGV4dCBjdXJyZW50JyA6ICdzdHVkZW50X3RleHQnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg5oiR5piv5a2m55SfXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0eXBlX2NoYW5nZVwiIG9uQ2xpY2s9eygpID0+IHBhZ2VUb2hlbHBEZWwoMyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaGVscF90ZWFjaGVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiaGVscF90ZWFjaGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0eXBlID09ICczJyA/ICd0ZWFjaGVyX3RleHQgY3VycmVudCcgOiAndGVhY2hlcl90ZXh0J31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOaIkeaYr+iAgeW4iFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuZXdiaWVcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcF9ib3hcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibHRfdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHRcIj7mlrDmiYvmjIfljZc8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWxwX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaGVscF9pY29uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJoZWxwX2ljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicnRfbW9yZVwiIG9uQ2xpY2s9eygpID0+IG1vcmVDbGljaygnbm92aWNlJyl9PlxyXG4gICAgICAgICAgICAgIOafpeeci+abtOWkmnsnPid9XHJcbiAgICAgICAgICAgICAgeyc+J31cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZF9ib3hcIj5cclxuICAgICAgICAgICAge2hlbHBMaXN0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5oZWxwX2NhdGVnb3J5X2lkID09PSA4ID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5ld2JpZVwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wX2JveFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsdF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dFwiPuW4uOingemXrumimDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX2ljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJydF9tb3JlXCIgb25DbGljaz17bW9yZUNsaWNrfT5cclxuICAgICAgICAgICAgICDmn6XnnIvmm7TlpJp7Jz4nfVxyXG4gICAgICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWRfYm94XCI+XHJcbiAgICAgICAgICAgIHtoZWxwTGlzdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaGVscF9jYXRlZ29yeV9pZCA9PT0gOSA/IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aWRlb1wiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+6KeG6aKR5LuL57uNPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVscF9pY29uXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX2ljb24ucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJoZWxwX2ljb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvX2RvbVwiXHJcbiAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvbW92aWUubXA0XCJcclxuICAgICAgICAgID48L3ZpZGVvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8QUlfZm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==