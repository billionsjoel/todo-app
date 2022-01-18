/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #eee;\\n}\\n\\nh1 {\\n  text-align: center;\\n}\\n\\n.container {\\n  max-width: 20%;\\n  background-color: rgb(255, 255, 255);\\n  margin-left: auto;\\n  margin-right: auto;\\n  border-radius: 5px;\\n  box-shadow: 2px 2px 2px #b3b2b2;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 0 1rem;\\n}\\n\\n.task-form {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.input-field {\\n  height: 2rem !important;\\n  border: none !important;\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n  margin-left: 1rem;\\n}\\n\\n.input {\\n  outline: none;\\n  border: none;\\n}\\n\\n.enter-icon {\\n  transform: rotate(360deg);\\n  transform: scaleY(-1);\\n  margin-right: 1rem;\\n}\\n\\ninput:focus {\\n  outline: none;\\n}\\n\\n.inputs {\\n  display: flex;\\n  gap: 1rem;\\n}\\n\\n.ul {\\n  list-style: none;\\n  padding-bottom: 1rem;\\n}\\n\\n.li {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1rem;\\n}\\n\\n.li:not(:last-child) {\\n  border-bottom: 1px solid #b3b2b2;\\n}\\n\\n.remove-all {\\n  text-align: center;\\n  background-color: #eee;\\n  padding: 1.2rem;\\n}\\n\\n.rotate {\\n  transition: transform 0.7s ease-in-out;\\n  transform: rotate(1.5turn);\\n}\\n\\n.active {\\n  background-color: rgb(248, 239, 158);\\n  color: orange;\\n}\\n\\n.delete-icon {\\n  display: none;\\n}\\n\\n.drag {\\n  cursor: move;\\n}\\n\\n.active .drag {\\n  display: none;\\n}\\n\\n.active .delete-icon {\\n  display: block;\\n}\\n\\n.check:checked + .input {\\n  text-decoration: line-through;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Compare_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Compare.js */ \"./src/modules/Compare.js\");\n/* harmony import */ var _modules_RenderTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/RenderTask.js */ \"./src/modules/RenderTask.js\");\n/* harmony import */ var _modules_AddTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/AddTask.js */ \"./src/modules/AddTask.js\");\n/* harmony import */ var _modules_RenderAllTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/RenderAllTasks.js */ \"./src/modules/RenderAllTasks.js\");\n/* harmony import */ var _modules_UpdateTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/UpdateTask.js */ \"./src/modules/UpdateTask.js\");\n/* harmony import */ var _modules_RemoveTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/RemoveTask.js */ \"./src/modules/RemoveTask.js\");\n/* harmony import */ var _modules_removeAllCompletedTasks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/removeAllCompletedTasks.js */ \"./src/modules/removeAllCompletedTasks.js\");\n\n\n\n\n\n\n\n\n\nconst refresh = document.querySelector('.refresh');\nconst pushTaskToDom = document.querySelector('.add-task');\nconst inputField = document.querySelector('.input-field');\n\nconst allTasks = [];\nlet storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];\n\nallTasks.sort(_modules_Compare_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).map((task) => {\n  (0,_modules_RenderTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task);\n  return task;\n});\n\n(0,_modules_RenderAllTasks_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\nif (pushTaskToDom) {\n  pushTaskToDom.addEventListener('click', _modules_AddTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  inputField.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      (0,_modules_AddTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n  });\n}\n\nconst spin = () => {\n  refresh.classList.add('rotate');\n  setTimeout(() => refresh.classList.remove('rotate'), 1000);\n};\n\nif (refresh) {\n  refresh.addEventListener('click', spin);\n}\n\nconst allListItems = document.querySelectorAll('li');\nallListItems.forEach((li) => {\n  li.addEventListener('click', (e) => {\n    const listTarget = e.target;\n    if (\n      listTarget.classList.contains('drag') || listTarget.classList.contains('check')\n    ) {\n      return;\n    }\n\n    allListItems.forEach((listTarget) => listTarget.classList.remove('active'));\n    li.classList.add('active');\n\n    const inputListItem = li.querySelector('.input');\n    inputListItem.readOnly = false;\n    inputListItem.focus();\n    inputListItem.setSelectionRange(\n      inputListItem.value.length,\n      inputListItem.value.length,\n    );\n  });\n});\n\ndocument.querySelectorAll('li .input').forEach((input) => {\n  input.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      const taskID = Number(input.parentNode.parentNode.id.split('-')[1]);\n      const filteredTask = storedTasks.find((task) => task.index === taskID);\n      filteredTask.description = input.value.trim();\n      (0,_modules_UpdateTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(storedTasks, filteredTask);\n      input.readOnly = true;\n    }\n  });\n});\n\ndocument.querySelectorAll('li .check').forEach((input) => {\n  input.addEventListener('change', () => {\n    const storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];\n    const taskID = Number(input.parentNode.parentNode.id.split('-')[1]);\n\n    const filteredTask = storedTasks.find((task) => task.index === taskID);\n\n    filteredTask.completed = input.checked;\n\n    (0,_modules_UpdateTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(storedTasks, filteredTask);\n  });\n});\n\ndocument.querySelectorAll('.delete-icon').forEach((deleteButton) => {\n  deleteButton.addEventListener('click', () => {\n    const id = Number(deleteButton.parentNode.parentNode.id.split('-')[1]);\n\n    (0,_modules_RemoveTask_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(storedTasks, id);\n    storedTasks = JSON.parse(localStorage.getItem('addTaskToStorage'));\n    deleteButton.parentNode.parentNode.remove();\n  });\n});\n\nconst removeAll = document.querySelector('.remove-all');\nremoveAll.addEventListener('click', () => {\n  (0,_modules_removeAllCompletedTasks_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/AddTask.js":
/*!********************************!*\
  !*** ./src/modules/AddTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _TaskClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskClass.js */ \"./src/modules/TaskClass.js\");\n/* harmony import */ var _RenderTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderTask.js */ \"./src/modules/RenderTask.js\");\n\n\n\nconst storedTasks =\tJSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];\nlet allTasks = [];\n\nconst addTask = () => {\n  const form = document.querySelector('.task-form');\n  const description = form.elements.task.value;\n  const completed = false;\n  const index = storedTasks.length + 1;\n\n  const task = new _TaskClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description, completed, index);\n  allTasks = storedTasks || [];\n  allTasks.push(task);\n  localStorage.setItem('addTaskToStorage', JSON.stringify(allTasks));\n  form.reset();\n  (0,_RenderTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task);\n};\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/AddTask.js?");

