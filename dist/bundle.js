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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_quat2_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec2_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec3_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gl_matrix_vec4_js__ = __webpack_require__(12);
/* unused harmony reexport glMatrix */
/* unused harmony reexport mat2 */
/* unused harmony reexport mat2d */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat_js__; });
/* unused harmony reexport quat2 */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec2_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec3_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__gl_matrix_vec4_js__; });













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RANDOM; });
/* unused harmony export setMatrixArrayType */
/* unused harmony export toRadian */
/* unused harmony export equals */
/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gl; });
/* harmony export (immutable) */ __webpack_exports__["c"] = setGL;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cylinderString; });
var gl;
function setGL(_gl) {
    gl = _gl;
}
let cylinderString = `
g default
v 0.000000 0.000000 -1.000000
v 0.195090 0.000000 -0.980785
v 0.382683 0.000000 -0.923880
v 0.555570 0.000000 -0.831470
v 0.707107 0.000000 -0.707107
v 0.831470 0.000000 -0.555570
v 0.923880 0.000000 -0.382683
v 0.980785 0.000000 -0.195090
v 1.000000 0.000000 0.000000
v 0.980785 0.000000 0.195090
v 0.923880 0.000000 0.382683
v 0.831470 0.000000 0.555570
v 0.707107 0.000000 0.707107
v 0.555570 0.000000 0.831470
v 0.382683 0.000000 0.923880
v 0.195090 0.000000 0.980785
v 0.000000 0.000000 1.000000
v -0.195091 0.000000 0.980785
v -0.382684 0.000000 0.923879
v -0.555571 0.000000 0.831469
v -0.707107 0.000000 0.707106
v -0.831470 0.000000 0.555570
v -0.923880 0.000000 0.382683
v -0.980785 0.000000 0.195089
v -1.000000 0.000000 -0.000001
v -0.980785 0.000000 -0.195091
v -0.923879 0.000000 -0.382684
v -0.831469 0.000000 -0.555571
v -0.707106 0.000000 -0.707108
v -0.555569 0.000000 -0.831470
v -0.382682 0.000000 -0.923880
v -0.195089 0.000000 -0.980786
v 0.000001 2.000000 -0.735735
v 0.143536 2.000000 -0.721598
v 0.281555 2.000000 -0.679730
v 0.408754 2.000000 -0.611741
v 0.520244 2.000000 -0.520242
v 0.611742 2.000000 -0.408752
v 0.679731 2.000000 -0.281553
v 0.721599 2.000000 -0.143533
v 0.735735 2.000000 0.000001
v 0.721598 2.000000 0.143536
v 0.679730 2.000000 0.281555
v 0.611741 2.000000 0.408753
v 0.520243 2.000000 0.520243
v 0.408752 2.000000 0.611741
v 0.281554 2.000000 0.679730
v 0.143535 2.000000 0.721598
v 0.000001 2.000000 0.735735
v -0.143534 2.000000 0.721598
v -0.281553 2.000000 0.679731
v -0.408751 2.000000 0.611742
v -0.520242 2.000000 0.520244
v -0.611740 2.000000 0.408754
v -0.679729 2.000000 0.281555
v -0.721598 2.000000 0.143537
v -0.735735 2.000000 0.000003
v -0.721599 2.000000 -0.143532
v -0.679732 2.000000 -0.281550
v -0.611744 2.000000 -0.408749
v -0.520246 2.000000 -0.520240
v -0.408756 2.000000 -0.611739
v -0.281558 2.000000 -0.679729
v -0.143540 2.000000 -0.721597
vt 2.240672 -0.000043
vt 2.240671 0.999957
vt 2.124629 0.999957
vt 2.124630 -0.000043
vt 2.008586 0.999957
vt 2.008587 -0.000043
vt 1.892544 0.999957
vt 1.892545 -0.000043
vt 1.776502 0.999957
vt 1.776503 -0.000043
vt 1.660459 0.999957
vt 1.660460 -0.000043
vt 1.544417 0.999957
vt 1.544418 -0.000043
vt 1.428374 0.999957
vt 1.428375 -0.000043
vt 1.312332 0.999957
vt 1.312333 -0.000043
vt 1.196290 0.999958
vt 1.196290 -0.000043
vt 1.080248 0.999958
vt 1.080248 -0.000043
vt 0.964206 0.999958
vt 0.964206 -0.000043
vt 0.848163 0.999958
vt 0.848163 -0.000043
vt 0.732121 0.999958
vt 0.732121 -0.000043
vt 0.616079 0.999958
vt 0.616079 -0.000043
vt 0.500037 0.999958
vt 0.500036 -0.000043
vt 0.383995 0.999958
vt 0.383994 -0.000043
vt 0.267953 0.999958
vt 0.267952 -0.000043
vt 0.151911 0.999958
vt 0.151909 -0.000043
vt 0.035868 0.999958
vt 0.035867 -0.000043
vt -0.080174 0.999958
vt -0.080175 -0.000043
vt -0.196216 0.999958
vt -0.196218 -0.000043
vt -0.312258 0.999958
vt -0.312260 -0.000043
vt -0.428300 0.999958
vt -0.428302 -0.000043
vt -0.544343 0.999958
vt -0.544345 -0.000043
vt -0.660385 0.999958
vt -0.660388 -0.000043
vt -0.776427 0.999957
vt -0.776430 -0.000043
vt -0.892469 0.999957
vt -0.892473 -0.000043
vt -1.008511 0.999957
vt -1.008515 -0.000043
vt -1.124553 0.999957
vt -1.124557 -0.000043
vt -1.240595 0.999957
vt -1.240600 -0.000043
vt -1.356637 0.999957
vt -1.356642 -0.000043
vt 2.356714 -0.000043
vt 2.356719 0.999957
vn 0.000000 0.000000 -1.000000
vn 0.000000 0.000000 -1.000000
vn 0.195077 0.000000 -0.980788
vn 0.000000 0.000000 -1.000000
vn 0.195077 0.000000 -0.980788
vn 0.195077 0.000000 -0.980788
vn 0.195077 0.000000 -0.980788
vn 0.195077 0.000000 -0.980788
vn 0.382682 0.000000 -0.923880
vn 0.195077 0.000000 -0.980788
vn 0.382682 0.000000 -0.923880
vn 0.382682 0.000000 -0.923880
vn 0.382682 0.000000 -0.923880
vn 0.382682 0.000000 -0.923880
vn 0.555573 0.000000 -0.831468
vn 0.382682 0.000000 -0.923880
vn 0.555573 0.000000 -0.831468
vn 0.555573 0.000000 -0.831468
vn 0.555573 0.000000 -0.831468
vn 0.555573 0.000000 -0.831468
vn 0.707107 0.000000 -0.707107
vn 0.555573 0.000000 -0.831468
vn 0.707107 0.000000 -0.707107
vn 0.707107 0.000000 -0.707107
vn 0.707107 0.000000 -0.707107
vn 0.707107 0.000000 -0.707107
vn 0.831468 0.000000 -0.555573
vn 0.707107 0.000000 -0.707107
vn 0.831468 0.000000 -0.555573
vn 0.831468 0.000000 -0.555573
vn 0.831468 0.000000 -0.555573
vn 0.831468 0.000000 -0.555573
vn 0.923880 0.000000 -0.382682
vn 0.831468 0.000000 -0.555573
vn 0.923880 0.000000 -0.382682
vn 0.923880 0.000000 -0.382682
vn 0.923880 0.000000 -0.382682
vn 0.923880 0.000000 -0.382682
vn 0.980788 0.000000 -0.195077
vn 0.923880 0.000000 -0.382682
vn 0.980788 0.000000 -0.195077
vn 0.980788 0.000000 -0.195077
vn 0.980788 0.000000 -0.195077
vn 0.980788 0.000000 -0.195077
vn 1.000000 0.000000 0.000000
vn 0.980788 0.000000 -0.195077
vn 1.000000 0.000000 0.000000
vn 1.000000 0.000000 0.000000
vn 1.000000 0.000000 0.000000
vn 1.000000 0.000000 0.000000
vn 0.980788 0.000000 0.195077
vn 1.000000 0.000000 0.000000
vn 0.980788 0.000000 0.195077
vn 0.980788 0.000000 0.195077
vn 0.980788 0.000000 0.195077
vn 0.980788 0.000000 0.195077
vn 0.923880 0.000000 0.382682
vn 0.980788 0.000000 0.195077
vn 0.923880 0.000000 0.382682
vn 0.923880 0.000000 0.382682
vn 0.923880 0.000000 0.382682
vn 0.923880 0.000000 0.382682
vn 0.831468 0.000000 0.555573
vn 0.923880 0.000000 0.382682
vn 0.831468 0.000000 0.555573
vn 0.831468 0.000000 0.555573
vn 0.831468 0.000000 0.555573
vn 0.831468 0.000000 0.555573
vn 0.707107 0.000000 0.707107
vn 0.831468 0.000000 0.555573
vn 0.707107 0.000000 0.707107
vn 0.707107 0.000000 0.707107
vn 0.707107 0.000000 0.707107
vn 0.707107 0.000000 0.707107
vn 0.555573 0.000000 0.831468
vn 0.707107 0.000000 0.707107
vn 0.555573 0.000000 0.831468
vn 0.555573 0.000000 0.831468
vn 0.555573 0.000000 0.831468
vn 0.555573 0.000000 0.831468
vn 0.382682 0.000000 0.923880
vn 0.555573 0.000000 0.831468
vn 0.382682 0.000000 0.923880
vn 0.382682 0.000000 0.923880
vn 0.382682 0.000000 0.923880
vn 0.382682 0.000000 0.923880
vn 0.195077 0.000000 0.980788
vn 0.382682 0.000000 0.923880
vn 0.195077 0.000000 0.980788
vn 0.195077 0.000000 0.980788
vn 0.195077 0.000000 0.980788
vn 0.195077 0.000000 0.980788
vn 0.000000 0.000000 1.000000
vn 0.195077 0.000000 0.980788
vn 0.000000 0.000000 1.000000
vn 0.000000 0.000000 1.000000
vn 0.000000 0.000000 1.000000
vn 0.000000 0.000000 1.000000
vn -0.195077 0.000000 0.980788
vn 0.000000 0.000000 1.000000
vn -0.195077 0.000000 0.980788
vn -0.195077 0.000000 0.980788
vn -0.195077 0.000000 0.980788
vn -0.195077 0.000000 0.980788
vn -0.382682 0.000000 0.923880
vn -0.195077 0.000000 0.980788
vn -0.382682 0.000000 0.923880
vn -0.382682 0.000000 0.923880
vn -0.382682 0.000000 0.923880
vn -0.382682 0.000000 0.923880
vn -0.555573 0.000000 0.831468
vn -0.382682 0.000000 0.923880
vn -0.555573 0.000000 0.831468
vn -0.555573 0.000000 0.831468
vn -0.555573 0.000000 0.831468
vn -0.555573 0.000000 0.831468
vn -0.707107 0.000000 0.707107
vn -0.555573 0.000000 0.831468
vn -0.707107 0.000000 0.707107
vn -0.707107 0.000000 0.707107
vn -0.707107 0.000000 0.707107
vn -0.707107 0.000000 0.707107
vn -0.831468 0.000000 0.555573
vn -0.707107 0.000000 0.707107
vn -0.831468 0.000000 0.555573
vn -0.831468 0.000000 0.555573
vn -0.831468 0.000000 0.555573
vn -0.831468 0.000000 0.555573
vn -0.923880 0.000000 0.382682
vn -0.831468 0.000000 0.555573
vn -0.923880 0.000000 0.382682
vn -0.923880 0.000000 0.382682
vn -0.923880 0.000000 0.382682
vn -0.923880 0.000000 0.382682
vn -0.980788 0.000000 0.195077
vn -0.923880 0.000000 0.382682
vn -0.980788 0.000000 0.195077
vn -0.980788 0.000000 0.195077
vn -0.980788 0.000000 0.195077
vn -0.980788 0.000000 0.195077
vn -1.000000 0.000000 0.000000
vn -0.980788 0.000000 0.195077
vn -1.000000 0.000000 0.000000
vn -1.000000 0.000000 0.000000
vn -1.000000 0.000000 0.000000
vn -1.000000 0.000000 0.000000
vn -0.980788 0.000000 -0.195077
vn -1.000000 0.000000 0.000000
vn -0.980788 0.000000 -0.195077
vn -0.980788 0.000000 -0.195077
vn -0.980788 0.000000 -0.195077
vn -0.980788 0.000000 -0.195077
vn -0.923880 0.000000 -0.382682
vn -0.980788 0.000000 -0.195077
vn -0.923880 0.000000 -0.382682
vn -0.923880 0.000000 -0.382682
vn -0.923880 0.000000 -0.382682
vn -0.923880 0.000000 -0.382682
vn -0.831468 0.000000 -0.555573
vn -0.923880 0.000000 -0.382682
vn -0.831468 0.000000 -0.555573
vn -0.831468 0.000000 -0.555573
vn -0.831468 0.000000 -0.555573
vn -0.831468 0.000000 -0.555573
vn -0.707107 0.000000 -0.707107
vn -0.831468 0.000000 -0.555573
vn -0.707107 0.000000 -0.707107
vn -0.707107 0.000000 -0.707107
vn -0.707107 0.000000 -0.707107
vn -0.707107 0.000000 -0.707107
vn -0.555573 0.000000 -0.831468
vn -0.707107 0.000000 -0.707107
vn -0.555573 0.000000 -0.831468
vn -0.555573 0.000000 -0.831468
vn -0.555573 0.000000 -0.831468
vn -0.555573 0.000000 -0.831468
vn -0.382682 0.000000 -0.923880
vn -0.555573 0.000000 -0.831468
vn -0.382682 0.000000 -0.923880
vn -0.382682 0.000000 -0.923880
vn -0.382682 0.000000 -0.923880
vn -0.382682 0.000000 -0.923880
vn -0.195077 0.000000 -0.980788
vn -0.382682 0.000000 -0.923880
vn -0.195077 0.000000 -0.980788
vn -0.195077 0.000000 -0.980788
vn 0.000000 0.000000 -1.000000
vn 0.000000 0.000000 -1.000000
vn -0.195077 0.000000 -0.980788
vn 0.000000 0.000000 -1.000000
vn -0.195077 0.000000 -0.980788
vn -0.195077 0.000000 -0.980788
s off
g Mesh
usemtl initialShadingGroup
f 1/1/1 33/2/2 34/3/3
f 1/1/4 34/3/5 2/4/6
f 2/4/7 34/3/8 35/5/9
f 2/4/10 35/5/11 3/6/12
f 3/6/13 35/5/14 36/7/15
f 3/6/16 36/7/17 4/8/18
f 4/8/19 36/7/20 37/9/21
f 4/8/22 37/9/23 5/10/24
f 5/10/25 37/9/26 38/11/27
f 5/10/28 38/11/29 6/12/30
f 6/12/31 38/11/32 39/13/33
f 6/12/34 39/13/35 7/14/36
f 7/14/37 39/13/38 40/15/39
f 7/14/40 40/15/41 8/16/42
f 8/16/43 40/15/44 41/17/45
f 8/16/46 41/17/47 9/18/48
f 9/18/49 41/17/50 42/19/51
f 9/18/52 42/19/53 10/20/54
f 10/20/55 42/19/56 43/21/57
f 10/20/58 43/21/59 11/22/60
f 11/22/61 43/21/62 44/23/63
f 11/22/64 44/23/65 12/24/66
f 12/24/67 44/23/68 45/25/69
f 12/24/70 45/25/71 13/26/72
f 13/26/73 45/25/74 46/27/75
f 13/26/76 46/27/77 14/28/78
f 14/28/79 46/27/80 47/29/81
f 14/28/82 47/29/83 15/30/84
f 15/30/85 47/29/86 48/31/87
f 15/30/88 48/31/89 16/32/90
f 16/32/91 48/31/92 49/33/93
f 16/32/94 49/33/95 17/34/96
f 17/34/97 49/33/98 50/35/99
f 17/34/100 50/35/101 18/36/102
f 18/36/103 50/35/104 51/37/105
f 18/36/106 51/37/107 19/38/108
f 19/38/109 51/37/110 52/39/111
f 19/38/112 52/39/113 20/40/114
f 20/40/115 52/39/116 53/41/117
f 20/40/118 53/41/119 21/42/120
f 21/42/121 53/41/122 54/43/123
f 21/42/124 54/43/125 22/44/126
f 22/44/127 54/43/128 55/45/129
f 22/44/130 55/45/131 23/46/132
f 23/46/133 55/45/134 56/47/135
f 23/46/136 56/47/137 24/48/138
f 24/48/139 56/47/140 57/49/141
f 24/48/142 57/49/143 25/50/144
f 25/50/145 57/49/146 58/51/147
f 25/50/148 58/51/149 26/52/150
f 26/52/151 58/51/152 59/53/153
f 26/52/154 59/53/155 27/54/156
f 27/54/157 59/53/158 60/55/159
f 27/54/160 60/55/161 28/56/162
f 28/56/163 60/55/164 61/57/165
f 28/56/166 61/57/167 29/58/168
f 29/58/169 61/57/170 62/59/171
f 29/58/172 62/59/173 30/60/174
f 30/60/175 62/59/176 63/61/177
f 30/60/178 63/61/179 31/62/180
f 31/62/181 63/61/182 64/63/183
f 31/62/184 64/63/185 32/64/186
f 33/2/187 1/1/188 32/65/189
f 33/2/190 32/65/191 64/66/192
`;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(2);

class Drawable {
    constructor() {
        this.count = 0;
        this.idxGenerated = false;
        this.posGenerated = false;
        this.norGenerated = false;
        this.colGenerated = false;
        this.translateGenerated = false;
        this.uvGenerated = false;
        this.depthGenerated = false;
        this.forwardGenerated = false;
        this.rotQuatGenerated = false;
        this.roadLengthGenerated = false;
        this.roadWidthGenerated = false;
        this.numInstances = 0; // How many instances of this Drawable the shader program should draw
    }
    destory() {
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufPos);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufNor);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufCol);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufUV);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufDepth);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufForward);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufRotQuat);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufRoadLength);
        __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].deleteBuffer(this.bufRoadWidth);
    }
    generateIdx() {
        this.idxGenerated = true;
        this.bufIdx = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generatePos() {
        this.posGenerated = true;
        this.bufPos = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateNor() {
        this.norGenerated = true;
        this.bufNor = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateCol() {
        this.colGenerated = true;
        this.bufCol = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateTranslate() {
        this.translateGenerated = true;
        this.bufTranslate = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateUV() {
        this.uvGenerated = true;
        this.bufUV = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateForward() {
        this.forwardGenerated = true;
        this.bufForward = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateDepth() {
        this.depthGenerated = true;
        this.bufDepth = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateRotMat() {
        this.rotQuatGenerated = true;
        this.bufRotQuat = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateRoadLength() {
        this.roadLengthGenerated = true;
        this.bufRoadLength = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    generateRoadWidth() {
        this.roadWidthGenerated = true;
        this.bufRoadWidth = __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].createBuffer();
    }
    bindIdx() {
        if (this.idxGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        }
        return this.idxGenerated;
    }
    bindPos() {
        if (this.posGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufPos);
        }
        return this.posGenerated;
    }
    bindNor() {
        if (this.norGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufNor);
        }
        return this.norGenerated;
    }
    bindCol() {
        if (this.colGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufCol);
        }
        return this.colGenerated;
    }
    bindTranslate() {
        if (this.translateGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        }
        return this.translateGenerated;
    }
    bindUV() {
        if (this.uvGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufUV);
        }
        return this.uvGenerated;
    }
    bindForward() {
        if (this.forwardGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufForward);
        }
        return this.forwardGenerated;
    }
    bindDepth() {
        if (this.depthGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufDepth);
        }
        return this.depthGenerated;
    }
    bindRotQuat() {
        if (this.rotQuatGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufRotQuat);
        }
        return this.rotQuatGenerated;
    }
    bindRoadLength() {
        if (this.roadLengthGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufRoadLength);
        }
        return this.roadLengthGenerated;
    }
    bindRoadWidth() {
        if (this.roadWidthGenerated) {
            __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].ARRAY_BUFFER, this.bufRoadWidth);
        }
        return this.roadWidthGenerated;
    }
    elemCount() {
        return this.count;
    }
    drawMode() {
        return __WEBPACK_IMPORTED_MODULE_0__globals__["b" /* gl */].TRIANGLES;
    }
    setNumInstances(num) {
        this.numInstances = num;
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Drawable);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);

var hash = __webpack_require__(23);
class TerrainInfo {
    constructor(si) {
        this.seed = 0;
        this.ratio = 1;
        this.tile = 5;
        this.validKernelPos = new Array();
        this.si = si;
        this.compute();
    }
    getHashInt(str) {
        var hash = 0, i, chr;
        if (str.length === 0)
            return hash;
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
    ;
    randomStrF1(s) {
        return (this.getHashInt(hash.MD5(s + s + s + this.seed)) / Math.PI % 1 + 1) / 2;
    }
    randomVec2F1(x, y) {
        return (this.getHashInt(hash.MD5(x.toString() + y.toString() + this.seed)) / Math.PI % 1 + 1) / 2;
    }
    randomVec2Vec2(uv) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(this.randomVec2F1(uv[0] + 4.652636753, uv[1] + 56.79737658632), this.randomVec2F1(uv[1] + 46372.465736724, uv[0] + 6563776.43761375));
    }
    compute() {
        this.seed = hash.sha1(this.si.globalSeed);
        this.ratio = this.si.mapWidthHeightRatio;
        // clear all kernels before
        this.validKernelPos.length = 0;
        for (var i = 0; i < this.tile; ++i) {
            for (var j = 0; j < this.tile; ++j) {
                if (this.randomVec2F1(i, j) > TerrainInfo.heightThreshold) {
                    this.validKernelPos.push(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(i, j));
                }
            }
        }
        // console.log("valid kernels: " + this.validKernelPos);
    }
    // return a 0-1 pos
    getRandomValidKernalPos(seed = "something") {
        let num = Math.floor(this.randomStrF1(seed) * this.validKernelPos.length);
        let res = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].clone(this.randomVec2Vec2(this.validKernelPos[num]));
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].add(res, res, this.validKernelPos[num]);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].scale(res, res, 1 / this.tile);
        return res;
    }
    getHeight(x, y) {
        let val = this.worleyHeight(x, y);
        // only return height
        return val[0];
    }
    getKernelDis(x, y) {
        let val = this.worleyHeight(x, y);
        // only return min dis
        return val[1];
    }
    getKernelDisSacle(x, y, s) {
        let val = this.getHeightAndDisScaleShift(x, y, s);
        // only return min dis
        return val[1];
    }
    getHeightAndDis(x, y) {
        return this.worleyHeight(x, y);
    }
    getHeightAndDisScaleShift(x, y, s) {
        if (x < -s / 2 || x > s / 2 || y < -s / 2 || y > s / 2) {
            return [-1, -1];
        }
        return this.getHeightAndDis(x / s + 0.5, y / s + 0.5);
    }
    worleyHeight(x, y) {
        let xi = Math.floor(this.tile * x);
        let yi = Math.floor(this.tile * y);
        let xf = this.tile * x % 1;
        let yf = this.tile * y % 1;
        let i_st = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(xi, yi);
        let f_st = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(xf, yf);
        let m_dist = 1; // minimun distance
        let myCell = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].copy(myCell, i_st);
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                // Neighbor place in the grid
                let neighbor = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(i, j);
                // Random position from current + neighbor place in the grid
                let curNei = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].create();
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].add(curNei, i_st, neighbor);
                let point = this.randomVec2Vec2(curNei);
                // Vector between the pixel and the point
                let neighborPlusPoint = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].create();
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].add(neighborPlusPoint, point, neighbor);
                let diff = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].create();
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].sub(diff, neighborPlusPoint, f_st);
                // Distance to the point
                let dist = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].len(diff);
                // Keep the closer distance
                // m_dist = min(m_dist, dist);
                if (dist < m_dist) {
                    m_dist = dist;
                    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].copy(myCell, curNei);
                }
            }
        }
        // let point: vec2 = this.randomVec2Vec2(myCell);
        // let threshold = 0.02;
        // worley cernel debugging
        // if (Math.abs(point[0] - x) < threshold && Math.abs(point[1] - y) < threshold) {
        //   return 3.0;
        // }
        return [this.randomVec2F1(myCell[0], myCell[1]), m_dist];
    }
    getHeightScaleShift(x, y, s) {
        if (x < -s / 2 || x > s / 2 || y < -s / 2 || y > s / 2) {
            return -1;
        }
        return this.getHeight(x / s + 0.5, y / s + 0.5);
    }
}
TerrainInfo.heightThreshold = 0.0;
/* harmony default export */ __webpack_exports__["a"] = (TerrainInfo);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec4 fs_Col;\n\nout vec4 out_Col;\n\nvoid main()\n{\n    out_Col = vec4(vec3(fs_Col), 1.0);\n}\n"

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["fromMat4"] = fromMat4;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromMat2d"] = fromMat2d;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["normalFromMat4"] = normalFromMat4;
/* harmony export (immutable) */ __webpack_exports__["projection"] = projection;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);


/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  var x = v[0],
      y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromQuat2"] = fromQuat2;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);


/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  // Cache only the current line of the second matrix
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

    out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
    out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
    out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;
  var b00 = void 0,
      b01 = void 0,
      b02 = void 0;
  var b10 = void 0,
      b11 = void 0,
      b12 = void 0;
  var b20 = void 0,
      b21 = void 0,
      b22 = void 0;

  if (len < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
  a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
  a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;

  if (len < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
  var translation = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];

  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  //Only scale if it makes sense
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  var ox = o[0];
  var oy = o[1];
  var oz = o[2];

  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;

  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf = void 0;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  var x0 = void 0,
      x1 = void 0,
      x2 = void 0,
      y0 = void 0,
      y1 = void 0,
      y2 = void 0,
      z0 = void 0,
      z1 = void 0,
      z2 = void 0,
      len = void 0;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] && Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] && Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];

  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["setAxisAngle"] = setAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["getAxisAngle"] = getAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["calculateW"] = calculateW;
/* harmony export (immutable) */ __webpack_exports__["slerp"] = slerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["conjugate"] = conjugate;
/* harmony export (immutable) */ __webpack_exports__["fromMat3"] = fromMat3;
/* harmony export (immutable) */ __webpack_exports__["fromEuler"] = fromEuler;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4_js__ = __webpack_require__(12);





/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);
  if (s > __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  var omega = void 0,
      cosom = void 0,
      sinom = void 0,
      scale0 = void 0,
      scale1 = void 0;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Generates a random quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();
  var u2 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();
  var u3 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]();

  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);

  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot = void 0;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;

  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);

  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;

  return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
var clone = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["clone"];

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
var fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["fromValues"];

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
var copy = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["copy"];

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
var set = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["set"];

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
var add = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["add"];

/**
 * Alias for {@link quat.multiply}
 * @function
 */
var mul = multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
var scale = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["scale"];

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["dot"];

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */
var lerp = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["lerp"];

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
var length = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["length"];

/**
 * Alias for {@link quat.length}
 * @function
 */
var len = length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["squaredLength"];

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
var normalize = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["normalize"];

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["exactEquals"];

/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var equals = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["equals"];

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
var rotationTo = function () {
  var tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["create"]();
  var xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["fromValues"](1, 0, 0);
  var yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["fromValues"](0, 1, 0);

  return function (out, a, b) {
    var dot = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3_js__["len"](tmpvec3) < 0.000001) __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
var setAxes = function () {
  var matr = __WEBPACK_IMPORTED_MODULE_1__mat3_js__["create"]();

  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);


/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  var r = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 * Math.PI;
  var z = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2];
  // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);
  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x;
  // var uuv = vec3.cross([], qvec, uv);
  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx;
  // vec3.scale(uv, uv, 2 * w);
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  // vec3.scale(uuv, uuv, 2);
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  // return vec3.add(out, a, vec3.add(out, uv, uuv));
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec3.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec3.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec3.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);


/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;
  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    v2 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    v4 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];

  // calculate quat * vec
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec4.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec4.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec4.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createFilteredVector

var cubicHermite = __webpack_require__(44)
var bsearch = __webpack_require__(14)

function clamp(lo, hi, x) {
  return Math.min(hi, Math.max(lo, x))
}

function FilteredVector(state0, velocity0, t0) {
  this.dimension  = state0.length
  this.bounds     = [ new Array(this.dimension), new Array(this.dimension) ]
  for(var i=0; i<this.dimension; ++i) {
    this.bounds[0][i] = -Infinity
    this.bounds[1][i] = Infinity
  }
  this._state     = state0.slice().reverse()
  this._velocity  = velocity0.slice().reverse()
  this._time      = [ t0 ]
  this._scratch   = [ state0.slice(), state0.slice(), state0.slice(), state0.slice(), state0.slice() ]
}

var proto = FilteredVector.prototype

proto.flush = function(t) {
  var idx = bsearch.gt(this._time, t) - 1
  if(idx <= 0) {
    return
  }
  this._time.splice(0, idx)
  this._state.splice(0, idx * this.dimension)
  this._velocity.splice(0, idx * this.dimension)
}

proto.curve = function(t) {
  var time      = this._time
  var n         = time.length
  var idx       = bsearch.le(time, t)
  var result    = this._scratch[0]
  var state     = this._state
  var velocity  = this._velocity
  var d         = this.dimension
  var bounds    = this.bounds
  if(idx < 0) {
    var ptr = d-1
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = state[ptr]
    }
  } else if(idx >= n-1) {
    var ptr = state.length-1
    var tf = t - time[n-1]
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = state[ptr] + tf * velocity[ptr]
    }
  } else {
    var ptr = d * (idx+1) - 1
    var t0  = time[idx]
    var t1  = time[idx+1]
    var dt  = (t1 - t0) || 1.0
    var x0  = this._scratch[1]
    var x1  = this._scratch[2]
    var v0  = this._scratch[3]
    var v1  = this._scratch[4]
    var steady = true
    for(var i=0; i<d; ++i, --ptr) {
      x0[i] = state[ptr]
      v0[i] = velocity[ptr] * dt
      x1[i] = state[ptr+d]
      v1[i] = velocity[ptr+d] * dt
      steady = steady && (x0[i] === x1[i] && v0[i] === v1[i] && v0[i] === 0.0)
    }
    if(steady) {
      for(var i=0; i<d; ++i) {
        result[i] = x0[i]
      }
    } else {
      cubicHermite(x0, v0, x1, v1, (t-t0)/dt, result)
    }
  }
  var lo = bounds[0]
  var hi = bounds[1]
  for(var i=0; i<d; ++i) {
    result[i] = clamp(lo[i], hi[i], result[i])
  }
  return result
}

proto.dcurve = function(t) {
  var time     = this._time
  var n        = time.length
  var idx      = bsearch.le(time, t)
  var result   = this._scratch[0]
  var state    = this._state
  var velocity = this._velocity
  var d        = this.dimension
  if(idx >= n-1) {
    var ptr = state.length-1
    var tf = t - time[n-1]
    for(var i=0; i<d; ++i, --ptr) {
      result[i] = velocity[ptr]
    }
  } else {
    var ptr = d * (idx+1) - 1
    var t0 = time[idx]
    var t1 = time[idx+1]
    var dt = (t1 - t0) || 1.0
    var x0 = this._scratch[1]
    var x1 = this._scratch[2]
    var v0 = this._scratch[3]
    var v1 = this._scratch[4]
    var steady = true
    for(var i=0; i<d; ++i, --ptr) {
      x0[i] = state[ptr]
      v0[i] = velocity[ptr] * dt
      x1[i] = state[ptr+d]
      v1[i] = velocity[ptr+d] * dt
      steady = steady && (x0[i] === x1[i] && v0[i] === v1[i] && v0[i] === 0.0)
    }
    if(steady) {
      for(var i=0; i<d; ++i) {
        result[i] = 0.0
      }
    } else {
      cubicHermite.derivative(x0, v0, x1, v1, (t-t0)/dt, result)
      for(var i=0; i<d; ++i) {
        result[i] /= dt
      }
    }
  }
  return result
}

proto.lastT = function() {
  var time = this._time
  return time[time.length-1]
}

proto.stable = function() {
  var velocity = this._velocity
  var ptr = velocity.length
  for(var i=this.dimension-1; i>=0; --i) {
    if(velocity[--ptr]) {
      return false
    }
  }
  return true
}

proto.jump = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t < t0 || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var ptr       = state.length-this.dimension
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  this._time.push(t0, t)
  for(var j=0; j<2; ++j) {
    for(var i=0; i<d; ++i) {
      state.push(state[ptr++])
      velocity.push(0)
    }
  }
  this._time.push(t)
  for(var i=d; i>0; --i) {
    state.push(clamp(lo[i-1], hi[i-1], arguments[i]))
    velocity.push(0)
  }
}

proto.push = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t < t0 || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var ptr       = state.length-this.dimension
  var dt        = t - t0
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  var sf        = (dt > 1e-6) ? 1/dt : 0
  this._time.push(t)
  for(var i=d; i>0; --i) {
    var xc = clamp(lo[i-1], hi[i-1], arguments[i])
    state.push(xc)
    velocity.push((xc - state[ptr++]) * sf)
  }
}

proto.set = function(t) {
  var d = this.dimension
  if(t < this.lastT() || arguments.length !== d+1) {
    return
  }
  var state     = this._state
  var velocity  = this._velocity
  var bounds    = this.bounds
  var lo        = bounds[0]
  var hi        = bounds[1]
  this._time.push(t)
  for(var i=d; i>0; --i) {
    state.push(clamp(lo[i-1], hi[i-1], arguments[i]))
    velocity.push(0)
  }
}

proto.move = function(t) {
  var t0 = this.lastT()
  var d  = this.dimension
  if(t <= t0 || arguments.length !== d+1) {
    return
  }
  var state    = this._state
  var velocity = this._velocity
  var statePtr = state.length - this.dimension
  var bounds   = this.bounds
  var lo       = bounds[0]
  var hi       = bounds[1]
  var dt       = t - t0
  var sf       = (dt > 1e-6) ? 1/dt : 0.0
  this._time.push(t)
  for(var i=d; i>0; --i) {
    var dx = arguments[i]
    state.push(clamp(lo[i-1], hi[i-1], state[statePtr++] + dx))
    velocity.push(dx * sf)
  }
}

proto.idle = function(t) {
  var t0 = this.lastT()
  if(t < t0) {
    return
  }
  var d        = this.dimension
  var state    = this._state
  var velocity = this._velocity
  var statePtr = state.length-d
  var bounds   = this.bounds
  var lo       = bounds[0]
  var hi       = bounds[1]
  var dt       = t - t0
  this._time.push(t)
  for(var i=d-1; i>=0; --i) {
    state.push(clamp(lo[i], hi[i], state[statePtr] + dt * velocity[statePtr]))
    velocity.push(0)
    statePtr += 1
  }
}

function getZero(d) {
  var result = new Array(d)
  for(var i=0; i<d; ++i) {
    result[i] = 0.0
  }
  return result
}

