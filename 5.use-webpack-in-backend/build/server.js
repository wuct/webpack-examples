require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireWildcard(_express);
	
	var _path = __webpack_require__(2);
	
	var _path2 = _interopRequireWildcard(_path);
	
	var app = _express2['default']();
	
	app.get('/', function (req, res) {
	  res.sendFile(_path2['default'].resolve('./index.html'));
	});
	
	var server = app.listen(3000, function () {
	
	  var host = server.address().address;
	  var port = server.address().port;
	
	  console.log('Example app listening at http://' + host + ':' + port + '.');
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("path");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map