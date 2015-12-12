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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(9)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\themedemo\\app\\components\\widget-demo.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div class="uk-form-horizontal">

	//         <div class="uk-form-row">

	//             <label class="uk-form-label">{{ 'Demo style' | trans }}</label>

	//             <div class="uk-form-controls">

	//                 <select class="uk-form-width-large" v-model="widget.theme.demo_style">

	//                     <option v-for="option in styles | themeStyles true" :value="option.id">{{ option.value }}</option>

	//                 </select>

	//             </div>

	//         </div>

	//     </div>

	// </template>

	// <script>

	module.exports = {

	    section: {
	        label: 'Demo',
	        priority: 190
	    },

	    data: function data() {
	        return window.$themedemo;
	    },

	    props: ['widget', 'config'],

	    filters: {
	        themeStyles: function themeStyles(value, select) {
	            var vm = this,
	                options = select ? [{ value: '', text: vm.$trans('- default style -') }] : [];
	            _.each(value, function (style) {
	                options.push({ value: style, text: vm.$trans(_.startCase(style)) });
	            });
	            return options;
	        }
	    }
	};

	window.Widgets.components['bixie-themedemo:settings'] = module.exports;

	// </script>

/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-horizontal\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label class=\"uk-form-label\">{{ 'Demo style' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select class=\"uk-form-width-large\" v-model=\"widget.theme.demo_style\">\r\n                    <option v-for=\"option in styles | themeStyles true\" :value=\"option.id\">{{ option.value }}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";

/***/ }

/******/ });