function createFilteredVector(initState, initVelocity, initTime) {
  switch(arguments.length) {
    case 0:
      return new FilteredVector([0], [0], 0)
    case 1:
      if(typeof initState === 'number') {
        var zero = getZero(initState)
        return new FilteredVector(zero, zero, 0)
      } else {
        return new FilteredVector(initState, getZero(initState.length), 0)
      }
    case 2:
      if(typeof initVelocity === 'number') {
        var zero = getZero(initState.length)
        return new FilteredVector(initState, zero, +initVelocity)
      } else {
        initTime = 0
      }
    case 3:
      if(initState.length !== initVelocity.length) {
        throw new Error('state and velocity lengths must match')
      }
      return new FilteredVector(initState, initVelocity, initTime)
  }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compileSearch(funcName, predicate, reversed, extraArgs, useNdarray, earlyOut) {
  var code = [
    "function ", funcName, "(a,l,h,", extraArgs.join(","),  "){",
earlyOut ? "" : "var i=", (reversed ? "l-1" : "h+1"),
";while(l<=h){\
var m=(l+h)>>>1,x=a", useNdarray ? ".get(m)" : "[m]"]
  if(earlyOut) {
    if(predicate.indexOf("c") < 0) {
      code.push(";if(x===y){return m}else if(x<=y){")
    } else {
      code.push(";var p=c(x,y);if(p===0){return m}else if(p<=0){")
    }
  } else {
    code.push(";if(", predicate, "){i=m;")
  }
  if(reversed) {
    code.push("l=m+1}else{h=m-1}")
  } else {
    code.push("h=m-1}else{l=m+1}")
  }
  code.push("}")
  if(earlyOut) {
    code.push("return -1};")
  } else {
    code.push("return i};")
  }
  return code.join("")
}

function compileBoundsSearch(predicate, reversed, suffix, earlyOut) {
  var result = new Function([
  compileSearch("A", "x" + predicate + "y", reversed, ["y"], false, earlyOut),
  compileSearch("B", "x" + predicate + "y", reversed, ["y"], true, earlyOut),
  compileSearch("P", "c(x,y)" + predicate + "0", reversed, ["y", "c"], false, earlyOut),
  compileSearch("Q", "c(x,y)" + predicate + "0", reversed, ["y", "c"], true, earlyOut),
"function dispatchBsearch", suffix, "(a,y,c,l,h){\
if(a.shape){\
if(typeof(c)==='function'){\
return Q(a,(l===undefined)?0:l|0,(h===undefined)?a.shape[0]-1:h|0,y,c)\
}else{\
return B(a,(c===undefined)?0:c|0,(l===undefined)?a.shape[0]-1:l|0,y)\
}}else{\
if(typeof(c)==='function'){\
return P(a,(l===undefined)?0:l|0,(h===undefined)?a.length-1:h|0,y,c)\
}else{\
return A(a,(c===undefined)?0:c|0,(l===undefined)?a.length-1:l|0,y)\
}}}\
return dispatchBsearch", suffix].join(""))
  return result()
}

module.exports = {
  ge: compileBoundsSearch(">=", false, "GE"),
  gt: compileBoundsSearch(">", false, "GT"),
  lt: compileBoundsSearch("<", true, "LT"),
  le: compileBoundsSearch("<=", true, "LE"),
  eq: compileBoundsSearch("-", true, "EQ", true)
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(18);

module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = create;

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = determinant;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.objectHash=e()}}(function(){return function e(t,n,r){function o(u,a){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!a&&f)return require(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){(function(r,o,i,u,a,f,s,c,l){"use strict";function d(e,t){return t=h(e,t),g(e,t)}function h(e,t){if(t=t||{},t.algorithm=t.algorithm||"sha1",t.encoding=t.encoding||"hex",t.excludeValues=!!t.excludeValues,t.algorithm=t.algorithm.toLowerCase(),t.encoding=t.encoding.toLowerCase(),t.ignoreUnknown=t.ignoreUnknown===!0,t.respectType=t.respectType!==!1,t.respectFunctionNames=t.respectFunctionNames!==!1,t.respectFunctionProperties=t.respectFunctionProperties!==!1,t.unorderedArrays=t.unorderedArrays===!0,t.unorderedSets=t.unorderedSets!==!1,t.unorderedObjects=t.unorderedObjects!==!1,t.replacer=t.replacer||void 0,t.excludeKeys=t.excludeKeys||void 0,"undefined"==typeof e)throw new Error("Object argument required.");for(var n=0;n<v.length;++n)v[n].toLowerCase()===t.algorithm.toLowerCase()&&(t.algorithm=v[n]);if(v.indexOf(t.algorithm)===-1)throw new Error('Algorithm "'+t.algorithm+'"  not supported. supported values: '+v.join(", "));if(m.indexOf(t.encoding)===-1&&"passthrough"!==t.algorithm)throw new Error('Encoding "'+t.encoding+'"  not supported. supported values: '+m.join(", "));return t}function p(e){if("function"!=typeof e)return!1;var t=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;return null!=t.exec(Function.prototype.toString.call(e))}function g(e,t){var n;n="passthrough"!==t.algorithm?b.createHash(t.algorithm):new w,"undefined"==typeof n.write&&(n.write=n.update,n.end=n.update);var r=y(t,n);if(r.dispatch(e),n.update||n.end(""),n.digest)return n.digest("buffer"===t.encoding?void 0:t.encoding);var o=n.read();return"buffer"===t.encoding?o:o.toString(t.encoding)}function y(e,t,n){n=n||[];var r=function(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")};return{dispatch:function(t){e.replacer&&(t=e.replacer(t));var n=typeof t;return null===t&&(n="null"),this["_"+n](t)},_object:function(t){var o=/\[object (.*)\]/i,u=Object.prototype.toString.call(t),a=o.exec(u);a=a?a[1]:"unknown:["+u+"]",a=a.toLowerCase();var f=null;if((f=n.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(n.push(t),"undefined"!=typeof i&&i.isBuffer&&i.isBuffer(t))return r("buffer:"),r(t);if("object"===a||"function"===a){var s=Object.keys(t);e.unorderedObjects&&(s=s.sort()),e.respectType===!1||p(t)||s.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(s=s.filter(function(t){return!e.excludeKeys(t)})),r("object:"+s.length+":");var c=this;return s.forEach(function(n){c.dispatch(n),r(":"),e.excludeValues||c.dispatch(t[n]),r(",")})}if(!this["_"+a]){if(e.ignoreUnknown)return r("["+a+"]");throw new Error('Unknown object type "'+a+'"')}this["_"+a](t)},_array:function(t,o){o="undefined"!=typeof o?o:e.unorderedArrays!==!1;var i=this;if(r("array:"+t.length+":"),!o||t.length<=1)return t.forEach(function(e){return i.dispatch(e)});var u=[],a=t.map(function(t){var r=new w,o=n.slice(),i=y(e,r,o);return i.dispatch(t),u=u.concat(o.slice(n.length)),r.read().toString()});return n=n.concat(u),a.sort(),this._array(a,!1)},_date:function(e){return r("date:"+e.toJSON())},_symbol:function(e){return r("symbol:"+e.toString())},_error:function(e){return r("error:"+e.toString())},_boolean:function(e){return r("bool:"+e.toString())},_string:function(e){r("string:"+e.length+":"),r(e.toString())},_function:function(t){r("fn:"),p(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return r("number:"+e.toString())},_xml:function(e){return r("xml:"+e.toString())},_null:function(){return r("Null")},_undefined:function(){return r("Undefined")},_regexp:function(e){return r("regex:"+e.toString())},_uint8array:function(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return r("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return r("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return r("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return r("url:"+e.toString(),"utf8")},_map:function(t){r("map:");var n=Array.from(t);return this._array(n,e.unorderedSets!==!1)},_set:function(t){r("set:");var n=Array.from(t);return this._array(n,e.unorderedSets!==!1)},_blob:function(){if(e.ignoreUnknown)return r("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return r("domwindow")},_process:function(){return r("process")},_timer:function(){return r("timer")},_pipe:function(){return r("pipe")},_tcp:function(){return r("tcp")},_udp:function(){return r("udp")},_tty:function(){return r("tty")},_statwatcher:function(){return r("statwatcher")},_securecontext:function(){return r("securecontext")},_connection:function(){return r("connection")},_zlib:function(){return r("zlib")},_context:function(){return r("context")},_nodescript:function(){return r("nodescript")},_httpparser:function(){return r("httpparser")},_dataview:function(){return r("dataview")},_signal:function(){return r("signal")},_fsevent:function(){return r("fsevent")},_tlswrap:function(){return r("tlswrap")}}}function w(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}var b=e("crypto");n=t.exports=d,n.sha1=function(e){return d(e)},n.keys=function(e){return d(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},n.MD5=function(e){return d(e,{algorithm:"md5",encoding:"hex"})},n.keysMD5=function(e){return d(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var v=b.getHashes?b.getHashes().slice():["sha1","md5"];v.push("passthrough");var m=["buffer","hex","binary","base64"];n.writeToStream=function(e,t,n){return"undefined"==typeof n&&(n=t,t={}),t=h(e,t),y(t,n).dispatch(e)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_e8180ef5.js","/")},{buffer:3,crypto:5,lYpoI2:10}],2:[function(e,t,n){(function(e,t,r,o,i,u,a,f,s){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===l?62:t===u||t===d?63:t<a?-1:t<a+10?t-a+26+26:t<s+26?t-s:t<f+26?t-f+26:void 0}function n(e){function n(e){s[l++]=e}var r,i,u,a,f,s;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=e.length;f="="===e.charAt(c-2)?2:"="===e.charAt(c-1)?1:0,s=new o(3*e.length/4-f),u=f>0?e.length-4:e.length;var l=0;for(r=0,i=0;r<u;r+=4,i+=3)a=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&a)>>16),n((65280&a)>>8),n(255&a);return 2===f?(a=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&a)):1===f&&(a=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(a>>8&255),n(255&a)),s}function r(e){function t(e){return c.charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,i,u=e.length%3,a="";for(r=0,i=e.length-u;r<i;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],a+=n(o);switch(u){case 1:o=e[e.length-1],a+=t(o>>2),a+=t(o<<4&63),a+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],a+=t(o>>10),a+=t(o>>4&63),a+=t(o<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),u="/".charCodeAt(0),a="0".charCodeAt(0),f="a".charCodeAt(0),s="A".charCodeAt(0),l="-".charCodeAt(0),d="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:10}],3:[function(e,t,n){(function(t,r,o,i,u,a,f,s,c){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=N(e);e.length%4!==0;)e+="=";var i;if("number"===r)i=F(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=F(e.length)}var u;o._useTypedArrays?u=o._augment(new Uint8Array(i)):(u=this,u.length=i,u._isBuffer=!0);var a;if(o._useTypedArrays&&"number"==typeof e.byteLength)u._set(e);else if(O(e))for(a=0;a<i;a++)o.isBuffer(e)?u[a]=e.readUInt8(a):u[a]=e[a];else if("string"===r)u.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(a=0;a<i;a++)u[a]=0;return u}function l(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var u=t.length;$(u%2===0,"Invalid hex string"),r>u/2&&(r=u/2);for(var a=0;a<r;a++){var f=parseInt(t.substr(2*a,2),16);$(!isNaN(f),"Invalid hex string"),e[n+a]=f}return o._charsWritten=2*a,a}function d(e,t,n,r){var i=o._charsWritten=W(V(t),e,n,r);return i}function h(e,t,n,r){var i=o._charsWritten=W(q(t),e,n,r);return i}function p(e,t,n,r){return h(e,t,n,r)}function g(e,t,n,r){var i=o._charsWritten=W(R(t),e,n,r);return i}function y(e,t,n,r){var i=o._charsWritten=W(P(t),e,n,r);return i}function w(e,t,n){return 0===t&&n===e.length?G.fromByteArray(e):G.fromByteArray(e.slice(t,n))}function b(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=J(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+J(o)}function v(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function m(e,t,n){return v(e,t,n)}function _(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;i++)o+=H(e[i]);return o}function E(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function I(e,t,n,r){r||($("boolean"==typeof n,"missing or invalid endian"),$(void 0!==t&&null!==t,"missing offset"),$(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],t+1<o&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<o&&(i|=e[t+1])),i}}function A(e,t,n,r){r||($("boolean"==typeof n,"missing or invalid endian"),$(void 0!==t&&null!==t,"missing offset"),$(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(t+2<o&&(i=e[t+2]<<16),t+1<o&&(i|=e[t+1]<<8),i|=e[t],t+3<o&&(i+=e[t+3]<<24>>>0)):(t+1<o&&(i=e[t+1]<<16),t+2<o&&(i|=e[t+2]<<8),t+3<o&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function B(e,t,n,r){r||($("boolean"==typeof n,"missing or invalid endian"),$(void 0!==t&&null!==t,"missing offset"),$(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=I(e,t,n,!0),u=32768&i;return u?(65535-i+1)*-1:i}}function L(e,t,n,r){r||($("boolean"==typeof n,"missing or invalid endian"),$(void 0!==t&&null!==t,"missing offset"),$(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=A(e,t,n,!0),u=2147483648&i;return u?(4294967295-i+1)*-1:i}}function U(e,t,n,r){return r||($("boolean"==typeof n,"missing or invalid endian"),$(t+3<e.length,"Trying to read beyond buffer length")),Q.read(e,t,n,23,4)}function x(e,t,n,r){return r||($("boolean"==typeof n,"missing or invalid endian"),$(t+7<e.length,"Trying to read beyond buffer length")),Q.read(e,t,n,52,8)}function S(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+1<e.length,"trying to write beyond buffer length"),K(t,65535));var i=e.length;if(!(n>=i))for(var u=0,a=Math.min(i-n,2);u<a;u++)e[n+u]=(t&255<<8*(r?u:1-u))>>>8*(r?u:1-u)}function j(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+3<e.length,"trying to write beyond buffer length"),K(t,4294967295));var i=e.length;if(!(n>=i))for(var u=0,a=Math.min(i-n,4);u<a;u++)e[n+u]=t>>>8*(r?u:3-u)&255}function C(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+1<e.length,"Trying to write beyond buffer length"),z(t,32767,-32768));var i=e.length;n>=i||(t>=0?S(e,t,n,r,o):S(e,65535+t+1,n,r,o))}function k(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+3<e.length,"Trying to write beyond buffer length"),z(t,2147483647,-2147483648));var i=e.length;n>=i||(t>=0?j(e,t,n,r,o):j(e,4294967295+t+1,n,r,o))}function T(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+3<e.length,"Trying to write beyond buffer length"),X(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||Q.write(e,t,n,r,23,4)}function M(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+7<e.length,"Trying to write beyond buffer length"),X(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||Q.write(e,t,n,r,52,8)}function N(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Y(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function F(e){return e=~~Math.ceil(+e),e<0?0:e}function D(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function O(e){return D(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function H(e){return e<16?"0"+e.toString(16):e.toString(16)}function V(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),u=0;u<i.length;u++)t.push(parseInt(i[u],16))}}return t}function q(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function P(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function R(e){return G.toByteArray(e)}function W(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function J(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function K(e,t){$("number"==typeof e,"cannot write a non-number as a number"),$(e>=0,"specified a negative value for writing an unsigned value"),$(e<=t,"value is larger than maximum value for type"),$(Math.floor(e)===e,"value has a fractional component")}function z(e,t,n){$("number"==typeof e,"cannot write a non-number as a number"),$(e<=t,"value larger than maximum allowed value"),$(e>=n,"value smaller than minimum allowed value"),$(Math.floor(e)===e,"value has a fractional component")}function X(e,t,n){$("number"==typeof e,"cannot write a non-number as a number"),$(e<=t,"value larger than maximum allowed value"),$(e>=n,"value smaller than minimum allowed value")}function $(e,t){if(!e)throw new Error(t||"Failed assertion")}var G=e("base64-js"),Q=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(n){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=V(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=R(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if($(D(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var u=e[n];u.copy(r,i),i+=u.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n),n>i&&(n=i)):n=i,r=String(r||"utf8").toLowerCase();var u;switch(r){case"hex":u=l(this,e,t,n);break;case"utf8":case"utf-8":u=d(this,e,t,n);break;case"ascii":u=h(this,e,t,n);break;case"binary":u=p(this,e,t,n);break;case"base64":u=g(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":u=y(this,e,t,n);break;default:throw new Error("Unknown encoding")}return u},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=r.length,n===t)return"";var o;switch(e){case"hex":o=_(r,t,n);break;case"utf8":case"utf-8":o=b(r,t,n);break;case"ascii":o=v(r,t,n);break;case"binary":o=m(r,t,n);break;case"base64":o=w(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=E(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){$(r>=n,"sourceEnd < sourceStart"),$(t>=0&&t<e.length,"targetStart out of bounds"),$(n>=0&&n<i.length,"sourceStart out of bounds"),$(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var u=r-n;if(u<100||!o._useTypedArrays)for(var a=0;a<u;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+u),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=Y(e,n,0),t=Y(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,(void 0),(!0)),u=0;u<r;u++)i[u]=this[u+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||($(void 0!==e&&null!==e,"missing offset"),$(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return I(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return I(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return A(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return A(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||($(void 0!==e&&null!==e,"missing offset"),$(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?(255-this[e]+1)*-1:this[e]}},o.prototype.readInt16LE=function(e,t){return B(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return B(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return L(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return L(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return U(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return U(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return x(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return x(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||($(void 0!==e&&null!==e,"missing value"),$(void 0!==t&&null!==t,"missing offset"),$(t<this.length,"trying to write beyond buffer length"),K(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){S(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){S(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){j(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){j(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||($(void 0!==e&&null!==e,"missing value"),$(void 0!==t&&null!==t,"missing offset"),$(t<this.length,"Trying to write beyond buffer length"),z(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){C(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){C(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){k(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){k(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){T(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){T(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),$("number"==typeof e&&!isNaN(e),"value is not a number"),$(n>=t,"end < start"),n!==t&&0!==this.length){$(t>=0&&t<this.length,"start out of bounds"),$(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=H(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var Z=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=Z.get,e.set=Z.set,e.write=Z.write,e.toString=Z.toString,e.toLocaleString=Z.toString,e.toJSON=Z.toJSON,e.copy=Z.copy,e.slice=Z.slice,e.readUInt8=Z.readUInt8,e.readUInt16LE=Z.readUInt16LE,e.readUInt16BE=Z.readUInt16BE,e.readUInt32LE=Z.readUInt32LE,e.readUInt32BE=Z.readUInt32BE,e.readInt8=Z.readInt8,e.readInt16LE=Z.readInt16LE,e.readInt16BE=Z.readInt16BE,e.readInt32LE=Z.readInt32LE,e.readInt32BE=Z.readInt32BE,e.readFloatLE=Z.readFloatLE,e.readFloatBE=Z.readFloatBE,e.readDoubleLE=Z.readDoubleLE,e.readDoubleBE=Z.readDoubleBE,e.writeUInt8=Z.writeUInt8,e.writeUInt16LE=Z.writeUInt16LE,e.writeUInt16BE=Z.writeUInt16BE,e.writeUInt32LE=Z.writeUInt32LE,e.writeUInt32BE=Z.writeUInt32BE,e.writeInt8=Z.writeInt8,e.writeInt16LE=Z.writeInt16LE,e.writeInt16BE=Z.writeInt16BE,e.writeInt32LE=Z.writeInt32LE,e.writeInt32BE=Z.writeInt32BE,e.writeFloatLE=Z.writeFloatLE,e.writeFloatBE=Z.writeFloatBE,e.writeDoubleLE=Z.writeDoubleLE,e.writeDoubleBE=Z.writeDoubleBE,e.fill=Z.fill,e.inspect=Z.inspect,e.toArrayBuffer=Z.toArrayBuffer,e}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:11,lYpoI2:10}],4:[function(e,t,n){(function(n,r,o,i,u,a,f,s,c){function l(e,t){if(e.length%p!==0){var n=e.length+(p-e.length%p);e=o.concat([e,g],n)}for(var r=[],i=t?e.readInt32BE:e.readInt32LE,u=0;u<e.length;u+=p)r.push(i.call(e,u));return r}function d(e,t,n){for(var r=new o(t),i=n?r.writeInt32BE:r.writeInt32LE,u=0;u<e.length;u++)i.call(r,e[u],4*u,!0);return r}function h(e,t,n,r){o.isBuffer(e)||(e=new o(e));var i=t(l(e,r),e.length*y);return d(i,n,r)}var o=e("buffer").Buffer,p=4,g=new o(p);g.fill(0);var y=8;t.exports={hash:h}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],5:[function(e,t,n){(function(t,r,o,i,u,a,f,s,c){function l(e,t,n){o.isBuffer(t)||(t=new o(t)),o.isBuffer(n)||(n=new o(n)),t.length>m?t=e(t):t.length<m&&(t=o.concat([t,_],m));for(var r=new o(m),i=new o(m),u=0;u<m;u++)r[u]=54^t[u],i[u]=92^t[u];var a=e(o.concat([r,n]));return e(o.concat([i,a]))}function d(e,t){e=e||"sha1";var n=v[e],r=[],i=0;return n||h("algorithm:",e,"is not yet supported"),{update:function(e){return o.isBuffer(e)||(e=new o(e)),r.push(e),i+=e.length,this},digest:function(e){var i=o.concat(r),u=t?l(n,t,i):n(i);return r=null,e?u.toString(e):u}}}function h(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}function p(e,t){for(var n in e)t(e[n],n)}var o=e("buffer").Buffer,g=e("./sha"),y=e("./sha256"),w=e("./rng"),b=e("./md5"),v={sha1:g,sha256:y,md5:b},m=64,_=new o(m);_.fill(0),n.createHash=function(e){return d(e)},n.createHmac=function(e,t){return d(e,t)},n.randomBytes=function(e,t){if(!t||!t.call)return new o(w(e));try{t.call(this,void 0,new o(w(e)))}catch(n){t(n)}},p(["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],function(e){n[e]=function(){h("sorry,",e,"is not implemented yet")}})}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:10}],6:[function(e,t,n){(function(n,r,o,i,u,a,f,s,c){function l(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var a=n,f=r,s=o,c=i;n=h(n,r,o,i,e[u+0],7,-680876936),i=h(i,n,r,o,e[u+1],12,-389564586),o=h(o,i,n,r,e[u+2],17,606105819),r=h(r,o,i,n,e[u+3],22,-1044525330),n=h(n,r,o,i,e[u+4],7,-176418897),i=h(i,n,r,o,e[u+5],12,1200080426),o=h(o,i,n,r,e[u+6],17,-1473231341),r=h(r,o,i,n,e[u+7],22,-45705983),n=h(n,r,o,i,e[u+8],7,1770035416),i=h(i,n,r,o,e[u+9],12,-1958414417),o=h(o,i,n,r,e[u+10],17,-42063),r=h(r,o,i,n,e[u+11],22,-1990404162),n=h(n,r,o,i,e[u+12],7,1804603682),i=h(i,n,r,o,e[u+13],12,-40341101),o=h(o,i,n,r,e[u+14],17,-1502002290),r=h(r,o,i,n,e[u+15],22,1236535329),n=p(n,r,o,i,e[u+1],5,-165796510),i=p(i,n,r,o,e[u+6],9,-1069501632),o=p(o,i,n,r,e[u+11],14,643717713),r=p(r,o,i,n,e[u+0],20,-373897302),n=p(n,r,o,i,e[u+5],5,-701558691),i=p(i,n,r,o,e[u+10],9,38016083),o=p(o,i,n,r,e[u+15],14,-660478335),r=p(r,o,i,n,e[u+4],20,-405537848),n=p(n,r,o,i,e[u+9],5,568446438),i=p(i,n,r,o,e[u+14],9,-1019803690),o=p(o,i,n,r,e[u+3],14,-187363961),r=p(r,o,i,n,e[u+8],20,1163531501),n=p(n,r,o,i,e[u+13],5,-1444681467),i=p(i,n,r,o,e[u+2],9,-51403784),o=p(o,i,n,r,e[u+7],14,1735328473),r=p(r,o,i,n,e[u+12],20,-1926607734),n=g(n,r,o,i,e[u+5],4,-378558),i=g(i,n,r,o,e[u+8],11,-2022574463),o=g(o,i,n,r,e[u+11],16,1839030562),r=g(r,o,i,n,e[u+14],23,-35309556),n=g(n,r,o,i,e[u+1],4,-1530992060),i=g(i,n,r,o,e[u+4],11,1272893353),o=g(o,i,n,r,e[u+7],16,-155497632),r=g(r,o,i,n,e[u+10],23,-1094730640),n=g(n,r,o,i,e[u+13],4,681279174),i=g(i,n,r,o,e[u+0],11,-358537222),o=g(o,i,n,r,e[u+3],16,-722521979),r=g(r,o,i,n,e[u+6],23,76029189),n=g(n,r,o,i,e[u+9],4,-640364487),i=g(i,n,r,o,e[u+12],11,-421815835),o=g(o,i,n,r,e[u+15],16,530742520),r=g(r,o,i,n,e[u+2],23,-995338651),n=y(n,r,o,i,e[u+0],6,-198630844),i=y(i,n,r,o,e[u+7],10,1126891415),o=y(o,i,n,r,e[u+14],15,-1416354905),r=y(r,o,i,n,e[u+5],21,-57434055),n=y(n,r,o,i,e[u+12],6,1700485571),i=y(i,n,r,o,e[u+3],10,-1894986606),o=y(o,i,n,r,e[u+10],15,-1051523),r=y(r,o,i,n,e[u+1],21,-2054922799),n=y(n,r,o,i,e[u+8],6,1873313359),i=y(i,n,r,o,e[u+15],10,-30611744),o=y(o,i,n,r,e[u+6],15,-1560198380),r=y(r,o,i,n,e[u+13],21,1309151649),n=y(n,r,o,i,e[u+4],6,-145523070),i=y(i,n,r,o,e[u+11],10,-1120210379),o=y(o,i,n,r,e[u+2],15,718787259),r=y(r,o,i,n,e[u+9],21,-343485551),n=w(n,a),r=w(r,f),o=w(o,s),i=w(i,c)}return Array(n,r,o,i)}function d(e,t,n,r,o,i){return w(b(w(w(t,e),w(r,i)),o),n)}function h(e,t,n,r,o,i,u){return d(t&n|~t&r,e,t,o,i,u)}function p(e,t,n,r,o,i,u){return d(t&r|n&~r,e,t,o,i,u)}function g(e,t,n,r,o,i,u){return d(t^n^r,e,t,o,i,u)}function y(e,t,n,r,o,i,u){return d(n^(t|~r),e,t,o,i,u)}function w(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function b(e,t){return e<<t|e>>>32-t}var v=e("./helpers");t.exports=function(e){return v.hash(e,l,16)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],7:[function(e,t,n){(function(e,n,r,o,i,u,a,f,s){!function(){var e,n,r=this;e=function(e){for(var t,t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n},r.crypto&&crypto.getRandomValues&&(n=function(e){var t=new Uint8Array(e);return crypto.getRandomValues(t),t}),t.exports=n||e}()}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],8:[function(e,t,n){(function(n,r,o,i,u,a,f,s,c){function l(e,t){e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var n=Array(80),r=1732584193,o=-271733879,i=-1732584194,u=271733878,a=-1009589776,f=0;f<e.length;f+=16){for(var s=r,c=o,l=i,y=u,w=a,b=0;b<80;b++){b<16?n[b]=e[f+b]:n[b]=g(n[b-3]^n[b-8]^n[b-14]^n[b-16],1);var v=p(p(g(r,5),d(b,o,i,u)),p(p(a,n[b]),h(b)));a=u,u=i,i=g(o,30),o=r,r=v}r=p(r,s),o=p(o,c),i=p(i,l),u=p(u,y),a=p(a,w)}return Array(r,o,i,u,a)}function d(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function h(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function p(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function g(e,t){return e<<t|e>>>32-t}var y=e("./helpers");t.exports=function(e){return y.hash(e,l,20,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],9:[function(e,t,n){(function(n,r,o,i,u,a,f,s,c){var l=e("./helpers"),d=function(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n},h=function(e,t){return e>>>t|e<<32-t},p=function(e,t){return e>>>t},g=function(e,t,n){return e&t^~e&n},y=function(e,t,n){return e&t^e&n^t&n},w=function(e){return h(e,2)^h(e,13)^h(e,22);
},b=function(e){return h(e,6)^h(e,11)^h(e,25)},v=function(e){return h(e,7)^h(e,18)^p(e,3)},m=function(e){return h(e,17)^h(e,19)^p(e,10)},_=function(e,t){var n,r,o,i,u,a,f,s,c,l,h,p,_=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),E=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),I=new Array(64);e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var c=0;c<e.length;c+=16){n=E[0],r=E[1],o=E[2],i=E[3],u=E[4],a=E[5],f=E[6],s=E[7];for(var l=0;l<64;l++)l<16?I[l]=e[l+c]:I[l]=d(d(d(m(I[l-2]),I[l-7]),v(I[l-15])),I[l-16]),h=d(d(d(d(s,b(u)),g(u,a,f)),_[l]),I[l]),p=d(w(n),y(n,r,o)),s=f,f=a,a=u,u=d(i,h),i=o,o=r,r=n,n=d(h,p);E[0]=d(n,E[0]),E[1]=d(r,E[1]),E[2]=d(o,E[2]),E[3]=d(i,E[3]),E[4]=d(u,E[4]),E[5]=d(a,E[5]),E[6]=d(f,E[6]),E[7]=d(s,E[7])}return E};t.exports=function(e){return l.hash(e,_,32,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],10:[function(e,t,n){(function(e,n,r,o,i,u,a,f,s){function c(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=c,e.addListener=c,e.once=c,e.off=c,e.removeListener=c,e.removeAllListeners=c,e.emit=c,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:10}],11:[function(e,t,n){(function(e,t,r,o,i,u,a,f,s){n.read=function(e,t,n,r,o){var i,u,a=8*o-r-1,f=(1<<a)-1,s=f>>1,c=-7,l=n?o-1:0,d=n?-1:1,h=e[t+l];for(l+=d,i=h&(1<<-c)-1,h>>=-c,c+=a;c>0;i=256*i+e[t+l],l+=d,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=r;c>0;u=256*u+e[t+l],l+=d,c-=8);if(0===i)i=1-s;else{if(i===f)return u?NaN:(h?-1:1)*(1/0);u+=Math.pow(2,r),i-=s}return(h?-1:1)*u*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var u,a,f,s=8*i-o-1,c=(1<<s)-1,l=c>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,u=c):(u=Math.floor(Math.log(t)/Math.LN2),t*(f=Math.pow(2,-u))<1&&(u--,f*=2),t+=u+l>=1?d/f:d*Math.pow(2,1-l),t*f>=2&&(u++,f/=2),u+l>=c?(a=0,u=c):u+l>=1?(a=(t*f-1)*Math.pow(2,o),u+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,o),u=0));o>=8;e[n+h]=255&a,h+=p,a/=256,o-=8);for(u=u<<o|a,s+=o;s>0;e[n+h]=255&u,h+=p,u/=256,s-=8);e[n+h-p]|=128*g}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/ieee754/index.js","/node_modules/ieee754")},{buffer:3,lYpoI2:10}]},{},[1])(1)});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec4 fs_Col;\nin vec4 fs_Pos;\n\nout vec4 out_Col;\n\nvoid main()\n{\n    float dist = 1.0 - (length(fs_Pos.xyz) * 2.0);\n    out_Col = vec4(dist) * fs_Col;\n    out_Col = fs_Col;\n}\n"

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stats_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stats_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stats_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dat_gui__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dat_gui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dat_gui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geometry_Square__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_ScreenQuad__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geometry_LongCube__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rendering_gl_OpenGLRenderer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Camera__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__globals__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lsystem_LSystem__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geometry_Mesh__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TerrainInfo__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geometry_Plane__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lsystem_RoadLSystem__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__SystemInfoObject__ = __webpack_require__(82);
















var hash = __webpack_require__(23);
let square;
let screenQuad;
let time = 0.0;
let lsystem = new __WEBPACK_IMPORTED_MODULE_10__lsystem_LSystem__["a" /* default */]();
let longCube;
let longCube2;
let branchCylinder;
let skullMesh;
let plane;
let scale = 100;
let trInfo;
let roadLSystem;
let sysInfo = new __WEBPACK_IMPORTED_MODULE_15__SystemInfoObject__["a" /* default */]();
function loadScene() {
    square = new __WEBPACK_IMPORTED_MODULE_3__geometry_Square__["a" /* default */]();
    square.create();
    screenQuad = new __WEBPACK_IMPORTED_MODULE_4__geometry_ScreenQuad__["a" /* default */]();
    screenQuad.create();
    longCube = new __WEBPACK_IMPORTED_MODULE_5__geometry_LongCube__["a" /* default */]();
    longCube.create();
    longCube2 = new __WEBPACK_IMPORTED_MODULE_5__geometry_LongCube__["a" /* default */]();
    longCube2.create();
    branchCylinder = new __WEBPACK_IMPORTED_MODULE_11__geometry_Mesh__["a" /* default */](__WEBPACK_IMPORTED_MODULE_8__globals__["a" /* cylinderString */], __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(0, 0, 0));
    branchCylinder.create();
    plane = new __WEBPACK_IMPORTED_MODULE_13__geometry_Plane__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(0, 0, 0), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(scale, scale), 9, trInfo);
    plane.create();
    plane.setNumInstances(1);
    guiChangeCallback(); // lsystem compute here
    updateBuffer();
}
function updateBuffer() {
    let translates = new Float32Array(roadLSystem.roadPosArray);
    let rotQuats = new Float32Array(roadLSystem.roadRotArray);
    let roadLengths = new Float32Array(roadLSystem.roadLenArray);
    let roadWidths = new Float32Array(roadLSystem.roadWidthArray);
    longCube.setInstanceVBOs(translates, rotQuats, roadLengths, roadWidths);
    // console.log("translates: " + translates.length);
    // console.log("rotQuats: " + rotQuats.length);
    // console.log("roadLengths: " + roadLengths.length);
    // console.log("roadWidths: " + roadWidths.length);
    longCube.setNumInstances(roadLengths.length);
    let intxnTranslates = new Float32Array(roadLSystem.intxnPosArray);
    let intxnRotQuats = new Float32Array(roadLSystem.intxnRotArray);
    // use the depth position for length
    let intxnLengths = new Float32Array(roadLSystem.intxnLenArray);
    let intxnWidths = new Float32Array(roadLSystem.intxnWidthArray);
    longCube2.setInstanceVBOs(intxnTranslates, intxnRotQuats, intxnLengths, intxnWidths);
    // console.log("intxnLengths: " + intxnLengths.length);  
    longCube2.setNumInstances(intxnLengths.length);
}
function writeGuiInfo() {
    console.log("controls: " + controls['block max x size']);
    roadLSystem.maxXLen = controls['block max x size'];
    roadLSystem.maxZLen = controls['block max z size'];
    sysInfo.globalSeed = controls['seed'];
    __WEBPACK_IMPORTED_MODULE_12__TerrainInfo__["a" /* default */].heightThreshold = controls['amount of sea'];
}
function guiChangeCallback() {
    console.log("gui changed!");
    writeGuiInfo();
    trInfo.compute();
    // TODO(zichuanyu) may have more elegant ways?
    plane.create();
    // TODO(zichuanyu) change to road l system
    roadLSystem.compute();
    // TODO(zichuanyu) update this buffer function
    updateBuffer();
}
const controls = {
    'seed': 'se',
    'block max x size': 6,
    'block max z size': 3,
    'amount of sea': 0.35,
    'debug view': 'non_debug',
};
function main() {
    // Add controls to the gui
    const gui = new __WEBPACK_IMPORTED_MODULE_2_dat_gui__["GUI"]();
    gui.add(controls, 'seed', 'seed').onFinishChange(guiChangeCallback);
    gui.add(controls, 'block max x size', 3, 10).step(0.05).onFinishChange(guiChangeCallback);
    gui.add(controls, 'block max z size', 3, 10).step(0.05).onFinishChange(guiChangeCallback);
    gui.add(controls, 'amount of sea', 0, 1).step(0.01).onFinishChange(guiChangeCallback);
    gui.add(controls, 'debug view', ['non_debug', 'terrain_height', 'population', 'ground_sea']);
    trInfo = new __WEBPACK_IMPORTED_MODULE_12__TerrainInfo__["a" /* default */](sysInfo);
    roadLSystem = new __WEBPACK_IMPORTED_MODULE_14__lsystem_RoadLSystem__["a" /* default */](sysInfo, trInfo);
    writeGuiInfo();
    roadLSystem.compute();
    // Initial display for framerate
    const stats = __WEBPACK_IMPORTED_MODULE_1_stats_js__();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    // get canvas and webgl context
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
        alert('WebGL 2 not supported!');
    }
    // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
    // Later, we can import `gl` from `globals.ts` to access it
    Object(__WEBPACK_IMPORTED_MODULE_8__globals__["c" /* setGL */])(gl);
    // Initial call to load scene
    loadScene();
    const camera = new __WEBPACK_IMPORTED_MODULE_7__Camera__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(10, 0, 10), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(0, 0, 0));
    const renderer = new __WEBPACK_IMPORTED_MODULE_6__rendering_gl_OpenGLRenderer__["a" /* default */](canvas);
    renderer.setClearColor(0.2, 0.2, 0.2, 1);
    // gl.enable(gl.BLEND);
    // gl.blendFunc(gl.ONE, gl.ONE); // Additive blending
    // gl.enable(gl.CULL_FACE);
    // gl.cullFace(gl.BACK);
    gl.enable(gl.DEPTH_TEST);
    const instancedShader = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(83)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(24)),
    ]);
    const instancedIntxnShader = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(84)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(24)),
    ]);
    const flat = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(85)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(86)),
    ]);
    const lambert = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(87)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(88)),
    ]);
    const showTerrainHeightShader = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(89)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(7)),
    ]);
    const showGroundSeaShader = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(90)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(7)),
    ]);
    const showPopulationShader = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(91)),
        new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(7)),
    ]);
    // This function will be called every frame
    function tick() {
        let showRoad = false;
        let terrainShader;
        if (controls['debug view'] == 'non_debug') {
            terrainShader = showGroundSeaShader;
            showRoad = true;
        }
        else if (controls['debug view'] == 'terrain_height') {
            terrainShader = showTerrainHeightShader;
        }
        else if (controls['debug view'] == 'population') {
            terrainShader = showPopulationShader;
        }
        else if (controls['debug view'] == 'ground_sea') {
            terrainShader = showGroundSeaShader;
        }
        camera.update();
        // console.log(camera.position);
        // console.log(camera.forward);
        stats.begin();
        lambert.setTime(time);
        instancedShader.setTime(time);
        flat.setTime(time++);
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        renderer.clear();
        renderer.render(camera, flat, [screenQuad]);
        renderer.render(camera, terrainShader, [
            plane,
        ]);
        if (showRoad) {
            // road
            renderer.render(camera, instancedShader, [
                longCube,
            ]);
            renderer.render(camera, instancedIntxnShader, [
                longCube2,
            ]);
        }
        stats.end();
        // Tell the browser to call `tick` again whenever it renders a new frame
        requestAnimationFrame(tick);
    }
    window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.setAspectRatio(window.innerWidth / window.innerHeight);
        camera.updateProjectionMatrix();
        flat.setDimensions(window.innerWidth, window.innerHeight);
        // console.log(window.innerWidth);
        // console.log(window.innerHeight);
        // console.log(window.innerHeight / window.innerWidth);
    }, false);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.setAspectRatio(window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();
    flat.setDimensions(window.innerWidth, window.innerHeight);
    // Start the render loop
    tick();
}
main();


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export LDU */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export mul */
/* unused harmony export sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);


/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }
  out[0] = 1;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];

  // Calculate the determinant
  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat2.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export invert */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export translate */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromTranslation */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export mul */
/* unused harmony export sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);


/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }
  out[0] = 1;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];

  var det = aa * ad - ab * ac;
  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
var sub = subtract;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export fromValues */
/* unused harmony export fromRotationTranslationValues */
/* unused harmony export fromRotationTranslation */
/* unused harmony export fromTranslation */
/* unused harmony export fromRotation */
/* unused harmony export fromMat4 */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export set */
/* unused harmony export getReal */
/* unused harmony export getDual */
/* unused harmony export setReal */
/* unused harmony export setDual */
/* unused harmony export getTranslation */
/* unused harmony export translate */
/* unused harmony export rotateX */
/* unused harmony export rotateY */
/* unused harmony export rotateZ */
/* unused harmony export rotateByQuatAppend */
/* unused harmony export rotateByQuatPrepend */
/* unused harmony export rotateAroundAxis */
/* unused harmony export add */
/* unused harmony export multiply */
/* unused harmony export mul */
/* unused harmony export scale */
/* unused harmony export dot */
/* unused harmony export lerp */
/* unused harmony export invert */
/* unused harmony export conjugate */
/* unused harmony export length */
/* unused harmony export len */
/* unused harmony export squaredLength */
/* unused harmony export sqrLen */
/* unused harmony export normalize */
/* unused harmony export str */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quat_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mat4_js__ = __webpack_require__(9);




/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }
  dq[3] = 1;
  return dq;
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
function clone(a) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}

/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}

/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}

/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
function fromMat4(out, a) {
  //TODO Optimize this
  var outer = __WEBPACK_IMPORTED_MODULE_1__quat_js__["create"]();
  __WEBPACK_IMPORTED_MODULE_2__mat4_js__["getRotation"](outer, a);
  var t = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  __WEBPACK_IMPORTED_MODULE_2__mat4_js__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;

  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}

/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */
var getReal = __WEBPACK_IMPORTED_MODULE_1__quat_js__["copy"];

/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */
function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}

/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */
var setReal = __WEBPACK_IMPORTED_MODULE_1__quat_js__["copy"];

/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */
function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["rotateX"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["rotateY"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["rotateZ"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];

  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];

  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return copy(out, a);
  }
  var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);

  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;

  return out;
}

/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}

/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */
function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}

/**
 * Alias for {@link quat2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}

/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = __WEBPACK_IMPORTED_MODULE_1__quat_js__["dot"];

/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */
function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;

  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;

  return out;
}

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}

/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
var length = __WEBPACK_IMPORTED_MODULE_1__quat_js__["length"];

/**
 * Alias for {@link quat2.length}
 * @function
 */
var len = length;

/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = __WEBPACK_IMPORTED_MODULE_1__quat_js__["squaredLength"];

/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
function normalize(out, a) {
  var magnitude = squaredLength(a);
  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);

    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;

    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];

    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;

    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;

    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }
  return out;
}

/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(1);


/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  if (__WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */
function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c);

  //perform rotation and translate to correct position
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];

  return out;
}

/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];

  var len1 = x1 * x1 + y1 * y1;
  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;
  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec2.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec2.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Stats=t()}(this,function(){"use strict";var c=function(){var n=0,l=document.createElement("div");function e(e){return l.appendChild(e.dom),e}function t(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),t(++n%l.children.length)},!1);var i=(performance||Date).now(),a=i,o=0,f=e(new c.Panel("FPS","#0ff","#002")),r=e(new c.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new c.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:l,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(r.update(e-i,200),a+1e3<=e&&(f.update(1e3*o/(e-a),100),a=e,o=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:l,setMode:t}};return c.Panel=function(n,l,i){var a=1/0,o=0,f=Math.round,r=f(window.devicePixelRatio||1),d=80*r,e=48*r,c=3*r,p=2*r,u=3*r,s=15*r,m=74*r,h=30*r,y=document.createElement("canvas");y.width=d,y.height=e,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,d,e),v.fillStyle=l,v.fillText(n,c,p),v.fillRect(u,s,m,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u,s,m,h),{dom:y,update:function(e,t){a=Math.min(a,e),o=Math.max(o,e),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,d,s),v.fillStyle=l,v.fillText(f(e)+" "+n+" ("+f(a)+"-"+f(o)+")",c,p),v.drawImage(y,u+r,s,m-r,h,u,s,m-r,h),v.fillRect(u+m-r,s,r,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u+m-r,s,r,f((1-e/t)*h))}}},c});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32)
