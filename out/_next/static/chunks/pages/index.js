_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./conf/index.js":
/*!***********************!*\
  !*** ./conf/index.js ***!
  \***********************/
/*! exports provided: baseURL, navText, HomeMain, down_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navText", function() { return navText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMain", function() { return HomeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "down_list", function() { return down_list; });
var baseURL = 'http://api2.aictb.com/api';
var navText = [{
  title: '首页',
  page: '/'
}, {
  title: '应用下载',
  page: '/download'
}, {
  title: '帮助中心',
  page: '/help'
}, {
  title: '加盟代理',
  page: '/join'
}, {
  title: '关于我们',
  page: '/about'
}];
var HomeMain = [{
  className: 'resources',
  title: '海量资源',
  em: '区域名校资源、海量试题定制训练，与名校学生错位比较；丰富的本地资源共享，方便教师更好备课，提高工作效率。',
  img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page1_img.png',
  bg: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page1_bg.png',
  leftIsText: true
}, {
  className: 'picture',
  title: '拍照识题',
  em: '对纸质作业拍照识别成文档，勾选错题组成电子错题本，再打印并练习，学生不用手抄错题，可以节省时间；教师一键拍照上传试卷、生成文档，校内共享，方便学生下载使用。',
  img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page2_img.png',
  bg: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page2_bg.png',
  leftIsText: false
}, {
  className: 'Wrongpush',
  title: '错题推送',
  em: 'AI系统推送举一反三变式题，帮助学生巩固错误题型知识点，提高学习效率；汇总分析班级错题情况，系统推送共性错题变式题，节约老师出题时间。',
  img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page3_img.png',
  bg: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page3_bg.png',
  leftIsText: true
}, {
  className: 'Studyreport',
  title: '学情报告',
  em: '错题收集后形成可视化个性数据报告，学生清楚认识自身错误，方便提优补差；错题数据报告分析学生知识薄弱项，方便老师查找教学薄弱环节，实现精准教学。',
  img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page4_img.png',
  bg: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/page4_bg.png',
  leftIsText: false
}];
var down_list = [{
  title: '丰富的教辅书资源',
  content: '校本试卷、名校资源让学习更简单',
  img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/down_list1.png',
  isrt: true
}, {
  title: '推送举一反三变式题',
  content: '学生收集错题更轻松，老师组卷更快捷',
  img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/down_list2.png',
  isrt: false
}, {
  title: '学情报告一目了然',
  content: '节约时间、方便快捷',
  img: 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/down_list3.png',
  isrt: true
}];


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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @fullpage/react-fullpage 0.1.18
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(29)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAIN_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ID_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_SLIDE; });
var MAIN_SELECTOR='fullpage';var ID_SELECTOR="#".concat(MAIN_SELECTOR);var DEFAULT_SECTION='.section';var DEFAULT_SLIDE='.SLIDE';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(13);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(15);
var ctx = __webpack_require__(41);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(47);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var has = __webpack_require__(4);
var SRC = __webpack_require__(14)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(13).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(debug,compName){return debug?function(){var _console;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_console=console).log.apply(_console,["<".concat(compName,"/> Debug Log: ")].concat(args));}:function(){};});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(3)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(23);
var step = __webpack_require__(72);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(71)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(40);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(77);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(46)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(76).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(36);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(78);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(38)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(81);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(15);
var META = __webpack_require__(80).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(29);
var setToStringTag = __webpack_require__(28);
var uid = __webpack_require__(14);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(43);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(79);
var isArray = __webpack_require__(34);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(5);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(33);
var gOPNExt = __webpack_require__(75);
var $GOPD = __webpack_require__(74);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(12);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(32).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(35).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(13);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(43);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('asyncIterator');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(46)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(84);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */var Wrapper_Wrapper=function Wrapper(_ref){var children=_ref.children;return external_react_default.a.createElement(external_react_["Fragment"],null,children);};/* harmony default export */ var components_Wrapper = (Wrapper_Wrapper);
// CONCATENATED MODULE: ./components/index.js
/* eslint-disable */var windowExists=function windowExists(){if(typeof window==='undefined'){return false;}try{var env="production".toLowerCase();return!env.match(/test/);}catch(e){return true;}};/* harmony default export */ var components = __webpack_exports__["default"] = ((function(){var exported;if(windowExists()){exported=__webpack_require__(82).default;}else{// NOTE: SSR support
exported=__webpack_require__(49).default;}exported.Wrapper=components_Wrapper;return exported;})());

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// NOTE: SSR support
var ReactFullpageShell=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpageShell,_React$Component);function ReactFullpageShell(props){var _this;_classCallCheck(this,ReactFullpageShell);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpageShell).call(this,props));_this.state={};_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this.props.debug,'ReactFullpageShell');_this.log('Building component');return _this;}_createClass(ReactFullpageShell,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_4__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpageShell;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpageShell);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

window.fp_easings={def:"easeOutQuad",linear:function(n,t,e,u){return e*n/u+t},swing:function(n,t,e,u){return window.fp_easings[window.fp_easings.def](n,t,e,u)},easeInQuad:function(n,t,e,u){return e*(n/=u)*n+t},easeOutQuad:function(n,t,e,u){return-e*(n/=u)*(n-2)+t},easeInOutQuad:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t},easeInCubic:function(n,t,e,u){return e*(n/=u)*n*n+t},easeOutCubic:function(n,t,e,u){return e*((n=n/u-1)*n*n+1)+t},easeInOutCubic:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t},easeInQuart:function(n,t,e,u){return e*(n/=u)*n*n*n+t},easeOutQuart:function(n,t,e,u){return-e*((n=n/u-1)*n*n*n-1)+t},easeInOutQuart:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n*n+t:-e/2*((n-=2)*n*n*n-2)+t},easeInQuint:function(n,t,e,u){return e*(n/=u)*n*n*n*n+t},easeOutQuint:function(n,t,e,u){return e*((n=n/u-1)*n*n*n*n+1)+t},easeInOutQuint:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n*n*n+t:e/2*((n-=2)*n*n*n*n+2)+t},easeInSine:function(n,t,e,u){return-e*Math.cos(n/u*(Math.PI/2))+e+t},easeOutSine:function(n,t,e,u){return e*Math.sin(n/u*(Math.PI/2))+t},easeInOutSine:function(n,t,e,u){return-e/2*(Math.cos(Math.PI*n/u)-1)+t},easeInExpo:function(n,t,e,u){return 0==n?t:e*Math.pow(2,10*(n/u-1))+t},easeOutExpo:function(n,t,e,u){return n==u?t+e:e*(1-Math.pow(2,-10*n/u))+t},easeInOutExpo:function(n,t,e,u){return 0==n?t:n==u?t+e:(n/=u/2)<1?e/2*Math.pow(2,10*(n-1))+t:e/2*(2-Math.pow(2,-10*--n))+t},easeInCirc:function(n,t,e,u){return-e*(Math.sqrt(1-(n/=u)*n)-1)+t},easeOutCirc:function(n,t,e,u){return e*Math.sqrt(1-(n=n/u-1)*n)+t},easeInOutCirc:function(n,t,e,u){return(n/=u/2)<1?-e/2*(Math.sqrt(1-n*n)-1)+t:e/2*(Math.sqrt(1-(n-=2)*n)+1)+t},easeInElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(1==(n/=u))return t+e;if(r||(r=.3*u),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return-i*Math.pow(2,10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)+t},easeOutElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(1==(n/=u))return t+e;if(r||(r=.3*u),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return i*Math.pow(2,-10*n)*Math.sin((n*u-a)*(2*Math.PI)/r)+e+t},easeInOutElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(2==(n/=u/2))return t+e;if(r||(r=u*(.3*1.5)),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return n<1?i*Math.pow(2,10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)*-.5+t:i*Math.pow(2,-10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)*.5+e+t},easeInBack:function(n,t,e,u,a){return null==a&&(a=1.70158),e*(n/=u)*n*((a+1)*n-a)+t},easeOutBack:function(n,t,e,u,a){return null==a&&(a=1.70158),e*((n=n/u-1)*n*((a+1)*n+a)+1)+t},easeInOutBack:function(n,t,e,u,a){return null==a&&(a=1.70158),(n/=u/2)<1?e/2*(n*n*((1+(a*=1.525))*n-a))+t:e/2*((n-=2)*n*((1+(a*=1.525))*n+a)+2)+t},easeInBounce:function(n,t,e,u){return e-window.fp_easings.easeOutBounce(u-n,0,e,u)+t},easeOutBounce:function(n,t,e,u){return(n/=u)<1/2.75?e*(7.5625*n*n)+t:n<2/2.75?e*(7.5625*(n-=1.5/2.75)*n+.75)+t:n<2.5/2.75?e*(7.5625*(n-=2.25/2.75)*n+.9375)+t:e*(7.5625*(n-=2.625/2.75)*n+.984375)+t},easeInOutBounce:function(n,t,e,u){return n<u/2?.5*window.fp_easings.easeInBounce(2*n,0,e,u)+t:.5*window.fp_easings.easeOutBounce(2*n-u,0,e,u)+.5*e+t}};
//# sourceMappingURL=easings.min.js.map


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
* Customized version of iScroll.js 0.1.3
* It fixes bugs affecting its integration with fullpage.js
* @license
*/
!function(r,n,p){var f=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.oRequestAnimationFrame||r.msRequestAnimationFrame||function(t){r.setTimeout(t,1e3/60)},m=function(){var e={},o=n.createElement("div").style,i=function(){for(var t=["t","webkitT","MozT","msT","OT"],i=0,s=t.length;i<s;i++)if(t[i]+"ransform"in o)return t[i].substr(0,t[i].length-1);return!1}();function t(t){return!1!==i&&(""===i?t:i+t.charAt(0).toUpperCase()+t.substr(1))}e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(t,i){for(var s in i)t[s]=i[s]},e.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},e.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},e.prefixPointerEvent=function(t){return r.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},e.momentum=function(t,i,s,e,o,n){var r,h,a=t-i,l=p.abs(a)/s;return h=l/(n=void 0===n?6e-4:n),(r=t+l*l/(2*n)*(a<0?-1:1))<e?(r=o?e-o/2.5*(l/8):e,h=(a=p.abs(r-t))/l):0<r&&(r=o?o/2.5*(l/8):0,h=(a=p.abs(t)+r)/l),{destination:p.round(r),duration:h}};var s=t("transform");return e.extend(e,{hasTransform:!1!==s,hasPerspective:t("perspective")in o,hasTouch:"ontouchstart"in r,hasPointer:!(!r.PointerEvent&&!r.MSPointerEvent),hasTransition:t("transition")in o}),e.isBadAndroid=function(){var t=r.navigator.appVersion;if(!/Android/.test(t)||/Chrome\/\d/.test(t))return!1;var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&2<=i.length)||parseFloat(i[1])<535.19}(),e.extend(e.style={},{transform:s,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),e.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},e.addClass=function(t,i){if(!e.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},e.removeClass=function(t,i){if(e.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}},e.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},e.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return p.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*p.pow(2,-10*t)*p.sin((t-.055)*(2*p.PI)/.22)+1}}}),e.tap=function(t,i){var s=n.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},e.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||((i=n.createEvent(r.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),i.view=t.view||r,i.detail=1,i.screenX=s.screenX||0,i.screenY=s.screenY||0,i.clientX=s.clientX||0,i.clientY=s.clientY||0,i.ctrlKey=!!t.ctrlKey,i.altKey=!!t.altKey,i.shiftKey=!!t.shiftKey,i.metaKey=!!t.metaKey,i.button=0,i.relatedTarget=null,i._constructed=!0,s.dispatchEvent(i))},e}();function t(t,i){for(var s in this.wrapper="string"==typeof t?n.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!m.hasPointer,disableTouch:m.hasPointer||!m.hasTouch,disableMouse:m.hasPointer||m.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===r.onmousedown},i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&m.hasPerspective?" translateZ(0)":"",this.options.useTransition=m.hasTransition&&this.options.useTransition,this.options.useTransform=m.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?m.ease[this.options.bounceEasing]||m.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function h(t,i,s){var e=n.createElement("div"),o=n.createElement("div");return!0===s&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator",e.className="h"==t?(!0===s&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),"iScrollHorizontalScrollbar"):(!0===s&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),"iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}function a(t,i){for(var s in this.wrapper="string"==typeof i.el?n.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},i)this.options[s]=i[s];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(m.addEvent(this.indicator,"touchstart",this),m.addEvent(r,"touchend",this)),this.options.disablePointer||(m.addEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.addEvent(r,m.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(m.addEvent(this.indicator,"mousedown",this),m.addEvent(r,"mouseup",this))),this.options.fade){this.wrapperStyle[m.style.transform]=this.scroller.translateZ;var e=m.style.transitionDuration;if(!e)return;this.wrapperStyle[e]=m.isBadAndroid?"0.0001ms":"0ms";var o=this;m.isBadAndroid&&f(function(){"0.0001ms"===o.wrapperStyle[e]&&(o.wrapperStyle[e]="0s")}),this.wrapperStyle.opacity="0"}}t.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=m.eventType[t.type]&&0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||m.eventType[t.type]===this.initiated)){!this.options.preventDefault||m.isBadAndroid||m.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=m.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=m.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,r=n.pageX-this.pointX,h=n.pageY-this.pointY,a=m.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=r,this.distY+=h,e=p.abs(this.distX),o=p.abs(this.distY),!(300<a-this.endTime&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,h=this.hasVerticalScroll?h:0,i=this.x+r,s=this.y+h,(0<i||i<this.maxScrollX)&&(i=this.options.bounce?this.x+r/3:0<i?0:this.maxScrollX),(0<s||s<this.maxScrollY)&&(s=this.options.bounce?this.y+h/3:0<s?0:this.maxScrollY),this.directionX=0<r?-1:r<0?1:0,this.directionY=0<h?-1:h<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),300<a-this.startTime&&(this.startTime=a,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&!m.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,s,e=m.getTime()-this.startTime,o=p.round(this.x),n=p.round(this.y),r=p.abs(o-this.startX),h=p.abs(n-this.startY),a=0,l="";if(this.isInTransition=0,this.initiated=0,this.endTime=m.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&m.tap(t,this.options.tap),this.options.click&&m.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&r<100&&h<100)this._execEvent("flick");else{if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?m.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},s=this.hasVerticalScroll?m.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=s.destination,a=p.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var c=this._nearestSnap(o,n);this.currentPage=c,a=this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-c.x),1e3),p.min(p.abs(n-c.y),1e3)),300),o=c.x,n=c.y,this.directionX=0,this.directionY=0,l=this.options.bounceEasing}if(o!=this.x||n!=this.y)return(0<o||o<this.maxScrollX||0<n||n<this.maxScrollY)&&(l=m.ease.quadratic),void this.scrollTo(o,n,a,l);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||0<this.x?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||0<this.y?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=m.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);-1<s&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||m.ease.circular,this.isInTransition=this.options.useTransition&&0<s;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=m.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===s&&(s=p.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===e&&(e=p.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=s||0,n.top-=e||0,n.left=0<n.left?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=0<n.top?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=null==i||"auto"===i?p.max(p.abs(this.x-n.left),p.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var i=m.style.transitionDuration;if(i){if(this.scrollerStyle[i]=t+"ms",!t&&m.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var s=this;f(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")})}if(this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)}}},_transitionTimingFunction:function(t){if(this.scrollerStyle[m.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[m.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=p.round(t),i=p.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var i=t?m.removeEvent:m.addEvent,s=this.options.bindToWrapper?this.wrapper:r;i(r,"orientationchange",this),i(r,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),m.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,m.prefixPointerEvent("pointerdown"),this),i(s,m.prefixPointerEvent("pointermove"),this),i(s,m.prefixPointerEvent("pointercancel"),this),i(s,m.prefixPointerEvent("pointerup"),this)),m.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=r.getComputedStyle(this.scroller,null);return i=this.options.useTransform?(t=+((s=s[m.style.transform].split(")")[0].split(", "))[12]||s[4]),+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){var t,i=this.options.interactiveScrollbars,s="string"!=typeof this.options.scrollbars,e=[],o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:h("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),e.push(t)),this.options.scrollX&&(t={el:h("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),e.push(t))),this.options.indicators&&(e=e.concat(this.options.indicators));for(var n=e.length;n--;)this.indicators.push(new a(this,e[n]));function r(t){if(o.indicators)for(var i=o.indicators.length;i--;)t.call(o.indicators[i])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){r(function(){this.fade()})}),this.on("scrollCancel",function(){r(function(){this.fade()})}),this.on("scrollStart",function(){r(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){r(function(){this.fade(1,!0)})})),this.on("refresh",function(){r(function(){this.refresh()})}),this.on("destroy",function(){r(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){m.addEvent(this.wrapper,"wheel",this),m.addEvent(this.wrapper,"mousewheel",this),m.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,m.removeEvent(this.wrapper,"wheel",this),m.removeEvent(this.wrapper,"mousewheel",this),m.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){r.navigator.userAgent.match(/(MSIE|Trident)/)||t.preventDefault();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n.options.snap||n._execEvent("scrollEnd"),n.wheelTimeout=void 0},400),"deltaX"in t)s=1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,0<i?e--:i<0&&e++,0<s?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+p.round(this.hasHorizontalScroll?i:0),o=this.y+p.round(this.hasVerticalScroll?s:0),this.directionX=0<i?-1:i<0?1:0,this.directionY=0<s?-1:s<0?1:0,0<e?e=0:e<this.maxScrollX&&(e=this.maxScrollX),0<o?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,r=0,h=0,a=0,l=this.options.snapStepX||this.wrapperWidth,c=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(s=p.round(l/2),e=p.round(c/2);a>-this.scrollerWidth;){for(this.pages[r]=[],o=t=0;o>-this.scrollerHeight;)this.pages[r][t]={x:p.max(a,this.maxScrollX),y:p.max(o,this.maxScrollY),width:l,height:c,cx:a-s,cy:o-e},o-=c,t++;a-=l,r++}else for(t=(n=this.options.snap).length,i=-1;r<t;r++)(0===r||n[r].offsetLeft<=n[r-1].offsetLeft)&&(h=0,i++),this.pages[h]||(this.pages[h]=[]),a=p.max(-n[r].offsetLeft,this.maxScrollX),o=p.max(-n[r].offsetTop,this.maxScrollY),s=a-p.round(n[r].offsetWidth/2),e=o-p.round(n[r].offsetHeight/2),this.pages[h][i]={x:a,y:o,width:n[r].offsetWidth,height:n[r].offsetHeight,cx:s,cy:e},a>this.maxScrollX&&h++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.x-this.startX),1e3),p.min(p.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,e=this.pages.length,o=0;if(p.abs(t-this.absStartX)<this.snapThresholdX&&p.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(0<t?t=0:t<this.maxScrollX&&(t=this.maxScrollX),0<i?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return s==this.currentPage.pageX&&((s+=this.directionX)<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}},goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-this.x),1e3),p.min(p.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i},this.scrollTo(o,n,s,e)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;++s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;--s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];m.addEvent(r,"keydown",this),this.on("destroy",function(){m.removeEvent(r,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,o=s?this.currentPage.pageY:this.y,n=m.getTime(),r=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this.isInTransition=!1),this.keyAcceleration=n-r<200?p.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:o+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:o-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,o=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=e=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:o+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:o-=s?1:5+this.keyAcceleration>>0;break;default:return}s?this.goToPage(e,o):(0<e?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),0<o?(o=0,this.keyAcceleration=0):o<this.maxScrollY&&(o=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,o,0),this.keyTime=n)}},_animate:function(n,r,h,a){var l=this,c=this.x,p=this.y,d=m.getTime(),u=d+h;this.isAnimating=!0,function t(){var i,s,e,o=m.getTime();if(u<=o)return l.isAnimating=!1,l._translate(n,r),void(l.resetPosition(l.options.bounceTime)||l._execEvent("scrollEnd"));e=a(o=(o-d)/h),i=(n-c)*e+c,s=(r-p)*e+p,l._translate(i,s),l.isAnimating&&f(t)}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},a.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(m.removeEvent(this.indicator,"touchstart",this),m.removeEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.removeEvent(this.indicator,"mousedown",this),m.removeEvent(r,"touchmove",this),m.removeEvent(r,m.prefixPointerEvent("pointermove"),this),m.removeEvent(r,"mousemove",this),m.removeEvent(r,"touchend",this),m.removeEvent(r,m.prefixPointerEvent("pointerup"),this),m.removeEvent(r,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=m.getTime(),this.options.disableTouch||m.addEvent(r,"touchmove",this),this.options.disablePointer||m.addEvent(r,m.prefixPointerEvent("pointermove"),this),this.options.disableMouse||m.addEvent(r,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t;m.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),m.removeEvent(r,"touchmove",this),m.removeEvent(r,m.prefixPointerEvent("pointermove"),this),m.removeEvent(r,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.scroller.x-i.x),1e3),p.min(p.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var i=m.style.transitionDuration;if(i&&(this.indicatorStyle[i]=t+"ms",!t&&m.isBadAndroid)){this.indicatorStyle[i]="0.0001ms";var s=this;f(function(){"0.0001ms"===s.indicatorStyle[i]&&(s.indicatorStyle[i]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[m.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(m.addClass(this.wrapper,"iScrollBothScrollbars"),m.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(m.removeClass(this.wrapper,"iScrollBothScrollbars"),m.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=p.max(p.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=p.max(p.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&p.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&p.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=p.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?t="scale"==this.options.shrink?(this.width=p.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",this.maxPosX+this.indicatorWidth-this.width):this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=p.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?i="scale"==this.options.shrink?(this.height=p.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",this.maxPosY+this.indicatorHeight-this.height):this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[m.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?p.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?p.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[m.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},t.utils=m,"undefined"!=typeof module&&module.exports?module.exports=t: true?(!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),void 0!==r&&(r.IScroll=t)):undefined}(window,document,Math),
/*!
* Scrolloverflow 2.0.6 module for fullPage.js >= 3
* https://github.com/alvarotrigo/fullPage.js
* @license MIT licensed
*
* Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
*/
function(l,c){l.fp_scrolloverflow=function(){l.IScroll||(l.IScroll=module.exports);var s="fp-scrollable",n="."+s,t=".active",d=".fp-section",e=d+t,o=".fp-slide",u=".fp-tableCell";function r(){var p=this;function s(){fp_utils.hasClass(c.body,"fp-responsive")?i(e):i(t)}function t(t){if(!fp_utils.hasClass(t,"fp-noscroll")){fp_utils.css(t,{overflow:"hidden"});var i,s,e,o=p.options.scrollOverflowHandler,n=o.wrapContent(),r=fp_utils.closest(t,d),h=o.scrollable(t),a=(s=r,null!=(e=fp_utils.closest(s,d))?parseInt(getComputedStyle(e)["padding-bottom"])+parseInt(getComputedStyle(e)["padding-top"]):0);null!=h?i=o.scrollHeight(t):(i=t.scrollHeight,p.options.verticalCentered&&(i=f(u,t)[0].scrollHeight));var l=fp_utils.getWindowHeight(),c=l-a;l<i+a?null!=h?o.update(t,c):(p.options.verticalCentered?(fp_utils.wrapInner(f(u,t)[0],n.scroller),fp_utils.wrapInner(f(u,t)[0],n.scrollable)):(fp_utils.wrapInner(t,n.scroller),fp_utils.wrapInner(t,n.scrollable)),o.create(t,c,p.iscrollOptions)):o.remove(t),fp_utils.css(t,{overflow:""})}}function i(s){f(d).forEach(function(t){var i=f(o,t);i.length?i.forEach(function(t){s(t)}):s(t)})}function e(t){var i=p.options.scrollOverflowHandler;fp_utils.hasClass(fp_utils.closest(t,d),"fp-auto-height-responsive")&&i.remove(t)}p.options=null,p.init=function(t,i){return p.options=t,p.iscrollOptions=i,"complete"===c.readyState&&(s(),fullpage_api.shared.afterRenderActions()),l.addEventListener("load",function(){s(),fullpage_api.shared.afterRenderActions()}),p},p.createScrollBarForAll=s,p.createScrollBar=t}IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)};var f=null,h=null,a={refreshId:null,iScrollInstances:[],lastScrollY:null,hasBeenInit:!1,iscrollOptions:{scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0},init:function(t){f=fp_utils.$,h=t;var i="ontouchstart"in l||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints;return a.iscrollOptions.click=i,a.hasBeenInit=!0,a.iscrollOptions=fp_utils.deepExtend(a.iscrollOptions,t.scrollOverflowOptions),(new r).init(t,a.iscrollOptions)},toggleWheel:function(s){f(n,f(e)[0]).forEach(function(t){var i=t.fp_iscrollInstance;null!=i&&(s?i.wheelOn():i.wheelOff())})},setIscroll:function(t,i){if(a.hasBeenInit&&t){var s=fp_utils.closest(t,n)||f(n,t)&&f(n,t)[0],e=i?"enable":"disable";s&&s.fp_iscrollInstance[e]()}},onLeave:function(){a.toggleWheel(!1)},beforeLeave:function(){a.onLeave()},afterLoad:function(){a.toggleWheel(!0)},create:function(s,e,o){f(n,s).forEach(function(t){fp_utils.css(t,{height:e+"px"});var i=t.fp_iscrollInstance;null!=i&&a.iScrollInstances.forEach(function(t){t.destroy()}),i=new IScroll(t,o),a.iScrollInstances.push(i),fp_utils.hasClass(fp_utils.closest(s,d),"active")||i.wheelOff(),t.fp_iscrollInstance=i})},isScrolled:function(t,i){var s=i.fp_iscrollInstance;if(!s)return!0;if("top"===t)return 0<=s.y&&!fp_utils.getScrollTop(i);if("bottom"===t){var e=a.lastScrollY===s.y;return a.lastScrollY=s.y,(e?1:0)+(0-s.y)+fp_utils.getScrollTop(i)+i.offsetHeight>=i.scrollHeight}},scrollable:function(t){return f(".fp-slides",t).length?f(n,f(".fp-slide.active",t)[0])[0]:f(n,t)[0]},scrollHeight:function(t){return f(".fp-scroller",f(n,t)[0])[0].scrollHeight},remove:function(t){if(null!=t){var i=f(n,t)[0];if(null!=i){var s=i.fp_iscrollInstance;null!=s&&s.destroy(),i.fp_iscrollInstance=null,fp_utils.unwrap(f(".fp-scroller",t)[0]),fp_utils.unwrap(f(n,t)[0])}}},update:function(t,i){clearTimeout(a.refreshId),a.refreshId=setTimeout(function(){a.iScrollInstances.forEach(function(t){t.refresh(),fullpage_api.silentMoveTo(fp_utils.index(f(e)[0])+1)})},150),fp_utils.css(f(n,t)[0],{height:i+"px"}),h.verticalCentered&&fp_utils.css(f(n,t)[0].parentNode,{height:i+"px"})},wrapContent:function(){var t=c.createElement("div");t.className=s;var i=c.createElement("div");return i.className="fp-scroller",{scrollable:t,scroller:i}}};return{iscrollHandler:a}}()}(window,document);
//# sourceMappingURL=scrolloverflow.min.js.map


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.9 - Extensions 0.1.9
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.fullpage=o(t,n),e.fullpage}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,window,document,function(an,sn){"use strict";var cn="fullpage-wrapper",un="."+cn,fn="fp-responsive",dn="fp-notransition",vn="fp-destroyed",pn="fp-enabled",hn="fp-viewing",gn="active",mn="."+gn,Sn="fp-completely",bn="fp-section",wn="."+bn,yn=wn+mn,En="fp-tableCell",xn="."+En,An="fp-auto-height",Ln="fp-normal-scroll",Mn="fp-nav",Tn="#"+Mn,On="fp-tooltip",kn="fp-slide",Cn="."+kn,Hn=Cn+mn,Rn="fp-slides",In="."+Rn,zn="fp-slidesContainer",Bn="."+zn,Nn="fp-table",jn="fp-slidesNav",Pn="."+jn,Wn=Pn+" a",e="fp-controlArrow",Dn="."+e,Yn="fp-prev",Vn=Dn+".fp-prev",Zn=Dn+".fp-next";function Xn(e,t){an.console&&an.console[e]&&an.console[e]("fullPage: "+t)}function Gn(e,t){return(t=1<arguments.length?t:sn)?t.querySelectorAll(e):null}function Fn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Fn(e[r],o[r]))}return e}function Un(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Qn(){return"innerHeight"in an?an.innerHeight:sn.documentElement.offsetHeight}function _n(){return an.innerWidth}function Jn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!yo(o,t);)o=o[n];return o}function Kn(e,t){return n(e,t,"previousElementSibling")}function $n(e,t){return n(e,t,"nextElementSibling")}function qn(e,t){if(null==t)return e.previousElementSibling;var n=qn(e);return n&&yo(n,t)?n:null}function eo(e,t){if(null==t)return e.nextElementSibling;var n=eo(e);return n&&yo(n,t)?n:null}function to(e){return e[e.length-1]}function no(e,t){e=io(e)?e[0]:e;for(var n=null!=t?Gn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return io(e)?e:[e]}function oo(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ro(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function io(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function lo(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ao(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function so(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||sn.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function co(e,t){o(e,t,!0)}function uo(e,t){for("string"==typeof t&&(t=xo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function fo(e){for(var t=sn.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function vo(e,t){return e&&1===e.nodeType?yo(e,t)?e:vo(e.parentNode,t):null}function po(e,t){r(e,e.nextSibling,t)}function ho(e,t){r(e,e,t)}function r(e,t,n){io(n)||("string"==typeof n&&(n=xo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function go(){var e=sn.documentElement;return(an.pageYOffset||e.scrollTop)-(e.clientTop||0)}function mo(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function So(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function bo(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function wo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof an.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=sn.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function yo(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Eo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function xo(e){var t=sn.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Ao(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function i(e,t,n){for(var o=e[n],r=[];o;)(yo(o,t)||null==t)&&r.push(o),o=o[n];return r}function Lo(e,t){return i(e,t,"nextElementSibling")}function Mo(e,t){return i(e,t,"previousElementSibling")}function To(e,t){e.insertBefore(t,e.firstChild)}return an.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||an;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),an.fp_utils={$:Gn,deepExtend:Fn,hasClass:Un,getWindowHeight:Qn,css:Jn,until:n,prevUntil:Kn,nextUntil:$n,prev:qn,next:eo,last:to,index:no,getList:l,hide:oo,show:ro,isArrayOrList:io,addClass:lo,removeClass:ao,appendTo:so,wrap:o,wrapAll:co,wrapInner:uo,unwrap:fo,closest:vo,after:po,before:ho,insertBefore:r,getScrollTop:go,siblings:mo,preventDefault:So,isFunction:bo,trigger:wo,matches:yo,toggle:Eo,createElementFromHTML:xo,remove:Ao,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:i,nextAll:Lo,prevAll:Mo,showError:Xn,prependTo:To,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Un(e,t);o&&null==n||!n?ao(e,t):(!o&&null==n||n)&&lo(e,t)}}},function(e,g){var n=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<sn.domain.indexOf("alvarotrigo.com"),r=Gn("html, body"),s=Gn("html")[0],m=Gn("body")[0];if(!Un(s,pn)){var S={};g=Fn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:an.fp_scrolloverflow?an.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Gn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var b,i,c,o,a=!1,l=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),u="ontouchstart"in an||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?Gn(e)[0]:e,y=Qn(),f=_n(),E=!1,t=!0,x=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=Fn({},v.m);var p,h,A,L,M,T,O,k,C,H,R=Vt(),I={touchmove:"ontouchmove"in an?"touchmove":R.move,touchstart:"ontouchstart"in an?"touchstart":R.down},z=!1,B=!Un(m,ot("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),N='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',j=!1;try{var P=Object.defineProperty({},"passive",{get:function(){j=!0}});an.addEventListener("testPassive",null,P),an.removeEventListener("testPassive",null,P)}catch(e){}var W,D,Y,V=Fn({},g),Z=!1,X=!0,G={};en(),an.fp_easings=Fn(an.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(S.version="3.0.8",S.setAutoScrolling=re,S.setRecordHistory=ie,S.setScrollingSpeed=le,S.setFitToSection=ae,S.setLockAnchors=function(e){g.lockAnchors=e},S.setMouseWheelScrolling=se,S.setAllowScrolling=ce,S.setKeyboardScrolling=fe,S.moveSectionUp=de,S.moveSectionDown=ve,S.silentMoveTo=pe,S.moveTo=he,S.moveSlideRight=ge,S.moveSlideLeft=me,S.fitToSection=Re,S.reBuild=Se,S.setResponsive=we,S.getFullpageData=function(){return{options:g,internals:{container:w,canScroll:x,isScrollAllowed:v,getDestinationPosition:Ve,isTouch:u,c:at,getXmovement:Ht,removeAnimation:Ot,getTransforms:Ft,lazyLoad:Ke,addAnimation:Tt,performHorizontalMove:xt,landscapeScroll:wt,silentLandscapeScroll:Xt,keepSlidesPosition:Ye,silentScroll:Gt,styleSlides:Me,styleSection:Oe,scrollHandler:He,getEventsPage:Zt,getMSPointer:Vt,isReallyTouch:Ne,usingExtension:_t,toggleControlArrows:yt,touchStartHandler:je,touchMoveHandler:Be}}},S.destroy=function(e){wo(w,"destroy",e),re(!1,"internal"),ce(!0),ue(!1),fe(!1),lo(w,vn),[M,L,h,T,O,C,A,Y].forEach(function(e){clearTimeout(e)}),an.removeEventListener("scroll",He),an.removeEventListener("hashchange",ut),an.removeEventListener("resize",At),sn.removeEventListener("keydown",dt),sn.removeEventListener("keyup",vt),["click","touchstart"].forEach(function(e){sn.removeEventListener(e,ye)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){sn.removeEventListener(e,xe,!0)}),Jt("dragAndMove","destroy"),e&&(Gt(0),Gn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){_e(e,"src")}),Gn("img[data-srcset]").forEach(function(e){_e(e,"srcset")}),Ao(Gn(Tn+", "+Pn+", "+Dn)),Jn(Gn(wn),{height:"","background-color":"",padding:""}),Jn(Gn(Cn),{width:""}),Jn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Jn(r,{overflow:"",height:""}),ao(s,pn),ao(m,fn),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(hn)&&ao(m,e)}),Gn(wn+", "+Cn).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),ao(e,Nn+" "+gn+" "+Sn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Un(e,bn)&&!Z&&e.removeAttribute("data-anchor")}),Qt(w),[xn,Bn,In].forEach(function(e){Gn(e,w).forEach(function(e){fo(e)})}),an.scrollTo(0,0),[bn,kn,zn].forEach(function(e){ao(Gn("."+e),e)}))},S.getActiveSection=function(){return new rn(Gn(yn)[0])},S.getActiveSlide=function(){return Fe(Gn(Hn,Gn(yn)[0])[0])},S.landscapeScroll=wt,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Gn(g.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Gn(g.sectionSelector,w).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:re},S.shared={afterRenderActions:Ce,isNormalScrollElement:!1},an.fullpage_api=S,an.fullpage_extensions=!0,g.$&&Object.keys(S).forEach(function(e){g.$.fn.fullpage[e]=S[e]}),Le("continuousHorizontal"),Le("scrollHorizontally"),Le("resetSliders"),Le("interlockedSlides"),Le("responsiveSlides"),Le("fadingEffect"),Le("dragAndMove"),Le("offsetSections"),Le("scrollOverflowReset"),Le("parallax"),Le("cards"),Jt("dragAndMove","init"),g.css3&&(g.css3=function(){var e,t=sn.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",sn.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=an.getComputedStyle(t).getPropertyValue(n[o]));return sn.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=Gn(g.sectionSelector.split(",").join(e+",")+e,w);t.length&&t.length===Gn(wn).length&&(Z=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var n="[data-tooltip]",o=Gn(g.sectionSelector.split(",").join(n+",")+n,w);o.length&&o.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Jn(w,{height:"100%",position:"relative"}),lo(w,cn),lo(s,pn),y=Qn(),ao(w,vn),lo(Gn(g.sectionSelector,w),bn),lo(Gn(g.slideSelector,w),kn),Jt("parallax","init");for(var e=Gn(wn),t=0;t<e.length;t++){var n=t,o=e[t],r=Gn(Cn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Oe(o,n),l=o,a=n,void 0!==g.anchors[a]&&Un(l,gn)&&kt(g.anchors[a],a),g.menu&&g.css3&&null!=vo(Gn(g.menu)[0],un)&&Gn(g.menu).forEach(function(e){m.appendChild(e)}),0<i?Me(o,r,i):g.verticalCentered&&Rt(o)}var l,a;g.fixedElements&&g.css3&&Gn(g.fixedElements).forEach(function(e){m.appendChild(e)}),g.navigation&&function(){var e=sn.createElement("div");e.setAttribute("id",Mn);var t=sn.createElement("ul");e.appendChild(t),so(e,m);var n=Gn(Tn)[0];lo(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&lo(n,"fp-show-active");for(var o="",r=0;r<Gn(wn).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ke(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+On+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}Gn("ul",n)[0].innerHTML=o,lo(Gn("a",Gn("li",Gn(Tn)[0])[no(Gn(yn)[0],wn)]),gn)}(),Gn('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Jt("fadingEffect","apply"),Jt("cards","init"),g.scrollOverflow&&(p=g.scrollOverflowHandler.init(g))}(),ce(!0),ue(!0),re(g.autoScrolling,"internal"),Mt(),Yt(),"complete"===sn.readyState&&ct(),an.addEventListener("load",ct),g.scrollOverflow||Ce(),function(){for(var e=1;e<4;e++)C=setTimeout(Ae,350*e)}(),B||at("l"),an.addEventListener("scroll",He),an.addEventListener("hashchange",ut),an.addEventListener("focus",mt),an.addEventListener("blur",St),an.addEventListener("resize",At),sn.addEventListener("keydown",dt),sn.addEventListener("keyup",vt),["click","touchstart"].forEach(function(e){sn.addEventListener(e,ye)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ee(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ee(e,!0)})),Jt("dragAndMove","turnOffTouch"));var F,U,Q,_=!1,J=0,K=0,$=0,q=0,ee=(new Date).getTime(),te=0,ne=0,oe=y;return S}function re(e,t){e||Gt(0),qt("autoScrolling",e,t);var n=Gn(yn)[0];if(g.autoScrolling&&!g.scrollBar)Jn(r,{overflow:"hidden",height:"100%"}),ie(V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Gt(n.offsetTop);else if(Jn(r,{overflow:"visible",height:"initial"}),ie(!!g.autoScrolling&&V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"","touch-action":""}),Qt(w),null!=n){var o=Ue(n.offsetTop);o.element.scrollTo(0,o.options)}wo(w,"setAutoScrolling",e)}function ie(e,t){qt("recordHistory",e,t)}function le(e,t){"internal"!==t&&_t("fadingEffect")&&S.fadingEffect.update(e),_t("cards")&&S.cards.update(e),qt("scrollingSpeed",e,t)}function ae(e,t){qt("fitToSection",e,t)}function se(e){e?(function(){var e,t="";an.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in sn.createElement("div")?"wheel":void 0!==sn.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!j&&{passive:!1};"DOMMouseScroll"==n?sn[e](t+"MozMousePixelScroll",We,o):sn[e](t+n,We,o)}(),w.addEventListener("mousedown",pt),w.addEventListener("mouseup",ht)):(sn.addEventListener?(sn.removeEventListener("mousewheel",We,!1),sn.removeEventListener("wheel",We,!1),sn.removeEventListener("MozMousePixelScroll",We,!1)):sn.detachEvent("onmousewheel",We),w.removeEventListener("mousedown",pt),w.removeEventListener("mouseup",ht))}function ce(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ut(t,e,"m")}):Ut(t,"all","m"),wo(w,"setAllowScrolling",{value:t,directions:e})}function ue(e){e?(se(!0),function(){if((l||u)&&(!_t("dragAndMove")||"mouseonly"===g.dragAndMove)){g.autoScrolling&&(m.removeEventListener(I.touchmove,ze,{passive:!1}),m.addEventListener(I.touchmove,ze,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(I.touchstart,je),e.removeEventListener(I.touchmove,Be,{passive:!1}),e.addEventListener(I.touchstart,je),e.addEventListener(I.touchmove,Be,{passive:!1})}}()):(se(!1),function(){if(l||u){g.autoScrolling&&(m.removeEventListener(I.touchmove,Be,{passive:!1}),m.removeEventListener(I.touchmove,ze,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(I.touchstart,je),e.removeEventListener(I.touchmove,Be,{passive:!1})}}())}function fe(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ut(t,e,"k")}):(Ut(t,"all","k"),g.keyboardScrolling=t)}function de(){var e=Kn(Gn(yn)[0],wn);e||!g.loopTop&&!g.continuousVertical||(e=to(Gn(wn))),null!=e&&Ze(e,null,!0)}function ve(){var e=$n(Gn(yn)[0],wn);e||!g.loopBottom&&!g.continuousVertical||(e=Gn(wn)[0]),null!=e&&Ze(e,null,!1)}function pe(e,t){le(0,"internal"),he(e,t),le(V.scrollingSpeed,"internal")}function he(e,t){var n=Bt(e);void 0!==t?Nt(e,t):null!=n&&Ze(n)}function ge(e){De("right",e)}function me(e){De("left",e)}function Se(e){if(!Un(w,vn)){E=!0,y=Qn(),f=_n();for(var t=Gn(wn),n=0;n<t.length;++n){var o=t[n],r=Gn(In,o)[0],i=Gn(Cn,o);g.verticalCentered&&Jn(Gn(xn,o),{height:It(o)+"px"}),Jn(o,{height:Te(o)+"px"}),1<i.length&&wt(r,Gn(Hn,r)[0])}g.scrollOverflow&&p.createScrollBarForAll();var l=no(Gn(yn)[0],wn);l&&!_t("fadingEffect")&&pe(l+1),E=!1,bo(g.afterResize)&&e&&g.afterResize.call(w,an.innerWidth,an.innerHeight),bo(g.afterReBuild)&&!e&&g.afterReBuild.call(w),wo(w,"afterRebuild")}}function be(){return Un(m,fn)}function we(e){var t=be();e?t||(re(!1,"internal"),ae(!1,"internal"),oo(Gn(Tn)),lo(m,fn),bo(g.afterResponsive)&&g.afterResponsive.call(w,e),Jt("responsiveSlides","toSections"),wo(w,"afterResponsive",e),g.scrollOverflow&&p.createScrollBarForAll()):t&&(re(V.autoScrolling,"internal"),ae(V.autoScrolling,"internal"),ro(Gn(Tn)),ao(m,fn),bo(g.afterResponsive)&&g.afterResponsive.call(w,e),Jt("responsiveSlides","toSlides"),wo(w,"afterResponsive",e))}function ye(e){var t=e.target;t&&vo(t,Tn+" a")?function(e){So(e);var t=no(vo(this,Tn+" li"));Ze(Gn(wn)[t])}.call(t,e):yo(t,".fp-tooltip")?function(){wo(qn(this),"click")}.call(t):yo(t,Dn)?function(){var e=vo(this,wn);Un(this,Yn)?v.m.left&&me(e):v.m.right&&ge(e)}.call(t,e):yo(t,Wn)||null!=vo(t,Wn)?function(e){So(e);var t=Gn(In,vo(this,wn))[0],n=Gn(Cn,t)[no(vo(this,"li"))];wt(t,n)}.call(t,e):vo(t,g.menu+" [data-menuanchor]")&&function(e){!Gn(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(So(e),he(this.getAttribute("data-menuanchor")))}.call(t,e)}function Ee(e,t){sn["fp_"+e]=t,sn.addEventListener(e,xe,!0)}function xe(e){var t=e.type,o=!1,r=g.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==sn||!i)return ue(!0),void(r&&g.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(X=!1,setTimeout(function(){X=!0},800)),("mouseenter"!==t||X)&&(g.normalScrollElements.split(",").forEach(function(e){if(!o){var t=yo(i,e),n=vo(i,e);(t||n)&&(S.shared.isNormalScrollElement||(ue(!1),r&&g.scrollOverflowHandler.setIscroll(i,!1)),S.shared.isNormalScrollElement=!0,o=!0)}}),!o&&S.shared.isNormalScrollElement&&(ue(!0),r&&g.scrollOverflowHandler.setIscroll(i,!0),S.shared.isNormalScrollElement=!1))}function Ae(){var e=Qn(),t=_n();y===e&&f===t||(y=e,f=t,Se(!0))}function Le(e){var t="fp_"+e+"Extension";G[e]=g[e+"Key"],S[e]=void 0!==an[t]?new an[t]:null,S[e]&&S[e].c(e)}function Me(e,t,n){var o=100*n,r=100/n,i=sn.createElement("div");i.className=Rn,co(t,i);var l,a,s=sn.createElement("div");s.className=zn,co(t,s),Jn(Gn(Bn,e),{width:o+"%"}),1<n&&(g.controlArrows&&(l=e,a=[xo('<div class="fp-controlArrow fp-prev"></div>'),xo('<div class="fp-controlArrow fp-next"></div>')],po(Gn(In,l)[0],a),"#fff"!==g.controlArrowColor&&(Jn(Gn(Zn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Jn(Gn(Vn,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||oo(Gn(Vn,l))),g.slidesNavigation&&function(e,t){so(xo('<div class="'+jn+'"><ul></ul></div>'),e);var n=Gn(Pn,e)[0];lo(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++){var r=Gn(Cn,e)[o];so(xo('<li><a href="#"><span class="fp-sr-only">'+ke(o,"Slide",r)+"</span><span></span></a></li>"),Gn("ul",n)[0])}Jn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),lo(Gn("a",Gn("li",n)[0]),gn)}(e,n)),t.forEach(function(e){Jn(e,{width:r+"%"}),g.verticalCentered&&Rt(e)});var c=Gn(Hn,e)[0];null!=c&&(0!==no(Gn(yn),wn)||0===no(Gn(yn),wn)&&0!==no(c))?(Xt(c,"internal"),lo(c,"fp-initial")):lo(t[0],gn)}function Te(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Qn()}function Oe(e,t){t||null!=Gn(yn)[0]||lo(e,gn),o=Gn(yn)[0],Jn(e,{height:Te(e)+"px"}),g.paddingTop&&Jn(e,{"padding-top":g.paddingTop}),g.paddingBottom&&Jn(e,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[t]&&Jn(e,{"background-color":g.sectionsColor[t]}),void 0!==g.anchors[t]&&e.setAttribute("data-anchor",g.anchors[t])}function ke(e,t,n){var o="Section"===t?g.anchors[e]:n.getAttribute("data-anchor");return g.navigationTooltips[e]||o||t+" "+(e+1)}function Ce(){var e,t,n=Gn(yn)[0];lo(n,Sn),Ke(n),Je(),qe(n),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),e=ft(),t=Bt(e.section),e.section&&t&&(void 0===t||no(t)!==no(o))||!bo(g.afterLoad)||Xe("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:no(n,wn)}),bo(g.afterRender)&&Xe("afterRender"),wo(w,"afterRender")}function He(){var e;if(wo(w,"onScroll"),(!g.autoScrolling||g.scrollBar||_t("dragAndMove"))&&!$t()){var t=_t("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):go(),n=0,o=t+Qn()/2,r=(_t("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Qn())===t,i=Gn(wn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Un(e=i[n],gn)){_=!0;var a,s,c=Gn(yn)[0],u=no(c,wn)+1,f=Ct(e),d=e.getAttribute("data-anchor"),v=no(e,wn)+1,p=Gn(Hn,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(s=p.getAttribute("data-anchor"),a=no(p)),x&&(lo(e,gn),ao(mo(e),gn),Jt("parallax","afterLoad"),bo(g.onLeave)&&Xe("onLeave",h),bo(g.afterLoad)&&Xe("afterLoad",h),_t("resetSliders")&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}),tt(c),Ke(e),qe(e),kt(d,v-1),g.anchors.length&&(b=d),Pt(a,s,d)),clearTimeout(T),T=setTimeout(function(){_=!1},100)}g.fitToSection&&(clearTimeout(O),O=setTimeout(function(){g.fitToSection&&Gn(yn)[0].offsetHeight<=y&&Re()},g.fitToSectionDelay))}}function Re(){x&&(E=!0,Ze(Gn(yn)[0]),E=!1)}function Ie(e){if(v.m[e]){var t="down"===e?ve:de;if(_t("scrollHorizontally")&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(Gn(yn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function ze(e){g.autoScrolling&&Ne(e)&&v.m.up&&So(e)}function Be(e){var t=vo(e.target,wn)||Gn(yn)[0];if(Ne(e)){g.autoScrolling&&So(e);var n=Zt(e);$=n.y,q=n.x,Gn(In,t).length&&Math.abs(K-q)>Math.abs(J-$)?!a&&Math.abs(K-q)>_n()/100*g.touchSensitivity&&(q<K?v.m.right&&ge(t):v.m.left&&me(t)):g.autoScrolling&&x&&Math.abs(J-$)>an.innerHeight/100*g.touchSensitivity&&($<J?Ie("down"):J<$&&Ie("up"))}}function Ne(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function je(e){if(g.fitToSection&&(W=!1),Ne(e)){var t=Zt(e);J=t.y,K=t.x}}function Pe(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function We(e){var t=(new Date).getTime(),n=Un(Gn(".fp-completely")[0],Ln);if(!v.m.down&&!v.m.up)return So(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||an.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),g.scrollBar&&So(e);var a=t-ee;if(ee=t,200<a&&(d=[]),x&&!Kt()){var s=Pe(d,10);Pe(d,70)<=s&&l&&Ie(r<0?"down":"up")}return!1}g.fitToSection&&(W=!1)}function De(e,t){var n=null==t?Gn(yn)[0]:t,o=Gn(In,n)[0];if(!(null==o||Kt()||a||Gn(Cn,o).length<2)){var r=Gn(Hn,o)[0],i=null;if(null==(i="left"===e?Kn(r,Cn):$n(r,Cn))){if(!g.loopHorizontal)return;var l=mo(r);i="left"===e?l[l.length-1]:l[0]}a=!S.test.isTesting,wt(o,i,e)}}function Ye(){for(var e=Gn(Hn),t=0;t<e.length;t++)Xt(e[t],"internal")}function Ve(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=_t("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():te<n,i=o-y+t,l=g.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==eo(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),te=o}function Ze(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ve(e),yMovement:Ct(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:no(e,wn),activeSlide:Gn(Hn,e)[0],activeSection:Gn(yn)[0],leavingSection:no(Gn(yn),wn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||g.scrollBar&&go()===i.dtop&&!Un(e,An))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=no(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,bo(g.onLeave)&&!1===Xe("onLeave",i))return}var a;Jt("parallax","apply",i),Jt("cards","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?ho(Gn(yn)[0],Lo(s.activeSection,wn)):po(Gn(yn)[0],Mo(s.activeSection,wn).reverse()),Gt(Gn(yn)[0].offsetTop),Ye(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=Ct(s.element),s.leavingSection=no(s.activeSection,wn)+1,s.sectionIndex=no(s.element,wn),wo(Gn(un)[0],"onContinuousVertical",s),i=s),_t("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||tt(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),lo(e,gn),ao(mo(e),gn),Ke(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,Pt(r,o,i.anchorLink,i.sectionIndex),function(e){var t=g.scrollingSpeed<700,n=t?700:g.scrollingSpeed;if(g.css3&&g.autoScrolling&&!g.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";zt(o,!0),g.scrollingSpeed?(clearTimeout(L),L=setTimeout(function(){Qe(e),x=!t},g.scrollingSpeed)):Qe(e)}else{var r=Ue(e.dtop);S.test.top=-e.dtop+"px",tn(r.element,r.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){Qe(e)},30):(Qe(e),x=!t)})}t&&(clearTimeout(Y),Y=setTimeout(function(){x=!0},n))}(i),b=i.anchorLink,kt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Gn(wn).length-1:0)}}var s}function Xe(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Ge(Gn(yn)[0]),slide:Fe(Gn(Hn,Gn(yn)[0])[0])}},onLeave:function(){return{origin:Ge(r.activeSection),destination:Ge(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Ge(r.section),origin:Fe(r.prevSlide),destination:Fe(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}else if(wo(w,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ge(e){return e?new rn(e):null}function Fe(e){return e?new ln(e):null}function Ue(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=Gn(un)[0]):(t.options=e,t.element=an),t}function Qe(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?ho(Gn(wn)[0],t.wrapAroundElements):po(Gn(wn)[Gn(wn).length-1],t.wrapAroundElements),Gt(Gn(yn)[0].offsetTop),Ye(),t.sectionIndex=no(t.element,wn),t.leavingSection=no(t.activeSection,wn)+1),bo(g.afterLoad)&&!e.localIsResizing&&Xe("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),Jt("parallax","afterLoad"),Jt("scrollOverflowReset","reset"),_t("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||qe(e.element),lo(e.element,Sn),ao(mo(e.element),Sn),Je(),x=!0,bo(e.callback)&&e.callback()}function _e(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Je(){var e=Gn(".fp-auto-height")[0]||be()&&Gn(".fp-auto-height-responsive")[0];g.lazyLoading&&e&&Gn(wn+":not("+mn+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<y&&0<n||2<o&&o<y)&&Ke(e)})}function Ke(o){g.lazyLoading&&Gn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",nt(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(_e(n,e),n.addEventListener("load",function(){$e(o)}))}),yo(n,"source")){var e=vo(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){$e(o)})}})}function $e(e){g.scrollOverflow&&(clearTimeout(D),D=setTimeout(function(){Un(m,fn)||p.createScrollBar(e)},200))}function qe(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&et(e),e.onload=function(){e.hasAttribute("data-autoplay")&&et(e)}})}function et(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function tt(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function nt(e){var t=Gn(Hn,e);return t.length&&(e=t[0]),e}function ot(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function rt(f){var d=void 0!==G[f]&&G[f].length,e=[],v=!1;return io(G[f])?e=G[f]:e.push(G[f]),e.forEach(function(e){var t=function(){if(sn.domain.length){for(var e=sn.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=ot(n[0]),r=ot(n[1]),i=ot(n[2]),l=ot(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length;if(!d&&a)return!1;var s=d?ot(e):"",c=1<(s=s.split("_")).length&&-1<s[1].indexOf(f,s[1].length-f.length),u=s[0].indexOf(t,s[0].length-t.length)<0;v=v||!(u&&a&&l!=s[0])&&c||!a}),v}function it(e){e.forEach(function(e){if(e.removedNodes[0]&&e.removedNodes[0].isEqualNode(U)){clearTimeout(Q);var t=ot("bDIwc2V0VGltZW91dDAzbA==");Q=an[t](lt,900)}})}function lt(){z=!1}function at(e){if(U=sn.createElement("div"),F=ot("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),B||(F=F.replace("extensions/","").replace("Extension","")),U.innerHTML=F,U=U.firstChild,"MutationObserver"in an&&new MutationObserver(it).observe(sn.body,{childList:!0,subtree:!1}),(!B||_t(e)&&S[e])&&(!rt(e)||!B)){st();var t=ot("MzQ1c2V0SW50ZXJ2YWwxMjM=");an[t](st,2e3)}}function st(){U&&(z||(Math.random()<.5?To(m,U):so(U,m),z=!0),U.setAttribute("style",ot("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,ot("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function ct(){var e=ft(),t=e.section,n=e.slide;t&&(g.animateAnchor?Nt(t,n):pe(t,n))}function ut(){if(!_&&!g.lockAnchors){var e=ft(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;t&&t.length&&(t&&t!==b&&!o||r||!a&&i!=n&&!Kt())&&Nt(t,n)}}function ft(){var e,t,n=an.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function dt(e){clearTimeout(k);var t=sn.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=sn.activeElement,u=gt(nt(Gn(yn)[0]));function f(e){return So(e),u[0]?u[0].focus():null}(t=e,n=gt(sn),o=n.indexOf(sn.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Fe(vo(i,Cn)),a=Ge(vo(i,wn)),l||a)&&(c?null==vo(c,yn+","+yn+" "+Hn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&So(e))}(e):yo(t,"textarea")||yo(t,"input")||yo(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&So(e),c=e.ctrlKey,k=setTimeout(function(){!function(e){var t=e.shiftKey,n=sn.activeElement,o=yo(n,"video")||yo(n,"audio");if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:v.k.up&&de();break;case 32:if(t&&v.k.up&&!o){de();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||ve());break;case 36:v.k.up&&he(1);break;case 35:v.k.down&&he(Gn(wn).length);break;case 37:v.k.left&&me();break;case 39:v.k.right&&ge()}}(e)},150))}function vt(e){t&&(c=e.ctrlKey)}function pt(e){2==e.which&&(ne=e.pageY,w.addEventListener("mousemove",bt))}function ht(e){2==e.which&&w.removeEventListener("mousemove",bt)}function gt(e){return[].slice.call(Gn(N,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function mt(){t=!0}function St(){c=t=!1}function bt(e){g.autoScrolling&&(x&&(e.pageY<ne&&v.m.up?de():e.pageY>ne&&v.m.down&&ve()),ne=e.pageY)}function wt(e,t,n){var o=vo(e,wn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:no(t),section:o,sectionIndex:no(o,wn),anchorLink:o.getAttribute("data-anchor"),slidesNav:Gn(Pn,o)[0],slideAnchor:Dt(t),prevSlide:Gn(Hn,o)[0],prevSlideIndex:no(Gn(Hn,o)[0]),localIsResizing:E};r.xMovement=Ht(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),Jt("parallax","applyHorizontal",r),Jt("cards","apply",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&bo(g.onSlideLeave)&&!1===Xe("onSlideLeave",r)?a=!1:(lo(t,gn),ao(mo(t),gn),r.localIsResizing||(tt(r.prevSlide),Ke(t)),yt(r),Un(o,gn)&&!r.localIsResizing&&Pt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),$t()?Et(r):xt(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(_t("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}function yt(e){!g.loopHorizontal&&g.controlArrows&&(Eo(Gn(Vn,e.section),0!==e.slideIndex),Eo(Gn(Zn,e.section),null!=eo(e.destiny)))}function Et(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(ao(Gn(mn,t),gn),lo(Gn("a",Gn("li",t)[n]),gn)),e.localIsResizing||(Jt("parallax","afterSlideLoads"),Jt("scrollOverflowReset","setPrevious",e.prevSlide),Jt("scrollOverflowReset","reset"),bo(g.afterSlideLoad)&&Xe("afterSlideLoad",e),x=!0,qe(e.destiny)),a=!1,_t("interlockedSlides")&&S.interlockedSlides.apply(e)}function xt(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Jn(Tt(Gn(Bn,e)),Ft(r)),M=setTimeout(function(){n&&Et(t)},g.scrollingSpeed)}else S.test.left[t.sectionIndex]=Math.round(o.left),tn(e,Math.round(o.left),g.scrollingSpeed,function(){n&&Et(t)})}function At(){E=!0,clearTimeout(h),h=setTimeout(function(){for(var e=0;e<4;e++)A=setTimeout(Lt,200*e)},200)}function Lt(){if(wo(w,"onResize"),Mt(),l){var e=sn.activeElement;if(!yo(e,"textarea")&&!yo(e,"input")&&!yo(e,"select")){var t=Qn();Math.abs(t-oe)>20*Math.max(oe,t)/100&&(Se(!0),oe=t)}}else Ae()}function Mt(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&an.innerWidth<e,o=t&&an.innerHeight<t;e&&t?we(n||o):e?we(n):t&&we(o)}function Tt(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return ao(e,dn),Jn(e,{"-webkit-transition":t,transition:t})}function Ot(e){return lo(e,dn)}function kt(e,t){var n,o,r,i;n=e,Gn(g.menu).forEach(function(e){g.menu&&null!=e&&(ao(Gn(mn,e),gn),lo(Gn('[data-menuanchor="'+n+'"]',e),gn))}),o=e,r=t,i=Gn(Tn)[0],g.navigation&&null!=i&&"none"!==i.style.display&&(ao(Gn(mn,Gn(Tn)[0]),gn),lo(o?Gn('a[href="#'+o+'"]',Gn(Tn)[0]):Gn("a",Gn("li",Gn(Tn)[0])[r]),gn))}function Ct(e){var t=no(Gn(yn)[0],wn),n=no(e,wn);return t==n?"none":n<t?"up":"down"}function Ht(e,t){return e==t?"none":t<e?"left":"right"}function Rt(e){if(!Un(e,Nn)){var t=sn.createElement("div");t.className=En,t.style.height=It(e)+"px",lo(e,Nn),uo(e,t)}}function It(e){var t=Te(e);if(g.paddingTop||g.paddingBottom){var n=e;Un(n,bn)||(n=vo(e,wn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function zt(e,t){t?Tt(w):Ot(w),clearTimeout(H),Jn(w,Ft(e)),S.test.translate3d=e,H=setTimeout(function(){ao(w,dn)},10)}function Bt(e){var t=Gn(wn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=Gn(wn)[n]}return t}function Nt(e,t){var n=Bt(e);if(null!=n){var o,r,i,l=(null==(i=Gn(Cn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Gn(Cn,r)[o]),i);Dt(n)===b||Un(n,gn)?jt(l):Ze(n,function(){jt(l)})}}function jt(e){null!=e&&wt(vo(e,In),e)}function Pt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Wt(r+"/"+(i=t))):(null!=e&&(i=t),Wt(n))),Yt()}function Wt(e){if(g.recordHistory)location.hash=e;else if(l||u)an.history.replaceState(void 0,void 0,"#"+e);else{var t=an.location.href.split("#")[0];an.location.replace(t+"#"+e)}}function Dt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=no(e);return null==t&&(t=n),t}function Yt(){var e=Gn(yn)[0],t=Gn(Hn,e)[0],n=Dt(e),o=Dt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+hn+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),lo(m,hn+"-"+r)}function Vt(){return an.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Zt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,u&&Ne(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Xt(e,t){le(0,"internal"),void 0!==t&&(E=!0),wt(vo(e,In),e),void 0!==t&&(E=!1),le(V.scrollingSpeed,"internal")}function Gt(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)zt("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Jn(w,{top:-t+"px"}),S.test.top=-t+"px";else{var n=Ue(t);nn(n.element,n.options)}}function Ft(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ut(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function Qt(e){return Jn(e,{"-webkit-transition":"none",transition:"none"})}function _t(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}function Jt(e,t,n){if(_t(e))return S[e][t](n)}function Kt(){return _t("dragAndMove")&&S.dragAndMove.isAnimating}function $t(){return _t("dragAndMove")&&S.dragAndMove.isGrabbing}function qt(e,t,n){g[e]=t,"internal"!==n&&(V[e]=t)}function en(){var e=g.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Xn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Xn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Un(s,pn)?Xn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Xn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Xn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Xn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Xn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(Gn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Gn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Xn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Xn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function tn(t,n,o,r){var e,i=(e=t).self!=an&&Un(e,Rn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?go():e.offsetTop,l=n-i,a=0;W=!0;var s=function(){if(W){var e=n;a+=20,o&&(e=an.fp_easings[g.easing](a,i,l,o)),nn(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function nn(e,t){!g.autoScrolling||g.scrollBar||e.self!=an&&Un(e,Rn)?e.self!=an&&Un(e,Rn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function on(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=no(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function rn(e){on.call(this,e,wn)}function ln(e){on.call(this,e,Cn)}en()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 53 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(53);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 3.0.9\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{position:relative}.fp-scrollable,.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translate3d(0,-50%,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li:hover a.active span,#fp-nav ul li a.active span,.fp-slidesNav ul li:hover a.active span,.fp-slidesNav ul li a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav.fp-show-active a.active+.fp-tooltip,#fp-nav ul li:hover .fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height.fp-section,.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section,.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(56);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(54)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var isArray = __webpack_require__(34);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(58);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(41);
var IObject = __webpack_require__(39);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(37);
var asc = __webpack_require__(59);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(8);
var $find = __webpack_require__(60)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(23)(KEY);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(0)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(5);
var cof = __webpack_require__(27);
var MATCH = __webpack_require__(0)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(63);
var defined = __webpack_require__(17);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(8);
var context = __webpack_require__(64);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(62)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(8);
var $includes = __webpack_require__(38)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(23)('includes');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(13);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(21);
var $keys = __webpack_require__(12);

__webpack_require__(67)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(21);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(33);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(28);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(15);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(70);
var setToStringTag = __webpack_require__(28);
var getPrototypeOf = __webpack_require__(69);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(31);
var getKeys = __webpack_require__(12);
var redefine = __webpack_require__(15);
var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(22);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(47);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7);
var gOPN = __webpack_require__(32).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(12);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(36);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(24);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
var Fullpage;var isFunc=function isFunc(val){return typeof val==='function';};var isEqualArray=function isEqualArray(firstArr,secondArr){if(firstArr.length!==secondArr.length)return false;return firstArr.find(function(el){return!secondArr.includes(el);})==null;};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){var _this;_classCallCheck(this,ReactFullpage);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpage).call(this,props));var _this$props=_this.props,render=_this$props.render,pluginWrapper=_this$props.pluginWrapper;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this.props.debug,'ReactFullpage');_this.log('Building component');_this.log('Importing vendor files');_this.importVendors();if(pluginWrapper){_this.log('Calling plugin wrapper');pluginWrapper();}_this.log('Requiring fullpage.js');Fullpage=__webpack_require__(52);_this.state={initialized:false,sectionCount:0,slideCount:0};return _this;}_createClass(ReactFullpage,[{key:"componentDidMount",value:function componentDidMount(){var opts=this.buildOptions();this.log('React Lifecycle: componentDidMount()');if(Fullpage){this.init(opts);this.markInitialized();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){this.log('React Lifecycle: componentDidUpdate()');var newSectionCount=this.getSectionCount();var newSlideCount=this.getSlideCount();var _this$state=this.state,sectionCount=_this$state.sectionCount,slideCount=_this$state.slideCount;// comparing sectionColors array option
var areSameSectionColors=isEqualArray(prevProps.sectionsColor,this.props.sectionsColor);// NOTE: if fullpage props have changed we need to rebuild
if(!areSameSectionColors){this.log('rebuilding due to a change in fullpage.js props');this.reRender();return;}if(sectionCount===newSectionCount&&slideCount===newSlideCount){return;}// NOTE: if sections/slides have changed we need to rebuild
this.log('rebuilding due to a change in fullpage.js sections/slides');this.reRender();}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.destroy();}},{key:"getSectionCount",value:function getSectionCount(){var _this$props$sectionSe=this.props.sectionSelector,sectionSelector=_this$props$sectionSe===void 0?_selectors__WEBPACK_IMPORTED_MODULE_11__[/* DEFAULT_SECTION */ "a"]:_this$props$sectionSe;var _document$querySelect=document.querySelectorAll(sectionSelector),length=_document$querySelect.length;return length;}},{key:"getSlideCount",value:function getSlideCount(){var _this$props$slideSele=this.props.slideSelector,slideSelector=_this$props$slideSele===void 0?_selectors__WEBPACK_IMPORTED_MODULE_11__[/* DEFAULT_SLIDE */ "b"]:_this$props$slideSele;var _document$querySelect2=document.querySelectorAll(slideSelector),length=_document$querySelect2.length;return length;}},{key:"importVendors",value:function importVendors(){var _this$props2=this.props,scrollOverflow=_this$props2.scrollOverflow,easing=_this$props2.easing;if(scrollOverflow){__webpack_require__(51);}if(easing){__webpack_require__(50);}}},{key:"init",value:function init(opts){this.log('Reinitializing fullpage with options',opts);new Fullpage(_selectors__WEBPACK_IMPORTED_MODULE_11__[/* ID_SELECTOR */ "c"],opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;}},{key:"destroy",value:function destroy(){this.log('Destroying fullpage instance');this.fullpageApi.destroy('all');}},{key:"reRender",value:function reRender(){this.destroy();this.init(this.buildOptions());}},{key:"markInitialized",value:function markInitialized(){this.log('Marking initialized');this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}},{key:"buildOptions",value:function buildOptions(){var _this2=this;var filterCb=function filterCb(key){return!!Object.keys(_this2.props).find(function(cb){return cb===key;});};var registered=fullpageCallbacks.filter(filterCb);var listeners=registered.reduce(function(result,key){return _objectSpread({},result,_defineProperty({},key,function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _this2.update.apply(_this2,[key].concat(args));}));},{});// NOTE: override passed in callbacks w/  wrapped listeners
var options=_objectSpread({},this.props,listeners);this.log('Building fullpage.js options: ',options);return options;}},{key:"update",value:function update(lastEvent){var _this$props3;for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}this.log('Event trigger: ',lastEvent);var state=_objectSpread({},this.state,{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});var makeState=function makeState(callbackParameters){return _objectSpread({},state,callbackParameters,{lastEvent:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}var returned=(_this$props3=this.props)[lastEvent].apply(_this$props3,args);this.log('Called callback: Returning => ',returned);this.log('Updating State => ',state);this.setState(state);return returned;}},{key:"render",value:function render(){this.log('<== Rendering ==>');return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_11__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);ReactFullpage.defaultProps={sectionsColor:[]};/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(3);
var redefine = __webpack_require__(15);
var fails = __webpack_require__(9);
var defined = __webpack_require__(17);
var wks = __webpack_require__(0);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(83)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5Ccode%5Cwork%5Cwebsite%5Cpages%5Cindex.tsx!./":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5Ccode%5Cwork%5Cwebsite%5Cpages%5Cindex.tsx ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx");
        }
      ]);
    

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports["default"] = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/vercel/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = _loadable["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return /*#__PURE__*/_react["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports["default"] = _default;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/index.less */ "./styles/index.less");
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/conf */ "./conf/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "E:\\code\\work\\website\\pages\\index.tsx",
    _s = $RefreshSig$();






var AI_header = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
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
var AI_footer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c3 = function _c3() {
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
function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      ltIsAni = _useState[0],
      setLtIsAni = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      rtIsAni = _useState2[0],
      setrtIsAni = _useState2[1];

  var onLeave = function onLeave(origin, destination, direction) {
    console.log(origin, direction);
    var index = destination.index;

    if (index === 0 || index === 2) {
      setLtIsAni(true);
      setrtIsAni(false);
    } else {
      setLtIsAni(false);
      setrtIsAni(true);
    }
  };

  var afterLoad = function afterLoad(origin, destination, direction) {
    console.log(origin, direction);
    var index = destination.index;

    if (index === 0 || index === 2) {
      setLtIsAni(true);
      setrtIsAni(false);
    } else {
      setLtIsAni(false);
      setrtIsAni(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "home",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_header, {
      title: "\u9996\u9875",
      currentIndex: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onLeave: onLeave,
        afterLoad: afterLoad,
        render: function render() {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default.a.Wrapper, {
            children: _conf__WEBPACK_IMPORTED_MODULE_4__["HomeMain"].map(function (_ref, idx) {
              var title = _ref.title,
                  em = _ref.em,
                  img = _ref.img,
                  bg = _ref.bg,
                  leftIsText = _ref.leftIsText,
                  className = _ref.className;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                className: "section",
                style: {
                  backgroundImage: "url(".concat(bg, ")")
                },
                children: [leftIsText ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                    className: ltIsAni ? 'text_box animate__animated animate__backInLeft' : 'text_box',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      children: em
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: ltIsAni ? className + 'img animate__animated animate__backInRight' : className + 'img',
                    src: img,
                    alt: "Show_img"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: rtIsAni ? className + 'img animate__animated animate__backInLeft' : className + 'img',
                    src: img,
                    alt: "Show_img"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                    className: rtIsAni ? 'text_box animate__animated animate__backInRight' : 'text_box',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      children: em
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true), idx === 3 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                  className: "foot",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AI_footer, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 23
                }, _this)]
              }, idx, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Home, "Nd6msjzti/MOxNrUu4RITdRO2sE=");

_c5 = Home;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "AI_header$dynamic");
$RefreshReg$(_c2, "AI_header");
$RefreshReg$(_c3, "AI_footer$dynamic");
$RefreshReg$(_c4, "AI_footer");
$RefreshReg$(_c5, "Home");

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

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5Ccode%5Cwork%5Cwebsite%5Cpages%5Cindex.tsx!./","webpack","styles"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmdWxscGFnZS9yZWFjdC1mdWxscGFnZS9kaXN0L3JlYWN0LWZ1bGxwYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvZHluYW1pYy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbG9hZGFibGUtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJiYXNlVVJMIiwibmF2VGV4dCIsInRpdGxlIiwicGFnZSIsIkhvbWVNYWluIiwiY2xhc3NOYW1lIiwiZW0iLCJpbWciLCJiZyIsImxlZnRJc1RleHQiLCJkb3duX2xpc3QiLCJjb250ZW50IiwiaXNydCIsImlzU2VydmVyU2lkZSIsImxvYWRhYmxlT3B0aW9ucyIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJMb2FkaW5nIiwibG9hZGFibGVGbiIsIkxvYWRhYmxlIiwibG9hZGluZyIsImVycm9yIiwiZHluYW1pY09wdGlvbnMiLCJjb25zb2xlIiwibG9hZE1vZHVsZXMiLCJtb2R1bGVzIiwiT2JqZWN0Iiwia2V5IiwidmFsdWUiLCJtb2QiLCJub1NTUiIsIkxvYWRhYmxlQ29udGV4dCIsIlJlYWN0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwicHJvbWlzZSIsImxvYWRlciIsInN0YXRlIiwibG9hZGVkIiwiZXJyIiwicHJvbWlzZXMiLCJyZXN1bHQiLCJsb2FkIiwib2JqIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcHRzIiwiZGVsYXkiLCJ0aW1lb3V0IiwicmVuZGVyIiwid2VicGFjayIsInN1YnNjcmlwdGlvbiIsInN1YiIsImdldEN1cnJlbnRWYWx1ZSIsInN1YnNjcmliZSIsInJldHJ5IiwibW9kdWxlSWRzIiwiaWRzIiwiaW5pdCIsIkxvYWRhYmxlQ29tcG9uZW50IiwiY29udGV4dCIsIkFycmF5IiwibW9kdWxlTmFtZSIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiTG9hZGFibGVTdWJzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIl9yZXMiLCJfb3B0cyIsInNldFRpbWVvdXQiLCJfZXJyIiwiX3VwZGF0ZSIsImNhbGxiYWNrIiwiX2NsZWFyVGltZW91dHMiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVMb2FkYWJsZUNvbXBvbmVudCIsImluaXRpYWxpemVycyIsImZsdXNoSW5pdGlhbGl6ZXJzIiwicmVzb2x2ZVByZWxvYWQiLCJ3aW5kb3ciLCJBSV9oZWFkZXIiLCJkeW5hbWljIiwiQUlfZm9vdGVyIiwiSG9tZSIsInVzZVN0YXRlIiwibHRJc0FuaSIsInNldEx0SXNBbmkiLCJydElzQW5pIiwic2V0cnRJc0FuaSIsIm9uTGVhdmUiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsImRpcmVjdGlvbiIsImxvZyIsImluZGV4IiwiYWZ0ZXJMb2FkIiwibWFwIiwiaWR4IiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNQSxPQUFPLEdBQUcsMkJBQWhCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsT0FBSyxFQUFFLElBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEYyxFQUtkO0FBQ0VELE9BQUssRUFBRSxNQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTGMsRUFTZDtBQUNFRCxPQUFLLEVBQUUsTUFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQVRjLEVBYWQ7QUFDRUQsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FiYyxFQWlCZDtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhGQUE4RixlQUFlO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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O0FBQUE7QUFBQSwyQkFYRjtBQUFBLGdDQURTLGdCQXdCVDtBQUFBLDBDQUNFO0FBQ0UsNkJBQVMsRUFDUGtGLE9BQU8sR0FDSHBGLFNBQVMsR0FDVCwyQ0FGRyxHQUdIQSxTQUFTLEdBQUcsS0FMcEI7QUFPRSx1QkFBRyxFQUFFRSxHQVBQO0FBUUUsdUJBQUcsRUFBQztBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFXRTtBQUNFLDZCQUFTLEVBQ1BrRixPQUFPLEdBQ0gsaURBREcsR0FFSCxVQUpSO0FBQUEsNENBT0U7QUFBQSxnQ0FBS3ZGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQRixlQVFFO0FBQUEsZ0NBQUtJO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBWEY7QUFBQSxnQ0E3QkosRUFvREc2RixHQUFHLEtBQUssQ0FBUixpQkFDQztBQUFTLDJCQUFTLEVBQUMsTUFBbkI7QUFBQSx5Q0FDRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXJESjtBQUFBLGlCQUNPQSxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFBQSxhQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETTtBQUFBO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJHRDs7R0F6SXVCZCxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVVJMID0gJ2h0dHA6Ly9hcGkyLmFpY3RiLmNvbS9hcGknXHJcblxyXG5jb25zdCBuYXZUZXh0ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAn6aaW6aG1JyxcclxuICAgIHBhZ2U6ICcvJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn5bqU55So5LiL6L29JyxcclxuICAgIHBhZ2U6ICcvZG93bmxvYWQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfluK7liqnkuK3lv4MnLFxyXG4gICAgcGFnZTogJy9oZWxwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn5Yqg55uf5Luj55CGJyxcclxuICAgIHBhZ2U6ICcvam9pbicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ+WFs+S6juaIkeS7rCcsXHJcbiAgICBwYWdlOiAnL2Fib3V0JyxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBIb21lTWFpbiA9IFtcclxuICB7XHJcbiAgICBjbGFzc05hbWU6ICdyZXNvdXJjZXMnLFxyXG4gICAgdGl0bGU6ICfmtbfph4/otYTmupAnLFxyXG4gICAgZW06XHJcbiAgICAgICfljLrln5/lkI3moKHotYTmupDjgIHmtbfph4/or5XpopjlrprliLborq3nu4PvvIzkuI7lkI3moKHlrabnlJ/plJnkvY3mr5TovoPvvJvkuLDlr4znmoTmnKzlnLDotYTmupDlhbHkuqvvvIzmlrnkvr/mlZnluIjmm7Tlpb3lpIfor77vvIzmj5Dpq5jlt6XkvZzmlYjnjofjgIInLFxyXG4gICAgaW1nOiAnaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvcGFnZTFfaW1nLnBuZycsXHJcbiAgICBiZzogJ2h0dHBzOi8vYWljdGIub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS93ZWJzaXRlL3BhZ2UxX2JnLnBuZycsXHJcbiAgICBsZWZ0SXNUZXh0OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY2xhc3NOYW1lOiAncGljdHVyZScsXHJcbiAgICB0aXRsZTogJ+aLjeeFp+ivhumimCcsXHJcbiAgICBlbTpcclxuICAgICAgJ+Wvuee6uOi0qOS9nOS4muaLjeeFp+ivhuWIq+aIkOaWh+aho++8jOWLvumAiemUmemimOe7hOaIkOeUteWtkOmUmemimOacrO+8jOWGjeaJk+WNsOW5tue7g+S5oO+8jOWtpueUn+S4jeeUqOaJi+aKhOmUmemimO+8jOWPr+S7peiKguecgeaXtumXtO+8m+aVmeW4iOS4gOmUruaLjeeFp+S4iuS8oOivleWNt+OAgeeUn+aIkOaWh+aho++8jOagoeWGheWFseS6q++8jOaWueS+v+WtpueUn+S4i+i9veS9v+eUqOOAgicsXHJcbiAgICBpbWc6ICdodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9wYWdlMl9pbWcucG5nJyxcclxuICAgIGJnOiAnaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvcGFnZTJfYmcucG5nJyxcclxuICAgIGxlZnRJc1RleHQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY2xhc3NOYW1lOiAnV3JvbmdwdXNoJyxcclxuICAgIHRpdGxlOiAn6ZSZ6aKY5o6o6YCBJyxcclxuICAgIGVtOlxyXG4gICAgICAnQUnns7vnu5/mjqjpgIHkuL7kuIDlj43kuInlj5jlvI/popjvvIzluK7liqnlrabnlJ/lt6nlm7rplJnor6/popjlnovnn6Xor4bngrnvvIzmj5Dpq5jlrabkuaDmlYjnjofvvJvmsYfmgLvliIbmnpDnj63nuqfplJnpopjmg4XlhrXvvIzns7vnu5/mjqjpgIHlhbHmgKfplJnpopjlj5jlvI/popjvvIzoioLnuqbogIHluIjlh7rpopjml7bpl7TjgIInLFxyXG4gICAgaW1nOiAnaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvcGFnZTNfaW1nLnBuZycsXHJcbiAgICBiZzogJ2h0dHBzOi8vYWljdGIub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS93ZWJzaXRlL3BhZ2UzX2JnLnBuZycsXHJcbiAgICBsZWZ0SXNUZXh0OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY2xhc3NOYW1lOiAnU3R1ZHlyZXBvcnQnLFxyXG4gICAgdGl0bGU6ICflrabmg4XmiqXlkYonLFxyXG4gICAgZW06XHJcbiAgICAgICfplJnpopjmlLbpm4blkI7lvaLmiJDlj6/op4bljJbkuKrmgKfmlbDmja7miqXlkYrvvIzlrabnlJ/muIXmpZrorqTor4boh6rouqvplJnor6/vvIzmlrnkvr/mj5DkvJjooaXlt67vvJvplJnpopjmlbDmja7miqXlkYrliIbmnpDlrabnlJ/nn6Xor4boloTlvLHpobnvvIzmlrnkvr/ogIHluIjmn6Xmib7mlZnlraboloTlvLHnjq/oioLvvIzlrp7njrDnsr7lh4bmlZnlrabjgIInLFxyXG4gICAgaW1nOiAnaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvcGFnZTRfaW1nLnBuZycsXHJcbiAgICBiZzogJ2h0dHBzOi8vYWljdGIub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS93ZWJzaXRlL3BhZ2U0X2JnLnBuZycsXHJcbiAgICBsZWZ0SXNUZXh0OiBmYWxzZSxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBkb3duX2xpc3QgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICfkuLDlr4znmoTmlZnovoXkuabotYTmupAnLFxyXG4gICAgY29udGVudDogJ+agoeacrOivleWNt+OAgeWQjeagoei1hOa6kOiuqeWtpuS5oOabtOeugOWNlScsXHJcbiAgICBpbWc6ICdodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9kb3duX2xpc3QxLnBuZycsXHJcbiAgICBpc3J0OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfmjqjpgIHkuL7kuIDlj43kuInlj5jlvI/popgnLFxyXG4gICAgY29udGVudDogJ+WtpueUn+aUtumbhumUmemimOabtOi9u+advu+8jOiAgeW4iOe7hOWNt+abtOW/q+aNtycsXHJcbiAgICBpbWc6ICdodHRwczovL2FpY3RiLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vd2Vic2l0ZS9kb3duX2xpc3QyLnBuZycsXHJcbiAgICBpc3J0OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn5a2m5oOF5oql5ZGK5LiA55uu5LqG54S2JyxcclxuICAgIGNvbnRlbnQ6ICfoioLnuqbml7bpl7TjgIHmlrnkvr/lv6vmjbcnLFxyXG4gICAgaW1nOiAnaHR0cHM6Ly9haWN0Yi5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3dlYnNpdGUvZG93bl9saXN0My5wbmcnLFxyXG4gICAgaXNydDogdHJ1ZSxcclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgeyBiYXNlVVJMLCBuYXZUZXh0LCBIb21lTWFpbiwgZG93bl9saXN0IH1cclxuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiLyohXG4gKiBAZnVsbHBhZ2UvcmVhY3QtZnVsbHBhZ2UgMC4xLjE4XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vcmVhY3QtZnVsbHBhZ2VcbiAqIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9yZWFjdC1mdWxscGFnZSNsaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IGFsdmFyb3RyaWdvLmNvbSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ28gJiBNaWNoYWVsIFdhbGtlclxuICovXG5tb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ4KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHN0b3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSkoJ3drcycpO1xudmFyIHVpZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xudmFyIFN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oMSkuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZFAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBjcmVhdGVEZXNjID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTUFJTl9TRUxFQ1RPUjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiY1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIElEX1NFTEVDVE9SOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gREVGQVVMVF9TRUNUSU9OOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJiXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gREVGQVVMVF9TTElERTsgfSk7XG52YXIgTUFJTl9TRUxFQ1RPUj0nZnVsbHBhZ2UnO3ZhciBJRF9TRUxFQ1RPUj1cIiNcIi5jb25jYXQoTUFJTl9TRUxFQ1RPUik7dmFyIERFRkFVTFRfU0VDVElPTj0nLnNlY3Rpb24nO3ZhciBERUZBVUxUX1NMSURFPScuU0xJREUnO1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpO1xudmFyIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGNvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xudmFyIGN0eCA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhX193ZWJwYWNrX3JlcXVpcmVfXyg5KShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcbnZhciBJRThfRE9NX0RFRklORSA9IF9fd2VicGFja19yZXF1aXJlX18oNDcpO1xudmFyIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTApID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xudmFyIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBTUkMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXygxMykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gKGZ1bmN0aW9uKGRlYnVnLGNvbXBOYW1lKXtyZXR1cm4gZGVidWc/ZnVuY3Rpb24oKXt2YXIgX2NvbnNvbGU7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31yZXR1cm4oX2NvbnNvbGU9Y29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlLFtcIjxcIi5jb25jYXQoY29tcE5hbWUsXCIvPiBEZWJ1ZyBMb2c6IFwiKV0uY29uY2F0KGFyZ3MpKTt9OmZ1bmN0aW9uKCl7fTt9KTtcblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IF9fd2VicGFja19yZXF1aXJlX18oMCkoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIF9fd2VicGFja19yZXF1aXJlX18oMykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5leHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpKCdrZXlzJyk7XG52YXIgdWlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAyOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZGVmID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSkuZjtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIFRBRyA9IF9fd2VicGFja19yZXF1aXJlX18oMCkoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY29yZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IF9fd2VicGFja19yZXF1aXJlX18oMTYpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG4vKioqLyB9KSxcbi8qIDMwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG52YXIgc3RlcCA9IF9fd2VicGFja19yZXF1aXJlX18oNzIpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xudmFyIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MSkoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vKioqLyB9KSxcbi8qIDMyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xudmFyIGhpZGRlbktleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAzMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xudmFyIGRQcyA9IF9fd2VicGFja19yZXF1aXJlX18oNzcpO1xudmFyIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG52YXIgSUVfUFJPVE8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgX193ZWJwYWNrX3JlcXVpcmVfXyg3NikuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLyoqKi8gfSksXG4vKiAzNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiovIH0pLFxuLyogMzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAzNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDM5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIGFycmF5SW5kZXhPZiA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDQxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oODEpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xudmFyIE1FVEEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgwKS5LRVk7XG52YXIgJGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBzaGFyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xudmFyIHVpZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xudmFyIHdrcyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgd2tzRXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG52YXIgd2tzRGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NCk7XG52YXIgZW51bUtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5KTtcbnZhciBpc0FycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xudmFyIGNyZWF0ZURlc2MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbnZhciBfY3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG52YXIgZ09QTkV4dCA9IF9fd2VicGFja19yZXF1aXJlX18oNzUpO1xudmFyICRHT1BEID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NCk7XG52YXIgJERQID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgJGtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIF9fd2VicGFja19yZXF1aXJlX18oMjQpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIF9fd2VicGFja19yZXF1aXJlX18oMzUpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXygxNikpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8qKiovIH0pLFxuLyogNDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXhwb3J0cy5mID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKioqLyB9KSxcbi8qIDQ0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGNvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbnZhciBMSUJSQVJZID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG52YXIgd2tzRXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXyg0NCkoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vKioqLyB9KSxcbi8qIDQ2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDQ3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gIV9fd2VicGFja19yZXF1aXJlX18oMTApICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fKDkpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKi8gfSksXG4vKiA0OCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qc1xudmFyIGVzNl9yZWdleHBfbWF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg0KTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiBleHRlcm5hbCBcInJlYWN0XCJcbnZhciBleHRlcm5hbF9yZWFjdF8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIGV4dGVybmFsX3JlYWN0X2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGV4dGVybmFsX3JlYWN0Xyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vY29tcG9uZW50cy9XcmFwcGVyL2luZGV4LmpzXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi92YXIgV3JhcHBlcl9XcmFwcGVyPWZ1bmN0aW9uIFdyYXBwZXIoX3JlZil7dmFyIGNoaWxkcmVuPV9yZWYuY2hpbGRyZW47cmV0dXJuIGV4dGVybmFsX3JlYWN0X2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KGV4dGVybmFsX3JlYWN0X1tcIkZyYWdtZW50XCJdLG51bGwsY2hpbGRyZW4pO307LyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19XcmFwcGVyID0gKFdyYXBwZXJfV3JhcHBlcik7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL2NvbXBvbmVudHMvaW5kZXguanNcbi8qIGVzbGludC1kaXNhYmxlICovdmFyIHdpbmRvd0V4aXN0cz1mdW5jdGlvbiB3aW5kb3dFeGlzdHMoKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe3JldHVybiBmYWxzZTt9dHJ5e3ZhciBlbnY9XCJwcm9kdWN0aW9uXCIudG9Mb3dlckNhc2UoKTtyZXR1cm4hZW52Lm1hdGNoKC90ZXN0Lyk7fWNhdGNoKGUpe3JldHVybiB0cnVlO319Oy8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHMgPSBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICgoZnVuY3Rpb24oKXt2YXIgZXhwb3J0ZWQ7aWYod2luZG93RXhpc3RzKCkpe2V4cG9ydGVkPV9fd2VicGFja19yZXF1aXJlX18oODIpLmRlZmF1bHQ7fWVsc2V7Ly8gTk9URTogU1NSIHN1cHBvcnRcbmV4cG9ydGVkPV9fd2VicGFja19yZXF1aXJlX18oNDkpLmRlZmF1bHQ7fWV4cG9ydGVkLldyYXBwZXI9Y29tcG9uZW50c19XcmFwcGVyO3JldHVybiBleHBvcnRlZDt9KSgpKTtcblxuLyoqKi8gfSksXG4vKiA0OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXM3X3N5bWJvbF9hc3luY19pdGVyYXRvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzN19zeW1ib2xfYXN5bmNfaXRlcmF0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXM3X3N5bWJvbF9hc3luY19pdGVyYXRvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXM2X3N5bWJvbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9zeW1ib2xfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXM2X3N5bWJvbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Mb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zZWxlY3RvcnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iail7aWYodHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCIpe190eXBlb2Y9ZnVuY3Rpb24gX3R5cGVvZihvYmope3JldHVybiB0eXBlb2Ygb2JqO307fWVsc2V7X3R5cGVvZj1mdW5jdGlvbiBfdHlwZW9mKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9O31yZXR1cm4gX3R5cGVvZihvYmopO31mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsQ29uc3RydWN0b3Ipe2lmKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3Rvcikpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX1mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGU9dHJ1ZTtpZihcInZhbHVlXCJpbiBkZXNjcmlwdG9yKWRlc2NyaXB0b3Iud3JpdGFibGU9dHJ1ZTtPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpO319ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLHByb3RvUHJvcHMsc3RhdGljUHJvcHMpe2lmKHByb3RvUHJvcHMpX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpO2lmKHN0YXRpY1Byb3BzKV9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fWZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsY2FsbCl7aWYoY2FsbCYmKF90eXBlb2YoY2FsbCk9PT1cIm9iamVjdFwifHx0eXBlb2YgY2FsbD09PVwiZnVuY3Rpb25cIikpe3JldHVybiBjYWxsO31yZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTt9ZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKXtpZihzZWxmPT09dm9pZCAwKXt0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7fXJldHVybiBzZWxmO31mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobyl7X2dldFByb3RvdHlwZU9mPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pe3JldHVybiBvLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO307cmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTt9ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLHN1cGVyQ2xhc3Mpe2lmKHR5cGVvZiBzdXBlckNsYXNzIT09XCJmdW5jdGlvblwiJiZzdXBlckNsYXNzIT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO31zdWJDbGFzcy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzJiZzdXBlckNsYXNzLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnN1YkNsYXNzLHdyaXRhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWV9fSk7aWYoc3VwZXJDbGFzcylfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3Msc3VwZXJDbGFzcyk7fWZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLHApe19zZXRQcm90b3R5cGVPZj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLHApe28uX19wcm90b19fPXA7cmV0dXJuIG87fTtyZXR1cm4gX3NldFByb3RvdHlwZU9mKG8scCk7fS8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqLyAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovLy8gTk9URTogU1NSIHN1cHBvcnRcbnZhciBSZWFjdEZ1bGxwYWdlU2hlbGw9LyojX19QVVJFX18qL2Z1bmN0aW9uKF9SZWFjdCRDb21wb25lbnQpe19pbmhlcml0cyhSZWFjdEZ1bGxwYWdlU2hlbGwsX1JlYWN0JENvbXBvbmVudCk7ZnVuY3Rpb24gUmVhY3RGdWxscGFnZVNoZWxsKHByb3BzKXt2YXIgX3RoaXM7X2NsYXNzQ2FsbENoZWNrKHRoaXMsUmVhY3RGdWxscGFnZVNoZWxsKTtfdGhpcz1fcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLF9nZXRQcm90b3R5cGVPZihSZWFjdEZ1bGxwYWdlU2hlbGwpLmNhbGwodGhpcyxwcm9wcykpO190aGlzLnN0YXRlPXt9O190aGlzLmxvZz1PYmplY3QoX0xvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fWy8qIGRlZmF1bHQgKi8gXCJhXCJdKShfdGhpcy5wcm9wcy5kZWJ1ZywnUmVhY3RGdWxscGFnZVNoZWxsJyk7X3RoaXMubG9nKCdCdWlsZGluZyBjb21wb25lbnQnKTtyZXR1cm4gX3RoaXM7fV9jcmVhdGVDbGFzcyhSZWFjdEZ1bGxwYWdlU2hlbGwsW3trZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbiByZW5kZXIoKXtyZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDpfc2VsZWN0b3JzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bLyogTUFJTl9TRUxFQ1RPUiAqLyBcImRcIl19LHRoaXMucHJvcHMucmVuZGVyKHRoaXMpKTt9fV0pO3JldHVybiBSZWFjdEZ1bGxwYWdlU2hlbGw7fShyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5Db21wb25lbnQpOy8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoUmVhY3RGdWxscGFnZVNoZWxsKTtcblxuLyoqKi8gfSksXG4vKiA1MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG53aW5kb3cuZnBfZWFzaW5ncz17ZGVmOlwiZWFzZU91dFF1YWRcIixsaW5lYXI6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUqbi91K3R9LHN3aW5nOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiB3aW5kb3cuZnBfZWFzaW5nc1t3aW5kb3cuZnBfZWFzaW5ncy5kZWZdKG4sdCxlLHUpfSxlYXNlSW5RdWFkOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiBlKihuLz11KSpuK3R9LGVhc2VPdXRRdWFkOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybi1lKihuLz11KSoobi0yKSt0fSxlYXNlSW5PdXRRdWFkOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybihuLz11LzIpPDE/ZS8yKm4qbit0Oi1lLzIqKC0tbioobi0yKS0xKSt0fSxlYXNlSW5DdWJpYzpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gZSoobi89dSkqbipuK3R9LGVhc2VPdXRDdWJpYzpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gZSooKG49bi91LTEpKm4qbisxKSt0fSxlYXNlSW5PdXRDdWJpYzpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4obi89dS8yKTwxP2UvMipuKm4qbit0OmUvMiooKG4tPTIpKm4qbisyKSt0fSxlYXNlSW5RdWFydDpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gZSoobi89dSkqbipuKm4rdH0sZWFzZU91dFF1YXJ0OmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybi1lKigobj1uL3UtMSkqbipuKm4tMSkrdH0sZWFzZUluT3V0UXVhcnQ6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuKG4vPXUvMik8MT9lLzIqbipuKm4qbit0Oi1lLzIqKChuLT0yKSpuKm4qbi0yKSt0fSxlYXNlSW5RdWludDpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gZSoobi89dSkqbipuKm4qbit0fSxlYXNlT3V0UXVpbnQ6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUqKChuPW4vdS0xKSpuKm4qbipuKzEpK3R9LGVhc2VJbk91dFF1aW50OmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybihuLz11LzIpPDE/ZS8yKm4qbipuKm4qbit0OmUvMiooKG4tPTIpKm4qbipuKm4rMikrdH0sZWFzZUluU2luZTpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4tZSpNYXRoLmNvcyhuL3UqKE1hdGguUEkvMikpK2UrdH0sZWFzZU91dFNpbmU6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUqTWF0aC5zaW4obi91KihNYXRoLlBJLzIpKSt0fSxlYXNlSW5PdXRTaW5lOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybi1lLzIqKE1hdGguY29zKE1hdGguUEkqbi91KS0xKSt0fSxlYXNlSW5FeHBvOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiAwPT1uP3Q6ZSpNYXRoLnBvdygyLDEwKihuL3UtMSkpK3R9LGVhc2VPdXRFeHBvOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiBuPT11P3QrZTplKigxLU1hdGgucG93KDIsLTEwKm4vdSkpK3R9LGVhc2VJbk91dEV4cG86ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIDA9PW4/dDpuPT11P3QrZToobi89dS8yKTwxP2UvMipNYXRoLnBvdygyLDEwKihuLTEpKSt0OmUvMiooMi1NYXRoLnBvdygyLC0xMCotLW4pKSt0fSxlYXNlSW5DaXJjOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybi1lKihNYXRoLnNxcnQoMS0obi89dSkqbiktMSkrdH0sZWFzZU91dENpcmM6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUqTWF0aC5zcXJ0KDEtKG49bi91LTEpKm4pK3R9LGVhc2VJbk91dENpcmM6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuKG4vPXUvMik8MT8tZS8yKihNYXRoLnNxcnQoMS1uKm4pLTEpK3Q6ZS8yKihNYXRoLnNxcnQoMS0obi09MikqbikrMSkrdH0sZWFzZUluRWxhc3RpYzpmdW5jdGlvbihuLHQsZSx1KXt2YXIgYT0xLjcwMTU4LHI9MCxpPWU7aWYoMD09bilyZXR1cm4gdDtpZigxPT0obi89dSkpcmV0dXJuIHQrZTtpZihyfHwocj0uMyp1KSxpPE1hdGguYWJzKGUpKXtpPWU7YT1yLzR9ZWxzZSBhPXIvKDIqTWF0aC5QSSkqTWF0aC5hc2luKGUvaSk7cmV0dXJuLWkqTWF0aC5wb3coMiwxMCoobi09MSkpKk1hdGguc2luKChuKnUtYSkqKDIqTWF0aC5QSSkvcikrdH0sZWFzZU91dEVsYXN0aWM6ZnVuY3Rpb24obix0LGUsdSl7dmFyIGE9MS43MDE1OCxyPTAsaT1lO2lmKDA9PW4pcmV0dXJuIHQ7aWYoMT09KG4vPXUpKXJldHVybiB0K2U7aWYocnx8KHI9LjMqdSksaTxNYXRoLmFicyhlKSl7aT1lO2E9ci80fWVsc2UgYT1yLygyKk1hdGguUEkpKk1hdGguYXNpbihlL2kpO3JldHVybiBpKk1hdGgucG93KDIsLTEwKm4pKk1hdGguc2luKChuKnUtYSkqKDIqTWF0aC5QSSkvcikrZSt0fSxlYXNlSW5PdXRFbGFzdGljOmZ1bmN0aW9uKG4sdCxlLHUpe3ZhciBhPTEuNzAxNTgscj0wLGk9ZTtpZigwPT1uKXJldHVybiB0O2lmKDI9PShuLz11LzIpKXJldHVybiB0K2U7aWYocnx8KHI9dSooLjMqMS41KSksaTxNYXRoLmFicyhlKSl7aT1lO2E9ci80fWVsc2UgYT1yLygyKk1hdGguUEkpKk1hdGguYXNpbihlL2kpO3JldHVybiBuPDE/aSpNYXRoLnBvdygyLDEwKihuLT0xKSkqTWF0aC5zaW4oKG4qdS1hKSooMipNYXRoLlBJKS9yKSotLjUrdDppKk1hdGgucG93KDIsLTEwKihuLT0xKSkqTWF0aC5zaW4oKG4qdS1hKSooMipNYXRoLlBJKS9yKSouNStlK3R9LGVhc2VJbkJhY2s6ZnVuY3Rpb24obix0LGUsdSxhKXtyZXR1cm4gbnVsbD09YSYmKGE9MS43MDE1OCksZSoobi89dSkqbiooKGErMSkqbi1hKSt0fSxlYXNlT3V0QmFjazpmdW5jdGlvbihuLHQsZSx1LGEpe3JldHVybiBudWxsPT1hJiYoYT0xLjcwMTU4KSxlKigobj1uL3UtMSkqbiooKGErMSkqbithKSsxKSt0fSxlYXNlSW5PdXRCYWNrOmZ1bmN0aW9uKG4sdCxlLHUsYSl7cmV0dXJuIG51bGw9PWEmJihhPTEuNzAxNTgpLChuLz11LzIpPDE/ZS8yKihuKm4qKCgxKyhhKj0xLjUyNSkpKm4tYSkpK3Q6ZS8yKigobi09MikqbiooKDErKGEqPTEuNTI1KSkqbithKSsyKSt0fSxlYXNlSW5Cb3VuY2U6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUtd2luZG93LmZwX2Vhc2luZ3MuZWFzZU91dEJvdW5jZSh1LW4sMCxlLHUpK3R9LGVhc2VPdXRCb3VuY2U6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuKG4vPXUpPDEvMi43NT9lKig3LjU2MjUqbipuKSt0Om48Mi8yLjc1P2UqKDcuNTYyNSoobi09MS41LzIuNzUpKm4rLjc1KSt0Om48Mi41LzIuNzU/ZSooNy41NjI1KihuLT0yLjI1LzIuNzUpKm4rLjkzNzUpK3Q6ZSooNy41NjI1KihuLT0yLjYyNS8yLjc1KSpuKy45ODQzNzUpK3R9LGVhc2VJbk91dEJvdW5jZTpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gbjx1LzI/LjUqd2luZG93LmZwX2Vhc2luZ3MuZWFzZUluQm91bmNlKDIqbiwwLGUsdSkrdDouNSp3aW5kb3cuZnBfZWFzaW5ncy5lYXNlT3V0Qm91bmNlKDIqbi11LDAsZSx1KSsuNSplK3R9fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVhc2luZ3MubWluLmpzLm1hcFxuXG5cbi8qKiovIH0pLFxuLyogNTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOy8qKlxuKiBDdXN0b21pemVkIHZlcnNpb24gb2YgaVNjcm9sbC5qcyAwLjEuM1xuKiBJdCBmaXhlcyBidWdzIGFmZmVjdGluZyBpdHMgaW50ZWdyYXRpb24gd2l0aCBmdWxscGFnZS5qc1xuKiBAbGljZW5zZVxuKi9cbiFmdW5jdGlvbihyLG4scCl7dmFyIGY9ci5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHIud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxyLm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8ci5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxyLm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbih0KXtyLnNldFRpbWVvdXQodCwxZTMvNjApfSxtPWZ1bmN0aW9uKCl7dmFyIGU9e30sbz1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsaT1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXCJ0XCIsXCJ3ZWJraXRUXCIsXCJNb3pUXCIsXCJtc1RcIixcIk9UXCJdLGk9MCxzPXQubGVuZ3RoO2k8cztpKyspaWYodFtpXStcInJhbnNmb3JtXCJpbiBvKXJldHVybiB0W2ldLnN1YnN0cigwLHRbaV0ubGVuZ3RoLTEpO3JldHVybiExfSgpO2Z1bmN0aW9uIHQodCl7cmV0dXJuITEhPT1pJiYoXCJcIj09PWk/dDppK3QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zdWJzdHIoMSkpfWUuZ2V0VGltZT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKX0sZS5leHRlbmQ9ZnVuY3Rpb24odCxpKXtmb3IodmFyIHMgaW4gaSl0W3NdPWlbc119LGUuYWRkRXZlbnQ9ZnVuY3Rpb24odCxpLHMsZSl7dC5hZGRFdmVudExpc3RlbmVyKGkscywhIWUpfSxlLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKHQsaSxzLGUpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLHMsISFlKX0sZS5wcmVmaXhQb2ludGVyRXZlbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHIuTVNQb2ludGVyRXZlbnQ/XCJNU1BvaW50ZXJcIit0LmNoYXJBdCg3KS50b1VwcGVyQ2FzZSgpK3Quc3Vic3RyKDgpOnR9LGUubW9tZW50dW09ZnVuY3Rpb24odCxpLHMsZSxvLG4pe3ZhciByLGgsYT10LWksbD1wLmFicyhhKS9zO3JldHVybiBoPWwvKG49dm9pZCAwPT09bj82ZS00Om4pLChyPXQrbCpsLygyKm4pKihhPDA/LTE6MSkpPGU/KHI9bz9lLW8vMi41KihsLzgpOmUsaD0oYT1wLmFicyhyLXQpKS9sKTowPHImJihyPW8/by8yLjUqKGwvOCk6MCxoPShhPXAuYWJzKHQpK3IpL2wpLHtkZXN0aW5hdGlvbjpwLnJvdW5kKHIpLGR1cmF0aW9uOmh9fTt2YXIgcz10KFwidHJhbnNmb3JtXCIpO3JldHVybiBlLmV4dGVuZChlLHtoYXNUcmFuc2Zvcm06ITEhPT1zLGhhc1BlcnNwZWN0aXZlOnQoXCJwZXJzcGVjdGl2ZVwiKWluIG8saGFzVG91Y2g6XCJvbnRvdWNoc3RhcnRcImluIHIsaGFzUG9pbnRlcjohKCFyLlBvaW50ZXJFdmVudCYmIXIuTVNQb2ludGVyRXZlbnQpLGhhc1RyYW5zaXRpb246dChcInRyYW5zaXRpb25cIilpbiBvfSksZS5pc0JhZEFuZHJvaWQ9ZnVuY3Rpb24oKXt2YXIgdD1yLm5hdmlnYXRvci5hcHBWZXJzaW9uO2lmKCEvQW5kcm9pZC8udGVzdCh0KXx8L0Nocm9tZVxcL1xcZC8udGVzdCh0KSlyZXR1cm4hMTt2YXIgaT10Lm1hdGNoKC9TYWZhcmlcXC8oXFxkKy5cXGQpLyk7cmV0dXJuIShpJiZcIm9iamVjdFwiPT10eXBlb2YgaSYmMjw9aS5sZW5ndGgpfHxwYXJzZUZsb2F0KGlbMV0pPDUzNS4xOX0oKSxlLmV4dGVuZChlLnN0eWxlPXt9LHt0cmFuc2Zvcm06cyx0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246dChcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiKSx0cmFuc2l0aW9uRHVyYXRpb246dChcInRyYW5zaXRpb25EdXJhdGlvblwiKSx0cmFuc2l0aW9uRGVsYXk6dChcInRyYW5zaXRpb25EZWxheVwiKSx0cmFuc2Zvcm1PcmlnaW46dChcInRyYW5zZm9ybU9yaWdpblwiKX0pLGUuaGFzQ2xhc3M9ZnVuY3Rpb24odCxpKXtyZXR1cm4gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK2krXCIoXFxcXHN8JClcIikudGVzdCh0LmNsYXNzTmFtZSl9LGUuYWRkQ2xhc3M9ZnVuY3Rpb24odCxpKXtpZighZS5oYXNDbGFzcyh0LGkpKXt2YXIgcz10LmNsYXNzTmFtZS5zcGxpdChcIiBcIik7cy5wdXNoKGkpLHQuY2xhc3NOYW1lPXMuam9pbihcIiBcIil9fSxlLnJlbW92ZUNsYXNzPWZ1bmN0aW9uKHQsaSl7aWYoZS5oYXNDbGFzcyh0LGkpKXt2YXIgcz1uZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIraStcIihcXFxcc3wkKVwiLFwiZ1wiKTt0LmNsYXNzTmFtZT10LmNsYXNzTmFtZS5yZXBsYWNlKHMsXCIgXCIpfX0sZS5vZmZzZXQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBpPS10Lm9mZnNldExlZnQscz0tdC5vZmZzZXRUb3A7dD10Lm9mZnNldFBhcmVudDspaS09dC5vZmZzZXRMZWZ0LHMtPXQub2Zmc2V0VG9wO3JldHVybntsZWZ0OmksdG9wOnN9fSxlLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uPWZ1bmN0aW9uKHQsaSl7Zm9yKHZhciBzIGluIGkpaWYoaVtzXS50ZXN0KHRbc10pKXJldHVybiEwO3JldHVybiExfSxlLmV4dGVuZChlLmV2ZW50VHlwZT17fSx7dG91Y2hzdGFydDoxLHRvdWNobW92ZToxLHRvdWNoZW5kOjEsbW91c2Vkb3duOjIsbW91c2Vtb3ZlOjIsbW91c2V1cDoyLHBvaW50ZXJkb3duOjMscG9pbnRlcm1vdmU6Myxwb2ludGVydXA6MyxNU1BvaW50ZXJEb3duOjMsTVNQb2ludGVyTW92ZTozLE1TUG9pbnRlclVwOjN9KSxlLmV4dGVuZChlLmVhc2U9e30se3F1YWRyYXRpYzp7c3R5bGU6XCJjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NClcIixmbjpmdW5jdGlvbih0KXtyZXR1cm4gdCooMi10KX19LGNpcmN1bGFyOntzdHlsZTpcImN1YmljLWJlemllcigwLjEsIDAuNTcsIDAuMSwgMSlcIixmbjpmdW5jdGlvbih0KXtyZXR1cm4gcC5zcXJ0KDEtIC0tdCp0KX19LGJhY2s6e3N0eWxlOlwiY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpXCIsZm46ZnVuY3Rpb24odCl7cmV0dXJuKHQtPTEpKnQqKDUqdCs0KSsxfX0sYm91bmNlOntzdHlsZTpcIlwiLGZuOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0xKTwxLzIuNzU/Ny41NjI1KnQqdDp0PDIvMi43NT83LjU2MjUqKHQtPTEuNS8yLjc1KSp0Ky43NTp0PDIuNS8yLjc1PzcuNTYyNSoodC09Mi4yNS8yLjc1KSp0Ky45Mzc1OjcuNTYyNSoodC09Mi42MjUvMi43NSkqdCsuOTg0Mzc1fX0sZWxhc3RpYzp7c3R5bGU6XCJcIixmbjpmdW5jdGlvbih0KXtyZXR1cm4gMD09PXQ/MDoxPT10PzE6LjQqcC5wb3coMiwtMTAqdCkqcC5zaW4oKHQtLjA1NSkqKDIqcC5QSSkvLjIyKSsxfX19KSxlLnRhcD1mdW5jdGlvbih0LGkpe3ZhciBzPW4uY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtzLmluaXRFdmVudChpLCEwLCEwKSxzLnBhZ2VYPXQucGFnZVgscy5wYWdlWT10LnBhZ2VZLHQudGFyZ2V0LmRpc3BhdGNoRXZlbnQocyl9LGUuY2xpY2s9ZnVuY3Rpb24odCl7dmFyIGkscz10LnRhcmdldDsvKFNFTEVDVHxJTlBVVHxURVhUQVJFQSkvaS50ZXN0KHMudGFnTmFtZSl8fCgoaT1uLmNyZWF0ZUV2ZW50KHIuTW91c2VFdmVudD9cIk1vdXNlRXZlbnRzXCI6XCJFdmVudFwiKSkuaW5pdEV2ZW50KFwiY2xpY2tcIiwhMCwhMCksaS52aWV3PXQudmlld3x8cixpLmRldGFpbD0xLGkuc2NyZWVuWD1zLnNjcmVlblh8fDAsaS5zY3JlZW5ZPXMuc2NyZWVuWXx8MCxpLmNsaWVudFg9cy5jbGllbnRYfHwwLGkuY2xpZW50WT1zLmNsaWVudFl8fDAsaS5jdHJsS2V5PSEhdC5jdHJsS2V5LGkuYWx0S2V5PSEhdC5hbHRLZXksaS5zaGlmdEtleT0hIXQuc2hpZnRLZXksaS5tZXRhS2V5PSEhdC5tZXRhS2V5LGkuYnV0dG9uPTAsaS5yZWxhdGVkVGFyZ2V0PW51bGwsaS5fY29uc3RydWN0ZWQ9ITAscy5kaXNwYXRjaEV2ZW50KGkpKX0sZX0oKTtmdW5jdGlvbiB0KHQsaSl7Zm9yKHZhciBzIGluIHRoaXMud3JhcHBlcj1cInN0cmluZ1wiPT10eXBlb2YgdD9uLnF1ZXJ5U2VsZWN0b3IodCk6dCx0aGlzLnNjcm9sbGVyPXRoaXMud3JhcHBlci5jaGlsZHJlblswXSx0aGlzLnNjcm9sbGVyU3R5bGU9dGhpcy5zY3JvbGxlci5zdHlsZSx0aGlzLm9wdGlvbnM9e3Jlc2l6ZVNjcm9sbGJhcnM6ITAsbW91c2VXaGVlbFNwZWVkOjIwLHNuYXBUaHJlc2hvbGQ6LjMzNCxkaXNhYmxlUG9pbnRlcjohbS5oYXNQb2ludGVyLGRpc2FibGVUb3VjaDptLmhhc1BvaW50ZXJ8fCFtLmhhc1RvdWNoLGRpc2FibGVNb3VzZTptLmhhc1BvaW50ZXJ8fG0uaGFzVG91Y2gsc3RhcnRYOjAsc3RhcnRZOjAsc2Nyb2xsWTohMCxkaXJlY3Rpb25Mb2NrVGhyZXNob2xkOjUsbW9tZW50dW06ITAsYm91bmNlOiEwLGJvdW5jZVRpbWU6NjAwLGJvdW5jZUVhc2luZzpcIlwiLHByZXZlbnREZWZhdWx0OiEwLHByZXZlbnREZWZhdWx0RXhjZXB0aW9uOnt0YWdOYW1lOi9eKElOUFVUfFRFWFRBUkVBfEJVVFRPTnxTRUxFQ1R8TEFCRUwpJC99LEhXQ29tcG9zaXRpbmc6ITAsdXNlVHJhbnNpdGlvbjohMCx1c2VUcmFuc2Zvcm06ITAsYmluZFRvV3JhcHBlcjp2b2lkIDA9PT1yLm9ubW91c2Vkb3dufSxpKXRoaXMub3B0aW9uc1tzXT1pW3NdO3RoaXMudHJhbnNsYXRlWj10aGlzLm9wdGlvbnMuSFdDb21wb3NpdGluZyYmbS5oYXNQZXJzcGVjdGl2ZT9cIiB0cmFuc2xhdGVaKDApXCI6XCJcIix0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbj1tLmhhc1RyYW5zaXRpb24mJnRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uLHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm09bS5oYXNUcmFuc2Zvcm0mJnRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0sdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2g9ITA9PT10aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaD9cInZlcnRpY2FsXCI6dGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gsdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0PSF0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCYmdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0LHRoaXMub3B0aW9ucy5zY3JvbGxZPVwidmVydGljYWxcIiE9dGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gmJnRoaXMub3B0aW9ucy5zY3JvbGxZLHRoaXMub3B0aW9ucy5zY3JvbGxYPVwiaG9yaXpvbnRhbFwiIT10aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCYmdGhpcy5vcHRpb25zLnNjcm9sbFgsdGhpcy5vcHRpb25zLmZyZWVTY3JvbGw9dGhpcy5vcHRpb25zLmZyZWVTY3JvbGwmJiF0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCx0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZD10aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaD8wOnRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkLHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc/bS5lYXNlW3RoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmddfHxtLmVhc2UuY2lyY3VsYXI6dGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyx0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZz12b2lkIDA9PT10aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZz82MDp0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZywhMD09PXRoaXMub3B0aW9ucy50YXAmJih0aGlzLm9wdGlvbnMudGFwPVwidGFwXCIpLHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9ufHx0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtfHwvcmVsYXRpdmV8YWJzb2x1dGUvaS50ZXN0KHRoaXMuc2Nyb2xsZXJTdHlsZS5wb3NpdGlvbil8fCh0aGlzLnNjcm9sbGVyU3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxcInNjYWxlXCI9PXRoaXMub3B0aW9ucy5zaHJpbmtTY3JvbGxiYXJzJiYodGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb249ITEpLHRoaXMub3B0aW9ucy5pbnZlcnRXaGVlbERpcmVjdGlvbj10aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24/LTE6MSx0aGlzLng9MCx0aGlzLnk9MCx0aGlzLmRpcmVjdGlvblg9MCx0aGlzLmRpcmVjdGlvblk9MCx0aGlzLl9ldmVudHM9e30sdGhpcy5faW5pdCgpLHRoaXMucmVmcmVzaCgpLHRoaXMuc2Nyb2xsVG8odGhpcy5vcHRpb25zLnN0YXJ0WCx0aGlzLm9wdGlvbnMuc3RhcnRZKSx0aGlzLmVuYWJsZSgpfWZ1bmN0aW9uIGgodCxpLHMpe3ZhciBlPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKSxvPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4hMD09PXMmJihlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OTlcIixvLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7Ym9yZGVyLXJhZGl1czozcHhcIiksby5jbGFzc05hbWU9XCJpU2Nyb2xsSW5kaWNhdG9yXCIsZS5jbGFzc05hbWU9XCJoXCI9PXQ/KCEwPT09cyYmKGUuc3R5bGUuY3NzVGV4dCs9XCI7aGVpZ2h0OjdweDtsZWZ0OjJweDtyaWdodDoycHg7Ym90dG9tOjBcIixvLnN0eWxlLmhlaWdodD1cIjEwMCVcIiksXCJpU2Nyb2xsSG9yaXpvbnRhbFNjcm9sbGJhclwiKTooITA9PT1zJiYoZS5zdHlsZS5jc3NUZXh0Kz1cIjt3aWR0aDo3cHg7Ym90dG9tOjJweDt0b3A6MnB4O3JpZ2h0OjFweFwiLG8uc3R5bGUud2lkdGg9XCIxMDAlXCIpLFwiaVNjcm9sbFZlcnRpY2FsU2Nyb2xsYmFyXCIpLGUuc3R5bGUuY3NzVGV4dCs9XCI7b3ZlcmZsb3c6aGlkZGVuXCIsaXx8KGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIiksZS5hcHBlbmRDaGlsZChvKSxlfWZ1bmN0aW9uIGEodCxpKXtmb3IodmFyIHMgaW4gdGhpcy53cmFwcGVyPVwic3RyaW5nXCI9PXR5cGVvZiBpLmVsP24ucXVlcnlTZWxlY3RvcihpLmVsKTppLmVsLHRoaXMud3JhcHBlclN0eWxlPXRoaXMud3JhcHBlci5zdHlsZSx0aGlzLmluZGljYXRvcj10aGlzLndyYXBwZXIuY2hpbGRyZW5bMF0sdGhpcy5pbmRpY2F0b3JTdHlsZT10aGlzLmluZGljYXRvci5zdHlsZSx0aGlzLnNjcm9sbGVyPXQsdGhpcy5vcHRpb25zPXtsaXN0ZW5YOiEwLGxpc3Rlblk6ITAsaW50ZXJhY3RpdmU6ITEscmVzaXplOiEwLGRlZmF1bHRTY3JvbGxiYXJzOiExLHNocmluazohMSxmYWRlOiExLHNwZWVkUmF0aW9YOjAsc3BlZWRSYXRpb1k6MH0saSl0aGlzLm9wdGlvbnNbc109aVtzXTtpZih0aGlzLnNpemVSYXRpb1g9MSx0aGlzLnNpemVSYXRpb1k9MSx0aGlzLm1heFBvc1g9MCx0aGlzLm1heFBvc1k9MCx0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUmJih0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNofHwobS5hZGRFdmVudCh0aGlzLmluZGljYXRvcixcInRvdWNoc3RhcnRcIix0aGlzKSxtLmFkZEV2ZW50KHIsXCJ0b3VjaGVuZFwiLHRoaXMpKSx0aGlzLm9wdGlvbnMuZGlzYWJsZVBvaW50ZXJ8fChtLmFkZEV2ZW50KHRoaXMuaW5kaWNhdG9yLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcmRvd25cIiksdGhpcyksbS5hZGRFdmVudChyLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcnVwXCIpLHRoaXMpKSx0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlfHwobS5hZGRFdmVudCh0aGlzLmluZGljYXRvcixcIm1vdXNlZG93blwiLHRoaXMpLG0uYWRkRXZlbnQocixcIm1vdXNldXBcIix0aGlzKSkpLHRoaXMub3B0aW9ucy5mYWRlKXt0aGlzLndyYXBwZXJTdHlsZVttLnN0eWxlLnRyYW5zZm9ybV09dGhpcy5zY3JvbGxlci50cmFuc2xhdGVaO3ZhciBlPW0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uO2lmKCFlKXJldHVybjt0aGlzLndyYXBwZXJTdHlsZVtlXT1tLmlzQmFkQW5kcm9pZD9cIjAuMDAwMW1zXCI6XCIwbXNcIjt2YXIgbz10aGlzO20uaXNCYWRBbmRyb2lkJiZmKGZ1bmN0aW9uKCl7XCIwLjAwMDFtc1wiPT09by53cmFwcGVyU3R5bGVbZV0mJihvLndyYXBwZXJTdHlsZVtlXT1cIjBzXCIpfSksdGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eT1cIjBcIn19dC5wcm90b3R5cGU9e3ZlcnNpb246XCI1LjIuMFwiLF9pbml0OmZ1bmN0aW9uKCl7dGhpcy5faW5pdEV2ZW50cygpLCh0aGlzLm9wdGlvbnMuc2Nyb2xsYmFyc3x8dGhpcy5vcHRpb25zLmluZGljYXRvcnMpJiZ0aGlzLl9pbml0SW5kaWNhdG9ycygpLHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsJiZ0aGlzLl9pbml0V2hlZWwoKSx0aGlzLm9wdGlvbnMuc25hcCYmdGhpcy5faW5pdFNuYXAoKSx0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MmJnRoaXMuX2luaXRLZXlzKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLl9pbml0RXZlbnRzKCEwKSxjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KSx0aGlzLnJlc2l6ZVRpbWVvdXQ9bnVsbCx0aGlzLl9leGVjRXZlbnQoXCJkZXN0cm95XCIpfSxfdHJhbnNpdGlvbkVuZDpmdW5jdGlvbih0KXt0LnRhcmdldD09dGhpcy5zY3JvbGxlciYmdGhpcy5pc0luVHJhbnNpdGlvbiYmKHRoaXMuX3RyYW5zaXRpb25UaW1lKCksdGhpcy5yZXNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5ib3VuY2VUaW1lKXx8KHRoaXMuaXNJblRyYW5zaXRpb249ITEsdGhpcy5fZXhlY0V2ZW50KFwic2Nyb2xsRW5kXCIpKSl9LF9zdGFydDpmdW5jdGlvbih0KXtpZigxIT1tLmV2ZW50VHlwZVt0LnR5cGVdJiYwIT09KHQud2hpY2g/dC5idXR0b246dC5idXR0b248Mj8wOjQ9PXQuYnV0dG9uPzE6MikpcmV0dXJuO2lmKHRoaXMuZW5hYmxlZCYmKCF0aGlzLmluaXRpYXRlZHx8bS5ldmVudFR5cGVbdC50eXBlXT09PXRoaXMuaW5pdGlhdGVkKSl7IXRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdHx8bS5pc0JhZEFuZHJvaWR8fG0ucHJldmVudERlZmF1bHRFeGNlcHRpb24odC50YXJnZXQsdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKXx8dC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBpLHM9dC50b3VjaGVzP3QudG91Y2hlc1swXTp0O3RoaXMuaW5pdGlhdGVkPW0uZXZlbnRUeXBlW3QudHlwZV0sdGhpcy5tb3ZlZD0hMSx0aGlzLmRpc3RYPTAsdGhpcy5kaXN0WT0wLHRoaXMuZGlyZWN0aW9uWD0wLHRoaXMuZGlyZWN0aW9uWT0wLHRoaXMuZGlyZWN0aW9uTG9ja2VkPTAsdGhpcy5zdGFydFRpbWU9bS5nZXRUaW1lKCksdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24mJnRoaXMuaXNJblRyYW5zaXRpb24/KHRoaXMuX3RyYW5zaXRpb25UaW1lKCksdGhpcy5pc0luVHJhbnNpdGlvbj0hMSxpPXRoaXMuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpLHRoaXMuX3RyYW5zbGF0ZShwLnJvdW5kKGkueCkscC5yb3VuZChpLnkpKSx0aGlzLl9leGVjRXZlbnQoXCJzY3JvbGxFbmRcIikpOiF0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiYmdGhpcy5pc0FuaW1hdGluZyYmKHRoaXMuaXNBbmltYXRpbmc9ITEsdGhpcy5fZXhlY0V2ZW50KFwic2Nyb2xsRW5kXCIpKSx0aGlzLnN0YXJ0WD10aGlzLngsdGhpcy5zdGFydFk9dGhpcy55LHRoaXMuYWJzU3RhcnRYPXRoaXMueCx0aGlzLmFic1N0YXJ0WT10aGlzLnksdGhpcy5wb2ludFg9cy5wYWdlWCx0aGlzLnBvaW50WT1zLnBhZ2VZLHRoaXMuX2V4ZWNFdmVudChcImJlZm9yZVNjcm9sbFN0YXJ0XCIpfX0sX21vdmU6ZnVuY3Rpb24odCl7aWYodGhpcy5lbmFibGVkJiZtLmV2ZW50VHlwZVt0LnR5cGVdPT09dGhpcy5pbml0aWF0ZWQpe3RoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCYmdC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBpLHMsZSxvLG49dC50b3VjaGVzP3QudG91Y2hlc1swXTp0LHI9bi5wYWdlWC10aGlzLnBvaW50WCxoPW4ucGFnZVktdGhpcy5wb2ludFksYT1tLmdldFRpbWUoKTtpZih0aGlzLnBvaW50WD1uLnBhZ2VYLHRoaXMucG9pbnRZPW4ucGFnZVksdGhpcy5kaXN0WCs9cix0aGlzLmRpc3RZKz1oLGU9cC5hYnModGhpcy5kaXN0WCksbz1wLmFicyh0aGlzLmRpc3RZKSwhKDMwMDxhLXRoaXMuZW5kVGltZSYmZTwxMCYmbzwxMCkpe2lmKHRoaXMuZGlyZWN0aW9uTG9ja2VkfHx0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbHx8KGU+byt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZD90aGlzLmRpcmVjdGlvbkxvY2tlZD1cImhcIjpvPj1lK3RoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkP3RoaXMuZGlyZWN0aW9uTG9ja2VkPVwidlwiOnRoaXMuZGlyZWN0aW9uTG9ja2VkPVwiblwiKSxcImhcIj09dGhpcy5kaXJlY3Rpb25Mb2NrZWQpe2lmKFwidmVydGljYWxcIj09dGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gpdC5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgaWYoXCJob3Jpem9udGFsXCI9PXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoKXJldHVybiB2b2lkKHRoaXMuaW5pdGlhdGVkPSExKTtoPTB9ZWxzZSBpZihcInZcIj09dGhpcy5kaXJlY3Rpb25Mb2NrZWQpe2lmKFwiaG9yaXpvbnRhbFwiPT10aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCl0LnByZXZlbnREZWZhdWx0KCk7ZWxzZSBpZihcInZlcnRpY2FsXCI9PXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoKXJldHVybiB2b2lkKHRoaXMuaW5pdGlhdGVkPSExKTtyPTB9cj10aGlzLmhhc0hvcml6b250YWxTY3JvbGw/cjowLGg9dGhpcy5oYXNWZXJ0aWNhbFNjcm9sbD9oOjAsaT10aGlzLngrcixzPXRoaXMueStoLCgwPGl8fGk8dGhpcy5tYXhTY3JvbGxYKSYmKGk9dGhpcy5vcHRpb25zLmJvdW5jZT90aGlzLngrci8zOjA8aT8wOnRoaXMubWF4U2Nyb2xsWCksKDA8c3x8czx0aGlzLm1heFNjcm9sbFkpJiYocz10aGlzLm9wdGlvbnMuYm91bmNlP3RoaXMueStoLzM6MDxzPzA6dGhpcy5tYXhTY3JvbGxZKSx0aGlzLmRpcmVjdGlvblg9MDxyPy0xOnI8MD8xOjAsdGhpcy5kaXJlY3Rpb25ZPTA8aD8tMTpoPDA/MTowLHRoaXMubW92ZWR8fHRoaXMuX2V4ZWNFdmVudChcInNjcm9sbFN0YXJ0XCIpLHRoaXMubW92ZWQ9ITAsdGhpcy5fdHJhbnNsYXRlKGkscyksMzAwPGEtdGhpcy5zdGFydFRpbWUmJih0aGlzLnN0YXJ0VGltZT1hLHRoaXMuc3RhcnRYPXRoaXMueCx0aGlzLnN0YXJ0WT10aGlzLnkpfX19LF9lbmQ6ZnVuY3Rpb24odCl7aWYodGhpcy5lbmFibGVkJiZtLmV2ZW50VHlwZVt0LnR5cGVdPT09dGhpcy5pbml0aWF0ZWQpe3RoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCYmIW0ucHJldmVudERlZmF1bHRFeGNlcHRpb24odC50YXJnZXQsdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSYmdC5wcmV2ZW50RGVmYXVsdCgpO3QuY2hhbmdlZFRvdWNoZXMmJnQuY2hhbmdlZFRvdWNoZXNbMF07dmFyIGkscyxlPW0uZ2V0VGltZSgpLXRoaXMuc3RhcnRUaW1lLG89cC5yb3VuZCh0aGlzLngpLG49cC5yb3VuZCh0aGlzLnkpLHI9cC5hYnMoby10aGlzLnN0YXJ0WCksaD1wLmFicyhuLXRoaXMuc3RhcnRZKSxhPTAsbD1cIlwiO2lmKHRoaXMuaXNJblRyYW5zaXRpb249MCx0aGlzLmluaXRpYXRlZD0wLHRoaXMuZW5kVGltZT1tLmdldFRpbWUoKSwhdGhpcy5yZXNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5ib3VuY2VUaW1lKSl7aWYodGhpcy5zY3JvbGxUbyhvLG4pLCF0aGlzLm1vdmVkKXJldHVybiB0aGlzLm9wdGlvbnMudGFwJiZtLnRhcCh0LHRoaXMub3B0aW9ucy50YXApLHRoaXMub3B0aW9ucy5jbGljayYmbS5jbGljayh0KSx2b2lkIHRoaXMuX2V4ZWNFdmVudChcInNjcm9sbENhbmNlbFwiKTtpZih0aGlzLl9ldmVudHMuZmxpY2smJmU8MjAwJiZyPDEwMCYmaDwxMDApdGhpcy5fZXhlY0V2ZW50KFwiZmxpY2tcIik7ZWxzZXtpZih0aGlzLm9wdGlvbnMubW9tZW50dW0mJmU8MzAwJiYoaT10aGlzLmhhc0hvcml6b250YWxTY3JvbGw/bS5tb21lbnR1bSh0aGlzLngsdGhpcy5zdGFydFgsZSx0aGlzLm1heFNjcm9sbFgsdGhpcy5vcHRpb25zLmJvdW5jZT90aGlzLndyYXBwZXJXaWR0aDowLHRoaXMub3B0aW9ucy5kZWNlbGVyYXRpb24pOntkZXN0aW5hdGlvbjpvLGR1cmF0aW9uOjB9LHM9dGhpcy5oYXNWZXJ0aWNhbFNjcm9sbD9tLm1vbWVudHVtKHRoaXMueSx0aGlzLnN0YXJ0WSxlLHRoaXMubWF4U2Nyb2xsWSx0aGlzLm9wdGlvbnMuYm91bmNlP3RoaXMud3JhcHBlckhlaWdodDowLHRoaXMub3B0aW9ucy5kZWNlbGVyYXRpb24pOntkZXN0aW5hdGlvbjpuLGR1cmF0aW9uOjB9LG89aS5kZXN0aW5hdGlvbixuPXMuZGVzdGluYXRpb24sYT1wLm1heChpLmR1cmF0aW9uLHMuZHVyYXRpb24pLHRoaXMuaXNJblRyYW5zaXRpb249MSksdGhpcy5vcHRpb25zLnNuYXApe3ZhciBjPXRoaXMuX25lYXJlc3RTbmFwKG8sbik7dGhpcy5jdXJyZW50UGFnZT1jLGE9dGhpcy5vcHRpb25zLnNuYXBTcGVlZHx8cC5tYXgocC5tYXgocC5taW4ocC5hYnMoby1jLngpLDFlMykscC5taW4ocC5hYnMobi1jLnkpLDFlMykpLDMwMCksbz1jLngsbj1jLnksdGhpcy5kaXJlY3Rpb25YPTAsdGhpcy5kaXJlY3Rpb25ZPTAsbD10aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nfWlmKG8hPXRoaXMueHx8biE9dGhpcy55KXJldHVybigwPG98fG88dGhpcy5tYXhTY3JvbGxYfHwwPG58fG48dGhpcy5tYXhTY3JvbGxZKSYmKGw9bS5lYXNlLnF1YWRyYXRpYyksdm9pZCB0aGlzLnNjcm9sbFRvKG8sbixhLGwpO3RoaXMuX2V4ZWNFdmVudChcInNjcm9sbEVuZFwiKX19fX0sX3Jlc2l6ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7Y2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCksdGhpcy5yZXNpemVUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnJlZnJlc2goKX0sdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcpfSxyZXNldFBvc2l0aW9uOmZ1bmN0aW9uKHQpe3ZhciBpPXRoaXMueCxzPXRoaXMueTtyZXR1cm4gdD10fHwwLCF0aGlzLmhhc0hvcml6b250YWxTY3JvbGx8fDA8dGhpcy54P2k9MDp0aGlzLng8dGhpcy5tYXhTY3JvbGxYJiYoaT10aGlzLm1heFNjcm9sbFgpLCF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsfHwwPHRoaXMueT9zPTA6dGhpcy55PHRoaXMubWF4U2Nyb2xsWSYmKHM9dGhpcy5tYXhTY3JvbGxZKSwoaSE9dGhpcy54fHxzIT10aGlzLnkpJiYodGhpcy5zY3JvbGxUbyhpLHMsdCx0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nKSwhMCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITF9LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMH0scmVmcmVzaDpmdW5jdGlvbigpe3RoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQ7dGhpcy53cmFwcGVyV2lkdGg9dGhpcy53cmFwcGVyLmNsaWVudFdpZHRoLHRoaXMud3JhcHBlckhlaWdodD10aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0LHRoaXMuc2Nyb2xsZXJXaWR0aD10aGlzLnNjcm9sbGVyLm9mZnNldFdpZHRoLHRoaXMuc2Nyb2xsZXJIZWlnaHQ9dGhpcy5zY3JvbGxlci5vZmZzZXRIZWlnaHQsdGhpcy5tYXhTY3JvbGxYPXRoaXMud3JhcHBlcldpZHRoLXRoaXMuc2Nyb2xsZXJXaWR0aCx0aGlzLm1heFNjcm9sbFk9dGhpcy53cmFwcGVySGVpZ2h0LXRoaXMuc2Nyb2xsZXJIZWlnaHQsdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsPXRoaXMub3B0aW9ucy5zY3JvbGxYJiZ0aGlzLm1heFNjcm9sbFg8MCx0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsPXRoaXMub3B0aW9ucy5zY3JvbGxZJiZ0aGlzLm1heFNjcm9sbFk8MCx0aGlzLmhhc0hvcml6b250YWxTY3JvbGx8fCh0aGlzLm1heFNjcm9sbFg9MCx0aGlzLnNjcm9sbGVyV2lkdGg9dGhpcy53cmFwcGVyV2lkdGgpLHRoaXMuaGFzVmVydGljYWxTY3JvbGx8fCh0aGlzLm1heFNjcm9sbFk9MCx0aGlzLnNjcm9sbGVySGVpZ2h0PXRoaXMud3JhcHBlckhlaWdodCksdGhpcy5lbmRUaW1lPTAsdGhpcy5kaXJlY3Rpb25YPTAsdGhpcy5kaXJlY3Rpb25ZPTAsdGhpcy53cmFwcGVyT2Zmc2V0PW0ub2Zmc2V0KHRoaXMud3JhcHBlciksdGhpcy5fZXhlY0V2ZW50KFwicmVmcmVzaFwiKSx0aGlzLnJlc2V0UG9zaXRpb24oKX0sb246ZnVuY3Rpb24odCxpKXt0aGlzLl9ldmVudHNbdF18fCh0aGlzLl9ldmVudHNbdF09W10pLHRoaXMuX2V2ZW50c1t0XS5wdXNoKGkpfSxvZmY6ZnVuY3Rpb24odCxpKXtpZih0aGlzLl9ldmVudHNbdF0pe3ZhciBzPXRoaXMuX2V2ZW50c1t0XS5pbmRleE9mKGkpOy0xPHMmJnRoaXMuX2V2ZW50c1t0XS5zcGxpY2UocywxKX19LF9leGVjRXZlbnQ6ZnVuY3Rpb24odCl7aWYodGhpcy5fZXZlbnRzW3RdKXt2YXIgaT0wLHM9dGhpcy5fZXZlbnRzW3RdLmxlbmd0aDtpZihzKWZvcig7aTxzO2krKyl0aGlzLl9ldmVudHNbdF1baV0uYXBwbHkodGhpcyxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSl9fSxzY3JvbGxCeTpmdW5jdGlvbih0LGkscyxlKXt0PXRoaXMueCt0LGk9dGhpcy55K2kscz1zfHwwLHRoaXMuc2Nyb2xsVG8odCxpLHMsZSl9LHNjcm9sbFRvOmZ1bmN0aW9uKHQsaSxzLGUpe2U9ZXx8bS5lYXNlLmNpcmN1bGFyLHRoaXMuaXNJblRyYW5zaXRpb249dGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24mJjA8czt2YXIgbz10aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiYmZS5zdHlsZTshc3x8bz8obyYmKHRoaXMuX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbihlLnN0eWxlKSx0aGlzLl90cmFuc2l0aW9uVGltZShzKSksdGhpcy5fdHJhbnNsYXRlKHQsaSkpOnRoaXMuX2FuaW1hdGUodCxpLHMsZS5mbil9LHNjcm9sbFRvRWxlbWVudDpmdW5jdGlvbih0LGkscyxlLG8pe2lmKHQ9dC5ub2RlVHlwZT90OnRoaXMuc2Nyb2xsZXIucXVlcnlTZWxlY3Rvcih0KSl7dmFyIG49bS5vZmZzZXQodCk7bi5sZWZ0LT10aGlzLndyYXBwZXJPZmZzZXQubGVmdCxuLnRvcC09dGhpcy53cmFwcGVyT2Zmc2V0LnRvcCwhMD09PXMmJihzPXAucm91bmQodC5vZmZzZXRXaWR0aC8yLXRoaXMud3JhcHBlci5vZmZzZXRXaWR0aC8yKSksITA9PT1lJiYoZT1wLnJvdW5kKHQub2Zmc2V0SGVpZ2h0LzItdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodC8yKSksbi5sZWZ0LT1zfHwwLG4udG9wLT1lfHwwLG4ubGVmdD0wPG4ubGVmdD8wOm4ubGVmdDx0aGlzLm1heFNjcm9sbFg/dGhpcy5tYXhTY3JvbGxYOm4ubGVmdCxuLnRvcD0wPG4udG9wPzA6bi50b3A8dGhpcy5tYXhTY3JvbGxZP3RoaXMubWF4U2Nyb2xsWTpuLnRvcCxpPW51bGw9PWl8fFwiYXV0b1wiPT09aT9wLm1heChwLmFicyh0aGlzLngtbi5sZWZ0KSxwLmFicyh0aGlzLnktbi50b3ApKTppLHRoaXMuc2Nyb2xsVG8obi5sZWZ0LG4udG9wLGksbyl9fSxfdHJhbnNpdGlvblRpbWU6ZnVuY3Rpb24odCl7aWYodGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24pe3Q9dHx8MDt2YXIgaT1tLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtpZihpKXtpZih0aGlzLnNjcm9sbGVyU3R5bGVbaV09dCtcIm1zXCIsIXQmJm0uaXNCYWRBbmRyb2lkKXt0aGlzLnNjcm9sbGVyU3R5bGVbaV09XCIwLjAwMDFtc1wiO3ZhciBzPXRoaXM7ZihmdW5jdGlvbigpe1wiMC4wMDAxbXNcIj09PXMuc2Nyb2xsZXJTdHlsZVtpXSYmKHMuc2Nyb2xsZXJTdHlsZVtpXT1cIjBzXCIpfSl9aWYodGhpcy5pbmRpY2F0b3JzKWZvcih2YXIgZT10aGlzLmluZGljYXRvcnMubGVuZ3RoO2UtLTspdGhpcy5pbmRpY2F0b3JzW2VdLnRyYW5zaXRpb25UaW1lKHQpfX19LF90cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ZnVuY3Rpb24odCl7aWYodGhpcy5zY3JvbGxlclN0eWxlW20uc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXT10LHRoaXMuaW5kaWNhdG9ycylmb3IodmFyIGk9dGhpcy5pbmRpY2F0b3JzLmxlbmd0aDtpLS07KXRoaXMuaW5kaWNhdG9yc1tpXS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24odCl9LF90cmFuc2xhdGU6ZnVuY3Rpb24odCxpKXtpZih0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtP3RoaXMuc2Nyb2xsZXJTdHlsZVttLnN0eWxlLnRyYW5zZm9ybV09XCJ0cmFuc2xhdGUoXCIrdCtcInB4LFwiK2krXCJweClcIit0aGlzLnRyYW5zbGF0ZVo6KHQ9cC5yb3VuZCh0KSxpPXAucm91bmQoaSksdGhpcy5zY3JvbGxlclN0eWxlLmxlZnQ9dCtcInB4XCIsdGhpcy5zY3JvbGxlclN0eWxlLnRvcD1pK1wicHhcIiksdGhpcy54PXQsdGhpcy55PWksdGhpcy5pbmRpY2F0b3JzKWZvcih2YXIgcz10aGlzLmluZGljYXRvcnMubGVuZ3RoO3MtLTspdGhpcy5pbmRpY2F0b3JzW3NdLnVwZGF0ZVBvc2l0aW9uKCl9LF9pbml0RXZlbnRzOmZ1bmN0aW9uKHQpe3ZhciBpPXQ/bS5yZW1vdmVFdmVudDptLmFkZEV2ZW50LHM9dGhpcy5vcHRpb25zLmJpbmRUb1dyYXBwZXI/dGhpcy53cmFwcGVyOnI7aShyLFwib3JpZW50YXRpb25jaGFuZ2VcIix0aGlzKSxpKHIsXCJyZXNpemVcIix0aGlzKSx0aGlzLm9wdGlvbnMuY2xpY2smJmkodGhpcy53cmFwcGVyLFwiY2xpY2tcIix0aGlzLCEwKSx0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlfHwoaSh0aGlzLndyYXBwZXIsXCJtb3VzZWRvd25cIix0aGlzKSxpKHMsXCJtb3VzZW1vdmVcIix0aGlzKSxpKHMsXCJtb3VzZWNhbmNlbFwiLHRoaXMpLGkocyxcIm1vdXNldXBcIix0aGlzKSksbS5oYXNQb2ludGVyJiYhdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyJiYoaSh0aGlzLndyYXBwZXIsbS5wcmVmaXhQb2ludGVyRXZlbnQoXCJwb2ludGVyZG93blwiKSx0aGlzKSxpKHMsbS5wcmVmaXhQb2ludGVyRXZlbnQoXCJwb2ludGVybW92ZVwiKSx0aGlzKSxpKHMsbS5wcmVmaXhQb2ludGVyRXZlbnQoXCJwb2ludGVyY2FuY2VsXCIpLHRoaXMpLGkocyxtLnByZWZpeFBvaW50ZXJFdmVudChcInBvaW50ZXJ1cFwiKSx0aGlzKSksbS5oYXNUb3VjaCYmIXRoaXMub3B0aW9ucy5kaXNhYmxlVG91Y2gmJihpKHRoaXMud3JhcHBlcixcInRvdWNoc3RhcnRcIix0aGlzKSxpKHMsXCJ0b3VjaG1vdmVcIix0aGlzKSxpKHMsXCJ0b3VjaGNhbmNlbFwiLHRoaXMpLGkocyxcInRvdWNoZW5kXCIsdGhpcykpLGkodGhpcy5zY3JvbGxlcixcInRyYW5zaXRpb25lbmRcIix0aGlzKSxpKHRoaXMuc2Nyb2xsZXIsXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsdGhpcyksaSh0aGlzLnNjcm9sbGVyLFwib1RyYW5zaXRpb25FbmRcIix0aGlzKSxpKHRoaXMuc2Nyb2xsZXIsXCJNU1RyYW5zaXRpb25FbmRcIix0aGlzKX0sZ2V0Q29tcHV0ZWRQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0LGkscz1yLmdldENvbXB1dGVkU3R5bGUodGhpcy5zY3JvbGxlcixudWxsKTtyZXR1cm4gaT10aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtPyh0PSsoKHM9c1ttLnN0eWxlLnRyYW5zZm9ybV0uc3BsaXQoXCIpXCIpWzBdLnNwbGl0KFwiLCBcIikpWzEyXXx8c1s0XSksKyhzWzEzXXx8c1s1XSkpOih0PStzLmxlZnQucmVwbGFjZSgvW14tXFxkLl0vZyxcIlwiKSwrcy50b3AucmVwbGFjZSgvW14tXFxkLl0vZyxcIlwiKSkse3g6dCx5Oml9fSxfaW5pdEluZGljYXRvcnM6ZnVuY3Rpb24oKXt2YXIgdCxpPXRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZVNjcm9sbGJhcnMscz1cInN0cmluZ1wiIT10eXBlb2YgdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMsZT1bXSxvPXRoaXM7dGhpcy5pbmRpY2F0b3JzPVtdLHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzJiYodGhpcy5vcHRpb25zLnNjcm9sbFkmJih0PXtlbDpoKFwidlwiLGksdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMpLGludGVyYWN0aXZlOmksZGVmYXVsdFNjcm9sbGJhcnM6ITAsY3VzdG9tU3R5bGU6cyxyZXNpemU6dGhpcy5vcHRpb25zLnJlc2l6ZVNjcm9sbGJhcnMsc2hyaW5rOnRoaXMub3B0aW9ucy5zaHJpbmtTY3JvbGxiYXJzLGZhZGU6dGhpcy5vcHRpb25zLmZhZGVTY3JvbGxiYXJzLGxpc3Rlblg6ITF9LHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0LmVsKSxlLnB1c2godCkpLHRoaXMub3B0aW9ucy5zY3JvbGxYJiYodD17ZWw6aChcImhcIixpLHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzKSxpbnRlcmFjdGl2ZTppLGRlZmF1bHRTY3JvbGxiYXJzOiEwLGN1c3RvbVN0eWxlOnMscmVzaXplOnRoaXMub3B0aW9ucy5yZXNpemVTY3JvbGxiYXJzLHNocmluazp0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyxmYWRlOnRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyxsaXN0ZW5ZOiExfSx0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodC5lbCksZS5wdXNoKHQpKSksdGhpcy5vcHRpb25zLmluZGljYXRvcnMmJihlPWUuY29uY2F0KHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzKSk7Zm9yKHZhciBuPWUubGVuZ3RoO24tLTspdGhpcy5pbmRpY2F0b3JzLnB1c2gobmV3IGEodGhpcyxlW25dKSk7ZnVuY3Rpb24gcih0KXtpZihvLmluZGljYXRvcnMpZm9yKHZhciBpPW8uaW5kaWNhdG9ycy5sZW5ndGg7aS0tOyl0LmNhbGwoby5pbmRpY2F0b3JzW2ldKX10aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMmJih0aGlzLm9uKFwic2Nyb2xsRW5kXCIsZnVuY3Rpb24oKXtyKGZ1bmN0aW9uKCl7dGhpcy5mYWRlKCl9KX0pLHRoaXMub24oXCJzY3JvbGxDYW5jZWxcIixmdW5jdGlvbigpe3IoZnVuY3Rpb24oKXt0aGlzLmZhZGUoKX0pfSksdGhpcy5vbihcInNjcm9sbFN0YXJ0XCIsZnVuY3Rpb24oKXtyKGZ1bmN0aW9uKCl7dGhpcy5mYWRlKDEpfSl9KSx0aGlzLm9uKFwiYmVmb3JlU2Nyb2xsU3RhcnRcIixmdW5jdGlvbigpe3IoZnVuY3Rpb24oKXt0aGlzLmZhZGUoMSwhMCl9KX0pKSx0aGlzLm9uKFwicmVmcmVzaFwiLGZ1bmN0aW9uKCl7cihmdW5jdGlvbigpe3RoaXMucmVmcmVzaCgpfSl9KSx0aGlzLm9uKFwiZGVzdHJveVwiLGZ1bmN0aW9uKCl7cihmdW5jdGlvbigpe3RoaXMuZGVzdHJveSgpfSksZGVsZXRlIHRoaXMuaW5kaWNhdG9yc30pfSxfaW5pdFdoZWVsOmZ1bmN0aW9uKCl7bS5hZGRFdmVudCh0aGlzLndyYXBwZXIsXCJ3aGVlbFwiLHRoaXMpLG0uYWRkRXZlbnQodGhpcy53cmFwcGVyLFwibW91c2V3aGVlbFwiLHRoaXMpLG0uYWRkRXZlbnQodGhpcy53cmFwcGVyLFwiRE9NTW91c2VTY3JvbGxcIix0aGlzKSx0aGlzLm9uKFwiZGVzdHJveVwiLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMud2hlZWxUaW1lb3V0KSx0aGlzLndoZWVsVGltZW91dD1udWxsLG0ucmVtb3ZlRXZlbnQodGhpcy53cmFwcGVyLFwid2hlZWxcIix0aGlzKSxtLnJlbW92ZUV2ZW50KHRoaXMud3JhcHBlcixcIm1vdXNld2hlZWxcIix0aGlzKSxtLnJlbW92ZUV2ZW50KHRoaXMud3JhcHBlcixcIkRPTU1vdXNlU2Nyb2xsXCIsdGhpcyl9KX0sX3doZWVsOmZ1bmN0aW9uKHQpe2lmKHRoaXMuZW5hYmxlZCl7ci5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oTVNJRXxUcmlkZW50KS8pfHx0LnByZXZlbnREZWZhdWx0KCk7dmFyIGkscyxlLG8sbj10aGlzO2lmKHZvaWQgMD09PXRoaXMud2hlZWxUaW1lb3V0JiZuLl9leGVjRXZlbnQoXCJzY3JvbGxTdGFydFwiKSxjbGVhclRpbWVvdXQodGhpcy53aGVlbFRpbWVvdXQpLHRoaXMud2hlZWxUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm9wdGlvbnMuc25hcHx8bi5fZXhlY0V2ZW50KFwic2Nyb2xsRW5kXCIpLG4ud2hlZWxUaW1lb3V0PXZvaWQgMH0sNDAwKSxcImRlbHRhWFwiaW4gdClzPTE9PT10LmRlbHRhTW9kZT8oaT0tdC5kZWx0YVgqdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZCwtdC5kZWx0YVkqdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZCk6KGk9LXQuZGVsdGFYLC10LmRlbHRhWSk7ZWxzZSBpZihcIndoZWVsRGVsdGFYXCJpbiB0KWk9dC53aGVlbERlbHRhWC8xMjAqdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZCxzPXQud2hlZWxEZWx0YVkvMTIwKnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7ZWxzZSBpZihcIndoZWVsRGVsdGFcImluIHQpaT1zPXQud2hlZWxEZWx0YS8xMjAqdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtlbHNle2lmKCEoXCJkZXRhaWxcImluIHQpKXJldHVybjtpPXM9LXQuZGV0YWlsLzMqdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZH1pZihpKj10aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24scyo9dGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uLHRoaXMuaGFzVmVydGljYWxTY3JvbGx8fChpPXMscz0wKSx0aGlzLm9wdGlvbnMuc25hcClyZXR1cm4gZT10aGlzLmN1cnJlbnRQYWdlLnBhZ2VYLG89dGhpcy5jdXJyZW50UGFnZS5wYWdlWSwwPGk/ZS0tOmk8MCYmZSsrLDA8cz9vLS06czwwJiZvKyssdm9pZCB0aGlzLmdvVG9QYWdlKGUsbyk7ZT10aGlzLngrcC5yb3VuZCh0aGlzLmhhc0hvcml6b250YWxTY3JvbGw/aTowKSxvPXRoaXMueStwLnJvdW5kKHRoaXMuaGFzVmVydGljYWxTY3JvbGw/czowKSx0aGlzLmRpcmVjdGlvblg9MDxpPy0xOmk8MD8xOjAsdGhpcy5kaXJlY3Rpb25ZPTA8cz8tMTpzPDA/MTowLDA8ZT9lPTA6ZTx0aGlzLm1heFNjcm9sbFgmJihlPXRoaXMubWF4U2Nyb2xsWCksMDxvP289MDpvPHRoaXMubWF4U2Nyb2xsWSYmKG89dGhpcy5tYXhTY3JvbGxZKSx0aGlzLnNjcm9sbFRvKGUsbywwKX19LF9pbml0U25hcDpmdW5jdGlvbigpe3RoaXMuY3VycmVudFBhZ2U9e30sXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMub3B0aW9ucy5zbmFwJiYodGhpcy5vcHRpb25zLnNuYXA9dGhpcy5zY3JvbGxlci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5zbmFwKSksdGhpcy5vbihcInJlZnJlc2hcIixmdW5jdGlvbigpe3ZhciB0LGkscyxlLG8sbixyPTAsaD0wLGE9MCxsPXRoaXMub3B0aW9ucy5zbmFwU3RlcFh8fHRoaXMud3JhcHBlcldpZHRoLGM9dGhpcy5vcHRpb25zLnNuYXBTdGVwWXx8dGhpcy53cmFwcGVySGVpZ2h0O2lmKHRoaXMucGFnZXM9W10sdGhpcy53cmFwcGVyV2lkdGgmJnRoaXMud3JhcHBlckhlaWdodCYmdGhpcy5zY3JvbGxlcldpZHRoJiZ0aGlzLnNjcm9sbGVySGVpZ2h0KXtpZighMD09PXRoaXMub3B0aW9ucy5zbmFwKWZvcihzPXAucm91bmQobC8yKSxlPXAucm91bmQoYy8yKTthPi10aGlzLnNjcm9sbGVyV2lkdGg7KXtmb3IodGhpcy5wYWdlc1tyXT1bXSxvPXQ9MDtvPi10aGlzLnNjcm9sbGVySGVpZ2h0Oyl0aGlzLnBhZ2VzW3JdW3RdPXt4OnAubWF4KGEsdGhpcy5tYXhTY3JvbGxYKSx5OnAubWF4KG8sdGhpcy5tYXhTY3JvbGxZKSx3aWR0aDpsLGhlaWdodDpjLGN4OmEtcyxjeTpvLWV9LG8tPWMsdCsrO2EtPWwscisrfWVsc2UgZm9yKHQ9KG49dGhpcy5vcHRpb25zLnNuYXApLmxlbmd0aCxpPS0xO3I8dDtyKyspKDA9PT1yfHxuW3JdLm9mZnNldExlZnQ8PW5bci0xXS5vZmZzZXRMZWZ0KSYmKGg9MCxpKyspLHRoaXMucGFnZXNbaF18fCh0aGlzLnBhZ2VzW2hdPVtdKSxhPXAubWF4KC1uW3JdLm9mZnNldExlZnQsdGhpcy5tYXhTY3JvbGxYKSxvPXAubWF4KC1uW3JdLm9mZnNldFRvcCx0aGlzLm1heFNjcm9sbFkpLHM9YS1wLnJvdW5kKG5bcl0ub2Zmc2V0V2lkdGgvMiksZT1vLXAucm91bmQobltyXS5vZmZzZXRIZWlnaHQvMiksdGhpcy5wYWdlc1toXVtpXT17eDphLHk6byx3aWR0aDpuW3JdLm9mZnNldFdpZHRoLGhlaWdodDpuW3JdLm9mZnNldEhlaWdodCxjeDpzLGN5OmV9LGE+dGhpcy5tYXhTY3JvbGxYJiZoKys7dGhpcy5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYfHwwLHRoaXMuY3VycmVudFBhZ2UucGFnZVl8fDAsMCksdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQlMT09MD8odGhpcy5zbmFwVGhyZXNob2xkWD10aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCx0aGlzLnNuYXBUaHJlc2hvbGRZPXRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkKToodGhpcy5zbmFwVGhyZXNob2xkWD1wLnJvdW5kKHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZS5wYWdlWF1bdGhpcy5jdXJyZW50UGFnZS5wYWdlWV0ud2lkdGgqdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQpLHRoaXMuc25hcFRocmVzaG9sZFk9cC5yb3VuZCh0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2UucGFnZVhdW3RoaXMuY3VycmVudFBhZ2UucGFnZVldLmhlaWdodCp0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCkpfX0pLHRoaXMub24oXCJmbGlja1wiLGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnNuYXBTcGVlZHx8cC5tYXgocC5tYXgocC5taW4ocC5hYnModGhpcy54LXRoaXMuc3RhcnRYKSwxZTMpLHAubWluKHAuYWJzKHRoaXMueS10aGlzLnN0YXJ0WSksMWUzKSksMzAwKTt0aGlzLmdvVG9QYWdlKHRoaXMuY3VycmVudFBhZ2UucGFnZVgrdGhpcy5kaXJlY3Rpb25YLHRoaXMuY3VycmVudFBhZ2UucGFnZVkrdGhpcy5kaXJlY3Rpb25ZLHQpfSl9LF9uZWFyZXN0U25hcDpmdW5jdGlvbih0LGkpe2lmKCF0aGlzLnBhZ2VzLmxlbmd0aClyZXR1cm57eDowLHk6MCxwYWdlWDowLHBhZ2VZOjB9O3ZhciBzPTAsZT10aGlzLnBhZ2VzLmxlbmd0aCxvPTA7aWYocC5hYnModC10aGlzLmFic1N0YXJ0WCk8dGhpcy5zbmFwVGhyZXNob2xkWCYmcC5hYnMoaS10aGlzLmFic1N0YXJ0WSk8dGhpcy5zbmFwVGhyZXNob2xkWSlyZXR1cm4gdGhpcy5jdXJyZW50UGFnZTtmb3IoMDx0P3Q9MDp0PHRoaXMubWF4U2Nyb2xsWCYmKHQ9dGhpcy5tYXhTY3JvbGxYKSwwPGk/aT0wOmk8dGhpcy5tYXhTY3JvbGxZJiYoaT10aGlzLm1heFNjcm9sbFkpO3M8ZTtzKyspaWYodD49dGhpcy5wYWdlc1tzXVswXS5jeCl7dD10aGlzLnBhZ2VzW3NdWzBdLng7YnJlYWt9Zm9yKGU9dGhpcy5wYWdlc1tzXS5sZW5ndGg7bzxlO28rKylpZihpPj10aGlzLnBhZ2VzWzBdW29dLmN5KXtpPXRoaXMucGFnZXNbMF1bb10ueTticmVha31yZXR1cm4gcz09dGhpcy5jdXJyZW50UGFnZS5wYWdlWCYmKChzKz10aGlzLmRpcmVjdGlvblgpPDA/cz0wOnM+PXRoaXMucGFnZXMubGVuZ3RoJiYocz10aGlzLnBhZ2VzLmxlbmd0aC0xKSx0PXRoaXMucGFnZXNbc11bMF0ueCksbz09dGhpcy5jdXJyZW50UGFnZS5wYWdlWSYmKChvKz10aGlzLmRpcmVjdGlvblkpPDA/bz0wOm8+PXRoaXMucGFnZXNbMF0ubGVuZ3RoJiYobz10aGlzLnBhZ2VzWzBdLmxlbmd0aC0xKSxpPXRoaXMucGFnZXNbMF1bb10ueSkse3g6dCx5OmkscGFnZVg6cyxwYWdlWTpvfX0sZ29Ub1BhZ2U6ZnVuY3Rpb24odCxpLHMsZSl7ZT1lfHx0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nLHQ+PXRoaXMucGFnZXMubGVuZ3RoP3Q9dGhpcy5wYWdlcy5sZW5ndGgtMTp0PDAmJih0PTApLGk+PXRoaXMucGFnZXNbdF0ubGVuZ3RoP2k9dGhpcy5wYWdlc1t0XS5sZW5ndGgtMTppPDAmJihpPTApO3ZhciBvPXRoaXMucGFnZXNbdF1baV0ueCxuPXRoaXMucGFnZXNbdF1baV0ueTtzPXZvaWQgMD09PXM/dGhpcy5vcHRpb25zLnNuYXBTcGVlZHx8cC5tYXgocC5tYXgocC5taW4ocC5hYnMoby10aGlzLngpLDFlMykscC5taW4ocC5hYnMobi10aGlzLnkpLDFlMykpLDMwMCk6cyx0aGlzLmN1cnJlbnRQYWdlPXt4Om8seTpuLHBhZ2VYOnQscGFnZVk6aX0sdGhpcy5zY3JvbGxUbyhvLG4scyxlKX0sbmV4dDpmdW5jdGlvbih0LGkpe3ZhciBzPXRoaXMuY3VycmVudFBhZ2UucGFnZVgsZT10aGlzLmN1cnJlbnRQYWdlLnBhZ2VZOysrcz49dGhpcy5wYWdlcy5sZW5ndGgmJnRoaXMuaGFzVmVydGljYWxTY3JvbGwmJihzPTAsZSsrKSx0aGlzLmdvVG9QYWdlKHMsZSx0LGkpfSxwcmV2OmZ1bmN0aW9uKHQsaSl7dmFyIHM9dGhpcy5jdXJyZW50UGFnZS5wYWdlWCxlPXRoaXMuY3VycmVudFBhZ2UucGFnZVk7LS1zPDAmJnRoaXMuaGFzVmVydGljYWxTY3JvbGwmJihzPTAsZS0tKSx0aGlzLmdvVG9QYWdlKHMsZSx0LGkpfSxfaW5pdEtleXM6ZnVuY3Rpb24odCl7dmFyIGkscz17cGFnZVVwOjMzLHBhZ2VEb3duOjM0LGVuZDozNSxob21lOjM2LGxlZnQ6MzcsdXA6MzgscmlnaHQ6MzksZG93bjo0MH07aWYoXCJvYmplY3RcIj09dHlwZW9mIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncylmb3IoaSBpbiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MpXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXSYmKHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXT10aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0udG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApKTtlbHNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncz17fTtmb3IoaSBpbiBzKXRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXT10aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV18fHNbaV07bS5hZGRFdmVudChyLFwia2V5ZG93blwiLHRoaXMpLHRoaXMub24oXCJkZXN0cm95XCIsZnVuY3Rpb24oKXttLnJlbW92ZUV2ZW50KHIsXCJrZXlkb3duXCIsdGhpcyl9KX0sX2tleTpmdW5jdGlvbih0KXtpZih0aGlzLmVuYWJsZWQpe3ZhciBpLHM9dGhpcy5vcHRpb25zLnNuYXAsZT1zP3RoaXMuY3VycmVudFBhZ2UucGFnZVg6dGhpcy54LG89cz90aGlzLmN1cnJlbnRQYWdlLnBhZ2VZOnRoaXMueSxuPW0uZ2V0VGltZSgpLHI9dGhpcy5rZXlUaW1lfHwwO3N3aXRjaCh0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiYmdGhpcy5pc0luVHJhbnNpdGlvbiYmKGk9dGhpcy5nZXRDb21wdXRlZFBvc2l0aW9uKCksdGhpcy5fdHJhbnNsYXRlKHAucm91bmQoaS54KSxwLnJvdW5kKGkueSkpLHRoaXMuaXNJblRyYW5zaXRpb249ITEpLHRoaXMua2V5QWNjZWxlcmF0aW9uPW4tcjwyMDA/cC5taW4odGhpcy5rZXlBY2NlbGVyYXRpb24rLjI1LDUwKTowLHQua2V5Q29kZSl7Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucGFnZVVwOnRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCYmIXRoaXMuaGFzVmVydGljYWxTY3JvbGw/ZSs9cz8xOnRoaXMud3JhcHBlcldpZHRoOm8rPXM/MTp0aGlzLndyYXBwZXJIZWlnaHQ7YnJlYWs7Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucGFnZURvd246dGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsJiYhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbD9lLT1zPzE6dGhpcy53cmFwcGVyV2lkdGg6by09cz8xOnRoaXMud3JhcHBlckhlaWdodDticmVhaztjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5lbmQ6ZT1zP3RoaXMucGFnZXMubGVuZ3RoLTE6dGhpcy5tYXhTY3JvbGxYLG89cz90aGlzLnBhZ2VzWzBdLmxlbmd0aC0xOnRoaXMubWF4U2Nyb2xsWTticmVhaztjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5ob21lOm89ZT0wO2JyZWFrO2Nhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmxlZnQ6ZSs9cz8tMTo1K3RoaXMua2V5QWNjZWxlcmF0aW9uPj4wO2JyZWFrO2Nhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnVwOm8rPXM/MTo1K3RoaXMua2V5QWNjZWxlcmF0aW9uPj4wO2JyZWFrO2Nhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnJpZ2h0OmUtPXM/LTE6NSt0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDticmVhaztjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5kb3duOm8tPXM/MTo1K3RoaXMua2V5QWNjZWxlcmF0aW9uPj4wO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXM/dGhpcy5nb1RvUGFnZShlLG8pOigwPGU/KGU9MCx0aGlzLmtleUFjY2VsZXJhdGlvbj0wKTplPHRoaXMubWF4U2Nyb2xsWCYmKGU9dGhpcy5tYXhTY3JvbGxYLHRoaXMua2V5QWNjZWxlcmF0aW9uPTApLDA8bz8obz0wLHRoaXMua2V5QWNjZWxlcmF0aW9uPTApOm88dGhpcy5tYXhTY3JvbGxZJiYobz10aGlzLm1heFNjcm9sbFksdGhpcy5rZXlBY2NlbGVyYXRpb249MCksdGhpcy5zY3JvbGxUbyhlLG8sMCksdGhpcy5rZXlUaW1lPW4pfX0sX2FuaW1hdGU6ZnVuY3Rpb24obixyLGgsYSl7dmFyIGw9dGhpcyxjPXRoaXMueCxwPXRoaXMueSxkPW0uZ2V0VGltZSgpLHU9ZCtoO3RoaXMuaXNBbmltYXRpbmc9ITAsZnVuY3Rpb24gdCgpe3ZhciBpLHMsZSxvPW0uZ2V0VGltZSgpO2lmKHU8PW8pcmV0dXJuIGwuaXNBbmltYXRpbmc9ITEsbC5fdHJhbnNsYXRlKG4sciksdm9pZChsLnJlc2V0UG9zaXRpb24obC5vcHRpb25zLmJvdW5jZVRpbWUpfHxsLl9leGVjRXZlbnQoXCJzY3JvbGxFbmRcIikpO2U9YShvPShvLWQpL2gpLGk9KG4tYykqZStjLHM9KHItcCkqZStwLGwuX3RyYW5zbGF0ZShpLHMpLGwuaXNBbmltYXRpbmcmJmYodCl9KCl9LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcInRvdWNoc3RhcnRcIjpjYXNlXCJwb2ludGVyZG93blwiOmNhc2VcIk1TUG9pbnRlckRvd25cIjpjYXNlXCJtb3VzZWRvd25cIjp0aGlzLl9zdGFydCh0KTticmVhaztjYXNlXCJ0b3VjaG1vdmVcIjpjYXNlXCJwb2ludGVybW92ZVwiOmNhc2VcIk1TUG9pbnRlck1vdmVcIjpjYXNlXCJtb3VzZW1vdmVcIjp0aGlzLl9tb3ZlKHQpO2JyZWFrO2Nhc2VcInRvdWNoZW5kXCI6Y2FzZVwicG9pbnRlcnVwXCI6Y2FzZVwiTVNQb2ludGVyVXBcIjpjYXNlXCJtb3VzZXVwXCI6Y2FzZVwidG91Y2hjYW5jZWxcIjpjYXNlXCJwb2ludGVyY2FuY2VsXCI6Y2FzZVwiTVNQb2ludGVyQ2FuY2VsXCI6Y2FzZVwibW91c2VjYW5jZWxcIjp0aGlzLl9lbmQodCk7YnJlYWs7Y2FzZVwib3JpZW50YXRpb25jaGFuZ2VcIjpjYXNlXCJyZXNpemVcIjp0aGlzLl9yZXNpemUoKTticmVhaztjYXNlXCJ0cmFuc2l0aW9uZW5kXCI6Y2FzZVwid2Via2l0VHJhbnNpdGlvbkVuZFwiOmNhc2VcIm9UcmFuc2l0aW9uRW5kXCI6Y2FzZVwiTVNUcmFuc2l0aW9uRW5kXCI6dGhpcy5fdHJhbnNpdGlvbkVuZCh0KTticmVhaztjYXNlXCJ3aGVlbFwiOmNhc2VcIkRPTU1vdXNlU2Nyb2xsXCI6Y2FzZVwibW91c2V3aGVlbFwiOnRoaXMuX3doZWVsKHQpO2JyZWFrO2Nhc2VcImtleWRvd25cIjp0aGlzLl9rZXkodCk7YnJlYWs7Y2FzZVwiY2xpY2tcIjp0aGlzLmVuYWJsZWQmJiF0Ll9jb25zdHJ1Y3RlZCYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKX19fSxhLnByb3RvdHlwZT17aGFuZGxlRXZlbnQ6ZnVuY3Rpb24odCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwidG91Y2hzdGFydFwiOmNhc2VcInBvaW50ZXJkb3duXCI6Y2FzZVwiTVNQb2ludGVyRG93blwiOmNhc2VcIm1vdXNlZG93blwiOnRoaXMuX3N0YXJ0KHQpO2JyZWFrO2Nhc2VcInRvdWNobW92ZVwiOmNhc2VcInBvaW50ZXJtb3ZlXCI6Y2FzZVwiTVNQb2ludGVyTW92ZVwiOmNhc2VcIm1vdXNlbW92ZVwiOnRoaXMuX21vdmUodCk7YnJlYWs7Y2FzZVwidG91Y2hlbmRcIjpjYXNlXCJwb2ludGVydXBcIjpjYXNlXCJNU1BvaW50ZXJVcFwiOmNhc2VcIm1vdXNldXBcIjpjYXNlXCJ0b3VjaGNhbmNlbFwiOmNhc2VcInBvaW50ZXJjYW5jZWxcIjpjYXNlXCJNU1BvaW50ZXJDYW5jZWxcIjpjYXNlXCJtb3VzZWNhbmNlbFwiOnRoaXMuX2VuZCh0KX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMmJihjbGVhclRpbWVvdXQodGhpcy5mYWRlVGltZW91dCksdGhpcy5mYWRlVGltZW91dD1udWxsKSx0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUmJihtLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLFwidG91Y2hzdGFydFwiLHRoaXMpLG0ucmVtb3ZlRXZlbnQodGhpcy5pbmRpY2F0b3IsbS5wcmVmaXhQb2ludGVyRXZlbnQoXCJwb2ludGVyZG93blwiKSx0aGlzKSxtLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLFwibW91c2Vkb3duXCIsdGhpcyksbS5yZW1vdmVFdmVudChyLFwidG91Y2htb3ZlXCIsdGhpcyksbS5yZW1vdmVFdmVudChyLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcm1vdmVcIiksdGhpcyksbS5yZW1vdmVFdmVudChyLFwibW91c2Vtb3ZlXCIsdGhpcyksbS5yZW1vdmVFdmVudChyLFwidG91Y2hlbmRcIix0aGlzKSxtLnJlbW92ZUV2ZW50KHIsbS5wcmVmaXhQb2ludGVyRXZlbnQoXCJwb2ludGVydXBcIiksdGhpcyksbS5yZW1vdmVFdmVudChyLFwibW91c2V1cFwiLHRoaXMpKSx0aGlzLm9wdGlvbnMuZGVmYXVsdFNjcm9sbGJhcnMmJnRoaXMud3JhcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcHBlcil9LF9zdGFydDpmdW5jdGlvbih0KXt2YXIgaT10LnRvdWNoZXM/dC50b3VjaGVzWzBdOnQ7dC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy50cmFuc2l0aW9uVGltZSgpLHRoaXMuaW5pdGlhdGVkPSEwLHRoaXMubW92ZWQ9ITEsdGhpcy5sYXN0UG9pbnRYPWkucGFnZVgsdGhpcy5sYXN0UG9pbnRZPWkucGFnZVksdGhpcy5zdGFydFRpbWU9bS5nZXRUaW1lKCksdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaHx8bS5hZGRFdmVudChyLFwidG91Y2htb3ZlXCIsdGhpcyksdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyfHxtLmFkZEV2ZW50KHIsbS5wcmVmaXhQb2ludGVyRXZlbnQoXCJwb2ludGVybW92ZVwiKSx0aGlzKSx0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlfHxtLmFkZEV2ZW50KHIsXCJtb3VzZW1vdmVcIix0aGlzKSx0aGlzLnNjcm9sbGVyLl9leGVjRXZlbnQoXCJiZWZvcmVTY3JvbGxTdGFydFwiKX0sX21vdmU6ZnVuY3Rpb24odCl7dmFyIGkscyxlLG8sbj10LnRvdWNoZXM/dC50b3VjaGVzWzBdOnQ7bS5nZXRUaW1lKCk7dGhpcy5tb3ZlZHx8dGhpcy5zY3JvbGxlci5fZXhlY0V2ZW50KFwic2Nyb2xsU3RhcnRcIiksdGhpcy5tb3ZlZD0hMCxpPW4ucGFnZVgtdGhpcy5sYXN0UG9pbnRYLHRoaXMubGFzdFBvaW50WD1uLnBhZ2VYLHM9bi5wYWdlWS10aGlzLmxhc3RQb2ludFksdGhpcy5sYXN0UG9pbnRZPW4ucGFnZVksZT10aGlzLngraSxvPXRoaXMueStzLHRoaXMuX3BvcyhlLG8pLHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpfSxfZW5kOmZ1bmN0aW9uKHQpe2lmKHRoaXMuaW5pdGlhdGVkKXtpZih0aGlzLmluaXRpYXRlZD0hMSx0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSxtLnJlbW92ZUV2ZW50KHIsXCJ0b3VjaG1vdmVcIix0aGlzKSxtLnJlbW92ZUV2ZW50KHIsbS5wcmVmaXhQb2ludGVyRXZlbnQoXCJwb2ludGVybW92ZVwiKSx0aGlzKSxtLnJlbW92ZUV2ZW50KHIsXCJtb3VzZW1vdmVcIix0aGlzKSx0aGlzLnNjcm9sbGVyLm9wdGlvbnMuc25hcCl7dmFyIGk9dGhpcy5zY3JvbGxlci5fbmVhcmVzdFNuYXAodGhpcy5zY3JvbGxlci54LHRoaXMuc2Nyb2xsZXIueSkscz10aGlzLm9wdGlvbnMuc25hcFNwZWVkfHxwLm1heChwLm1heChwLm1pbihwLmFicyh0aGlzLnNjcm9sbGVyLngtaS54KSwxZTMpLHAubWluKHAuYWJzKHRoaXMuc2Nyb2xsZXIueS1pLnkpLDFlMykpLDMwMCk7dGhpcy5zY3JvbGxlci54PT1pLngmJnRoaXMuc2Nyb2xsZXIueT09aS55fHwodGhpcy5zY3JvbGxlci5kaXJlY3Rpb25YPTAsdGhpcy5zY3JvbGxlci5kaXJlY3Rpb25ZPTAsdGhpcy5zY3JvbGxlci5jdXJyZW50UGFnZT1pLHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8oaS54LGkueSxzLHRoaXMuc2Nyb2xsZXIub3B0aW9ucy5ib3VuY2VFYXNpbmcpKX10aGlzLm1vdmVkJiZ0aGlzLnNjcm9sbGVyLl9leGVjRXZlbnQoXCJzY3JvbGxFbmRcIil9fSx0cmFuc2l0aW9uVGltZTpmdW5jdGlvbih0KXt0PXR8fDA7dmFyIGk9bS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247aWYoaSYmKHRoaXMuaW5kaWNhdG9yU3R5bGVbaV09dCtcIm1zXCIsIXQmJm0uaXNCYWRBbmRyb2lkKSl7dGhpcy5pbmRpY2F0b3JTdHlsZVtpXT1cIjAuMDAwMW1zXCI7dmFyIHM9dGhpcztmKGZ1bmN0aW9uKCl7XCIwLjAwMDFtc1wiPT09cy5pbmRpY2F0b3JTdHlsZVtpXSYmKHMuaW5kaWNhdG9yU3R5bGVbaV09XCIwc1wiKX0pfX0sdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOmZ1bmN0aW9uKHQpe3RoaXMuaW5kaWNhdG9yU3R5bGVbbS5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25dPXR9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLnRyYW5zaXRpb25UaW1lKCksdGhpcy5vcHRpb25zLmxpc3RlblgmJiF0aGlzLm9wdGlvbnMubGlzdGVuWT90aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXk9dGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsP1wiYmxvY2tcIjpcIm5vbmVcIjp0aGlzLm9wdGlvbnMubGlzdGVuWSYmIXRoaXMub3B0aW9ucy5saXN0ZW5YP3RoaXMuaW5kaWNhdG9yU3R5bGUuZGlzcGxheT10aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsP1wiYmxvY2tcIjpcIm5vbmVcIjp0aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXk9dGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsfHx0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsP1wiYmxvY2tcIjpcIm5vbmVcIix0aGlzLnNjcm9sbGVyLmhhc0hvcml6b250YWxTY3JvbGwmJnRoaXMuc2Nyb2xsZXIuaGFzVmVydGljYWxTY3JvbGw/KG0uYWRkQ2xhc3ModGhpcy53cmFwcGVyLFwiaVNjcm9sbEJvdGhTY3JvbGxiYXJzXCIpLG0ucmVtb3ZlQ2xhc3ModGhpcy53cmFwcGVyLFwiaVNjcm9sbExvbmVTY3JvbGxiYXJcIiksdGhpcy5vcHRpb25zLmRlZmF1bHRTY3JvbGxiYXJzJiZ0aGlzLm9wdGlvbnMuY3VzdG9tU3R5bGUmJih0aGlzLm9wdGlvbnMubGlzdGVuWD90aGlzLndyYXBwZXIuc3R5bGUucmlnaHQ9XCI4cHhcIjp0aGlzLndyYXBwZXIuc3R5bGUuYm90dG9tPVwiOHB4XCIpKToobS5yZW1vdmVDbGFzcyh0aGlzLndyYXBwZXIsXCJpU2Nyb2xsQm90aFNjcm9sbGJhcnNcIiksbS5hZGRDbGFzcyh0aGlzLndyYXBwZXIsXCJpU2Nyb2xsTG9uZVNjcm9sbGJhclwiKSx0aGlzLm9wdGlvbnMuZGVmYXVsdFNjcm9sbGJhcnMmJnRoaXMub3B0aW9ucy5jdXN0b21TdHlsZSYmKHRoaXMub3B0aW9ucy5saXN0ZW5YP3RoaXMud3JhcHBlci5zdHlsZS5yaWdodD1cIjJweFwiOnRoaXMud3JhcHBlci5zdHlsZS5ib3R0b209XCIycHhcIikpO3RoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQ7dGhpcy5vcHRpb25zLmxpc3RlblgmJih0aGlzLndyYXBwZXJXaWR0aD10aGlzLndyYXBwZXIuY2xpZW50V2lkdGgsdGhpcy5vcHRpb25zLnJlc2l6ZT8odGhpcy5pbmRpY2F0b3JXaWR0aD1wLm1heChwLnJvdW5kKHRoaXMud3JhcHBlcldpZHRoKnRoaXMud3JhcHBlcldpZHRoLyh0aGlzLnNjcm9sbGVyLnNjcm9sbGVyV2lkdGh8fHRoaXMud3JhcHBlcldpZHRofHwxKSksOCksdGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aD10aGlzLmluZGljYXRvcldpZHRoK1wicHhcIik6dGhpcy5pbmRpY2F0b3JXaWR0aD10aGlzLmluZGljYXRvci5jbGllbnRXaWR0aCx0aGlzLm1heFBvc1g9dGhpcy53cmFwcGVyV2lkdGgtdGhpcy5pbmRpY2F0b3JXaWR0aCxcImNsaXBcIj09dGhpcy5vcHRpb25zLnNocmluaz8odGhpcy5taW5Cb3VuZGFyeVg9OC10aGlzLmluZGljYXRvcldpZHRoLHRoaXMubWF4Qm91bmRhcnlYPXRoaXMud3JhcHBlcldpZHRoLTgpOih0aGlzLm1pbkJvdW5kYXJ5WD0wLHRoaXMubWF4Qm91bmRhcnlYPXRoaXMubWF4UG9zWCksdGhpcy5zaXplUmF0aW9YPXRoaXMub3B0aW9ucy5zcGVlZFJhdGlvWHx8dGhpcy5zY3JvbGxlci5tYXhTY3JvbGxYJiZ0aGlzLm1heFBvc1gvdGhpcy5zY3JvbGxlci5tYXhTY3JvbGxYKSx0aGlzLm9wdGlvbnMubGlzdGVuWSYmKHRoaXMud3JhcHBlckhlaWdodD10aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0LHRoaXMub3B0aW9ucy5yZXNpemU/KHRoaXMuaW5kaWNhdG9ySGVpZ2h0PXAubWF4KHAucm91bmQodGhpcy53cmFwcGVySGVpZ2h0KnRoaXMud3JhcHBlckhlaWdodC8odGhpcy5zY3JvbGxlci5zY3JvbGxlckhlaWdodHx8dGhpcy53cmFwcGVySGVpZ2h0fHwxKSksOCksdGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQ9dGhpcy5pbmRpY2F0b3JIZWlnaHQrXCJweFwiKTp0aGlzLmluZGljYXRvckhlaWdodD10aGlzLmluZGljYXRvci5jbGllbnRIZWlnaHQsdGhpcy5tYXhQb3NZPXRoaXMud3JhcHBlckhlaWdodC10aGlzLmluZGljYXRvckhlaWdodCxcImNsaXBcIj09dGhpcy5vcHRpb25zLnNocmluaz8odGhpcy5taW5Cb3VuZGFyeVk9OC10aGlzLmluZGljYXRvckhlaWdodCx0aGlzLm1heEJvdW5kYXJ5WT10aGlzLndyYXBwZXJIZWlnaHQtOCk6KHRoaXMubWluQm91bmRhcnlZPTAsdGhpcy5tYXhCb3VuZGFyeVk9dGhpcy5tYXhQb3NZKSx0aGlzLm1heFBvc1k9dGhpcy53cmFwcGVySGVpZ2h0LXRoaXMuaW5kaWNhdG9ySGVpZ2h0LHRoaXMuc2l6ZVJhdGlvWT10aGlzLm9wdGlvbnMuc3BlZWRSYXRpb1l8fHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWSYmdGhpcy5tYXhQb3NZL3RoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWSksdGhpcy51cGRhdGVQb3NpdGlvbigpfSx1cGRhdGVQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy5saXN0ZW5YJiZwLnJvdW5kKHRoaXMuc2l6ZVJhdGlvWCp0aGlzLnNjcm9sbGVyLngpfHwwLGk9dGhpcy5vcHRpb25zLmxpc3RlblkmJnAucm91bmQodGhpcy5zaXplUmF0aW9ZKnRoaXMuc2Nyb2xsZXIueSl8fDA7dGhpcy5vcHRpb25zLmlnbm9yZUJvdW5kYXJpZXN8fCh0PHRoaXMubWluQm91bmRhcnlYPyhcInNjYWxlXCI9PXRoaXMub3B0aW9ucy5zaHJpbmsmJih0aGlzLndpZHRoPXAubWF4KHRoaXMuaW5kaWNhdG9yV2lkdGgrdCw4KSx0aGlzLmluZGljYXRvclN0eWxlLndpZHRoPXRoaXMud2lkdGgrXCJweFwiKSx0PXRoaXMubWluQm91bmRhcnlYKTp0PnRoaXMubWF4Qm91bmRhcnlYP3Q9XCJzY2FsZVwiPT10aGlzLm9wdGlvbnMuc2hyaW5rPyh0aGlzLndpZHRoPXAubWF4KHRoaXMuaW5kaWNhdG9yV2lkdGgtKHQtdGhpcy5tYXhQb3NYKSw4KSx0aGlzLmluZGljYXRvclN0eWxlLndpZHRoPXRoaXMud2lkdGgrXCJweFwiLHRoaXMubWF4UG9zWCt0aGlzLmluZGljYXRvcldpZHRoLXRoaXMud2lkdGgpOnRoaXMubWF4Qm91bmRhcnlYOlwic2NhbGVcIj09dGhpcy5vcHRpb25zLnNocmluayYmdGhpcy53aWR0aCE9dGhpcy5pbmRpY2F0b3JXaWR0aCYmKHRoaXMud2lkdGg9dGhpcy5pbmRpY2F0b3JXaWR0aCx0aGlzLmluZGljYXRvclN0eWxlLndpZHRoPXRoaXMud2lkdGgrXCJweFwiKSxpPHRoaXMubWluQm91bmRhcnlZPyhcInNjYWxlXCI9PXRoaXMub3B0aW9ucy5zaHJpbmsmJih0aGlzLmhlaWdodD1wLm1heCh0aGlzLmluZGljYXRvckhlaWdodCszKmksOCksdGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQ9dGhpcy5oZWlnaHQrXCJweFwiKSxpPXRoaXMubWluQm91bmRhcnlZKTppPnRoaXMubWF4Qm91bmRhcnlZP2k9XCJzY2FsZVwiPT10aGlzLm9wdGlvbnMuc2hyaW5rPyh0aGlzLmhlaWdodD1wLm1heCh0aGlzLmluZGljYXRvckhlaWdodC0zKihpLXRoaXMubWF4UG9zWSksOCksdGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQ9dGhpcy5oZWlnaHQrXCJweFwiLHRoaXMubWF4UG9zWSt0aGlzLmluZGljYXRvckhlaWdodC10aGlzLmhlaWdodCk6dGhpcy5tYXhCb3VuZGFyeVk6XCJzY2FsZVwiPT10aGlzLm9wdGlvbnMuc2hyaW5rJiZ0aGlzLmhlaWdodCE9dGhpcy5pbmRpY2F0b3JIZWlnaHQmJih0aGlzLmhlaWdodD10aGlzLmluZGljYXRvckhlaWdodCx0aGlzLmluZGljYXRvclN0eWxlLmhlaWdodD10aGlzLmhlaWdodCtcInB4XCIpKSx0aGlzLng9dCx0aGlzLnk9aSx0aGlzLnNjcm9sbGVyLm9wdGlvbnMudXNlVHJhbnNmb3JtP3RoaXMuaW5kaWNhdG9yU3R5bGVbbS5zdHlsZS50cmFuc2Zvcm1dPVwidHJhbnNsYXRlKFwiK3QrXCJweCxcIitpK1wicHgpXCIrdGhpcy5zY3JvbGxlci50cmFuc2xhdGVaOih0aGlzLmluZGljYXRvclN0eWxlLmxlZnQ9dCtcInB4XCIsdGhpcy5pbmRpY2F0b3JTdHlsZS50b3A9aStcInB4XCIpfSxfcG9zOmZ1bmN0aW9uKHQsaSl7dDwwP3Q9MDp0PnRoaXMubWF4UG9zWCYmKHQ9dGhpcy5tYXhQb3NYKSxpPDA/aT0wOmk+dGhpcy5tYXhQb3NZJiYoaT10aGlzLm1heFBvc1kpLHQ9dGhpcy5vcHRpb25zLmxpc3Rlblg/cC5yb3VuZCh0L3RoaXMuc2l6ZVJhdGlvWCk6dGhpcy5zY3JvbGxlci54LGk9dGhpcy5vcHRpb25zLmxpc3Rlblk/cC5yb3VuZChpL3RoaXMuc2l6ZVJhdGlvWSk6dGhpcy5zY3JvbGxlci55LHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8odCxpKX0sZmFkZTpmdW5jdGlvbih0LGkpe2lmKCFpfHx0aGlzLnZpc2libGUpe2NsZWFyVGltZW91dCh0aGlzLmZhZGVUaW1lb3V0KSx0aGlzLmZhZGVUaW1lb3V0PW51bGw7dmFyIHM9dD8yNTA6NTAwLGU9dD8wOjMwMDt0PXQ/XCIxXCI6XCIwXCIsdGhpcy53cmFwcGVyU3R5bGVbbS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb25dPXMrXCJtc1wiLHRoaXMuZmFkZVRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbih0KXt0aGlzLndyYXBwZXJTdHlsZS5vcGFjaXR5PXQsdGhpcy52aXNpYmxlPSt0fS5iaW5kKHRoaXMsdCksZSl9fX0sdC51dGlscz1tLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXQ6IHRydWU/KCEoX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAoZnVuY3Rpb24oKXtyZXR1cm4gdH0pLmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXywgZXhwb3J0cywgbW9kdWxlKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpLHZvaWQgMCE9PXImJihyLklTY3JvbGw9dCkpOnVuZGVmaW5lZH0od2luZG93LGRvY3VtZW50LE1hdGgpLFxuLyohXG4qIFNjcm9sbG92ZXJmbG93IDIuMC42IG1vZHVsZSBmb3IgZnVsbFBhZ2UuanMgPj0gM1xuKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanNcbiogQGxpY2Vuc2UgTUlUIGxpY2Vuc2VkXG4qXG4qIENvcHlyaWdodCAoQykgMjAxNSBhbHZhcm90cmlnby5jb20gLSBBIHByb2plY3QgYnkgQWx2YXJvIFRyaWdvXG4qL1xuZnVuY3Rpb24obCxjKXtsLmZwX3Njcm9sbG92ZXJmbG93PWZ1bmN0aW9uKCl7bC5JU2Nyb2xsfHwobC5JU2Nyb2xsPW1vZHVsZS5leHBvcnRzKTt2YXIgcz1cImZwLXNjcm9sbGFibGVcIixuPVwiLlwiK3MsdD1cIi5hY3RpdmVcIixkPVwiLmZwLXNlY3Rpb25cIixlPWQrdCxvPVwiLmZwLXNsaWRlXCIsdT1cIi5mcC10YWJsZUNlbGxcIjtmdW5jdGlvbiByKCl7dmFyIHA9dGhpcztmdW5jdGlvbiBzKCl7ZnBfdXRpbHMuaGFzQ2xhc3MoYy5ib2R5LFwiZnAtcmVzcG9uc2l2ZVwiKT9pKGUpOmkodCl9ZnVuY3Rpb24gdCh0KXtpZighZnBfdXRpbHMuaGFzQ2xhc3ModCxcImZwLW5vc2Nyb2xsXCIpKXtmcF91dGlscy5jc3ModCx7b3ZlcmZsb3c6XCJoaWRkZW5cIn0pO3ZhciBpLHMsZSxvPXAub3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIsbj1vLndyYXBDb250ZW50KCkscj1mcF91dGlscy5jbG9zZXN0KHQsZCksaD1vLnNjcm9sbGFibGUodCksYT0ocz1yLG51bGwhPShlPWZwX3V0aWxzLmNsb3Nlc3QocyxkKSk/cGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlKVtcInBhZGRpbmctYm90dG9tXCJdKStwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGUpW1wicGFkZGluZy10b3BcIl0pOjApO251bGwhPWg/aT1vLnNjcm9sbEhlaWdodCh0KTooaT10LnNjcm9sbEhlaWdodCxwLm9wdGlvbnMudmVydGljYWxDZW50ZXJlZCYmKGk9Zih1LHQpWzBdLnNjcm9sbEhlaWdodCkpO3ZhciBsPWZwX3V0aWxzLmdldFdpbmRvd0hlaWdodCgpLGM9bC1hO2w8aSthP251bGwhPWg/by51cGRhdGUodCxjKToocC5vcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQ/KGZwX3V0aWxzLndyYXBJbm5lcihmKHUsdClbMF0sbi5zY3JvbGxlciksZnBfdXRpbHMud3JhcElubmVyKGYodSx0KVswXSxuLnNjcm9sbGFibGUpKTooZnBfdXRpbHMud3JhcElubmVyKHQsbi5zY3JvbGxlciksZnBfdXRpbHMud3JhcElubmVyKHQsbi5zY3JvbGxhYmxlKSksby5jcmVhdGUodCxjLHAuaXNjcm9sbE9wdGlvbnMpKTpvLnJlbW92ZSh0KSxmcF91dGlscy5jc3ModCx7b3ZlcmZsb3c6XCJcIn0pfX1mdW5jdGlvbiBpKHMpe2YoZCkuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgaT1mKG8sdCk7aS5sZW5ndGg/aS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ModCl9KTpzKHQpfSl9ZnVuY3Rpb24gZSh0KXt2YXIgaT1wLm9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyO2ZwX3V0aWxzLmhhc0NsYXNzKGZwX3V0aWxzLmNsb3Nlc3QodCxkKSxcImZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmVcIikmJmkucmVtb3ZlKHQpfXAub3B0aW9ucz1udWxsLHAuaW5pdD1mdW5jdGlvbih0LGkpe3JldHVybiBwLm9wdGlvbnM9dCxwLmlzY3JvbGxPcHRpb25zPWksXCJjb21wbGV0ZVwiPT09Yy5yZWFkeVN0YXRlJiYocygpLGZ1bGxwYWdlX2FwaS5zaGFyZWQuYWZ0ZXJSZW5kZXJBY3Rpb25zKCkpLGwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3MoKSxmdWxscGFnZV9hcGkuc2hhcmVkLmFmdGVyUmVuZGVyQWN0aW9ucygpfSkscH0scC5jcmVhdGVTY3JvbGxCYXJGb3JBbGw9cyxwLmNyZWF0ZVNjcm9sbEJhcj10fUlTY3JvbGwucHJvdG90eXBlLndoZWVsT249ZnVuY3Rpb24oKXt0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsdGhpcyksdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsdGhpcyksdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLHRoaXMpfSxJU2Nyb2xsLnByb3RvdHlwZS53aGVlbE9mZj1mdW5jdGlvbigpe3RoaXMud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIix0aGlzKSx0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIix0aGlzKSx0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsdGhpcyl9O3ZhciBmPW51bGwsaD1udWxsLGE9e3JlZnJlc2hJZDpudWxsLGlTY3JvbGxJbnN0YW5jZXM6W10sbGFzdFNjcm9sbFk6bnVsbCxoYXNCZWVuSW5pdDohMSxpc2Nyb2xsT3B0aW9uczp7c2Nyb2xsYmFyczohMCxtb3VzZVdoZWVsOiEwLGhpZGVTY3JvbGxiYXJzOiExLGZhZGVTY3JvbGxiYXJzOiExLGRpc2FibGVNb3VzZTohMCxpbnRlcmFjdGl2ZVNjcm9sbGJhcnM6ITB9LGluaXQ6ZnVuY3Rpb24odCl7Zj1mcF91dGlscy4kLGg9dDt2YXIgaT1cIm9udG91Y2hzdGFydFwiaW4gbHx8MDxuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50c3x8bmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO3JldHVybiBhLmlzY3JvbGxPcHRpb25zLmNsaWNrPWksYS5oYXNCZWVuSW5pdD0hMCxhLmlzY3JvbGxPcHRpb25zPWZwX3V0aWxzLmRlZXBFeHRlbmQoYS5pc2Nyb2xsT3B0aW9ucyx0LnNjcm9sbE92ZXJmbG93T3B0aW9ucyksKG5ldyByKS5pbml0KHQsYS5pc2Nyb2xsT3B0aW9ucyl9LHRvZ2dsZVdoZWVsOmZ1bmN0aW9uKHMpe2YobixmKGUpWzBdKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBpPXQuZnBfaXNjcm9sbEluc3RhbmNlO251bGwhPWkmJihzP2kud2hlZWxPbigpOmkud2hlZWxPZmYoKSl9KX0sc2V0SXNjcm9sbDpmdW5jdGlvbih0LGkpe2lmKGEuaGFzQmVlbkluaXQmJnQpe3ZhciBzPWZwX3V0aWxzLmNsb3Nlc3QodCxuKXx8ZihuLHQpJiZmKG4sdClbMF0sZT1pP1wiZW5hYmxlXCI6XCJkaXNhYmxlXCI7cyYmcy5mcF9pc2Nyb2xsSW5zdGFuY2VbZV0oKX19LG9uTGVhdmU6ZnVuY3Rpb24oKXthLnRvZ2dsZVdoZWVsKCExKX0sYmVmb3JlTGVhdmU6ZnVuY3Rpb24oKXthLm9uTGVhdmUoKX0sYWZ0ZXJMb2FkOmZ1bmN0aW9uKCl7YS50b2dnbGVXaGVlbCghMCl9LGNyZWF0ZTpmdW5jdGlvbihzLGUsbyl7ZihuLHMpLmZvckVhY2goZnVuY3Rpb24odCl7ZnBfdXRpbHMuY3NzKHQse2hlaWdodDplK1wicHhcIn0pO3ZhciBpPXQuZnBfaXNjcm9sbEluc3RhbmNlO251bGwhPWkmJmEuaVNjcm9sbEluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuZGVzdHJveSgpfSksaT1uZXcgSVNjcm9sbCh0LG8pLGEuaVNjcm9sbEluc3RhbmNlcy5wdXNoKGkpLGZwX3V0aWxzLmhhc0NsYXNzKGZwX3V0aWxzLmNsb3Nlc3QocyxkKSxcImFjdGl2ZVwiKXx8aS53aGVlbE9mZigpLHQuZnBfaXNjcm9sbEluc3RhbmNlPWl9KX0saXNTY3JvbGxlZDpmdW5jdGlvbih0LGkpe3ZhciBzPWkuZnBfaXNjcm9sbEluc3RhbmNlO2lmKCFzKXJldHVybiEwO2lmKFwidG9wXCI9PT10KXJldHVybiAwPD1zLnkmJiFmcF91dGlscy5nZXRTY3JvbGxUb3AoaSk7aWYoXCJib3R0b21cIj09PXQpe3ZhciBlPWEubGFzdFNjcm9sbFk9PT1zLnk7cmV0dXJuIGEubGFzdFNjcm9sbFk9cy55LChlPzE6MCkrKDAtcy55KStmcF91dGlscy5nZXRTY3JvbGxUb3AoaSkraS5vZmZzZXRIZWlnaHQ+PWkuc2Nyb2xsSGVpZ2h0fX0sc2Nyb2xsYWJsZTpmdW5jdGlvbih0KXtyZXR1cm4gZihcIi5mcC1zbGlkZXNcIix0KS5sZW5ndGg/ZihuLGYoXCIuZnAtc2xpZGUuYWN0aXZlXCIsdClbMF0pWzBdOmYobix0KVswXX0sc2Nyb2xsSGVpZ2h0OmZ1bmN0aW9uKHQpe3JldHVybiBmKFwiLmZwLXNjcm9sbGVyXCIsZihuLHQpWzBdKVswXS5zY3JvbGxIZWlnaHR9LHJlbW92ZTpmdW5jdGlvbih0KXtpZihudWxsIT10KXt2YXIgaT1mKG4sdClbMF07aWYobnVsbCE9aSl7dmFyIHM9aS5mcF9pc2Nyb2xsSW5zdGFuY2U7bnVsbCE9cyYmcy5kZXN0cm95KCksaS5mcF9pc2Nyb2xsSW5zdGFuY2U9bnVsbCxmcF91dGlscy51bndyYXAoZihcIi5mcC1zY3JvbGxlclwiLHQpWzBdKSxmcF91dGlscy51bndyYXAoZihuLHQpWzBdKX19fSx1cGRhdGU6ZnVuY3Rpb24odCxpKXtjbGVhclRpbWVvdXQoYS5yZWZyZXNoSWQpLGEucmVmcmVzaElkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmlTY3JvbGxJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbih0KXt0LnJlZnJlc2goKSxmdWxscGFnZV9hcGkuc2lsZW50TW92ZVRvKGZwX3V0aWxzLmluZGV4KGYoZSlbMF0pKzEpfSl9LDE1MCksZnBfdXRpbHMuY3NzKGYobix0KVswXSx7aGVpZ2h0OmkrXCJweFwifSksaC52ZXJ0aWNhbENlbnRlcmVkJiZmcF91dGlscy5jc3MoZihuLHQpWzBdLnBhcmVudE5vZGUse2hlaWdodDppK1wicHhcIn0pfSx3cmFwQ29udGVudDpmdW5jdGlvbigpe3ZhciB0PWMuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTmFtZT1zO3ZhciBpPWMuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gaS5jbGFzc05hbWU9XCJmcC1zY3JvbGxlclwiLHtzY3JvbGxhYmxlOnQsc2Nyb2xsZXI6aX19fTtyZXR1cm57aXNjcm9sbEhhbmRsZXI6YX19KCl9KHdpbmRvdyxkb2N1bWVudCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JvbGxvdmVyZmxvdy5taW4uanMubWFwXG5cblxuLyoqKi8gfSksXG4vKiA1MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187LyohXG4gKiBmdWxsUGFnZSAzLjAuOSAtIEV4dGVuc2lvbnMgMC4xLjlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qc1xuICogQGxpY2Vuc2UgaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZS9leHRlbnNpb25zLyNsaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IGFsdmFyb3RyaWdvLmNvbSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cbiAqL1xuIWZ1bmN0aW9uKGUsdCxuLG8scil7IHRydWU/IShfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IChmdW5jdGlvbigpe3JldHVybiBlLmZ1bGxwYWdlPW8odCxuKSxlLmZ1bGxwYWdlfSkuY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fLCBleHBvcnRzLCBtb2R1bGUpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk6dW5kZWZpbmVkfSh0aGlzLHdpbmRvdyxkb2N1bWVudCxmdW5jdGlvbihhbixzbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGNuPVwiZnVsbHBhZ2Utd3JhcHBlclwiLHVuPVwiLlwiK2NuLGZuPVwiZnAtcmVzcG9uc2l2ZVwiLGRuPVwiZnAtbm90cmFuc2l0aW9uXCIsdm49XCJmcC1kZXN0cm95ZWRcIixwbj1cImZwLWVuYWJsZWRcIixobj1cImZwLXZpZXdpbmdcIixnbj1cImFjdGl2ZVwiLG1uPVwiLlwiK2duLFNuPVwiZnAtY29tcGxldGVseVwiLGJuPVwiZnAtc2VjdGlvblwiLHduPVwiLlwiK2JuLHluPXduK21uLEVuPVwiZnAtdGFibGVDZWxsXCIseG49XCIuXCIrRW4sQW49XCJmcC1hdXRvLWhlaWdodFwiLExuPVwiZnAtbm9ybWFsLXNjcm9sbFwiLE1uPVwiZnAtbmF2XCIsVG49XCIjXCIrTW4sT249XCJmcC10b29sdGlwXCIsa249XCJmcC1zbGlkZVwiLENuPVwiLlwiK2tuLEhuPUNuK21uLFJuPVwiZnAtc2xpZGVzXCIsSW49XCIuXCIrUm4sem49XCJmcC1zbGlkZXNDb250YWluZXJcIixCbj1cIi5cIit6bixObj1cImZwLXRhYmxlXCIsam49XCJmcC1zbGlkZXNOYXZcIixQbj1cIi5cIitqbixXbj1QbitcIiBhXCIsZT1cImZwLWNvbnRyb2xBcnJvd1wiLERuPVwiLlwiK2UsWW49XCJmcC1wcmV2XCIsVm49RG4rXCIuZnAtcHJldlwiLFpuPURuK1wiLmZwLW5leHRcIjtmdW5jdGlvbiBYbihlLHQpe2FuLmNvbnNvbGUmJmFuLmNvbnNvbGVbZV0mJmFuLmNvbnNvbGVbZV0oXCJmdWxsUGFnZTogXCIrdCl9ZnVuY3Rpb24gR24oZSx0KXtyZXR1cm4odD0xPGFyZ3VtZW50cy5sZW5ndGg/dDpzbik/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOm51bGx9ZnVuY3Rpb24gRm4oZSl7ZT1lfHx7fTtmb3IodmFyIHQ9MSxuPWFyZ3VtZW50cy5sZW5ndGg7dDxuOysrdCl7dmFyIG89YXJndW1lbnRzW3RdO2lmKG8pZm9yKHZhciByIGluIG8pby5oYXNPd25Qcm9wZXJ0eShyKSYmKFwiW29iamVjdCBPYmplY3RdXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob1tyXSk/ZVtyXT1vW3JdOmVbcl09Rm4oZVtyXSxvW3JdKSl9cmV0dXJuIGV9ZnVuY3Rpb24gVW4oZSx0KXtyZXR1cm4gbnVsbCE9ZSYmKGUuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmNvbnRhaW5zKHQpOm5ldyBSZWdFeHAoXCIoXnwgKVwiK3QrXCIoIHwkKVwiLFwiZ2lcIikudGVzdChlLmNsYXNzTmFtZSkpfWZ1bmN0aW9uIFFuKCl7cmV0dXJuXCJpbm5lckhlaWdodFwiaW4gYW4/YW4uaW5uZXJIZWlnaHQ6c24uZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodH1mdW5jdGlvbiBfbigpe3JldHVybiBhbi5pbm5lcldpZHRofWZ1bmN0aW9uIEpuKGUsdCl7dmFyIG47Zm9yKG4gaW4gZT1sKGUpLHQpaWYodC5oYXNPd25Qcm9wZXJ0eShuKSYmbnVsbCE9PW4pZm9yKHZhciBvPTA7bzxlLmxlbmd0aDtvKyspe2Vbb10uc3R5bGVbbl09dFtuXX1yZXR1cm4gZX1mdW5jdGlvbiBuKGUsdCxuKXtmb3IodmFyIG89ZVtuXTtvJiYheW8obyx0KTspbz1vW25dO3JldHVybiBvfWZ1bmN0aW9uIEtuKGUsdCl7cmV0dXJuIG4oZSx0LFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiKX1mdW5jdGlvbiAkbihlLHQpe3JldHVybiBuKGUsdCxcIm5leHRFbGVtZW50U2libGluZ1wiKX1mdW5jdGlvbiBxbihlLHQpe2lmKG51bGw9PXQpcmV0dXJuIGUucHJldmlvdXNFbGVtZW50U2libGluZzt2YXIgbj1xbihlKTtyZXR1cm4gbiYmeW8obix0KT9uOm51bGx9ZnVuY3Rpb24gZW8oZSx0KXtpZihudWxsPT10KXJldHVybiBlLm5leHRFbGVtZW50U2libGluZzt2YXIgbj1lbyhlKTtyZXR1cm4gbiYmeW8obix0KT9uOm51bGx9ZnVuY3Rpb24gdG8oZSl7cmV0dXJuIGVbZS5sZW5ndGgtMV19ZnVuY3Rpb24gbm8oZSx0KXtlPWlvKGUpP2VbMF06ZTtmb3IodmFyIG49bnVsbCE9dD9Hbih0LGUucGFyZW50Tm9kZSk6ZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMsbz0wLHI9MDtyPG4ubGVuZ3RoO3IrKyl7aWYobltyXT09ZSlyZXR1cm4gbzsxPT1uW3JdLm5vZGVUeXBlJiZvKyt9cmV0dXJuLTF9ZnVuY3Rpb24gbChlKXtyZXR1cm4gaW8oZSk/ZTpbZV19ZnVuY3Rpb24gb28oZSl7ZT1sKGUpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtyZXR1cm4gZX1mdW5jdGlvbiBybyhlKXtlPWwoZSk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0KyspZVt0XS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtyZXR1cm4gZX1mdW5jdGlvbiBpbyhlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl8fFwiW29iamVjdCBOb2RlTGlzdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX1mdW5jdGlvbiBsbyhlLHQpe2U9bChlKTtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXTtvLmNsYXNzTGlzdD9vLmNsYXNzTGlzdC5hZGQodCk6by5jbGFzc05hbWUrPVwiIFwiK3R9cmV0dXJuIGV9ZnVuY3Rpb24gYW8oZSx0KXtlPWwoZSk7Zm9yKHZhciBuPXQuc3BsaXQoXCIgXCIpLG89MDtvPG4ubGVuZ3RoO28rKyl7dD1uW29dO2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgaT1lW3JdO2kuY2xhc3NMaXN0P2kuY2xhc3NMaXN0LnJlbW92ZSh0KTppLmNsYXNzTmFtZT1pLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIit0LnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIihcXFxcYnwkKVwiLFwiZ2lcIiksXCIgXCIpfX1yZXR1cm4gZX1mdW5jdGlvbiBzbyhlLHQpe3QuYXBwZW5kQ2hpbGQoZSl9ZnVuY3Rpb24gbyhlLHQsbil7dmFyIG87dD10fHxzbi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgaT1lW3JdOyhuJiYhcnx8IW4pJiYobz10LmNsb25lTm9kZSghMCksaS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvLGkpKSxvLmFwcGVuZENoaWxkKGkpfXJldHVybiBlfWZ1bmN0aW9uIGNvKGUsdCl7byhlLHQsITApfWZ1bmN0aW9uIHVvKGUsdCl7Zm9yKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD14byh0KSksZS5hcHBlbmRDaGlsZCh0KTtlLmZpcnN0Q2hpbGQhPT10Oyl0LmFwcGVuZENoaWxkKGUuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gZm8oZSl7Zm9yKHZhciB0PXNuLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtlLmZpcnN0Q2hpbGQ7KXQuYXBwZW5kQ2hpbGQoZS5maXJzdENoaWxkKTtlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHQsZSl9ZnVuY3Rpb24gdm8oZSx0KXtyZXR1cm4gZSYmMT09PWUubm9kZVR5cGU/eW8oZSx0KT9lOnZvKGUucGFyZW50Tm9kZSx0KTpudWxsfWZ1bmN0aW9uIHBvKGUsdCl7cihlLGUubmV4dFNpYmxpbmcsdCl9ZnVuY3Rpb24gaG8oZSx0KXtyKGUsZSx0KX1mdW5jdGlvbiByKGUsdCxuKXtpbyhuKXx8KFwic3RyaW5nXCI9PXR5cGVvZiBuJiYobj14byhuKSksbj1bbl0pO2Zvcih2YXIgbz0wO288bi5sZW5ndGg7bysrKWUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobltvXSx0KX1mdW5jdGlvbiBnbygpe3ZhciBlPXNuLmRvY3VtZW50RWxlbWVudDtyZXR1cm4oYW4ucGFnZVlPZmZzZXR8fGUuc2Nyb2xsVG9wKS0oZS5jbGllbnRUb3B8fDApfWZ1bmN0aW9uIG1vKHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodC5wYXJlbnROb2RlLmNoaWxkcmVuLGZ1bmN0aW9uKGUpe3JldHVybiBlIT09dH0pfWZ1bmN0aW9uIFNvKGUpe2UucHJldmVudERlZmF1bHQ/ZS5wcmV2ZW50RGVmYXVsdCgpOmUucmV0dXJuVmFsdWU9ITF9ZnVuY3Rpb24gYm8oZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4hMDt2YXIgdD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKGUpO3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PXR8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09PXR9ZnVuY3Rpb24gd28oZSx0LG4pe3ZhciBvO249dm9pZCAwPT09bj97fTpuLFwiZnVuY3Rpb25cIj09dHlwZW9mIGFuLkN1c3RvbUV2ZW50P289bmV3IEN1c3RvbUV2ZW50KHQse2RldGFpbDpufSk6KG89c24uY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KHQsITAsITAsbiksZS5kaXNwYXRjaEV2ZW50KG8pfWZ1bmN0aW9uIHlvKGUsdCl7cmV0dXJuKGUubWF0Y2hlc3x8ZS5tYXRjaGVzU2VsZWN0b3J8fGUubXNNYXRjaGVzU2VsZWN0b3J8fGUubW96TWF0Y2hlc1NlbGVjdG9yfHxlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yKS5jYWxsKGUsdCl9ZnVuY3Rpb24gRW8oZSx0KXtpZihcImJvb2xlYW5cIj09dHlwZW9mIHQpZm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspZVtuXS5zdHlsZS5kaXNwbGF5PXQ/XCJibG9ja1wiOlwibm9uZVwiO3JldHVybiBlfWZ1bmN0aW9uIHhvKGUpe3ZhciB0PXNuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuaW5uZXJIVE1MPWUudHJpbSgpLHQuZmlyc3RDaGlsZH1mdW5jdGlvbiBBbyhlKXtlPWwoZSk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciBuPWVbdF07biYmbi5wYXJlbnRFbGVtZW50JiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobil9fWZ1bmN0aW9uIGkoZSx0LG4pe2Zvcih2YXIgbz1lW25dLHI9W107bzspKHlvKG8sdCl8fG51bGw9PXQpJiZyLnB1c2gobyksbz1vW25dO3JldHVybiByfWZ1bmN0aW9uIExvKGUsdCl7cmV0dXJuIGkoZSx0LFwibmV4dEVsZW1lbnRTaWJsaW5nXCIpfWZ1bmN0aW9uIE1vKGUsdCl7cmV0dXJuIGkoZSx0LFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiKX1mdW5jdGlvbiBUbyhlLHQpe2UuaW5zZXJ0QmVmb3JlKHQsZS5maXJzdENoaWxkKX1yZXR1cm4gYW4uTm9kZUxpc3QmJiFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCYmKE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKGUsdCl7dD10fHxhbjtmb3IodmFyIG49MDtuPHRoaXMubGVuZ3RoO24rKyllLmNhbGwodCx0aGlzW25dLG4sdGhpcyl9KSxhbi5mcF91dGlscz17JDpHbixkZWVwRXh0ZW5kOkZuLGhhc0NsYXNzOlVuLGdldFdpbmRvd0hlaWdodDpRbixjc3M6Sm4sdW50aWw6bixwcmV2VW50aWw6S24sbmV4dFVudGlsOiRuLHByZXY6cW4sbmV4dDplbyxsYXN0OnRvLGluZGV4Om5vLGdldExpc3Q6bCxoaWRlOm9vLHNob3c6cm8saXNBcnJheU9yTGlzdDppbyxhZGRDbGFzczpsbyxyZW1vdmVDbGFzczphbyxhcHBlbmRUbzpzbyx3cmFwOm8sd3JhcEFsbDpjbyx3cmFwSW5uZXI6dW8sdW53cmFwOmZvLGNsb3Nlc3Q6dm8sYWZ0ZXI6cG8sYmVmb3JlOmhvLGluc2VydEJlZm9yZTpyLGdldFNjcm9sbFRvcDpnbyxzaWJsaW5nczptbyxwcmV2ZW50RGVmYXVsdDpTbyxpc0Z1bmN0aW9uOmJvLHRyaWdnZXI6d28sbWF0Y2hlczp5byx0b2dnbGU6RW8sY3JlYXRlRWxlbWVudEZyb21IVE1MOnhvLHJlbW92ZTpBbyxmaWx0ZXI6ZnVuY3Rpb24oZSx0KXtBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZSx0KX0sdW50aWxBbGw6aSxuZXh0QWxsOkxvLHByZXZBbGw6TW8sc2hvd0Vycm9yOlhuLHByZXBlbmRUbzpUbyx0b2dnbGVDbGFzczpmdW5jdGlvbihlLHQsbil7aWYoZS5jbGFzc0xpc3QmJm51bGw9PW4pZS5jbGFzc0xpc3QudG9nZ2xlKHQpO2Vsc2V7dmFyIG89VW4oZSx0KTtvJiZudWxsPT1ufHwhbj9hbyhlLHQpOighbyYmbnVsbD09bnx8bikmJmxvKGUsdCl9fX0sZnVuY3Rpb24oZSxnKXt2YXIgbj1nJiZuZXcgUmVnRXhwKFwiKFtcXFxcZFxcXFx3XXs4fS0pezN9W1xcXFxkXFxcXHddezh9fF4oPz0uKj9bQS1ZXSkoPz0uKj9bYS15XSkoPz0uKj9bMC04XSkoPz0uKj9bIz8hQCQlXiYqLV0pLns4LH0kXCIpLnRlc3QoZy5saWNlbnNlS2V5KXx8LTE8c24uZG9tYWluLmluZGV4T2YoXCJhbHZhcm90cmlnby5jb21cIikscj1HbihcImh0bWwsIGJvZHlcIikscz1HbihcImh0bWxcIilbMF0sbT1HbihcImJvZHlcIilbMF07aWYoIVVuKHMscG4pKXt2YXIgUz17fTtnPUZuKHttZW51OiExLGFuY2hvcnM6W10sbG9ja0FuY2hvcnM6ITEsbmF2aWdhdGlvbjohMSxuYXZpZ2F0aW9uUG9zaXRpb246XCJyaWdodFwiLG5hdmlnYXRpb25Ub29sdGlwczpbXSxzaG93QWN0aXZlVG9vbHRpcDohMSxzbGlkZXNOYXZpZ2F0aW9uOiExLHNsaWRlc05hdlBvc2l0aW9uOlwiYm90dG9tXCIsc2Nyb2xsQmFyOiExLGh5YnJpZDohMSxjc3MzOiEwLHNjcm9sbGluZ1NwZWVkOjcwMCxhdXRvU2Nyb2xsaW5nOiEwLGZpdFRvU2VjdGlvbjohMCxmaXRUb1NlY3Rpb25EZWxheToxZTMsZWFzaW5nOlwiZWFzZUluT3V0Q3ViaWNcIixlYXNpbmdjc3MzOlwiZWFzZVwiLGxvb3BCb3R0b206ITEsbG9vcFRvcDohMSxsb29wSG9yaXpvbnRhbDohMCxjb250aW51b3VzVmVydGljYWw6ITEsY29udGludW91c0hvcml6b250YWw6ITEsc2Nyb2xsSG9yaXpvbnRhbGx5OiExLGludGVybG9ja2VkU2xpZGVzOiExLGRyYWdBbmRNb3ZlOiExLG9mZnNldFNlY3Rpb25zOiExLHJlc2V0U2xpZGVyczohMSxmYWRpbmdFZmZlY3Q6ITEsbm9ybWFsU2Nyb2xsRWxlbWVudHM6bnVsbCxzY3JvbGxPdmVyZmxvdzohMSxzY3JvbGxPdmVyZmxvd1Jlc2V0OiExLHNjcm9sbE92ZXJmbG93SGFuZGxlcjphbi5mcF9zY3JvbGxvdmVyZmxvdz9hbi5mcF9zY3JvbGxvdmVyZmxvdy5pc2Nyb2xsSGFuZGxlcjpudWxsLHNjcm9sbE92ZXJmbG93T3B0aW9uczpudWxsLHRvdWNoU2Vuc2l0aXZpdHk6NSx0b3VjaFdyYXBwZXI6XCJzdHJpbmdcIj09dHlwZW9mIGU/R24oZSlbMF06ZSxiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uOm51bGwsa2V5Ym9hcmRTY3JvbGxpbmc6ITAsYW5pbWF0ZUFuY2hvcjohMCxyZWNvcmRIaXN0b3J5OiEwLGNvbnRyb2xBcnJvd3M6ITAsY29udHJvbEFycm93Q29sb3I6XCIjZmZmXCIsdmVydGljYWxDZW50ZXJlZDohMCxzZWN0aW9uc0NvbG9yOltdLHBhZGRpbmdUb3A6MCxwYWRkaW5nQm90dG9tOjAsZml4ZWRFbGVtZW50czpudWxsLHJlc3BvbnNpdmU6MCxyZXNwb25zaXZlV2lkdGg6MCxyZXNwb25zaXZlSGVpZ2h0OjAscmVzcG9uc2l2ZVNsaWRlczohMSxwYXJhbGxheDohMSxwYXJhbGxheE9wdGlvbnM6e3R5cGU6XCJyZXZlYWxcIixwZXJjZW50YWdlOjYyLHByb3BlcnR5OlwidHJhbnNsYXRlXCJ9LGNhcmRzOiExLGNhcmRzT3B0aW9uczp7cGVyc3BlY3RpdmU6MTAwLGZhZGVDb250ZW50OiEwLGZhZGVCYWNrZ3JvdW5kOiEwfSxzZWN0aW9uU2VsZWN0b3I6XCIuc2VjdGlvblwiLHNsaWRlU2VsZWN0b3I6XCIuc2xpZGVcIix2MmNvbXBhdGlibGU6ITEsYWZ0ZXJMb2FkOm51bGwsb25MZWF2ZTpudWxsLGFmdGVyUmVuZGVyOm51bGwsYWZ0ZXJSZXNpemU6bnVsbCxhZnRlclJlQnVpbGQ6bnVsbCxhZnRlclNsaWRlTG9hZDpudWxsLG9uU2xpZGVMZWF2ZTpudWxsLGFmdGVyUmVzcG9uc2l2ZTpudWxsLGxhenlMb2FkaW5nOiEwfSxnKTt2YXIgYixpLGMsbyxhPSExLGw9bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxwbGF5Ym9va3xzaWxrfEJsYWNrQmVycnl8QkIxMHxXaW5kb3dzIFBob25lfFRpemVufEJhZGF8d2ViT1N8SUVNb2JpbGV8T3BlcmEgTWluaSkvKSx1PVwib250b3VjaHN0YXJ0XCJpbiBhbnx8MDxuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50c3x8bmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzLHc9XCJzdHJpbmdcIj09dHlwZW9mIGU/R24oZSlbMF06ZSx5PVFuKCksZj1fbigpLEU9ITEsdD0hMCx4PSEwLGQ9W10sdj17bTp7dXA6ITAsZG93bjohMCxsZWZ0OiEwLHJpZ2h0OiEwfX07di5rPUZuKHt9LHYubSk7dmFyIHAsaCxBLEwsTSxULE8sayxDLEgsUj1WdCgpLEk9e3RvdWNobW92ZTpcIm9udG91Y2htb3ZlXCJpbiBhbj9cInRvdWNobW92ZVwiOlIubW92ZSx0b3VjaHN0YXJ0Olwib250b3VjaHN0YXJ0XCJpbiBhbj9cInRvdWNoc3RhcnRcIjpSLmRvd259LHo9ITEsQj0hVW4obSxvdChcIk9ITnNkM0F0Wm5Wc2JIQmhaMlV0YW5NNVQyMD1cIikpLE49J2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsIFt0YWJpbmRleD1cIjBcIl0sIFtjb250ZW50ZWRpdGFibGVdJyxqPSExO3RyeXt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe2o9ITB9fSk7YW4uYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlXCIsbnVsbCxQKSxhbi5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFBhc3NpdmVcIixudWxsLFApfWNhdGNoKGUpe312YXIgVyxELFksVj1Gbih7fSxnKSxaPSExLFg9ITAsRz17fTtlbigpLGFuLmZwX2Vhc2luZ3M9Rm4oYW4uZnBfZWFzaW5ncyx7ZWFzZUluT3V0Q3ViaWM6ZnVuY3Rpb24oZSx0LG4sbyl7cmV0dXJuKGUvPW8vMik8MT9uLzIqZSplKmUrdDpuLzIqKChlLT0yKSplKmUrMikrdH19KSx3JiYoUy52ZXJzaW9uPVwiMy4wLjhcIixTLnNldEF1dG9TY3JvbGxpbmc9cmUsUy5zZXRSZWNvcmRIaXN0b3J5PWllLFMuc2V0U2Nyb2xsaW5nU3BlZWQ9bGUsUy5zZXRGaXRUb1NlY3Rpb249YWUsUy5zZXRMb2NrQW5jaG9ycz1mdW5jdGlvbihlKXtnLmxvY2tBbmNob3JzPWV9LFMuc2V0TW91c2VXaGVlbFNjcm9sbGluZz1zZSxTLnNldEFsbG93U2Nyb2xsaW5nPWNlLFMuc2V0S2V5Ym9hcmRTY3JvbGxpbmc9ZmUsUy5tb3ZlU2VjdGlvblVwPWRlLFMubW92ZVNlY3Rpb25Eb3duPXZlLFMuc2lsZW50TW92ZVRvPXBlLFMubW92ZVRvPWhlLFMubW92ZVNsaWRlUmlnaHQ9Z2UsUy5tb3ZlU2xpZGVMZWZ0PW1lLFMuZml0VG9TZWN0aW9uPVJlLFMucmVCdWlsZD1TZSxTLnNldFJlc3BvbnNpdmU9d2UsUy5nZXRGdWxscGFnZURhdGE9ZnVuY3Rpb24oKXtyZXR1cm57b3B0aW9uczpnLGludGVybmFsczp7Y29udGFpbmVyOncsY2FuU2Nyb2xsOngsaXNTY3JvbGxBbGxvd2VkOnYsZ2V0RGVzdGluYXRpb25Qb3NpdGlvbjpWZSxpc1RvdWNoOnUsYzphdCxnZXRYbW92ZW1lbnQ6SHQscmVtb3ZlQW5pbWF0aW9uOk90LGdldFRyYW5zZm9ybXM6RnQsbGF6eUxvYWQ6S2UsYWRkQW5pbWF0aW9uOlR0LHBlcmZvcm1Ib3Jpem9udGFsTW92ZTp4dCxsYW5kc2NhcGVTY3JvbGw6d3Qsc2lsZW50TGFuZHNjYXBlU2Nyb2xsOlh0LGtlZXBTbGlkZXNQb3NpdGlvbjpZZSxzaWxlbnRTY3JvbGw6R3Qsc3R5bGVTbGlkZXM6TWUsc3R5bGVTZWN0aW9uOk9lLHNjcm9sbEhhbmRsZXI6SGUsZ2V0RXZlbnRzUGFnZTpadCxnZXRNU1BvaW50ZXI6VnQsaXNSZWFsbHlUb3VjaDpOZSx1c2luZ0V4dGVuc2lvbjpfdCx0b2dnbGVDb250cm9sQXJyb3dzOnl0LHRvdWNoU3RhcnRIYW5kbGVyOmplLHRvdWNoTW92ZUhhbmRsZXI6QmV9fX0sUy5kZXN0cm95PWZ1bmN0aW9uKGUpe3dvKHcsXCJkZXN0cm95XCIsZSkscmUoITEsXCJpbnRlcm5hbFwiKSxjZSghMCksdWUoITEpLGZlKCExKSxsbyh3LHZuKSxbTSxMLGgsVCxPLEMsQSxZXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlKX0pLGFuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixIZSksYW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIix1dCksYW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLEF0KSxzbi5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGR0KSxzbi5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix2dCksW1wiY2xpY2tcIixcInRvdWNoc3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtzbi5yZW1vdmVFdmVudExpc3RlbmVyKGUseWUpfSksW1wibW91c2VlbnRlclwiLFwidG91Y2hzdGFydFwiLFwibW91c2VsZWF2ZVwiLFwidG91Y2hlbmRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtzbi5yZW1vdmVFdmVudExpc3RlbmVyKGUseGUsITApfSksSnQoXCJkcmFnQW5kTW92ZVwiLFwiZGVzdHJveVwiKSxlJiYoR3QoMCksR24oXCJpbWdbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10sIGlmcmFtZVtkYXRhLXNyY11cIix3KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe19lKGUsXCJzcmNcIil9KSxHbihcImltZ1tkYXRhLXNyY3NldF1cIikuZm9yRWFjaChmdW5jdGlvbihlKXtfZShlLFwic3Jjc2V0XCIpfSksQW8oR24oVG4rXCIsIFwiK1BuK1wiLCBcIitEbikpLEpuKEduKHduKSx7aGVpZ2h0OlwiXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJcIixwYWRkaW5nOlwiXCJ9KSxKbihHbihDbikse3dpZHRoOlwiXCJ9KSxKbih3LHtoZWlnaHQ6XCJcIixwb3NpdGlvbjpcIlwiLFwiLW1zLXRvdWNoLWFjdGlvblwiOlwiXCIsXCJ0b3VjaC1hY3Rpb25cIjpcIlwifSksSm4ocix7b3ZlcmZsb3c6XCJcIixoZWlnaHQ6XCJcIn0pLGFvKHMscG4pLGFvKG0sZm4pLG0uY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbihlKXswPT09ZS5pbmRleE9mKGhuKSYmYW8obSxlKX0pLEduKHduK1wiLCBcIitDbikuZm9yRWFjaChmdW5jdGlvbihlKXtnLnNjcm9sbE92ZXJmbG93SGFuZGxlciYmZy5zY3JvbGxPdmVyZmxvdyYmZy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIucmVtb3ZlKGUpLGFvKGUsTm4rXCIgXCIrZ24rXCIgXCIrU24pO3ZhciB0PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1mcC1zdHlsZXNcIik7dCYmZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1mcC1zdHlsZXNcIikpLFVuKGUsYm4pJiYhWiYmZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKX0pLFF0KHcpLFt4bixCbixJbl0uZm9yRWFjaChmdW5jdGlvbihlKXtHbihlLHcpLmZvckVhY2goZnVuY3Rpb24oZSl7Zm8oZSl9KX0pLGFuLnNjcm9sbFRvKDAsMCksW2JuLGtuLHpuXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FvKEduKFwiLlwiK2UpLGUpfSkpfSxTLmdldEFjdGl2ZVNlY3Rpb249ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHJuKEduKHluKVswXSl9LFMuZ2V0QWN0aXZlU2xpZGU9ZnVuY3Rpb24oKXtyZXR1cm4gRmUoR24oSG4sR24oeW4pWzBdKVswXSl9LFMubGFuZHNjYXBlU2Nyb2xsPXd0LFMudGVzdD17dG9wOlwiMHB4XCIsdHJhbnNsYXRlM2Q6XCJ0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KVwiLHRyYW5zbGF0ZTNkSDpmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDxHbihnLnNlY3Rpb25TZWxlY3Rvcix3KS5sZW5ndGg7dCsrKWUucHVzaChcInRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpXCIpO3JldHVybiBlfSgpLGxlZnQ6ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8R24oZy5zZWN0aW9uU2VsZWN0b3IsdykubGVuZ3RoO3QrKyllLnB1c2goMCk7cmV0dXJuIGV9KCksb3B0aW9uczpnLHNldEF1dG9TY3JvbGxpbmc6cmV9LFMuc2hhcmVkPXthZnRlclJlbmRlckFjdGlvbnM6Q2UsaXNOb3JtYWxTY3JvbGxFbGVtZW50OiExfSxhbi5mdWxscGFnZV9hcGk9Uyxhbi5mdWxscGFnZV9leHRlbnNpb25zPSEwLGcuJCYmT2JqZWN0LmtleXMoUykuZm9yRWFjaChmdW5jdGlvbihlKXtnLiQuZm4uZnVsbHBhZ2VbZV09U1tlXX0pLExlKFwiY29udGludW91c0hvcml6b250YWxcIiksTGUoXCJzY3JvbGxIb3Jpem9udGFsbHlcIiksTGUoXCJyZXNldFNsaWRlcnNcIiksTGUoXCJpbnRlcmxvY2tlZFNsaWRlc1wiKSxMZShcInJlc3BvbnNpdmVTbGlkZXNcIiksTGUoXCJmYWRpbmdFZmZlY3RcIiksTGUoXCJkcmFnQW5kTW92ZVwiKSxMZShcIm9mZnNldFNlY3Rpb25zXCIpLExlKFwic2Nyb2xsT3ZlcmZsb3dSZXNldFwiKSxMZShcInBhcmFsbGF4XCIpLExlKFwiY2FyZHNcIiksSnQoXCJkcmFnQW5kTW92ZVwiLFwiaW5pdFwiKSxnLmNzczMmJihnLmNzczM9ZnVuY3Rpb24oKXt2YXIgZSx0PXNuLmNyZWF0ZUVsZW1lbnQoXCJwXCIpLG49e3dlYmtpdFRyYW5zZm9ybTpcIi13ZWJraXQtdHJhbnNmb3JtXCIsT1RyYW5zZm9ybTpcIi1vLXRyYW5zZm9ybVwiLG1zVHJhbnNmb3JtOlwiLW1zLXRyYW5zZm9ybVwiLE1velRyYW5zZm9ybTpcIi1tb3otdHJhbnNmb3JtXCIsdHJhbnNmb3JtOlwidHJhbnNmb3JtXCJ9O2Zvcih2YXIgbyBpbiB0LnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHNuLmJvZHkuaW5zZXJ0QmVmb3JlKHQsbnVsbCksbil2b2lkIDAhPT10LnN0eWxlW29dJiYodC5zdHlsZVtvXT1cInRyYW5zbGF0ZTNkKDFweCwxcHgsMXB4KVwiLGU9YW4uZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKG5bb10pKTtyZXR1cm4gc24uYm9keS5yZW1vdmVDaGlsZCh0KSx2b2lkIDAhPT1lJiYwPGUubGVuZ3RoJiZcIm5vbmVcIiE9PWV9KCkpLGcuc2Nyb2xsQmFyPWcuc2Nyb2xsQmFyfHxnLmh5YnJpZCxmdW5jdGlvbigpe2lmKCFnLmFuY2hvcnMubGVuZ3RoKXt2YXIgZT1cIltkYXRhLWFuY2hvcl1cIix0PUduKGcuc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiLFwiKS5qb2luKGUrXCIsXCIpK2Usdyk7dC5sZW5ndGgmJnQubGVuZ3RoPT09R24od24pLmxlbmd0aCYmKFo9ITAsdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2cuYW5jaG9ycy5wdXNoKGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIikudG9TdHJpbmcoKSl9KSl9aWYoIWcubmF2aWdhdGlvblRvb2x0aXBzLmxlbmd0aCl7dmFyIG49XCJbZGF0YS10b29sdGlwXVwiLG89R24oZy5zZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIsXCIpLmpvaW4obitcIixcIikrbix3KTtvLmxlbmd0aCYmby5mb3JFYWNoKGZ1bmN0aW9uKGUpe2cubmF2aWdhdGlvblRvb2x0aXBzLnB1c2goZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvb2x0aXBcIikudG9TdHJpbmcoKSl9KX19KCksZnVuY3Rpb24oKXtKbih3LHtoZWlnaHQ6XCIxMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSksbG8odyxjbiksbG8ocyxwbikseT1RbigpLGFvKHcsdm4pLGxvKEduKGcuc2VjdGlvblNlbGVjdG9yLHcpLGJuKSxsbyhHbihnLnNsaWRlU2VsZWN0b3Isdyksa24pLEp0KFwicGFyYWxsYXhcIixcImluaXRcIik7Zm9yKHZhciBlPUduKHduKSx0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciBuPXQsbz1lW3RdLHI9R24oQ24sbyksaT1yLmxlbmd0aDtvLnNldEF0dHJpYnV0ZShcImRhdGEtZnAtc3R5bGVzXCIsby5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSksT2UobyxuKSxsPW8sYT1uLHZvaWQgMCE9PWcuYW5jaG9yc1thXSYmVW4obCxnbikmJmt0KGcuYW5jaG9yc1thXSxhKSxnLm1lbnUmJmcuY3NzMyYmbnVsbCE9dm8oR24oZy5tZW51KVswXSx1bikmJkduKGcubWVudSkuZm9yRWFjaChmdW5jdGlvbihlKXttLmFwcGVuZENoaWxkKGUpfSksMDxpP01lKG8scixpKTpnLnZlcnRpY2FsQ2VudGVyZWQmJlJ0KG8pfXZhciBsLGE7Zy5maXhlZEVsZW1lbnRzJiZnLmNzczMmJkduKGcuZml4ZWRFbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbihlKXttLmFwcGVuZENoaWxkKGUpfSksZy5uYXZpZ2F0aW9uJiZmdW5jdGlvbigpe3ZhciBlPXNuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLE1uKTt2YXIgdD1zbi5jcmVhdGVFbGVtZW50KFwidWxcIik7ZS5hcHBlbmRDaGlsZCh0KSxzbyhlLG0pO3ZhciBuPUduKFRuKVswXTtsbyhuLFwiZnAtXCIrZy5uYXZpZ2F0aW9uUG9zaXRpb24pLGcuc2hvd0FjdGl2ZVRvb2x0aXAmJmxvKG4sXCJmcC1zaG93LWFjdGl2ZVwiKTtmb3IodmFyIG89XCJcIixyPTA7cjxHbih3bikubGVuZ3RoO3IrKyl7dmFyIGk9XCJcIjtnLmFuY2hvcnMubGVuZ3RoJiYoaT1nLmFuY2hvcnNbcl0pLG8rPSc8bGk+PGEgaHJlZj1cIiMnK2krJ1wiPjxzcGFuIGNsYXNzPVwiZnAtc3Itb25seVwiPicra2UocixcIlNlY3Rpb25cIikrXCI8L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT5cIjt2YXIgbD1nLm5hdmlnYXRpb25Ub29sdGlwc1tyXTt2b2lkIDAhPT1sJiZcIlwiIT09bCYmKG8rPSc8ZGl2IGNsYXNzPVwiJytPbitcIiBmcC1cIitnLm5hdmlnYXRpb25Qb3NpdGlvbisnXCI+JytsK1wiPC9kaXY+XCIpLG8rPVwiPC9saT5cIn1HbihcInVsXCIsbilbMF0uaW5uZXJIVE1MPW8sbG8oR24oXCJhXCIsR24oXCJsaVwiLEduKFRuKVswXSlbbm8oR24oeW4pWzBdLHduKV0pLGduKX0oKSxHbignaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLHcpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQsbixvO249XCJlbmFibGVqc2FwaT0xXCIsbz0odD1lKS5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixvKygvXFw/Ly50ZXN0KG8pP1wiJlwiOlwiP1wiKStuKX0pLEp0KFwiZmFkaW5nRWZmZWN0XCIsXCJhcHBseVwiKSxKdChcImNhcmRzXCIsXCJpbml0XCIpLGcuc2Nyb2xsT3ZlcmZsb3cmJihwPWcuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmluaXQoZykpfSgpLGNlKCEwKSx1ZSghMCkscmUoZy5hdXRvU2Nyb2xsaW5nLFwiaW50ZXJuYWxcIiksTXQoKSxZdCgpLFwiY29tcGxldGVcIj09PXNuLnJlYWR5U3RhdGUmJmN0KCksYW4uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixjdCksZy5zY3JvbGxPdmVyZmxvd3x8Q2UoKSxmdW5jdGlvbigpe2Zvcih2YXIgZT0xO2U8NDtlKyspQz1zZXRUaW1lb3V0KEFlLDM1MCplKX0oKSxCfHxhdChcImxcIiksYW4uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLEhlKSxhbi5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLHV0KSxhbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixtdCksYW4uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixTdCksYW4uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLEF0KSxzbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGR0KSxzbi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix2dCksW1wiY2xpY2tcIixcInRvdWNoc3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtzbi5hZGRFdmVudExpc3RlbmVyKGUseWUpfSksZy5ub3JtYWxTY3JvbGxFbGVtZW50cyYmKFtcIm1vdXNlZW50ZXJcIixcInRvdWNoc3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtFZShlLCExKX0pLFtcIm1vdXNlbGVhdmVcIixcInRvdWNoZW5kXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7RWUoZSwhMCl9KSksSnQoXCJkcmFnQW5kTW92ZVwiLFwidHVybk9mZlRvdWNoXCIpKTt2YXIgRixVLFEsXz0hMSxKPTAsSz0wLCQ9MCxxPTAsZWU9KG5ldyBEYXRlKS5nZXRUaW1lKCksdGU9MCxuZT0wLG9lPXk7cmV0dXJuIFN9ZnVuY3Rpb24gcmUoZSx0KXtlfHxHdCgwKSxxdChcImF1dG9TY3JvbGxpbmdcIixlLHQpO3ZhciBuPUduKHluKVswXTtpZihnLmF1dG9TY3JvbGxpbmcmJiFnLnNjcm9sbEJhcilKbihyLHtvdmVyZmxvdzpcImhpZGRlblwiLGhlaWdodDpcIjEwMCVcIn0pLGllKFYucmVjb3JkSGlzdG9yeSxcImludGVybmFsXCIpLEpuKHcse1wiLW1zLXRvdWNoLWFjdGlvblwiOlwibm9uZVwiLFwidG91Y2gtYWN0aW9uXCI6XCJub25lXCJ9KSxudWxsIT1uJiZHdChuLm9mZnNldFRvcCk7ZWxzZSBpZihKbihyLHtvdmVyZmxvdzpcInZpc2libGVcIixoZWlnaHQ6XCJpbml0aWFsXCJ9KSxpZSghIWcuYXV0b1Njcm9sbGluZyYmVi5yZWNvcmRIaXN0b3J5LFwiaW50ZXJuYWxcIiksSm4odyx7XCItbXMtdG91Y2gtYWN0aW9uXCI6XCJcIixcInRvdWNoLWFjdGlvblwiOlwiXCJ9KSxRdCh3KSxudWxsIT1uKXt2YXIgbz1VZShuLm9mZnNldFRvcCk7by5lbGVtZW50LnNjcm9sbFRvKDAsby5vcHRpb25zKX13byh3LFwic2V0QXV0b1Njcm9sbGluZ1wiLGUpfWZ1bmN0aW9uIGllKGUsdCl7cXQoXCJyZWNvcmRIaXN0b3J5XCIsZSx0KX1mdW5jdGlvbiBsZShlLHQpe1wiaW50ZXJuYWxcIiE9PXQmJl90KFwiZmFkaW5nRWZmZWN0XCIpJiZTLmZhZGluZ0VmZmVjdC51cGRhdGUoZSksX3QoXCJjYXJkc1wiKSYmUy5jYXJkcy51cGRhdGUoZSkscXQoXCJzY3JvbGxpbmdTcGVlZFwiLGUsdCl9ZnVuY3Rpb24gYWUoZSx0KXtxdChcImZpdFRvU2VjdGlvblwiLGUsdCl9ZnVuY3Rpb24gc2UoZSl7ZT8oZnVuY3Rpb24oKXt2YXIgZSx0PVwiXCI7YW4uYWRkRXZlbnRMaXN0ZW5lcj9lPVwiYWRkRXZlbnRMaXN0ZW5lclwiOihlPVwiYXR0YWNoRXZlbnRcIix0PVwib25cIik7dmFyIG49XCJvbndoZWVsXCJpbiBzbi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpP1wid2hlZWxcIjp2b2lkIDAhPT1zbi5vbm1vdXNld2hlZWw/XCJtb3VzZXdoZWVsXCI6XCJET01Nb3VzZVNjcm9sbFwiLG89ISFqJiZ7cGFzc2l2ZTohMX07XCJET01Nb3VzZVNjcm9sbFwiPT1uP3NuW2VdKHQrXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIsV2Usbyk6c25bZV0odCtuLFdlLG8pfSgpLHcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHB0KSx3LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsaHQpKTooc24uYWRkRXZlbnRMaXN0ZW5lcj8oc24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIixXZSwhMSksc24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsV2UsITEpLHNuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIsV2UsITEpKTpzbi5kZXRhY2hFdmVudChcIm9ubW91c2V3aGVlbFwiLFdlKSx3LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixwdCksdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGh0KSl9ZnVuY3Rpb24gY2UodCxlKXt2b2lkIDAhPT1lPyhlPWUucmVwbGFjZSgvIC9nLFwiXCIpLnNwbGl0KFwiLFwiKSkuZm9yRWFjaChmdW5jdGlvbihlKXtVdCh0LGUsXCJtXCIpfSk6VXQodCxcImFsbFwiLFwibVwiKSx3byh3LFwic2V0QWxsb3dTY3JvbGxpbmdcIix7dmFsdWU6dCxkaXJlY3Rpb25zOmV9KX1mdW5jdGlvbiB1ZShlKXtlPyhzZSghMCksZnVuY3Rpb24oKXtpZigobHx8dSkmJighX3QoXCJkcmFnQW5kTW92ZVwiKXx8XCJtb3VzZW9ubHlcIj09PWcuZHJhZ0FuZE1vdmUpKXtnLmF1dG9TY3JvbGxpbmcmJihtLnJlbW92ZUV2ZW50TGlzdGVuZXIoSS50b3VjaG1vdmUsemUse3Bhc3NpdmU6ITF9KSxtLmFkZEV2ZW50TGlzdGVuZXIoSS50b3VjaG1vdmUsemUse3Bhc3NpdmU6ITF9KSk7dmFyIGU9Zy50b3VjaFdyYXBwZXI7ZS5yZW1vdmVFdmVudExpc3RlbmVyKEkudG91Y2hzdGFydCxqZSksZS5yZW1vdmVFdmVudExpc3RlbmVyKEkudG91Y2htb3ZlLEJlLHtwYXNzaXZlOiExfSksZS5hZGRFdmVudExpc3RlbmVyKEkudG91Y2hzdGFydCxqZSksZS5hZGRFdmVudExpc3RlbmVyKEkudG91Y2htb3ZlLEJlLHtwYXNzaXZlOiExfSl9fSgpKTooc2UoITEpLGZ1bmN0aW9uKCl7aWYobHx8dSl7Zy5hdXRvU2Nyb2xsaW5nJiYobS5yZW1vdmVFdmVudExpc3RlbmVyKEkudG91Y2htb3ZlLEJlLHtwYXNzaXZlOiExfSksbS5yZW1vdmVFdmVudExpc3RlbmVyKEkudG91Y2htb3ZlLHplLHtwYXNzaXZlOiExfSkpO3ZhciBlPWcudG91Y2hXcmFwcGVyO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihJLnRvdWNoc3RhcnQsamUpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihJLnRvdWNobW92ZSxCZSx7cGFzc2l2ZTohMX0pfX0oKSl9ZnVuY3Rpb24gZmUodCxlKXt2b2lkIDAhPT1lPyhlPWUucmVwbGFjZSgvIC9nLFwiXCIpLnNwbGl0KFwiLFwiKSkuZm9yRWFjaChmdW5jdGlvbihlKXtVdCh0LGUsXCJrXCIpfSk6KFV0KHQsXCJhbGxcIixcImtcIiksZy5rZXlib2FyZFNjcm9sbGluZz10KX1mdW5jdGlvbiBkZSgpe3ZhciBlPUtuKEduKHluKVswXSx3bik7ZXx8IWcubG9vcFRvcCYmIWcuY29udGludW91c1ZlcnRpY2FsfHwoZT10byhHbih3bikpKSxudWxsIT1lJiZaZShlLG51bGwsITApfWZ1bmN0aW9uIHZlKCl7dmFyIGU9JG4oR24oeW4pWzBdLHduKTtlfHwhZy5sb29wQm90dG9tJiYhZy5jb250aW51b3VzVmVydGljYWx8fChlPUduKHduKVswXSksbnVsbCE9ZSYmWmUoZSxudWxsLCExKX1mdW5jdGlvbiBwZShlLHQpe2xlKDAsXCJpbnRlcm5hbFwiKSxoZShlLHQpLGxlKFYuc2Nyb2xsaW5nU3BlZWQsXCJpbnRlcm5hbFwiKX1mdW5jdGlvbiBoZShlLHQpe3ZhciBuPUJ0KGUpO3ZvaWQgMCE9PXQ/TnQoZSx0KTpudWxsIT1uJiZaZShuKX1mdW5jdGlvbiBnZShlKXtEZShcInJpZ2h0XCIsZSl9ZnVuY3Rpb24gbWUoZSl7RGUoXCJsZWZ0XCIsZSl9ZnVuY3Rpb24gU2UoZSl7aWYoIVVuKHcsdm4pKXtFPSEwLHk9UW4oKSxmPV9uKCk7Zm9yKHZhciB0PUduKHduKSxuPTA7bjx0Lmxlbmd0aDsrK24pe3ZhciBvPXRbbl0scj1HbihJbixvKVswXSxpPUduKENuLG8pO2cudmVydGljYWxDZW50ZXJlZCYmSm4oR24oeG4sbykse2hlaWdodDpJdChvKStcInB4XCJ9KSxKbihvLHtoZWlnaHQ6VGUobykrXCJweFwifSksMTxpLmxlbmd0aCYmd3QocixHbihIbixyKVswXSl9Zy5zY3JvbGxPdmVyZmxvdyYmcC5jcmVhdGVTY3JvbGxCYXJGb3JBbGwoKTt2YXIgbD1ubyhHbih5bilbMF0sd24pO2wmJiFfdChcImZhZGluZ0VmZmVjdFwiKSYmcGUobCsxKSxFPSExLGJvKGcuYWZ0ZXJSZXNpemUpJiZlJiZnLmFmdGVyUmVzaXplLmNhbGwodyxhbi5pbm5lcldpZHRoLGFuLmlubmVySGVpZ2h0KSxibyhnLmFmdGVyUmVCdWlsZCkmJiFlJiZnLmFmdGVyUmVCdWlsZC5jYWxsKHcpLHdvKHcsXCJhZnRlclJlYnVpbGRcIil9fWZ1bmN0aW9uIGJlKCl7cmV0dXJuIFVuKG0sZm4pfWZ1bmN0aW9uIHdlKGUpe3ZhciB0PWJlKCk7ZT90fHwocmUoITEsXCJpbnRlcm5hbFwiKSxhZSghMSxcImludGVybmFsXCIpLG9vKEduKFRuKSksbG8obSxmbiksYm8oZy5hZnRlclJlc3BvbnNpdmUpJiZnLmFmdGVyUmVzcG9uc2l2ZS5jYWxsKHcsZSksSnQoXCJyZXNwb25zaXZlU2xpZGVzXCIsXCJ0b1NlY3Rpb25zXCIpLHdvKHcsXCJhZnRlclJlc3BvbnNpdmVcIixlKSxnLnNjcm9sbE92ZXJmbG93JiZwLmNyZWF0ZVNjcm9sbEJhckZvckFsbCgpKTp0JiYocmUoVi5hdXRvU2Nyb2xsaW5nLFwiaW50ZXJuYWxcIiksYWUoVi5hdXRvU2Nyb2xsaW5nLFwiaW50ZXJuYWxcIikscm8oR24oVG4pKSxhbyhtLGZuKSxibyhnLmFmdGVyUmVzcG9uc2l2ZSkmJmcuYWZ0ZXJSZXNwb25zaXZlLmNhbGwodyxlKSxKdChcInJlc3BvbnNpdmVTbGlkZXNcIixcInRvU2xpZGVzXCIpLHdvKHcsXCJhZnRlclJlc3BvbnNpdmVcIixlKSl9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9ZS50YXJnZXQ7dCYmdm8odCxUbitcIiBhXCIpP2Z1bmN0aW9uKGUpe1NvKGUpO3ZhciB0PW5vKHZvKHRoaXMsVG4rXCIgbGlcIikpO1plKEduKHduKVt0XSl9LmNhbGwodCxlKTp5byh0LFwiLmZwLXRvb2x0aXBcIik/ZnVuY3Rpb24oKXt3byhxbih0aGlzKSxcImNsaWNrXCIpfS5jYWxsKHQpOnlvKHQsRG4pP2Z1bmN0aW9uKCl7dmFyIGU9dm8odGhpcyx3bik7VW4odGhpcyxZbik/di5tLmxlZnQmJm1lKGUpOnYubS5yaWdodCYmZ2UoZSl9LmNhbGwodCxlKTp5byh0LFduKXx8bnVsbCE9dm8odCxXbik/ZnVuY3Rpb24oZSl7U28oZSk7dmFyIHQ9R24oSW4sdm8odGhpcyx3bikpWzBdLG49R24oQ24sdClbbm8odm8odGhpcyxcImxpXCIpKV07d3QodCxuKX0uY2FsbCh0LGUpOnZvKHQsZy5tZW51K1wiIFtkYXRhLW1lbnVhbmNob3JdXCIpJiZmdW5jdGlvbihlKXshR24oZy5tZW51KVswXXx8IWcubG9ja0FuY2hvcnMmJmcuYW5jaG9ycy5sZW5ndGh8fChTbyhlKSxoZSh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtbWVudWFuY2hvclwiKSkpfS5jYWxsKHQsZSl9ZnVuY3Rpb24gRWUoZSx0KXtzbltcImZwX1wiK2VdPXQsc24uYWRkRXZlbnRMaXN0ZW5lcihlLHhlLCEwKX1mdW5jdGlvbiB4ZShlKXt2YXIgdD1lLnR5cGUsbz0hMSxyPWcuc2Nyb2xsT3ZlcmZsb3csaT1cIm1vdXNlbGVhdmVcIj09PXQ/ZS50b0VsZW1lbnR8fGUucmVsYXRlZFRhcmdldDplLnRhcmdldDtpZihpPT1zbnx8IWkpcmV0dXJuIHVlKCEwKSx2b2lkKHImJmcuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNldElzY3JvbGwoaSwhMCkpO1widG91Y2hlbmRcIj09PXQmJihYPSExLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtYPSEwfSw4MDApKSwoXCJtb3VzZWVudGVyXCIhPT10fHxYKSYmKGcubm9ybWFsU2Nyb2xsRWxlbWVudHMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoIW8pe3ZhciB0PXlvKGksZSksbj12byhpLGUpOyh0fHxuKSYmKFMuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudHx8KHVlKCExKSxyJiZnLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zZXRJc2Nyb2xsKGksITEpKSxTLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnQ9ITAsbz0hMCl9fSksIW8mJlMuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudCYmKHVlKCEwKSxyJiZnLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zZXRJc2Nyb2xsKGksITApLFMuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudD0hMSkpfWZ1bmN0aW9uIEFlKCl7dmFyIGU9UW4oKSx0PV9uKCk7eT09PWUmJmY9PT10fHwoeT1lLGY9dCxTZSghMCkpfWZ1bmN0aW9uIExlKGUpe3ZhciB0PVwiZnBfXCIrZStcIkV4dGVuc2lvblwiO0dbZV09Z1tlK1wiS2V5XCJdLFNbZV09dm9pZCAwIT09YW5bdF0/bmV3IGFuW3RdOm51bGwsU1tlXSYmU1tlXS5jKGUpfWZ1bmN0aW9uIE1lKGUsdCxuKXt2YXIgbz0xMDAqbixyPTEwMC9uLGk9c24uY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTmFtZT1Sbixjbyh0LGkpO3ZhciBsLGEscz1zbi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPXpuLGNvKHQscyksSm4oR24oQm4sZSkse3dpZHRoOm8rXCIlXCJ9KSwxPG4mJihnLmNvbnRyb2xBcnJvd3MmJihsPWUsYT1beG8oJzxkaXYgY2xhc3M9XCJmcC1jb250cm9sQXJyb3cgZnAtcHJldlwiPjwvZGl2PicpLHhvKCc8ZGl2IGNsYXNzPVwiZnAtY29udHJvbEFycm93IGZwLW5leHRcIj48L2Rpdj4nKV0scG8oR24oSW4sbClbMF0sYSksXCIjZmZmXCIhPT1nLmNvbnRyb2xBcnJvd0NvbG9yJiYoSm4oR24oWm4sbCkse1wiYm9yZGVyLWNvbG9yXCI6XCJ0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBcIitnLmNvbnRyb2xBcnJvd0NvbG9yfSksSm4oR24oVm4sbCkse1wiYm9yZGVyLWNvbG9yXCI6XCJ0cmFuc3BhcmVudCBcIitnLmNvbnRyb2xBcnJvd0NvbG9yK1wiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50XCJ9KSksZy5sb29wSG9yaXpvbnRhbHx8b28oR24oVm4sbCkpKSxnLnNsaWRlc05hdmlnYXRpb24mJmZ1bmN0aW9uKGUsdCl7c28oeG8oJzxkaXYgY2xhc3M9XCInK2puKydcIj48dWw+PC91bD48L2Rpdj4nKSxlKTt2YXIgbj1HbihQbixlKVswXTtsbyhuLFwiZnAtXCIrZy5zbGlkZXNOYXZQb3NpdGlvbik7Zm9yKHZhciBvPTA7bzx0O28rKyl7dmFyIHI9R24oQ24sZSlbb107c28oeG8oJzxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZnAtc3Itb25seVwiPicra2UobyxcIlNsaWRlXCIscikrXCI8L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT48L2xpPlwiKSxHbihcInVsXCIsbilbMF0pfUpuKG4se1wibWFyZ2luLWxlZnRcIjpcIi1cIituLmlubmVyV2lkdGgvMitcInB4XCJ9KSxsbyhHbihcImFcIixHbihcImxpXCIsbilbMF0pLGduKX0oZSxuKSksdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe0puKGUse3dpZHRoOnIrXCIlXCJ9KSxnLnZlcnRpY2FsQ2VudGVyZWQmJlJ0KGUpfSk7dmFyIGM9R24oSG4sZSlbMF07bnVsbCE9YyYmKDAhPT1ubyhHbih5biksd24pfHwwPT09bm8oR24oeW4pLHduKSYmMCE9PW5vKGMpKT8oWHQoYyxcImludGVybmFsXCIpLGxvKGMsXCJmcC1pbml0aWFsXCIpKTpsbyh0WzBdLGduKX1mdW5jdGlvbiBUZShlKXtyZXR1cm4gZy5vZmZzZXRTZWN0aW9ucyYmUy5vZmZzZXRTZWN0aW9ucz9NYXRoLnJvdW5kKFMub2Zmc2V0U2VjdGlvbnMuZ2V0V2luZG93SGVpZ2h0KGUpKTpRbigpfWZ1bmN0aW9uIE9lKGUsdCl7dHx8bnVsbCE9R24oeW4pWzBdfHxsbyhlLGduKSxvPUduKHluKVswXSxKbihlLHtoZWlnaHQ6VGUoZSkrXCJweFwifSksZy5wYWRkaW5nVG9wJiZKbihlLHtcInBhZGRpbmctdG9wXCI6Zy5wYWRkaW5nVG9wfSksZy5wYWRkaW5nQm90dG9tJiZKbihlLHtcInBhZGRpbmctYm90dG9tXCI6Zy5wYWRkaW5nQm90dG9tfSksdm9pZCAwIT09Zy5zZWN0aW9uc0NvbG9yW3RdJiZKbihlLHtcImJhY2tncm91bmQtY29sb3JcIjpnLnNlY3Rpb25zQ29sb3JbdF19KSx2b2lkIDAhPT1nLmFuY2hvcnNbdF0mJmUuc2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIixnLmFuY2hvcnNbdF0pfWZ1bmN0aW9uIGtlKGUsdCxuKXt2YXIgbz1cIlNlY3Rpb25cIj09PXQ/Zy5hbmNob3JzW2VdOm4uZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIik7cmV0dXJuIGcubmF2aWdhdGlvblRvb2x0aXBzW2VdfHxvfHx0K1wiIFwiKyhlKzEpfWZ1bmN0aW9uIENlKCl7dmFyIGUsdCxuPUduKHluKVswXTtsbyhuLFNuKSxLZShuKSxKZSgpLHFlKG4pLGcuc2Nyb2xsT3ZlcmZsb3cmJmcuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmFmdGVyTG9hZCgpLGU9ZnQoKSx0PUJ0KGUuc2VjdGlvbiksZS5zZWN0aW9uJiZ0JiYodm9pZCAwPT09dHx8bm8odCkhPT1ubyhvKSl8fCFibyhnLmFmdGVyTG9hZCl8fFhlKFwiYWZ0ZXJMb2FkXCIse2FjdGl2ZVNlY3Rpb246bixlbGVtZW50Om4sZGlyZWN0aW9uOm51bGwsYW5jaG9yTGluazpuLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIpLHNlY3Rpb25JbmRleDpubyhuLHduKX0pLGJvKGcuYWZ0ZXJSZW5kZXIpJiZYZShcImFmdGVyUmVuZGVyXCIpLHdvKHcsXCJhZnRlclJlbmRlclwiKX1mdW5jdGlvbiBIZSgpe3ZhciBlO2lmKHdvKHcsXCJvblNjcm9sbFwiKSwoIWcuYXV0b1Njcm9sbGluZ3x8Zy5zY3JvbGxCYXJ8fF90KFwiZHJhZ0FuZE1vdmVcIikpJiYhJHQoKSl7dmFyIHQ9X3QoXCJkcmFnQW5kTW92ZVwiKT9NYXRoLmFicyhTLmRyYWdBbmRNb3ZlLmdldEN1cnJlbnRTY3JvbGwoKSk6Z28oKSxuPTAsbz10K1FuKCkvMixyPShfdChcImRyYWdBbmRNb3ZlXCIpP1MuZHJhZ0FuZE1vdmUuZ2V0RG9jdW1lbnRIZWlnaHQoKTptLm9mZnNldEhlaWdodC1RbigpKT09PXQsaT1Hbih3bik7aWYociluPWkubGVuZ3RoLTE7ZWxzZSBpZih0KWZvcih2YXIgbD0wO2w8aS5sZW5ndGg7KytsKWlbbF0ub2Zmc2V0VG9wPD1vJiYobj1sKTtlbHNlIG49MDtpZighVW4oZT1pW25dLGduKSl7Xz0hMDt2YXIgYSxzLGM9R24oeW4pWzBdLHU9bm8oYyx3bikrMSxmPUN0KGUpLGQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKSx2PW5vKGUsd24pKzEscD1HbihIbixlKVswXSxoPXthY3RpdmVTZWN0aW9uOmMsc2VjdGlvbkluZGV4OnYtMSxhbmNob3JMaW5rOmQsZWxlbWVudDplLGxlYXZpbmdTZWN0aW9uOnUsZGlyZWN0aW9uOmZ9O3AmJihzPXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksYT1ubyhwKSkseCYmKGxvKGUsZ24pLGFvKG1vKGUpLGduKSxKdChcInBhcmFsbGF4XCIsXCJhZnRlckxvYWRcIiksYm8oZy5vbkxlYXZlKSYmWGUoXCJvbkxlYXZlXCIsaCksYm8oZy5hZnRlckxvYWQpJiZYZShcImFmdGVyTG9hZFwiLGgpLF90KFwicmVzZXRTbGlkZXJzXCIpJiZTLnJlc2V0U2xpZGVycy5hcHBseSh7bG9jYWxJc1Jlc2l6aW5nOkUsbGVhdmluZ1NlY3Rpb246dX0pLHR0KGMpLEtlKGUpLHFlKGUpLGt0KGQsdi0xKSxnLmFuY2hvcnMubGVuZ3RoJiYoYj1kKSxQdChhLHMsZCkpLGNsZWFyVGltZW91dChUKSxUPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtfPSExfSwxMDApfWcuZml0VG9TZWN0aW9uJiYoY2xlYXJUaW1lb3V0KE8pLE89c2V0VGltZW91dChmdW5jdGlvbigpe2cuZml0VG9TZWN0aW9uJiZHbih5bilbMF0ub2Zmc2V0SGVpZ2h0PD15JiZSZSgpfSxnLmZpdFRvU2VjdGlvbkRlbGF5KSl9fWZ1bmN0aW9uIFJlKCl7eCYmKEU9ITAsWmUoR24oeW4pWzBdKSxFPSExKX1mdW5jdGlvbiBJZShlKXtpZih2Lm1bZV0pe3ZhciB0PVwiZG93blwiPT09ZT92ZTpkZTtpZihfdChcInNjcm9sbEhvcml6b250YWxseVwiKSYmKHQ9Uy5zY3JvbGxIb3Jpem9udGFsbHkuZ2V0U2Nyb2xsU2VjdGlvbihlLHQpKSxnLnNjcm9sbE92ZXJmbG93KXt2YXIgbj1nLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zY3JvbGxhYmxlKEduKHluKVswXSksbz1cImRvd25cIj09PWU/XCJib3R0b21cIjpcInRvcFwiO2lmKG51bGwhPW4pe2lmKCFnLnNjcm9sbE92ZXJmbG93SGFuZGxlci5pc1Njcm9sbGVkKG8sbikpcmV0dXJuITA7dCgpfWVsc2UgdCgpfWVsc2UgdCgpfX1mdW5jdGlvbiB6ZShlKXtnLmF1dG9TY3JvbGxpbmcmJk5lKGUpJiZ2Lm0udXAmJlNvKGUpfWZ1bmN0aW9uIEJlKGUpe3ZhciB0PXZvKGUudGFyZ2V0LHduKXx8R24oeW4pWzBdO2lmKE5lKGUpKXtnLmF1dG9TY3JvbGxpbmcmJlNvKGUpO3ZhciBuPVp0KGUpOyQ9bi55LHE9bi54LEduKEluLHQpLmxlbmd0aCYmTWF0aC5hYnMoSy1xKT5NYXRoLmFicyhKLSQpPyFhJiZNYXRoLmFicyhLLXEpPl9uKCkvMTAwKmcudG91Y2hTZW5zaXRpdml0eSYmKHE8Sz92Lm0ucmlnaHQmJmdlKHQpOnYubS5sZWZ0JiZtZSh0KSk6Zy5hdXRvU2Nyb2xsaW5nJiZ4JiZNYXRoLmFicyhKLSQpPmFuLmlubmVySGVpZ2h0LzEwMCpnLnRvdWNoU2Vuc2l0aXZpdHkmJigkPEo/SWUoXCJkb3duXCIpOko8JCYmSWUoXCJ1cFwiKSl9fWZ1bmN0aW9uIE5lKGUpe3JldHVybiB2b2lkIDA9PT1lLnBvaW50ZXJUeXBlfHxcIm1vdXNlXCIhPWUucG9pbnRlclR5cGV9ZnVuY3Rpb24gamUoZSl7aWYoZy5maXRUb1NlY3Rpb24mJihXPSExKSxOZShlKSl7dmFyIHQ9WnQoZSk7Sj10LnksSz10Lnh9fWZ1bmN0aW9uIFBlKGUsdCl7Zm9yKHZhciBuPTAsbz1lLnNsaWNlKE1hdGgubWF4KGUubGVuZ3RoLXQsMSkpLHI9MDtyPG8ubGVuZ3RoO3IrKyluKz1vW3JdO3JldHVybiBNYXRoLmNlaWwobi90KX1mdW5jdGlvbiBXZShlKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxuPVVuKEduKFwiLmZwLWNvbXBsZXRlbHlcIilbMF0sTG4pO2lmKCF2Lm0uZG93biYmIXYubS51cClyZXR1cm4gU28oZSksITE7aWYoZy5hdXRvU2Nyb2xsaW5nJiYhYyYmIW4pe3ZhciBvPShlPWV8fGFuLmV2ZW50KS53aGVlbERlbHRhfHwtZS5kZWx0YVl8fC1lLmRldGFpbCxyPU1hdGgubWF4KC0xLE1hdGgubWluKDEsbykpLGk9dm9pZCAwIT09ZS53aGVlbERlbHRhWHx8dm9pZCAwIT09ZS5kZWx0YVgsbD1NYXRoLmFicyhlLndoZWVsRGVsdGFYKTxNYXRoLmFicyhlLndoZWVsRGVsdGEpfHxNYXRoLmFicyhlLmRlbHRhWCk8TWF0aC5hYnMoZS5kZWx0YVkpfHwhaTsxNDk8ZC5sZW5ndGgmJmQuc2hpZnQoKSxkLnB1c2goTWF0aC5hYnMobykpLGcuc2Nyb2xsQmFyJiZTbyhlKTt2YXIgYT10LWVlO2lmKGVlPXQsMjAwPGEmJihkPVtdKSx4JiYhS3QoKSl7dmFyIHM9UGUoZCwxMCk7UGUoZCw3MCk8PXMmJmwmJkllKHI8MD9cImRvd25cIjpcInVwXCIpfXJldHVybiExfWcuZml0VG9TZWN0aW9uJiYoVz0hMSl9ZnVuY3Rpb24gRGUoZSx0KXt2YXIgbj1udWxsPT10P0duKHluKVswXTp0LG89R24oSW4sbilbMF07aWYoIShudWxsPT1vfHxLdCgpfHxhfHxHbihDbixvKS5sZW5ndGg8Mikpe3ZhciByPUduKEhuLG8pWzBdLGk9bnVsbDtpZihudWxsPT0oaT1cImxlZnRcIj09PWU/S24ocixDbik6JG4ocixDbikpKXtpZighZy5sb29wSG9yaXpvbnRhbClyZXR1cm47dmFyIGw9bW8ocik7aT1cImxlZnRcIj09PWU/bFtsLmxlbmd0aC0xXTpsWzBdfWE9IVMudGVzdC5pc1Rlc3Rpbmcsd3QobyxpLGUpfX1mdW5jdGlvbiBZZSgpe2Zvcih2YXIgZT1HbihIbiksdD0wO3Q8ZS5sZW5ndGg7dCsrKVh0KGVbdF0sXCJpbnRlcm5hbFwiKX1mdW5jdGlvbiBWZShlKXt2YXIgdD1lLm9mZnNldEhlaWdodCxuPWUub2Zmc2V0VG9wLG89bixyPV90KFwiZHJhZ0FuZE1vdmVcIikmJlMuZHJhZ0FuZE1vdmUuaXNHcmFiYmluZz9TLmRyYWdBbmRNb3ZlLmlzU2Nyb2xsaW5nRG93bigpOnRlPG4saT1vLXkrdCxsPWcuYmlnU2VjdGlvbnNEZXN0aW5hdGlvbjtyZXR1cm4geTx0PyhyfHxsKSYmXCJib3R0b21cIiE9PWx8fChvPWkpOihyfHxFJiZudWxsPT1lbyhlKSkmJihvPWkpLGcub2Zmc2V0U2VjdGlvbnMmJlMub2Zmc2V0U2VjdGlvbnMmJihvPVMub2Zmc2V0U2VjdGlvbnMuZ2V0U2VjdGlvblBvc2l0aW9uKHIsbyxlKSksdGU9b31mdW5jdGlvbiBaZShlLHQsbil7aWYobnVsbCE9ZSl7dmFyIG8scixpPXtlbGVtZW50OmUsY2FsbGJhY2s6dCxpc01vdmVtZW50VXA6bixkdG9wOlZlKGUpLHlNb3ZlbWVudDpDdChlKSxhbmNob3JMaW5rOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksc2VjdGlvbkluZGV4Om5vKGUsd24pLGFjdGl2ZVNsaWRlOkduKEhuLGUpWzBdLGFjdGl2ZVNlY3Rpb246R24oeW4pWzBdLGxlYXZpbmdTZWN0aW9uOm5vKEduKHluKSx3bikrMSxsb2NhbElzUmVzaXppbmc6RX07aWYoIShpLmFjdGl2ZVNlY3Rpb249PWUmJiFFfHxnLnNjcm9sbEJhciYmZ28oKT09PWkuZHRvcCYmIVVuKGUsQW4pKSl7aWYobnVsbCE9aS5hY3RpdmVTbGlkZSYmKG89aS5hY3RpdmVTbGlkZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKSxyPW5vKGkuYWN0aXZlU2xpZGUpKSwhaS5sb2NhbElzUmVzaXppbmcpe3ZhciBsPWkueU1vdmVtZW50O2lmKHZvaWQgMCE9PW4mJihsPW4/XCJ1cFwiOlwiZG93blwiKSxpLmRpcmVjdGlvbj1sLGJvKGcub25MZWF2ZSkmJiExPT09WGUoXCJvbkxlYXZlXCIsaSkpcmV0dXJufXZhciBhO0p0KFwicGFyYWxsYXhcIixcImFwcGx5XCIsaSksSnQoXCJjYXJkc1wiLFwiYXBwbHlcIixpKSxnLmF1dG9TY3JvbGxpbmcmJmcuY29udGludW91c1ZlcnRpY2FsJiZ2b2lkIDAhPT1pLmlzTW92ZW1lbnRVcCYmKCFpLmlzTW92ZW1lbnRVcCYmXCJ1cFwiPT1pLnlNb3ZlbWVudHx8aS5pc01vdmVtZW50VXAmJlwiZG93blwiPT1pLnlNb3ZlbWVudCkmJigocz1pKS5pc01vdmVtZW50VXA/aG8oR24oeW4pWzBdLExvKHMuYWN0aXZlU2VjdGlvbix3bikpOnBvKEduKHluKVswXSxNbyhzLmFjdGl2ZVNlY3Rpb24sd24pLnJldmVyc2UoKSksR3QoR24oeW4pWzBdLm9mZnNldFRvcCksWWUoKSxzLndyYXBBcm91bmRFbGVtZW50cz1zLmFjdGl2ZVNlY3Rpb24scy5kdG9wPXMuZWxlbWVudC5vZmZzZXRUb3Ascy55TW92ZW1lbnQ9Q3Qocy5lbGVtZW50KSxzLmxlYXZpbmdTZWN0aW9uPW5vKHMuYWN0aXZlU2VjdGlvbix3bikrMSxzLnNlY3Rpb25JbmRleD1ubyhzLmVsZW1lbnQsd24pLHdvKEduKHVuKVswXSxcIm9uQ29udGludW91c1ZlcnRpY2FsXCIscyksaT1zKSxfdChcInNjcm9sbE92ZXJmbG93UmVzZXRcIikmJlMuc2Nyb2xsT3ZlcmZsb3dSZXNldC5zZXRQcmV2aW91cyhpLmFjdGl2ZVNlY3Rpb24pLGkubG9jYWxJc1Jlc2l6aW5nfHx0dChpLmFjdGl2ZVNlY3Rpb24pLGcuc2Nyb2xsT3ZlcmZsb3cmJmcuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmJlZm9yZUxlYXZlKCksbG8oZSxnbiksYW8obW8oZSksZ24pLEtlKGUpLGcuc2Nyb2xsT3ZlcmZsb3cmJmcuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLm9uTGVhdmUoKSx4PVMudGVzdC5pc1Rlc3RpbmcsUHQocixvLGkuYW5jaG9yTGluayxpLnNlY3Rpb25JbmRleCksZnVuY3Rpb24oZSl7dmFyIHQ9Zy5zY3JvbGxpbmdTcGVlZDw3MDAsbj10PzcwMDpnLnNjcm9sbGluZ1NwZWVkO2lmKGcuY3NzMyYmZy5hdXRvU2Nyb2xsaW5nJiYhZy5zY3JvbGxCYXIpe3ZhciBvPVwidHJhbnNsYXRlM2QoMHB4LCAtXCIrTWF0aC5yb3VuZChlLmR0b3ApK1wicHgsIDBweClcIjt6dChvLCEwKSxnLnNjcm9sbGluZ1NwZWVkPyhjbGVhclRpbWVvdXQoTCksTD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7UWUoZSkseD0hdH0sZy5zY3JvbGxpbmdTcGVlZCkpOlFlKGUpfWVsc2V7dmFyIHI9VWUoZS5kdG9wKTtTLnRlc3QudG9wPS1lLmR0b3ArXCJweFwiLHRuKHIuZWxlbWVudCxyLm9wdGlvbnMsZy5zY3JvbGxpbmdTcGVlZCxmdW5jdGlvbigpe2cuc2Nyb2xsQmFyP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtRZShlKX0sMzApOihRZShlKSx4PSF0KX0pfXQmJihjbGVhclRpbWVvdXQoWSksWT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eD0hMH0sbikpfShpKSxiPWkuYW5jaG9yTGluayxrdChpLmFuY2hvckxpbmssbnVsbD09KGE9aSkud3JhcEFyb3VuZEVsZW1lbnRzP2Euc2VjdGlvbkluZGV4OmEuaXNNb3ZlbWVudFVwP0duKHduKS5sZW5ndGgtMTowKX19dmFyIHN9ZnVuY3Rpb24gWGUoZSx0KXt2YXIgbixvLHIsaSxsPShvPWUscj10LChpPWcudjJjb21wYXRpYmxlP3thZnRlclJlbmRlcjpmdW5jdGlvbigpe3JldHVyblt3XX0sb25MZWF2ZTpmdW5jdGlvbigpe3JldHVybltyLmFjdGl2ZVNlY3Rpb24sci5sZWF2aW5nU2VjdGlvbixyLnNlY3Rpb25JbmRleCsxLHIuZGlyZWN0aW9uXX0sYWZ0ZXJMb2FkOmZ1bmN0aW9uKCl7cmV0dXJuW3IuZWxlbWVudCxyLmFuY2hvckxpbmssci5zZWN0aW9uSW5kZXgrMV19LGFmdGVyU2xpZGVMb2FkOmZ1bmN0aW9uKCl7cmV0dXJuW3IuZGVzdGlueSxyLmFuY2hvckxpbmssci5zZWN0aW9uSW5kZXgrMSxyLnNsaWRlQW5jaG9yLHIuc2xpZGVJbmRleF19LG9uU2xpZGVMZWF2ZTpmdW5jdGlvbigpe3JldHVybltyLnByZXZTbGlkZSxyLmFuY2hvckxpbmssci5zZWN0aW9uSW5kZXgrMSxyLnByZXZTbGlkZUluZGV4LHIuZGlyZWN0aW9uLHIuc2xpZGVJbmRleF19fTp7YWZ0ZXJSZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm57c2VjdGlvbjpHZShHbih5bilbMF0pLHNsaWRlOkZlKEduKEhuLEduKHluKVswXSlbMF0pfX0sb25MZWF2ZTpmdW5jdGlvbigpe3JldHVybntvcmlnaW46R2Uoci5hY3RpdmVTZWN0aW9uKSxkZXN0aW5hdGlvbjpHZShyLmVsZW1lbnQpLGRpcmVjdGlvbjpyLmRpcmVjdGlvbn19LGFmdGVyTG9hZDpmdW5jdGlvbigpe3JldHVybiBpLm9uTGVhdmUoKX0sYWZ0ZXJTbGlkZUxvYWQ6ZnVuY3Rpb24oKXtyZXR1cm57c2VjdGlvbjpHZShyLnNlY3Rpb24pLG9yaWdpbjpGZShyLnByZXZTbGlkZSksZGVzdGluYXRpb246RmUoci5kZXN0aW55KSxkaXJlY3Rpb246ci5kaXJlY3Rpb259fSxvblNsaWRlTGVhdmU6ZnVuY3Rpb24oKXtyZXR1cm4gaS5hZnRlclNsaWRlTG9hZCgpfX0pW29dKCkpO2lmKGcudjJjb21wYXRpYmxlKXtpZighMT09PWdbZV0uYXBwbHkobFswXSxsLnNsaWNlKDEpKSlyZXR1cm4hMX1lbHNlIGlmKHdvKHcsZSxsKSwhMT09PWdbZV0uYXBwbHkobFtPYmplY3Qua2V5cyhsKVswXV0sKG49bCxPYmplY3Qua2V5cyhuKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5bZV19KSkpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEdlKGUpe3JldHVybiBlP25ldyBybihlKTpudWxsfWZ1bmN0aW9uIEZlKGUpe3JldHVybiBlP25ldyBsbihlKTpudWxsfWZ1bmN0aW9uIFVlKGUpe3ZhciB0PXt9O3JldHVybiBnLmF1dG9TY3JvbGxpbmcmJiFnLnNjcm9sbEJhcj8odC5vcHRpb25zPS1lLHQuZWxlbWVudD1Hbih1bilbMF0pOih0Lm9wdGlvbnM9ZSx0LmVsZW1lbnQ9YW4pLHR9ZnVuY3Rpb24gUWUoZSl7dmFyIHQ7bnVsbCE9KHQ9ZSkud3JhcEFyb3VuZEVsZW1lbnRzJiYodC5pc01vdmVtZW50VXA/aG8oR24od24pWzBdLHQud3JhcEFyb3VuZEVsZW1lbnRzKTpwbyhHbih3bilbR24od24pLmxlbmd0aC0xXSx0LndyYXBBcm91bmRFbGVtZW50cyksR3QoR24oeW4pWzBdLm9mZnNldFRvcCksWWUoKSx0LnNlY3Rpb25JbmRleD1ubyh0LmVsZW1lbnQsd24pLHQubGVhdmluZ1NlY3Rpb249bm8odC5hY3RpdmVTZWN0aW9uLHduKSsxKSxibyhnLmFmdGVyTG9hZCkmJiFlLmxvY2FsSXNSZXNpemluZyYmWGUoXCJhZnRlckxvYWRcIixlKSxnLnNjcm9sbE92ZXJmbG93JiZnLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlckxvYWQoKSxKdChcInBhcmFsbGF4XCIsXCJhZnRlckxvYWRcIiksSnQoXCJzY3JvbGxPdmVyZmxvd1Jlc2V0XCIsXCJyZXNldFwiKSxfdChcInJlc2V0U2xpZGVyc1wiKSYmUy5yZXNldFNsaWRlcnMuYXBwbHkoZSksZS5sb2NhbElzUmVzaXppbmd8fHFlKGUuZWxlbWVudCksbG8oZS5lbGVtZW50LFNuKSxhbyhtbyhlLmVsZW1lbnQpLFNuKSxKZSgpLHg9ITAsYm8oZS5jYWxsYmFjaykmJmUuY2FsbGJhY2soKX1mdW5jdGlvbiBfZShlLHQpe2Uuc2V0QXR0cmlidXRlKHQsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK3QpKSxlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtXCIrdCl9ZnVuY3Rpb24gSmUoKXt2YXIgZT1HbihcIi5mcC1hdXRvLWhlaWdodFwiKVswXXx8YmUoKSYmR24oXCIuZnAtYXV0by1oZWlnaHQtcmVzcG9uc2l2ZVwiKVswXTtnLmxhenlMb2FkaW5nJiZlJiZHbih3bitcIjpub3QoXCIrbW4rXCIpXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQsbixvO3Q9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXQudG9wLG89dC5ib3R0b20sKG4rMjx5JiYwPG58fDI8byYmbzx5KSYmS2UoZSl9KX1mdW5jdGlvbiBLZShvKXtnLmxhenlMb2FkaW5nJiZHbihcImltZ1tkYXRhLXNyY10sIGltZ1tkYXRhLXNyY3NldF0sIHNvdXJjZVtkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY3NldF0sIHZpZGVvW2RhdGEtc3JjXSwgYXVkaW9bZGF0YS1zcmNdLCBpZnJhbWVbZGF0YS1zcmNdXCIsbnQobykpLmZvckVhY2goZnVuY3Rpb24obil7aWYoW1wic3JjXCIsXCJzcmNzZXRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1uLmdldEF0dHJpYnV0ZShcImRhdGEtXCIrZSk7bnVsbCE9dCYmdCYmKF9lKG4sZSksbi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7JGUobyl9KSl9KSx5byhuLFwic291cmNlXCIpKXt2YXIgZT12byhuLFwidmlkZW8sIGF1ZGlvXCIpO2UmJihlLmxvYWQoKSxlLm9ubG9hZGVkZGF0YT1mdW5jdGlvbigpeyRlKG8pfSl9fSl9ZnVuY3Rpb24gJGUoZSl7Zy5zY3JvbGxPdmVyZmxvdyYmKGNsZWFyVGltZW91dChEKSxEPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtVbihtLGZuKXx8cC5jcmVhdGVTY3JvbGxCYXIoZSl9LDIwMCkpfWZ1bmN0aW9uIHFlKGUpe3ZhciB0PW50KGUpO0duKFwidmlkZW8sIGF1ZGlvXCIsdCkuZm9yRWFjaChmdW5jdGlvbihlKXtlLmhhc0F0dHJpYnV0ZShcImRhdGEtYXV0b3BsYXlcIikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUucGxheSYmZS5wbGF5KCl9KSxHbignaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLHQpLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWF1dG9wbGF5XCIpJiZldChlKSxlLm9ubG9hZD1mdW5jdGlvbigpe2UuaGFzQXR0cmlidXRlKFwiZGF0YS1hdXRvcGxheVwiKSYmZXQoZSl9fSl9ZnVuY3Rpb24gZXQoZSl7ZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGxheVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLFwiKlwiKX1mdW5jdGlvbiB0dChlKXt2YXIgdD1udChlKTtHbihcInZpZGVvLCBhdWRpb1wiLHQpLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWtlZXBwbGF5aW5nXCIpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLnBhdXNlfHxlLnBhdXNlKCl9KSxHbignaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLHQpLmZvckVhY2goZnVuY3Rpb24oZSl7L3lvdXR1YmVcXC5jb21cXC9lbWJlZFxcLy8udGVzdChlLmdldEF0dHJpYnV0ZShcInNyY1wiKSkmJiFlLmhhc0F0dHJpYnV0ZShcImRhdGEta2VlcHBsYXlpbmdcIikmJmUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBhdXNlVmlkZW9cIixcImFyZ3NcIjpcIlwifScsXCIqXCIpfSl9ZnVuY3Rpb24gbnQoZSl7dmFyIHQ9R24oSG4sZSk7cmV0dXJuIHQubGVuZ3RoJiYoZT10WzBdKSxlfWZ1bmN0aW9uIG90KGUpe3ZhciBjPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtmdW5jdGlvbiBvKGUpe3ZhciB0LG4sbyxyLGksbCxhPVwiXCIscz0wO2ZvcihlPWUucmVwbGFjZSgvW15BLVphLXowLTkrLz1dL2csXCJcIik7czxlLmxlbmd0aDspdD1jLmluZGV4T2YoZS5jaGFyQXQocysrKSk8PDJ8KHI9Yy5pbmRleE9mKGUuY2hhckF0KHMrKykpKT4+NCxuPSgxNSZyKTw8NHwoaT1jLmluZGV4T2YoZS5jaGFyQXQocysrKSkpPj4yLG89KDMmaSk8PDZ8KGw9Yy5pbmRleE9mKGUuY2hhckF0KHMrKykpKSxhKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHQpLDY0IT1pJiYoYSs9U3RyaW5nLmZyb21DaGFyQ29kZShuKSksNjQhPWwmJihhKz1TdHJpbmcuZnJvbUNoYXJDb2RlKG8pKTtyZXR1cm4gYT1mdW5jdGlvbihlKXtmb3IodmFyIHQsbj1cIlwiLG89MCxyPTAsaT0wO288ZS5sZW5ndGg7KShyPWUuY2hhckNvZGVBdChvKSk8MTI4PyhuKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpLG8rKyk6MTkxPHImJnI8MjI0PyhpPWUuY2hhckNvZGVBdChvKzEpLG4rPVN0cmluZy5mcm9tQ2hhckNvZGUoKDMxJnIpPDw2fDYzJmkpLG8rPTIpOihpPWUuY2hhckNvZGVBdChvKzEpLHQ9ZS5jaGFyQ29kZUF0KG8rMiksbis9U3RyaW5nLmZyb21DaGFyQ29kZSgoMTUmcik8PDEyfCg2MyZpKTw8Nnw2MyZ0KSxvKz0zKTtyZXR1cm4gbn0oYSl9ZnVuY3Rpb24gcihlKXtyZXR1cm4gZS5zbGljZSgzKS5zbGljZSgwLC0zKX1yZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zcGxpdChcIl9cIik7aWYoMTx0Lmxlbmd0aCl7dmFyIG49dFsxXTtyZXR1cm4gZS5yZXBsYWNlKHIodFsxXSksXCJcIikuc3BsaXQoXCJfXCIpWzBdK1wiX1wiK28obi5zbGljZSgzKS5zbGljZSgwLC0zKSl9cmV0dXJuIHIoZSl9KG8oZSkpfWZ1bmN0aW9uIHJ0KGYpe3ZhciBkPXZvaWQgMCE9PUdbZl0mJkdbZl0ubGVuZ3RoLGU9W10sdj0hMTtyZXR1cm4gaW8oR1tmXSk/ZT1HW2ZdOmUucHVzaChHW2ZdKSxlLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oKXtpZihzbi5kb21haW4ubGVuZ3RoKXtmb3IodmFyIGU9c24uZG9tYWluLnJlcGxhY2UoL14od3d3XFwuKS8sXCJcIikuc3BsaXQoXCIuXCIpOzI8ZS5sZW5ndGg7KWUuc2hpZnQoKTtyZXR1cm4gZS5qb2luKFwiLlwiKS5yZXBsYWNlKC8oXlxcLiopfChcXC4qJCkvZyxcIlwiKX1yZXR1cm5cIlwifSgpLG49W1wiTVRNMGJHOWpZV3hvYjNOME1qTTBcIixcIk1UTTBNQzR4TWpNMFwiLFwiTVRNMGFuTm9aV3hzTG01bGRESXpOQT09XCIsXCJVRGREUVU1Wk5sTk5cIl0sbz1vdChuWzBdKSxyPW90KG5bMV0pLGk9b3QoblsyXSksbD1vdChuWzNdKSxhPVtvLHIsaV0uaW5kZXhPZih0KTwwJiYwIT09dC5sZW5ndGg7aWYoIWQmJmEpcmV0dXJuITE7dmFyIHM9ZD9vdChlKTpcIlwiLGM9MTwocz1zLnNwbGl0KFwiX1wiKSkubGVuZ3RoJiYtMTxzWzFdLmluZGV4T2YoZixzWzFdLmxlbmd0aC1mLmxlbmd0aCksdT1zWzBdLmluZGV4T2YodCxzWzBdLmxlbmd0aC10Lmxlbmd0aCk8MDt2PXZ8fCEodSYmYSYmbCE9c1swXSkmJmN8fCFhfSksdn1mdW5jdGlvbiBpdChlKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZS5yZW1vdmVkTm9kZXNbMF0mJmUucmVtb3ZlZE5vZGVzWzBdLmlzRXF1YWxOb2RlKFUpKXtjbGVhclRpbWVvdXQoUSk7dmFyIHQ9b3QoXCJiREl3YzJWMFZHbHRaVzkxZERBemJBPT1cIik7UT1hblt0XShsdCw5MDApfX0pfWZ1bmN0aW9uIGx0KCl7ej0hMX1mdW5jdGlvbiBhdChlKXtpZihVPXNuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksRj1vdChcIk1USXpQR1JwZGo0OFlTQm9jbVZtUFNKb2RIUndPaTh2WVd4MllYSnZkSEpwWjI4dVkyOXRMMloxYkd4UVlXZGxMMlY0ZEdWdWMybHZibk12SWlCemRIbHNaVDBpWTI5c2IzSTZJQ05tWm1ZZ0lXbHRjRzl5ZEdGdWREc2dkR1Y0ZEMxa1pXTnZjbUYwYVc5dU9tNXZibVVnSVdsdGNHOXlkR0Z1ZERzaVBsVnViR2xqWlc1elpXUWdablZzYkZCaFoyVXVhbk1nUlhoMFpXNXphVzl1UEM5aFBqd3ZaR2wyUGpFeU13PT1cIiksQnx8KEY9Ri5yZXBsYWNlKFwiZXh0ZW5zaW9ucy9cIixcIlwiKS5yZXBsYWNlKFwiRXh0ZW5zaW9uXCIsXCJcIikpLFUuaW5uZXJIVE1MPUYsVT1VLmZpcnN0Q2hpbGQsXCJNdXRhdGlvbk9ic2VydmVyXCJpbiBhbiYmbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaXQpLm9ic2VydmUoc24uYm9keSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITF9KSwoIUJ8fF90KGUpJiZTW2VdKSYmKCFydChlKXx8IUIpKXtzdCgpO3ZhciB0PW90KFwiTXpRMWMyVjBTVzUwWlhKMllXd3hNak09XCIpO2FuW3RdKHN0LDJlMyl9fWZ1bmN0aW9uIHN0KCl7VSYmKHp8fChNYXRoLnJhbmRvbSgpPC41P1RvKG0sVSk6c28oVSxtKSx6PSEwKSxVLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsb3QoXCJNVEl6ZWkxcGJtUmxlRG81T1RrNU9UazVPM0J2YzJsMGFXOXVPbVpwZUdWa08zUnZjRG95TUhCNE8ySnZkSFJ2YlRwaGRYUnZPMnhsWm5RNk1qQndlRHR5YVdkb2REcGhkWFJ2TzJKaFkydG5jbTkxYm1RNmNtVmtPM0JoWkdScGJtYzZOM0I0SURFMWNIZzdabTl1ZEMxemFYcGxPakUwY0hnN1ptOXVkQzFtWVcxcGJIazZZWEpwWVd3N1kyOXNiM0k2STJabVpqdGthWE53YkdGNU9tbHViR2x1WlMxaWJHOWphenQwY21GdWMyWnZjbTA2ZEhKaGJuTnNZWFJsTTJRb01Dd3dMREFwTzI5d1lXTnBkSGs2TVR0b1pXbG5hSFE2WVhWMGJ6dDNhV1IwYURwaGRYUnZPM3B2YjIwNk1UdHRZWEpuYVc0NllYVjBienRpYjNKa1pYSTZibTl1WlR0MmFYTnBZbWxzYVhSNU9uWnBjMmxpYkdVN1kyeHBjQzF3WVhSb09tNXZibVU3TVRJelwiKS5yZXBsYWNlKC87L2csb3QoXCJNVEl6SUNGcGJYQnZjblJoYm5RN016UTFcIikpKSl9ZnVuY3Rpb24gY3QoKXt2YXIgZT1mdCgpLHQ9ZS5zZWN0aW9uLG49ZS5zbGlkZTt0JiYoZy5hbmltYXRlQW5jaG9yP050KHQsbik6cGUodCxuKSl9ZnVuY3Rpb24gdXQoKXtpZighXyYmIWcubG9ja0FuY2hvcnMpe3ZhciBlPWZ0KCksdD1lLnNlY3Rpb24sbj1lLnNsaWRlLG89dm9pZCAwPT09YixyPXZvaWQgMD09PWImJnZvaWQgMD09PW4mJiFhO3QmJnQubGVuZ3RoJiYodCYmdCE9PWImJiFvfHxyfHwhYSYmaSE9biYmIUt0KCkpJiZOdCh0LG4pfX1mdW5jdGlvbiBmdCgpe3ZhciBlLHQsbj1hbi5sb2NhdGlvbi5oYXNoO2lmKG4ubGVuZ3RoKXt2YXIgbz1uLnJlcGxhY2UoXCIjXCIsXCJcIikuc3BsaXQoXCIvXCIpLHI9LTE8bi5pbmRleE9mKFwiIy9cIik7ZT1yP1wiL1wiK29bMV06ZGVjb2RlVVJJQ29tcG9uZW50KG9bMF0pO3ZhciBpPXI/b1syXTpvWzFdO2kmJmkubGVuZ3RoJiYodD1kZWNvZGVVUklDb21wb25lbnQoaSkpfXJldHVybntzZWN0aW9uOmUsc2xpZGU6dH19ZnVuY3Rpb24gZHQoZSl7Y2xlYXJUaW1lb3V0KGspO3ZhciB0PXNuLmFjdGl2ZUVsZW1lbnQsbj1lLmtleUNvZGU7OT09PW4/ZnVuY3Rpb24oZSl7dmFyIHQsbixvLHIsaSxsLGEscz1lLnNoaWZ0S2V5LGM9c24uYWN0aXZlRWxlbWVudCx1PWd0KG50KEduKHluKVswXSkpO2Z1bmN0aW9uIGYoZSl7cmV0dXJuIFNvKGUpLHVbMF0/dVswXS5mb2N1cygpOm51bGx9KHQ9ZSxuPWd0KHNuKSxvPW4uaW5kZXhPZihzbi5hY3RpdmVFbGVtZW50KSxyPXQuc2hpZnRLZXk/by0xOm8rMSxpPW5bcl0sbD1GZSh2byhpLENuKSksYT1HZSh2byhpLHduKSksbHx8YSkmJihjP251bGw9PXZvKGMseW4rXCIsXCIreW4rXCIgXCIrSG4pJiYoYz1mKGUpKTpmKGUpLCghcyYmYz09dVt1Lmxlbmd0aC0xXXx8cyYmYz09dVswXSkmJlNvKGUpKX0oZSk6eW8odCxcInRleHRhcmVhXCIpfHx5byh0LFwiaW5wdXRcIil8fHlvKHQsXCJzZWxlY3RcIil8fFwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIil8fFwiXCI9PT10LmdldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiKXx8IWcua2V5Ym9hcmRTY3JvbGxpbmd8fCFnLmF1dG9TY3JvbGxpbmd8fCgtMTxbNDAsMzgsMzIsMzMsMzRdLmluZGV4T2YobikmJlNvKGUpLGM9ZS5jdHJsS2V5LGs9c2V0VGltZW91dChmdW5jdGlvbigpeyFmdW5jdGlvbihlKXt2YXIgdD1lLnNoaWZ0S2V5LG49c24uYWN0aXZlRWxlbWVudCxvPXlvKG4sXCJ2aWRlb1wiKXx8eW8obixcImF1ZGlvXCIpO2lmKHh8fCEoWzM3LDM5XS5pbmRleE9mKGUua2V5Q29kZSk8MCkpc3dpdGNoKGUua2V5Q29kZSl7Y2FzZSAzODpjYXNlIDMzOnYuay51cCYmZGUoKTticmVhaztjYXNlIDMyOmlmKHQmJnYuay51cCYmIW8pe2RlKCk7YnJlYWt9Y2FzZSA0MDpjYXNlIDM0OnYuay5kb3duJiYoMzI9PT1lLmtleUNvZGUmJm98fHZlKCkpO2JyZWFrO2Nhc2UgMzY6di5rLnVwJiZoZSgxKTticmVhaztjYXNlIDM1OnYuay5kb3duJiZoZShHbih3bikubGVuZ3RoKTticmVhaztjYXNlIDM3OnYuay5sZWZ0JiZtZSgpO2JyZWFrO2Nhc2UgMzk6di5rLnJpZ2h0JiZnZSgpfX0oZSl9LDE1MCkpfWZ1bmN0aW9uIHZ0KGUpe3QmJihjPWUuY3RybEtleSl9ZnVuY3Rpb24gcHQoZSl7Mj09ZS53aGljaCYmKG5lPWUucGFnZVksdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsYnQpKX1mdW5jdGlvbiBodChlKXsyPT1lLndoaWNoJiZ3LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixidCl9ZnVuY3Rpb24gZ3QoZSl7cmV0dXJuW10uc2xpY2UuY2FsbChHbihOLGUpKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuXCItMVwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSYmbnVsbCE9PWUub2Zmc2V0UGFyZW50fSl9ZnVuY3Rpb24gbXQoKXt0PSEwfWZ1bmN0aW9uIFN0KCl7Yz10PSExfWZ1bmN0aW9uIGJ0KGUpe2cuYXV0b1Njcm9sbGluZyYmKHgmJihlLnBhZ2VZPG5lJiZ2Lm0udXA/ZGUoKTplLnBhZ2VZPm5lJiZ2Lm0uZG93biYmdmUoKSksbmU9ZS5wYWdlWSl9ZnVuY3Rpb24gd3QoZSx0LG4pe3ZhciBvPXZvKGUsd24pLHI9e3NsaWRlczplLGRlc3Rpbnk6dCxkaXJlY3Rpb246bixkZXN0aW55UG9zOntsZWZ0OnQub2Zmc2V0TGVmdH0sc2xpZGVJbmRleDpubyh0KSxzZWN0aW9uOm8sc2VjdGlvbkluZGV4Om5vKG8sd24pLGFuY2hvckxpbms6by5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKSxzbGlkZXNOYXY6R24oUG4sbylbMF0sc2xpZGVBbmNob3I6RHQodCkscHJldlNsaWRlOkduKEhuLG8pWzBdLHByZXZTbGlkZUluZGV4Om5vKEduKEhuLG8pWzBdKSxsb2NhbElzUmVzaXppbmc6RX07ci54TW92ZW1lbnQ9SHQoci5wcmV2U2xpZGVJbmRleCxyLnNsaWRlSW5kZXgpLHIuZGlyZWN0aW9uPXIuZGlyZWN0aW9uP3IuZGlyZWN0aW9uOnIueE1vdmVtZW50LHIubG9jYWxJc1Jlc2l6aW5nfHwoeD0hMSksSnQoXCJwYXJhbGxheFwiLFwiYXBwbHlIb3Jpem9udGFsXCIsciksSnQoXCJjYXJkc1wiLFwiYXBwbHlcIixyKSxnLm9uU2xpZGVMZWF2ZSYmIXIubG9jYWxJc1Jlc2l6aW5nJiZcIm5vbmVcIiE9PXIueE1vdmVtZW50JiZibyhnLm9uU2xpZGVMZWF2ZSkmJiExPT09WGUoXCJvblNsaWRlTGVhdmVcIixyKT9hPSExOihsbyh0LGduKSxhbyhtbyh0KSxnbiksci5sb2NhbElzUmVzaXppbmd8fCh0dChyLnByZXZTbGlkZSksS2UodCkpLHl0KHIpLFVuKG8sZ24pJiYhci5sb2NhbElzUmVzaXppbmcmJlB0KHIuc2xpZGVJbmRleCxyLnNsaWRlQW5jaG9yLHIuYW5jaG9yTGluayxyLnNlY3Rpb25JbmRleCksUy5jb250aW51b3VzSG9yaXpvbnRhbCYmUy5jb250aW51b3VzSG9yaXpvbnRhbC5hcHBseShyKSwkdCgpP0V0KHIpOnh0KGUsciwhMCksZy5pbnRlcmxvY2tlZFNsaWRlcyYmUy5pbnRlcmxvY2tlZFNsaWRlcyYmKF90KFwiY29udGludW91c0hvcml6b250YWxcIikmJnZvaWQgMCE9PW4mJm4hPT1yLnhNb3ZlbWVudHx8Uy5pbnRlcmxvY2tlZFNsaWRlcy5hcHBseShyKSkpfWZ1bmN0aW9uIHl0KGUpeyFnLmxvb3BIb3Jpem9udGFsJiZnLmNvbnRyb2xBcnJvd3MmJihFbyhHbihWbixlLnNlY3Rpb24pLDAhPT1lLnNsaWRlSW5kZXgpLEVvKEduKFpuLGUuc2VjdGlvbiksbnVsbCE9ZW8oZS5kZXN0aW55KSkpfWZ1bmN0aW9uIEV0KGUpe3ZhciB0LG47Uy5jb250aW51b3VzSG9yaXpvbnRhbCYmUy5jb250aW51b3VzSG9yaXpvbnRhbC5hZnRlclNsaWRlTG9hZHMoZSksdD1lLnNsaWRlc05hdixuPWUuc2xpZGVJbmRleCxnLnNsaWRlc05hdmlnYXRpb24mJm51bGwhPXQmJihhbyhHbihtbix0KSxnbiksbG8oR24oXCJhXCIsR24oXCJsaVwiLHQpW25dKSxnbikpLGUubG9jYWxJc1Jlc2l6aW5nfHwoSnQoXCJwYXJhbGxheFwiLFwiYWZ0ZXJTbGlkZUxvYWRzXCIpLEp0KFwic2Nyb2xsT3ZlcmZsb3dSZXNldFwiLFwic2V0UHJldmlvdXNcIixlLnByZXZTbGlkZSksSnQoXCJzY3JvbGxPdmVyZmxvd1Jlc2V0XCIsXCJyZXNldFwiKSxibyhnLmFmdGVyU2xpZGVMb2FkKSYmWGUoXCJhZnRlclNsaWRlTG9hZFwiLGUpLHg9ITAscWUoZS5kZXN0aW55KSksYT0hMSxfdChcImludGVybG9ja2VkU2xpZGVzXCIpJiZTLmludGVybG9ja2VkU2xpZGVzLmFwcGx5KGUpfWZ1bmN0aW9uIHh0KGUsdCxuKXt2YXIgbz10LmRlc3RpbnlQb3M7aWYoZy5jc3MzKXt2YXIgcj1cInRyYW5zbGF0ZTNkKC1cIitNYXRoLnJvdW5kKG8ubGVmdCkrXCJweCwgMHB4LCAwcHgpXCI7Uy50ZXN0LnRyYW5zbGF0ZTNkSFt0LnNlY3Rpb25JbmRleF09cixKbihUdChHbihCbixlKSksRnQocikpLE09c2V0VGltZW91dChmdW5jdGlvbigpe24mJkV0KHQpfSxnLnNjcm9sbGluZ1NwZWVkKX1lbHNlIFMudGVzdC5sZWZ0W3Quc2VjdGlvbkluZGV4XT1NYXRoLnJvdW5kKG8ubGVmdCksdG4oZSxNYXRoLnJvdW5kKG8ubGVmdCksZy5zY3JvbGxpbmdTcGVlZCxmdW5jdGlvbigpe24mJkV0KHQpfSl9ZnVuY3Rpb24gQXQoKXtFPSEwLGNsZWFyVGltZW91dChoKSxoPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPDQ7ZSsrKUE9c2V0VGltZW91dChMdCwyMDAqZSl9LDIwMCl9ZnVuY3Rpb24gTHQoKXtpZih3byh3LFwib25SZXNpemVcIiksTXQoKSxsKXt2YXIgZT1zbi5hY3RpdmVFbGVtZW50O2lmKCF5byhlLFwidGV4dGFyZWFcIikmJiF5byhlLFwiaW5wdXRcIikmJiF5byhlLFwic2VsZWN0XCIpKXt2YXIgdD1RbigpO01hdGguYWJzKHQtb2UpPjIwKk1hdGgubWF4KG9lLHQpLzEwMCYmKFNlKCEwKSxvZT10KX19ZWxzZSBBZSgpfWZ1bmN0aW9uIE10KCl7dmFyIGU9Zy5yZXNwb25zaXZlfHxnLnJlc3BvbnNpdmVXaWR0aCx0PWcucmVzcG9uc2l2ZUhlaWdodCxuPWUmJmFuLmlubmVyV2lkdGg8ZSxvPXQmJmFuLmlubmVySGVpZ2h0PHQ7ZSYmdD93ZShufHxvKTplP3dlKG4pOnQmJndlKG8pfWZ1bmN0aW9uIFR0KGUpe3ZhciB0PVwiYWxsIFwiK2cuc2Nyb2xsaW5nU3BlZWQrXCJtcyBcIitnLmVhc2luZ2NzczM7cmV0dXJuIGFvKGUsZG4pLEpuKGUse1wiLXdlYmtpdC10cmFuc2l0aW9uXCI6dCx0cmFuc2l0aW9uOnR9KX1mdW5jdGlvbiBPdChlKXtyZXR1cm4gbG8oZSxkbil9ZnVuY3Rpb24ga3QoZSx0KXt2YXIgbixvLHIsaTtuPWUsR24oZy5tZW51KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2cubWVudSYmbnVsbCE9ZSYmKGFvKEduKG1uLGUpLGduKSxsbyhHbignW2RhdGEtbWVudWFuY2hvcj1cIicrbisnXCJdJyxlKSxnbikpfSksbz1lLHI9dCxpPUduKFRuKVswXSxnLm5hdmlnYXRpb24mJm51bGwhPWkmJlwibm9uZVwiIT09aS5zdHlsZS5kaXNwbGF5JiYoYW8oR24obW4sR24oVG4pWzBdKSxnbiksbG8obz9HbignYVtocmVmPVwiIycrbysnXCJdJyxHbihUbilbMF0pOkduKFwiYVwiLEduKFwibGlcIixHbihUbilbMF0pW3JdKSxnbikpfWZ1bmN0aW9uIEN0KGUpe3ZhciB0PW5vKEduKHluKVswXSx3biksbj1ubyhlLHduKTtyZXR1cm4gdD09bj9cIm5vbmVcIjpuPHQ/XCJ1cFwiOlwiZG93blwifWZ1bmN0aW9uIEh0KGUsdCl7cmV0dXJuIGU9PXQ/XCJub25lXCI6dDxlP1wibGVmdFwiOlwicmlnaHRcIn1mdW5jdGlvbiBSdChlKXtpZighVW4oZSxObikpe3ZhciB0PXNuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9RW4sdC5zdHlsZS5oZWlnaHQ9SXQoZSkrXCJweFwiLGxvKGUsTm4pLHVvKGUsdCl9fWZ1bmN0aW9uIEl0KGUpe3ZhciB0PVRlKGUpO2lmKGcucGFkZGluZ1RvcHx8Zy5wYWRkaW5nQm90dG9tKXt2YXIgbj1lO1VuKG4sYm4pfHwobj12byhlLHduKSksdC09cGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShuKVtcInBhZGRpbmctdG9wXCJdKStwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG4pW1wicGFkZGluZy1ib3R0b21cIl0pfXJldHVybiB0fWZ1bmN0aW9uIHp0KGUsdCl7dD9UdCh3KTpPdCh3KSxjbGVhclRpbWVvdXQoSCksSm4odyxGdChlKSksUy50ZXN0LnRyYW5zbGF0ZTNkPWUsSD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YW8odyxkbil9LDEwKX1mdW5jdGlvbiBCdChlKXt2YXIgdD1Hbih3bisnW2RhdGEtYW5jaG9yPVwiJytlKydcIl0nLHcpWzBdO2lmKCF0KXt2YXIgbj12b2lkIDAhPT1lP2UtMTowO3Q9R24od24pW25dfXJldHVybiB0fWZ1bmN0aW9uIE50KGUsdCl7dmFyIG49QnQoZSk7aWYobnVsbCE9bil7dmFyIG8scixpLGw9KG51bGw9PShpPUduKENuKydbZGF0YS1hbmNob3I9XCInKyhvPXQpKydcIl0nLHI9bilbMF0pJiYobz12b2lkIDAhPT1vP286MCxpPUduKENuLHIpW29dKSxpKTtEdChuKT09PWJ8fFVuKG4sZ24pP2p0KGwpOlplKG4sZnVuY3Rpb24oKXtqdChsKX0pfX1mdW5jdGlvbiBqdChlKXtudWxsIT1lJiZ3dCh2byhlLEluKSxlKX1mdW5jdGlvbiBQdChlLHQsbixvKXt2YXIgcj1cIlwiO2cuYW5jaG9ycy5sZW5ndGgmJiFnLmxvY2tBbmNob3JzJiYoZT8obnVsbCE9biYmKHI9biksbnVsbD09dCYmKHQ9ZSksV3QocitcIi9cIisoaT10KSkpOihudWxsIT1lJiYoaT10KSxXdChuKSkpLFl0KCl9ZnVuY3Rpb24gV3QoZSl7aWYoZy5yZWNvcmRIaXN0b3J5KWxvY2F0aW9uLmhhc2g9ZTtlbHNlIGlmKGx8fHUpYW4uaGlzdG9yeS5yZXBsYWNlU3RhdGUodm9pZCAwLHZvaWQgMCxcIiNcIitlKTtlbHNle3ZhciB0PWFuLmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdO2FuLmxvY2F0aW9uLnJlcGxhY2UodCtcIiNcIitlKX19ZnVuY3Rpb24gRHQoZSl7aWYoIWUpcmV0dXJuIG51bGw7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKSxuPW5vKGUpO3JldHVybiBudWxsPT10JiYodD1uKSx0fWZ1bmN0aW9uIFl0KCl7dmFyIGU9R24oeW4pWzBdLHQ9R24oSG4sZSlbMF0sbj1EdChlKSxvPUR0KHQpLHI9U3RyaW5nKG4pO3QmJihyPXIrXCItXCIrbykscj1yLnJlcGxhY2UoXCIvXCIsXCItXCIpLnJlcGxhY2UoXCIjXCIsXCJcIik7dmFyIGk9bmV3IFJlZ0V4cChcIlxcXFxiXFxcXHM/XCIraG4rXCItW15cXFxcc10rXFxcXGJcIixcImdcIik7bS5jbGFzc05hbWU9bS5jbGFzc05hbWUucmVwbGFjZShpLFwiXCIpLGxvKG0saG4rXCItXCIrcil9ZnVuY3Rpb24gVnQoKXtyZXR1cm4gYW4uUG9pbnRlckV2ZW50P3tkb3duOlwicG9pbnRlcmRvd25cIixtb3ZlOlwicG9pbnRlcm1vdmVcIn06e2Rvd246XCJNU1BvaW50ZXJEb3duXCIsbW92ZTpcIk1TUG9pbnRlck1vdmVcIn19ZnVuY3Rpb24gWnQoZSl7dmFyIHQ9W107cmV0dXJuIHQueT12b2lkIDAhPT1lLnBhZ2VZJiYoZS5wYWdlWXx8ZS5wYWdlWCk/ZS5wYWdlWTplLnRvdWNoZXNbMF0ucGFnZVksdC54PXZvaWQgMCE9PWUucGFnZVgmJihlLnBhZ2VZfHxlLnBhZ2VYKT9lLnBhZ2VYOmUudG91Y2hlc1swXS5wYWdlWCx1JiZOZShlKSYmZy5zY3JvbGxCYXImJnZvaWQgMCE9PWUudG91Y2hlcyYmKHQueT1lLnRvdWNoZXNbMF0ucGFnZVksdC54PWUudG91Y2hlc1swXS5wYWdlWCksdH1mdW5jdGlvbiBYdChlLHQpe2xlKDAsXCJpbnRlcm5hbFwiKSx2b2lkIDAhPT10JiYoRT0hMCksd3Qodm8oZSxJbiksZSksdm9pZCAwIT09dCYmKEU9ITEpLGxlKFYuc2Nyb2xsaW5nU3BlZWQsXCJpbnRlcm5hbFwiKX1mdW5jdGlvbiBHdChlKXt2YXIgdD1NYXRoLnJvdW5kKGUpO2lmKGcuY3NzMyYmZy5hdXRvU2Nyb2xsaW5nJiYhZy5zY3JvbGxCYXIpenQoXCJ0cmFuc2xhdGUzZCgwcHgsIC1cIit0K1wicHgsIDBweClcIiwhMSk7ZWxzZSBpZihnLmF1dG9TY3JvbGxpbmcmJiFnLnNjcm9sbEJhcilKbih3LHt0b3A6LXQrXCJweFwifSksUy50ZXN0LnRvcD0tdCtcInB4XCI7ZWxzZXt2YXIgbj1VZSh0KTtubihuLmVsZW1lbnQsbi5vcHRpb25zKX19ZnVuY3Rpb24gRnQoZSl7cmV0dXJue1wiLXdlYmtpdC10cmFuc2Zvcm1cIjplLFwiLW1vei10cmFuc2Zvcm1cIjplLFwiLW1zLXRyYW5zZm9ybVwiOmUsdHJhbnNmb3JtOmV9fWZ1bmN0aW9uIFV0KHQsZSxuKXtcImFsbFwiIT09ZT92W25dW2VdPXQ6T2JqZWN0LmtleXModltuXSkuZm9yRWFjaChmdW5jdGlvbihlKXt2W25dW2VdPXR9KX1mdW5jdGlvbiBRdChlKXtyZXR1cm4gSm4oZSx7XCItd2Via2l0LXRyYW5zaXRpb25cIjpcIm5vbmVcIix0cmFuc2l0aW9uOlwibm9uZVwifSl9ZnVuY3Rpb24gX3QoZSl7cmV0dXJuIG51bGwhPT1nW2VdJiZcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ1tlXSk/Z1tlXS5sZW5ndGgmJlNbZV06Z1tlXSYmU1tlXX1mdW5jdGlvbiBKdChlLHQsbil7aWYoX3QoZSkpcmV0dXJuIFNbZV1bdF0obil9ZnVuY3Rpb24gS3QoKXtyZXR1cm4gX3QoXCJkcmFnQW5kTW92ZVwiKSYmUy5kcmFnQW5kTW92ZS5pc0FuaW1hdGluZ31mdW5jdGlvbiAkdCgpe3JldHVybiBfdChcImRyYWdBbmRNb3ZlXCIpJiZTLmRyYWdBbmRNb3ZlLmlzR3JhYmJpbmd9ZnVuY3Rpb24gcXQoZSx0LG4pe2dbZV09dCxcImludGVybmFsXCIhPT1uJiYoVltlXT10KX1mdW5jdGlvbiBlbigpe3ZhciBlPWcubGljZW5zZUtleSx0PVwiZm9udC1zaXplOiAxNXB4O2JhY2tncm91bmQ6eWVsbG93O1wiO24/ZSYmZS5sZW5ndGg8MjAmJihjb25zb2xlLndhcm4oXCIlYyBUaGlzIHdlYnNpdGUgd2FzIG1hZGUgdXNpbmcgZnVsbFBhZ2UuanMgc2xpZGVyLiBNb3JlIGluZm8gb24gdGhlIGZvbGxvd2luZyB3ZWJzaXRlOlwiLHQpLGNvbnNvbGUud2FybihcIiVjIGh0dHBzOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL1wiLHQpKTooWG4oXCJlcnJvclwiLFwiRnVsbHBhZ2UuanMgdmVyc2lvbiAzIGhhcyBjaGFuZ2VkIGl0cyBsaWNlbnNlIHRvIEdQTHYzIGFuZCBpdCByZXF1aXJlcyBhIGBsaWNlbnNlS2V5YCBvcHRpb24uIFJlYWQgYWJvdXQgaXQgaGVyZTpcIiksWG4oXCJlcnJvclwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzI29wdGlvbnMuXCIpKSxVbihzLHBuKT9YbihcImVycm9yXCIsXCJGdWxscGFnZS5qcyBjYW4gb25seSBiZSBpbml0aWFsaXplZCBvbmNlIGFuZCB5b3UgYXJlIGRvaW5nIGl0IG11bHRpcGxlIHRpbWVzIVwiKTooZy5jb250aW51b3VzVmVydGljYWwmJihnLmxvb3BUb3B8fGcubG9vcEJvdHRvbSkmJihnLmNvbnRpbnVvdXNWZXJ0aWNhbD0hMSxYbihcIndhcm5cIixcIk9wdGlvbiBgbG9vcFRvcC9sb29wQm90dG9tYCBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgY29udGludW91c1ZlcnRpY2FsYDsgYGNvbnRpbnVvdXNWZXJ0aWNhbGAgZGlzYWJsZWRcIikpLCFnLnNjcm9sbE92ZXJmbG93fHwhZy5zY3JvbGxCYXImJmcuYXV0b1Njcm9sbGluZ3x8WG4oXCJ3YXJuXCIsXCJPcHRpb25zIHNjcm9sbEJhcjp0cnVlIGFuZCBhdXRvU2Nyb2xsaW5nOmZhbHNlIGFyZSBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBzY3JvbGxPdmVyZmxvdzp0cnVlLiBTZWN0aW9ucyB3aXRoIHNjcm9sbE92ZXJmbG93IG1pZ2h0IG5vdCB3b3JrIHdlbGwgaW4gRmlyZWZveFwiKSwhZy5jb250aW51b3VzVmVydGljYWx8fCFnLnNjcm9sbEJhciYmZy5hdXRvU2Nyb2xsaW5nfHwoZy5jb250aW51b3VzVmVydGljYWw9ITEsWG4oXCJ3YXJuXCIsXCJTY3JvbGwgYmFycyAoYHNjcm9sbEJhcjp0cnVlYCBvciBgYXV0b1Njcm9sbGluZzpmYWxzZWApIGFyZSBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgY29udGludW91c1ZlcnRpY2FsYDsgYGNvbnRpbnVvdXNWZXJ0aWNhbGAgZGlzYWJsZWRcIikpLGcuc2Nyb2xsT3ZlcmZsb3cmJm51bGw9PWcuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyJiYoZy5zY3JvbGxPdmVyZmxvdz0hMSxYbihcImVycm9yXCIsXCJUaGUgb3B0aW9uIGBzY3JvbGxPdmVyZmxvdzp0cnVlYCByZXF1aXJlcyB0aGUgZmlsZSBgc2Nyb2xsb3ZlcmZsb3cubWluLmpzYC4gUGxlYXNlIGluY2x1ZGUgaXQgYmVmb3JlIGZ1bGxQYWdlLmpzLlwiKSksZy5hbmNob3JzLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9W10uc2xpY2UuY2FsbChHbihcIltuYW1lXVwiKSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcIm5hbWVcIikmJmUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKS50b0xvd2VyQ2FzZSgpPT10LnRvTG93ZXJDYXNlKCl9KSxuPVtdLnNsaWNlLmNhbGwoR24oXCJbaWRdXCIpKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIikmJmUuZ2V0QXR0cmlidXRlKFwiaWRcIikudG9Mb3dlckNhc2UoKT09dC50b0xvd2VyQ2FzZSgpfSk7aWYobi5sZW5ndGh8fGUubGVuZ3RoKXtYbihcImVycm9yXCIsXCJkYXRhLWFuY2hvciB0YWdzIGNhbiBub3QgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBhcyBhbnkgYGlkYCBlbGVtZW50IG9uIHRoZSBzaXRlIChvciBgbmFtZWAgZWxlbWVudCBmb3IgSUUpLlwiKTt2YXIgbz1uLmxlbmd0aD9cImlkXCI6XCJuYW1lXCI7KG4ubGVuZ3RofHxlLmxlbmd0aCkmJlhuKFwiZXJyb3JcIiwnXCInK3QrJ1wiIGlzIGlzIGJlaW5nIHVzZWQgYnkgYW5vdGhlciBlbGVtZW50IGAnK28rXCJgIHByb3BlcnR5XCIpfX0pKX1mdW5jdGlvbiB0bih0LG4sbyxyKXt2YXIgZSxpPShlPXQpLnNlbGYhPWFuJiZVbihlLFJuKT9lLnNjcm9sbExlZnQ6IWcuYXV0b1Njcm9sbGluZ3x8Zy5zY3JvbGxCYXI/Z28oKTplLm9mZnNldFRvcCxsPW4taSxhPTA7Vz0hMDt2YXIgcz1mdW5jdGlvbigpe2lmKFcpe3ZhciBlPW47YSs9MjAsbyYmKGU9YW4uZnBfZWFzaW5nc1tnLmVhc2luZ10oYSxpLGwsbykpLG5uKHQsZSksYTxvP3NldFRpbWVvdXQocywyMCk6dm9pZCAwIT09ciYmcigpfWVsc2UgYTxvJiZyKCl9O3MoKX1mdW5jdGlvbiBubihlLHQpeyFnLmF1dG9TY3JvbGxpbmd8fGcuc2Nyb2xsQmFyfHxlLnNlbGYhPWFuJiZVbihlLFJuKT9lLnNlbGYhPWFuJiZVbihlLFJuKT9lLnNjcm9sbExlZnQ9dDplLnNjcm9sbFRvKDAsdCk6ZS5zdHlsZS50b3A9dCtcInB4XCJ9ZnVuY3Rpb24gb24oZSx0KXt0aGlzLmFuY2hvcj1lLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIpLHRoaXMuaXRlbT1lLHRoaXMuaW5kZXg9bm8oZSx0KSx0aGlzLmlzTGFzdD10aGlzLmluZGV4PT09ZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCkubGVuZ3RoLTEsdGhpcy5pc0ZpcnN0PSF0aGlzLmluZGV4fWZ1bmN0aW9uIHJuKGUpe29uLmNhbGwodGhpcyxlLHduKX1mdW5jdGlvbiBsbihlKXtvbi5jYWxsKHRoaXMsZSxDbil9ZW4oKX19KSx3aW5kb3cualF1ZXJ5JiZ3aW5kb3cuZnVsbHBhZ2UmJmZ1bmN0aW9uKHQsbil7XCJ1c2Ugc3RyaWN0XCI7dCYmbj90LmZuLmZ1bGxwYWdlPWZ1bmN0aW9uKGUpe2U9dC5leHRlbmQoe30sZSx7JDp0fSk7bmV3IG4odGhpc1swXSxlKX06d2luZG93LmZwX3V0aWxzLnNob3dFcnJvcihcImVycm9yXCIsXCJqUXVlcnkgaXMgcmVxdWlyZWQgdG8gdXNlIHRoZSBqUXVlcnkgZnVsbHBhZ2UgYWRhcHRlciFcIil9KHdpbmRvdy5qUXVlcnksd2luZG93LmZ1bGxwYWdlKTtcblxuLyoqKi8gfSksXG4vKiA1MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDU0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IF9fd2VicGFja19yZXF1aXJlX18oNTMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG4vKioqLyB9KSxcbi8qIDU1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG4vKioqLyB9KSxcbi8qIDU2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNTUpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmksIFwiLyohXFxyXFxuICogZnVsbFBhZ2UgMy4wLjlcXHJcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanNcXHJcXG4gKlxcclxcbiAqIEBsaWNlbnNlIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2Ugb25seVxcclxcbiAqIG9yIEZ1bGxwYWdlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcXHJcXG4gKiBodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL3ByaWNpbmcvXFxyXFxuICpcXHJcXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cXHJcXG4gKi8uZnAtZW5hYmxlZCBib2R5LGh0bWwuZnAtZW5hYmxlZHttYXJnaW46MDtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApfS5mcC1zZWN0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZnAtc2xpZGV7ZmxvYXQ6bGVmdH0uZnAtc2xpZGUsLmZwLXNsaWRlc0NvbnRhaW5lcntoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfS5mcC1zbGlkZXN7ei1pbmRleDoxO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zaXRpb246YWxsIC4zcyBlYXNlLW91dDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1vdXR9LmZwLXNlY3Rpb24uZnAtdGFibGUsLmZwLXNsaWRlLmZwLXRhYmxle2Rpc3BsYXk6dGFibGU7dGFibGUtbGF5b3V0OmZpeGVkO3dpZHRoOjEwMCV9LmZwLXRhYmxlQ2VsbHtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmZwLXNsaWRlc0NvbnRhaW5lcntmbG9hdDpsZWZ0O3Bvc2l0aW9uOnJlbGF0aXZlfS5mcC1jb250cm9sQXJyb3d7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTsta2h0bWwtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjQ7dG9wOjUwJTtjdXJzb3I6cG9pbnRlcjt3aWR0aDowO2hlaWdodDowO2JvcmRlci1zdHlsZTpzb2xpZDttYXJnaW4tdG9wOi0zOHB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5mcC1jb250cm9sQXJyb3cuZnAtcHJldntsZWZ0OjE1cHg7d2lkdGg6MDtib3JkZXItd2lkdGg6MzguNXB4IDM0cHggMzguNXB4IDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnR9LmZwLWNvbnRyb2xBcnJvdy5mcC1uZXh0e3JpZ2h0OjE1cHg7Ym9yZGVyLXdpZHRoOjM4LjVweCAwIDM4LjVweCAzNHB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmfS5mcC1zY3JvbGxhYmxle3Bvc2l0aW9uOnJlbGF0aXZlfS5mcC1zY3JvbGxhYmxlLC5mcC1zY3JvbGxlcntvdmVyZmxvdzpoaWRkZW59LmlTY3JvbGxJbmRpY2F0b3J7Ym9yZGVyOjAhaW1wb3J0YW50fS5mcC1ub3RyYW5zaXRpb257LXdlYmtpdC10cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9I2ZwLW5hdntwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwMDt0b3A6NTAlO29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApfSNmcC1uYXYuZnAtcmlnaHR7cmlnaHQ6MTdweH0jZnAtbmF2LmZwLWxlZnR7bGVmdDoxN3B4fS5mcC1zbGlkZXNOYXZ7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo0O29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtsZWZ0OjAhaW1wb3J0YW50O3JpZ2h0OjA7bWFyZ2luOjAgYXV0byFpbXBvcnRhbnR9LmZwLXNsaWRlc05hdi5mcC1ib3R0b217Ym90dG9tOjE3cHh9LmZwLXNsaWRlc05hdi5mcC10b3B7dG9wOjE3cHh9I2ZwLW5hdiB1bCwuZnAtc2xpZGVzTmF2IHVse21hcmdpbjowO3BhZGRpbmc6MH0jZnAtbmF2IHVsIGxpLC5mcC1zbGlkZXNOYXYgdWwgbGl7ZGlzcGxheTpibG9jazt3aWR0aDoxNHB4O2hlaWdodDoxM3B4O21hcmdpbjo3cHg7cG9zaXRpb246cmVsYXRpdmV9LmZwLXNsaWRlc05hdiB1bCBsaXtkaXNwbGF5OmlubGluZS1ibG9ja30jZnAtbmF2IHVsIGxpIGEsLmZwLXNsaWRlc05hdiB1bCBsaSBhe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y3Vyc29yOnBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOm5vbmV9I2ZwLW5hdiB1bCBsaTpob3ZlciBhLmFjdGl2ZSBzcGFuLCNmcC1uYXYgdWwgbGkgYS5hY3RpdmUgc3BhbiwuZnAtc2xpZGVzTmF2IHVsIGxpOmhvdmVyIGEuYWN0aXZlIHNwYW4sLmZwLXNsaWRlc05hdiB1bCBsaSBhLmFjdGl2ZSBzcGFue2hlaWdodDoxMnB4O3dpZHRoOjEycHg7bWFyZ2luOi02cHggMCAwIC02cHg7Ym9yZGVyLXJhZGl1czoxMDAlfSNmcC1uYXYgdWwgbGkgYSBzcGFuLC5mcC1zbGlkZXNOYXYgdWwgbGkgYSBzcGFue2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTtoZWlnaHQ6NHB4O3dpZHRoOjRweDtib3JkZXI6MDtiYWNrZ3JvdW5kOiMzMzM7bGVmdDo1MCU7dG9wOjUwJTttYXJnaW46LTJweCAwIDAgLTJweDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4xcyBlYXNlLWluLW91dDstbW96LXRyYW5zaXRpb246YWxsIC4xcyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmFsbCAuMXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjFzIGVhc2UtaW4tb3V0fSNmcC1uYXYgdWwgbGk6aG92ZXIgYSBzcGFuLC5mcC1zbGlkZXNOYXYgdWwgbGk6aG92ZXIgYSBzcGFue3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bWFyZ2luOi01cHggMCAwIC01cHh9I2ZwLW5hdiB1bCBsaSAuZnAtdG9vbHRpcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTJweDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OmFyaWFsLGhlbHZldGljYSxzYW5zLXNlcmlmO3doaXRlLXNwYWNlOm5vd3JhcDttYXgtd2lkdGg6MjIwcHg7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6YmxvY2s7b3BhY2l0eTowO3dpZHRoOjA7Y3Vyc29yOnBvaW50ZXJ9I2ZwLW5hdi5mcC1zaG93LWFjdGl2ZSBhLmFjdGl2ZSsuZnAtdG9vbHRpcCwjZnAtbmF2IHVsIGxpOmhvdmVyIC5mcC10b29sdGlwey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4ycyBlYXNlLWluO3RyYW5zaXRpb246b3BhY2l0eSAuMnMgZWFzZS1pbjt3aWR0aDphdXRvO29wYWNpdHk6MX0jZnAtbmF2IHVsIGxpIC5mcC10b29sdGlwLmZwLXJpZ2h0e3JpZ2h0OjIwcHh9I2ZwLW5hdiB1bCBsaSAuZnAtdG9vbHRpcC5mcC1sZWZ0e2xlZnQ6MjBweH0uZnAtYXV0by1oZWlnaHQuZnAtc2VjdGlvbiwuZnAtYXV0by1oZWlnaHQgLmZwLXNsaWRlLC5mcC1hdXRvLWhlaWdodCAuZnAtdGFibGVDZWxsLC5mcC1yZXNwb25zaXZlIC5mcC1hdXRvLWhlaWdodC1yZXNwb25zaXZlLmZwLXNlY3Rpb24sLmZwLXJlc3BvbnNpdmUgLmZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUgLmZwLXNsaWRlLC5mcC1yZXNwb25zaXZlIC5mcC1hdXRvLWhlaWdodC1yZXNwb25zaXZlIC5mcC10YWJsZUNlbGx7aGVpZ2h0OmF1dG8haW1wb3J0YW50fS5mcC1zci1vbmx5e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsMCwwLDApO3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXI6MH1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuLyoqKi8gfSksXG4vKiA1NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cbnZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmksIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNTQpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYoZmFsc2UpIHt9XG5cbi8qKiovIH0pLFxuLyogNTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBpc0FycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG52YXIgU1BFQ0lFUyA9IF9fd2VicGFja19yZXF1aXJlX18oMCkoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDU5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU4KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDYwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcbnZhciBJT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG52YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcbnZhciB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xudmFyIGFzYyA9IF9fd2VicGFja19yZXF1aXJlX18oNTkpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciAkZmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oNjApKDUpO1xudmFyIEtFWSA9ICdmaW5kJztcbnZhciBmb3JjZWQgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKDIzKShLRVkpO1xuXG5cbi8qKiovIH0pLFxuLyogNjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIE1BVENIID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgcmUgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbS0VZXShyZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgcmVbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gIScvLi8nW0tFWV0ocmUpO1xuICAgIH0gY2F0Y2ggKGYpIHsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiB0cnVlO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDYzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KTtcbnZhciBNQVRDSCA9IF9fd2VicGFja19yZXF1aXJlX18oMCkoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA2NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxudmFyIGlzUmVnRXhwID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Myk7XG52YXIgZGVmaW5lZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCBzZWFyY2hTdHJpbmcsIE5BTUUpIHtcbiAgaWYgKGlzUmVnRXhwKHNlYXJjaFN0cmluZykpIHRocm93IFR5cGVFcnJvcignU3RyaW5nIycgKyBOQU1FICsgXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO1xuICByZXR1cm4gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDY1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcblxudmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIGNvbnRleHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY0KTtcbnZhciBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXyg2MikoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuXG4vKioqLyB9KSxcbi8qIDY2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciAkaW5jbHVkZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18oMjMpKCdpbmNsdWRlcycpO1xuXG5cbi8qKiovIH0pLFxuLyogNjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgY29yZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcbnZhciAka2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDY3KSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuLyogNjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG52YXIgSUVfUFJPVE8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcbnZhciBkZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuX193ZWJwYWNrX3JlcXVpcmVfXygzKShJdGVyYXRvclByb3RvdHlwZSwgX193ZWJwYWNrX3JlcXVpcmVfXygwKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA3MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIExJQlJBUlkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xudmFyICRpdGVyQ3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MCk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNjkpO1xudmFyIElURVJBVE9SID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyICRpdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKTtcbnZhciBnZXRLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xudmFyIHdrcyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKioqLyB9KSxcbi8qIDc0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBwSUUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcbnZhciBjcmVhdGVEZXNjID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG52YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCkgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgZ09QTiA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDc2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMSkuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKioqLyB9KSxcbi8qIDc3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBkUCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG52YXIgZ2V0S2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDc5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIGdPUFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcbnZhciBwSUUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogODAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIE1FVEEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIHNldERlc2MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDkpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDgxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDgyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczdfc3ltYm9sX2FzeW5jX2l0ZXJhdG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXM3X3N5bWJvbF9hc3luY19pdGVyYXRvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lczdfc3ltYm9sX2FzeW5jX2l0ZXJhdG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfc3ltYm9sX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXM2X3N5bWJvbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lczZfc3ltYm9sX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc193ZWJfZG9tX2l0ZXJhYmxlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfd2ViX2RvbV9pdGVyYWJsZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc193ZWJfZG9tX2l0ZXJhYmxlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfYXJyYXlfaXRlcmF0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfYXJyYXlfaXRlcmF0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXM2X2FycmF5X2l0ZXJhdG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfb2JqZWN0X2tleXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjgpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfb2JqZWN0X2tleXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXM2X29iamVjdF9rZXlzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczdfYXJyYXlfaW5jbHVkZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjYpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczdfYXJyYXlfaW5jbHVkZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXM3X2FycmF5X2luY2x1ZGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfc3RyaW5nX2luY2x1ZGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY1KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXM2X3N0cmluZ19pbmNsdWRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lczZfc3RyaW5nX2luY2x1ZGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfYXJyYXlfZmluZF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfN19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9hcnJheV9maW5kX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzNl9hcnJheV9maW5kX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgZnVsbHBhZ2VfanNfZGlzdF9mdWxscGFnZV9taW5fY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV85X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBmdWxscGFnZV9qc19kaXN0X2Z1bGxwYWdlX21pbl9jc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihmdWxscGFnZV9qc19kaXN0X2Z1bGxwYWdlX21pbl9jc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX0xvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zZWxlY3RvcnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzExX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmope2lmKHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJnR5cGVvZiBTeW1ib2wuaXRlcmF0b3I9PT1cInN5bWJvbFwiKXtfdHlwZW9mPWZ1bmN0aW9uIF90eXBlb2Yob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9O31lbHNle190eXBlb2Y9ZnVuY3Rpb24gX3R5cGVvZihvYmope3JldHVybiBvYmomJnR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJm9iai5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmb2JqIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBvYmo7fTt9cmV0dXJuIF90eXBlb2Yob2JqKTt9ZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpe2Zvcih2YXIgaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBzb3VyY2U9YXJndW1lbnRzW2ldIT1udWxsP2FyZ3VtZW50c1tpXTp7fTt2YXIgb3duS2V5cz1PYmplY3Qua2V5cyhzb3VyY2UpO2lmKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzPT09J2Z1bmN0aW9uJyl7b3duS2V5cz1vd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLHN5bSkuZW51bWVyYWJsZTt9KSk7fW93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe19kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsa2V5LHNvdXJjZVtrZXldKTt9KTt9cmV0dXJuIHRhcmdldDt9ZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaixrZXksdmFsdWUpe2lmKGtleSBpbiBvYmope09iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosa2V5LHt2YWx1ZTp2YWx1ZSxlbnVtZXJhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6dHJ1ZX0pO31lbHNle29ialtrZXldPXZhbHVlO31yZXR1cm4gb2JqO31mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsQ29uc3RydWN0b3Ipe2lmKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3Rvcikpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX1mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGU9dHJ1ZTtpZihcInZhbHVlXCJpbiBkZXNjcmlwdG9yKWRlc2NyaXB0b3Iud3JpdGFibGU9dHJ1ZTtPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpO319ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLHByb3RvUHJvcHMsc3RhdGljUHJvcHMpe2lmKHByb3RvUHJvcHMpX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpO2lmKHN0YXRpY1Byb3BzKV9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fWZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsY2FsbCl7aWYoY2FsbCYmKF90eXBlb2YoY2FsbCk9PT1cIm9iamVjdFwifHx0eXBlb2YgY2FsbD09PVwiZnVuY3Rpb25cIikpe3JldHVybiBjYWxsO31yZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTt9ZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKXtpZihzZWxmPT09dm9pZCAwKXt0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7fXJldHVybiBzZWxmO31mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobyl7X2dldFByb3RvdHlwZU9mPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pe3JldHVybiBvLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO307cmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTt9ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLHN1cGVyQ2xhc3Mpe2lmKHR5cGVvZiBzdXBlckNsYXNzIT09XCJmdW5jdGlvblwiJiZzdXBlckNsYXNzIT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO31zdWJDbGFzcy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzJiZzdXBlckNsYXNzLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnN1YkNsYXNzLHdyaXRhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWV9fSk7aWYoc3VwZXJDbGFzcylfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3Msc3VwZXJDbGFzcyk7fWZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLHApe19zZXRQcm90b3R5cGVPZj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLHApe28uX19wcm90b19fPXA7cmV0dXJuIG87fTtyZXR1cm4gX3NldFByb3RvdHlwZU9mKG8scCk7fS8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqLyAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xudmFyIEZ1bGxwYWdlO3ZhciBpc0Z1bmM9ZnVuY3Rpb24gaXNGdW5jKHZhbCl7cmV0dXJuIHR5cGVvZiB2YWw9PT0nZnVuY3Rpb24nO307dmFyIGlzRXF1YWxBcnJheT1mdW5jdGlvbiBpc0VxdWFsQXJyYXkoZmlyc3RBcnIsc2Vjb25kQXJyKXtpZihmaXJzdEFyci5sZW5ndGghPT1zZWNvbmRBcnIubGVuZ3RoKXJldHVybiBmYWxzZTtyZXR1cm4gZmlyc3RBcnIuZmluZChmdW5jdGlvbihlbCl7cmV0dXJuIXNlY29uZEFyci5pbmNsdWRlcyhlbCk7fSk9PW51bGw7fTt2YXIgZnVsbHBhZ2VDYWxsYmFja3M9WydhZnRlckxvYWQnLCdhZnRlclJlbmRlcicsJ2FmdGVyUmVzaXplJywnYWZ0ZXJSZXNwb25zaXZlJywnYWZ0ZXJTbGlkZUxvYWQnLCdvbkxlYXZlJywnb25TbGlkZUxlYXZlJ107dmFyIFJlYWN0RnVsbHBhZ2U9LyojX19QVVJFX18qL2Z1bmN0aW9uKF9SZWFjdCRDb21wb25lbnQpe19pbmhlcml0cyhSZWFjdEZ1bGxwYWdlLF9SZWFjdCRDb21wb25lbnQpO2Z1bmN0aW9uIFJlYWN0RnVsbHBhZ2UocHJvcHMpe3ZhciBfdGhpcztfY2xhc3NDYWxsQ2hlY2sodGhpcyxSZWFjdEZ1bGxwYWdlKTtfdGhpcz1fcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLF9nZXRQcm90b3R5cGVPZihSZWFjdEZ1bGxwYWdlKS5jYWxsKHRoaXMscHJvcHMpKTt2YXIgX3RoaXMkcHJvcHM9X3RoaXMucHJvcHMscmVuZGVyPV90aGlzJHByb3BzLnJlbmRlcixwbHVnaW5XcmFwcGVyPV90aGlzJHByb3BzLnBsdWdpbldyYXBwZXI7aWYoIWlzRnVuYyhyZW5kZXIpKXt0aHJvdyBuZXcgRXJyb3IoJ211c3QgcHJvdmlkZSByZW5kZXIgcHJvcCB0byA8UmVhY3RGdWxscGFnZSAvPicpO31fdGhpcy5sb2c9T2JqZWN0KF9Mb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzEwX19bLyogZGVmYXVsdCAqLyBcImFcIl0pKF90aGlzLnByb3BzLmRlYnVnLCdSZWFjdEZ1bGxwYWdlJyk7X3RoaXMubG9nKCdCdWlsZGluZyBjb21wb25lbnQnKTtfdGhpcy5sb2coJ0ltcG9ydGluZyB2ZW5kb3IgZmlsZXMnKTtfdGhpcy5pbXBvcnRWZW5kb3JzKCk7aWYocGx1Z2luV3JhcHBlcil7X3RoaXMubG9nKCdDYWxsaW5nIHBsdWdpbiB3cmFwcGVyJyk7cGx1Z2luV3JhcHBlcigpO31fdGhpcy5sb2coJ1JlcXVpcmluZyBmdWxscGFnZS5qcycpO0Z1bGxwYWdlPV9fd2VicGFja19yZXF1aXJlX18oNTIpO190aGlzLnN0YXRlPXtpbml0aWFsaXplZDpmYWxzZSxzZWN0aW9uQ291bnQ6MCxzbGlkZUNvdW50OjB9O3JldHVybiBfdGhpczt9X2NyZWF0ZUNsYXNzKFJlYWN0RnVsbHBhZ2UsW3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCl7dmFyIG9wdHM9dGhpcy5idWlsZE9wdGlvbnMoKTt0aGlzLmxvZygnUmVhY3QgTGlmZWN5Y2xlOiBjb21wb25lbnREaWRNb3VudCgpJyk7aWYoRnVsbHBhZ2Upe3RoaXMuaW5pdChvcHRzKTt0aGlzLm1hcmtJbml0aWFsaXplZCgpO319fSx7a2V5OlwiY29tcG9uZW50RGlkVXBkYXRlXCIsdmFsdWU6ZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7dGhpcy5sb2coJ1JlYWN0IExpZmVjeWNsZTogY29tcG9uZW50RGlkVXBkYXRlKCknKTt2YXIgbmV3U2VjdGlvbkNvdW50PXRoaXMuZ2V0U2VjdGlvbkNvdW50KCk7dmFyIG5ld1NsaWRlQ291bnQ9dGhpcy5nZXRTbGlkZUNvdW50KCk7dmFyIF90aGlzJHN0YXRlPXRoaXMuc3RhdGUsc2VjdGlvbkNvdW50PV90aGlzJHN0YXRlLnNlY3Rpb25Db3VudCxzbGlkZUNvdW50PV90aGlzJHN0YXRlLnNsaWRlQ291bnQ7Ly8gY29tcGFyaW5nIHNlY3Rpb25Db2xvcnMgYXJyYXkgb3B0aW9uXG52YXIgYXJlU2FtZVNlY3Rpb25Db2xvcnM9aXNFcXVhbEFycmF5KHByZXZQcm9wcy5zZWN0aW9uc0NvbG9yLHRoaXMucHJvcHMuc2VjdGlvbnNDb2xvcik7Ly8gTk9URTogaWYgZnVsbHBhZ2UgcHJvcHMgaGF2ZSBjaGFuZ2VkIHdlIG5lZWQgdG8gcmVidWlsZFxuaWYoIWFyZVNhbWVTZWN0aW9uQ29sb3JzKXt0aGlzLmxvZygncmVidWlsZGluZyBkdWUgdG8gYSBjaGFuZ2UgaW4gZnVsbHBhZ2UuanMgcHJvcHMnKTt0aGlzLnJlUmVuZGVyKCk7cmV0dXJuO31pZihzZWN0aW9uQ291bnQ9PT1uZXdTZWN0aW9uQ291bnQmJnNsaWRlQ291bnQ9PT1uZXdTbGlkZUNvdW50KXtyZXR1cm47fS8vIE5PVEU6IGlmIHNlY3Rpb25zL3NsaWRlcyBoYXZlIGNoYW5nZWQgd2UgbmVlZCB0byByZWJ1aWxkXG50aGlzLmxvZygncmVidWlsZGluZyBkdWUgdG8gYSBjaGFuZ2UgaW4gZnVsbHBhZ2UuanMgc2VjdGlvbnMvc2xpZGVzJyk7dGhpcy5yZVJlbmRlcigpO319LHtrZXk6XCJjb21wb25lbnRXaWxsVW5tb3VudFwiLHZhbHVlOmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5kZXN0cm95KCk7fX0se2tleTpcImdldFNlY3Rpb25Db3VudFwiLHZhbHVlOmZ1bmN0aW9uIGdldFNlY3Rpb25Db3VudCgpe3ZhciBfdGhpcyRwcm9wcyRzZWN0aW9uU2U9dGhpcy5wcm9wcy5zZWN0aW9uU2VsZWN0b3Isc2VjdGlvblNlbGVjdG9yPV90aGlzJHByb3BzJHNlY3Rpb25TZT09PXZvaWQgMD9fc2VsZWN0b3JzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMV9fWy8qIERFRkFVTFRfU0VDVElPTiAqLyBcImFcIl06X3RoaXMkcHJvcHMkc2VjdGlvblNlO3ZhciBfZG9jdW1lbnQkcXVlcnlTZWxlY3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWN0aW9uU2VsZWN0b3IpLGxlbmd0aD1fZG9jdW1lbnQkcXVlcnlTZWxlY3QubGVuZ3RoO3JldHVybiBsZW5ndGg7fX0se2tleTpcImdldFNsaWRlQ291bnRcIix2YWx1ZTpmdW5jdGlvbiBnZXRTbGlkZUNvdW50KCl7dmFyIF90aGlzJHByb3BzJHNsaWRlU2VsZT10aGlzLnByb3BzLnNsaWRlU2VsZWN0b3Isc2xpZGVTZWxlY3Rvcj1fdGhpcyRwcm9wcyRzbGlkZVNlbGU9PT12b2lkIDA/X3NlbGVjdG9yc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTFfX1svKiBERUZBVUxUX1NMSURFICovIFwiYlwiXTpfdGhpcyRwcm9wcyRzbGlkZVNlbGU7dmFyIF9kb2N1bWVudCRxdWVyeVNlbGVjdDI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzbGlkZVNlbGVjdG9yKSxsZW5ndGg9X2RvY3VtZW50JHF1ZXJ5U2VsZWN0Mi5sZW5ndGg7cmV0dXJuIGxlbmd0aDt9fSx7a2V5OlwiaW1wb3J0VmVuZG9yc1wiLHZhbHVlOmZ1bmN0aW9uIGltcG9ydFZlbmRvcnMoKXt2YXIgX3RoaXMkcHJvcHMyPXRoaXMucHJvcHMsc2Nyb2xsT3ZlcmZsb3c9X3RoaXMkcHJvcHMyLnNjcm9sbE92ZXJmbG93LGVhc2luZz1fdGhpcyRwcm9wczIuZWFzaW5nO2lmKHNjcm9sbE92ZXJmbG93KXtfX3dlYnBhY2tfcmVxdWlyZV9fKDUxKTt9aWYoZWFzaW5nKXtfX3dlYnBhY2tfcmVxdWlyZV9fKDUwKTt9fX0se2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbiBpbml0KG9wdHMpe3RoaXMubG9nKCdSZWluaXRpYWxpemluZyBmdWxscGFnZSB3aXRoIG9wdGlvbnMnLG9wdHMpO25ldyBGdWxscGFnZShfc2VsZWN0b3JzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMV9fWy8qIElEX1NFTEVDVE9SICovIFwiY1wiXSxvcHRzKTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG50aGlzLmZ1bGxwYWdlQXBpPXdpbmRvdy5mdWxscGFnZV9hcGk7dGhpcy5mcFV0aWxzPXdpbmRvdy5mcF91dGlsczt0aGlzLmZwRWFzaW5ncz13aW5kb3cuZnBfZWFzaW5nczt9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uIGRlc3Ryb3koKXt0aGlzLmxvZygnRGVzdHJveWluZyBmdWxscGFnZSBpbnN0YW5jZScpO3RoaXMuZnVsbHBhZ2VBcGkuZGVzdHJveSgnYWxsJyk7fX0se2tleTpcInJlUmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24gcmVSZW5kZXIoKXt0aGlzLmRlc3Ryb3koKTt0aGlzLmluaXQodGhpcy5idWlsZE9wdGlvbnMoKSk7fX0se2tleTpcIm1hcmtJbml0aWFsaXplZFwiLHZhbHVlOmZ1bmN0aW9uIG1hcmtJbml0aWFsaXplZCgpe3RoaXMubG9nKCdNYXJraW5nIGluaXRpYWxpemVkJyk7dGhpcy5zZXRTdGF0ZSh7aW5pdGlhbGl6ZWQ6dHJ1ZSxzZWN0aW9uQ291bnQ6dGhpcy5nZXRTZWN0aW9uQ291bnQoKSxzbGlkZUNvdW50OnRoaXMuZ2V0U2xpZGVDb3VudCgpfSk7fX0se2tleTpcImJ1aWxkT3B0aW9uc1wiLHZhbHVlOmZ1bmN0aW9uIGJ1aWxkT3B0aW9ucygpe3ZhciBfdGhpczI9dGhpczt2YXIgZmlsdGVyQ2I9ZnVuY3Rpb24gZmlsdGVyQ2Ioa2V5KXtyZXR1cm4hIU9iamVjdC5rZXlzKF90aGlzMi5wcm9wcykuZmluZChmdW5jdGlvbihjYil7cmV0dXJuIGNiPT09a2V5O30pO307dmFyIHJlZ2lzdGVyZWQ9ZnVsbHBhZ2VDYWxsYmFja3MuZmlsdGVyKGZpbHRlckNiKTt2YXIgbGlzdGVuZXJzPXJlZ2lzdGVyZWQucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCxrZXkpe3JldHVybiBfb2JqZWN0U3ByZWFkKHt9LHJlc3VsdCxfZGVmaW5lUHJvcGVydHkoe30sa2V5LGZ1bmN0aW9uKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31yZXR1cm4gX3RoaXMyLnVwZGF0ZS5hcHBseShfdGhpczIsW2tleV0uY29uY2F0KGFyZ3MpKTt9KSk7fSx7fSk7Ly8gTk9URTogb3ZlcnJpZGUgcGFzc2VkIGluIGNhbGxiYWNrcyB3LyAgd3JhcHBlZCBsaXN0ZW5lcnNcbnZhciBvcHRpb25zPV9vYmplY3RTcHJlYWQoe30sdGhpcy5wcm9wcyxsaXN0ZW5lcnMpO3RoaXMubG9nKCdCdWlsZGluZyBmdWxscGFnZS5qcyBvcHRpb25zOiAnLG9wdGlvbnMpO3JldHVybiBvcHRpb25zO319LHtrZXk6XCJ1cGRhdGVcIix2YWx1ZTpmdW5jdGlvbiB1cGRhdGUobGFzdEV2ZW50KXt2YXIgX3RoaXMkcHJvcHMzO2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuMj4xP19sZW4yLTE6MCksX2tleTI9MTtfa2V5MjxfbGVuMjtfa2V5MisrKXthcmdzW19rZXkyLTFdPWFyZ3VtZW50c1tfa2V5Ml07fXRoaXMubG9nKCdFdmVudCB0cmlnZ2VyOiAnLGxhc3RFdmVudCk7dmFyIHN0YXRlPV9vYmplY3RTcHJlYWQoe30sdGhpcy5zdGF0ZSx7c2VjdGlvbkNvdW50OnRoaXMuZ2V0U2VjdGlvbkNvdW50KCksc2xpZGVDb3VudDp0aGlzLmdldFNsaWRlQ291bnQoKX0pO3ZhciBtYWtlU3RhdGU9ZnVuY3Rpb24gbWFrZVN0YXRlKGNhbGxiYWNrUGFyYW1ldGVycyl7cmV0dXJuIF9vYmplY3RTcHJlYWQoe30sc3RhdGUsY2FsbGJhY2tQYXJhbWV0ZXJzLHtsYXN0RXZlbnQ6bGFzdEV2ZW50fSk7fTt2YXIgZnJvbUFyZ3M9ZnVuY3Rpb24gZnJvbUFyZ3MoYXJnTGlzdCl7cmV0dXJuIGFyZ0xpc3QucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCxrZXksaSl7dmFyIHZhbHVlPWFyZ3NbaV07cmVzdWx0W2tleV09dmFsdWU7Ly8gZXNsaW50LWRpc2FibGUtbGluZVxucmV0dXJuIHJlc3VsdDt9LHt9KTt9Oy8vIE5PVEU6IHJlbWFwcGluZyBjYWxsYmFjayBhcmdzIHRvIHYzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMjY2FsbGJhY2tzXG5zd2l0Y2gobGFzdEV2ZW50KXsvLyBBZnRlci0qXG5jYXNlJ2FmdGVyTG9hZCc6c3RhdGU9bWFrZVN0YXRlKGZyb21BcmdzKFsnb3JpZ2luJywnZGVzdGluYXRpb24nLCdkaXJlY3Rpb24nXSkpO2JyZWFrO2Nhc2UnYWZ0ZXJSZXNpemUnOnN0YXRlPW1ha2VTdGF0ZShmcm9tQXJncyhbJyddKSk7YnJlYWs7Y2FzZSdhZnRlclJlc3BvbnNpdmUnOnN0YXRlPW1ha2VTdGF0ZShmcm9tQXJncyhbJ2lzUmVzcG9uc2l2ZSddKSk7YnJlYWs7Y2FzZSdhZnRlclNsaWRlTG9hZCc6c3RhdGU9bWFrZVN0YXRlKGZyb21BcmdzKFsnc2VjdGlvbicsJ29yaWdpbicsJ2Rlc3RpbmF0aW9uJywnZGlyZWN0aW9uJ10pKTticmVhazsvLyBPbi0qXG5jYXNlJ29uTGVhdmUnOnN0YXRlPW1ha2VTdGF0ZShmcm9tQXJncyhbJ29yaWdpbicsJ2Rlc3RpbmF0aW9uJywnZGlyZWN0aW9uJ10pKTticmVhaztjYXNlJ29uU2xpZGVMZWF2ZSc6c3RhdGU9bWFrZVN0YXRlKGZyb21BcmdzKFsnc2VjdGlvbicsJ29yaWdpbicsJ3NsaWRlSW5kZXgnLCdkZXN0aW5hdGlvbicsJ2RpcmVjdGlvbiddKSk7YnJlYWs7ZGVmYXVsdDpicmVhazt9dmFyIHJldHVybmVkPShfdGhpcyRwcm9wczM9dGhpcy5wcm9wcylbbGFzdEV2ZW50XS5hcHBseShfdGhpcyRwcm9wczMsYXJncyk7dGhpcy5sb2coJ0NhbGxlZCBjYWxsYmFjazogUmV0dXJuaW5nID0+ICcscmV0dXJuZWQpO3RoaXMubG9nKCdVcGRhdGluZyBTdGF0ZSA9PiAnLHN0YXRlKTt0aGlzLnNldFN0YXRlKHN0YXRlKTtyZXR1cm4gcmV0dXJuZWQ7fX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uIHJlbmRlcigpe3RoaXMubG9nKCc8PT0gUmVuZGVyaW5nID09PicpO3JldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOl9zZWxlY3RvcnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzExX19bLyogTUFJTl9TRUxFQ1RPUiAqLyBcImRcIl19LHRoaXMucHJvcHMucmVuZGVyKHRoaXMpKTt9fV0pO3JldHVybiBSZWFjdEZ1bGxwYWdlO30ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX19kZWZhdWx0LmEuQ29tcG9uZW50KTtSZWFjdEZ1bGxwYWdlLmRlZmF1bHRQcm9wcz17c2VjdGlvbnNDb2xvcjpbXX07LyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChSZWFjdEZ1bGxwYWdlKTtcblxuLyoqKi8gfSksXG4vKiA4MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIHJlZGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcbnZhciB3a3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG4gIHZhciBmbnMgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSk7XG4gIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgdmFyIHJ4Zm4gPSBmbnNbMV07XG4gIGlmIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKSB7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG4vKiA4NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBAQG1hdGNoIGxvZ2ljXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDgzKSgnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoZGVmaW5lZCwgTUFUQ0gsICRtYXRjaCkge1xuICAvLyAyMS4xLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5tYXRjaChyZWdleHApXG4gIHJldHVybiBbZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgfSwgJG1hdGNoXTtcbn0pO1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgICBcIi9cIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiByZXF1aXJlKFwiRTpcXFxcY29kZVxcXFx3b3JrXFxcXHdlYnNpdGVcXFxccGFnZXNcXFxcaW5kZXgudHN4XCIpO1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi9sb2FkYWJsZSdcblxuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IHR5cGUgTG9hZGVyQ29tcG9uZW50PFAgPSB7fT4gPSBQcm9taXNlPFxuICBSZWFjdC5Db21wb25lbnRUeXBlPFA+IHwgeyBkZWZhdWx0OiBSZWFjdC5Db21wb25lbnRUeXBlPFA+IH1cbj5cblxuZXhwb3J0IHR5cGUgTG9hZGVyPFAgPSB7fT4gPSAoKCkgPT4gTG9hZGVyQ29tcG9uZW50PFA+KSB8IExvYWRlckNvbXBvbmVudDxQPlxuXG5leHBvcnQgdHlwZSBMb2FkZXJNYXAgPSB7IFttZHVsZTogc3RyaW5nXTogKCkgPT4gTG9hZGVyPGFueT4gfVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnMgPSB7XG4gIHdlYnBhY2s/KCk6IGFueVxuICBtb2R1bGVzPygpOiBMb2FkZXJNYXBcbn1cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVCYXNlT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVHZW5lcmF0ZWRPcHRpb25zICYge1xuICBsb2FkaW5nPzogKHtcbiAgICBlcnJvcixcbiAgICBpc0xvYWRpbmcsXG4gICAgcGFzdERlbGF5LFxuICB9OiB7XG4gICAgZXJyb3I/OiBFcnJvciB8IG51bGxcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuXG4gICAgcGFzdERlbGF5PzogYm9vbGVhblxuICAgIHJldHJ5PzogKCkgPT4gdm9pZFxuICAgIHRpbWVkT3V0PzogYm9vbGVhblxuICB9KSA9PiBKU1guRWxlbWVudCB8IG51bGxcbiAgbG9hZGVyPzogTG9hZGVyPFA+IHwgTG9hZGVyTWFwXG4gIGxvYWRhYmxlR2VuZXJhdGVkPzogTG9hZGFibGVHZW5lcmF0ZWRPcHRpb25zXG4gIHNzcj86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVPcHRpb25zPFAgPSB7fT4gPSBMb2FkYWJsZUJhc2VPcHRpb25zPFA+ICYge1xuICByZW5kZXI/KGxvYWRlcjogYW55LCBwcm9wczogYW55KTogSlNYLkVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgRHluYW1pY09wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlQmFzZU9wdGlvbnM8UD4gJiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB0aGUgbW9kdWxlcyBvcHRpb24gaGFzIGJlZW4gcGxhbm5lZCBmb3IgcmVtb3ZhbFxuICAgKi9cbiAgcmVuZGVyPyhwcm9wczogUCwgbG9hZGVkOiBhbnkpOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUZuPFAgPSB7fT4gPSAoXG4gIG9wdHM6IExvYWRhYmxlT3B0aW9uczxQPlxuKSA9PiBSZWFjdC5Db21wb25lbnRUeXBlPFA+XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlQ29tcG9uZW50PFAgPSB7fT4gPSBSZWFjdC5Db21wb25lbnRUeXBlPFA+XG5cbmV4cG9ydCBmdW5jdGlvbiBub1NTUjxQID0ge30+KFxuICBMb2FkYWJsZUluaXRpYWxpemVyOiBMb2FkYWJsZUZuPFA+LFxuICBsb2FkYWJsZU9wdGlvbnM6IExvYWRhYmxlT3B0aW9uczxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB7XG4gIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrXG4gIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlc1xuXG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZyFcbiAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gIHJldHVybiAoKSA9PiAoXG4gICAgPExvYWRpbmcgZXJyb3I9e251bGx9IGlzTG9hZGluZyBwYXN0RGVsYXk9e2ZhbHNlfSB0aW1lZE91dD17ZmFsc2V9IC8+XG4gIClcbn1cblxuLy8gZnVuY3Rpb24gZHluYW1pYzxQID0ge30sIE8gZXh0ZW5kcyBEeW5hbWljT3B0aW9ucz4ob3B0aW9uczogTyk6XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWM8UCA9IHt9PihcbiAgZHluYW1pY09wdGlvbnM6IER5bmFtaWNPcHRpb25zPFA+IHwgTG9hZGVyPFA+LFxuICBvcHRpb25zPzogRHluYW1pY09wdGlvbnM8UD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4ge1xuICBsZXQgbG9hZGFibGVGbjogTG9hZGFibGVGbjxQPiA9IExvYWRhYmxlXG4gIGxldCBsb2FkYWJsZU9wdGlvbnM6IExvYWRhYmxlT3B0aW9uczxQPiA9IHtcbiAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgIGxvYWRpbmc6ICh7IGVycm9yLCBpc0xvYWRpbmcsIHBhc3REZWxheSB9KSA9PiB7XG4gICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGxcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2Vycm9yLnN0YWNrfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0sXG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKSA9PiBkeW5hbWljT3B0aW9uc1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9uc1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7IC4uLmxvYWRhYmxlT3B0aW9ucywgLi4uZHluYW1pY09wdGlvbnMgfVxuICB9XG5cbiAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICBsb2FkYWJsZU9wdGlvbnMgPSB7IC4uLmxvYWRhYmxlT3B0aW9ucywgLi4ub3B0aW9ucyB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcgJiZcbiAgICAhKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgKSB7XG4gICAgLy8gc2hvdyBkZXByZWNhdGlvbiB3YXJuaW5nIGZvciBgbW9kdWxlc2Aga2V5IGluIGRldmVsb3BtZW50XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChkeW5hbWljT3B0aW9ucy5tb2R1bGVzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnVGhlIG1vZHVsZXMgb3B0aW9uIGZvciBuZXh0L2R5bmFtaWMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gU2VlIGhlcmUgZm9yIG1vcmUgaW5mbyBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9uZXh0LWR5bmFtaWMtbW9kdWxlcydcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBgcmVuZGVyYCB3aGVuIHVzaW5nIGEgbWFwcGluZywgZWc6IGBkeW5hbWljKHsgbW9kdWxlczogKCkgPT4ge3JldHVybiB7SGVsbG9Xb3JsZDogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSwgcmVuZGVyKHByb3BzLCBsb2FkZWQpIHt9IH0gfSlcbiAgICBpZiAoZHluYW1pY09wdGlvbnMucmVuZGVyKSB7XG4gICAgICBsb2FkYWJsZU9wdGlvbnMucmVuZGVyID0gKGxvYWRlZCwgcHJvcHMpID0+XG4gICAgICAgIGR5bmFtaWNPcHRpb25zLnJlbmRlciEocHJvcHMsIGxvYWRlZClcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgYG1vZHVsZXNgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgIGlmIChkeW5hbWljT3B0aW9ucy5tb2R1bGVzKSB7XG4gICAgICBsb2FkYWJsZUZuID0gTG9hZGFibGUuTWFwXG4gICAgICBjb25zdCBsb2FkTW9kdWxlczogTG9hZGVyTWFwID0ge31cbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBkeW5hbWljT3B0aW9ucy5tb2R1bGVzKClcbiAgICAgIE9iamVjdC5rZXlzKG1vZHVsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gbW9kdWxlc1trZXldXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxvYWRNb2R1bGVzW2tleV0gPSAoKSA9PiB2YWx1ZS50aGVuKChtb2Q6IGFueSkgPT4gbW9kLmRlZmF1bHQgfHwgbW9kKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvYWRNb2R1bGVzW2tleV0gPSB2YWx1ZVxuICAgICAgfSlcbiAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBsb2FkTW9kdWxlc1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQsXG4gICAgfVxuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgfVxuXG4gIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3JcbiAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpXG4gICAgfVxuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyXG4gIH1cblxuICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgQ2FwdHVyZUZuID0gKG1vZHVsZU5hbWU6IHN0cmluZykgPT4gdm9pZFxuXG5leHBvcnQgY29uc3QgTG9hZGFibGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDYXB0dXJlRm4gfCBudWxsPihudWxsKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBMb2FkYWJsZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb250ZXh0J1xufVxuIiwiLyoqXG5AY29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQgSmFtZXMgS3lsZSA8bWVAdGhlamFtZXNreWxlLmNvbT5cbiBNSVQgTGljZW5zZVxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG5OT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG5MSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG5PRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbldJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFXG4qL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2phbWllYnVpbGRzL3JlYWN0LWxvYWRhYmxlL2Jsb2IvdjUuNS4wL3NyYy9pbmRleC5qc1xuLy8gTW9kaWZpZWQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHdlYnBhY2sgNCAvIE5leHQuanNcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3Vic2NyaXB0aW9uIH0gZnJvbSAndXNlLXN1YnNjcmlwdGlvbidcbmltcG9ydCB7IExvYWRhYmxlQ29udGV4dCB9IGZyb20gJy4vbG9hZGFibGUtY29udGV4dCdcblxuY29uc3QgQUxMX0lOSVRJQUxJWkVSUyA9IFtdXG5jb25zdCBSRUFEWV9JTklUSUFMSVpFUlMgPSBbXVxubGV0IGluaXRpYWxpemVkID0gZmFsc2VcblxuZnVuY3Rpb24gbG9hZChsb2FkZXIpIHtcbiAgbGV0IHByb21pc2UgPSBsb2FkZXIoKVxuXG4gIGxldCBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGxvYWRlZDogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgfVxuXG4gIHN0YXRlLnByb21pc2UgPSBwcm9taXNlXG4gICAgLnRoZW4oKGxvYWRlZCkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICBzdGF0ZS5sb2FkZWQgPSBsb2FkZWRcbiAgICAgIHJldHVybiBsb2FkZWRcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHN0YXRlLmVycm9yID0gZXJyXG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5mdW5jdGlvbiBsb2FkTWFwKG9iaikge1xuICBsZXQgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbG9hZGVkOiB7fSxcbiAgICBlcnJvcjogbnVsbCxcbiAgfVxuXG4gIGxldCBwcm9taXNlcyA9IFtdXG5cbiAgdHJ5IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IGxvYWQob2JqW2tleV0pXG5cbiAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgc3RhdGUubG9hZGVkW2tleV0gPSByZXN1bHQubG9hZGVkXG4gICAgICAgIHN0YXRlLmVycm9yID0gcmVzdWx0LmVycm9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdC5wcm9taXNlKVxuXG4gICAgICByZXN1bHQucHJvbWlzZVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgc3RhdGUubG9hZGVkW2tleV0gPSByZXNcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IGVyclxuICAgICAgICB9KVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHN0YXRlLmVycm9yID0gZXJyXG4gIH1cblxuICBzdGF0ZS5wcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm4gcmVzXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqLmRlZmF1bHQgOiBvYmpcbn1cblxuZnVuY3Rpb24gcmVuZGVyKGxvYWRlZCwgcHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShsb2FkZWQpLCBwcm9wcylcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZEZuLCBvcHRpb25zKSB7XG4gIGxldCBvcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICB7XG4gICAgICBsb2FkZXI6IG51bGwsXG4gICAgICBsb2FkaW5nOiBudWxsLFxuICAgICAgZGVsYXk6IDIwMCxcbiAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgIHdlYnBhY2s6IG51bGwsXG4gICAgICBtb2R1bGVzOiBudWxsLFxuICAgIH0sXG4gICAgb3B0aW9uc1xuICApXG5cbiAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGxcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCBzdWIgPSBuZXcgTG9hZGFibGVTdWJzY3JpcHRpb24obG9hZEZuLCBvcHRzKVxuICAgICAgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICBnZXRDdXJyZW50VmFsdWU6IHN1Yi5nZXRDdXJyZW50VmFsdWUuYmluZChzdWIpLFxuICAgICAgICBzdWJzY3JpYmU6IHN1Yi5zdWJzY3JpYmUuYmluZChzdWIpLFxuICAgICAgICByZXRyeTogc3ViLnJldHJ5LmJpbmQoc3ViKSxcbiAgICAgICAgcHJvbWlzZTogc3ViLnByb21pc2UuYmluZChzdWIpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnByb21pc2UoKVxuICB9XG5cbiAgLy8gU2VydmVyIG9ubHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgQUxMX0lOSVRJQUxJWkVSUy5wdXNoKGluaXQpXG4gIH1cblxuICAvLyBDbGllbnQgb25seVxuICBpZiAoXG4gICAgIWluaXRpYWxpemVkICYmXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2Ygb3B0cy53ZWJwYWNrID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIGNvbnN0IG1vZHVsZUlkcyA9IG9wdHMud2VicGFjaygpXG4gICAgUkVBRFlfSU5JVElBTElaRVJTLnB1c2goKGlkcykgPT4ge1xuICAgICAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiBtb2R1bGVJZHMpIHtcbiAgICAgICAgaWYgKGlkcy5pbmRleE9mKG1vZHVsZUlkKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaW5pdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgTG9hZGFibGVDb21wb25lbnQgPSAocHJvcHMsIHJlZikgPT4ge1xuICAgIGluaXQoKVxuXG4gICAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoTG9hZGFibGVDb250ZXh0KVxuICAgIGNvbnN0IHN0YXRlID0gdXNlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbilcblxuICAgIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoXG4gICAgICByZWYsXG4gICAgICAoKSA9PiAoe1xuICAgICAgICByZXRyeTogc3Vic2NyaXB0aW9uLnJldHJ5LFxuICAgICAgfSksXG4gICAgICBbXVxuICAgIClcblxuICAgIGlmIChjb250ZXh0ICYmIEFycmF5LmlzQXJyYXkob3B0cy5tb2R1bGVzKSkge1xuICAgICAgb3B0cy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZU5hbWUpID0+IHtcbiAgICAgICAgY29udGV4dChtb2R1bGVOYW1lKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUubG9hZGluZyB8fCBzdGF0ZS5lcnJvcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChvcHRzLmxvYWRpbmcsIHtcbiAgICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmcsXG4gICAgICAgICAgcGFzdERlbGF5OiBzdGF0ZS5wYXN0RGVsYXksXG4gICAgICAgICAgdGltZWRPdXQ6IHN0YXRlLnRpbWVkT3V0LFxuICAgICAgICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcbiAgICAgICAgICByZXRyeTogc3Vic2NyaXB0aW9uLnJldHJ5LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5sb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMucmVuZGVyKHN0YXRlLmxvYWRlZCwgcHJvcHMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0sIFtwcm9wcywgc3RhdGVdKVxuICB9XG5cbiAgTG9hZGFibGVDb21wb25lbnQucHJlbG9hZCA9ICgpID0+IGluaXQoKVxuICBMb2FkYWJsZUNvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbXBvbmVudCdcblxuICByZXR1cm4gUmVhY3QuZm9yd2FyZFJlZihMb2FkYWJsZUNvbXBvbmVudClcbn1cblxuY2xhc3MgTG9hZGFibGVTdWJzY3JpcHRpb24ge1xuICBjb25zdHJ1Y3Rvcihsb2FkRm4sIG9wdHMpIHtcbiAgICB0aGlzLl9sb2FkRm4gPSBsb2FkRm5cbiAgICB0aGlzLl9vcHRzID0gb3B0c1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKVxuICAgIHRoaXMuX2RlbGF5ID0gbnVsbFxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG5cbiAgICB0aGlzLnJldHJ5KClcbiAgfVxuXG4gIHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlcy5wcm9taXNlXG4gIH1cblxuICByZXRyeSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXRzKClcbiAgICB0aGlzLl9yZXMgPSB0aGlzLl9sb2FkRm4odGhpcy5fb3B0cy5sb2FkZXIpXG5cbiAgICB0aGlzLl9zdGF0ZSA9IHtcbiAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICB0aW1lZE91dDogZmFsc2UsXG4gICAgfVxuXG4gICAgY29uc3QgeyBfcmVzOiByZXMsIF9vcHRzOiBvcHRzIH0gPSB0aGlzXG5cbiAgICBpZiAocmVzLmxvYWRpbmcpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKG9wdHMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9zdGF0ZS5wYXN0RGVsYXkgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGVsYXkgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgICAgICAgIHBhc3REZWxheTogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSwgb3B0cy5kZWxheSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7IHRpbWVkT3V0OiB0cnVlIH0pXG4gICAgICAgIH0sIG9wdHMudGltZW91dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9yZXMucHJvbWlzZVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGUoe30pXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoX2VycikgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGUoe30pXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKVxuICAgICAgfSlcbiAgICB0aGlzLl91cGRhdGUoe30pXG4gIH1cblxuICBfdXBkYXRlKHBhcnRpYWwpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuX3N0YXRlLFxuICAgICAgZXJyb3I6IHRoaXMuX3Jlcy5lcnJvcixcbiAgICAgIGxvYWRlZDogdGhpcy5fcmVzLmxvYWRlZCxcbiAgICAgIGxvYWRpbmc6IHRoaXMuX3Jlcy5sb2FkaW5nLFxuICAgICAgLi4ucGFydGlhbCxcbiAgICB9XG4gICAgdGhpcy5fY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjaygpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dHMoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KVxuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICB9XG5cbiAgZ2V0Q3VycmVudFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVxuICB9XG5cbiAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFjaylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5fY2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFjaylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gTG9hZGFibGUob3B0cykge1xuICByZXR1cm4gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZCwgb3B0cylcbn1cblxuZnVuY3Rpb24gTG9hZGFibGVNYXAob3B0cykge1xuICBpZiAodHlwZW9mIG9wdHMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkYWJsZU1hcCByZXF1aXJlcyBhIGByZW5kZXIobG9hZGVkLCBwcm9wcylgIGZ1bmN0aW9uJylcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkTWFwLCBvcHRzKVxufVxuXG5Mb2FkYWJsZS5NYXAgPSBMb2FkYWJsZU1hcFxuXG5mdW5jdGlvbiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsIGlkcykge1xuICBsZXQgcHJvbWlzZXMgPSBbXVxuXG4gIHdoaWxlIChpbml0aWFsaXplcnMubGVuZ3RoKSB7XG4gICAgbGV0IGluaXQgPSBpbml0aWFsaXplcnMucG9wKClcbiAgICBwcm9taXNlcy5wdXNoKGluaXQoaWRzKSlcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxpemVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsIGlkcylcbiAgICB9XG4gIH0pXG59XG5cbkxvYWRhYmxlLnByZWxvYWRBbGwgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZUluaXRpYWxpemVycywgcmVqZWN0KSA9PiB7XG4gICAgZmx1c2hJbml0aWFsaXplcnMoQUxMX0lOSVRJQUxJWkVSUykudGhlbihyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpXG4gIH0pXG59XG5cbkxvYWRhYmxlLnByZWxvYWRSZWFkeSA9IChpZHMgPSBbXSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcmVsb2FkKSA9PiB7XG4gICAgY29uc3QgcmVzID0gKCkgPT4ge1xuICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gICAgICByZXR1cm4gcmVzb2x2ZVByZWxvYWQoKVxuICAgIH1cbiAgICAvLyBXZSBhbHdheXMgd2lsbCByZXNvbHZlLCBlcnJvcnMgc2hvdWxkIGJlIGhhbmRsZWQgd2l0aGluIGxvYWRpbmcgVUlzLlxuICAgIGZsdXNoSW5pdGlhbGl6ZXJzKFJFQURZX0lOSVRJQUxJWkVSUywgaWRzKS50aGVuKHJlcywgcmVzKVxuICB9KVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkgPSBMb2FkYWJsZS5wcmVsb2FkUmVhZHlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGFibGVcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9keW5hbWljJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2dW5kZWZpbmVkXG4gKiB1c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vL1xuLy8gSW4gb3JkZXIgdG8gYXZvaWQgcmVtb3ZpbmcgYW5kIHJlLWFkZGluZyBzdWJzY3JpcHRpb25zIGVhY2ggdGltZSB0aGlzIGhvb2sgaXMgY2FsbGVkLFxuLy8gdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgaG9vayBzaG91bGQgYmUgbWVtb2l6ZWQgaW4gc29tZSB3YXnigJNcbi8vIGVpdGhlciBieSB3cmFwcGluZyB0aGUgZW50aXJlIHBhcmFtcyBvYmplY3Qgd2l0aCB1c2VNZW1vKClcbi8vIG9yIGJ5IHdyYXBwaW5nIHRoZSBpbmRpdmlkdWFsIGNhbGxiYWNrcyB3aXRoIHVzZUNhbGxiYWNrKCkuXG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihfcmVmKSB7XG4gIHZhciBnZXRDdXJyZW50VmFsdWUgPSBfcmVmLmdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZSA9IF9yZWYuc3Vic2NyaWJlO1xuXG4gIC8vIFJlYWQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBvdXIgc3Vic2NyaXB0aW9uLlxuICAvLyBXaGVuIHRoaXMgdmFsdWUgY2hhbmdlcywgd2UnbGwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggUmVhY3QuXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGFsc28gc3RvcmUgdGhlIGhvb2sgcGFyYW1zIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGZvciBzdGFsZW5lc3MuXG4gIC8vIChTZWUgdGhlIGNvbW1lbnQgaW4gY2hlY2tGb3JVcGRhdGVzKCkgYmVsb3cgZm9yIG1vcmUgaW5mby4pXG4gIHZhciBfdXNlU3RhdGUgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogZ2V0Q3VycmVudFZhbHVlKClcbiAgICB9O1xuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHZhbHVlVG9SZXR1cm4gPSBzdGF0ZS52YWx1ZTsgLy8gSWYgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQgc2luY2Ugb3VyIGxhc3QgcmVuZGVyLCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBpdHMgY3VycmVudCB2YWx1ZS5cblxuICBpZiAoc3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgc3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAvLyBJZiB0aGUgc3Vic2NyaXB0aW9uIGhhcyBiZWVuIHVwZGF0ZWQsIHdlJ2xsIHNjaGVkdWxlIGFub3RoZXIgdXBkYXRlIHdpdGggUmVhY3QuXG4gICAgLy8gUmVhY3Qgd2lsbCBwcm9jZXNzIHRoaXMgdXBkYXRlIGltbWVkaWF0ZWx5LCBzbyB0aGUgb2xkIHN1YnNjcmlwdGlvbiB2YWx1ZSB3b24ndCBiZSBjb21taXR0ZWQuXG4gICAgLy8gSXQgaXMgc3RpbGwgbmljZSB0byBhdm9pZCByZXR1cm5pbmcgYSBtaXNtYXRjaGVkIHZhbHVlIHRob3VnaCwgc28gbGV0J3Mgb3ZlcnJpZGUgdGhlIHJldHVybiB2YWx1ZS5cbiAgICB2YWx1ZVRvUmV0dXJuID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVRvUmV0dXJuXG4gICAgfSk7XG4gIH0gLy8gRGlzcGxheSB0aGUgY3VycmVudCB2YWx1ZSBmb3IgdGhpcyBob29rIGluIFJlYWN0IERldlRvb2xzLlxuXG5cbiAgcmVhY3QudXNlRGVidWdWYWx1ZSh2YWx1ZVRvUmV0dXJuKTsgLy8gSXQgaXMgaW1wb3J0YW50IG5vdCB0byBzdWJzY3JpYmUgd2hpbGUgcmVuZGVyaW5nIGJlY2F1c2UgdGhpcyBjYW4gbGVhZCB0byBtZW1vcnkgbGVha3MuXG4gIC8vIChMZWFybiBtb3JlIGF0IHJlYWN0anMub3JnL2RvY3Mvc3RyaWN0LW1vZGUuaHRtbCNkZXRlY3RpbmctdW5leHBlY3RlZC1zaWRlLWVmZmVjdHMpXG4gIC8vIEluc3RlYWQsIHdlIHdhaXQgdW50aWwgdGhlIGNvbW1pdCBwaGFzZSB0byBhdHRhY2ggb3VyIGhhbmRsZXIuXG4gIC8vXG4gIC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGEgcGFzc2l2ZSBlZmZlY3QgKHVzZUVmZmVjdCkgcmF0aGVyIHRoYW4gYSBzeW5jaHJvbm91cyBvbmUgKHVzZUxheW91dEVmZmVjdClcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBzdHJldGNoIHRoZSBjb21taXQgcGhhc2UuXG4gIC8vIFRoaXMgYWxzbyBoYXMgYW4gYWRkZWQgYmVuZWZpdCB3aGVuIG11bHRpcGxlIGNvbXBvbmVudHMgYXJlIHN1YnNjcmliZWQgdG8gdGhlIHNhbWUgc291cmNlOlxuICAvLyBJdCBhbGxvd3MgZWFjaCBvZiB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gc2FmZWx5IHNjaGVkdWxlIHdvcmsgd2l0aG91dCBwb3RlbnRpYWxseSByZW1vdmluZyBhbiBhbm90aGVyIGhhbmRsZXIuXG4gIC8vIChMZWFybiBtb3JlIGF0IGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9rMHl2cjU5NzBvKVxuXG4gIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGV2ZW4gYWZ0ZXIgYmVpbmcgdW5zdWJzY3JpYmVkLFxuICAgICAgLy8gaWYgaXQncyByZW1vdmVkIGFzIGEgcmVzdWx0IG9mIGEgc3Vic2NyaXB0aW9uIGV2ZW50L3VwZGF0ZS5cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgUmVhY3Qgd2lsbCBsb2cgYSBERVYgd2FybmluZyBhYm91dCBhbiB1cGRhdGUgZnJvbSBhbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgY2FuIGF2b2lkIHRyaWdnZXJpbmcgdGhhdCB3YXJuaW5nIHdpdGggdGhpcyBjaGVjay5cbiAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdlIHVzZSBhIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb24gdG8gYXZvaWQgc2NoZWR1bGluZyB3b3JrIGZvciBhIHN0YWxlIHNvdXJjZS5cbiAgICAgIC8vIEhvd2V2ZXIgaXQncyBpbXBvcnRhbnQgdG8gZWFnZXJseSByZWFkIHRoZSBjdXJyZW50bHkgdmFsdWUsXG4gICAgICAvLyBzbyB0aGF0IGFsbCBzY2hlZHVsZWQgd29yayBzaGFyZXMgdGhlIHNhbWUgdmFsdWUgKGluIHRoZSBldmVudCBvZiBtdWx0aXBsZSBzdWJzY3JpcHRpb25zKS5cbiAgICAgIC8vIFRoaXMgYXZvaWRzIHZpc3VhbCBcInRlYXJpbmdcIiB3aGVuIGEgbXV0YXRpb24gaGFwcGVucyBkdXJpbmcgYSAoY29uY3VycmVudCkgcmVuZGVyLlxuXG5cbiAgICAgIHZhciB2YWx1ZSA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAvLyBJZ25vcmUgdmFsdWVzIGZyb20gc3RhbGUgc291cmNlcyFcbiAgICAgICAgLy8gU2luY2Ugd2Ugc3Vic2NyaWJlIGFuIHVuc3Vic2NyaWJlIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBmb3IgYSBzdGFsZSAocHJldmlvdXMpIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBhdm9pZHMgc2NoZWR1bGluZyBhbiB1cGRhdGUgZm9yIHRoYXQgc3RhbGUgc3Vic2NyaXB0aW9uLlxuICAgICAgICBpZiAocHJldlN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHByZXZTdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH0gLy8gU29tZSBzdWJzY3JpcHRpb25zIHdpbGwgYXV0by1pbnZva2UgdGhlIGhhbmRsZXIsIGV2ZW4gaWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLlxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIG5vIHVwZGF0ZSBpcyBuZWVkZWQuXG4gICAgICAgIC8vIFJldHVybiBzdGF0ZSBhcy1pcyBzbyBSZWFjdCBjYW4gYmFpbCBvdXQgYW5kIGF2b2lkIGFuIHVubmVjZXNzYXJ5IHJlbmRlci5cblxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGNoZWNrRm9yVXBkYXRlcyk7IC8vIEJlY2F1c2Ugd2UncmUgc3Vic2NyaWJpbmcgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgYW4gdXBkYXRlIGhhcyBvY2N1cnJlZCBiZXR3ZWVuIHJlbmRlciBhbmQgb3VyIGVmZmVjdCBoYW5kbGVyLlxuICAgIC8vIENoZWNrIGZvciB0aGlzIGFuZCBzY2hlZHVsZSBhbiB1cGRhdGUgaWYgd29yayBoYXMgb2NjdXJyZWQuXG5cbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZ2V0Q3VycmVudFZhbHVlLCBzdWJzY3JpYmVdKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGZvciBvdXIgY2FsbGVyIHRvIHVzZSB3aGlsZSByZW5kZXJpbmcuXG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59XG5cbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCAnQC9zdHlsZXMvaW5kZXgubGVzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RnVsbHBhZ2UgZnJvbSAnQGZ1bGxwYWdlL3JlYWN0LWZ1bGxwYWdlJ1xyXG5pbXBvcnQgeyBIb21lTWFpbiB9IGZyb20gJ0AvY29uZidcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5jb25zdCBBSV9oZWFkZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FJX2hlYWRlci9BSV9oZWFkZXInKSlcclxuY29uc3QgQUlfZm9vdGVyID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BSV9mb290ZXIvQUlfZm9vdGVyJykpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtsdElzQW5pLCBzZXRMdElzQW5pXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtydElzQW5pLCBzZXRydElzQW5pXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBvbkxlYXZlID0gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2cob3JpZ2luLCBkaXJlY3Rpb24pXHJcblxyXG4gICAgY29uc3QgeyBpbmRleCB9ID0gZGVzdGluYXRpb25cclxuICAgIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMikge1xyXG4gICAgICBzZXRMdElzQW5pKHRydWUpXHJcbiAgICAgIHNldHJ0SXNBbmkoZmFsc2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRMdElzQW5pKGZhbHNlKVxyXG4gICAgICBzZXRydElzQW5pKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZnRlckxvYWQgPSAob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhvcmlnaW4sIGRpcmVjdGlvbilcclxuXHJcbiAgICBjb25zdCB7IGluZGV4IH0gPSBkZXN0aW5hdGlvblxyXG4gICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAyKSB7XHJcbiAgICAgIHNldEx0SXNBbmkodHJ1ZSlcclxuICAgICAgc2V0cnRJc0FuaShmYWxzZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEx0SXNBbmkoZmFsc2UpXHJcbiAgICAgIHNldHJ0SXNBbmkodHJ1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiaG9tZVwiPlxyXG4gICAgICA8QUlfaGVhZGVyIHRpdGxlPVwi6aaW6aG1XCIgY3VycmVudEluZGV4PXswfSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8UmVhY3RGdWxscGFnZVxyXG4gICAgICAgICAgb25MZWF2ZT17b25MZWF2ZX1cclxuICAgICAgICAgIGFmdGVyTG9hZD17YWZ0ZXJMb2FkfVxyXG4gICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdEZ1bGxwYWdlLldyYXBwZXI+XHJcbiAgICAgICAgICAgICAge0hvbWVNYWluLm1hcChcclxuICAgICAgICAgICAgICAgICh7IHRpdGxlLCBlbSwgaW1nLCBiZywgbGVmdElzVGV4dCwgY2xhc3NOYW1lIH0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JnfSlgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGVmdElzVGV4dCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx0SXNBbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dF9ib3ggYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luTGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dF9ib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57ZW19PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx0SXNBbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc05hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbWcgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYmFja0luUmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhc3NOYW1lICsgJ2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiU2hvd19pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRJc0FuaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzTmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ltZyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5MZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzTmFtZSArICdpbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNob3dfaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRJc0FuaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0X2JveCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19iYWNrSW5SaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dF9ib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT57ZW19PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7aWR4ID09PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFJX2Zvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1JlYWN0RnVsbHBhZ2UuV3JhcHBlcj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7LyogPGNvZGU+e0pTT04uc3RyaW5naWZ5KHN0YXRlLCBudWxsLCA0KX08L2NvZGU+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgaGVsbG9cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxzcGFuPntwcm9wcy5tc2d9PC9zcGFuPlxyXG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzLzEucG5nXCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICA8aDE+6Lez6L2sYWJvdXQ8L2gxPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgcGF0aG5hbWU6ICcvYWJvdXQnLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgbmFtZTogJzEyMycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDE+6Lez6L2sYWJvdXTkvKDlj4I8L2gxPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtsaW5rQ2xpY2t9PlxyXG4gICAgICAgIGpz6Lez6L2sYWJvdXRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2xpbmtEZWFpbENsaWNrfT5cclxuICAgICAgICBqc+i3s+i9rGxpc3RcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFBob25lIC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=