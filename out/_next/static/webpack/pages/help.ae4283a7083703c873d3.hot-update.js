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
    router.push("/help/".concat(status, "/").concat(type));
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
            return pageTohelpDel('4');
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
            return pageTohelpDel('3');
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
            onClick: function onClick() {
              return moreClick('common');
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9pbmRleC50c3giXSwibmFtZXMiOlsiQUlfaGVhZGVyIiwiZHluYW1pYyIsIkFJX2Zvb3RlciIsIkhlbHAiLCJwcm9wcyIsImhlbHBzTGlzdCIsInVzZVN0YXRlIiwidHlwZSIsInNldFR5cGUiLCJoZWxwTGlzdHMiLCJzZXRoZWxwTGlzdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYWdlVG9oZWxwRGVsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImNvZGUiLCJkYXRhIiwibXNnIiwiZXJyb3IiLCJtb3JlQ2xpY2siLCJzdGF0dXMiLCJwdXNoIiwibWFwIiwiaXRlbSIsImhlbHBfY2F0ZWdvcnlfaWQiLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUNOLElBQU1FLFNBQVMsR0FBR0QsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEVBQVI7QUFBQTtBQUFBLGNBQVEsa0NBQVI7QUFBQTtBQUFBLEVBQXpCO01BQU1DLFM7QUFHTjtBQUNBOztBQWlCZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxNQUMxQkMsU0FEMEIsR0FDWkQsS0FEWSxDQUMxQkMsU0FEMEI7O0FBQUEsa0JBRVZDLHNEQUFRLENBQUMsR0FBRCxDQUZFO0FBQUEsTUFFM0JDLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdBRixzREFBUSxDQUFDRCxTQUFELENBSFI7QUFBQSxNQUczQkksU0FIMkI7QUFBQSxNQUdo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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9oZWxwLmxlc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IEFJX2hlYWRlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfaGVhZGVyL0FJX2hlYWRlcicpKVxyXG5jb25zdCBBSV9mb290ZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2Zvb3Rlci9BSV9mb290ZXInKSlcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IGdldGhlbHBzTGlzdCB9IGZyb20gJ0Avc2VydmljZXMvcHVibGljJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdAL3NlcnZpY2VzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgY29kZSwgZGF0YSwgbXNnIH0gPSBhd2FpdCBnZXRoZWxwc0xpc3Qoe1xyXG4gICAgdHlwZTogNCxcclxuICB9KVxyXG4gIGlmIChjb2RlICE9PSAyMDApIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IobXNnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGhlbHBzTGlzdDogZGF0YSxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxwKHByb3BzKSB7XHJcbiAgY29uc3QgeyBoZWxwc0xpc3QgfSA9IHByb3BzXHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJzQnKVxyXG4gIGNvbnN0IFtoZWxwTGlzdHMsIHNldGhlbHBMaXN0c10gPSB1c2VTdGF0ZShoZWxwc0xpc3QpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgcGFnZVRvaGVscERlbCA9IGFzeW5jICh0eXBlKSA9PiB7XHJcbiAgICBzZXRUeXBlKHR5cGUpXHJcbiAgICBjb25zdCB7IGNvZGUsIGRhdGEsIG1zZyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9hcGkvZ2V0aGVscHNMaXN0JyxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBpZiAoY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgIHNldGhlbHBMaXN0cyhkYXRhKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihtc2cpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb3JlQ2xpY2sgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgL2hlbHAvJHtzdGF0dXN9LyR7dHlwZX1gKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJIZWxwXCI+XHJcbiAgICAgIDxBSV9oZWFkZXIgdGl0bGU9XCLluK7liqnkuK3lv4NcIiBjdXJyZW50SW5kZXg9ezJ9IC8+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJhbm5lclwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidHlwZV9jaGFuZ2VcIiBvbkNsaWNrPXsoKSA9PiBwYWdlVG9oZWxwRGVsKCc0Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaGVscF9zdHVkZW50LnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiaGVscF9zdHVkZW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0eXBlID09ICc0JyA/ICdzdHVkZW50X3RleHQgY3VycmVudCcgOiAnc3R1ZGVudF90ZXh0J31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOaIkeaYr+WtpueUn1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidHlwZV9jaGFuZ2VcIiBvbkNsaWNrPXsoKSA9PiBwYWdlVG9oZWxwRGVsKCczJyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaGVscF90ZWFjaGVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiaGVscF90ZWFjaGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0eXBlID09ICczJyA/ICd0ZWFjaGVyX3RleHQgY3VycmVudCcgOiAndGVhY2hlcl90ZXh0J31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOaIkeaYr+iAgeW4iFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuZXdiaWVcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcF9ib3hcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibHRfdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHRcIj7mlrDmiYvmjIfljZc8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWxwX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaGVscF9pY29uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJoZWxwX2ljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicnRfbW9yZVwiIG9uQ2xpY2s9eygpID0+IG1vcmVDbGljaygnbm92aWNlJyl9PlxyXG4gICAgICAgICAgICAgIOafpeeci+abtOWkmnsnPid9XHJcbiAgICAgICAgICAgICAgeyc+J31cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZF9ib3hcIj5cclxuICAgICAgICAgICAge2hlbHBMaXN0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5oZWxwX2NhdGVnb3J5X2lkID09PSA4ID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5ld2JpZVwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wX2JveFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsdF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dFwiPuW4uOingemXrumimDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX2ljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJydF9tb3JlXCIgb25DbGljaz17KCkgPT4gbW9yZUNsaWNrKCdjb21tb24nKX0+XHJcbiAgICAgICAgICAgICAg5p+l55yL5pu05aSaeyc+J31cclxuICAgICAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkX2JveFwiPlxyXG4gICAgICAgICAgICB7aGVscExpc3RzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLmhlbHBfY2F0ZWdvcnlfaWQgPT09IDkgPyAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlkZW9cIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPuinhumikeS7i+e7jTwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaGVscF9pY29uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiaGVscF9pY29uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlb19kb21cIlxyXG4gICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWljdGIub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS93ZWJzaXRlL21vdmllLm1wNFwiXHJcbiAgICAgICAgICA+PC92aWRlbz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEFJX2Zvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=