module.exports.color = __webpack_require__(33)

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.gui = dat.gui || {};

/** @namespace */
dat.utils = dat.utils || {};

/** @namespace */
dat.controllers = dat.controllers || {};

/** @namespace */
dat.dom = dat.dom || {};

/** @namespace */
dat.color = dat.color || {};

dat.utils.css = (function () {
  return {
    load: function (url, doc) {
      doc = doc || document;
      var link = doc.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      doc.getElementsByTagName('head')[0].appendChild(link);
    },
    inject: function(css, doc) {
      doc = doc || document;
      var injected = document.createElement('style');
      injected.type = 'text/css';
      injected.innerHTML = css;
      doc.getElementsByTagName('head')[0].appendChild(injected);
    }
  }
})();


dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.controllers.Controller = (function (common) {

  /**
   * @class An "abstract" class that represents a given property of an object.
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var Controller = function(object, property) {

    this.initialValue = object[property];

    /**
     * Those who extend this class will put their DOM elements in here.
     * @type {DOMElement}
     */
    this.domElement = document.createElement('div');

    /**
     * The object to manipulate
     * @type {Object}
     */
    this.object = object;

    /**
     * The name of the property to manipulate
     * @type {String}
     */
    this.property = property;

    /**
     * The function to be called on change.
     * @type {Function}
     * @ignore
     */
    this.__onChange = undefined;

    /**
     * The function to be called on finishing change.
     * @type {Function}
     * @ignore
     */
    this.__onFinishChange = undefined;

  };

  common.extend(

      Controller.prototype,

      /** @lends dat.controllers.Controller.prototype */
      {

        /**
         * Specify that a function fire every time someone changes the value with
         * this Controller.
         *
         * @param {Function} fnc This function will be called whenever the value
         * is modified via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onChange: function(fnc) {
          this.__onChange = fnc;
          return this;
        },

        /**
         * Specify that a function fire every time someone "finishes" changing
         * the value wih this Controller. Useful for values that change
         * incrementally like numbers or strings.
         *
         * @param {Function} fnc This function will be called whenever
         * someone "finishes" changing the value via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onFinishChange: function(fnc) {
          this.__onFinishChange = fnc;
          return this;
        },

        /**
         * Change the value of <code>object[property]</code>
         *
         * @param {Object} newValue The new value of <code>object[property]</code>
         */
        setValue: function(newValue) {
          this.object[this.property] = newValue;
          if (this.__onChange) {
            this.__onChange.call(this, newValue);
          }
          this.updateDisplay();
          return this;
        },

        /**
         * Gets the value of <code>object[property]</code>
         *
         * @returns {Object} The current value of <code>object[property]</code>
         */
        getValue: function() {
          return this.object[this.property];
        },

        /**
         * Refreshes the visual display of a Controller in order to keep sync
         * with the object's current value.
         * @returns {dat.controllers.Controller} this
         */
        updateDisplay: function() {
          return this;
        },

        /**
         * @returns {Boolean} true if the value has deviated from initialValue
         */
        isModified: function() {
          return this.initialValue !== this.getValue()
        }

      }

  );

  return Controller;


})(dat.utils.common);


dat.dom.dom = (function (common) {

  var EVENT_MAP = {
    'HTMLEvents': ['change'],
    'MouseEvents': ['click','mousemove','mousedown','mouseup', 'mouseover'],
    'KeyboardEvents': ['keydown']
  };

  var EVENT_MAP_INV = {};
  common.each(EVENT_MAP, function(v, k) {
    common.each(v, function(e) {
      EVENT_MAP_INV[e] = k;
    });
  });

  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

  function cssValueToPixels(val) {

    if (val === '0' || common.isUndefined(val)) return 0;

    var match = val.match(CSS_VALUE_PIXELS);

    if (!common.isNull(match)) {
      return parseFloat(match[1]);
    }

    // TODO ...ems? %?

    return 0;

  }

  /**
   * @namespace
   * @member dat.dom
   */
  var dom = {

    /**
     * 
     * @param elem
     * @param selectable
     */
    makeSelectable: function(elem, selectable) {

      if (elem === undefined || elem.style === undefined) return;

      elem.onselectstart = selectable ? function() {
        return false;
      } : function() {
      };

      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
      elem.unselectable = selectable ? 'on' : 'off';

    },

    /**
     *
     * @param elem
     * @param horizontal
     * @param vertical
     */
    makeFullscreen: function(elem, horizontal, vertical) {

      if (common.isUndefined(horizontal)) horizontal = true;
      if (common.isUndefined(vertical)) vertical = true;

      elem.style.position = 'absolute';

      if (horizontal) {
        elem.style.left = 0;
        elem.style.right = 0;
      }
      if (vertical) {
        elem.style.top = 0;
        elem.style.bottom = 0;
      }

    },

    /**
     *
     * @param elem
     * @param eventType
     * @param params
     */
    fakeEvent: function(elem, eventType, params, aux) {
      params = params || {};
      var className = EVENT_MAP_INV[eventType];
      if (!className) {
        throw new Error('Event type ' + eventType + ' not supported.');
      }
      var evt = document.createEvent(className);
      switch (className) {
        case 'MouseEvents':
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false,
              params.cancelable || true, window, params.clickCount || 1,
              0, //screen X
              0, //screen Y
              clientX, //client X
              clientY, //client Y
              false, false, false, false, 0, null);
          break;
        case 'KeyboardEvents':
          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
          common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false,
              params.cancelable, window,
              params.ctrlKey, params.altKey,
              params.shiftKey, params.metaKey,
              params.keyCode, params.charCode);
          break;
        default:
          evt.initEvent(eventType, params.bubbles || false,
              params.cancelable || true);
          break;
      }
      common.defaults(evt, aux);
      elem.dispatchEvent(evt);
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    bind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.addEventListener)
        elem.addEventListener(event, func, bool);
      else if (elem.attachEvent)
        elem.attachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    unbind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.removeEventListener)
        elem.removeEventListener(event, func, bool);
      else if (elem.detachEvent)
        elem.detachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    addClass: function(elem, className) {
      if (elem.className === undefined) {
        elem.className = className;
      } else if (elem.className !== className) {
        var classes = elem.className.split(/ +/);
        if (classes.indexOf(className) == -1) {
          classes.push(className);
          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
        }
      }
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    removeClass: function(elem, className) {
      if (className) {
        if (elem.className === undefined) {
          // elem.className = className;
        } else if (elem.className === className) {
          elem.removeAttribute('class');
        } else {
          var classes = elem.className.split(/ +/);
          var index = classes.indexOf(className);
          if (index != -1) {
            classes.splice(index, 1);
            elem.className = classes.join(' ');
          }
        }
      } else {
        elem.className = undefined;
      }
      return dom;
    },

    hasClass: function(elem, className) {
      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
    },

    /**
     *
     * @param elem
     */
    getWidth: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-left-width']) +
          cssValueToPixels(style['border-right-width']) +
          cssValueToPixels(style['padding-left']) +
          cssValueToPixels(style['padding-right']) +
          cssValueToPixels(style['width']);
    },

    /**
     *
     * @param elem
     */
    getHeight: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-top-width']) +
          cssValueToPixels(style['border-bottom-width']) +
          cssValueToPixels(style['padding-top']) +
          cssValueToPixels(style['padding-bottom']) +
          cssValueToPixels(style['height']);
    },

    /**
     *
     * @param elem
     */
    getOffset: function(elem) {
      var offset = {left: 0, top:0};
      if (elem.offsetParent) {
        do {
          offset.left += elem.offsetLeft;
          offset.top += elem.offsetTop;
        } while (elem = elem.offsetParent);
      }
      return offset;
    },

    // http://stackoverflow.com/posts/2684561/revisions
    /**
     * 
     * @param elem
     */
    isActive: function(elem) {
      return elem === document.activeElement && ( elem.type || elem.href );
    }

  };

  return dom;

})(dat.utils.common);


dat.controllers.OptionController = (function (Controller, dom, common) {

  /**
   * @class Provides a select input to alter the property of an object, using a
   * list of accepted values.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object|string[]} options A map of labels to acceptable values, or
   * a list of acceptable string values.
   *
   * @member dat.controllers
   */
  var OptionController = function(object, property, options) {

    OptionController.superclass.call(this, object, property);

    var _this = this;

    /**
     * The drop down menu
     * @ignore
     */
    this.__select = document.createElement('select');

    if (common.isArray(options)) {
      var map = {};
      common.each(options, function(element) {
        map[element] = element;
      });
      options = map;
    }

    common.each(options, function(value, key) {

      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);

    });

    // Acknowledge original value
    this.updateDisplay();

    dom.bind(this.__select, 'change', function() {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });

    this.domElement.appendChild(this.__select);

  };

  OptionController.superclass = Controller;

  common.extend(

      OptionController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          return toReturn;
        },

        updateDisplay: function() {
          this.__select.value = this.getValue();
          return OptionController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return OptionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberController = (function (Controller, common) {

  /**
   * @class Represents a given property of an object that is a number.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberController = function(object, property, params) {

    NumberController.superclass.call(this, object, property);

    params = params || {};

    this.__min = params.min;
    this.__max = params.max;
    this.__step = params.step;

    if (common.isUndefined(this.__step)) {

      if (this.initialValue == 0) {
        this.__impliedStep = 1; // What are we, psychics?
      } else {
        // Hey Doug, check this out.
        this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue)/Math.LN10))/10;
      }

    } else {

      this.__impliedStep = this.__step;

    }

    this.__precision = numDecimals(this.__impliedStep);


  };

  NumberController.superclass = Controller;

  common.extend(

      NumberController.prototype,
      Controller.prototype,

      /** @lends dat.controllers.NumberController.prototype */
      {

        setValue: function(v) {

          if (this.__min !== undefined && v < this.__min) {
            v = this.__min;
          } else if (this.__max !== undefined && v > this.__max) {
            v = this.__max;
          }

          if (this.__step !== undefined && v % this.__step != 0) {
            v = Math.round(v / this.__step) * this.__step;
          }

          return NumberController.superclass.prototype.setValue.call(this, v);

        },

        /**
         * Specify a minimum value for <code>object[property]</code>.
         *
         * @param {Number} minValue The minimum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        min: function(v) {
          this.__min = v;
          return this;
        },

        /**
         * Specify a maximum value for <code>object[property]</code>.
         *
         * @param {Number} maxValue The maximum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        max: function(v) {
          this.__max = v;
          return this;
        },

        /**
         * Specify a step value that dat.controllers.NumberController
         * increments by.
         *
         * @param {Number} stepValue The step value for
         * dat.controllers.NumberController
         * @default if minimum and maximum specified increment is 1% of the
         * difference otherwise stepValue is 1
         * @returns {dat.controllers.NumberController} this
         */
        step: function(v) {
          this.__step = v;
          return this;
        }

      }

  );

  function numDecimals(x) {
    x = x.toString();
    if (x.indexOf('.') > -1) {
      return x.length - x.indexOf('.') - 1;
    } else {
      return 0;
    }
  }

  return NumberController;

})(dat.controllers.Controller,
dat.utils.common);


dat.controllers.NumberControllerBox = (function (NumberController, dom, common) {

  /**
   * @class Represents a given property of an object that is a number and
   * provides an input element with which to manipulate it.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerBox = function(object, property, params) {

    this.__truncationSuspended = false;

    NumberControllerBox.superclass.call(this, object, property, params);

    var _this = this;

    /**
     * {Number} Previous mouse y position
     * @ignore
     */
    var prev_y;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    // Makes it so manually specified values are not truncated.

    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'mousedown', onMouseDown);
    dom.bind(this.__input, 'keydown', function(e) {

      // When pressing entire, you can be as precise as you want.
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
      }

    });

    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!common.isNaN(attempted)) _this.setValue(attempted);
    }

    function onBlur() {
      onChange();
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prev_y = e.clientY;
    }

    function onMouseDrag(e) {

      var diff = prev_y - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);

      prev_y = e.clientY;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  NumberControllerBox.superclass = NumberController;

  common.extend(

      NumberControllerBox.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {

          this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
          return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  function roundToDecimal(value, decimals) {
    var tenTo = Math.pow(10, decimals);
    return Math.round(value * tenTo) / tenTo;
  }

  return NumberControllerBox;

})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberControllerSlider = (function (NumberController, dom, css, common, styleSheet) {

  /**
   * @class Represents a given property of an object that is a number, contains
   * a minimum and maximum, and provides a slider element with which to
   * manipulate it. It should be noted that the slider element is made up of
   * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
   * <code>&lt;slider&gt;</code> element.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   * 
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Number} minValue Minimum allowed value
   * @param {Number} maxValue Maximum allowed value
   * @param {Number} stepValue Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerSlider = function(object, property, min, max, step) {

    NumberControllerSlider.superclass.call(this, object, property, { min: min, max: max, step: step });

    var _this = this;

    this.__background = document.createElement('div');
    this.__foreground = document.createElement('div');
    


    dom.bind(this.__background, 'mousedown', onMouseDown);
    
    dom.addClass(this.__background, 'slider');
    dom.addClass(this.__foreground, 'slider-fg');

    function onMouseDown(e) {

      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);

      onMouseDrag(e);
    }

    function onMouseDrag(e) {

      e.preventDefault();

      var offset = dom.getOffset(_this.__background);
      var width = dom.getWidth(_this.__background);
      
      _this.setValue(
        map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)
      );

      return false;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.__background.appendChild(this.__foreground);
    this.domElement.appendChild(this.__background);

  };

  NumberControllerSlider.superclass = NumberController;

  /**
   * Injects default stylesheet for slider elements.
   */
  NumberControllerSlider.useDefaultStyles = function() {
    css.inject(styleSheet);
  };

  common.extend(

      NumberControllerSlider.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {
          var pct = (this.getValue() - this.__min)/(this.__max - this.__min);
          this.__foreground.style.width = pct*100+'%';
          return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
        }

      }



  );

  function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
  }

  return NumberControllerSlider;
  
})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.css,
dat.utils.common,
".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");


dat.controllers.FunctionController = (function (Controller, dom, common) {

  /**
   * @class Provides a GUI interface to fire a specified method, a property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var FunctionController = function(object, property, text) {

    FunctionController.superclass.call(this, object, property);

    var _this = this;

    this.__button = document.createElement('div');
    this.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(this.__button, 'click', function(e) {
      e.preventDefault();
      _this.fire();
      return false;
    });

    dom.addClass(this.__button, 'button');

    this.domElement.appendChild(this.__button);


  };

  FunctionController.superclass = Controller;

  common.extend(

      FunctionController.prototype,
      Controller.prototype,
      {
        
        fire: function() {
          if (this.__onChange) {
            this.__onChange.call(this);
          }
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.getValue().call(this.object);
        }
      }

  );

  return FunctionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.BooleanController = (function (Controller, dom, common) {

  /**
   * @class Provides a checkbox input to alter the boolean property of an object.
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var BooleanController = function(object, property) {

    BooleanController.superclass.call(this, object, property);

    var _this = this;
    this.__prev = this.getValue();

    this.__checkbox = document.createElement('input');
    this.__checkbox.setAttribute('type', 'checkbox');


    dom.bind(this.__checkbox, 'change', onChange, false);

    this.domElement.appendChild(this.__checkbox);

    // Match original value
    this.updateDisplay();

    function onChange() {
      _this.setValue(!_this.__prev);
    }

  };

  BooleanController.superclass = Controller;

  common.extend(

      BooleanController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.__prev = this.getValue();
          return toReturn;
        },

        updateDisplay: function() {
          
          if (this.getValue() === true) {
            this.__checkbox.setAttribute('checked', 'checked');
            this.__checkbox.checked = true;    
          } else {
              this.__checkbox.checked = false;
          }

          return BooleanController.superclass.prototype.updateDisplay.call(this);

        }


      }

  );

  return BooleanController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common);


dat.GUI = dat.gui.GUI = (function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {

  css.inject(styleSheet);

  /** Outer-most className for GUI's */
  var CSS_NAMESPACE = 'dg';

  var HIDE_KEY_CODE = 72;

  /** The only value shared between the JS and SCSS. Use caution. */
  var CLOSE_BUTTON_HEIGHT = 20;

  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

  var SUPPORTS_LOCAL_STORAGE = (function() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  })();

  var SAVE_DIALOGUE;

  /** Have we yet to create an autoPlace GUI? */
  var auto_place_virgin = true;

  /** Fixed position div that auto place GUI's go inside */
  var auto_place_container;

  /** Are we hiding the GUI's ? */
  var hide = false;

  /** GUI's which should be hidden */
  var hideable_guis = [];

  /**
   * A lightweight controller library for JavaScript. It allows you to easily
   * manipulate variables and fire functions on the fly.
   * @class
   *
   * @member dat.gui
   *
   * @param {Object} [params]
   * @param {String} [params.name] The name of this GUI.
   * @param {Object} [params.load] JSON object representing the saved state of
   * this GUI.
   * @param {Boolean} [params.auto=true]
   * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
   * @param {Boolean} [params.closed] If true, starts closed
   */
  var GUI = function(params) {

    var _this = this;

    /**
     * Outermost DOM Element
     * @type DOMElement
     */
    this.domElement = document.createElement('div');
    this.__ul = document.createElement('ul');
    this.domElement.appendChild(this.__ul);

    dom.addClass(this.domElement, CSS_NAMESPACE);

    /**
     * Nested GUI's by name
     * @ignore
     */
    this.__folders = {};

    this.__controllers = [];

    /**
     * List of objects I'm remembering for save, only used in top level GUI
     * @ignore
     */
    this.__rememberedObjects = [];

    /**
     * Maps the index of remembered objects to a map of controllers, only used
     * in top level GUI.
     *
     * @private
     * @ignore
     *
     * @example
     * [
     *  {
     *    propertyName: Controller,
     *    anotherPropertyName: Controller
     *  },
     *  {
     *    propertyName: Controller
     *  }
     * ]
     */
    this.__rememberedObjectIndecesToControllers = [];

    this.__listening = [];

    params = params || {};

    // Default parameters
    params = common.defaults(params, {
      autoPlace: true,
      width: GUI.DEFAULT_WIDTH
    });

    params = common.defaults(params, {
      resizable: params.autoPlace,
      hideable: params.autoPlace
    });


    if (!common.isUndefined(params.load)) {

      // Explicit preset
      if (params.preset) params.load.preset = params.preset;

    } else {

      params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };

    }

    if (common.isUndefined(params.parent) && params.hideable) {
      hideable_guis.push(this);
    }

    // Only root level GUI's are resizable.
    params.resizable = common.isUndefined(params.parent) && params.resizable;


    if (params.autoPlace && common.isUndefined(params.scrollable)) {
      params.scrollable = true;
    }
//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

    // Not part of params because I don't want people passing this in via
    // constructor. Should be a 'remembered' value.
    var use_local_storage =
        SUPPORTS_LOCAL_STORAGE &&
            localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

    Object.defineProperties(this,

        /** @lends dat.gui.GUI.prototype */
        {

          /**
           * The parent <code>GUI</code>
           * @type dat.gui.GUI
           */
          parent: {
            get: function() {
              return params.parent;
            }
          },

          scrollable: {
            get: function() {
              return params.scrollable;
            }
          },

          /**
           * Handles <code>GUI</code>'s element placement for you
           * @type Boolean
           */
          autoPlace: {
            get: function() {
              return params.autoPlace;
            }
          },

          /**
           * The identifier for a set of saved values
           * @type String
           */
          preset: {

            get: function() {
              if (_this.parent) {
                return _this.getRoot().preset;
              } else {
                return params.load.preset;
              }
            },

            set: function(v) {
              if (_this.parent) {
                _this.getRoot().preset = v;
              } else {
                params.load.preset = v;
              }
              setPresetSelectIndex(this);
              _this.revert();
            }

          },

          /**
           * The width of <code>GUI</code> element
           * @type Number
           */
          width: {
            get: function() {
              return params.width;
            },
            set: function(v) {
              params.width = v;
              setWidth(_this, v);
            }
          },

          /**
           * The name of <code>GUI</code>. Used for folders. i.e
           * a folder's name
           * @type String
           */
          name: {
            get: function() {
              return params.name;
            },
            set: function(v) {
              // TODO Check for collisions among sibling folders
              params.name = v;
              if (title_row_name) {
                title_row_name.innerHTML = params.name;
              }
            }
          },

          /**
           * Whether the <code>GUI</code> is collapsed or not
           * @type Boolean
           */
          closed: {
            get: function() {
              return params.closed;
            },
            set: function(v) {
              params.closed = v;
              if (params.closed) {
                dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
              } else {
                dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
              }
              // For browsers that aren't going to respect the CSS transition,
              // Lets just check our height against the window height right off
              // the bat.
              this.onResize();

              if (_this.__closeButton) {
                _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
              }
            }
          },

          /**
           * Contains all presets
           * @type Object
           */
          load: {
            get: function() {
              return params.load;
            }
          },

          /**
           * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
           * <code>remember</code>ing
           * @type Boolean
           */
          useLocalStorage: {

            get: function() {
              return use_local_storage;
            },
            set: function(bool) {
              if (SUPPORTS_LOCAL_STORAGE) {
                use_local_storage = bool;
                if (bool) {
                  dom.bind(window, 'unload', saveToLocalStorage);
                } else {
                  dom.unbind(window, 'unload', saveToLocalStorage);
                }
                localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
              }
            }

          }

        });

    // Are we a root level GUI?
    if (common.isUndefined(params.parent)) {

      params.closed = false;

      dom.addClass(this.domElement, GUI.CLASS_MAIN);
      dom.makeSelectable(this.domElement, false);

      // Are we supposed to be loading locally?
      if (SUPPORTS_LOCAL_STORAGE) {

        if (use_local_storage) {

          _this.useLocalStorage = true;

          var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

          if (saved_gui) {
            params.load = JSON.parse(saved_gui);
          }

        }

      }

      this.__closeButton = document.createElement('div');
      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
      this.domElement.appendChild(this.__closeButton);

      dom.bind(this.__closeButton, 'click', function() {

        _this.closed = !_this.closed;


      });


      // Oh, you're a nested GUI!
    } else {

      if (params.closed === undefined) {
        params.closed = true;
      }

      var title_row_name = document.createTextNode(params.name);
      dom.addClass(title_row_name, 'controller-name');

      var title_row = addRow(_this, title_row_name);

      var on_click_title = function(e) {
        e.preventDefault();
        _this.closed = !_this.closed;
        return false;
      };

      dom.addClass(this.__ul, GUI.CLASS_CLOSED);

      dom.addClass(title_row, 'title');
      dom.bind(title_row, 'click', on_click_title);

      if (!params.closed) {
        this.closed = false;
      }

    }

    if (params.autoPlace) {

      if (common.isUndefined(params.parent)) {

        if (auto_place_virgin) {
          auto_place_container = document.createElement('div');
          dom.addClass(auto_place_container, CSS_NAMESPACE);
          dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
          document.body.appendChild(auto_place_container);
          auto_place_virgin = false;
        }

        // Put it in the dom for you.
        auto_place_container.appendChild(this.domElement);

        // Apply the auto styles
        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);

      }


      // Make it not elastic.
      if (!this.parent) setWidth(_this, params.width);

    }

    dom.bind(window, 'resize', function() { _this.onResize() });
    dom.bind(this.__ul, 'webkitTransitionEnd', function() { _this.onResize(); });
    dom.bind(this.__ul, 'transitionend', function() { _this.onResize() });
    dom.bind(this.__ul, 'oTransitionEnd', function() { _this.onResize() });
    this.onResize();


    if (params.resizable) {
      addResizeHandle(this);
    }

    function saveToLocalStorage() {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }

    var root = _this.getRoot();
    function resetWidth() {
        var root = _this.getRoot();
        root.width += 1;
        common.defer(function() {
          root.width -= 1;
        });
      }

      if (!params.parent) {
        resetWidth();
      }

  };

  GUI.toggleHide = function() {

    hide = !hide;
    common.each(hideable_guis, function(gui) {
      gui.domElement.style.zIndex = hide ? -999 : 999;
      gui.domElement.style.opacity = hide ? 0 : 1;
    });
  };

  GUI.CLASS_AUTO_PLACE = 'a';
  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
  GUI.CLASS_MAIN = 'main';
  GUI.CLASS_CONTROLLER_ROW = 'cr';
  GUI.CLASS_TOO_TALL = 'taller-than-window';
  GUI.CLASS_CLOSED = 'closed';
  GUI.CLASS_CLOSE_BUTTON = 'close-button';
  GUI.CLASS_DRAG = 'drag';

  GUI.DEFAULT_WIDTH = 245;
  GUI.TEXT_CLOSED = 'Close Controls';
  GUI.TEXT_OPEN = 'Open Controls';

  dom.bind(window, 'keydown', function(e) {

    if (document.activeElement.type !== 'text' &&
        (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
      GUI.toggleHide();
    }

  }, false);

  common.extend(

      GUI.prototype,

      /** @lends dat.gui.GUI */
      {

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.Controller} The new controller that was added.
         * @instance
         */
        add: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
              }
          );

        },

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.ColorController} The new controller that was added.
         * @instance
         */
        addColor: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                color: true
              }
          );

        },

        /**
         * @param controller
         * @instance
         */
        remove: function(controller) {

          // TODO listening?
          this.__ul.removeChild(controller.__li);
          this.__controllers.slice(this.__controllers.indexOf(controller), 1);
          var _this = this;
          common.defer(function() {
            _this.onResize();
          });

        },

        destroy: function() {

          if (this.autoPlace) {
            auto_place_container.removeChild(this.domElement);
          }

        },

        /**
         * @param name
         * @returns {dat.gui.GUI} The new folder.
         * @throws {Error} if this GUI already has a folder by the specified
         * name
         * @instance
         */
        addFolder: function(name) {

          // We have to prevent collisions on names in order to have a key
          // by which to remember saved values
          if (this.__folders[name] !== undefined) {
            throw new Error('You already have a folder in this GUI by the' +
                ' name "' + name + '"');
          }

          var new_gui_params = { name: name, parent: this };

          // We need to pass down the autoPlace trait so that we can
          // attach event listeners to open/close folder actions to
          // ensure that a scrollbar appears if the window is too short.
          new_gui_params.autoPlace = this.autoPlace;

          // Do we have saved appearance data for this folder?

          if (this.load && // Anything loaded?
              this.load.folders && // Was my parent a dead-end?
              this.load.folders[name]) { // Did daddy remember me?

            // Start me closed if I was closed
            new_gui_params.closed = this.load.folders[name].closed;

            // Pass down the loaded data
            new_gui_params.load = this.load.folders[name];

          }

          var gui = new GUI(new_gui_params);
          this.__folders[name] = gui;

          var li = addRow(this, gui.domElement);
          dom.addClass(li, 'folder');
          return gui;

        },

        open: function() {
          this.closed = false;
        },

        close: function() {
          this.closed = true;
        },

        onResize: function() {

          var root = this.getRoot();

          if (root.scrollable) {

            var top = dom.getOffset(root.__ul).top;
            var h = 0;

            common.each(root.__ul.childNodes, function(node) {
              if (! (root.autoPlace && node === root.__save_row))
                h += dom.getHeight(node);
            });

            if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
              dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
            } else {
              dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = 'auto';
            }

          }

          if (root.__resize_handle) {
            common.defer(function() {
              root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
            });
          }

          if (root.__closeButton) {
            root.__closeButton.style.width = root.width + 'px';
          }

        },

        /**
         * Mark objects for saving. The order of these objects cannot change as
         * the GUI grows. When remembering new objects, append them to the end
         * of the list.
         *
         * @param {Object...} objects
         * @throws {Error} if not called on a top level GUI.
         * @instance
         */
        remember: function() {

          if (common.isUndefined(SAVE_DIALOGUE)) {
            SAVE_DIALOGUE = new CenteredDiv();
            SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
          }

          if (this.parent) {
            throw new Error("You can only call remember on a top level GUI.");
          }

          var _this = this;

          common.each(Array.prototype.slice.call(arguments), function(object) {
            if (_this.__rememberedObjects.length == 0) {
              addSaveMenu(_this);
            }
            if (_this.__rememberedObjects.indexOf(object) == -1) {
              _this.__rememberedObjects.push(object);
            }
          });

          if (this.autoPlace) {
            // Set save row width
            setWidth(this, this.width);
          }

        },

        /**
         * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
         * @instance
         */
        getRoot: function() {
          var gui = this;
          while (gui.parent) {
            gui = gui.parent;
          }
          return gui;
        },

        /**
         * @returns {Object} a JSON object representing the current state of
         * this GUI as well as its remembered properties.
         * @instance
         */
        getSaveObject: function() {

          var toReturn = this.load;

          toReturn.closed = this.closed;

          // Am I remembering any values?
          if (this.__rememberedObjects.length > 0) {

            toReturn.preset = this.preset;

            if (!toReturn.remembered) {
              toReturn.remembered = {};
            }

            toReturn.remembered[this.preset] = getCurrentPreset(this);

          }

          toReturn.folders = {};
          common.each(this.__folders, function(element, key) {
            toReturn.folders[key] = element.getSaveObject();
          });

          return toReturn;

        },

        save: function() {

          if (!this.load.remembered) {
            this.load.remembered = {};
          }

          this.load.remembered[this.preset] = getCurrentPreset(this);
          markPresetModified(this, false);

        },

        saveAs: function(presetName) {

          if (!this.load.remembered) {

            // Retain default values upon first save
            this.load.remembered = {};
            this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);

          }

          this.load.remembered[presetName] = getCurrentPreset(this);
          this.preset = presetName;
          addPresetOption(this, presetName, true);

        },

        revert: function(gui) {

          common.each(this.__controllers, function(controller) {
            // Make revert work on Default.
            if (!this.getRoot().load.remembered) {
              controller.setValue(controller.initialValue);
            } else {
              recallSavedValue(gui || this.getRoot(), controller);
            }
          }, this);

          common.each(this.__folders, function(folder) {
            folder.revert(folder);
          });

          if (!gui) {
            markPresetModified(this.getRoot(), false);
          }


        },

        listen: function(controller) {

          var init = this.__listening.length == 0;
          this.__listening.push(controller);
          if (init) updateDisplays(this.__listening);

        }

      }

  );

  function add(gui, object, property, params) {

    if (object[property] === undefined) {
      throw new Error("Object " + object + " has no property \"" + property + "\"");
    }

    var controller;

    if (params.color) {

      controller = new ColorController(object, property);

    } else {

      var factoryArgs = [object,property].concat(params.factoryArgs);
      controller = controllerFactory.apply(gui, factoryArgs);

    }

    if (params.before instanceof Controller) {
      params.before = params.before.__li;
    }

    recallSavedValue(gui, controller);

    dom.addClass(controller.domElement, 'c');

    var name = document.createElement('span');
    dom.addClass(name, 'property-name');
    name.innerHTML = controller.property;

    var container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(controller.domElement);

    var li = addRow(gui, container, params.before);

    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
    dom.addClass(li, typeof controller.getValue());

    augmentController(gui, li, controller);

    gui.__controllers.push(controller);

    return controller;

  }

  /**
   * Add a row to the end of the GUI or before another row.
   *
   * @param gui
   * @param [dom] If specified, inserts the dom content in the new row
   * @param [liBefore] If specified, places the new row before another row
   */
  function addRow(gui, dom, liBefore) {
    var li = document.createElement('li');
    if (dom) li.appendChild(dom);
    if (liBefore) {
      gui.__ul.insertBefore(li, params.before);
    } else {
      gui.__ul.appendChild(li);
    }
    gui.onResize();
    return li;
  }

  function augmentController(gui, li, controller) {

    controller.__li = li;
    controller.__gui = gui;

    common.extend(controller, {

      options: function(options) {

        if (arguments.length > 1) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [common.toArray(arguments)]
              }
          );

        }

        if (common.isArray(options) || common.isObject(options)) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [options]
              }
          );

        }

      },

      name: function(v) {
        controller.__li.firstElementChild.firstElementChild.innerHTML = v;
        return controller;
      },

      listen: function() {
        controller.__gui.listen(controller);
        return controller;
      },

      remove: function() {
        controller.__gui.remove(controller);
        return controller;
      }

    });

    // All sliders should be accompanied by a box.
    if (controller instanceof NumberControllerSlider) {

      var box = new NumberControllerBox(controller.object, controller.property,
          { min: controller.__min, max: controller.__max, step: controller.__step });

      common.each(['updateDisplay', 'onChange', 'onFinishChange'], function(method) {
        var pc = controller[method];
        var pb = box[method];
        controller[method] = box[method] = function() {
          var args = Array.prototype.slice.call(arguments);
          pc.apply(controller, args);
          return pb.apply(box, args);
        }
      });

      dom.addClass(li, 'has-slider');
      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);

    }
    else if (controller instanceof NumberControllerBox) {

      var r = function(returned) {

        // Have we defined both boundaries?
        if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {

          // Well, then lets just replace this with a slider.
          controller.remove();
          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [controller.__min, controller.__max, controller.__step]
              });

        }

        return returned;

      };

      controller.min = common.compose(r, controller.min);
      controller.max = common.compose(r, controller.max);

    }
    else if (controller instanceof BooleanController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__checkbox, 'click');
      });

      dom.bind(controller.__checkbox, 'click', function(e) {
        e.stopPropagation(); // Prevents double-toggle
      })

    }
    else if (controller instanceof FunctionController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__button, 'click');
      });

      dom.bind(li, 'mouseover', function() {
        dom.addClass(controller.__button, 'hover');
      });

      dom.bind(li, 'mouseout', function() {
        dom.removeClass(controller.__button, 'hover');
      });

    }
    else if (controller instanceof ColorController) {

      dom.addClass(li, 'color');
      controller.updateDisplay = common.compose(function(r) {
        li.style.borderLeftColor = controller.__color.toString();
        return r;
      }, controller.updateDisplay);

      controller.updateDisplay();

    }

    controller.setValue = common.compose(function(r) {
      if (gui.getRoot().__preset_select && controller.isModified()) {
        markPresetModified(gui.getRoot(), true);
      }
      return r;
    }, controller.setValue);

  }

  function recallSavedValue(gui, controller) {

    // Find the topmost GUI, that's where remembered objects live.
    var root = gui.getRoot();

    // Does the object we're controlling match anything we've been told to
    // remember?
    var matched_index = root.__rememberedObjects.indexOf(controller.object);

    // Why yes, it does!
    if (matched_index != -1) {

      // Let me fetch a map of controllers for thcommon.isObject.
      var controller_map =
          root.__rememberedObjectIndecesToControllers[matched_index];

      // Ohp, I believe this is the first controller we've created for this
      // object. Lets make the map fresh.
      if (controller_map === undefined) {
        controller_map = {};
        root.__rememberedObjectIndecesToControllers[matched_index] =
            controller_map;
      }

      // Keep track of this controller
      controller_map[controller.property] = controller;

      // Okay, now have we saved any values for this controller?
      if (root.load && root.load.remembered) {

        var preset_map = root.load.remembered;

        // Which preset are we trying to load?
        var preset;

        if (preset_map[gui.preset]) {

          preset = preset_map[gui.preset];

        } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {

          // Uhh, you can have the default instead?
          preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];

        } else {

          // Nada.

          return;

        }


        // Did the loaded object remember thcommon.isObject?
        if (preset[matched_index] &&

          // Did we remember this particular property?
            preset[matched_index][controller.property] !== undefined) {

          // We did remember something for this guy ...
          var value = preset[matched_index][controller.property];

          // And that's what it is.
          controller.initialValue = value;
          controller.setValue(value);

        }

      }

    }

  }

  function getLocalStorageHash(gui, key) {
    // TODO how does this deal with multiple GUI's?
    return document.location.href + '.' + key;

  }

  function addSaveMenu(gui) {

    var div = gui.__save_row = document.createElement('li');

    dom.addClass(gui.domElement, 'has-save');

    gui.__ul.insertBefore(div, gui.__ul.firstChild);

    dom.addClass(div, 'save-row');

    var gears = document.createElement('span');
    gears.innerHTML = '&nbsp;';
    dom.addClass(gears, 'button gears');

    // TODO replace with FunctionController
    var button = document.createElement('span');
    button.innerHTML = 'Save';
    dom.addClass(button, 'button');
    dom.addClass(button, 'save');

    var button2 = document.createElement('span');
    button2.innerHTML = 'New';
    dom.addClass(button2, 'button');
    dom.addClass(button2, 'save-as');

    var button3 = document.createElement('span');
    button3.innerHTML = 'Revert';
    dom.addClass(button3, 'button');
    dom.addClass(button3, 'revert');

    var select = gui.__preset_select = document.createElement('select');

    if (gui.load && gui.load.remembered) {

      common.each(gui.load.remembered, function(value, key) {
        addPresetOption(gui, key, key == gui.preset);
      });

    } else {
      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
    }

    dom.bind(select, 'change', function() {


      for (var index = 0; index < gui.__preset_select.length; index++) {
        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
      }

      gui.preset = this.value;

    });

    div.appendChild(select);
    div.appendChild(gears);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);

    if (SUPPORTS_LOCAL_STORAGE) {

      var saveLocally = document.getElementById('dg-save-locally');
      var explain = document.getElementById('dg-local-explain');

      saveLocally.style.display = 'block';

      var localStorageCheckBox = document.getElementById('dg-local-storage');

      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
        localStorageCheckBox.setAttribute('checked', 'checked');
      }

      function showHideExplain() {
        explain.style.display = gui.useLocalStorage ? 'block' : 'none';
      }

      showHideExplain();

      // TODO: Use a boolean controller, fool!
      dom.bind(localStorageCheckBox, 'change', function() {
        gui.useLocalStorage = !gui.useLocalStorage;
        showHideExplain();
      });

    }

    var newConstructorTextArea = document.getElementById('dg-new-constructor');

    dom.bind(newConstructorTextArea, 'keydown', function(e) {
      if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
        SAVE_DIALOGUE.hide();
      }
    });

    dom.bind(gears, 'click', function() {
      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
      SAVE_DIALOGUE.show();
      newConstructorTextArea.focus();
      newConstructorTextArea.select();
    });

    dom.bind(button, 'click', function() {
      gui.save();
    });

    dom.bind(button2, 'click', function() {
      var presetName = prompt('Enter a new preset name.');
      if (presetName) gui.saveAs(presetName);
    });

    dom.bind(button3, 'click', function() {
      gui.revert();
    });