/***/ }),

/***/ "./src/modules/Compare.js":
/*!********************************!*\
  !*** ./src/modules/Compare.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compare)\n/* harmony export */ });\nconst compare = (a, b) => {\n  const taskA = a.index;\n  const taskB = b.index;\n\n  let comparison = 0;\n  if (taskA > taskB) {\n    comparison = 1;\n  } else if (taskA < taskB) {\n    comparison = -1;\n  }\n  return comparison;\n};\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Compare.js?");

/***/ }),

/***/ "./src/modules/RemoveTask.js":
/*!***********************************!*\
  !*** ./src/modules/RemoveTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeTask)\n/* harmony export */ });\nconst removeTask = (allTasks, index) => {\n  allTasks = allTasks.filter((task) => task.index !== index);\n  allTasks = allTasks.map((task) => {\n    if (task.index > index) {\n      task.index -= 1;\n    }\n    return task;\n  });\n  localStorage.setItem('addTaskToStorage', JSON.stringify(allTasks));\n};\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/RemoveTask.js?");

/***/ }),

/***/ "./src/modules/RenderAllTasks.js":
/*!***************************************!*\
  !*** ./src/modules/RenderAllTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderAllTasks)\n/* harmony export */ });\nconst storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];\nconst ul = document.querySelector('.ul');\n\nconst renderAllTasks = (storedTasks) => {\n  if (storedTasks) {\n    const li = `<li class=\"li\" id=\"task-${storedTasks.index}\">\n<div class=\"inputs\">\n    <input type=\"checkbox\" class=\"check\" name=\"checkTask\" ${\n  storedTasks.completed ? 'checked' : ''\n}>\n    <input type=\"text\" value=\"${\n  storedTasks.description\n}\" class=\"label input\" readonly>\n</div>\n<div class=\"input-icons\">\n<svg height=\"15\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\" class=\"drag\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z\" />\n</svg>\n<svg height=\"15\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\" class=\"delete-icon\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\" />\n</svg>\n</div>\n</li>`;\n    ul.innerHTML += li;\n  }\n};\n\nstoredTasks.map((task) => {\n  renderAllTasks(task);\n  return task;\n});\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/RenderAllTasks.js?");

/***/ }),

/***/ "./src/modules/RenderTask.js":
/*!***********************************!*\
  !*** ./src/modules/RenderTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTask)\n/* harmony export */ });\nconst ul = document.querySelector('.ul');\n\nconst renderTask = (task) => {\n  if (task) {\n    const li = `<li class=\"li\" id=\"task-${task.index}\">\n<div class=\"inputs\">\n    <input type=\"checkbox\" class=\"check\" name=\"checkTask\" ${\n  task.completed ? 'checked' : ''\n}>\n    <input type=\"text\" value=\"${task.description}\" class=\"label input\" readonly>\n</div>\n<div class=\"input-icons\">\n<svg height=\"15\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\" class=\"drag\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z\" />\n</svg>\n<svg height=\"15\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\" class=\"delete-icon\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\" />\n</svg>\n</div>\n</li>`;\n    ul.innerHTML += li;\n    window.location.reload();\n  }\n};\n\nrenderTask();\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/RenderTask.js?");

/***/ }),

/***/ "./src/modules/TaskClass.js":
/*!**********************************!*\
  !*** ./src/modules/TaskClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/modules/TaskClass.js?");

/***/ }),

/***/ "./src/modules/UpdateTask.js":
/*!***********************************!*\
  !*** ./src/modules/UpdateTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateTask)\n/* harmony export */ });\nfunction updateTask(filteredTask, taskID) {\n  filteredTask[taskID.index - 1] = taskID;\n\n  document\n    .querySelectorAll('li')\n    .forEach((li) => li.classList.remove('active'));\n\n  localStorage.setItem('addTaskToStorage', JSON.stringify(filteredTask));\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/UpdateTask.js?");

/***/ }),

/***/ "./src/modules/removeAllCompletedTasks.js":
/*!************************************************!*\
  !*** ./src/modules/removeAllCompletedTasks.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeAllCompleted)\n/* harmony export */ });\nconst removeAllCompleted = () => {\n  let storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];\n  storedTasks = storedTasks.sort((a, b) => a.index - b.index);\n  storedTasks = storedTasks.filter((task) => !task.completed);\n  storedTasks = storedTasks.map((task, index) => {\n    task.index = index + 1;\n    return task;\n  });\n  localStorage.setItem('addTaskToStorage', JSON.stringify(storedTasks));\n  window.location.reload();\n};\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/removeAllCompletedTasks.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;