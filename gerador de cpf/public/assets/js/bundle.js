/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/module-cpf/GeraCPF.js":
/*!*******************************************!*\
  !*** ./src/modules/module-cpf/GeraCPF.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeraCPF)
/* harmony export */ });
/* harmony import */ var _ValidaCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidaCPF */ "./src/modules/module-cpf/ValidaCPF.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var GeraCPF = /*#__PURE__*/function () {
  function GeraCPF() {
    _classCallCheck(this, GeraCPF);
  }
  return _createClass(GeraCPF, [{
    key: "rand",
    value: function rand() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000000;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999999999;
      return String(Math.floor(Math.random() * (max - min) + min));
    }
  }, {
    key: "formatado",
    value: function formatado(cpf) {
      return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
    }
  }, {
    key: "geraNovoCpf",
    value: function geraNovoCpf() {
      var cpfSemDigitos = this.rand();
      var digito1 = _ValidaCPF__WEBPACK_IMPORTED_MODULE_0__["default"].geraDigito(cpfSemDigitos);
      var digito2 = _ValidaCPF__WEBPACK_IMPORTED_MODULE_0__["default"].geraDigito(cpfSemDigitos + digito1);
      var novoCPF = cpfSemDigitos + digito1 + digito2;
      return this.formatado(novoCPF);
    }
  }]);
}();


/***/ }),