//    div.appendChild(button2);

  }

  function addResizeHandle(gui) {

    gui.__resize_handle = document.createElement('div');

    common.extend(gui.__resize_handle.style, {

      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute'
//      border: '1px solid blue'

    });

    var pmouseX;

    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
    dom.bind(gui.__closeButton, 'mousedown', dragStart);

    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);

    function dragStart(e) {

      e.preventDefault();

      pmouseX = e.clientX;

      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.bind(window, 'mousemove', drag);
      dom.bind(window, 'mouseup', dragStop);

      return false;

    }

    function drag(e) {

      e.preventDefault();

      gui.width += pmouseX - e.clientX;
      gui.onResize();
      pmouseX = e.clientX;

      return false;

    }

    function dragStop() {

      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.unbind(window, 'mousemove', drag);
      dom.unbind(window, 'mouseup', dragStop);

    }

  }

  function setWidth(gui, w) {
    gui.domElement.style.width = w + 'px';
    // Auto placed save-rows are position fixed, so we have to
    // set the width manually if we want it to bleed to the edge
    if (gui.__save_row && gui.autoPlace) {
      gui.__save_row.style.width = w + 'px';
    }if (gui.__closeButton) {
      gui.__closeButton.style.width = w + 'px';
    }
  }

  function getCurrentPreset(gui, useInitialValues) {

    var toReturn = {};

    // For each object I'm remembering
    common.each(gui.__rememberedObjects, function(val, index) {

      var saved_values = {};

      // The controllers I've made for thcommon.isObject by property
      var controller_map =
          gui.__rememberedObjectIndecesToControllers[index];

      // Remember each value for each property
      common.each(controller_map, function(controller, property) {
        saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
      });

      // Save the values for thcommon.isObject
      toReturn[index] = saved_values;

    });

    return toReturn;

  }

  function addPresetOption(gui, name, setSelected) {
    var opt = document.createElement('option');
    opt.innerHTML = name;
    opt.value = name;
    gui.__preset_select.appendChild(opt);
    if (setSelected) {
      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
    }
  }

  function setPresetSelectIndex(gui) {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      if (gui.__preset_select[index].value == gui.preset) {
        gui.__preset_select.selectedIndex = index;
      }
    }
  }

  function markPresetModified(gui, modified) {
    var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
//    console.log('mark', modified, opt);
    if (modified) {
      opt.innerHTML = opt.value + "*";
    } else {
      opt.innerHTML = opt.value;
    }
  }

  function updateDisplays(controllerArray) {


    if (controllerArray.length != 0) {

      requestAnimationFrame(function() {
        updateDisplays(controllerArray);
      });

    }

    common.each(controllerArray, function(c) {
      c.updateDisplay();
    });

  }

  return GUI;

})(dat.utils.css,
"<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>",
".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
dat.controllers.factory = (function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {

      return function(object, property) {

        var initialValue = object[property];

        // Providing options?
        if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
          return new OptionController(object, property, arguments[2]);
        }

        // Providing a map?

        if (common.isNumber(initialValue)) {

          if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {

            // Has min and max.
            return new NumberControllerSlider(object, property, arguments[2], arguments[3]);

          } else {

            return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });

          }

        }

        if (common.isString(initialValue)) {
          return new StringController(object, property);
        }

        if (common.isFunction(initialValue)) {
          return new FunctionController(object, property, '');
        }

        if (common.isBoolean(initialValue)) {
          return new BooleanController(object, property);
        }

      }

    })(dat.controllers.OptionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.StringController = (function (Controller, dom, common) {

  /**
   * @class Provides a text input to alter the string property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var StringController = function(object, property) {

    StringController.superclass.call(this, object, property);

    var _this = this;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    dom.bind(this.__input, 'keyup', onChange);
    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    

    function onChange() {
      _this.setValue(_this.__input.value);
    }

    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  StringController.superclass = Controller;

  common.extend(

      StringController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {
          // Stops the caret from moving on account of:
          // keyup -> setValue -> updateDisplay
          if (!dom.isActive(this.__input)) {
            this.__input.value = this.getValue();
          }
          return StringController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return StringController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common),
dat.controllers.FunctionController,
dat.controllers.BooleanController,
dat.utils.common),
dat.controllers.Controller,
dat.controllers.BooleanController,
dat.controllers.FunctionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.OptionController,
dat.controllers.ColorController = (function (Controller, dom, Color, interpret, common) {

  var ColorController = function(object, property) {

    ColorController.superclass.call(this, object, property);

    this.__color = new Color(this.getValue());
    this.__temp = new Color(0);

    var _this = this;

    this.domElement = document.createElement('div');

    dom.makeSelectable(this.domElement, false);

    this.__selector = document.createElement('div');
    this.__selector.className = 'selector';

    this.__saturation_field = document.createElement('div');
    this.__saturation_field.className = 'saturation-field';

    this.__field_knob = document.createElement('div');
    this.__field_knob.className = 'field-knob';
    this.__field_knob_border = '2px solid ';

    this.__hue_knob = document.createElement('div');
    this.__hue_knob.className = 'hue-knob';

    this.__hue_field = document.createElement('div');
    this.__hue_field.className = 'hue-field';

    this.__input = document.createElement('input');
    this.__input.type = 'text';
    this.__input_textShadow = '0 1px 1px ';

    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) { // on enter
        onBlur.call(this);
      }
    });

    dom.bind(this.__input, 'blur', onBlur);

    dom.bind(this.__selector, 'mousedown', function(e) {

      dom
        .addClass(this, 'drag')
        .bind(window, 'mouseup', function(e) {
          dom.removeClass(_this.__selector, 'drag');
        });

    });

    var value_field = document.createElement('div');

    common.extend(this.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });

    common.extend(this.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    
    common.extend(this.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });

    common.extend(this.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });

    common.extend(value_field.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    
    linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');

    common.extend(this.__hue_field.style, {
      width: '15px',
      height: '100px',
      display: 'inline-block',
      border: '1px solid #555',
      cursor: 'ns-resize'
    });

    hueGradient(this.__hue_field);

    common.extend(this.__input.style, {
      outline: 'none',
//      width: '120px',
      textAlign: 'center',
//      padding: '4px',
//      marginBottom: '6px',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
    });

    dom.bind(this.__saturation_field, 'mousedown', fieldDown);
    dom.bind(this.__field_knob, 'mousedown', fieldDown);

    dom.bind(this.__hue_field, 'mousedown', function(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'mouseup', unbindH);
    });

    function fieldDown(e) {
      setSV(e);
      // document.body.style.cursor = 'none';
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'mouseup', unbindSV);
    }

    function unbindSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'mouseup', unbindSV);
      // document.body.style.cursor = 'default';
    }

    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }

    function unbindH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'mouseup', unbindH);
    }

    this.__saturation_field.appendChild(value_field);
    this.__selector.appendChild(this.__field_knob);
    this.__selector.appendChild(this.__saturation_field);
    this.__selector.appendChild(this.__hue_field);
    this.__hue_field.appendChild(this.__hue_knob);

    this.domElement.appendChild(this.__input);
    this.domElement.appendChild(this.__selector);

    this.updateDisplay();

    function setSV(e) {

      e.preventDefault();

      var w = dom.getWidth(_this.__saturation_field);
      var o = dom.getOffset(_this.__saturation_field);
      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;

      if (v > 1) v = 1;
      else if (v < 0) v = 0;

      if (s > 1) s = 1;
      else if (s < 0) s = 0;

      _this.__color.v = v;
      _this.__color.s = s;

      _this.setValue(_this.__color.toOriginal());


      return false;

    }

    function setH(e) {

      e.preventDefault();

      var s = dom.getHeight(_this.__hue_field);
      var o = dom.getOffset(_this.__hue_field);
      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;

      if (h > 1) h = 1;
      else if (h < 0) h = 0;

      _this.__color.h = h * 360;

      _this.setValue(_this.__color.toOriginal());

      return false;

    }

  };

  ColorController.superclass = Controller;

  common.extend(

      ColorController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {

          var i = interpret(this.getValue());

          if (i !== false) {

            var mismatch = false;

            // Check for mismatch on the interpreted value.

            common.each(Color.COMPONENTS, function(component) {
              if (!common.isUndefined(i[component]) &&
                  !common.isUndefined(this.__color.__state[component]) &&
                  i[component] !== this.__color.__state[component]) {
                mismatch = true;
                return {}; // break
              }
            }, this);

            // If nothing diverges, we keep our previous values
            // for statefulness, otherwise we recalculate fresh
            if (mismatch) {
              common.extend(this.__color.__state, i);
            }

          }

          common.extend(this.__temp.__state, this.__color.__state);

          this.__temp.a = 1;

          var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
          var _flip = 255 - flip;

          common.extend(this.__field_knob.style, {
            marginLeft: 100 * this.__color.s - 7 + 'px',
            marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
            backgroundColor: this.__temp.toString(),
            border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip +')'
          });

          this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px'

          this.__temp.s = 1;
          this.__temp.v = 1;

          linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());

          common.extend(this.__input.style, {
            backgroundColor: this.__input.value = this.__color.toString(),
            color: 'rgb(' + flip + ',' + flip + ',' + flip +')',
            textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip +',.7)'
          });

        }

      }

  );
  
  var vendors = ['-moz-','-o-','-webkit-','-ms-',''];
  
  function linearGradient(elem, x, a, b) {
    elem.style.background = '';
    common.each(vendors, function(vendor) {
      elem.style.cssText += 'background: ' + vendor + 'linear-gradient('+x+', '+a+' 0%, ' + b + ' 100%); ';
    });
  }
  
  function hueGradient(elem) {
    elem.style.background = '';
    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'
    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
  }


  return ColorController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret,
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common),
dat.color.interpret,
dat.utils.common),
dat.utils.requestAnimationFrame = (function () {

  /**
   * requirejs version of Paul Irish's RequestAnimationFrame
   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   */

  return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback, element) {

        window.setTimeout(callback, 1000 / 60);

      };
})(),
dat.dom.CenteredDiv = (function (dom, common) {


  var CenteredDiv = function() {

    this.backgroundElement = document.createElement('div');
    common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear'
    });

    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';

    this.domElement = document.createElement('div');
    common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
    });


    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);

    var _this = this;
    dom.bind(this.backgroundElement, 'click', function() {
      _this.hide();
    });


  };

  CenteredDiv.prototype.show = function() {

    var _this = this;
    


    this.backgroundElement.style.display = 'block';

    this.domElement.style.display = 'block';
    this.domElement.style.opacity = 0;
//    this.domElement.style.top = '52%';
    this.domElement.style.webkitTransform = 'scale(1.1)';

    this.layout();

    common.defer(function() {
      _this.backgroundElement.style.opacity = 1;
      _this.domElement.style.opacity = 1;
      _this.domElement.style.webkitTransform = 'scale(1)';
    });

  };

  CenteredDiv.prototype.hide = function() {

    var _this = this;

    var hide = function() {

      _this.domElement.style.display = 'none';
      _this.backgroundElement.style.display = 'none';

      dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
      dom.unbind(_this.domElement, 'transitionend', hide);
      dom.unbind(_this.domElement, 'oTransitionEnd', hide);

    };

    dom.bind(this.domElement, 'webkitTransitionEnd', hide);
    dom.bind(this.domElement, 'transitionend', hide);
    dom.bind(this.domElement, 'oTransitionEnd', hide);

    this.backgroundElement.style.opacity = 0;
//    this.domElement.style.top = '48%';
    this.domElement.style.opacity = 0;
    this.domElement.style.webkitTransform = 'scale(1.1)';

  };

  CenteredDiv.prototype.layout = function() {
    this.domElement.style.left = window.innerWidth/2 - dom.getWidth(this.domElement) / 2 + 'px';
    this.domElement.style.top = window.innerHeight/2 - dom.getHeight(this.domElement) / 2 + 'px';
  };
  
  function lockScroll(e) {
    console.log(e);
  }

  return CenteredDiv;

})(dat.dom.dom,
dat.utils.common),
dat.dom.dom,
dat.utils.common);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.color = dat.color || {};

/** @namespace */
dat.utils = dat.utils || {};

dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.Color = dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common),
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(2);


class Square extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            0, 2, 3]);
        this.positions = new Float32Array([-0.5, -0.5, 0, 1,
            0.5, -0.5, 0, 1,
            0.5, 0.5, 0, 1,
            -0.5, 0.5, 0, 1]);
        // HERE
        this.positions = new Float32Array([-5, -5, 0, 1,
            5, -5, 0, 1,
            5, 5, 0, 1,
            -5, 5, 0, 1]);
        this.generateIdx();
        this.generatePos();
        // this.generateCol();
        this.generateTranslate();
        this.generateForward();
        this.generateDepth();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        console.log(`Created square`);
    }
    setInstanceVBOs(offsets, colors) {
        this.colors = colors;
        this.offsets = offsets;
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.offsets, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
    }
    setInstanceVBOsNew(translates, forwards, depths) {
        this.translates = translates;
        this.forwards = forwards;
        this.depths = depths;
        // translation
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.translates, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        // forward orientation
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufForward);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.forwards, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        // recursion depth
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufRoadLength);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.depths, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Square);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(2);


class ScreenQuad extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super();
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            0, 2, 3]);
        this.positions = new Float32Array([-1, -1, 0.999, 1,
            1, -1, 0.999, 1,
            1, 1, 0.999, 1,
            -1, 1, 0.999, 1]);
        this.generateIdx();
        this.generatePos();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        this.numInstances = 1;
        console.log(`Created ScreenQuad`);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (ScreenQuad);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(2);


class LongCube extends __WEBPACK_IMPORTED_MODULE_0__rendering_gl_Drawable__["a" /* default */] {
    constructor() {
        super(); // Call the constructor of the super class. This is required.
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            2, 1, 3,
            2, 3, 4,
            4, 3, 5,
            4, 5, 6,
            6, 5, 7,
            6, 7, 0,
            0, 7, 1,
            1, 7, 3,
            3, 7, 5,
            6, 0, 4,
            4, 0, 2]);
        // now z is the front axis
        this.positions = new Float32Array([-0.5, -0.5, 1, 1,
            0.5, -0.5, 1, 1,
            -0.5, 0.5, 1, 1,
            0.5, 0.5, 1, 1,
            -0.5, 0.5, 0, 1,
            0.5, 0.5, 0, 1,
            -0.5, -0.5, 0, 1,
            0.5, -0.5, 0, 1]);
        this.generateIdx();
        this.generatePos();
        this.generateTranslate();
        this.generateRotMat();
        this.generateRoadLength();
        this.generateRoadWidth();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        console.log(`Created long cube`);
    }
    setInstanceVBOs(translates, rotMats, roadLengths, roadWidths) {
        this.translates = translates;
        this.rotQuats = rotMats;
        this.roadLengths = roadLengths;
        this.roadWidths = roadWidths;
        // translation
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.translates, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        // rotation quat
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufRotQuat);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.rotQuats, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        // road length
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufRoadLength);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.roadLengths, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
        // road width
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.bufRoadWidth);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].ARRAY_BUFFER, this.roadWidths, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (LongCube);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(2);


// In this file, `gl` is accessible because it is imported above
class OpenGLRenderer {
    constructor(canvas) {
        this.canvas = canvas;
    }
    setClearColor(r, g, b, a) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].clearColor(r, g, b, a);
    }
    setSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    clear() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].COLOR_BUFFER_BIT | __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].DEPTH_BUFFER_BIT);
    }
    render(camera, prog, drawables) {
        let model = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        let viewProj = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        let color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].fromValues(1, 0, 0, 1);
        // Each column of the axes matrix is an axis. Right, Up, Forward.
        let axes = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat3 */].fromValues(camera.right[0], camera.right[1], camera.right[2], camera.up[0], camera.up[1], camera.up[2], camera.forward[0], camera.forward[1], camera.forward[2]);
        prog.setEyeRefUp(camera.controls.eye, camera.controls.center, camera.controls.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(model);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].multiply(viewProj, camera.projectionMatrix, camera.viewMatrix);
        prog.setModelMatrix(model);
        prog.setViewProjMatrix(viewProj);
        prog.setCameraAxes(axes);
        for (let drawable of drawables) {
            prog.draw(drawable);
        }
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (OpenGLRenderer);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
var CameraControls = __webpack_require__(39);

class Camera {
    constructor(position, target) {
        this.projectionMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.viewMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.fovy = 45;
        this.aspectRatio = 1;
        this.near = 0.1;
        this.far = 1000;
        this.position = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.direction = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.target = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.right = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.forward = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        const canvas = document.getElementById('canvas');
        this.controls = CameraControls(canvas, {
            eye: [0, 100, 0],
            center: [0, 0, 0],
            zoomMax: 500
        });
        console.log("in control eye: " + this.controls.eye);
        console.log("in control center: " + this.controls.center);
        console.log("in control up: " + this.controls.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].add(this.target, this.position, this.direction);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].lookAt(this.viewMatrix, this.controls.eye, this.controls.center, this.controls.up);
        this.position = this.controls.eye;
        this.up = this.controls.up;
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].subtract(this.forward, this.target, this.position);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(this.forward, this.forward);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(this.right, this.forward, this.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(this.right, this.right);
    }
    setAspectRatio(aspectRatio) {
        this.aspectRatio = aspectRatio;
    }
    updateProjectionMatrix() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].perspective(this.projectionMatrix, this.fovy, this.aspectRatio, this.near, this.far);
    }
    update() {
        this.controls.tick();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].add(this.target, this.position, this.direction);
        this.position = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(this.controls.eye[0], this.controls.eye[1], this.controls.eye[2]);
        this.target = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(this.controls.center[0], this.controls.center[1], this.controls.center[2]);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].lookAt(this.viewMatrix, this.controls.eye, this.controls.center, this.controls.up);
        this.position = this.controls.eye;
        this.up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(this.controls.up[0], this.controls.up[1], this.controls.up[2]);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(this.up, this.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].subtract(this.forward, this.target, this.position);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(this.forward, this.forward);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(this.right, this.forward, this.up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(this.right, this.right);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(this.up, this.right, this.forward);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(this.up, this.up);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Camera);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createCamera

var now         = __webpack_require__(40)
var createView  = __webpack_require__(42)
var mouseChange = __webpack_require__(65)
var mouseWheel  = __webpack_require__(67)
var mouseOffset = __webpack_require__(70)
var hasPassive  = __webpack_require__(71)

