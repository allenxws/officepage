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
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function () {
	    document.addEventListener('DOMContentLoaded', function () {
	        Array.prototype.slice.call(document.querySelectorAll('.jobs-menu li a')).forEach(function (jobLink) {
	            jobLink.addEventListener('click', function () {
	                activeJob(jobLink.getAttribute('data-pos'));
	            });
	        });
	    });

	    function intval(v) {
	        v = parseInt(v);
	        return isNaN(v) ? 0 : v;
	    }

	    function getPos(e) {
	        var l = 0;
	        var t = 0;
	        var w = intval(e.style.width);
	        var h = intval(e.style.height);
	        var wb = e.offsetWidth;
	        var hb = e.offsetHeight;
	        while (e.offsetParent) {
	            l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
	            t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
	            e = e.offsetParent;
	        }
	        l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
	        t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
	        return { x: l, y: t, w: w, h: h, wb: wb, hb: hb };
	    }

	    function getScroll() {
	        var t = void 0,
	            l = void 0,
	            w = void 0,
	            h = void 0;

	        if (document.documentElement && document.documentElement.scrollTop) {
	            t = document.documentElement.scrollTop;
	            l = document.documentElement.scrollLeft;
	            w = document.documentElement.scrollWidth;
	            h = document.documentElement.scrollHeight;
	        } else if (document.body) {
	            t = document.body.scrollTop;
	            l = document.body.scrollLeft;
	            w = document.body.scrollWidth;
	            h = document.body.scrollHeight;
	        }
	        return { t: t, l: l, w: w, h: h };
	    }

	    function goScroll(el, duration) {
	        if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) != 'object') {
	            el = document.getElementById(el);
	        }

	        if (!el) return;

	        var z = new Object();
	        z.el = el;
	        z.p = getPos(el);
	        z.s = getScroll();
	        z.clear = function () {
	            window.clearInterval(z.timer);
	            z.timer = null;
	        };
	        z.t = new Date().getTime();

	        z.step = function () {
	            var t = new Date().getTime();
	            var p = (t - z.t) / duration;
	            if (t >= duration + z.t) {
	                z.clear();
	                window.setTimeout(function () {
	                    z.scroll(z.p.y, z.p.x);
	                }, 13);
	            } else {
	                var st = (-Math.cos(p * Math.PI) / 2 + 0.5) * (z.p.y - z.s.t) + z.s.t;
	                var sl = (-Math.cos(p * Math.PI) / 2 + 0.5) * (z.p.x - z.s.l) + z.s.l;
	                z.scroll(st, sl);
	            }
	        };
	        z.scroll = function (t, l) {
	            window.scrollTo(l, t);
	        };
	        z.timer = window.setInterval(function () {
	            z.step();
	        }, 13);
	    }

	    /**
	     * display the specified job detail
	     *
	     * @param {string} id job dom id
	     */
	    function activeJob(id) {
	        clearActive();
	        var jobItem = document.getElementById(id + '_node');
	        jobItem.classList.add('active');
	        goScroll(id, 500);
	    }

	    /**
	     * clear all class name 'active'
	     */
	    function clearActive() {
	        Array.prototype.slice.call(document.querySelectorAll('.part')).forEach(function (jobDetail) {
	            if (jobDetail.classList.contains('active')) {
	                jobDetail.classList.remove('active');
	            }
	        });
	    }
	})();

/***/ }
/******/ ]);