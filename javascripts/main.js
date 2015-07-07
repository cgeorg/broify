/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _broify = __webpack_require__(1);

	var _broify2 = _interopRequireDefault(_broify);

	document.querySelector('#bro-input').addEventListener('input', function (e) {
	    outEl.innerText = (0, _broify2['default'])(e.target.value);
	});

	var outEl = document.querySelector('#bro-output');

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function broify(str) {
	    return str && [
	    //Special cases where 2 letters really should be turned into br
	    [/sco/gi, 'bro'], [/who/gi, 'bro'], [/kno/gi, 'bro'], [/clo/gi, 'bro'], [/sho/gi, 'bro'], [/ppo/gi, 'bro'], [/tho/gi, 'bro'], [/(b)ry/gi, '$1roy'], [/(b)[aeiou]r([^aeiu]|$)/gi, '$1ro$2'], [/[BCDFGHJKLMNPQRSTVWXYZ]ro/g, 'Bro'], [/[bcdfghjklmnprstvwxyz]ro/g, 'bro'], [/((Br)|[BCDFGHJKLMNPQRSTVWXYZ](o+))/g, function ($0, $1, $2, $3) {
	        return $2 ? $0 : 'Br' + $3;
	    }], [/((Br)|([BCDFGHJKLMNPQRSTVWXYZ])O)/g, function ($0, $1, $2, $3, $4) {
	        return $2 ? $0 : $3 + 'Bro';
	    }], [/(([Bb]r)|[bcdfghjklmnprstvwxyz](o+))/g, function ($0, $1, $2, $3) {
	        return $2 ? $0 : 'br' + $3;
	    }], [/(\b)o/g, '$1bro'], [/(\b)O/g, '$1Bro'], [/(b).?[aeiu]/gi, '$1ro'], [/((^|[^t])[aeiu])o/gi, '$1bro']].reduce(function (str, r) {
	        return str.replace(r[0], r[1]);
	    }, str);
	}

	module.exports = broify;

/***/ }
/******/ ]);