function createCamera(element, options) {
  element = element || document.body
  options = options || {}

  var limits  = [ 0.01, Infinity ]
  if('distanceLimits' in options) {
    limits[0] = options.distanceLimits[0]
    limits[1] = options.distanceLimits[1]
  }
  if('zoomMin' in options) {
    limits[0] = options.zoomMin
  }
  if('zoomMax' in options) {
    limits[1] = options.zoomMax
  }

  var view = createView({
    center: options.center || [0,0,0],
    up:     options.up     || [0,1,0],
    eye:    options.eye    || [0,0,10],
    mode:   options.mode   || 'orbit',
    distanceLimits: limits
  })

  var pmatrix = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  var distance = 0.0
  var width   = element.clientWidth
  var height  = element.clientHeight

  var camera = {
    view:               view,
    element:            element,
    delay:              options.delay          || 16,
    rotateSpeed:        options.rotateSpeed    || 1,
    zoomSpeed:          options.zoomSpeed      || 1,
    translateSpeed:     options.translateSpeed || 1,
    flipX:              !!options.flipX,
    flipY:              !!options.flipY,
    modes:              view.modes,
    tick: function() {
      var t = now()
      var delay = this.delay
      view.idle(t-delay)
      view.flush(t-(100+delay*2))
      var ctime = t - 2 * delay
      view.recalcMatrix(ctime)
      var allEqual = true
      var matrix = view.computedMatrix
      for(var i=0; i<16; ++i) {
        allEqual = allEqual && (pmatrix[i] === matrix[i])
        pmatrix[i] = matrix[i]
      }
      var sizeChanged =
          element.clientWidth === width &&
          element.clientHeight === height
      width  = element.clientWidth
      height = element.clientHeight
      if(allEqual) {
        return !sizeChanged
      }
      distance = Math.exp(view.computedRadius[0])
      return true
    },
    lookAt: function(center, eye, up) {
      view.lookAt(view.lastT(), center, eye, up)
    },
    rotate: function(pitch, yaw, roll) {
      view.rotate(view.lastT(), pitch, yaw, roll)
    },
    pan: function(dx, dy, dz) {
      view.pan(view.lastT(), dx, dy, dz)
    },
    translate: function(dx, dy, dz) {
      view.translate(view.lastT(), dx, dy, dz)
    }
  }

  Object.defineProperties(camera, {
    matrix: {
      get: function() {
        return view.computedMatrix
      },
      set: function(mat) {
        view.setMatrix(view.lastT(), mat)
        return view.computedMatrix
      },
      enumerable: true
    },
    mode: {
      get: function() {
        return view.getMode()
      },
      set: function(mode) {
        view.setMode(mode)
        return view.getMode()
      },
      enumerable: true
    },
    center: {
      get: function() {
        return view.computedCenter
      },
      set: function(ncenter) {
        view.lookAt(view.lastT(), ncenter)
        return view.computedCenter
      },
      enumerable: true
    },
    eye: {
      get: function() {
        return view.computedEye
      },
      set: function(neye) {
        view.lookAt(view.lastT(), null, neye)
        return view.computedEye
      },
      enumerable: true
    },
    up: {
      get: function() {
        return view.computedUp
      },
      set: function(nup) {
        view.lookAt(view.lastT(), null, null, nup)
        return view.computedUp
      },
      enumerable: true
    },
    distance: {
      get: function() {
        return distance
      },
      set: function(d) {
        view.setDistance(view.lastT(), d)
        return d
      },
      enumerable: true
    },
    distanceLimits: {
      get: function() {
        return view.getDistanceLimits(limits)
      },
      set: function(v) {
        view.setDistanceLimits(v)
        return v
      },
      enumerable: true
    }
  })

  element.addEventListener('contextmenu', function(ev) {
    ev.preventDefault()
    return false
  })

  var lastX = 0, lastY = 0, lastMods = {shift: false, control: false, alt: false, meta: false}
  mouseChange(element, handleInteraction)

  //enable simple touch interactions
  element.addEventListener('touchstart', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(0, xy[0], xy[1], lastMods)
    handleInteraction(1, xy[0], xy[1], lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  element.addEventListener('touchmove', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(1, xy[0], xy[1], lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  element.addEventListener('touchend', function (ev) {
    var xy = mouseOffset(ev.changedTouches[0], element)
    handleInteraction(0, lastX, lastY, lastMods)

    ev.preventDefault()
  }, hasPassive ? {passive: false} : false)

  function handleInteraction (buttons, x, y, mods) {
    var scale = 1.0 / element.clientHeight
    var dx    = scale * (x - lastX)
    var dy    = scale * (y - lastY)

    var flipX = camera.flipX ? 1 : -1
    var flipY = camera.flipY ? 1 : -1

    var drot  = Math.PI * camera.rotateSpeed

    var t = now()

    if(buttons & 1) {
      if(mods.shift) {
        view.rotate(t, 0, 0, -dx * drot)
      } else {
        view.rotate(t, flipX * drot * dx, -flipY * drot * dy, 0)
      }
    } else if(buttons & 2) {
      view.pan(t, -camera.translateSpeed * dx * distance, camera.translateSpeed * dy * distance, 0)
    } else if(buttons & 4) {
      var kzoom = camera.zoomSpeed * dy / window.innerHeight * (t - view.lastT()) * 50.0
      view.pan(t, 0, 0, distance * (Math.exp(kzoom) - 1))
    }

    lastX = x
    lastY = y
    lastMods = mods
  }

  mouseWheel(element, function(dx, dy, dz) {
    var flipX = camera.flipX ? 1 : -1
    var flipY = camera.flipY ? 1 : -1
    var t = now()
    if(Math.abs(dx) > Math.abs(dy)) {
      view.rotate(t, 0, 0, -dx * flipX * Math.PI * camera.rotateSpeed / window.innerWidth)
    } else {
      var kzoom = camera.zoomSpeed * flipY * dy / window.innerHeight * (t - view.lastT()) / 100.0
      view.pan(t, 0, 0, distance * (Math.exp(kzoom) - 1))
    }
  }, true)

  return camera
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports =
  global.performance &&
  global.performance.now ? function now() {
    return performance.now()
  } : Date.now || function now() {
    return +new Date
  }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createViewController

var createTurntable = __webpack_require__(43)
var createOrbit     = __webpack_require__(46)
var createMatrix    = __webpack_require__(49)

function ViewController(controllers, mode) {
  this._controllerNames = Object.keys(controllers)
  this._controllerList = this._controllerNames.map(function(n) {
    return controllers[n]
  })
  this._mode   = mode
  this._active = controllers[mode]
  if(!this._active) {
    this._mode   = 'turntable'
    this._active = controllers.turntable
  }
  this.modes = this._controllerNames
  this.computedMatrix = this._active.computedMatrix
  this.computedEye    = this._active.computedEye
  this.computedUp     = this._active.computedUp
  this.computedCenter = this._active.computedCenter
  this.computedRadius = this._active.computedRadius
}

var proto = ViewController.prototype

var COMMON_METHODS = [
  ['flush', 1],
  ['idle', 1],
  ['lookAt', 4],
  ['rotate', 4],
  ['pan', 4],
  ['translate', 4],
  ['setMatrix', 2],
  ['setDistanceLimits', 2],
  ['setDistance', 2]
]

COMMON_METHODS.forEach(function(method) {
  var name = method[0]
  var argNames = []
  for(var i=0; i<method[1]; ++i) {
    argNames.push('a'+i)
  }
  var code = 'var cc=this._controllerList;for(var i=0;i<cc.length;++i){cc[i].'+method[0]+'('+argNames.join()+')}'
  proto[name] = Function.apply(null, argNames.concat(code))
})

proto.recalcMatrix = function(t) {
  this._active.recalcMatrix(t)
}

proto.getDistance = function(t) {
  return this._active.getDistance(t)
}
proto.getDistanceLimits = function(out) {
  return this._active.getDistanceLimits(out)
}

proto.lastT = function() {
  return this._active.lastT()
}

proto.setMode = function(mode) {
  if(mode === this._mode) {
    return
  }
  var idx = this._controllerNames.indexOf(mode)
  if(idx < 0) {
    return
  }
  var prev  = this._active
  var next  = this._controllerList[idx]
  var lastT = Math.max(prev.lastT(), next.lastT())

  prev.recalcMatrix(lastT)
  next.setMatrix(lastT, prev.computedMatrix)
  
  this._active = next
  this._mode   = mode

  //Update matrix properties
  this.computedMatrix = this._active.computedMatrix
  this.computedEye    = this._active.computedEye
  this.computedUp     = this._active.computedUp
  this.computedCenter = this._active.computedCenter
  this.computedRadius = this._active.computedRadius
}

proto.getMode = function() {
  return this._mode
}

function createViewController(options) {
  options = options || {}

  var eye       = options.eye    || [0,0,1]
  var center    = options.center || [0,0,0]
  var up        = options.up     || [0,1,0]
  var limits    = options.distanceLimits || [0, Infinity]
  var mode      = options.mode   || 'turntable'

  var turntable = createTurntable()
  var orbit     = createOrbit()
  var matrix    = createMatrix()

  turntable.setDistanceLimits(limits[0], limits[1])
  turntable.lookAt(0, eye, center, up)
  orbit.setDistanceLimits(limits[0], limits[1])
  orbit.lookAt(0, eye, center, up)
  matrix.setDistanceLimits(limits[0], limits[1])
  matrix.lookAt(0, eye, center, up)

  return new ViewController({
    turntable: turntable,
    orbit: orbit,
    matrix: matrix
  }, mode)
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createTurntableController

var filterVector = __webpack_require__(13)
var invert44     = __webpack_require__(4)
var rotateM      = __webpack_require__(45)
var cross        = __webpack_require__(15)
var normalize3   = __webpack_require__(5)
var dot3         = __webpack_require__(16)

function len3(x, y, z) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))
}

function clamp1(x) {
  return Math.min(1.0, Math.max(-1.0, x))
}

function findOrthoPair(v) {
  var vx = Math.abs(v[0])
  var vy = Math.abs(v[1])
  var vz = Math.abs(v[2])

  var u = [0,0,0]
  if(vx > Math.max(vy, vz)) {
    u[2] = 1
  } else if(vy > Math.max(vx, vz)) {
    u[0] = 1
  } else {
    u[1] = 1
  }

  var vv = 0
  var uv = 0
  for(var i=0; i<3; ++i ) {
    vv += v[i] * v[i]
    uv += u[i] * v[i]
  }
  for(var i=0; i<3; ++i) {
    u[i] -= (uv / vv) *  v[i]
  }
  normalize3(u, u)
  return u
}

function TurntableController(zoomMin, zoomMax, center, up, right, radius, theta, phi) {
  this.center = filterVector(center)
  this.up     = filterVector(up)
  this.right  = filterVector(right)
  this.radius = filterVector([radius])
  this.angle  = filterVector([theta, phi])
  this.angle.bounds = [[-Infinity,-Math.PI/2], [Infinity,Math.PI/2]]
  this.setDistanceLimits(zoomMin, zoomMax)

  this.computedCenter = this.center.curve(0)
  this.computedUp     = this.up.curve(0)
  this.computedRight  = this.right.curve(0)
  this.computedRadius = this.radius.curve(0)
  this.computedAngle  = this.angle.curve(0)
  this.computedToward = [0,0,0]
  this.computedEye    = [0,0,0]
  this.computedMatrix = new Array(16)
  for(var i=0; i<16; ++i) {
    this.computedMatrix[i] = 0.5
  }

  this.recalcMatrix(0)
}

var proto = TurntableController.prototype

proto.setDistanceLimits = function(minDist, maxDist) {
  if(minDist > 0) {
    minDist = Math.log(minDist)
  } else {
    minDist = -Infinity
  }
  if(maxDist > 0) {
    maxDist = Math.log(maxDist)
  } else {
    maxDist = Infinity
  }
  maxDist = Math.max(maxDist, minDist)
  this.radius.bounds[0][0] = minDist
  this.radius.bounds[1][0] = maxDist
}

proto.getDistanceLimits = function(out) {
  var bounds = this.radius.bounds[0]
  if(out) {
    out[0] = Math.exp(bounds[0][0])
    out[1] = Math.exp(bounds[1][0])
    return out
  }
  return [ Math.exp(bounds[0][0]), Math.exp(bounds[1][0]) ]
}

proto.recalcMatrix = function(t) {
  //Recompute curves
  this.center.curve(t)
  this.up.curve(t)
  this.right.curve(t)
  this.radius.curve(t)
  this.angle.curve(t)

  //Compute frame for camera matrix
  var up     = this.computedUp
  var right  = this.computedRight
  var uu = 0.0
  var ur = 0.0
  for(var i=0; i<3; ++i) {
    ur += up[i] * right[i]
    uu += up[i] * up[i]
  }
  var ul = Math.sqrt(uu)
  var rr = 0.0
  for(var i=0; i<3; ++i) {
    right[i] -= up[i] * ur / uu
    rr       += right[i] * right[i]
    up[i]    /= ul
  }
  var rl = Math.sqrt(rr)
  for(var i=0; i<3; ++i) {
    right[i] /= rl
  }

  //Compute toward vector
  var toward = this.computedToward
  cross(toward, up, right)
  normalize3(toward, toward)

  //Compute angular parameters
  var radius = Math.exp(this.computedRadius[0])
  var theta  = this.computedAngle[0]
  var phi    = this.computedAngle[1]

  var ctheta = Math.cos(theta)
  var stheta = Math.sin(theta)
  var cphi   = Math.cos(phi)
  var sphi   = Math.sin(phi)

  var center = this.computedCenter

  var wx = ctheta * cphi 
  var wy = stheta * cphi
  var wz = sphi

  var sx = -ctheta * sphi
  var sy = -stheta * sphi
  var sz = cphi

  var eye = this.computedEye
  var mat = this.computedMatrix
  for(var i=0; i<3; ++i) {
    var x      = wx * right[i] + wy * toward[i] + wz * up[i]
    mat[4*i+1] = sx * right[i] + sy * toward[i] + sz * up[i]
    mat[4*i+2] = x
    mat[4*i+3] = 0.0
  }

  var ax = mat[1]
  var ay = mat[5]
  var az = mat[9]
  var bx = mat[2]
  var by = mat[6]
  var bz = mat[10]
  var cx = ay * bz - az * by
  var cy = az * bx - ax * bz
  var cz = ax * by - ay * bx
  var cl = len3(cx, cy, cz)
  cx /= cl
  cy /= cl
  cz /= cl
  mat[0] = cx
  mat[4] = cy
  mat[8] = cz

  for(var i=0; i<3; ++i) {
    eye[i] = center[i] + mat[2+4*i]*radius
  }

  for(var i=0; i<3; ++i) {
    var rr = 0.0
    for(var j=0; j<3; ++j) {
      rr += mat[i+4*j] * eye[j]
    }
    mat[12+i] = -rr
  }
  mat[15] = 1.0
}

proto.getMatrix = function(t, result) {
  this.recalcMatrix(t)
  var mat = this.computedMatrix
  if(result) {
    for(var i=0; i<16; ++i) {
      result[i] = mat[i]
    }
    return result
  }
  return mat
}

var zAxis = [0,0,0]
proto.rotate = function(t, dtheta, dphi, droll) {
  this.angle.move(t, dtheta, dphi)
  if(droll) {
    this.recalcMatrix(t)

    var mat = this.computedMatrix
    zAxis[0] = mat[2]
    zAxis[1] = mat[6]
    zAxis[2] = mat[10]

    var up     = this.computedUp
    var right  = this.computedRight
    var toward = this.computedToward

    for(var i=0; i<3; ++i) {
      mat[4*i]   = up[i]
      mat[4*i+1] = right[i]
      mat[4*i+2] = toward[i]
    }
    rotateM(mat, mat, droll, zAxis)
    for(var i=0; i<3; ++i) {
      up[i] =    mat[4*i]
      right[i] = mat[4*i+1]
    }

    this.up.set(t, up[0], up[1], up[2])
    this.right.set(t, right[0], right[1], right[2])
  }
}

proto.pan = function(t, dx, dy, dz) {
  dx = dx || 0.0
  dy = dy || 0.0
  dz = dz || 0.0

  this.recalcMatrix(t)
  var mat = this.computedMatrix

  var dist = Math.exp(this.computedRadius[0])

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]
  var ul = len3(ux, uy, uz)
  ux /= ul
  uy /= ul
  uz /= ul

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl

  var vx = rx * dx + ux * dy
  var vy = ry * dx + uy * dy
  var vz = rz * dx + uz * dy
  this.center.move(t, vx, vy, vz)

  //Update z-component of radius
  var radius = Math.exp(this.computedRadius[0])
  radius = Math.max(1e-4, radius + dz)
  this.radius.set(t, Math.log(radius))
}

proto.translate = function(t, dx, dy, dz) {
  this.center.move(t,
    dx||0.0,
    dy||0.0,
    dz||0.0)
}

//Recenters the coordinate axes
proto.setMatrix = function(t, mat, axes, noSnap) {
  
  //Get the axes for tare
  var ushift = 1
  if(typeof axes === 'number') {
    ushift = (axes)|0
  } 
  if(ushift < 0 || ushift > 3) {
    ushift = 1
  }
  var vshift = (ushift + 2) % 3
  var fshift = (ushift + 1) % 3

  //Recompute state for new t value
  if(!mat) { 
    this.recalcMatrix(t)
    mat = this.computedMatrix
  }

  //Get right and up vectors
  var ux = mat[ushift]
  var uy = mat[ushift+4]
  var uz = mat[ushift+8]
  if(!noSnap) {
    var ul = len3(ux, uy, uz)
    ux /= ul
    uy /= ul
    uz /= ul
  } else {
    var ax = Math.abs(ux)
    var ay = Math.abs(uy)
    var az = Math.abs(uz)
    var am = Math.max(ax,ay,az)
    if(ax === am) {
      ux = (ux < 0) ? -1 : 1
      uy = uz = 0
    } else if(az === am) {
      uz = (uz < 0) ? -1 : 1
      ux = uy = 0
    } else {
      uy = (uy < 0) ? -1 : 1
      ux = uz = 0
    }
  }

  var rx = mat[vshift]
  var ry = mat[vshift+4]
  var rz = mat[vshift+8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl
  
  var fx = uy * rz - uz * ry
  var fy = uz * rx - ux * rz
  var fz = ux * ry - uy * rx
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  this.center.jump(t, ex, ey, ez)
  this.radius.idle(t)
  this.up.jump(t, ux, uy, uz)
  this.right.jump(t, rx, ry, rz)

  var phi, theta
  if(ushift === 2) {
    var cx = mat[1]
    var cy = mat[5]
    var cz = mat[9]
    var cr = cx * rx + cy * ry + cz * rz
    var cf = cx * fx + cy * fy + cz * fz
    if(tu < 0) {
      phi = -Math.PI/2
    } else {
      phi = Math.PI/2
    }
    theta = Math.atan2(cf, cr)
  } else {
    var tx = mat[2]
    var ty = mat[6]
    var tz = mat[10]
    var tu = tx * ux + ty * uy + tz * uz
    var tr = tx * rx + ty * ry + tz * rz
    var tf = tx * fx + ty * fy + tz * fz

    phi = Math.asin(clamp1(tu))
    theta = Math.atan2(tf, tr)
  }

  this.angle.jump(t, theta, phi)

  this.recalcMatrix(t)
  var dx = mat[2]
  var dy = mat[6]
  var dz = mat[10]

  var imat = this.computedMatrix
  invert44(imat, mat)
  var w  = imat[15]
  var ex = imat[12] / w
  var ey = imat[13] / w
  var ez = imat[14] / w

  var gs = Math.exp(this.computedRadius[0])
  this.center.jump(t, ex-dx*gs, ey-dy*gs, ez-dz*gs)
}

proto.lastT = function() {
  return Math.max(
    this.center.lastT(),
    this.up.lastT(),
    this.right.lastT(),
    this.radius.lastT(),
    this.angle.lastT())
}

proto.idle = function(t) {
  this.center.idle(t)
  this.up.idle(t)
  this.right.idle(t)
  this.radius.idle(t)
  this.angle.idle(t)
}

proto.flush = function(t) {
  this.center.flush(t)
  this.up.flush(t)
  this.right.flush(t)
  this.radius.flush(t)
  this.angle.flush(t)
}

proto.setDistance = function(t, d) {
  if(d > 0) {
    this.radius.set(t, Math.log(d))
  }
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)

  eye    = eye    || this.computedEye
  center = center || this.computedCenter
  up     = up     || this.computedUp

  var ux = up[0]
  var uy = up[1]
  var uz = up[2]
  var ul = len3(ux, uy, uz)
  if(ul < 1e-6) {
    return
  }
  ux /= ul
  uy /= ul
  uz /= ul

  var tx = eye[0] - center[0]
  var ty = eye[1] - center[1]
  var tz = eye[2] - center[2]
  var tl = len3(tx, ty, tz)
  if(tl < 1e-6) {
    return
  }
  tx /= tl
  ty /= tl
  tz /= tl

  var right = this.computedRight
  var rx = right[0]
  var ry = right[1]
  var rz = right[2]
  var ru = ux*rx + uy*ry + uz*rz
  rx -= ru * ux
  ry -= ru * uy
  rz -= ru * uz
  var rl = len3(rx, ry, rz)

  if(rl < 0.01) {
    rx = uy * tz - uz * ty
    ry = uz * tx - ux * tz
    rz = ux * ty - uy * tx
    rl = len3(rx, ry, rz)
    if(rl < 1e-6) {
      return
    }
  }
  rx /= rl
  ry /= rl
  rz /= rl

  this.up.set(t, ux, uy, uz)
  this.right.set(t, rx, ry, rz)
  this.center.set(t, center[0], center[1], center[2])
  this.radius.set(t, Math.log(tl))

  var fx = uy * rz - uz * ry
  var fy = uz * rx - ux * rz
  var fz = ux * ry - uy * rx
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  var tu = ux*tx + uy*ty + uz*tz
  var tr = rx*tx + ry*ty + rz*tz
  var tf = fx*tx + fy*ty + fz*tz

  var phi   = Math.asin(clamp1(tu))
  var theta = Math.atan2(tf, tr)

  var angleState = this.angle._state
  var lastTheta  = angleState[angleState.length-1]
  var lastPhi    = angleState[angleState.length-2]
  lastTheta      = lastTheta % (2.0 * Math.PI)
  var dp = Math.abs(lastTheta + 2.0 * Math.PI - theta)
  var d0 = Math.abs(lastTheta - theta)
  var dn = Math.abs(lastTheta - 2.0 * Math.PI - theta)
  if(dp < d0) {
    lastTheta += 2.0 * Math.PI
  }
  if(dn < d0) {
    lastTheta -= 2.0 * Math.PI
  }

  this.angle.jump(this.angle.lastT(), lastTheta, lastPhi)
  this.angle.set(t, theta, phi)
}

function createTurntableController(options) {
  options = options || {}

  var center = options.center || [0,0,0]
  var up     = options.up     || [0,1,0]
  var right  = options.right  || findOrthoPair(up)
  var radius = options.radius || 1.0
  var theta  = options.theta  || 0.0
  var phi    = options.phi    || 0.0

  center = [].slice.call(center, 0, 3)

  up = [].slice.call(up, 0, 3)
  normalize3(up, up)

  right = [].slice.call(right, 0, 3)
  normalize3(right, right)

  if('eye' in options) {
    var eye = options.eye
    var toward = [
      eye[0]-center[0],
      eye[1]-center[1],
      eye[2]-center[2]
    ]
    cross(right, toward, up)
    if(len3(right[0], right[1], right[2]) < 1e-6) {
      right = findOrthoPair(up)
    } else {
      normalize3(right, right)
    }

    radius = len3(toward[0], toward[1], toward[2])

    var ut = dot3(up, toward) / radius
    var rt = dot3(right, toward) / radius
    phi    = Math.acos(ut)
    theta  = Math.acos(rt)
  }

  //Use logarithmic coordinates for radius
  radius = Math.log(radius)

  //Return the controller
  return new TurntableController(
    options.zoomMin,
    options.zoomMax,
    center,
    up,
    right,
    radius,
    theta,
    phi)
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dcubicHermite(p0, v0, p1, v1, t, f) {
  var dh00 = 6*t*t-6*t,
      dh10 = 3*t*t-4*t + 1,
      dh01 = -6*t*t+6*t,
      dh11 = 3*t*t-2*t
  if(p0.length) {
    if(!f) {
      f = new Array(p0.length)
    }
    for(var i=p0.length-1; i>=0; --i) {
      f[i] = dh00*p0[i] + dh10*v0[i] + dh01*p1[i] + dh11*v1[i]
    }
    return f
  }
  return dh00*p0 + dh10*v0 + dh01*p1[i] + dh11*v1
}

function cubicHermite(p0, v0, p1, v1, t, f) {
  var ti  = (t-1), t2 = t*t, ti2 = ti*ti,
      h00 = (1+2*t)*ti2,
      h10 = t*ti2,
      h01 = t2*(3-2*t),
      h11 = t2*ti
  if(p0.length) {
    if(!f) {
      f = new Array(p0.length)
    }
    for(var i=p0.length-1; i>=0; --i) {
      f[i] = h00*p0[i] + h10*v0[i] + h01*p1[i] + h11*v1[i]
    }
    return f
  }
  return h00*p0 + h10*v0 + h01*p1 + h11*v1
}

module.exports = cubicHermite
module.exports.derivative = dcubicHermite

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = rotate;

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < 0.000001) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createOrbitController

var filterVector  = __webpack_require__(13)
var lookAt        = __webpack_require__(17)
var mat4FromQuat  = __webpack_require__(47)
var invert44      = __webpack_require__(4)
var quatFromFrame = __webpack_require__(48)

function len3(x,y,z) {
  return Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2))
}

function len4(w,x,y,z) {
  return Math.sqrt(Math.pow(w,2) + Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2))
}

function normalize4(out, a) {
  var ax = a[0]
  var ay = a[1]
  var az = a[2]
  var aw = a[3]
  var al = len4(ax, ay, az, aw)
  if(al > 1e-6) {
    out[0] = ax/al
    out[1] = ay/al
    out[2] = az/al
    out[3] = aw/al
  } else {
    out[0] = out[1] = out[2] = 0.0
    out[3] = 1.0
  }
}

function OrbitCameraController(initQuat, initCenter, initRadius) {
  this.radius    = filterVector([initRadius])
  this.center    = filterVector(initCenter)
  this.rotation  = filterVector(initQuat)

  this.computedRadius   = this.radius.curve(0)
  this.computedCenter   = this.center.curve(0)
  this.computedRotation = this.rotation.curve(0)
  this.computedUp       = [0.1,0,0]
  this.computedEye      = [0.1,0,0]
  this.computedMatrix   = [0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  this.recalcMatrix(0)
}

var proto = OrbitCameraController.prototype

proto.lastT = function() {
  return Math.max(
    this.radius.lastT(),
    this.center.lastT(),
    this.rotation.lastT())
}

proto.recalcMatrix = function(t) {
  this.radius.curve(t)
  this.center.curve(t)
  this.rotation.curve(t)

  var quat = this.computedRotation
  normalize4(quat, quat)

  var mat = this.computedMatrix
  mat4FromQuat(mat, quat)

  var center = this.computedCenter
  var eye    = this.computedEye
  var up     = this.computedUp
  var radius = Math.exp(this.computedRadius[0])

  eye[0] = center[0] + radius * mat[2]
  eye[1] = center[1] + radius * mat[6]
  eye[2] = center[2] + radius * mat[10]
  up[0] = mat[1]
  up[1] = mat[5]
  up[2] = mat[9]

  for(var i=0; i<3; ++i) {
    var rr = 0.0
    for(var j=0; j<3; ++j) {
      rr += mat[i+4*j] * eye[j]
    }
    mat[12+i] = -rr
  }
}

proto.getMatrix = function(t, result) {
  this.recalcMatrix(t)
  var m = this.computedMatrix
  if(result) {
    for(var i=0; i<16; ++i) {
      result[i] = m[i]
    }
    return result
  }
  return m
}

proto.idle = function(t) {
  this.center.idle(t)
  this.radius.idle(t)
  this.rotation.idle(t)
}

proto.flush = function(t) {
  this.center.flush(t)
  this.radius.flush(t)
  this.rotation.flush(t)
}

proto.pan = function(t, dx, dy, dz) {
  dx = dx || 0.0
  dy = dy || 0.0
  dz = dz || 0.0

  this.recalcMatrix(t)
  var mat = this.computedMatrix

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]
  var ul = len3(ux, uy, uz)
  ux /= ul
  uy /= ul
  uz /= ul

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]
  var ru = rx * ux + ry * uy + rz * uz
  rx -= ux * ru
  ry -= uy * ru
  rz -= uz * ru
  var rl = len3(rx, ry, rz)
  rx /= rl
  ry /= rl
  rz /= rl

  var fx = mat[2]
  var fy = mat[6]
  var fz = mat[10]
  var fu = fx * ux + fy * uy + fz * uz
  var fr = fx * rx + fy * ry + fz * rz
  fx -= fu * ux + fr * rx
  fy -= fu * uy + fr * ry
  fz -= fu * uz + fr * rz
  var fl = len3(fx, fy, fz)
  fx /= fl
  fy /= fl
  fz /= fl

  var vx = rx * dx + ux * dy
  var vy = ry * dx + uy * dy
  var vz = rz * dx + uz * dy

  this.center.move(t, vx, vy, vz)

  //Update z-component of radius
  var radius = Math.exp(this.computedRadius[0])
  radius = Math.max(1e-4, radius + dz)
  this.radius.set(t, Math.log(radius))
}

proto.rotate = function(t, dx, dy, dz) {
  this.recalcMatrix(t)

  dx = dx||0.0
  dy = dy||0.0

  var mat = this.computedMatrix

  var rx = mat[0]
  var ry = mat[4]
  var rz = mat[8]

  var ux = mat[1]
  var uy = mat[5]
  var uz = mat[9]

  var fx = mat[2]
  var fy = mat[6]
  var fz = mat[10]

  var qx = dx * rx + dy * ux
  var qy = dx * ry + dy * uy
  var qz = dx * rz + dy * uz

  var bx = -(fy * qz - fz * qy)
  var by = -(fz * qx - fx * qz)
  var bz = -(fx * qy - fy * qx)  
  var bw = Math.sqrt(Math.max(0.0, 1.0 - Math.pow(bx,2) - Math.pow(by,2) - Math.pow(bz,2)))
  var bl = len4(bx, by, bz, bw)
  if(bl > 1e-6) {
    bx /= bl
    by /= bl
    bz /= bl
    bw /= bl
  } else {
    bx = by = bz = 0.0
    bw = 1.0
  }

  var rotation = this.computedRotation
  var ax = rotation[0]
  var ay = rotation[1]
  var az = rotation[2]
  var aw = rotation[3]

  var cx = ax*bw + aw*bx + ay*bz - az*by
  var cy = ay*bw + aw*by + az*bx - ax*bz
  var cz = az*bw + aw*bz + ax*by - ay*bx
  var cw = aw*bw - ax*bx - ay*by - az*bz
  
  //Apply roll
  if(dz) {
    bx = fx
    by = fy
    bz = fz
    var s = Math.sin(dz) / len3(bx, by, bz)
    bx *= s
    by *= s
    bz *= s
    bw = Math.cos(dx)
    cx = cx*bw + cw*bx + cy*bz - cz*by
    cy = cy*bw + cw*by + cz*bx - cx*bz
    cz = cz*bw + cw*bz + cx*by - cy*bx
    cw = cw*bw - cx*bx - cy*by - cz*bz
  }

  var cl = len4(cx, cy, cz, cw)
  if(cl > 1e-6) {
    cx /= cl
    cy /= cl
    cz /= cl
    cw /= cl
  } else {
    cx = cy = cz = 0.0
    cw = 1.0
  }

  this.rotation.set(t, cx, cy, cz, cw)
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)

  center = center || this.computedCenter
  eye    = eye    || this.computedEye
  up     = up     || this.computedUp

  var mat = this.computedMatrix
  lookAt(mat, eye, center, up)

  var rotation = this.computedRotation
  quatFromFrame(rotation,
    mat[0], mat[1], mat[2],
    mat[4], mat[5], mat[6],
    mat[8], mat[9], mat[10])
  normalize4(rotation, rotation)
  this.rotation.set(t, rotation[0], rotation[1], rotation[2], rotation[3])

  var fl = 0.0
  for(var i=0; i<3; ++i) {
    fl += Math.pow(center[i] - eye[i], 2)
  }
  this.radius.set(t, 0.5 * Math.log(Math.max(fl, 1e-6)))

  this.center.set(t, center[0], center[1], center[2])
}

proto.translate = function(t, dx, dy, dz) {
  this.center.move(t,
    dx||0.0,
    dy||0.0,
    dz||0.0)
}

proto.setMatrix = function(t, matrix) {

  var rotation = this.computedRotation
  quatFromFrame(rotation,
    matrix[0], matrix[1], matrix[2],
    matrix[4], matrix[5], matrix[6],
    matrix[8], matrix[9], matrix[10])
  normalize4(rotation, rotation)
  this.rotation.set(t, rotation[0], rotation[1], rotation[2], rotation[3])

  var mat = this.computedMatrix
  invert44(mat, matrix)
  var w = mat[15]
  if(Math.abs(w) > 1e-6) {
    var cx = mat[12]/w
    var cy = mat[13]/w
    var cz = mat[14]/w

    this.recalcMatrix(t)  
    var r = Math.exp(this.computedRadius[0])
    this.center.set(t, cx-mat[2]*r, cy-mat[6]*r, cz-mat[10]*r)
    this.radius.idle(t)
  } else {
    this.center.idle(t)
    this.radius.idle(t)
  }
}

proto.setDistance = function(t, d) {
  if(d > 0) {
    this.radius.set(t, Math.log(d))
  }
}

proto.setDistanceLimits = function(lo, hi) {
  if(lo > 0) {
    lo = Math.log(lo)
  } else {
    lo = -Infinity    
  }
  if(hi > 0) {
    hi = Math.log(hi)
  } else {
    hi = Infinity
  }
  hi = Math.max(hi, lo)
  this.radius.bounds[0][0] = lo
  this.radius.bounds[1][0] = hi
}

proto.getDistanceLimits = function(out) {
  var bounds = this.radius.bounds
  if(out) {
    out[0] = Math.exp(bounds[0][0])
    out[1] = Math.exp(bounds[1][0])
    return out
  }
  return [ Math.exp(bounds[0][0]), Math.exp(bounds[1][0]) ]
}

proto.toJSON = function() {
  this.recalcMatrix(this.lastT())
  return {
    center:   this.computedCenter.slice(),
    rotation: this.computedRotation.slice(),
    distance: Math.log(this.computedRadius[0]),
    zoomMin:  this.radius.bounds[0][0],
    zoomMax:  this.radius.bounds[1][0]
  }
}

proto.fromJSON = function(options) {
  var t = this.lastT()
  var c = options.center
  if(c) {
    this.center.set(t, c[0], c[1], c[2])
  }
  var r = options.rotation
  if(r) {
    this.rotation.set(t, r[0], r[1], r[2], r[3])
  }
  var d = options.distance
  if(d && d > 0) {
    this.radius.set(t, Math.log(d))
  }
  this.setDistanceLimits(options.zoomMin, options.zoomMax)
}

