(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tv-icon"] = factory();
	else
		root["tv-icon"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "IconBang", function() { return /* reexport */ IconBang; });
__webpack_require__.d(__webpack_exports__, "IconCheck", function() { return /* reexport */ IconCheck; });
__webpack_require__.d(__webpack_exports__, "IconInfo", function() { return /* reexport */ IconInfo; });
__webpack_require__.d(__webpack_exports__, "IconTimes", function() { return /* reexport */ IconTimes; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconBang.vue?vue&type=template&id=14d169c7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M96 512a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M49.22 0h93.56a24 24 0 0 1 24 25.2l-13.63 272a24 24 0 0 1-24 22.8H62.84a24 24 0 0 1-24-22.8l-13.59-272A24 24 0 0 1 49.22 0z"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/IconBang.vue?vue&type=template&id=14d169c7&

// CONCATENATED MODULE: ./src/mixins/icon.js
/* harmony default export */ var icon = ({
  props: {
    primary: {
      type: String,
      required: false,
      default: 'text-gray-400',
    },
    secondary: {
      type: String,
      required: false,
      default: 'text-gray-300',
    },
  },
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconBang.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconBangvue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconBang.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconBangvue_type_script_lang_js_ = (IconBangvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/IconBang.vue





/* normalize component */

var component = normalizeComponent(
  src_IconBangvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconBang = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconCheck.vue?vue&type=template&id=1323e48a&
var IconCheckvue_type_template_id_1323e48a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M504.5 144.42L264.75 385.5 192 312.59l240.11-241a25.49 25.49 0 0 1 36.06-.14l.14.14L504.5 108a25.86 25.86 0 0 1 0 36.42z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M264.67 385.59l-54.57 54.87a25.5 25.5 0 0 1-36.06.14l-.14-.14L7.5 273.1a25.84 25.84 0 0 1 0-36.41l36.2-36.41a25.49 25.49 0 0 1 36-.17l.16.17z"}})])}
var IconCheckvue_type_template_id_1323e48a_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconCheck.vue?vue&type=template&id=1323e48a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconCheck.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconCheckvue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconCheck.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconCheckvue_type_script_lang_js_ = (IconCheckvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconCheck.vue





/* normalize component */

var IconCheck_component = normalizeComponent(
  src_IconCheckvue_type_script_lang_js_,
  IconCheckvue_type_template_id_1323e48a_render,
  IconCheckvue_type_template_id_1323e48a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconCheck = (IconCheck_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconInfo.vue?vue&type=template&id=23f9c9de&
var IconInfovue_type_template_id_23f9c9de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M20 448h152a20 20 0 0 1 20 20v24a20 20 0 0 1-20 20H20a20 20 0 0 1-20-20v-24a20 20 0 0 1 20-20z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M96 128a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm28 64H20a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h28v192h96V212a20 20 0 0 0-20-20z"}})])}
var IconInfovue_type_template_id_23f9c9de_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconInfo.vue?vue&type=template&id=23f9c9de&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconInfovue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconInfovue_type_script_lang_js_ = (IconInfovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconInfo.vue





/* normalize component */

var IconInfo_component = normalizeComponent(
  src_IconInfovue_type_script_lang_js_,
  IconInfovue_type_template_id_23f9c9de_render,
  IconInfovue_type_template_id_23f9c9de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconInfo = (IconInfo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconTimes.vue?vue&type=template&id=03c64f16&
var IconTimesvue_type_template_id_03c64f16_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 352 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M9.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L176,322.72,109.28,256ZM342.79,111.45,320.55,89.21a31.46,31.46,0,0,0-44.48,0L176,189.28,242.72,256,342.79,155.93a31.46,31.46,0,0,0,0-44.48Z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M342.79,356.07a31.46,31.46,0,0,1,0,44.48l-22.24,22.24a31.46,31.46,0,0,1-44.48,0L9.21,155.93a31.46,31.46,0,0,1,0-44.48L31.45,89.21a31.46,31.46,0,0,1,44.48,0Z"}})])}
var IconTimesvue_type_template_id_03c64f16_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconTimes.vue?vue&type=template&id=03c64f16&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconTimes.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconTimesvue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconTimes.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconTimesvue_type_script_lang_js_ = (IconTimesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconTimes.vue





/* normalize component */

var IconTimes_component = normalizeComponent(
  src_IconTimesvue_type_script_lang_js_,
  IconTimesvue_type_template_id_03c64f16_render,
  IconTimesvue_type_template_id_03c64f16_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconTimes = (IconTimes_component.exports);
// CONCATENATED MODULE: ./src/index.js




const components = [
  IconBang,
  IconCheck,
  IconInfo,
  IconTimes,
]

/* harmony default export */ var src_0 = ({
  install (Vue, options = {}) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
});


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=tv-icon.umd.js.map