/***/ "./src/modules/module-cpf/ValidaCPF.js":
/*!*********************************************!*\
  !*** ./src/modules/module-cpf/ValidaCPF.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidaCPF)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ValidaCPF = /*#__PURE__*/function () {
  function ValidaCPF(cpfEnviado) {
    _classCallCheck(this, ValidaCPF);
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }
  return _createClass(ValidaCPF, [{
    key: "sequencia",
    value: function sequencia() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  }, {
    key: "geraNovoCpf",
    value: function geraNovoCpf() {
      var cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      var digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      var digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }
  }, {
    key: "valida",
    value: function valida() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== 'string') return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.sequencia()) return false;
      this.geraNovoCpf();
      return this.novoCpf === this.cpfLimpo;
    }
  }], [{
    key: "geraDigito",
    value: function geraDigito(cpfSemDigitos) {
      var total = 0;
      var reverso = cpfSemDigitos.length + 1;
      var _iterator = _createForOfIteratorHelper(cpfSemDigitos),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var stringNumerica = _step.value;
          total += reverso * Number(stringNumerica);
          reverso--;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var digito = 11 - total % 11;
      return digito <= 9 ? String(digito) : '0';
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/modelo.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/modelo.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: rgb(0, 192, 192);
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: 500px;
    background-color: rgb(222, 221, 221);
    border-radius: 20px;
    padding: 20px;
}

.container h1 {
    font-size: 40px;
    padding: 10px;
}

.container p {
    font-size: 20px;
    padding: 10px;
}

.container-btn {
    display: flex;
    width: 100%;
}

.btn, .limpar {
    padding: 5px;
    width: 50%;
    margin: 2px;
}

.cpf-gerado {
    margin-top: 10px;
    width: 80%;
    text-align: center;
    font-size: 25px;
    background-color: aliceblue;
}

.com-borda {
    border: 1px solid black;
}`, "",{"version":3,"sources":["webpack://./src/assets/css/modelo.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;IAClC,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,kBAAkB;IAClB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(0, 192, 192);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 50px auto;\r\n    width: 500px;\r\n    background-color: rgb(222, 221, 221);\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n}\r\n\r\n.container h1 {\r\n    font-size: 40px;\r\n    padding: 10px;\r\n}\r\n\r\n.container p {\r\n    font-size: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.container-btn {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.btn, .limpar {\r\n    padding: 5px;\r\n    width: 50%;\r\n    margin: 2px;\r\n}\r\n\r\n.cpf-gerado {\r\n    margin-top: 10px;\r\n    width: 80%;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    background-color: aliceblue;\r\n}\r\n\r\n.com-borda {\r\n    border: 1px solid black;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/modelo.css":
/*!***********************************!*\
  !*** ./src/assets/css/modelo.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modelo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./modelo.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/modelo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modelo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modelo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modelo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modelo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "../../../node_modules/cpf-cnpj-validator/dist/cpf-cnpj-validator.es.js":
/*!******************************************************************************!*\
  !*** ../../../node_modules/cpf-cnpj-validator/dist/cpf-cnpj-validator.es.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cnpj: () => (/* binding */ cnpj),
/* harmony export */   cpf: () => (/* binding */ cpf),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   validator: () => (/* binding */ validator)
/* harmony export */ });
/*!
 * cpf-cnpj-validator v1.0.3
 * (c) 2020-present Carvalho, Vinicius Luiz <carvalho.viniciusluiz@gmail.com>
 * Released under the MIT License.
 */
const BLACKLIST = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '12345678909'
];
const STRICT_STRIP_REGEX = /[.-]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;
const verifierDigit = (digits) => {
    const numbers = digits
        .split('')
        .map(number => {
        return parseInt(number, 10);
    });
    const modulus = numbers.length + 1;
    const multiplied = numbers.map((number, index) => number * (modulus - index));
    const mod = multiplied.reduce((buffer, number) => buffer + number) % 11;
    return (mod < 2 ? 0 : 11 - mod);
};
const strip = (number, strict) => {
    const regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
    return (number || '').replace(regex, '');
};
const format = (number) => {
    return strip(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
};
const isValid = (number, strict) => {
    const stripped = strip(number, strict);
    if (!stripped) {
        return false;
    }
    if (stripped.length !== 11) {
        return false;
    }
    if (BLACKLIST.includes(stripped)) {
        return false;
    }
    let numbers = stripped.substr(0, 9);
    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);
    return numbers.substr(-2) === stripped.substr(-2);
};
const generate = (formatted) => {
    let numbers = '';
    for (let i = 0; i < 9; i += 1) {
        numbers += Math.floor(Math.random() * 9);
    }
    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);
    return (formatted ? format(numbers) : numbers);
};
var cpf = {
    verifierDigit,
    strip,
    format,
    isValid,
    generate,
};

const BLACKLIST$1 = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999'
];
const STRICT_STRIP_REGEX$1 = /[-\\/.]/g;
const LOOSE_STRIP_REGEX$1 = /[^\d]/g;
const verifierDigit$1 = (digits) => {
    let index = 2;
    const reverse = digits.split('').reduce((buffer, number) => {
        return [parseInt(number, 10)].concat(buffer);
    }, []);
    const sum = reverse.reduce((buffer, number) => {
        buffer += number * index;
        index = (index === 9 ? 2 : index + 1);
        return buffer;
    }, 0);
    const mod = sum % 11;
    return (mod < 2 ? 0 : 11 - mod);
};
const strip$1 = (number, strict) => {
    const regex = strict ? STRICT_STRIP_REGEX$1 : LOOSE_STRIP_REGEX$1;
    return (number || '').replace(regex, '');
};
const format$1 = (number) => {
    return strip$1(number).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
};
const isValid$1 = (number, strict) => {
    const stripped = strip$1(number, strict);
    if (!stripped) {
        return false;
    }
    if (stripped.length !== 14) {
        return false;
    }
    if (BLACKLIST$1.includes(stripped)) {
        return false;
    }
    let numbers = stripped.substr(0, 12);
    numbers += verifierDigit$1(numbers);
    numbers += verifierDigit$1(numbers);
    return numbers.substr(-2) === stripped.substr(-2);
};
const generate$1 = (formatted) => {
    let numbers = '';
    for (let i = 0; i < 12; i += 1) {
        numbers += Math.floor(Math.random() * 9);
    }
    numbers += verifierDigit$1(numbers);
    numbers += verifierDigit$1(numbers);
    return (formatted ? format$1(numbers) : numbers);
};
var cnpj = {
    verifierDigit: verifierDigit$1,
    strip: strip$1,
    format: format$1,
    isValid: isValid$1,
    generate: generate$1
};

const validator = joi => ({
    type: 'document',
    base: joi.string(),
    messages: {
        'document.cpf': 'CPF inválido',
        'document.cnpj': 'CNPJ inválido'
    },
    rules: {
        cpf: {
            validate(value, helpers, args, options) {
                if (!cpf.isValid(value)) {
                    return helpers.error('document.cpf');
                }
                return value;
            }
        },
        cnpj: {
            validate(value, helpers, args, options) {
                if (!cnpj.isValid(value)) {
                    return helpers.error('document.cnpj');
                }
                return value;
            }
        }
    }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_module_cpf_GeraCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/module-cpf/GeraCPF */ "./src/modules/module-cpf/GeraCPF.js");
/* harmony import */ var _assets_css_modelo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/modelo.css */ "./src/assets/css/modelo.css");
/* harmony import */ var cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cpf-cnpj-validator */ "../../../node_modules/cpf-cnpj-validator/dist/cpf-cnpj-validator.es.js");



var btn = document.querySelector('.btn');
var btnLimpar = document.querySelector('.limpar');
var cpfGerado = document.querySelector('.cpf-gerado');
btn.addEventListener('click', function () {
  var gera = new _modules_module_cpf_GeraCPF__WEBPACK_IMPORTED_MODULE_0__["default"]();
  cpfGerado.innerHTML = gera.geraNovoCpf();
  cpfGerado.classList.add('com-borda');
});
btnLimpar.addEventListener('click', function () {
  cpfGerado.innerHTML = '';
  cpfGerado.classList.remove('com-borda');
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map