function createOrbitController(options) {
  options = options || {}
  var center   = options.center   || [0,0,0]
  var rotation = options.rotation || [0,0,0,1]
  var radius   = options.radius   || 1.0

  center = [].slice.call(center, 0, 3)
  rotation = [].slice.call(rotation, 0, 4)
  normalize4(rotation, rotation)

  var result = new OrbitCameraController(
    rotation,
    center,
    Math.log(radius))

  result.setDistanceLimits(options.zoomMin, options.zoomMax)

  if('eye' in options || 'up' in options) {
    result.lookAt(0, options.eye, options.center, options.up)
  }

  return result
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = fromQuat;

/**
 * Creates a matrix from a quaternion rotation.
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = quatFromFrame

function quatFromFrame(
  out,
  rx, ry, rz,
  ux, uy, uz,
  fx, fy, fz) {
  var tr = rx + uy + fz
  if(l > 0) {
    var l = Math.sqrt(tr + 1.0)
    out[0] = 0.5 * (uz - fy) / l
    out[1] = 0.5 * (fx - rz) / l
    out[2] = 0.5 * (ry - uy) / l
    out[3] = 0.5 * l
  } else {
    var tf = Math.max(rx, uy, fz)
    var l = Math.sqrt(2 * tf - tr + 1.0)
    if(rx >= tf) {
      //x y z  order
      out[0] = 0.5 * l
      out[1] = 0.5 * (ux + ry) / l
      out[2] = 0.5 * (fx + rz) / l
      out[3] = 0.5 * (uz - fy) / l
    } else if(uy >= tf) {
      //y z x  order
      out[0] = 0.5 * (ry + ux) / l
      out[1] = 0.5 * l
      out[2] = 0.5 * (fy + uz) / l
      out[3] = 0.5 * (fx - rz) / l
    } else {
      //z x y  order
      out[0] = 0.5 * (rz + fx) / l
      out[1] = 0.5 * (uz + fy) / l
      out[2] = 0.5 * l
      out[3] = 0.5 * (ry - ux) / l
    }
  }
  return out
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bsearch   = __webpack_require__(14)
var m4interp  = __webpack_require__(50)
var invert44  = __webpack_require__(4)
var rotateX   = __webpack_require__(62)
var rotateY   = __webpack_require__(63)
var rotateZ   = __webpack_require__(64)
var lookAt    = __webpack_require__(17)
var translate = __webpack_require__(19)
var scale     = __webpack_require__(21)
var normalize = __webpack_require__(5)

var DEFAULT_CENTER = [0,0,0]

module.exports = createMatrixCameraController

function MatrixCameraController(initialMatrix) {
  this._components    = initialMatrix.slice()
  this._time          = [0]
  this.prevMatrix     = initialMatrix.slice()
  this.nextMatrix     = initialMatrix.slice()
  this.computedMatrix = initialMatrix.slice()
  this.computedInverse = initialMatrix.slice()
  this.computedEye    = [0,0,0]
  this.computedUp     = [0,0,0]
  this.computedCenter = [0,0,0]
  this.computedRadius = [0]
  this._limits        = [-Infinity, Infinity]
}

var proto = MatrixCameraController.prototype

proto.recalcMatrix = function(t) {
  var time = this._time
  var tidx = bsearch.le(time, t)
  var mat = this.computedMatrix
  if(tidx < 0) {
    return
  }
  var comps = this._components
  if(tidx === time.length-1) {
    var ptr = 16*tidx
    for(var i=0; i<16; ++i) {
      mat[i] = comps[ptr++]
    }
  } else {
    var dt = (time[tidx+1] - time[tidx])
    var ptr = 16*tidx
    var prev = this.prevMatrix
    var allEqual = true
    for(var i=0; i<16; ++i) {
      prev[i] = comps[ptr++]
    }
    var next = this.nextMatrix
    for(var i=0; i<16; ++i) {
      next[i] = comps[ptr++]
      allEqual = allEqual && (prev[i] === next[i])
    }
    if(dt < 1e-6 || allEqual) {
      for(var i=0; i<16; ++i) {
        mat[i] = prev[i]
      }
    } else {
      m4interp(mat, prev, next, (t - time[tidx])/dt)
    }
  }

  var up = this.computedUp
  up[0] = mat[1]
  up[1] = mat[5]
  up[2] = mat[9]
  normalize(up, up)

  var imat = this.computedInverse
  invert44(imat, mat)
  var eye = this.computedEye
  var w = imat[15]
  eye[0] = imat[12]/w
  eye[1] = imat[13]/w
  eye[2] = imat[14]/w

  var center = this.computedCenter
  var radius = Math.exp(this.computedRadius[0])
  for(var i=0; i<3; ++i) {
    center[i] = eye[i] - mat[2+4*i] * radius
  }
}

proto.idle = function(t) {
  if(t < this.lastT()) {
    return
  }
  var mc = this._components
  var ptr = mc.length-16
  for(var i=0; i<16; ++i) {
    mc.push(mc[ptr++])
  }
  this._time.push(t)
}

proto.flush = function(t) {
  var idx = bsearch.gt(this._time, t) - 2
  if(idx < 0) {
    return
  }
  this._time.splice(0, idx)
  this._components.splice(0, 16*idx)
}

proto.lastT = function() {
  return this._time[this._time.length-1]
}

proto.lookAt = function(t, eye, center, up) {
  this.recalcMatrix(t)
  eye    = eye || this.computedEye
  center = center || DEFAULT_CENTER
  up     = up || this.computedUp
  this.setMatrix(t, lookAt(this.computedMatrix, eye, center, up))
  var d2 = 0.0
  for(var i=0; i<3; ++i) {
    d2 += Math.pow(center[i] - eye[i], 2)
  }
  d2 = Math.log(Math.sqrt(d2))
  this.computedRadius[0] = d2
}

proto.rotate = function(t, yaw, pitch, roll) {
  this.recalcMatrix(t)
  var mat = this.computedInverse
  if(yaw)   rotateY(mat, mat, yaw)
  if(pitch) rotateX(mat, mat, pitch)
  if(roll)  rotateZ(mat, mat, roll)
  this.setMatrix(t, invert44(this.computedMatrix, mat))
}

var tvec = [0,0,0]

proto.pan = function(t, dx, dy, dz) {
  tvec[0] = -(dx || 0.0)
  tvec[1] = -(dy || 0.0)
  tvec[2] = -(dz || 0.0)
  this.recalcMatrix(t)
  var mat = this.computedInverse
  translate(mat, mat, tvec)
  this.setMatrix(t, invert44(mat, mat))
}

proto.translate = function(t, dx, dy, dz) {
  tvec[0] = dx || 0.0
  tvec[1] = dy || 0.0
  tvec[2] = dz || 0.0
  this.recalcMatrix(t)
  var mat = this.computedMatrix
  translate(mat, mat, tvec)
  this.setMatrix(t, mat)
}

proto.setMatrix = function(t, mat) {
  if(t < this.lastT()) {
    return
  }
  this._time.push(t)
  for(var i=0; i<16; ++i) {
    this._components.push(mat[i])
  }
}

proto.setDistance = function(t, d) {
  this.computedRadius[0] = d
}

proto.setDistanceLimits = function(a,b) {
  var lim = this._limits
  lim[0] = a
  lim[1] = b
}

proto.getDistanceLimits = function(out) {
  var lim = this._limits
  if(out) {
    out[0] = lim[0]
    out[1] = lim[1]
    return out
  }
  return lim
}

function createMatrixCameraController(options) {
  options = options || {}
  var matrix = options.matrix || 
              [1,0,0,0,
               0,1,0,0,
               0,0,1,0,
               0,0,0,1]
  return new MatrixCameraController(matrix)
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var lerp = __webpack_require__(51)

var recompose = __webpack_require__(52)
var decompose = __webpack_require__(55)
var determinant = __webpack_require__(22)
var slerp = __webpack_require__(60)

var state0 = state()
var state1 = state()
var tmp = state()

module.exports = interpolate
function interpolate(out, start, end, alpha) {
    if (determinant(start) === 0 || determinant(end) === 0)
        return false

    //decompose the start and end matrices into individual components
    var r0 = decompose(start, state0.translate, state0.scale, state0.skew, state0.perspective, state0.quaternion)
    var r1 = decompose(end, state1.translate, state1.scale, state1.skew, state1.perspective, state1.quaternion)
    if (!r0 || !r1)
        return false    


    //now lerp/slerp the start and end components into a temporary     lerp(tmptranslate, state0.translate, state1.translate, alpha)
    lerp(tmp.translate, state0.translate, state1.translate, alpha)
    lerp(tmp.skew, state0.skew, state1.skew, alpha)
    lerp(tmp.scale, state0.scale, state1.scale, alpha)
    lerp(tmp.perspective, state0.perspective, state1.perspective, alpha)
    slerp(tmp.quaternion, state0.quaternion, state1.quaternion, alpha)

    //and recompose into our 'out' matrix
    recompose(out, tmp.translate, tmp.scale, tmp.skew, tmp.perspective, tmp.quaternion)
    return true
}

function state() {
    return {
        translate: vec3(),
        scale: vec3(1),
        skew: vec3(),
        perspective: vec4(),
        quaternion: vec4()
    }
}

function vec3(n) {
    return [n||0,n||0,n||0]
}

function vec4() {
    return [0,0,0,1]
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = lerp;

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    out[2] = az + t * (b[2] - az)
    return out
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/*
Input:  translation ; a 3 component vector
        scale       ; a 3 component vector
        skew        ; skew factors XY,XZ,YZ represented as a 3 component vector
        perspective ; a 4 component vector
        quaternion  ; a 4 component vector
Output: matrix      ; a 4x4 matrix

From: http://www.w3.org/TR/css3-transforms/#recomposing-to-a-3d-matrix
*/

var mat4 = {
    identity: __webpack_require__(18),
    translate: __webpack_require__(19),
    multiply: __webpack_require__(53),
    create: __webpack_require__(20),
    scale: __webpack_require__(21),
    fromRotationTranslation: __webpack_require__(54)
}

var rotationMatrix = mat4.create()
var temp = mat4.create()

module.exports = function recomposeMat4(matrix, translation, scale, skew, perspective, quaternion) {
    mat4.identity(matrix)

    //apply translation & rotation
    mat4.fromRotationTranslation(matrix, quaternion, translation)

    //apply perspective
    matrix[3] = perspective[0]
    matrix[7] = perspective[1]
    matrix[11] = perspective[2]
    matrix[15] = perspective[3]
        
    // apply skew
    // temp is a identity 4x4 matrix initially
    mat4.identity(temp)

    if (skew[2] !== 0) {
        temp[9] = skew[2]
        mat4.multiply(matrix, matrix, temp)
    }

    if (skew[1] !== 0) {
        temp[9] = 0
        temp[8] = skew[1]
        mat4.multiply(matrix, matrix, temp)
    }

    if (skew[0] !== 0) {
        temp[8] = 0
        temp[4] = skew[0]
        mat4.multiply(matrix, matrix, temp)
    }

    //apply scale
    mat4.scale(matrix, matrix, scale)
    return matrix
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = fromRotationTranslation;

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/*jshint unused:true*/
/*
Input:  matrix      ; a 4x4 matrix
Output: translation ; a 3 component vector
        scale       ; a 3 component vector
        skew        ; skew factors XY,XZ,YZ represented as a 3 component vector
        perspective ; a 4 component vector
        quaternion  ; a 4 component vector
Returns false if the matrix cannot be decomposed, true if it can


References:
https://github.com/kamicane/matrix3d/blob/master/lib/Matrix3d.js
https://github.com/ChromiumWebApps/chromium/blob/master/ui/gfx/transform_util.cc
http://www.w3.org/TR/css3-transforms/#decomposing-a-3d-matrix
*/

var normalize = __webpack_require__(56)

var create = __webpack_require__(20)
var clone = __webpack_require__(57)
var determinant = __webpack_require__(22)
var invert = __webpack_require__(4)
var transpose = __webpack_require__(58)
var vec3 = {
    length: __webpack_require__(59),
    normalize: __webpack_require__(5),
    dot: __webpack_require__(16),
    cross: __webpack_require__(15)
}

var tmp = create()
var perspectiveMatrix = create()
var tmpVec4 = [0, 0, 0, 0]
var row = [ [0,0,0], [0,0,0], [0,0,0] ]
var pdum3 = [0,0,0]

module.exports = function decomposeMat4(matrix, translation, scale, skew, perspective, quaternion) {
    if (!translation) translation = [0,0,0]
    if (!scale) scale = [0,0,0]
    if (!skew) skew = [0,0,0]
    if (!perspective) perspective = [0,0,0,1]
    if (!quaternion) quaternion = [0,0,0,1]

    //normalize, if not possible then bail out early
    if (!normalize(tmp, matrix))
        return false

    // perspectiveMatrix is used to solve for perspective, but it also provides
    // an easy way to test for singularity of the upper 3x3 component.
    clone(perspectiveMatrix, tmp)

    perspectiveMatrix[3] = 0
    perspectiveMatrix[7] = 0
    perspectiveMatrix[11] = 0
    perspectiveMatrix[15] = 1

    // If the perspectiveMatrix is not invertible, we are also unable to
    // decompose, so we'll bail early. Constant taken from SkMatrix44::invert.
    if (Math.abs(determinant(perspectiveMatrix) < 1e-8))
        return false

    var a03 = tmp[3], a13 = tmp[7], a23 = tmp[11],
            a30 = tmp[12], a31 = tmp[13], a32 = tmp[14], a33 = tmp[15]

    // First, isolate perspective.
    if (a03 !== 0 || a13 !== 0 || a23 !== 0) {
        tmpVec4[0] = a03
        tmpVec4[1] = a13
        tmpVec4[2] = a23
        tmpVec4[3] = a33

        // Solve the equation by inverting perspectiveMatrix and multiplying
        // rightHandSide by the inverse.
        // resuing the perspectiveMatrix here since it's no longer needed
        var ret = invert(perspectiveMatrix, perspectiveMatrix)
        if (!ret) return false
        transpose(perspectiveMatrix, perspectiveMatrix)

        //multiply by transposed inverse perspective matrix, into perspective vec4
        vec4multMat4(perspective, tmpVec4, perspectiveMatrix)
    } else { 
        //no perspective
        perspective[0] = perspective[1] = perspective[2] = 0
        perspective[3] = 1
    }

    // Next take care of translation
    translation[0] = a30
    translation[1] = a31
    translation[2] = a32

    // Now get scale and shear. 'row' is a 3 element array of 3 component vectors
    mat3from4(row, tmp)

    // Compute X scale factor and normalize first row.
    scale[0] = vec3.length(row[0])
    vec3.normalize(row[0], row[0])

    // Compute XY shear factor and make 2nd row orthogonal to 1st.
    skew[0] = vec3.dot(row[0], row[1])
    combine(row[1], row[1], row[0], 1.0, -skew[0])

    // Now, compute Y scale and normalize 2nd row.
    scale[1] = vec3.length(row[1])
    vec3.normalize(row[1], row[1])
    skew[0] /= scale[1]

    // Compute XZ and YZ shears, orthogonalize 3rd row
    skew[1] = vec3.dot(row[0], row[2])
    combine(row[2], row[2], row[0], 1.0, -skew[1])
    skew[2] = vec3.dot(row[1], row[2])
    combine(row[2], row[2], row[1], 1.0, -skew[2])

    // Next, get Z scale and normalize 3rd row.
    scale[2] = vec3.length(row[2])
    vec3.normalize(row[2], row[2])
    skew[1] /= scale[2]
    skew[2] /= scale[2]


    // At this point, the matrix (in rows) is orthonormal.
    // Check for a coordinate system flip.  If the determinant
    // is -1, then negate the matrix and the scaling factors.
    vec3.cross(pdum3, row[1], row[2])
    if (vec3.dot(row[0], pdum3) < 0) {
        for (var i = 0; i < 3; i++) {
            scale[i] *= -1;
            row[i][0] *= -1
            row[i][1] *= -1
            row[i][2] *= -1
        }
    }

    // Now, get the rotations out
    quaternion[0] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] - row[1][1] - row[2][2], 0))
    quaternion[1] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] + row[1][1] - row[2][2], 0))
    quaternion[2] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] - row[1][1] + row[2][2], 0))
    quaternion[3] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] + row[1][1] + row[2][2], 0))

    if (row[2][1] > row[1][2])
        quaternion[0] = -quaternion[0]
    if (row[0][2] > row[2][0])
        quaternion[1] = -quaternion[1]
    if (row[1][0] > row[0][1])
        quaternion[2] = -quaternion[2]
    return true
}

//will be replaced by gl-vec4 eventually
function vec4multMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}

//gets upper-left of a 4x4 matrix into a 3x3 of vectors
function mat3from4(out, mat4x4) {
    out[0][0] = mat4x4[0]
    out[0][1] = mat4x4[1]
    out[0][2] = mat4x4[2]
    
    out[1][0] = mat4x4[4]
    out[1][1] = mat4x4[5]
    out[1][2] = mat4x4[6]

    out[2][0] = mat4x4[8]
    out[2][1] = mat4x4[9]
    out[2][2] = mat4x4[10]
}

function combine(out, a, b, scale1, scale2) {
    out[0] = a[0] * scale1 + b[0] * scale2
    out[1] = a[1] * scale1 + b[1] * scale2
    out[2] = a[2] * scale1 + b[2] * scale2
}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function normalize(out, mat) {
    var m44 = mat[15]
    // Cannot normalize.
    if (m44 === 0) 
        return false
    var scale = 1 / m44
    for (var i=0; i<16; i++)
        out[i] = mat[i] * scale
    return true
}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = clone;

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
    var out = new Float32Array(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = transpose;

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61)

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = slerp

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp (out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = b[0], by = b[1], bz = b[2], bw = b[3]

  var omega, cosom, sinom, scale0, scale1

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom
    bx = -bx
    by = -by
    bz = -bz
    bw = -bw
  }
  // calculate coefficients
  if ((1.0 - cosom) > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom)
    sinom = Math.sin(omega)
    scale0 = Math.sin((1.0 - t) * omega) / sinom
    scale1 = Math.sin(t * omega) / sinom
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t
    scale1 = t
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx
  out[1] = scale0 * ay + scale1 * by
  out[2] = scale0 * az + scale1 * bz
  out[3] = scale0 * aw + scale1 * bw

  return out
}


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = rotateX;

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = rotateY;

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = rotateZ;

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = mouseListen

var mouse = __webpack_require__(66)

function mouseListen (element, callback) {
  if (!callback) {
    callback = element
    element = window
  }

  var buttonState = 0
  var x = 0
  var y = 0
  var mods = {
    shift: false,
    alt: false,
    control: false,
    meta: false
  }
  var attached = false

  function updateMods (ev) {
    var changed = false
    if ('altKey' in ev) {
      changed = changed || ev.altKey !== mods.alt
      mods.alt = !!ev.altKey
    }
    if ('shiftKey' in ev) {
      changed = changed || ev.shiftKey !== mods.shift
      mods.shift = !!ev.shiftKey
    }
    if ('ctrlKey' in ev) {
      changed = changed || ev.ctrlKey !== mods.control
      mods.control = !!ev.ctrlKey
    }
    if ('metaKey' in ev) {
      changed = changed || ev.metaKey !== mods.meta
      mods.meta = !!ev.metaKey
    }
    return changed
  }

  function handleEvent (nextButtons, ev) {
    var nextX = mouse.x(ev)
    var nextY = mouse.y(ev)
    if ('buttons' in ev) {
      nextButtons = ev.buttons | 0
    }
    if (nextButtons !== buttonState ||
      nextX !== x ||
      nextY !== y ||
      updateMods(ev)) {
      buttonState = nextButtons | 0
      x = nextX || 0
      y = nextY || 0
      callback && callback(buttonState, x, y, mods)
    }
  }

  function clearState (ev) {
    handleEvent(0, ev)
  }

  function handleBlur () {
    if (buttonState ||
      x ||
      y ||
      mods.shift ||
      mods.alt ||
      mods.meta ||
      mods.control) {
      x = y = 0
      buttonState = 0
      mods.shift = mods.alt = mods.control = mods.meta = false
      callback && callback(0, 0, 0, mods)
    }
  }

  function handleMods (ev) {
    if (updateMods(ev)) {
      callback && callback(buttonState, x, y, mods)
    }
  }

  function handleMouseMove (ev) {
    if (mouse.buttons(ev) === 0) {
      handleEvent(0, ev)
    } else {
      handleEvent(buttonState, ev)
    }
  }

  function handleMouseDown (ev) {
    handleEvent(buttonState | mouse.buttons(ev), ev)
  }

  function handleMouseUp (ev) {
    handleEvent(buttonState & ~mouse.buttons(ev), ev)
  }

  function attachListeners () {
    if (attached) {
      return
    }
    attached = true

    element.addEventListener('mousemove', handleMouseMove)

    element.addEventListener('mousedown', handleMouseDown)

    element.addEventListener('mouseup', handleMouseUp)

    element.addEventListener('mouseleave', clearState)
    element.addEventListener('mouseenter', clearState)
    element.addEventListener('mouseout', clearState)
    element.addEventListener('mouseover', clearState)

    element.addEventListener('blur', handleBlur)

    element.addEventListener('keyup', handleMods)
    element.addEventListener('keydown', handleMods)
    element.addEventListener('keypress', handleMods)

    if (element !== window) {
      window.addEventListener('blur', handleBlur)

      window.addEventListener('keyup', handleMods)
      window.addEventListener('keydown', handleMods)
      window.addEventListener('keypress', handleMods)
    }
  }

  function detachListeners () {
    if (!attached) {
      return
    }
    attached = false

    element.removeEventListener('mousemove', handleMouseMove)

    element.removeEventListener('mousedown', handleMouseDown)

    element.removeEventListener('mouseup', handleMouseUp)

    element.removeEventListener('mouseleave', clearState)
    element.removeEventListener('mouseenter', clearState)
    element.removeEventListener('mouseout', clearState)
    element.removeEventListener('mouseover', clearState)

    element.removeEventListener('blur', handleBlur)

    element.removeEventListener('keyup', handleMods)
    element.removeEventListener('keydown', handleMods)
    element.removeEventListener('keypress', handleMods)

    if (element !== window) {
      window.removeEventListener('blur', handleBlur)

      window.removeEventListener('keyup', handleMods)
      window.removeEventListener('keydown', handleMods)
      window.removeEventListener('keypress', handleMods)
    }
  }

  // Attach listeners
  attachListeners()

  var result = {
    element: element
  }

  Object.defineProperties(result, {
    enabled: {
      get: function () { return attached },
      set: function (f) {
        if (f) {
          attachListeners()
        } else {
          detachListeners()
        }
      },
      enumerable: true
    },
    buttons: {
      get: function () { return buttonState },
      enumerable: true
    },
    x: {
      get: function () { return x },
      enumerable: true
    },
    y: {
      get: function () { return y },
      enumerable: true
    },
    mods: {
      get: function () { return mods },
      enumerable: true
    }
  })

  return result
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function mouseButtons(ev) {
  if(typeof ev === 'object') {
    if('buttons' in ev) {
      return ev.buttons
    } else if('which' in ev) {
      var b = ev.which
      if(b === 2) {
        return 4
      } else if(b === 3) {
        return 2
      } else if(b > 0) {
        return 1<<(b-1)
      }
    } else if('button' in ev) {
      var b = ev.button
      if(b === 1) {
        return 4
      } else if(b === 2) {
        return 2
      } else if(b >= 0) {
        return 1<<b
      }
    }
  }
  return 0
}
exports.buttons = mouseButtons

function mouseElement(ev) {
  return ev.target || ev.srcElement || window
}
exports.element = mouseElement

function mouseRelativeX(ev) {
  if(typeof ev === 'object') {
    if('offsetX' in ev) {
      return ev.offsetX
    }
    var target = mouseElement(ev)
    var bounds = target.getBoundingClientRect()
    return ev.clientX - bounds.left
  }
  return 0
}
exports.x = mouseRelativeX

function mouseRelativeY(ev) {
  if(typeof ev === 'object') {
    if('offsetY' in ev) {
      return ev.offsetY
    }
    var target = mouseElement(ev)
    var bounds = target.getBoundingClientRect()
    return ev.clientY - bounds.top
  }
  return 0
}
exports.y = mouseRelativeY


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPX = __webpack_require__(68)

module.exports = mouseWheelListen

function mouseWheelListen(element, callback, noScroll) {
  if(typeof element === 'function') {
    noScroll = !!callback
    callback = element
    element = window
  }
  var lineHeight = toPX('ex', element)
  var listener = function(ev) {
    if(noScroll) {
      ev.preventDefault()
    }
    var dx = ev.deltaX || 0
    var dy = ev.deltaY || 0
    var dz = ev.deltaZ || 0
    var mode = ev.deltaMode
    var scale = 1
    switch(mode) {
      case 1:
        scale = lineHeight
      break
      case 2:
        scale = window.innerHeight
      break
    }
    dx *= scale
    dy *= scale
    dz *= scale
    if(dx || dy || dz) {
      return callback(dx, dy, dz, ev)
    }
  }
  element.addEventListener('wheel', listener)
  return listener
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseUnit = __webpack_require__(69)

module.exports = toPX

var PIXELS_PER_INCH = getSizeBrutal('in', document.body) // 96


function getPropertyInPX(element, prop) {
  var parts = parseUnit(getComputedStyle(element).getPropertyValue(prop))
  return parts[0] * toPX(parts[1], element)
}

//This brutal hack is needed
function getSizeBrutal(unit, element) {
  var testDIV = document.createElement('div')
  testDIV.style['height'] = '128' + unit
  element.appendChild(testDIV)
  var size = getPropertyInPX(testDIV, 'height') / 128
  element.removeChild(testDIV)
  return size
}

function toPX(str, element) {
  if (!str) return null

  element = element || document.body
  str = (str + '' || 'px').trim().toLowerCase()
  if(element === window || element === document) {
    element = document.body
  }

  switch(str) {
    case '%':  //Ambiguous, not sure if we should use width or height
      return element.clientHeight / 100.0
    case 'ch':
    case 'ex':
      return getSizeBrutal(str, element)
    case 'em':
      return getPropertyInPX(element, 'font-size')
    case 'rem':
      return getPropertyInPX(document.body, 'font-size')
    case 'vw':
      return window.innerWidth/100
    case 'vh':
      return window.innerHeight/100
    case 'vmin':
      return Math.min(window.innerWidth, window.innerHeight) / 100
    case 'vmax':
      return Math.max(window.innerWidth, window.innerHeight) / 100
    case 'in':
      return PIXELS_PER_INCH
    case 'cm':
      return PIXELS_PER_INCH / 2.54
    case 'mm':
      return PIXELS_PER_INCH / 25.4
    case 'pt':
      return PIXELS_PER_INCH / 72
    case 'pc':
      return PIXELS_PER_INCH / 6
    case 'px':
      return 1
  }

  // detect number of units
  var parts = parseUnit(str)
  if (!isNaN(parts[0]) && parts[1]) {
    var px = toPX(parts[1], element)
    return typeof px === 'number' ? parts[0] * px : null
  }

  return null
}


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function parseUnit(str, out) {
    if (!out)
        out = [ 0, '' ]

    str = String(str)
    var num = parseFloat(str, 10)
    out[0] = num
    out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || ''
    return out
}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

var rootPosition = { left: 0, top: 0 }

module.exports = mouseEventOffset
function mouseEventOffset (ev, target, out) {
  target = target || ev.currentTarget || ev.srcElement
  if (!Array.isArray(out)) {
    out = [ 0, 0 ]
  }
  var cx = ev.clientX || 0
  var cy = ev.clientY || 0
  var rect = getBoundingClientOffset(target)
  out[0] = cx - rect.left
  out[1] = cy - rect.top
  return out
}

function getBoundingClientOffset (element) {
  if (element === window ||
      element === document ||
      element === document.body) {
    return rootPosition
  } else {
    return element.getBoundingClientRect()
  }
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isBrowser = __webpack_require__(72)

function detect() {
	var supported = false

	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function() {
				supported = true
			}
		})

		window.addEventListener('test', null, opts)
		window.removeEventListener('test', null, opts)
	} catch(e) {
		supported = false
	}

	return supported
}

module.exports = isBrowser && detect()


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(2);


var activeProgram = null;
class Shader {
    constructor(type, source) {
        this.shader = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].createShader(type);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].shaderSource(this.shader, source);
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].compileShader(this.shader);
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getShaderParameter(this.shader, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].COMPILE_STATUS)) {
            throw __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getShaderInfoLog(this.shader);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Shader;

;
class ShaderProgram {
    constructor(shaders) {
        this.prog = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].createProgram();
        for (let shader of shaders) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].attachShader(this.prog, shader.shader);
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].linkProgram(this.prog);
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getProgramParameter(this.prog, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].LINK_STATUS)) {
            throw __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getProgramInfoLog(this.prog);
        }
        this.attrPos = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_Pos");
        this.attrCol = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_Col");
        this.attrNor = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_Nor");
        this.attrTranslate = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_Translate");
        this.attrUV = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_UV");
        this.attrForward = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_Forward");
        this.attrDepth = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_Depth");
        this.attrRotQuat = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_RotQuat");
        this.attrRoadLength = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_RoadLength");
        this.attrRoadWidth = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getAttribLocation(this.prog, "vs_RoadWidth");
        this.unifModel = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_Model");
        this.unifModelInvTr = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_ModelInvTr");
        this.unifViewProj = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_ViewProj");
        this.unifCameraAxes = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_CameraAxes");
        this.unifTime = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_Time");
        this.unifEye = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_Eye");
        this.unifRef = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_Ref");
        this.unifUp = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_Up");
        this.unifDimensions = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].getUniformLocation(this.prog, "u_Dimensions");
    }
    use() {
        if (activeProgram !== this.prog) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].useProgram(this.prog);
            activeProgram = this.prog;
        }
    }
    setEyeRefUp(eye, ref, up) {
        this.use();
        if (this.unifEye !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniform3f(this.unifEye, eye[0], eye[1], eye[2]);
        }
        if (this.unifRef !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniform3f(this.unifRef, ref[0], ref[1], ref[2]);
        }
        if (this.unifUp !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniform3f(this.unifUp, up[0], up[1], up[2]);
        }
    }
    setDimensions(width, height) {
        this.use();
        if (this.unifDimensions !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniform2f(this.unifDimensions, width, height);
        }
    }
    setModelMatrix(model) {
        this.use();
        if (this.unifModel !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniformMatrix4fv(this.unifModel, false, model);
        }
        if (this.unifModelInvTr !== -1) {
            let modelinvtr = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].transpose(modelinvtr, model);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].invert(modelinvtr, modelinvtr);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniformMatrix4fv(this.unifModelInvTr, false, modelinvtr);
        }
    }
    setViewProjMatrix(vp) {
        this.use();
        if (this.unifViewProj !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniformMatrix4fv(this.unifViewProj, false, vp);
        }
    }
    setCameraAxes(axes) {
        this.use();
        if (this.unifCameraAxes !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniformMatrix3fv(this.unifCameraAxes, false, axes);
        }
    }
    setTime(t) {
        this.use();
        if (this.unifTime !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].uniform1f(this.unifTime, t);
        }
    }
    draw(d) {
        this.use();
        if (this.attrPos != -1 && d.bindPos()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrPos);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrPos, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrPos, 0); // Advance 0 index in pos VBO for each vertex
        }
        if (this.attrNor != -1 && d.bindNor()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrNor);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrNor, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrNor, 0); // Advance 0 index in nor VBO for each vertex
        }
        if (this.attrCol != -1 && d.bindCol()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrCol);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrCol, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrCol, 0); // Advance 1 index in col VBO for each drawn instance
        }
        if (this.attrUV != -1 && d.bindUV()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrUV);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrUV, 2, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrUV, 0);
        }
        if (this.attrTranslate != -1 && d.bindTranslate()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrTranslate);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrTranslate, 3, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrTranslate, 1); // Advance 1 index in translate VBO for each drawn instance
        }
        if (this.attrForward != -1 && d.bindForward()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrForward);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrForward, 3, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrForward, 1);
        }
        if (this.attrDepth != -1 && d.bindDepth()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrDepth);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrDepth, 1, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrDepth, 1);
        }
        if (this.attrRotQuat != -1 && d.bindRotQuat()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrRotQuat);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrRotQuat, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrRotQuat, 1);
        }
        if (this.attrRoadLength != -1 && d.bindRoadLength()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrRoadLength);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrRoadLength, 1, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrRoadLength, 1);
        }
        if (this.attrRoadWidth != -1 && d.bindRoadWidth()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].enableVertexAttribArray(this.attrRoadWidth);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribPointer(this.attrRoadWidth, 1, __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].vertexAttribDivisor(this.attrRoadWidth, 1);
        }
        d.bindIdx();
        // drawElementsInstanced uses the vertexAttribDivisor for each "in" variable to
        // determine how to link it to each drawn instance of the bound VBO.
        // For example, the index used to look in the VBO associated with
        // vs_Pos (attrPos) is advanced by 1 for each thread of the GPU running the
        // vertex shader since its divisor is 0.
        // On the other hand, the index used to look in the VBO associated with
        // vs_Translate (attrTranslate) is advanced by 1 only when the next instance
        // of our drawn object (in the base code example, the square) is processed
        // by the GPU, thus being the same value for the first set of four vertices,
        // then advancing to a new value for the next four, then the next four, and
        // so on.
        __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].drawElementsInstanced(d.drawMode(), d.elemCount(), __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].UNSIGNED_INT, 0, d.numInstances);
        if (this.attrPos != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].disableVertexAttribArray(this.attrPos);
        if (this.attrNor != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].disableVertexAttribArray(this.attrNor);
        if (this.attrCol != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].disableVertexAttribArray(this.attrCol);
        if (this.attrTranslate != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].disableVertexAttribArray(this.attrTranslate);
        if (this.attrUV != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].disableVertexAttribArray(this.attrUV);
        if (this.attrForward != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].disableVertexAttribArray(this.attrForward);
        if (this.attrDepth != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].disableVertexAttribArray(this.attrDepth);
        if (this.attrRotQuat != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* gl */].disableVertexAttribArray(this.attrRotQuat);
    }
}
;
/* harmony default export */ __webpack_exports__["b"] = (ShaderProgram);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ExpansionRule__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DrawingRule__ = __webpack_require__(76);


// arrays to store sacle, pos, rot
class LSystem {
    constructor() {
        this.expansionRule = new __WEBPACK_IMPORTED_MODULE_0__ExpansionRule__["a" /* default */]();
        this.drawingRule = new __WEBPACK_IMPORTED_MODULE_1__DrawingRule__["a" /* default */]();
        this.initStr = 'FX';
        this.iter = 3;
        this.posArray = new Array();
        this.rotArray = new Array();
        this.depthArray = new Array();
        this.fPosArray = new Array();
        this.fRotArray = new Array();
        this.fDepthArray = new Array();
        // this.expansionRule.addRule('F', 'FF<[+F-F]>[,F.F]+[>F<F]-[.F,F]');
        // this.expansionRule.addRule('F', 'FF,[,F.F].[,F.F]');
        // this.expansionRule.addRule('F', 'FF>[+FF]F');
        // this.expansionRule.addRule('F', 'FF>[+F-F]>[+F-F]');
        this.expansionRule.addRule('F', 'FF>[+F-F*]>[,F.F*]+[+F-F]>[.F,F]>');
        this.expansionRule.addRule('X', 'F<<<<[,F.F]+[+F-F]<<<[.F,F]<<<');
        // no problem, y axis shouldn't have any effects
        // this.expansionRule.addRule('F', 'FF<[<F>F]>[<F>F]');
        // this.expansionRule.addRule('X', 'FF+[+F]+[-F]');
        this.compute();
    }
    setIter(iter_in) {
        this.iter = iter_in;
    }
    setInitString(str_in) {
        this.initStr = str_in;
    }
    compute() {
        // clear before use
        this.finalStr = "";
        this.finalStr = this.expansionRule.process(this.initStr, this.iter);
        // console.log(this.finalStr);
        // clean all the arrays first
        // clear branch
        this.posArray.length = 0;
        this.rotArray.length = 0;
        this.depthArray.length = 0;
        // clear flower
        this.fPosArray.length = 0;
        this.fRotArray.length = 0;
        this.fDepthArray.length = 0;
        this.drawingRule.processAndFillArray(this.finalStr, this.posArray, this.rotArray, this.depthArray, this.fPosArray, this.fRotArray, this.fDepthArray);
        // console.log(this.posArray);
        // console.log(this.rotArray);
        // console.log(this.depthArray);
        // console.log(this.fPosArray);
        // console.log(this.fRotArray);
        // console.log(this.fDepthArray);
    }
}
/* harmony default export */ __webpack_exports__["a"] = (LSystem);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ExpansionRule {
    constructor() {
        this.ruleMap = new Map();
    }
    clearRule() {
        this.ruleMap.clear();
    }
    addRule(key, val) {
        this.ruleMap.set(key, val);
    }
    process(strIn, iter) {
        let str = strIn;
        for (var i = 0; i < iter; ++i) {
            let strT = "";
            for (var j = 0; j < str.length; ++j) {
                let curChar = str.substring(j, j + 1);
                if (this.ruleMap.has(curChar)) {
                    strT += this.ruleMap.get(curChar);
                }
                else {
                    strT += curChar;
                }
            }
            str = strT;
        }
        return str;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (ExpansionRule);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Turtle__ = __webpack_require__(77);


class DrawingRule {
    constructor() {
        this.posArray = new Array();
        this.rotArray = new Array();
        this.depthArray = new Array();
        this.fPosArray = new Array();
        this.fRotArray = new Array();
        this.fDepthArray = new Array();
        this.stackT = new Array();
        this.rules = new Map();
        this.forwardStep = 2;
        this.xRot = 30;
        this.xRotRandom = 5;
        this.yRot = 5;
        this.yRotRandom = 5;
        this.zRot = 36;
        this.zRotRandom = 5;
        this.scalingFactor = 0.5;
        this.rules.set('F', goForward.bind(this));
        this.rules.set('[', pushTurtle.bind(this));
        this.rules.set(']', popTurtle.bind(this));
        this.rules.set('+', rotX.bind(this));
        this.rules.set('-', rotX_.bind(this));
        this.rules.set('<', rotY.bind(this));
        this.rules.set('>', rotY_.bind(this));
        this.rules.set(',', rotZ.bind(this));
        this.rules.set('.', rotZ_.bind(this));
        this.rules.set('*', addFlower.bind(this));
    }
    processAndFillArray(str, posArray_, rotArray_, depthArray_, fPosArray_, fRotArray_, fDepthArray_) {
        let identityMat4 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create(); // used to construct a new turtle
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(identityMat4);
        this.turtle = new __WEBPACK_IMPORTED_MODULE_1__Turtle__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(0.0, 0.0, 0.0), // pos
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].fromValues(0.0, 1.0, 0.0, 0.0), // forward
        identityMat4, // rot mat
        0); // depth
        // branches
        this.posArray.length = 0;
        this.rotArray.length = 0;
        this.depthArray.length = 0;
        // flowers
        this.fPosArray.length = 0;
        this.fRotArray.length = 0;
        this.fDepthArray.length = 0;
        // stack
        this.stackT.length = 0;
        for (var i = 0; i < str.length; ++i) {
            let curChar = str.substring(i, i + 1);
            // console.log("processing: " + curChar);
            let func = this.rules.get(curChar);
            if (func) { // Check that the map contains a value for this key
                func();
            }
        }
        // branches
        posArray_.push.apply(posArray_, this.posArray);
        rotArray_.push.apply(rotArray_, this.rotArray);
        depthArray_.push.apply(depthArray_, this.depthArray);
        // flowers
        fPosArray_.push.apply(fPosArray_, this.fPosArray);
        fRotArray_.push.apply(fRotArray_, this.fRotArray);
        fDepthArray_.push.apply(fDepthArray_, this.fDepthArray);
    }
}
function rotX() {
    this.turtle.rotXDeg(this.xRot + getRandRange(this.xRotRandom));
}
function rotX_() {
    this.turtle.rotXDeg(-this.xRot + getRandRange(this.xRotRandom));
}
function rotY() {
    this.turtle.rotYDeg(this.yRot) + getRandRange(this.yRotRandom);
}
function rotY_() {
    this.turtle.rotYDeg(-this.yRot + getRandRange(this.yRotRandom));
}
function rotZ() {
    this.turtle.rotZDeg(this.zRot + getRandRange(this.zRotRandom));
}
function rotZ_() {
    this.turtle.rotZDeg(-this.zRot + getRandRange(this.zRotRandom));
}
function getRandRange(rand) {
    return 2 * Math.random() * rand - rand;
}
function addFlower() {
    this.fPosArray.push(this.turtle.pos[0]);
    this.fPosArray.push(this.turtle.pos[1]);
    this.fPosArray.push(this.turtle.pos[2]);
    let curRot = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].create();
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].getRotation(curRot, this.turtle.rotMat);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].normalize(curRot, curRot);
    this.fRotArray.push(curRot[0]);
    this.fRotArray.push(curRot[1]);
    this.fRotArray.push(curRot[2]);
    this.fRotArray.push(curRot[3]);
    this.fDepthArray.push(this.turtle.depth);
}
function goForward() {
    this.posArray.push(this.turtle.pos[0]);
    this.posArray.push(this.turtle.pos[1]);
    this.posArray.push(this.turtle.pos[2]);
    let curRot = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].create();
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].getRotation(curRot, this.turtle.rotMat);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].normalize(curRot, curRot);
    this.rotArray.push(curRot[0]);
    this.rotArray.push(curRot[1]);
    this.rotArray.push(curRot[2]);
    this.rotArray.push(curRot[3]);
    this.depthArray.push(this.turtle.depth);
    this.turtle.goForward(this.forwardStep);
}
function pushTurtle() {
    this.stackT.push(__WEBPACK_IMPORTED_MODULE_1__Turtle__["a" /* default */].create(this.turtle));
    this.turtle.increaseDepth();
}
function popTurtle() {
    this.turtle = this.stackT[this.stackT.length - 1];
    this.stackT.pop();
}
/* harmony default export */ __webpack_exports__["a"] = (DrawingRule);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);

