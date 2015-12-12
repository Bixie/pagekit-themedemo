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

	module.exports = __webpack_require__(6)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(7)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\themedemo\\app\\components\\settings.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div class="uk-form uk-form-horizontal">

	//         <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
	//             <div data-uk-margin>

	//                 <h2 class="uk-margin-remove">{{ 'Theme demo Settings' | trans }}</h2>

	//             </div>
	//             <div data-uk-margin>

	//                 <button class="uk-button uk-button-primary" @click="save">{{ 'Save' | trans }}</button>

	//             </div>
	//         </div>

	//     </div>

	// </template>

	// <script>

	module.exports = {

	    props: ['package'],

	    settings: true,

	    methods: {

	        save: function save() {
	            this.$http.post('admin/system/settings/config', {
	                name: 'bixie/tehemedemo',
	                config: this.package.config
	            }, function () {
	                this.$notify('Settings saved.', '');
	            }).error(function (data) {
	                this.$notify(data, 'danger');
	            }).always(function () {
	                this.$parent.close();
	            });
	        }

	    }

	};

	window.Extensions.components['settings-themedemo'] = module.exports;

	// </script>

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form uk-form-horizontal\">\n\n        <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n            <div data-uk-margin>\n\n                <h2 class=\"uk-margin-remove\">{{ 'Theme demo Settings' | trans }}</h2>\n\n            </div>\n            <div data-uk-margin>\n\n                <button class=\"uk-button uk-button-primary\" @click=\"save\">{{ 'Save' | trans }}</button>\n\n            </div>\n        </div>\n\n\n    </div>";

/***/ }
/******/ ]);