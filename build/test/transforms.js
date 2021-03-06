var transforms =
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * DOM mutation procedures called by the patcher. This module provides
	 * a cleaner API for our purposes and a place to intercept and
	 * monitor mutations during testing.
	 */

	var html = __webpack_require__(4);


	exports.insertTextNode = function (parent, before, str) {
	    var node = document.createTextNode(str);
	    parent.insertBefore(node, before);
	    return node;
	};

	exports.replaceText = function (node, str) {
	    node.textContent = str;
	    return node;
	};

	exports.replaceChild = function (parent, node, old) {
	    parent.replaceChild(node, old);
	    return node;
	};

	exports.appendChild = function (parent, node) {
	    parent.appendChild(node);
	    return node;
	};

	exports.insertElement = function (parent, before, tag) {
	    var node = document.createElement(tag);
	    parent.insertBefore(node, before);
	    return node;
	};

	exports.removeChild = function (parent, node) {
	    parent.removeChild(node);
	    return node;
	};

	exports.setAttribute = function (node, name, value) {
	    if (html.attributes[name] & html.USE_PROPERTY) {
	        node[name] = value;
	    }
	    node.setAttribute(name, value);
	    return node;
	};

	exports.removeAttribute = function (node, name) {
	    if (html.attributes[name] & html.USE_PROPERTY) {
	        node[name] = false;
	    }
	    node.removeAttribute(name);
	    return node;
	};

	exports.addEventListener = function (node, name, handler) {
	    node.addEventListener(name, handler, false);
	    return node;
	};

	exports.removeEventListener = function (node, name, handler) {
	    node.removeEventListener(name, handler);
	    return node;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	var BOOLEAN_ATTRIBUTE = exports.BOOLEAN_ATTRIBUTE = 1;
	var USE_PROPERTY = exports.USE_PROPERTY = 2;
	var USE_STRING = exports.USE_STRING = 4;

	exports.attributes = {
	    'allowfullscreen': BOOLEAN_ATTRIBUTE,
	    'async': BOOLEAN_ATTRIBUTE,
	    'autofocus': BOOLEAN_ATTRIBUTE,
	    'autoplay': BOOLEAN_ATTRIBUTE,
	    'capture': BOOLEAN_ATTRIBUTE,
	    'checked': BOOLEAN_ATTRIBUTE | USE_PROPERTY,
	    'controls': BOOLEAN_ATTRIBUTE,
	    'default': BOOLEAN_ATTRIBUTE,
	    'defer': BOOLEAN_ATTRIBUTE,
	    'disabled': BOOLEAN_ATTRIBUTE,
	    'formnovalidate': BOOLEAN_ATTRIBUTE,
	    'hidden': BOOLEAN_ATTRIBUTE,
	    'itemscope': BOOLEAN_ATTRIBUTE,
	    'loop': BOOLEAN_ATTRIBUTE,
	    'multiple': BOOLEAN_ATTRIBUTE | USE_PROPERTY,
	    'muted': BOOLEAN_ATTRIBUTE | USE_PROPERTY,
	    'novalidate': BOOLEAN_ATTRIBUTE,
	    'open': BOOLEAN_ATTRIBUTE,
	    'readonly': BOOLEAN_ATTRIBUTE,
	    'required': BOOLEAN_ATTRIBUTE,
	    'reversed': BOOLEAN_ATTRIBUTE,
	    'selected': BOOLEAN_ATTRIBUTE | USE_PROPERTY,
	    'value': USE_PROPERTY | USE_STRING
	};



/***/ })
/******/ ]);