class Turtle {
    constructor(position_, forward_, rotMat_, depth_) {
        this.pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.forward = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].create();
        this.rotMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.depth = 0;
        this.pos = position_;
        this.depth = depth_;
        this.forward = forward_;
        this.rotMat = rotMat_;
    }
    static create(turtle) {
        return new Turtle(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].clone(turtle.pos), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].clone(turtle.forward), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].clone(turtle.rotMat), turtle.depth);
    }
    goForward(step) {
        this.pos[0] += step * this.forward[0];
        this.pos[1] += step * this.forward[1];
        this.pos[2] += step * this.forward[2];
    }
    testFunc() {
        this.pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(999, 998, 997);
    }
    rotDeg(deg, axis) {
        let curAixs = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].transformMat4(curAixs, axis, this.rotMat);
        let curAixs3 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(curAixs[0], curAixs[1], curAixs[2]);
        let curRotMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].fromRotation(curRotMat, Turtle.R2D * deg, curAixs3);
        // update forward direction
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].transformMat4(this.forward, this.forward, curRotMat);
        // update member rotation mat using this transform mat
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].multiply(this.rotMat, curRotMat, this.rotMat);
    }
    rotXDeg(deg) {
        this.rotDeg(deg, Turtle.xDir);
    }
    rotYDeg(deg) {
        this.rotDeg(deg, Turtle.yDir);
    }
    rotZDeg(deg) {
        this.rotDeg(deg, Turtle.zDir);
    }
    increaseDepth() {
        ++this.depth;
    }
}
// axises used to construct certain rot mat
// usage xDir -> curXDir -> curRotMat
Turtle.xDir = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].fromValues(1.0, 0.0, 0.0, 0.0);
Turtle.yDir = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].fromValues(0.0, 1.0, 0.0, 0.0);
Turtle.zDir = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].fromValues(0.0, 0.0, 1.0, 0.0);
Turtle.R2D = 0.0174533;
/* harmony default export */ __webpack_exports__["a"] = (Turtle);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader__);




class Mesh extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor(objString, center) {
        super(); // Call the constructor of the super class. This is required.
        this.center = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["f" /* vec4 */].fromValues(center[0], center[1], center[2], 1);
        this.objString = objString;
    }
    create() {
        let posTemp = [];
        let norTemp = [];
        let uvsTemp = [];
        let idxTemp = [];
        var loadedMesh = new __WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader__["Mesh"](this.objString);
        //posTemp = loadedMesh.vertices;
        for (var i = 0; i < loadedMesh.vertices.length; i++) {
            posTemp.push(loadedMesh.vertices[i]);
            // loadedMesh only has v3 pos, so push 1.0
            if (i % 3 == 2)
                posTemp.push(1.0);
        }
        for (var i = 0; i < loadedMesh.vertexNormals.length; i++) {
            norTemp.push(loadedMesh.vertexNormals[i]);
            // loadedMesh only has v3 normal, so push 0.0
            if (i % 3 == 2)
                norTemp.push(0.0);
        }
        // for (var i = 0; i < norTemp.length; i = i + 4) {
        //   console.log(norTemp[i] + " " + norTemp[i+1] + " " + norTemp[i+2] + " " + norTemp[i+3]);
        // }
        uvsTemp = loadedMesh.textures;
        idxTemp = loadedMesh.indices;
        // white vert color for now
        this.colors = new Float32Array(posTemp.length);
        for (var i = 0; i < posTemp.length; ++i) {
            this.colors[i] = 1.0;
        }
        this.indices = new Uint32Array(idxTemp);
        this.normals = new Float32Array(norTemp);
        this.positions = new Float32Array(posTemp);
        this.uvs = new Float32Array(uvsTemp);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateUV();
        this.generateCol();
        // instanced
        this.generateTranslate();
        this.generateDepth();
        this.generateRotMat();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufUV);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.uvs, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        console.log(`Created Mesh from OBJ`);
        this.objString = ""; // hacky clear
    }
    setInstanceVBOs(translates, rotMats, depths) {
        this.translates = translates;
        this.rotQuats = rotMats;
        this.depths = depths;
        // translation
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufTranslate);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.translates, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        // rotation quat
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufRotQuat);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.rotQuats, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        // recursion depth
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufDepth);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.depths, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Mesh);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("OBJ",[],t):"object"==typeof exports?exports.OBJ=t():e.OBJ=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(exports,e,r){t.o(exports,e)||Object.defineProperty(exports,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(e,exports,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){switch(e){case"BYTE":case"UNSIGNED_BYTE":return 1;case"SHORT":case"UNSIGNED_SHORT":return 2;case"FLOAT":return 4}}Object.defineProperty(exports,"__esModule",{value:!0});var n=exports.Layout=function e(){r(this,e);for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];this.attributes=a;var s=0,l=0,o=!0,u=!1,c=void 0;try{for(var f,h=a[Symbol.iterator]();!(o=(f=h.next()).done);o=!0){var p=f.value;if(this[p.key])throw new i(p);s%p.sizeOfType!=0&&(s+=p.sizeOfType-s%p.sizeOfType),this[p.key]={attribute:p,size:p.size,type:p.type,normalized:p.normalized,offset:s},s+=p.sizeInBytes,l=Math.max(l,p.sizeOfType)}}catch(e){u=!0,c=e}finally{try{!o&&h.return&&h.return()}finally{if(u)throw c}}s%l!=0&&(s+=l-s%l),this.stride=s;var v=!0,d=!1,y=void 0;try{for(var m,M=a[Symbol.iterator]();!(v=(m=M.next()).done);v=!0){this[m.value.key].stride=this.stride}}catch(e){d=!0,y=e}finally{try{!v&&M.return&&M.return()}finally{if(d)throw y}}},i=function e(t){r(this,e),this.message="found duplicate attribute: "+t.key},s=function e(t,n,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];r(this,e),this.key=t,this.size=n,this.type=i,this.normalized=!1,this.sizeOfType=a(i),this.sizeInBytes=this.sizeOfType*n};n.POSITION=new s("position",3,"FLOAT"),n.NORMAL=new s("normal",3,"FLOAT"),n.TANGENT=new s("tangent",3,"FLOAT"),n.BITANGENT=new s("bitangent",3,"FLOAT"),n.UV=new s("uv",2,"FLOAT"),n.MATERIAL_INDEX=new s("materialIndex",1,"SHORT"),n.MATERIAL_ENABLED=new s("materialEnabled",1,"UNSIGNED_SHORT"),n.AMBIENT=new s("ambient",3,"FLOAT"),n.DIFFUSE=new s("diffuse",3,"FLOAT"),n.SPECULAR=new s("specular",3,"FLOAT"),n.SPECULAR_EXPONENT=new s("specularExponent",3,"FLOAT"),n.EMISSIVE=new s("emissive",3,"FLOAT"),n.TRANSMISSION_FILTER=new s("transmissionFilter",3,"FLOAT"),n.DISSOLVE=new s("dissolve",1,"FLOAT"),n.ILLUMINATION=new s("illumination",1,"UNSIGNED_SHORT"),n.REFRACTION_INDEX=new s("refractionIndex",1,"FLOAT"),n.SHARPNESS=new s("sharpness",1,"FLOAT"),n.MAP_DIFFUSE=new s("mapDiffuse",1,"SHORT"),n.MAP_AMBIENT=new s("mapAmbient",1,"SHORT"),n.MAP_SPECULAR=new s("mapSpecular",1,"SHORT"),n.MAP_SPECULAR_EXPONENT=new s("mapSpecularExponent",1,"SHORT"),n.MAP_DISSOLVE=new s("mapDissolve",1,"SHORT"),n.ANTI_ALIASING=new s("antiAliasing",1,"UNSIGNED_SHORT"),n.MAP_BUMP=new s("mapBump",1,"SHORT"),n.MAP_DISPLACEMENT=new s("mapDisplacement",1,"SHORT"),n.MAP_DECAL=new s("mapDecal",1,"SHORT"),n.MAP_EMISSIVE=new s("mapEmissive",1,"SHORT")},function(e,exports,t){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=t(0),s=function(){function e(t,n){a(this,e),n=n||{},n.materials=n.materials||{},n.enableWTextureCoord=!!n.enableWTextureCoord,n.indicesPerMaterial=!!n.indicesPerMaterial;var i=this;i.vertices=[],i.vertexNormals=[],i.textures=[],i.indices=[],i.textureStride=n.enableWTextureCoord?3:2,this.name="";var s=[],l=[],o=[],u={},c=[],f={},h=-1,p=0;u.verts=[],u.norms=[],u.textures=[],u.hashindices={},u.indices=[[]],u.materialIndices=[],u.index=0;for(var v=/^v\s/,d=/^vn\s/,y=/^vt\s/,m=/^f\s/,M=/\s+/,b=/^usemtl/,x=t.split("\n"),I=0;I<x.length;I++){var A=x[I].trim();if(A&&!A.startsWith("#")){var _=A.split(M);if(_.shift(),v.test(A))s.push.apply(s,r(_));else if(d.test(A))l.push.apply(l,r(_));else if(y.test(A)){var k=_;_.length>2&&!n.enableWTextureCoord?k=_.slice(0,2):2===_.length&&n.enableWTextureCoord&&k.push(0),o.push.apply(o,r(k))}else if(b.test(A)){var T=_[0];T in f||(c.push(T),f[T]=c.length-1,n.indicesPerMaterial&&f[T]>0&&u.indices.push([])),h=f[T],n.indicesPerMaterial&&(p=h)}else if(m.test(A))for(var w=!1,F=0,S=_.length;F<S;F++){3!==F||w||(F=2,w=!0);var E=_[0]+","+h,g=_[F]+","+h;if(g in u.hashindices)u.indices[p].push(u.hashindices[g]);else{var O=_[F].split("/"),B=O.length-1;if(u.verts.push(+s[3*(O[0]-1)+0]),u.verts.push(+s[3*(O[0]-1)+1]),u.verts.push(+s[3*(O[0]-1)+2]),o.length){var L=n.enableWTextureCoord?3:2;u.textures.push(+o[(O[1]-1)*L+0]),u.textures.push(+o[(O[1]-1)*L+1]),n.enableWTextureCoord&&u.textures.push(+o[(O[1]-1)*L+2])}u.norms.push(+l[3*(O[B]-1)+0]),u.norms.push(+l[3*(O[B]-1)+1]),u.norms.push(+l[3*(O[B]-1)+2]),u.materialIndices.push(h),u.hashindices[g]=u.index,u.indices[p].push(u.hashindices[g]),u.index+=1}3===F&&w&&u.indices[p].push(u.hashindices[E])}}}i.vertices=u.verts,i.vertexNormals=u.norms,i.textures=u.textures,i.vertexMaterialIndices=u.materialIndices,i.indices=n.indicesPerMaterial?u.indices:u.indices[p],i.materialNames=c,i.materialIndices=f,i.materialsByIndex={},n.calcTangentsAndBitangents&&this.calculateTangentsAndBitangents()}return n(e,[{key:"calculateTangentsAndBitangents",value:function(){var e={};e.tangents=[].concat(r(new Array(this.vertices.length))).map(function(e){return 0}),e.bitangents=[].concat(r(new Array(this.vertices.length))).map(function(e){return 0});var t=void 0;t=Array.isArray(this.indices[0])?[].concat.apply([],this.indices):this.indices;for(var a=this.vertices,n=this.vertexNormals,i=this.textures,s=0;s<t.length;s+=3){var l=t[s+0],o=t[s+1],u=t[s+2],c=a[3*l+0],f=a[3*l+1],h=a[3*l+2],p=i[2*l+0],v=i[2*l+1],d=a[3*o+0],y=a[3*o+1],m=a[3*o+2],M=i[2*o+0],b=i[2*o+1],x=a[3*u+0],I=a[3*u+1],A=a[3*u+2],_=i[2*u+0],k=i[2*u+1],T=d-c,w=y-f,F=m-h,S=x-c,E=I-f,g=A-h,O=M-p,B=b-v,L=_-p,N=k-v,R=O*N-B*L,P=1/(Math.abs(R<1e-4)?1:R),D=(T*N-S*B)*P,C=(w*N-E*B)*P,U=(F*N-g*B)*P,j=(S*O-T*L)*P,z=(E*O-w*L)*P,H=(g*O-F*L)*P,W=n[3*l+0],G=n[3*l+1],V=n[3*l+2],K=n[3*o+0],q=n[3*o+1],X=n[3*o+2],Y=n[3*u+0],J=n[3*u+1],Q=n[3*u+2],Z=D*W+C*G+U*V,ee=D*K+C*q+U*X,te=D*Y+C*J+U*Q,re=D-W*Z,ae=C-G*Z,ne=U-V*Z,ie=D-K*ee,se=C-q*ee,le=U-X*ee,oe=D-Y*te,ue=C-J*te,ce=U-Q*te,fe=Math.sqrt(re*re+ae*ae+ne*ne),he=Math.sqrt(ie*ie+se*se+le*le),pe=Math.sqrt(oe*oe+ue*ue+ce*ce),ve=j*W+z*G+H*V,de=j*K+z*q+H*X,ye=j*Y+z*J+H*Q,me=j-W*ve,Me=z-G*ve,be=H-V*ve,xe=j-K*de,Ie=z-q*de,Ae=H-X*de,_e=j-Y*ye,ke=z-J*ye,Te=H-Q*ye,we=Math.sqrt(me*me+Me*Me+be*be),Fe=Math.sqrt(xe*xe+Ie*Ie+Ae*Ae),Se=Math.sqrt(_e*_e+ke*ke+Te*Te);e.tangents[3*l+0]+=re/fe,e.tangents[3*l+1]+=ae/fe,e.tangents[3*l+2]+=ne/fe,e.tangents[3*o+0]+=ie/he,e.tangents[3*o+1]+=se/he,e.tangents[3*o+2]+=le/he,e.tangents[3*u+0]+=oe/pe,e.tangents[3*u+1]+=ue/pe,e.tangents[3*u+2]+=ce/pe,e.bitangents[3*l+0]+=me/we,e.bitangents[3*l+1]+=Me/we,e.bitangents[3*l+2]+=be/we,e.bitangents[3*o+0]+=xe/Fe,e.bitangents[3*o+1]+=Ie/Fe,e.bitangents[3*o+2]+=Ae/Fe,e.bitangents[3*u+0]+=_e/Se,e.bitangents[3*u+1]+=ke/Se,e.bitangents[3*u+2]+=Te/Se}this.tangents=e.tangents,this.bitangents=e.bitangents}},{key:"makeBufferData",value:function(e){var t=this.vertices.length/3,r=new ArrayBuffer(e.stride*t);r.numItems=t;for(var a=new DataView(r),n=0,s=0;n<t;n++){s=n*e.stride;var l=!0,o=!1,u=void 0;try{for(var c,f=e.attributes[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var h=c.value,p=s+e[h.key].offset;switch(h.key){case i.Layout.POSITION.key:a.setFloat32(p,this.vertices[3*n],!0),a.setFloat32(p+4,this.vertices[3*n+1],!0),a.setFloat32(p+8,this.vertices[3*n+2],!0);break;case i.Layout.UV.key:a.setFloat32(p,this.textures[2*n],!0),a.setFloat32(p+4,this.vertices[2*n+1],!0);break;case i.Layout.NORMAL.key:a.setFloat32(p,this.vertexNormals[3*n],!0),a.setFloat32(p+4,this.vertexNormals[3*n+1],!0),a.setFloat32(p+8,this.vertexNormals[3*n+2],!0);break;case i.Layout.MATERIAL_INDEX.key:a.setInt16(p,this.vertexMaterialIndices[n],!0);break;case i.Layout.AMBIENT.key:var v=this.vertexMaterialIndices[n],d=this.materialsByIndex[v];if(!d)break;a.setFloat32(p,d.ambient[0],!0),a.setFloat32(p+4,d.ambient[1],!0),a.setFloat32(p+8,d.ambient[2],!0);break;case i.Layout.DIFFUSE.key:var y=this.vertexMaterialIndices[n],m=this.materialsByIndex[y];if(!m)break;a.setFloat32(p,m.diffuse[0],!0),a.setFloat32(p+4,m.diffuse[1],!0),a.setFloat32(p+8,m.diffuse[2],!0);break;case i.Layout.SPECULAR.key:var M=this.vertexMaterialIndices[n],b=this.materialsByIndex[M];if(!b)break;a.setFloat32(p,b.specular[0],!0),a.setFloat32(p+4,b.specular[1],!0),a.setFloat32(p+8,b.specular[2],!0);break;case i.Layout.SPECULAR_EXPONENT.key:var x=this.vertexMaterialIndices[n],I=this.materialsByIndex[x];if(!I)break;a.setFloat32(p,I.specularExponent,!0);break;case i.Layout.EMISSIVE.key:var A=this.vertexMaterialIndices[n],_=this.materialsByIndex[A];if(!_)break;a.setFloat32(p,_.emissive[0],!0),a.setFloat32(p+4,_.emissive[1],!0),a.setFloat32(p+8,_.emissive[2],!0);break;case i.Layout.TRANSMISSION_FILTER.key:var k=this.vertexMaterialIndices[n],T=this.materialsByIndex[k];if(!T)break;a.setFloat32(p,T.transmissionFilter[0],!0),a.setFloat32(p+4,T.transmissionFilter[1],!0),a.setFloat32(p+8,T.transmissionFilter[2],!0);break;case i.Layout.DISSOLVE.key:var w=this.vertexMaterialIndices[n],F=this.materialsByIndex[w];if(!F)break;a.setFloat32(p,F.dissolve,!0);break;case i.Layout.ILLUMINATION.key:var S=this.vertexMaterialIndices[n],E=this.materialsByIndex[S];if(!E)break;a.setInt16(p,E.illumination,!0);break;case i.Layout.REFRACTION_INDEX.key:var g=this.vertexMaterialIndices[n],O=this.materialsByIndex[g];if(!O)break;a.setFloat32(p,O.refractionIndex,!0);break;case i.Layout.SHARPNESS.key:var B=this.vertexMaterialIndices[n],L=this.materialsByIndex[B];if(!L)break;a.setFloat32(p,L.sharpness,!0);break;case i.Layout.ANTI_ALIASING.key:var N=this.vertexMaterialIndices[n],R=this.materialsByIndex[N];if(!R)break;a.setInt16(p,R.antiAliasing,!0)}}}catch(e){o=!0,u=e}finally{try{!l&&f.return&&f.return()}finally{if(o)throw u}}}return r}},{key:"makeIndexBufferData",value:function(){var e=new Uint16Array(this.indices);return e.numItems=this.indices.length,e}},{key:"addMaterialLibrary",value:function(e){for(var t in e.materials)if(t in this.materialIndices){var r=e.materials[t],a=this.materialIndices[r.name];this.materialsByIndex[a]=r}}}]),e}();exports.default=s},function(e,exports,t){"use strict";function r(e){return Array.isArray(e)?e:Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=exports.Material=function e(t){a(this,e),this.name=t,this.ambient=[0,0,0],this.diffuse=[0,0,0],this.specular=[0,0,0],this.emissive=[0,0,0],this.transmissionFilter=[0,0,0],this.dissolve=0,this.specularExponent=0,this.transparency=0,this.illumination=0,this.refractionIndex=1,this.sharpness=0,this.mapDiffuse=null,this.mapAmbient=null,this.mapSpecular=null,this.mapSpecularExponent=null,this.mapDissolve=null,this.antiAliasing=!1,this.mapBump=null,this.mapDisplacement=null,this.mapDecal=null,this.mapEmissive=null,this.mapReflections=[]};exports.MaterialLibrary=function(){function e(t){a(this,e),this.data=t,this.currentMaterial=null,this.materials={},this.parse()}return n(e,[{key:"parse_newmtl",value:function(e){var t=e[0];this.currentMaterial=new i(t),this.materials[t]=this.currentMaterial}},{key:"parseColor",value:function(e){if("spectral"!=e[0]&&"xyz"!=e[0]){if(3==e.length)return e.map(parseFloat);var t=parseFloat(e[0]);return[t,t,t]}}},{key:"parse_Ka",value:function(e){this.currentMaterial.ambient=this.parseColor(e)}},{key:"parse_Kd",value:function(e){this.currentMaterial.diffuse=this.parseColor(e)}},{key:"parse_Ks",value:function(e){this.currentMaterial.specular=this.parseColor(e)}},{key:"parse_Ke",value:function(e){this.currentMaterial.emissive=this.parseColor(e)}},{key:"parse_Tf",value:function(e){this.currentMaterial.transmissionFilter=this.parseColor(e)}},{key:"parse_d",value:function(e){this.currentMaterial.dissolve=parseFloat(e.pop())}},{key:"parse_illum",value:function(e){this.currentMaterial.illumination=parseInt(e[0])}},{key:"parse_Ni",value:function(e){this.currentMaterial.refractionIndex=parseFloat(e[0])}},{key:"parse_Ns",value:function(e){this.currentMaterial.specularExponent=parseInt(e[0])}},{key:"parse_sharpness",value:function(e){this.currentMaterial.sharpness=parseInt(e[0])}},{key:"parse_cc",value:function(e,t){t.colorCorrection="on"==e[0]}},{key:"parse_blendu",value:function(e,t){t.horizontalBlending="on"==e[0]}},{key:"parse_blendv",value:function(e,t){t.verticalBlending="on"==e[0]}},{key:"parse_boost",value:function(e,t){t.boostMipMapSharpness=parseFloat(e[0])}},{key:"parse_mm",value:function(e,t){t.modifyTextureMap.brightness=parseFloat(e[0]),t.modifyTextureMap.contrast=parseFloat(e[1])}},{key:"parse_ost",value:function(e,t,r){for(;e.length<3;)e.push(r);t.u=parseFloat(e[0]),t.v=parseFloat(e[1]),t.w=parseFloat(e[2])}},{key:"parse_o",value:function(e,t){this.parse_ost(e,t.offset,0)}},{key:"parse_s",value:function(e,t){this.parse_ost(e,t.scale,1)}},{key:"parse_t",value:function(e,t){this.parse_ost(e,t.turbulence,0)}},{key:"parse_texres",value:function(e,t){t.textureResolution=parseFloat(e[0])}},{key:"parse_clamp",value:function(e,t){t.clamp="on"==e[0]}},{key:"parse_bm",value:function(e,t){t.bumpMultiplier=parseFloat(e[0])}},{key:"parse_imfchan",value:function(e,t){t.imfChan=e[0]}},{key:"parse_type",value:function(e,t){t.reflectionType=e[0]}},{key:"parseOptions",value:function(e){var t={colorCorrection:!1,horizontalBlending:!0,verticalBlending:!0,boostMipMapSharpness:0,modifyTextureMap:{brightness:0,contrast:1},offset:{u:0,v:0,w:0},scale:{u:1,v:1,w:1},turbulence:{u:0,v:0,w:0},clamp:!1,textureResolution:null,bumpMultiplier:1,imfChan:null},r=void 0,a=void 0,n={};for(e.reverse();e.length;){var i=e.pop();i.startsWith("-")?(r=i.substr(1),n[r]=[]):n[r].push(i)}for(r in n)if(n.hasOwnProperty(r)){a=n[r];var s=this["parse_"+r];s&&s.bind(this)(a,t)}return t}},{key:"parseMap",value:function(e){var t=void 0,a=void 0;if(e[0].startsWith("-"))t=e.pop(),a=e;else{var n=r(e);t=n[0],a=n.slice(1)}return a=this.parseOptions(a),a.filename=t,a}},{key:"parse_map_Ka",value:function(e){this.currentMaterial.mapAmbient=this.parseMap(e)}},{key:"parse_map_Kd",value:function(e){this.currentMaterial.mapDiffuse=this.parseMap(e)}},{key:"parse_map_Ks",value:function(e){this.currentMaterial.mapSpecular=this.parseMap(e)}},{key:"parse_map_Ke",value:function(e){this.currentMaterial.mapEmissive=this.parseMap(e)}},{key:"parse_map_Ns",value:function(e){this.currentMaterial.mapSpecularExponent=this.parseMap(e)}},{key:"parse_map_d",value:function(e){this.currentMaterial.mapDissolve=this.parseMap(e)}},{key:"parse_map_aat",value:function(e){this.currentMaterial.antiAliasing="on"==e[0]}},{key:"parse_map_bump",value:function(e){this.currentMaterial.mapBump=this.parseMap(e)}},{key:"parse_bump",value:function(e){this.parse_map_bump(e)}},{key:"parse_disp",value:function(e){this.currentMaterial.mapDisplacement=this.parseMap(e)}},{key:"parse_decal",value:function(e){this.currentMaterial.mapDecal=this.parseMap(e)}},{key:"parse_refl",value:function(e){this.currentMaterial.mapReflections.push(this.parseMap(e))}},{key:"parse",value:function(){var e=this.data.split(/\r?\n/),t=!0,a=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var l=i.value;if((l=l.trim())&&!l.startsWith("#")){var o=l.split(/\s/),u=void 0,c=o,f=r(c);u=f[0],o=f.slice(1);var h=this["parse_"+u];h&&h.bind(this)(o)}}}catch(e){a=!0,n=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw n}}delete this.data,this.currentMaterial=null}}]),e}()},function(e,exports,t){e.exports=t(4)},function(e,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.version=exports.deleteMeshBuffers=exports.initMeshBuffers=exports.downloadMeshes=exports.downloadModels=exports.Layout=exports.MaterialLibrary=exports.Material=exports.Mesh=void 0;var r=t(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r),n=t(2),i=t(0),s=t(5);exports.Mesh=a.default,exports.Material=n.Material,exports.MaterialLibrary=n.MaterialLibrary,exports.Layout=i.Layout,exports.downloadModels=s.downloadModels,exports.downloadMeshes=s.downloadMeshes,exports.initMeshBuffers=s.initMeshBuffers,exports.deleteMeshBuffers=s.deleteMeshBuffers,exports.version="1.1.3"},function(e,exports,t){"use strict";function r(e,t){var r=["mapDiffuse","mapAmbient","mapSpecular","mapDissolve","mapBump","mapDisplacement","mapDecal","mapEmissive"];t.endsWith("/")||(t+="/");var a=[];for(var n in e.materials)if(e.materials.hasOwnProperty(n)){n=e.materials[n];var i=!0,s=!1,l=void 0;try{for(var o,u=r[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;(function(e){var r=n[e];if(!r)return"continue";var i=t+r.filename;a.push(fetch(i).then(function(e){if(!e.ok)throw new Error;return e.blob()}).then(function(e){var t=new Image;return t.src=URL.createObjectURL(e),r.texture=t,new Promise(function(e){return t.onload=e})}).catch(function(){}))})(c)}}catch(e){s=!0,l=e}finally{try{!i&&u.return&&u.return()}finally{if(s)throw l}}}return Promise.all(a)}function a(e){var t=[],a=!0,n=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var f=s.value;!function(e){var a=[];if(!e.obj)throw new Error('"obj" attribute of model object not set. The .obj file is required to be set in order to use downloadModels()');var n={};n.indicesPerMaterial=!!e.indicesPerMaterial,n.calcTangentsAndBitangents=!!e.calcTangentsAndBitangents;var i=e.name;if(!i){var s=e.obj.split("/");i=s[s.length-1].replace(".obj","")}if(a.push(Promise.resolve(i)),a.push(fetch(e.obj).then(function(e){return e.text()}).then(function(e){return new u.default(e,n)})),e.mtl){var l=e.mtl;"boolean"==typeof l&&(l=e.obj.replace(/\.obj$/,".mtl")),a.push(fetch(l).then(function(e){return e.text()}).then(function(t){var a=new c.MaterialLibrary(t);if(!1!==e.downloadMtlTextures){var n=e.mtlTextureRoot;return n||(n=l.substr(0,l.lastIndexOf("/"))),Promise.all([Promise.resolve(a),r(a,n)])}return Promise.all(Promise.resolve(a))}).then(function(e){return e[0]}))}t.push(Promise.all(a))}(f)}}catch(e){n=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}return Promise.all(t).then(function(e){var t={},r=!0,a=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var o=i.value,u=l(o,3),c=u[0],f=u[1],h=u[2];f.name=c,h&&f.addMaterialLibrary(h),t[c]=f}}catch(e){a=!0,n=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw n}}return t})}function n(e,t,r){void 0===r&&(r={});var a=[];for(var n in e){(function(t){if(!e.hasOwnProperty(t))return"continue";var r=e[t];a.push(fetch(r).then(function(e){return e.text()}).then(function(e){return[t,new u.default(e)]}))})(n)}Promise.all(a).then(function(e){var a=!0,n=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var u=s.value,c=l(u,2),f=c[0],h=c[1];r[f]=h}}catch(e){n=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}return t(r)})}function i(e,t){t.normalBuffer=f(e,e.ARRAY_BUFFER,t.vertexNormals,3),t.textureBuffer=f(e,e.ARRAY_BUFFER,t.textures,t.textureStride),t.vertexBuffer=f(e,e.ARRAY_BUFFER,t.vertices,3),t.indexBuffer=f(e,e.ELEMENT_ARRAY_BUFFER,t.indices,1)}function s(e,t){e.deleteBuffer(t.normalBuffer),e.deleteBuffer(t.textureBuffer),e.deleteBuffer(t.vertexBuffer),e.deleteBuffer(t.indexBuffer)}Object.defineProperty(exports,"__esModule",{value:!0});var l=function(){function e(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(n)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();exports.downloadModels=a,exports.downloadMeshes=n,exports.initMeshBuffers=i,exports.deleteMeshBuffers=s;var o=t(1),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=t(2),f=(t(0),function(e,t,r,a){var n=e.createBuffer(),i=t===e.ARRAY_BUFFER?Float32Array:Uint16Array;return e.bindBuffer(t,n),e.bufferData(t,new i(r),e.STATIC_DRAW),n.itemSize=a,n.numItems=r.length/a,n})}])});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TerrainInfo__ = __webpack_require__(6);




class Plane extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor(center, scale, subdivs, ti) {
        super(); // Call the constructor of the super class. This is required.
        this.ti = ti;
        this.center = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(center[0], center[1], center[2]);
        this.scale = scale;
        this.subdivs = subdivs + subdivs % 2; // Ensures the number is even, rounds up.
    }
    create() {
        let width = Math.pow(2, this.subdivs / 2);
        let normalize = 1.0 / width;
        this.positions = new Float32Array((width + 1) * (width + 1) * 4);
        this.normals = new Float32Array((width + 1) * (width + 1) * 4);
        this.indices = new Uint32Array(width * width * 6); // NxN squares, each square is two triangles, each triangle is three indices
        this.colors = new Float32Array((width + 1) * (width + 1) * 4);
        let posIdx = 0;
        let colIdx = 0;
        for (let x = 0; x <= width; ++x) {
            for (let z = 0; z <= width; ++z) {
                let rawHeight = this.ti.getHeight(x / width, z / width);
                let h = rawHeight;
                if (h > __WEBPACK_IMPORTED_MODULE_3__TerrainInfo__["a" /* default */].heightThreshold) {
                    h = 1;
                }
                else {
                    h = 0;
                }
                // Make a strip of vertices along Z with the current X coord
                this.normals[posIdx] = 0;
                this.positions[posIdx++] = x * normalize * this.scale[0] + this.center[0] - this.scale[0] * 0.5;
                this.normals[posIdx] = 1;
                this.positions[posIdx++] = 0 + this.center[1] + h * 5; // here
                this.normals[posIdx] = 0;
                this.positions[posIdx++] = z * normalize * this.scale[1] + this.center[2] - this.scale[1] * 0.5;
                this.normals[posIdx] = 0;
                this.positions[posIdx++] = 1;
                let dis = this.ti.getKernelDis(x / width, z / width);
                this.colors[colIdx++] = rawHeight; // height
                this.colors[colIdx++] = 1 - dis; // population
                this.colors[colIdx++] = h; // ground 1, sea 0
                this.colors[colIdx++] = 1;
            }
        }
        let indexIdx = 0;
        // Make the squares out of indices
        for (let i = 0; i < width; ++i) { // X iter
            for (let j = 0; j < width; ++j) { // Z iter
                this.indices[indexIdx++] = j + i * (width + 1);
                this.indices[indexIdx++] = j + 1 + i * (width + 1);
                this.indices[indexIdx++] = j + (i + 1) * (width + 1);
                this.indices[indexIdx++] = j + 1 + i * (width + 1);
                this.indices[indexIdx++] = j + (i + 1) * (width + 1);
                this.indices[indexIdx++] = j + 1 + (i + 1) * (width + 1);
            }
        }
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* gl */].STATIC_DRAW);
        console.log(`Created plane`);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Plane);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TerrainInfo__ = __webpack_require__(6);


