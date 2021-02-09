webpackHotUpdate_N_E("pages/join",{

/***/ "./pages/join.tsx":
/*!************************!*\
  !*** ./pages/join.tsx ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Join; });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_join_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/join.less */ "./styles/join.less");
/* harmony import */ var _styles_join_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_join_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/services */ "./services/index.js");








var _jsxFileName = "E:\\code\\work\\website\\pages\\join.tsx",
    _s = $RefreshSig$();




var AI_header = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! @/components/AI_header/AI_header */ "./components/AI_header/AI_header.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @/components/AI_header/AI_header */ "./components/AI_header/AI_header.tsx")];
    },
    modules: ['@/components/AI_header/AI_header']
  }
});
_c2 = AI_header;
var AI_footer = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c3 = function _c3() {
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


var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a.Option;
var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a.TextArea;
var __N_SSG = true;
function Join(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      ProvincesId = _useState[0],
      setProvincesId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      CitysId = _useState2[0],
      setCitysId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      CityList = _useState3[0],
      setCityList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      Name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      Phone = _useState5[0],
      setPhone = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      leaveMsg = _useState6[0],
      setLeaveMsg = _useState6[1];

  var Provinces = props.Provinces;

  function CityhandleChange(value) {
    setCitysId(value);
  }

  var nameChange = function nameChange(e) {
    var value = e.target.value;
    setName(value);
  };

  var mobileChange = function mobileChange(e) {
    var value = e.target.value;
    setPhone(value);
  };

  var leaveMsgChange = function leaveMsgChange(e) {
    var value = e.target.value;
    setLeaveMsg(value);
  };

  var immediatelyClick = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var _yield$request, code, msg;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_services__WEBPACK_IMPORTED_MODULE_11__["default"])({
                url: '/api/joinAgent',
                method: 'GET',
                params: {
                  contacts: Name,
                  mobile: Phone,
                  province_id: ProvincesId,
                  city_id: CitysId,
                  remark: leaveMsg
                }
              });

            case 2:
              _yield$request = _context.sent;
              code = _yield$request.code;
              msg = _yield$request.msg;

              if (code === 200) {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.success(msg);

                setProvincesId(null);
                setCitysId(null);
                setCityList([]);
                setName('');
                setPhone('');
                setLeaveMsg('');
              } else {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error(msg);
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function immediatelyClick() {
      return _ref.apply(this, arguments);
    };
  }();

  function ProvincesHandleChange(_x) {
    return _ProvincesHandleChange.apply(this, arguments);
  }

  function _ProvincesHandleChange() {
    _ProvincesHandleChange = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(value) {
      var _yield$request2, code, data, msg;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setProvincesId(value);
              _context2.next = 3;
              return Object(_services__WEBPACK_IMPORTED_MODULE_11__["default"])({
                url: '/api/getCitsId',
                method: 'GET',
                params: {
                  id: value
                }
              });

            case 3:
              _yield$request2 = _context2.sent;
              code = _yield$request2.code;
              data = _yield$request2.data;
              msg = _yield$request2.msg;

              if (code === 200) {
                setCityList(Object.values(data));
              } else {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error(msg);
              }

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _ProvincesHandleChange.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    id: "Join",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(AI_header, {
      title: "\u52A0\u76DF\u4EE3\u7406",
      currentIndex: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        className: "join_banner",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "left_info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "title",
            children: "AI\u9519\u9898\u5B9D\u706B\u70ED\u62DB\u5546\u4E2D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "content",
            children: "\u4E00\u6B3E\u57FA\u4E8E\u4EBA\u5DE5\u667A\u80FD\uFF08AI\uFF09\u76F8\u5173\u7684\u6559\u80B2\u6280\u672F\u5E94\u7528\u8F6F\u4EF6\uFF0C\u5B9E\u73B0\u81EA\u9002\u5E94\u6559\u80B2\u7684\u7CBE\u51C6\u5316\u6559\u5B66\uFF0C\u63D0\u5347\u5B66\u4E60\u8005\u5B66\u4E60\u8D28\u91CF\u7684\u4E00\u6B3E\u667A\u6167\u4EA7\u54C1\u3002 \u4E00\u6B3E\u667A\u6167\u4EA7\u54C1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
            className: "Experience",
            type: "primary",
            shape: "round",
            size: "large",
            children: "\u7533\u8BF7\u4F53\u9A8C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          className: "join_img",
          src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/join_img.png",
          alt: "join_img"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        className: "prospects",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "title",
          children: "\u884C\u4E1A\u524D\u666F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "subtitle",
          children: "BACKGROUND"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: "advertising",
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/item1.png",
            alt: "advertising"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "content_text",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "title",
              children: "\u56FD\u5BB6\u653F\u7B56"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "content",
              children: ["2017\u5E74\u300A\u56FD\u52A1\u9662\u300B\u8981\u6C42\u5229\u7528\u667A\u80FD\u6280\u672F\u5F00\u53D1\u667A\u80FD\u6559\u80B2\u52A9\u7406\uFF0C\u5EFA\u7ACB\u667A\u80FD\u3001\u5FEB\u901F\u3001\u5168\u9762\u7684\u6559\u80B2\u5206\u6790\u7CFB\u7EDF\u3002\u5EFA\u7ACB\u4EE5\u5B66\u4E60\u8005\u4E3A\u4E2D\u5FC3\u7684\u6559\u80B2\u73AF\u5883\uFF0C\u63D0\u4F9B\u7CBE\u51C6\u63A8\u9001\u7684\u6559\u80B2\u670D\u52A1\uFF0C\u5B9E\u73B0\u65E5\u5E38\u6559\u80B2\u548C\u7EC8\u8EAB\u6559\u80B2\u8BA2\u5236\u5316\u3002", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, this), "2019\u5E74\u300A\u6559\u80B2\u90E8\u300B\u9F13\u52B1\u8D2D\u4E70\u4F18\u8D28\u6559\u80B2App\u670D\u52A1\u521B\u65B0\u4F9B\u7ED9\u6A21\u5F0F\uFF0C\u4FC3\u8FDB\u4EA7\u4E1A\u53D1\u5C55\u3002\u660E\u786E\u63D0\u51FA\u4EE5\u6559\u80B2\u3001\u5B66\u4E60\u4E3A\u4E3B\u8981\u5E94\u7528\u573A\u666F\uFF0C\u670D\u52A1\u4E8E\u5B66\u6821\u6559\u5B66\u4E0E\u7BA1\u7406\u3001\u5B66\u751F\u5B66\u4E60\u4E0E\u751F\u6D3B\u4EE5\u53CA\u5BB6\u6821\u4E92\u52A8\u7B49\u65B9\u9762\u7684\u8F6F\u4EF6\u5E94\u7528\u3002"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "item item1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "content_text",
            style: {
              width: '30.875rem'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "title",
              children: "\u884C\u4E1A\u89C4\u6A21"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "content",
              style: {
                marginBottom: '3.875rem'
              },
              children: "\u968F\u7740\u4EBA\u53E3\u7EA2\u5229\u7684\u589E\u957F\uFF0C\u4EE5\u53CA\u5728\u7EBF\u7528\u6237\u4E0D\u65AD\u589E\u957F\uFF0C\u76EE\u4E92\u8054\u7F51\u6559\u80B2\u5728\u7EBF\u7528\u6237\u5DF2\u7ECF\u7A81\u78342\u4EBF\uFF0C\u884C\u4E1A\u89C4\u6A21\u57282022\u5E74\u5C06\u8FBE\u52305400\u4EBF\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "title",
              children: "\u5B66\u6821\u9700\u6C42"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "content",
              children: "\u843D\u5B9E\u56FD\u5BB6\u653F\u7B56\uFF0C\u901A\u8FC7\u4EBA\u5DE5\u667A\u80FD\u6280\u672F\u89E3\u51B3\u4E2A\u6027\u5316\u6559\u5B66\u7684\u9700\u6C42\uFF0C\u5EFA\u7ACB\u4EE5\u5B66\u4E60\u8005\u4E3A\u4E2D\u5FC3\u7684\u6559\u80B2\u73AF\u5883\uFF0C\u79EF\u6781\u5B9E\u73B0\u5728\u201C\u4E92\u8054\u7F51+\u201D\u6761\u4EF6\u4E0B\u7684\u4EBA\u624D\u57F9\u517B\u65B0\u6A21\u5F0F\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: "advertising",
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/item2.png",
            alt: "advertising"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "item ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: "advertising",
            src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/item3.png",
            alt: "advertising",
            style: {
              height: '12.25rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "content_text",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "title",
              children: "\u5BB6\u957F\u8BA4\u53EF\u5EA6\u9AD8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "content",
              children: "\u5728\u4E92\u8054\u7F51\u73AF\u5883\u6210\u957F\u4E0B\u7684\u5BB6\u957F\u5DF2\u7ECF\u610F\u8BC6\u5230\u968F\u7740\u6559\u80B2\u4FE1\u606F\u5185\u5BB9\u516C\u5E73\u5316\u3001\u540C\u8D28\u5316\uFF0C\u4E2D\u9AD8\u8003\u7ADE\u4E89\u4F1A\u66F4\u52A0\u6FC0\u70C8\uFF1B\u76EE\u524D\u4EBA\u5DE5\u667A\u80FD\u53D1\u5C55\u5DF2\u7ECF\u5E94\u7528\u5230\u65E5\u5E38\u751F\u6D3B\u4E2D\uFF0C\u5BB6\u957F\u4EEC\u4E5F\u5728\u79EF\u6781\u5BFB\u627E\u9AD8\u6548\u7684\u5B66\u4E60\u65B9\u6CD5\u5E2E\u52A9\u5B69\u5B50\u89E3\u51B3\u65E5\u5E38\u5B66\u4E60\u4E2D\u9047\u5230\u7684\u74F6\u9888\uFF0C\u907F\u514D\u4E8B\u500D\u529F\u534A\uFF0C\u6700\u7EC8\u4F1A\u901A\u8FC7\u4E2A\u6027\u5316\u5B66\u4E60\u5B9E\u73B0\u6210\u7EE9\u63D0\u9AD8\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        className: "Advantage",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "bg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "title",
            children: "\u4EA7\u54C1\u4F18\u52BF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "subtitle",
            children: "PRODUCT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "grid_box",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: "Advantage_icon",
                src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_product.png",
                alt: "Advantage_icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "productname",
                children: "\u4EA7\u54C1\u7A33\u5B9A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "Description",
                children: "\u4EA7\u54C1\u5F00\u53D1\u5468\u671F\u957F\u53CD\u590D\u6253\u78E8\uFF0C\u7CFB\u7EDF\u5B89\u5168\u7528\u6237\u653E\u5FC3\u3002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: "Advantage_icon",
                src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_Lightweight.png",
                alt: "Advantage_icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "productname",
                children: "\u8F7B\u91CF\u7EA7\u4EA7\u54C1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "Description",
                children: "\u652F\u6301\u624B\u673A\u3001pad\u3001\u7535\u8111\u591A\u5E73\u53F0\u4F7F\u7528\uFF0C\u53EF\u7528\u4E8E\u8BFE\u5802\u6559\u5B66\u3001\u8BFE\u540E\u590D\u4E60\uFF0C\u5B66\u751F\u81EA\u4E3B\u62CD\u7167\u6536\u96C6\u548C\u6559\u5E08\u4E0A\u4F20\u8BD5\u5377\u7B49\u591A\u79CD\u4F7F\u7528\u65B9\u6CD5\u3002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: "Advantage_icon",
                src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_upgrade.png",
                alt: "Advantage_icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "productname",
                children: "\u5347\u7EA7\u5468\u671F\u5FEB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "Description",
                children: "\u79FB\u52A8\u4E92\u8054\u7F51\u7814\u53D1\u601D\u8DEF\uFF0C\u8FED\u4EE3\u66F4\u65B0\u5FEB\uFF0C\u6BCF\u5468\u6BCF\u6708\u90FD\u6709\u66F4\u65B0\u3002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: "Advantage_icon",
                src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_Operation.png",
                alt: "Advantage_icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "productname",
                children: "\u8FD0\u8425\u7A33\u5B9A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "Description",
                children: "\u8FD0\u8425\u7A33\u5B9A\u6307\u5B9A\u6027\u76EE\u6807\u76C8\u5229\u8BA1\u5212\u4EE5\u53CA\u9636\u6BB5\u6027\u76EE\u6807\u6267\u884C\u3002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: "Advantage_icon",
                src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_local.png",
                alt: "Advantage_icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "productname",
                children: "\u672C\u5730\u5316\u5185\u5BB9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "Description",
                children: "\u5185\u5BB9\u6309\u7167\u533A\u57DF\u7CBE\u51C6\u5B9A\u5236\uFF0C\u4E25\u683C\u6309\u7167\u672C\u5730\u8003\u7EB2\u3001\u6559\u6750\u7B49\u8981\u7D20\u5B9A\u5236\u5185\u5BB9\uFF0C\u6DB5\u76D6\u5F53\u5730\u6559\u8F85\u548C\u8BD5\u5377\u3002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
              className: "item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: "Advantage_icon",
                src: "https://aictb.oss-cn-shanghai.aliyuncs.com/website/Advantage_icon_Aftersale.png",
                alt: "Advantage_icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "productname",
                children: "\u552E\u540E\u5F3A\u5927"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
                className: "Description",
                children: "7*24\u5C0F\u65F6\u65E0\u7F1D\u5BF9\u63A5\u6240\u6709\u95EE\u9898\u7B2C\u4E00\u65F6\u95F4\u53CD\u9988\u3002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        className: "Cooperation",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "title",
          children: "\u5408\u4F5C\u4EAE\u70B9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "subtitle",
          children: "COOPERATION"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "list",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
              className: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
              className: "title",
              children: "\u7CFB\u7EDF\u7A33\u5B9A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "info",
              children: "\u591A\u4EBA\u56E2\u961F\u957F\u671F\u6C89\u6DC0\u4E0E\u68C0\u9A8C\uFF0C\u6253\u9020\u4F18\u79C0\u4EA7\u54C1\uFF0C\u7CFB\u7EDF\u7A33\u5B9A\uFF0C\u8BF8\u591A\u4EAE\u70B9\uFF0C\u884C\u4E1A\u516C\u8BA4\u7684\u9886\u5148\u8005\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
              className: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
              className: "title",
              children: "\u6E20\u9053\u652F\u6301"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "info",
              children: "\u5168\u65B9\u4F4D\u670D\u52A1\u652F\u6491\u4F53\u7CFB\uFF0C\u5FEB\u901F\u542F\u52A8\u5E02\u573A\uFF0C\u654F\u6377\u670D\u52A1\u54CD\u5E94\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
              className: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
              className: "title",
              children: "\u6536\u76CA\u7A33\u5B9A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "info",
              children: "\u91C7\u7528Saa\u6A21\u5F0F\uFF0C\u6210\u4EA4\u540E\u6BCF\u5E74\u7EED\u8D39\uFF0C\u6EDA\u96EA\u7403\u5F0F\u7684\u76C8\u5229\u6548\u5E94\uFF0C\u4FDD\u8BC1\u5408\u4F5C\u4F19\u4F34\u957F\u4E45\u6536\u76CA\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        className: "Process",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
          className: "title",
          children: "\u5408\u4F5C\u6D41\u7A0B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("em", {
          className: "subtitle",
          children: "FLOW"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "flowchart",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "text_box",
            children: ["\u63D0\u4EA4", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 15
            }, this), "\u7533\u8BF7"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "arrows_icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "text_box",
            children: ["\u8003\u5BDF", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, this), "\u6C9F\u901A"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "arrows_icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "text_box",
            children: ["\u8D44\u8D28", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this), "\u8BC4\u5BA1"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "arrows_icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "text_box",
            children: ["\u7B7E\u8BA2", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, this), "\u5408\u540C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "arrows_icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "text_box",
            children: ["\u4E13\u4E1A", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, this), "\u57F9\u8BAD"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "arrows_icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            className: "text_box",
            children: ["\u8FD0\u8425", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, this), "\u4E0A\u7EBF"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
        className: "Online",
        id: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
          className: "title",
          children: "\u5728\u7EBF\u7533\u8BF7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("em", {
          className: "subtitle",
          children: "\u5982\u60A8\u6709\u610F\u5411\uFF0C\u8BF7\u7559\u4E0B\u60A8\u7684\u8054\u7CFB\u65B9\u5F0F\uFF0C\u6216\u53D1\u9001\u610F\u5411\u4E66\u81F3\u90AE\u7BB14061067@163.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
          className: "form",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
            className: "bor_inp",
            size: "large",
            placeholder: "\u8BF7\u586B\u5199\u771F\u5B9E\u59D3\u540D\uFF08\u5FC5\u586B\uFF09",
            prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["UserOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 23
            }, this),
            value: Name,
            onChange: nameChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
            className: "bor_inp",
            size: "large",
            placeholder: "\u8BF7\u586B\u5199\u8054\u7CFB\u65B9\u5F0F\uFF08\u5FC5\u586B\uFF09",
            prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["PhoneOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 23
            }, this),
            value: Phone,
            onChange: mobileChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "selct_box",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a, {
              style: {
                width: '50%',
                marginRight: '20px',
                border: '1px solid #FF4D3A'
              },
              onChange: ProvincesHandleChange,
              placeholder: "\u9009\u62E9\u6240\u5728\u7701",
              value: ProvincesId,
              children: Provinces.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
                  value: item.id,
                  children: item.name
                }, item.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a, {
              style: {
                width: '50%',
                border: '1px solid #FF4D3A'
              },
              onChange: CityhandleChange,
              placeholder: "\u9009\u62E9\u6240\u5728\u5E02",
              value: CitysId,
              children: CityList.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
                  value: item.id,
                  children: item.name
                }, item.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(TextArea, {
            className: "bor_ta",
            rows: 4,
            placeholder: "\u8BF7\u7559\u8A00\uFF08\u9009\u586B\uFF09",
            value: leaveMsg,
            onChange: leaveMsgChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
            className: "commitBtn",
            type: "primary",
            shape: "round",
            size: "large",
            onClick: immediatelyClick,
            children: "\u7ACB\u5373\u7533\u8BF7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(AI_footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, this);
} // 售后

_s(Join, "ugM6EjKg/SQxvdR4lLnrGMMvtyo=");

_c5 = Join;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "AI_header$dynamic");
$RefreshReg$(_c2, "AI_header");
$RefreshReg$(_c3, "AI_footer$dynamic");
$RefreshReg$(_c4, "AI_footer");
$RefreshReg$(_c5, "Join");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9pbi50c3giXSwibmFtZXMiOlsiQUlfaGVhZGVyIiwiZHluYW1pYyIsIkFJX2Zvb3RlciIsIk9wdGlvbiIsIlRleHRBcmVhIiwiSm9pbiIsInByb3BzIiwidXNlU3RhdGUiLCJQcm92aW5jZXNJZCIsInNldFByb3ZpbmNlc0lkIiwiQ2l0eXNJZCIsInNldENpdHlzSWQiLCJDaXR5TGlzdCIsInNldENpdHlMaXN0IiwiTmFtZSIsInNldE5hbWUiLCJQaG9uZSIsInNldFBob25lIiwibGVhdmVNc2ciLCJzZXRMZWF2ZU1zZyIsIlByb3ZpbmNlcyIsIkNpdHloYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsIm5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibW9iaWxlQ2hhbmdlIiwibGVhdmVNc2dDaGFuZ2UiLCJpbW1lZGlhdGVseUNsaWNrIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImNvbnRhY3RzIiwibW9iaWxlIiwicHJvdmluY2VfaWQiLCJjaXR5X2lkIiwicmVtYXJrIiwiY29kZSIsIm1zZyIsInN1Y2Nlc3MiLCJlcnJvciIsIlByb3ZpbmNlc0hhbmRsZUNoYW5nZSIsImlkIiwiZGF0YSIsIk9iamVjdCIsInZhbHVlcyIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJib3JkZXIiLCJtYXAiLCJpdGVtIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtREFBTztBQUFBLFNBQUMsNE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RUFBUjtBQUFBO0FBQUEsY0FBUSxrQ0FBUjtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUNOLElBQU1FLFNBQVMsR0FBR0QsbURBQU87QUFBQSxTQUFDLDRNQUFEO0FBQUE7QUFBQTtB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LENBQUNDO0FBRFIsbUJBQTZCRCxJQUFJLENBQUNWLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFLRCxlQU5BO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpCRixlQXNERSxxRUFBQyxRQUFEO0FBQ0UscUJBQVMsRUFBQyxRQURaO0FBRUUsZ0JBQUksRUFBRSxDQUZSO0FBR0UsdUJBQVcsRUFBQyw0Q0FIZDtBQUlFLGlCQUFLLEVBQUV6QixRQUpUO0FBS0Usb0JBQVEsRUFBRVM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRERixlQTZERTtBQUNFLHFCQUFTLEVBQUMsV0FEWjtBQUVFLGdCQUFJLEVBQUMsU0FGUDtBQUdFLGlCQUFLLEVBQUMsT0FIUjtBQUlFLGdCQUFJLEVBQUMsT0FKUDtBQUtFLG1CQUFPLEVBQUVDLGdCQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdk5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBdVNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZTRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJTRCxDLENBQ0Q7O0dBbFh3QnZCLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi4yZGIxYTBlZjM5OTdkY2NkZDliMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdAL3N0eWxlcy9qb2luLmxlc3MnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuY29uc3QgQUlfaGVhZGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9oZWFkZXIvQUlfaGVhZGVyJykpXHJcbmNvbnN0IEFJX2Zvb3RlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQUlfZm9vdGVyL0FJX2Zvb3RlcicpKVxyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3QsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBQaG9uZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcblxyXG5pbXBvcnQgeyBnZXRQcm92aW5jZXMgfSBmcm9tICdAL3NlcnZpY2VzL3B1YmxpYydcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnQC9zZXJ2aWNlcydcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXRcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCB7IGNvZGUsIGRhdGEsIG1zZyB9ID0gYXdhaXQgZ2V0UHJvdmluY2VzKClcclxuICBpZiAoY29kZSAhPT0gMjAwKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKG1zZylcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBQcm92aW5jZXM6IGRhdGEsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9pbihwcm9wcykge1xyXG4gIGNvbnN0IFtQcm92aW5jZXNJZCwgc2V0UHJvdmluY2VzSWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbQ2l0eXNJZCwgc2V0Q2l0eXNJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtDaXR5TGlzdCwgc2V0Q2l0eUxpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW05hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW1Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbGVhdmVNc2csIHNldExlYXZlTXNnXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCB7IFByb3ZpbmNlcyB9ID0gcHJvcHNcclxuXHJcbiAgZnVuY3Rpb24gQ2l0eWhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgc2V0Q2l0eXNJZCh2YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgIHNldE5hbWUodmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2JpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgIHNldFBob25lKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbGVhdmVNc2dDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgIHNldExlYXZlTXNnKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1tZWRpYXRlbHlDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgY29kZSwgbXNnIH0gPSBhd2FpdCByZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL2FwaS9qb2luQWdlbnQnLFxyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBjb250YWN0czogTmFtZSxcclxuICAgICAgICBtb2JpbGU6IFBob25lLFxyXG4gICAgICAgIHByb3ZpbmNlX2lkOiBQcm92aW5jZXNJZCxcclxuICAgICAgICBjaXR5X2lkOiBDaXR5c0lkLFxyXG4gICAgICAgIHJlbWFyazogbGVhdmVNc2csXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgaWYgKGNvZGUgPT09IDIwMCkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MobXNnKVxyXG4gICAgICBzZXRQcm92aW5jZXNJZChudWxsKVxyXG4gICAgICBzZXRDaXR5c0lkKG51bGwpXHJcbiAgICAgIHNldENpdHlMaXN0KFtdKVxyXG4gICAgICBzZXROYW1lKCcnKVxyXG4gICAgICBzZXRQaG9uZSgnJylcclxuICAgICAgc2V0TGVhdmVNc2coJycpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKG1zZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIFByb3ZpbmNlc0hhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgc2V0UHJvdmluY2VzSWQodmFsdWUpXHJcbiAgICBjb25zdCB7IGNvZGUsIGRhdGEsIG1zZyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9hcGkvZ2V0Q2l0c0lkJyxcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQ6IHZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIGlmIChjb2RlID09PSAyMDApIHtcclxuICAgICAgc2V0Q2l0eUxpc3QoT2JqZWN0LnZhbHVlcyhkYXRhKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IobXNnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJKb2luXCI+XHJcbiAgICAgIDxBSV9oZWFkZXIgdGl0bGU9XCLliqDnm5/ku6PnkIZcIiBjdXJyZW50SW5kZXg9ezN9IC8+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImpvaW5fYmFubmVyXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsZWZ0X2luZm9cIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGl0bGVcIj5BSemUmemimOWuneeBq+eDreaLm+WVhuS4rTwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIOS4gOasvuWfuuS6juS6uuW3peaZuuiDve+8iEFJ77yJ55u45YWz55qE5pWZ6IKy5oqA5pyv5bqU55So6L2v5Lu277yM5a6e546w6Ieq6YCC5bqU5pWZ6IKy55qE57K+5YeG5YyW5pWZ5a2m77yM5o+Q5Y2H5a2m5Lmg6ICF5a2m5Lmg6LSo6YeP55qE5LiA5qy+5pm65oWn5Lqn5ZOB44CCXHJcbiAgICAgICAgICAgICAg5LiA5qy+5pm65oWn5Lqn5ZOBXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2VcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg55Sz6K+35L2T6aqMXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqb2luX2ltZ1wiXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWljdGIub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS93ZWJzaXRlL2pvaW5faW1nLnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cImpvaW5faW1nXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb3NwZWN0c1wiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGl0bGVcIj7ooYzkuJrliY3mma88L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkJBQ0tHUk9VTkQ8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZHZlcnRpc2luZ1wiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaXRlbTEucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJhZHZlcnRpc2luZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRfdGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpdGxlXCI+5Zu95a625pS/562WPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDIwMTflubTjgIrlm73liqHpmaLjgIvopoHmsYLliKnnlKjmmbrog73mioDmnK/lvIDlj5Hmmbrog73mlZnogrLliqnnkIbvvIzlu7rnq4vmmbrog73jgIHlv6vpgJ/jgIHlhajpnaLnmoTmlZnogrLliIbmnpDns7vnu5/jgILlu7rnq4vku6XlrabkuaDogIXkuLrkuK3lv4PnmoTmlZnogrLnjq/looPvvIzmj5Dkvpvnsr7lh4bmjqjpgIHnmoTmlZnogrLmnI3liqHvvIzlrp7njrDml6XluLjmlZnogrLlkoznu4jouqvmlZnogrLorqLliLbljJbjgIJcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgMjAxOeW5tOOAiuaVmeiCsumDqOOAi+m8k+WKsei0reS5sOS8mOi0qOaVmeiCskFwcOacjeWKoeWIm+aWsOS+m+e7meaooeW8j++8jOS/g+i/m+S6p+S4muWPkeWxleOAguaYjuehruaPkOWHuuS7peaVmeiCsuOAgeWtpuS5oOS4uuS4u+imgeW6lOeUqOWcuuaZr++8jOacjeWKoeS6juWtpuagoeaVmeWtpuS4jueuoeeQhuOAgeWtpueUn+WtpuS5oOS4jueUn+a0u+S7peWPiuWutuagoeS6kuWKqOetieaWuemdoueahOi9r+S7tuW6lOeUqOOAglxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaXRlbSBpdGVtMVwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50X3RleHRcIiBzdHlsZT17eyB3aWR0aDogJzMwLjg3NXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGl0bGVcIj7ooYzkuJrop4TmqKE8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzMuODc1cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgIOmaj+edgOS6uuWPo+e6ouWIqeeahOWinumVv++8jOS7peWPiuWcqOe6v+eUqOaIt+S4jeaWreWinumVv++8jOebruS6kuiBlOe9keaVmeiCsuWcqOe6v+eUqOaIt+W3sue7j+eqgeegtDLkur/vvIzooYzkuJrop4TmqKHlnKgyMDIy5bm05bCG6L6+5YiwNTQwMOS6v+OAglxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aXRsZVwiPuWtpuagoemcgOaxgjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICDokL3lrp7lm73lrrbmlL/nrZbvvIzpgJrov4fkurrlt6Xmmbrog73mioDmnK/op6PlhrPkuKrmgKfljJbmlZnlrabnmoTpnIDmsYLvvIzlu7rnq4vku6XlrabkuaDogIXkuLrkuK3lv4PnmoTmlZnogrLnjq/looPvvIznp6/mnoHlrp7njrDlnKjigJzkupLogZTnvZEr4oCd5p2h5Lu25LiL55qE5Lq65omN5Z+55YW75paw5qih5byP44CCXHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZHZlcnRpc2luZ1wiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvaXRlbTIucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJhZHZlcnRpc2luZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpdGVtIFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR2ZXJ0aXNpbmdcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWljdGIub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS93ZWJzaXRlL2l0ZW0zLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiYWR2ZXJ0aXNpbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEyLjI1cmVtJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50X3RleHRcIj5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aXRsZVwiPuWutumVv+iupOWPr+W6pumrmDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICDlnKjkupLogZTnvZHnjq/looPmiJDplb/kuIvnmoTlrrbplb/lt7Lnu4/mhI/or4bliLDpmo/nnYDmlZnogrLkv6Hmga/lhoXlrrnlhazlubPljJbjgIHlkIzotKjljJbvvIzkuK3pq5jogIPnq57kuonkvJrmm7TliqDmv4Dng4jvvJvnm67liY3kurrlt6Xmmbrog73lj5HlsZXlt7Lnu4/lupTnlKjliLDml6XluLjnlJ/mtLvkuK3vvIzlrrbplb/ku6zkuZ/lnKjnp6/mnoHlr7vmib7pq5jmlYjnmoTlrabkuaDmlrnms5XluK7liqnlranlrZDop6PlhrPml6XluLjlrabkuaDkuK3pgYfliLDnmoTnk7bpoojvvIzpgb/lhY3kuovlgI3lip/ljYrvvIzmnIDnu4jkvJrpgJrov4fkuKrmgKfljJblrabkuaDlrp7njrDmiJDnu6nmj5Dpq5jjgIJcclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiQWR2YW50YWdlXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZ1wiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aXRsZVwiPuS6p+WTgeS8mOWKvzwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3VidGl0bGVcIj5QUk9EVUNUPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkX2JveFwiPlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQWR2YW50YWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9BZHZhbnRhZ2VfaWNvbl9wcm9kdWN0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkFkdmFudGFnZV9pY29uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0bmFtZVwiPuS6p+WTgeeos+Wumjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIOS6p+WTgeW8gOWPkeWRqOacn+mVv+WPjeWkjeaJk+ejqO+8jOezu+e7n+WuieWFqOeUqOaIt+aUvuW/g+OAglxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkFkdmFudGFnZV9pY29uXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvQWR2YW50YWdlX2ljb25fTGlnaHR3ZWlnaHQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQWR2YW50YWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3RuYW1lXCI+6L276YeP57qn5Lqn5ZOBPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAg5pSv5oyB5omL5py644CBcGFk44CB55S16ISR5aSa5bmz5Y+w5L2/55So77yM5Y+v55So5LqO6K++5aCC5pWZ5a2m44CB6K++5ZCO5aSN5Lmg77yM5a2m55Sf6Ieq5Li75ouN54Wn5pS26ZuG5ZKM5pWZ5biI5LiK5Lyg6K+V5Y23562J5aSa56eN5L2/55So5pa55rOV44CCXHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQWR2YW50YWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9BZHZhbnRhZ2VfaWNvbl91cGdyYWRlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkFkdmFudGFnZV9pY29uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0bmFtZVwiPuWNh+e6p+WRqOacn+W/qzwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIOenu+WKqOS6kuiBlOe9keeglOWPkeaAnei3r++8jOi/reS7o+abtOaWsOW/q++8jOavj+WRqOavj+aciOmDveacieabtOaWsOOAglxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkFkdmFudGFnZV9pY29uXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvQWR2YW50YWdlX2ljb25fT3BlcmF0aW9uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkFkdmFudGFnZV9pY29uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0bmFtZVwiPui/kOiQpeeos+Wumjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIOi/kOiQpeeos+WumuaMh+WumuaAp+ebruagh+ebiOWIqeiuoeWIkuS7peWPiumYtuauteaAp+ebruagh+aJp+ihjOOAglxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkFkdmFudGFnZV9pY29uXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvQWR2YW50YWdlX2ljb25fbG9jYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQWR2YW50YWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3RuYW1lXCI+5pys5Zyw5YyW5YaF5a65PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAg5YaF5a655oyJ54Wn5Yy65Z+f57K+5YeG5a6a5Yi277yM5Lil5qC85oyJ54Wn5pys5Zyw6ICD57qy44CB5pWZ5p2Q562J6KaB57Sg5a6a5Yi25YaF5a6577yM5ra155uW5b2T5Zyw5pWZ6L6F5ZKM6K+V5Y2344CCXHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQWR2YW50YWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9BZHZhbnRhZ2VfaWNvbl9BZnRlcnNhbGUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQWR2YW50YWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3RuYW1lXCI+5ZSu5ZCO5by65aSnPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgNyoyNOWwj+aXtuaXoOe8neWvueaOpeaJgOaciemXrumimOesrOS4gOaXtumXtOWPjemmiOOAglxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJDb29wZXJhdGlvblwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGl0bGVcIj7lkIjkvZzkuq7ngrk8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkNPT1BFUkFUSU9OPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRpdGxlXCI+57O757uf56iz5a6aPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg5aSa5Lq65Zui6Zif6ZW/5pyf5rKJ5reA5LiO5qOA6aqM77yM5omT6YCg5LyY56eA5Lqn5ZOB77yM57O757uf56iz5a6a77yM6K+45aSa5Lqu54K577yM6KGM5Lia5YWs6K6k55qE6aKG5YWI6ICF44CCXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGl0bGVcIj7muKDpgZPmlK/mjIE8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICDlhajmlrnkvY3mnI3liqHmlK/mkpHkvZPns7vvvIzlv6vpgJ/lkK/liqjluILlnLrvvIzmlY/mjbfmnI3liqHlk43lupTjgIJcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0aXRsZVwiPuaUtuebiueos+Wumjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIOmHh+eUqFNhYeaooeW8j++8jOaIkOS6pOWQjuavj+W5tOe7rei0ue+8jOa7mumbqueQg+W8j+eahOebiOWIqeaViOW6lO+8jOS/neivgeWQiOS9nOS8meS8tOmVv+S5heaUtuebiuOAglxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9jZXNzXCI+XHJcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRpdGxlXCI+5ZCI5L2c5rWB56iLPC9zdHJvbmc+XHJcbiAgICAgICAgICA8ZW0gY2xhc3NOYW1lPVwic3VidGl0bGVcIj5GTE9XPC9lbT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsb3djaGFydFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgIOaPkOS6pFxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIOeUs+ivt1xyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFycm93c19pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgIOiAg+Wvn1xyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIOayn+mAmlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFycm93c19pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgIOi1hOi0qFxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIOivhOWuoVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFycm93c19pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgIOetvuiuolxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIOWQiOWQjFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFycm93c19pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgIOS4k+S4mlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIOWfueiurVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFycm93c19pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgIOi/kOiQpVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIOS4iue6v1xyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIk9ubGluZVwiIGlkPlxyXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0aXRsZVwiPuWcqOe6v+eUs+ivtzwvc3Ryb25nPlxyXG4gICAgICAgICAgPGVtIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIOWmguaCqOacieaEj+WQke+8jOivt+eVmeS4i+aCqOeahOiBlOezu+aWueW8j++8jOaIluWPkemAgeaEj+WQkeS5puiHs+mCrueusTQwNjEwNjdAMTYzLmNvbVxyXG4gICAgICAgICAgPC9lbT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yX2lucFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+Whq+WGmeecn+WunuWnk+WQje+8iOW/heWhq++8iVwiXHJcbiAgICAgICAgICAgICAgcHJlZml4PXs8VXNlck91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtOYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtuYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JfaW5wXCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+35aGr5YaZ6IGU57O75pa55byP77yI5b+F5aGr77yJXCJcclxuICAgICAgICAgICAgICBwcmVmaXg9ezxQaG9uZU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtQaG9uZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17bW9iaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGN0X2JveFwiPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNGRjREM0EnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtQcm92aW5jZXNIYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIumAieaLqeaJgOWcqOecgVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17UHJvdmluY2VzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1Byb3ZpbmNlcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpdGVtLmlkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0ZGNEQzQScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e0NpdHloYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIumAieaLqeaJgOWcqOW4glwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Q2l0eXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Q2l0eUxpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aXRlbS5pZH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yX3RhXCJcclxuICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+355WZ6KiA77yI6YCJ5aGr77yJXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bGVhdmVNc2d9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2xlYXZlTXNnQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tbWl0QnRuXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtpbW1lZGlhdGVseUNsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg56uL5Y2z55Sz6K+3XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8QUlfZm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuLy8g5ZSu5ZCOXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=