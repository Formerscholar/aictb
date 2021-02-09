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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('3'),
      type = _useState[0],
      setType = _useState[1];

  var helpsList = props.helpsList;
  console.log(helpsList);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var pageTohelpDel = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(type) {
      var _yield$request, code, msg;

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
              msg = _yield$request.msg;

              if (code === 200) {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.success(msg);
              } else {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error(msg);
              } // router.push(`/help/${type}`)


            case 7:
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "Help",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_header, {
      title: "\u5E2E\u52A9\u4E2D\u5FC3",
      currentIndex: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "student_text",
            children: "\u6211\u662F\u5B66\u751F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "teacher_text",
            children: "\u6211\u662F\u8001\u5E08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "help_icon",
              src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
              alt: "help_icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "rt_more",
            children: ["\u67E5\u770B\u66F4\u591A", '>', '>']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "grid_box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "APP/\u5C0F\u7A0B\u5E8F\u5982\u4F55\u52A0\u5165\u73ED\u7EA7\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "APP/\u5C0F\u7A0B\u5E8F\u5982\u4F55\u52A0\u5165\u73ED\u7EA7\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u90AE\u7BB1\u672A\u6536\u5230\u4E0B\u8F7D\u7684\u9519\u9898\u672C\u600E\u4E48\u529E\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u90AE\u7BB1\u672A\u6536\u5230\u4E0B\u8F7D\u7684\u9519\u9898\u672C\u600E\u4E48\u529E\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u62CD\u7167\u8BC6\u522B\u4E0D\u4E86\u600E\u4E48\u529E\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u62CD\u7167\u8BC6\u522B\u4E0D\u4E86\u600E\u4E48\u529E\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u4E3A\u4EC0\u4E48\u6709\u7684\u9898\u76EE\u6CA1\u6709\u7B54\u6848\u3001\u89E3\u6790\u548C\u77E5\u8BC6\u70B9\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u4E3A\u4EC0\u4E48\u6709\u7684\u9898\u76EE\u6CA1\u6709\u7B54\u6848\u3001\u89E3\u6790\u548C\u77E5\u8BC6\u70B9\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "newbie",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "top_box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "lt_title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              className: "text",
              children: "\u5E2E\u52A9\u4E2D\u5FC3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "help_icon",
              src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
              alt: "help_icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "rt_more",
            children: ["\u67E5\u770B\u66F4\u591A", '>', '>']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "grid_box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "APP/\u5C0F\u7A0B\u5E8F\u5982\u4F55\u52A0\u5165\u73ED\u7EA7\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "APP/\u5C0F\u7A0B\u5E8F\u5982\u4F55\u52A0\u5165\u73ED\u7EA7\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u90AE\u7BB1\u672A\u6536\u5230\u4E0B\u8F7D\u7684\u9519\u9898\u672C\u600E\u4E48\u529E\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u90AE\u7BB1\u672A\u6536\u5230\u4E0B\u8F7D\u7684\u9519\u9898\u672C\u600E\u4E48\u529E\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u62CD\u7167\u8BC6\u522B\u4E0D\u4E86\u600E\u4E48\u529E\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u62CD\u7167\u8BC6\u522B\u4E0D\u4E86\u600E\u4E48\u529E\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u4E3A\u4EC0\u4E48\u6709\u7684\u9898\u76EE\u6CA1\u6709\u7B54\u6848\u3001\u89E3\u6790\u548C\u77E5\u8BC6\u70B9\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "item",
            children: "\u4E3A\u4EC0\u4E48\u6709\u7684\u9898\u76EE\u6CA1\u6709\u7B54\u6848\u3001\u89E3\u6790\u548C\u77E5\u8BC6\u70B9\uFF1F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "video",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "title",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\u89C6\u9891\u4ECB\u7ECD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "help_icon",
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/help_icon.png",
            alt: "help_icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
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
          lineNumber: 130,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(Help, "mjqqejYB7ZM9gTlzahohMl0WVfM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscC9pbmRleC50c3giXSwibmFtZXMiOlsiQUlfaGVhZGVyIiwiZHluYW1pYyIsIkFJX2Zvb3RlciIsIkhlbHAiLCJwcm9wcyIsInVzZVN0YXRlIiwidHlwZSIsInNldFR5cGUiLCJoZWxwc0xpc3QiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZVRvaGVscERlbCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJjb2RlIiwibXNnIiwic3VjY2VzcyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUNOLElBQU1FLFNBQVMsR0FBR0QsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEVBQVI7QUFBQTtBQUFBLGNBQVEsa0NBQVI7QUFBQTtBQUFBLEVBQXpCO01BQU1DLFM7QUFHTjtBQUNBOztBQWlCZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxHQUFELENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBQUEsTUFFMUJDLFNBRjBCLEdBRVpKLEtBRlksQ0FFMUJJLFNBRjBCO0FBR2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUNBLE1BQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsYUFBYTtBQUFBLGdNQUFHLGlCQUFPUCxJQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJDLHFCQUFPLENB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QUE7QUFBQSxZQTFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThGRDs7R0FySHVCVixJO1VBSVBTLHFEOzs7TUFKT1QsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oZWxwLjNlNGJkZDgzNDYwOTY3MDA0YTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2hlbHAubGVzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuY29uc3QgQUlfaGVhZGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9oZWFkZXIvQUlfaGVhZGVyJykpXHJcbmNvbnN0IEFJX2Zvb3RlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfZm9vdGVyL0FJX2Zvb3RlcicpKVxyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgZ2V0aGVscHNMaXN0IH0gZnJvbSAnQC9zZXJ2aWNlcy9wdWJsaWMnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJ0Avc2VydmljZXMnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyBjb2RlLCBkYXRhLCBtc2cgfSA9IGF3YWl0IGdldGhlbHBzTGlzdCh7XHJcbiAgICB0eXBlOiAzLFxyXG4gIH0pXHJcbiAgaWYgKGNvZGUgIT09IDIwMCkge1xyXG4gICAgbWVzc2FnZS5lcnJvcihtc2cpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaGVscHNMaXN0OiBkYXRhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbHAocHJvcHMpIHtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnMycpXHJcbiAgY29uc3QgeyBoZWxwc0xpc3QgfSA9IHByb3BzXHJcbiAgY29uc29sZS5sb2coaGVscHNMaXN0KVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IHBhZ2VUb2hlbHBEZWwgPSBhc3luYyAodHlwZSkgPT4ge1xyXG4gICAgc2V0VHlwZSh0eXBlKVxyXG4gICAgY29uc3QgeyBjb2RlLCBtc2cgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICcvYXBpL2dldGhlbHBzTGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgaWYgKGNvZGUgPT09IDIwMCkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MobXNnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihtc2cpXHJcbiAgICB9XHJcbiAgICAvLyByb3V0ZXIucHVzaChgL2hlbHAvJHt0eXBlfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIkhlbHBcIj5cclxuICAgICAgPEFJX2hlYWRlciB0aXRsZT1cIuW4ruWKqeS4reW/g1wiIGN1cnJlbnRJbmRleD17Mn0gLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0eXBlX2NoYW5nZVwiIG9uQ2xpY2s9eygpID0+IHBhZ2VUb2hlbHBEZWwoNCl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaGVscF9zdHVkZW50LnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiaGVscF9zdHVkZW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInN0dWRlbnRfdGV4dFwiPuaIkeaYr+WtpueUnzwvaDE+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0eXBlX2NoYW5nZVwiIG9uQ2xpY2s9eygpID0+IHBhZ2VUb2hlbHBEZWwoMyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaGVscF90ZWFjaGVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiaGVscF90ZWFjaGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRlYWNoZXJfdGV4dFwiPuaIkeaYr+iAgeW4iDwvaDE+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5ld2JpZVwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wX2JveFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsdF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dFwiPuaWsOaJi+aMh+WNlzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX2ljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJydF9tb3JlXCI+XHJcbiAgICAgICAgICAgICAg5p+l55yL5pu05aSaeyc+J31cclxuICAgICAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkX2JveFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtXCI+QVBQL+Wwj+eoi+W6j+WmguS9leWKoOWFpeePree6p++8nzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbVwiPkFQUC/lsI/nqIvluo/lpoLkvZXliqDlhaXnj63nuqfvvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7pgq7nrrHmnKrmlLbliLDkuIvovb3nmoTplJnpopjmnKzmgI7kuYjlip7vvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7pgq7nrrHmnKrmlLbliLDkuIvovb3nmoTplJnpopjmnKzmgI7kuYjlip7vvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7mi43nhafor4bliKvkuI3kuobmgI7kuYjlip7vvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7mi43nhafor4bliKvkuI3kuobmgI7kuYjlip7vvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7kuLrku4DkuYjmnInnmoTpopjnm67msqHmnInnrZTmoYjjgIHop6PmnpDlkoznn6Xor4bngrnvvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7kuLrku4DkuYjmnInnmoTpopjnm67msqHmnInnrZTmoYjjgIHop6PmnpDlkoznn6Xor4bngrnvvJ88L3NwYW4+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5ld2JpZVwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wX2JveFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsdF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dFwiPuW4ruWKqeS4reW/gzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9oZWxwX2ljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJydF9tb3JlXCI+XHJcbiAgICAgICAgICAgICAg5p+l55yL5pu05aSaeyc+J31cclxuICAgICAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkX2JveFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtXCI+QVBQL+Wwj+eoi+W6j+WmguS9leWKoOWFpeePree6p++8nzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbVwiPkFQUC/lsI/nqIvluo/lpoLkvZXliqDlhaXnj63nuqfvvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7pgq7nrrHmnKrmlLbliLDkuIvovb3nmoTplJnpopjmnKzmgI7kuYjlip7vvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7pgq7nrrHmnKrmlLbliLDkuIvovb3nmoTplJnpopjmnKzmgI7kuYjlip7vvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7mi43nhafor4bliKvkuI3kuobmgI7kuYjlip7vvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7mi43nhafor4bliKvkuI3kuobmgI7kuYjlip7vvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7kuLrku4DkuYjmnInnmoTpopjnm67msqHmnInnrZTmoYjjgIHop6PmnpDlkoznn6Xor4bngrnvvJ88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1cIj7kuLrku4DkuYjmnInnmoTpopjnm67msqHmnInnrZTmoYjjgIHop6PmnpDlkoznn6Xor4bngrnvvJ88L3NwYW4+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj7op4bpopHku4vnu408L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWxwX2ljb25cIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWljdGIub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS93ZWJzaXRlL2hlbHBfaWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImhlbHBfaWNvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgY29udHJvbHNcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW9fZG9tXCJcclxuICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9tb3ZpZS5tcDRcIlxyXG4gICAgICAgICAgPjwvdmlkZW8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxBSV9mb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9