//  -----> x
// |
// |
// |
// v
// z
class RoadLSystem {
    // end need export -------------------------------------------------
    constructor(si, ti) {
        this.intxnSet = new Set();
        this.roadSet = new Set();
        this.roadPosArray = new Array();
        this.roadRotArray = new Array();
        this.roadLenArray = new Array();
        this.roadWidthArray = new Array();
        this.intxnPosArray = new Array();
        this.intxnRotArray = new Array();
        this.intxnLenArray = new Array();
        this.intxnWidthArray = new Array();
        this.intxnGrid = new Array();
        this.gridDim = 15;
        this.levitation = 5;
        // Need export -------------------------------------------------
        this.maxZLen = 6;
        this.maxXLen = 3;
        this.scale = 100;
        this.iter = 50;
        this.angleTolerant = 10.0;
        this.mergeToIntxnThreshold = Math.min(this.maxZLen, this.maxXLen) - 0.1;
        this.mergeFrontierStep = this.mergeToIntxnThreshold * 1.1;
        this.roadWidth = 0.5;
        // highway
        this.highwayWidth = 1.5;
        this.highwayLen = 13;
        this.highwaySearchRadius = 10;
        this.highwaySearchAngleRange = 60;
        this.popSearchSpacialSampleRage = 5;
        this.popSearchAngularSampleRage = 5;
        this.highwayBranchPopThreshold = 0.8; // if higher than this, highway branch
        this.si = si;
        this.terrainInfo = ti;
    }
    setSystemInfo(si) {
        this.si = si;
    }
    setTerrainInfo(ti) {
        this.terrainInfo = ti;
    }
    compute() {
        // zero out all members
        this.intxnSet.clear();
        this.roadSet.clear();
        this.roadPosArray.length = 0;
        this.roadRotArray.length = 0;
        this.roadLenArray.length = 0;
        this.roadWidthArray.length = 0;
        this.intxnPosArray.length = 0;
        this.intxnRotArray.length = 0;
        this.intxnLenArray.length = 0;
        this.intxnWidthArray.length = 0;
        this.intxnGrid.length = 0;
        // x for first [], z for second []
        for (var i = 0; i < this.gridDim; ++i) {
            let thisArray = new Array();
            for (var j = 0; j < this.gridDim; ++j) {
                thisArray.push(new Array());
            }
            this.intxnGrid.push(thisArray);
        }
        let list = new RoadLSystemList();
        // init the first node and intxn
        let startP = this.terrainInfo.getRandomValidKernalPos();
        startP[0] = (startP[0] - 0.5) * this.scale;
        startP[1] = (startP[1] - 0.5) * this.scale;
        // start node is a high way
        let startNode = new RoadLSystemNode();
        startNode.isHeightWay = true;
        startNode.srcPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(startP[0], this.levitation, startP[1]);
        startNode.intendLen = this.highwayLen;
        // choose dir according to population
        let mostPopDir = this.highwaySearchMostPopulationDir(startP, this.highwaySearchRadius, 360, startNode.intendAngle);
        startNode.setDstPos(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(mostPopDir[0] * startNode.intendLen + startP[0], this.levitation, mostPopDir[1] * startNode.intendLen + startP[1]));
        // make sop
        // console.log("calc mostPopDir: " + mostPopDir);
        // console.log("calc src pos: " + startNode.srcPos);
        // console.log("calc dst pos: " + startNode.dstPos);
        startNode.calcAngle(startNode.dstPos);
        // console.log("calc start angle: " + startNode.intendAngle);
        // put into grid
        let startIntxn = RoadIntersection.createAndPutToCell(startNode.srcPos, this);
        startIntxn.addOutRoad(startNode);
        this.intxnSet.add(startIntxn);
        list.append(startNode);
        // let testNode_0: RoadLSystemNode = RoadLSystemNode.create(
        //   list.length(), // id
        //   0, // del
        //   startIntxn.pos, // srcPos
        //   0, // prev angle
        //   0, // prev angle
        //   0 // angleOptionOffset
        // );
        // if (testNode_0.angleOption == 0 || testNode_0.angleOption == 2) {
        //   testNode_0.intendLen = this.maxZLen;
        // } else {
        //   testNode_0.intendLen = this.maxXLen;
        // }
        // testNode_0.calcDst();
        // let pos2: vec3 = vec3.fromValues(5, 0, 5);
        // vec3.add(pos2, pos2, startIntxn.pos);
        // let testNode_1: RoadLSystemNode = RoadLSystemNode.create(
        //   list.length(), // id
        //   0, // del
        //   pos2, // srcPos
        //   0, // prev angle
        //   0, // prev angle
        //   0 // angleOptionOffset
        // );
        // if (testNode_1.angleOption == 0 || testNode_1.angleOption == 2) {
        //   testNode_0.intendLen = this.maxZLen;
        // } else {
        //   testNode_0.intendLen = this.maxXLen;
        // }
        // testNode_1.calcDst();
        // list.append(testNode_1);
        // list.append(testNode_0);
        // production & drawing
        for (var i = 0; i < this.iter; ++i) {
            let curNode = list.head;
            // console.log("iter: " + i);
            while (curNode !== null) {
                let detachFlag = true;
                if (curNode.del > 0) {
                    curNode.del -= 1;
                }
                else {
                    // do real stuff
                    let ti = this.terrainInfo.getHeightAndDisScaleShift(curNode.dstPos[0], curNode.dstPos[2], this.scale);
                    // console.log("ti: " + ti);
                    if (curNode.isHeightWay) {
                        // highway and normal node are different
                        this.roadSet.add(curNode);
                        // only continue if in bound, if not in bound, leave it there
                        if (ti[0] >= 0) {
                            if (ti[0] > __WEBPACK_IMPORTED_MODULE_1__TerrainInfo__["a" /* default */].heightThreshold) {
                                // if not sea
                                // create self extend
                                let mostPopDir = this.highwaySearchMostPopulationDir(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(curNode.dstPos[0], curNode.dstPos[2]), this.highwaySearchRadius, this.highwaySearchAngleRange, curNode.intendAngle);
                                let dst = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(mostPopDir[0] * this.highwayLen + curNode.dstPos[0], this.levitation, mostPopDir[1] * this.highwayLen + curNode.dstPos[2]);
                                let highwayNode = RoadLSystemNode.createHighway(0, // ID
                                0, // del
                                curNode.dstPos, // src
                                dst // dst
                                );
                                list.insertBefore(curNode, highwayNode);
                                let curIntxn = RoadIntersection.createAndPutToCell(curNode.dstPos, this);
                                // TODO(zichuanyu) adjust to threshold
                                if (1 - ti[1] > this.highwayBranchPopThreshold) {
                                    // exceed pop threshold, generate 2 highway
                                    // VERF
                                    let perpendicularDir_0 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].create();
                                    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].rotate(perpendicularDir_0, mostPopDir, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(0, 0), Math.PI / 2.0);
                                    let branchDst_0 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(perpendicularDir_0[0] * this.highwayLen + curNode.dstPos[0], this.levitation, perpendicularDir_0[1] * this.highwayLen + curNode.dstPos[2]);
                                    let highwayBranch_0 = RoadLSystemNode.createHighway(0, // ID
                                    0, // del
                                    curNode.dstPos, // src
                                    branchDst_0 // dst
                                    );
                                    let perpendicularDir_1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].create();
                                    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].rotate(perpendicularDir_1, mostPopDir, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(0, 0), -Math.PI / 2.0);
                                    let branchDst_1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(perpendicularDir_1[0] * this.highwayLen + curNode.dstPos[0], this.levitation, perpendicularDir_1[1] * this.highwayLen + curNode.dstPos[2]);
                                    let highwayBranch_1 = RoadLSystemNode.createHighway(0, // ID
                                    0, // del
                                    curNode.dstPos, // src
                                    branchDst_1 // dst
                                    );
                                    curIntxn.addOutRoad(highwayBranch_0);
                                    curIntxn.addOutRoad(highwayBranch_1);
                                    list.insertBefore(curNode, highwayBranch_0);
                                    list.insertBefore(curNode, highwayBranch_1);
                                }
                                else {
                                    // if not exceed pop threshold, generate one normal raod
                                    let branch_0 = RoadLSystemNode.create(list.length(), // id
                                    i * 5, // del
                                    curNode.dstPos, // srcPos
                                    curNode.intendAngle, // prev angle
                                    curNode.angleOption, // prev angle
                                    1 // angleOptionOffset
                                    );
                                    if (branch_0.angleOption == 0 || branch_0.angleOption == 2) {
                                        branch_0.intendLen = this.maxXLen;
                                    }
                                    else {
                                        branch_0.intendLen = this.maxZLen;
                                    }
                                    branch_0.calcDst();
                                    list.insertBefore(curNode, branch_0);
                                    curIntxn.addOutRoad(branch_0);
                                }
                                curIntxn.addInRoad(curNode);
                                curIntxn.addOutRoad(highwayNode);
                                this.intxnSet.add(curIntxn);
                            }
                            else {
                                curNode.intendLen += this.highwayLen;
                                curNode.calcDst();
                                detachFlag = false;
                            }
                        }
                    }
                    else {
                        // if this place can have a road
                        // use x-z as x-y
                        if (ti[0] > __WEBPACK_IMPORTED_MODULE_1__TerrainInfo__["a" /* default */].heightThreshold) {
                            // consider the intxn grid
                            let potentialIntxn = null;
                            // step froward the merge threshold
                            let frontierDis = 0;
                            let frontierDir = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
                            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(frontierDir, curNode.dstPos, curNode.srcPos);
                            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(frontierDir, frontierDir);
                            while (true) {
                                let breakFlag = false;
                                frontierDis += this.mergeFrontierStep;
                                if (frontierDis > curNode.intendLen) {
                                    frontierDis = curNode.intendLen;
                                    breakFlag = true;
                                }
                                let frontierPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
                                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].scaleAndAdd(frontierPos, curNode.srcPos, frontierDir, frontierDis);
                                potentialIntxn = this.findNearestIntxn(curNode.dstPos);
                                if (potentialIntxn != null || breakFlag) {
                                    break;
                                }
                            }
                            let disToIntxn = this.scale; // max at first
                            let goOnFlag = true;
                            if (potentialIntxn != null) {
                                disToIntxn = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].distance(curNode.dstPos, potentialIntxn.pos);
                                // console.log("min dis: " + disToIntxn);
                            }
                            if (potentialIntxn != null && disToIntxn < this.mergeToIntxnThreshold) {
                                // adjust dir and len if a intxn if found
                                curNode.setDstPos(potentialIntxn.pos);
                                curNode.intendLen = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].distance(curNode.srcPos, curNode.dstPos);
                                curNode.calcAngle(curNode.dstPos);
                                potentialIntxn.addInRoad(curNode);
                                goOnFlag = false;
                            }
                            else {
                                // console.log("need new intxn");
                                potentialIntxn = RoadIntersection.createAndPutToCell(curNode.dstPos, this);
                                this.intxnSet.add(potentialIntxn);
                                potentialIntxn.addInRoad(curNode);
                            }
                            // only add node to global set when node is legal
                            this.roadSet.add(curNode);
                            if (goOnFlag) {
                                // may need to delete road from inside the node
                                // this node continues to go forward
                                let subNode = RoadLSystemNode.create(list.length(), // id
                                0, // del
                                curNode.dstPos, // srcPos
                                curNode.baseAngle, // prev angle
                                curNode.angleOption, // prev angle
                                0 // angleOptionOffset
                                );
                                if (subNode.angleOption == 0 || subNode.angleOption == 2) {
                                    subNode.intendLen = this.maxZLen;
                                }
                                else {
                                    subNode.intendLen = this.maxXLen;
                                }
                                subNode.calcDst();
                                potentialIntxn.addOutRoad(subNode);
                                list.insertBefore(curNode, subNode);
                                // new node 0
                                let branch_0 = RoadLSystemNode.create(list.length(), // id
                                0, // del
                                curNode.dstPos, // srcPos
                                curNode.baseAngle, // prev angle
                                curNode.angleOption, // prev angle
                                1 // angleOptionOffset
                                );
                                if (branch_0.angleOption == 0 || branch_0.angleOption == 2) {
                                    branch_0.intendLen = this.maxZLen;
                                }
                                else {
                                    branch_0.intendLen = this.maxXLen;
                                }
                                branch_0.calcDst();
                                potentialIntxn.addOutRoad(branch_0);
                                list.insertBefore(curNode, branch_0);
                                // new node 1
                                let branch_1 = RoadLSystemNode.create(list.length(), // id
                                0, // del
                                curNode.dstPos, // srcPos
                                curNode.baseAngle, // prev angle
                                curNode.angleOption, // prev angle
                                -1 // angleOptionOffset
                                );
                                if (branch_1.angleOption == 0 || branch_1.angleOption == 2) {
                                    branch_1.intendLen = this.maxZLen;
                                }
                                else {
                                    branch_1.intendLen = this.maxXLen;
                                }
                                branch_1.calcDst();
                                potentialIntxn.addOutRoad(branch_1);
                                list.insertBefore(curNode, branch_1);
                            }
                        }
                    }
                    // node has del==0, so no mater what, detach
                    let preNode = curNode;
                    curNode = curNode.next;
                    if (detachFlag) {
                        preNode.detach();
                    }
                }
            }
        }
        console.log(this.roadSet);
        console.log(this.intxnSet);
        console.log(this.intxnGrid);
        // write all data to buffer
        this.roadSet.forEach(fillRoadArrayCallback.bind(this));
        this.intxnSet.forEach(fillIntxnArrayCallback.bind(this));
    }
    highwaySearchMostPopulationDir(src, radius, angleRange, baseAngle) {
        // always keep the intend dir
        // need export -------
        let spRate = this.popSearchSpacialSampleRage;
        let angleRate = this.popSearchAngularSampleRage; // may not be correct
        // need export -------
        // const
        let forwardStep = radius / Math.max(1, spRate);
        let angleStep = angleRange / Math.max(1, angleRate);
        // per angle
        let frontiers = new Array();
        let forwardDirs = new Array();
        let sumPop = new Array();
        // console.log("--------------");
        for (var i = Math.floor(angleRate / 2); i >= (-(angleRate / 2) | 0); --i) {
            let angle = (baseAngle + angleStep * i) * Math.PI / 180.0;
            // console.log(angle);
            forwardDirs.push(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(Math.sin(angle) * forwardStep, Math.cos(angle) * forwardStep));
            frontiers.push(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].clone(src));
            sumPop.push(0);
        }
        // console.log("--------------");
        for (var i = 0; i < spRate; ++i) {
            // per step
            for (var j = 0; j < angleRate; ++j) {
                // per angle
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].add(frontiers[j], frontiers[j], forwardDirs[j]);
                let pop = 1 - this.terrainInfo.getKernelDisSacle(frontiers[j][0], frontiers[j][1], this.scale);
                if (pop > 1) {
                    // means this is out of range, happens at edges
                    pop = 0;
                }
                sumPop[j] += pop;
            }
        }
        let choose = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].fromValues(Math.sin(baseAngle), Math.cos(baseAngle));
        let maxPop = 0.000001;
        for (var i = 0; i < sumPop.length; ++i) {
            if (sumPop[i] > maxPop) {
                maxPop = sumPop[i];
                choose = forwardDirs[i];
            }
        }
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].normalize(choose, choose);
        return choose;
    }
    putInGrid(intxn, x, y) {
        x = Math.floor((x / this.scale + 0.5) * this.gridDim);
        y = Math.floor((y / this.scale + 0.5) * this.gridDim);
        this.intxnGrid[x][y].push(intxn);
    }
    findNearestIntxn(dstPos) {
        let x = Math.floor((dstPos[0] / this.scale + 0.5) * this.gridDim);
        let y = Math.floor((dstPos[2] / this.scale + 0.5) * this.gridDim);
        let intxn = null;
        let minLen = this.scale;
        for (var m = -1; m <= 1; ++m) {
            for (var n = -1; n <= 1; ++n) {
                var xm = x + m;
                var ym = y + n;
                if (xm < 0 || xm >= this.gridDim || ym < 0 || ym >= this.gridDim) {
                    continue;
                }
                let arrInCell = this.intxnGrid[xm][ym];
                for (var i = 0; i < arrInCell.length; ++i) {
                    let curIntxn = arrInCell[i];
                    let curLen = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].distance(curIntxn.pos, dstPos);
                    if (curLen < minLen) {
                        minLen = curLen;
                        intxn = curIntxn;
                    }
                }
            }
        }
        return intxn;
    }
}
RoadLSystem.GlobalZForward = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(0, 0, 1);
function fillRoadArrayCallback(node) {
    this.roadPosArray.push(node.srcPos[0]);
    this.roadPosArray.push(node.srcPos[1]);
    this.roadPosArray.push(node.srcPos[2]);
    let q = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].create();
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].fromEuler(q, 0, node.intendAngle, 0);
    // mat4.getRotation(q, transMat);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].normalize(q, q);
    this.roadRotArray.push(q[0]);
    this.roadRotArray.push(q[1]);
    this.roadRotArray.push(q[2]);
    this.roadRotArray.push(q[3]);
    this.roadLenArray.push(node.intendLen);
    let width = this.roadWidth;
    if (node.isHeightWay) {
        width = this.highwayWidth;
    }
    this.roadWidthArray.push(width);
    // console.log("base angle: " + node.baseAngle);
}
function fillIntxnArrayCallback(intxn) {
    this.intxnPosArray.push(intxn.pos[0]);
    this.intxnPosArray.push(intxn.pos[1]);
    this.intxnPosArray.push(intxn.pos[2]);
    let q = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].create();
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].fromEuler(q, -90, 0, 0);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].normalize(q, q);
    this.intxnRotArray.push(q[0]);
    this.intxnRotArray.push(q[1]);
    this.intxnRotArray.push(q[2]);
    this.intxnRotArray.push(q[3]);
    this.intxnLenArray.push(1.0);
    this.intxnWidthArray.push(1.0);
}
// every node has a source intersection and dst intersection
class RoadIntersection {
    constructor() {
        this.inRoads = new Set();
        this.outRoads = new Set();
    }
    static createAndPutToCell(pos, system) {
        let intxn = new RoadIntersection();
        intxn.pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].clone(pos);
        system.putInGrid(intxn, intxn.pos[0], intxn.pos[2]);
        return intxn;
    }
    addInRoad(node) {
        node.dstIntxn = this;
        this.inRoads.add(node);
    }
    addOutRoad(node) {
        node.srcIntxn = this;
        this.outRoads.add(node);
    }
}
// both the road segment and the LSystem node
// because we don't want a lot of copy and paste between memory
class RoadLSystemNode {
    constructor() {
        this.id = 0;
        this.angleOption = 0;
        this.prevAngleOption = 0;
        this.baseAngle = 0;
        this.intendAngle = 0;
        this.srcPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.dstPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.intendLen = 0;
        this.isHeightWay = false;
        // intersection
        this.srcIntxn = null;
        this.dstIntxn = null;
        this.list = null;
        this.next = null;
        this.prev = null;
    }
    chooseAngle(offset) {
        let option = ((offset + this.prevAngleOption) % 4 + 4) % 4;
        // let option: number = ((offset) % 4 + 4)%4;
        this.angleOption = option;
        this.intendAngle = this.baseAngle
            + RoadLSystemNode.angleOptions[option];
    }
    static create(id, del, src, baseAngle, prevAngleOption, angleOptionOffset) {
        let node = new RoadLSystemNode();
        node.id = id;
        node.del = del;
        node.srcPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].clone(src);
        node.baseAngle = baseAngle;
        node.prevAngleOption = prevAngleOption;
        node.chooseAngle(angleOptionOffset);
        return node;
    }
    static createHighway(id, del, src, dst) {
        let node = new RoadLSystemNode();
        node.id = id;
        node.del = del;
        node.srcPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].clone(src);
        // console.log("dst in crhi: " + dst);
        node.calcAngle(dst);
        node.isHeightWay = true;
        node.dstPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].clone(dst);
        node.calcLen();
        return node;
    }
    setSrcPos(src) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(this.srcPos, src);
    }
    setDstPos(dst) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(this.dstPos, dst);
    }
    // given src, angle and intednLength
    calcDst() {
        let rad = this.intendAngle * Math.PI / 180;
        this.dstPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(this.srcPos[0] + this.intendLen * Math.sin(rad), this.srcPos[1], this.srcPos[2] + this.intendLen * Math.cos(rad));
    }
    // givern src and dst
    calcLen() {
        this.intendLen = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].distance(this.srcPos, this.dstPos);
    }
    // given src and dst
    // may not be right
    calcAngleAndLength() {
        let src2Dst = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(src2Dst, this.dstPos, this.srcPos);
        // 2 cases according to x value
        // VERY
        let angle = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].angle(RoadLSystem.GlobalZForward, src2Dst);
        if (src2Dst[0] > 0) {
            this.intendAngle = angle;
        }
        else {
            this.intendAngle = -angle;
        }
    }
    // given src and a target (may be nearer than dst)
    calcAngle(target) {
        let src2Target = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(src2Target, target, this.srcPos);
        // 2 cases according to x value
        // VERF
        // console.log("target: " + target);
        // console.log("src2Target: " + src2Target);
        let angle = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].angle(RoadLSystem.GlobalZForward, src2Target) * 180 / Math.PI;
        // console.log("angle: " + this.intendAngle);    
        if (src2Target[0] > 0) {
            this.intendAngle = angle;
        }
        else {
            this.intendAngle = -angle;
        }
        // console.log("this.intendAngle: " + this.intendAngle);
    }
    detach() {
        this.list.delete(this);
    }
    toString() {
        return this.id.toString();
    }
}
// the standard rotation
RoadLSystemNode.angleOptions = [0, 90, 180, 270];
class RoadLSystemList {
    constructor() {
        this.set = new Set();
        this.head = null;
        this.tail = null;
        this.head = null;
        this.tail = null;
    }
    insertAfter(pivot, node) {
        if (!this.set.has(pivot)) {
            return false;
        }
        let nextNode = pivot.next;
        node.prev = pivot;
        pivot.next = node;
        node.next = nextNode;
        if (nextNode !== null) {
            nextNode.prev = node;
        }
        if (pivot === this.tail) {
            this.tail = node;
        }
        node.list = this;
        this.set.add(node);
        return true;
    }
    insertBefore(pivot, node) {
        if (!this.set.has(pivot)) {
            return false;
        }
        let prevNode = pivot.prev;
        node.next = pivot;
        pivot.prev = node;
        node.prev = prevNode;
        if (prevNode !== null) {
            prevNode.next = node;
        }
        if (pivot === this.head) {
            this.head = node;
        }
        node.list = this;
        this.set.add(node);
        return true;
    }
    append(node) {
        node.list = this;
        if (this.set.size > 0) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.set.add(node);
    }
    prepend(node) {
        node.list = this;
        if (this.set.size > 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.set.add(node);
    }
    delete(node) {
        if (!this.set.has(node)) {
            return false;
        }
        node.list = null;
        this.set.delete(node);
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        if (node.next !== null) {
            node.next.prev = node.prev;
        }
        if (node.prev !== null) {
            node.prev.next = node.next;
        }
        node.next = null;
        node.prev = null;
        return true;
    }
    toArray() {
        let arr = new Array();
        for (var cur = this.head; cur; cur = cur.next) {
            arr.push(cur);
        }
        return arr;
    }
    toStringArray() {
        let arr = new Array();
        for (var cur = this.head; cur; cur = cur.next) {
            arr.push(cur.toString());
        }
        return arr;
    }
    length() {
        return this.set.size;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (RoadLSystem);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// all info goes here
class SystemInfoObject {
    constructor() {
        // global settings
        this.globalSeed = "";
        this.mapWidthHeightRatio = 1;
        // normal st
        this.maxXSize = 1;
        this.maxZSize = 1;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (SystemInfoObject);


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n#define TAPER_FACTOR 0.5\n\n// begin util funcs =================================================\nmat4 constructRotationMat(vec4 quat) {\n    float i = quat.x;\n    float j = quat.y;\n    float k = quat.z;\n    float r = quat.w;\n    return mat4(\n        1.0 - 2.0*(j*j + k*k), 2.0*(i*j + k*r), 2.0*(i*k - j*r), 0.0, // 1st col\n        2.0*(i*j - k*r), 1.0 - 2.0*(i*i + k*k), 2.0*(j*k + i*r), 0.0, // 2nd col\n        2.0*(i*k + j*r), 2.0*(j*k - i*r), 1.0 - 2.0*(i*i + j*j), 0.0, // 3rd col\n        0.0, 0.0, 0.0, 1.0                                            // 4th col\n    );\n}\n\nmat4 constructTranslationMat(vec3 t) {\n  return mat4(\n    1.0, 0.0, 0.0, 0.0, // 1st col\n    0.0, 1.0, 0.0, 0.0, // 2nd col\n    0.0, 0.0, 1.0, 0.0, // 3rd col\n    t.x, t.y, t.z, 1.0  // 4th col\n  );\n}\n\nmat4 constructScaleMat(vec3 s) {\n  return mat4(\n    s.x, 0.0, 0.0, 0.0,            // 1st col\n    0.0, s.y, 0.0, 0.0,            // 2nd col\n    0.0, 0.0, s.z, 0.0,            // 3rd col\n    0.0, 0.0, 0.0, 1.0             // 4th col\n  );\n}\n\nmat4 constructTransformationMat(vec3 t, vec4 quat, vec3 s) {\n  return constructTranslationMat(t) * constructRotationMat(quat)\n  * constructScaleMat(s);\n}\n// end util funcs =================================================\n\nuniform mat4 u_ViewProj;\nuniform float u_Time;\nuniform mat3 u_CameraAxes; // Used for rendering particles as billboards (quads that are always looking at the camera)\n\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\nin vec3 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene\nin float vs_Depth;\nin float vs_RoadLength;\nin float vs_RoadWidth;\nin vec4 vs_RotQuat;\n\nout vec4 fs_Col;\nout vec4 fs_Pos;\n\nvoid main()\n{\n    fs_Col = vec4(1.0, 0.0, 1.0, 1.0);\n    float taper = vs_RoadWidth;\n    mat4 transformMat = constructTransformationMat(\n        vs_Translate,\n        vs_RotQuat,\n        vec3(taper, taper, vs_RoadLength * 1.0)\n    );\n    vec4 worldPos = transformMat * vs_Pos;\n    gl_Position = u_ViewProj * worldPos;\n    fs_Pos = gl_Position;\n}\n"

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n#define TAPER_FACTOR 0.5\n\n// begin util funcs =================================================\nmat4 constructRotationMat(vec4 quat) {\n    float i = quat.x;\n    float j = quat.y;\n    float k = quat.z;\n    float r = quat.w;\n    return mat4(\n        1.0 - 2.0*(j*j + k*k), 2.0*(i*j + k*r), 2.0*(i*k - j*r), 0.0, // 1st col\n        2.0*(i*j - k*r), 1.0 - 2.0*(i*i + k*k), 2.0*(j*k + i*r), 0.0, // 2nd col\n        2.0*(i*k + j*r), 2.0*(j*k - i*r), 1.0 - 2.0*(i*i + j*j), 0.0, // 3rd col\n        0.0, 0.0, 0.0, 1.0                                            // 4th col\n    );\n}\n\nmat4 constructTranslationMat(vec3 t) {\n  return mat4(\n    1.0, 0.0, 0.0, 0.0, // 1st col\n    0.0, 1.0, 0.0, 0.0, // 2nd col\n    0.0, 0.0, 1.0, 0.0, // 3rd col\n    t.x, t.y, t.z, 1.0  // 4th col\n  );\n}\n\nmat4 constructScaleMat(vec3 s) {\n  return mat4(\n    s.x, 0.0, 0.0, 0.0,            // 1st col\n    0.0, s.y, 0.0, 0.0,            // 2nd col\n    0.0, 0.0, s.z, 0.0,            // 3rd col\n    0.0, 0.0, 0.0, 1.0             // 4th col\n  );\n}\n\nmat4 constructTransformationMat(vec3 t, vec4 quat, vec3 s) {\n  return constructTranslationMat(t) * constructRotationMat(quat)\n  * constructScaleMat(s);\n}\n// end util funcs =================================================\n\nuniform mat4 u_ViewProj;\nuniform float u_Time;\nuniform mat3 u_CameraAxes; // Used for rendering particles as billboards (quads that are always looking at the camera)\n\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\nin vec3 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene\nin float vs_Depth;\nin float vs_RoadLength;\nin float vs_RoadWidth;\nin vec4 vs_RotQuat;\n\nout vec4 fs_Col;\nout vec4 fs_Pos;\n\nvoid main()\n{\n    fs_Col = vec4(1.0, 1.0, 0.0, 1.0);\n    float scale = 0.8;\n    mat4 transformMat = constructTransformationMat(\n        vs_Translate,\n        vs_RotQuat,\n        vec3(scale, scale, scale)\n    );\n    vec4 worldPos = transformMat * vs_Pos;\n    gl_Position = u_ViewProj * worldPos;\n    fs_Pos = gl_Position;\n}\n"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\n// The vertex shader used to render the background of the scene\n\nin vec4 vs_Pos;\nout vec2 fs_Pos;\n\nvoid main() {\n  fs_Pos = vs_Pos.xy;\n  gl_Position = vs_Pos;\n}\n"

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform vec3 u_Eye, u_Ref, u_Up;\nuniform vec2 u_Dimensions;\nuniform float u_Time;\n\n// -1 to 1\nin vec2 fs_Pos;\nout vec4 out_Col;\n\nfloat random (in vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))\n                 * 43758.5453123);\n}\n\n// [-1, 1]\nvec2 random2(vec2 st){\n    st = vec2( dot(st,vec2(127.1,311.7)),\n              dot(st,vec2(269.5,183.3)) );\n    vec2 result = -1.0 + 2.0*fract(sin(st)*43758.5453123);\n    // result = normalize(result);\n    return result;\n}\n\nfloat valueNoise(vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n    \n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    \n    vec2 u = f;\n    u = smoothstep(0.0, 1.0, f);\n    // return a*(1.0-u.x)*(1.0-u.y) + b*u.x*(1.0-u.y) + c*(1.0-u.x)*u.y + d*u.x*u.y;\n    // return random(i);\n    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\n}\n\nfloat layerValueNoise(int layer, vec2 uv) {\n    float col = 0.0;\n    for (int i = 0; i < layer; ++i) {\n    \tvec2 st = uv * pow(2.0, float(i));\n        col += valueNoise(st) * pow(0.5, float(i) + 1.0);\n    }\n    return col;\n}\n\nfloat gradientNoise(vec2 st) {\n\tvec2 i = floor(st);\n    vec2 f = fract(st);\n    \n    float a = dot(random2(i), f - vec2(0.0, 0.0));\n    float b = dot(random2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));\n    float c = dot(random2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));\n    float d = dot(random2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));\n    \n    vec2 u = f;\n    u = smoothstep(0.0, 1.0, f);\n    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);   \n}\n\nfloat layerGradientNoise(int layer, vec2 uv) {    \n    float col = 0.0;\n    for (int i = 0; i < layer; ++i) {\n    \tvec2 st = uv * pow(2.0, float(i));\n        col += gradientNoise(st) * pow(0.5, float(i) + 1.0);\n    }\n    col = 0.5 + col * 0.5;\n    return col;\n}\n\nfloat fbm(vec2 p) {\n\treturn layerValueNoise(5, p);\n    // return layerGradientNoise(6, p);\n}\n\nfloat multiFBM(vec2 p) {\n\tvec2 q = vec2(fbm(p), fbm(p + vec2(5.2,1.3) + 0.3 * vec2(u_Time / 100.0)));\n    vec2 r = vec2(fbm(q + p + vec2(4.5, 3.9)), fbm(q + p + vec2(5.2,1.3)));\n    \n    return fbm(p + r * 4.0 );\n}\n\n// void main( out vec4 fragColor, in vec2 fragCoord )\nvoid main()\n{\n    // Normalized pixel coordinates (from 0 to 1)\n    // vec2 uv = fs_Pos / (u_Dimensions.yy / u_Dimensions.xx); \n    vec2 uv = 0.5 * (fs_Pos + vec2(1.0));\n    uv = vec2(uv.x, uv.y * (u_Dimensions.y/u_Dimensions.x));\n\n    // Time varying pixel color\n    float val = multiFBM(uv * 10.0);\n    float r = val;\n    float g = 1.0 - val;\n    float b = mix(r, g, val);\n\n\n\n    vec3 col = mix(vec3(g, b, r), vec3(0.0), val);\n\n    // Output to screen\n    out_Col = vec4(col, 1.0);\n    // out_Col = vec4(uv, 1.0, 1.0);\n    // out_Col = vec4(0.5 * (fs_Pos + vec2(1.0)), 0.0, 1.0);\n}"

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\nuniform mat4 u_ViewProj;\nuniform float u_Time;\n\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\nin vec4 vs_Nor; // Non-instanced, and presently unused\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\nin vec2 vs_UV; // Non-instanced, and presently unused in main(). Feel free to use it for your meshes.\n\nout vec4 fs_Col;\nout vec4 fs_Pos;\nout vec4 fs_Nor;\n\nvoid main()\n{\n    fs_Col = vs_Col;\n    fs_Pos = vs_Pos;\n    fs_Nor = vs_Nor;\n    gl_Position = u_ViewProj * vs_Pos;\n}"

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\n\nuniform float u_Time;\n\nin vec4 fs_Col;\nin vec4 fs_Pos;\nin vec4 fs_Nor;\n\nout vec4 out_Col;\n\nvoid main()\n{\n    float time = u_Time / 60.0;\n    float lightDis = 20.0;\n    vec3 lightPos = vec3(lightDis * sin(time), lightDis, lightDis * cos(time));\n    float dist = 1.0 - (length(fs_Pos.xyz) * 2.0);\n    vec3 norCol = (vec3(fs_Nor) + vec3(1.0)) * 0.5;\n    out_Col = vec4(norCol, 1.0);\n    vec3 lightDir = normalize(lightPos - vec3(fs_Pos));\n    float NdotL = max(dot(lightDir, vec3(fs_Nor)), 0.0);\n    float diffuse = max(0.2, NdotL);\n    out_Col = vec4(vec3(diffuse), 1.0);\n    out_Col = vec4(vec3(fs_Col) * diffuse, 1.0);\n}\n"

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\nuniform mat4 u_ViewProj;\nuniform float u_Time;\n\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\nin vec4 vs_Nor; // Non-instanced, and presently unused\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\nin vec2 vs_UV; // Non-instanced, and presently unused in main(). Feel free to use it for your meshes.\n\nout vec4 fs_Col;\nout vec4 fs_Pos;\nout vec4 fs_Nor;\n\nvoid main()\n{\n    fs_Col = vec4(vec3(vs_Col.x), 1.0);\n    fs_Pos = vs_Pos;\n    fs_Nor = vs_Nor;\n    gl_Position = u_ViewProj * vs_Pos;\n}"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\nuniform mat4 u_ViewProj;\nuniform float u_Time;\n\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\nin vec4 vs_Nor; // Non-instanced, and presently unused\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\nin vec2 vs_UV; // Non-instanced, and presently unused in main(). Feel free to use it for your meshes.\n\nout vec4 fs_Col;\nout vec4 fs_Pos;\nout vec4 fs_Nor;\n\nvoid main()\n{\n    if (vs_Col.z > 0.5) { // ground\n        fs_Col = vec4(vec3(0.529, 0.498, 0.423), 1.0);\n    } else {\n        fs_Col = vec4(vec3(0.0, 0.0, 1.0), 1.0);\n    }\n    fs_Pos = vs_Pos;\n    fs_Nor = vs_Nor;\n    gl_Position = u_ViewProj * vs_Pos;\n}"

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\nuniform mat4 u_ViewProj;\nuniform float u_Time;\n\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\nin vec4 vs_Nor; // Non-instanced, and presently unused\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\nin vec2 vs_UV; // Non-instanced, and presently unused in main(). Feel free to use it for your meshes.\n\nout vec4 fs_Col;\nout vec4 fs_Pos;\nout vec4 fs_Nor;\n\nvoid main()\n{\n    if (vs_Col.z > 0.5) { // ground\n        vec3 red = vec3(1.0, 0.0, 0.0);\n        vec3 green = vec3(0.0, 1.0, 0.0);\n        vec3 color = mix(red, green, 1.0 - vs_Col.y);\n        fs_Col = vec4(color, 1.0);\n    } else {\n        fs_Col = vec4(vec3(0.0, 0.0, 1.0), 1.0);\n    }\n    fs_Pos = vs_Pos;\n    fs_Nor = vs_Nor;\n    gl_Position = u_ViewProj * vs_Pos;\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map