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

	'use strict';

	var _carousel = __webpack_require__(114);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _svgLine = __webpack_require__(134);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    document.addEventListener("DOMContentLoaded", ready);

	    function ready() {
	        new _carousel2.default('.banner-slides');
	        var coverage = (0, _svgLine.createNew)('.coverage .animated-line', 1, 1);
	        var speed = (0, _svgLine.createNew)('.speed .animated-line', 1, 2);
	        var monitor = (0, _svgLine.createNew)('.monitor .animated-line', 1, 3);
	        var safety = (0, _svgLine.createNew)('.safety .animated-line', 1, 4);

	        // supervise the scroll event
	        window.addEventListener('scroll', function () {
	            animation(coverage, speed, monitor, safety);
	        });
	    }

	    function animation(coverage, speed, monitor, safety) {
	        // active the animated Line when scroll to the section
	        if (window.pageYOffset >= 150 && !coverage.onSection) {
	            coverage.animationGo();
	            coverage.onSection = true;
	        } else if (window.pageYOffset < 150 && coverage.onSection) {
	            coverage.animationBack();
	            coverage.onSection = false;
	        }
	        if (window.pageYOffset >= 750 && !speed.onSection) {
	            speed.animationGo();
	            speed.onSection = true;
	        } else if (window.pageYOffset < 750 && speed.onSection) {
	            speed.animationBack();
	            speed.onSection = false;
	        }
	        if (window.pageYOffset >= 1540 && !monitor.onSection) {
	            monitor.animationGo();
	            monitor.onSection = true;
	        } else if (window.pageYOffset < 1540 && monitor.onSection) {
	            monitor.animationBack();
	            monitor.onSection = false;
	        }
	        if (window.pageYOffset >= 2200 && !safety.onSection) {
	            safety.animationGo();
	            safety.onSection = true;
	        } else if (window.pageYOffset < 2200 && safety.onSection) {
	            safety.animationBack();
	            safety.onSection = false;
	        }
	    }
	})();

/***/ },

/***/ 114:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file 轮播图模块
	 * @author yuzi.ma(yuzi.ma@upai.com)
	 */
	var Carousel = function () {
	    /**
	     * 初始化轮播
	     *
	     * @param {string} crsl_el 轮播块选择器名
	     */
	    function Carousel(crsl_el) {
	        _classCallCheck(this, Carousel);

	        this.sliding = false;
	        this.loopTimeout = null;
	        this._timeout = 5000;

	        this.dom = document.querySelector(crsl_el) || null;
	        this.items = this.dom.children || null;
	        this.imageWidth = this.items[0].offsetWidth;
	        this.prevLink = this.dom.parentNode.querySelector('.prev');
	        this.nextLink = this.dom.parentNode.querySelector('.next');
	        this.prevLink.onclick = this.prev.bind(this);
	        this.nextLink.onclick = this.next.bind(this);

	        window.addEventListener('resize', this.update.bind(this));

	        //  Cloning first and last item
	        this.dom.insertBefore(this.items[this.items.length - 1].cloneNode(true), this.items[0]);
	        this.dom.appendChild(this.items[1].cloneNode(true));

	        this.imageNumber = this.items.length || 0;
	        this.firstImageNum = 1;
	        this.lastImageNum = this.imageNumber - 2;
	        this.currentImage = this.firstImageNum;

	        this.dom.style.left = '-' + parseInt(this.currentImage * this.imageWidth) + 'px';
	        var self = this;
	        return this.loopTimeout = setTimeout(function () {
	            self.slider();
	        }, this._timeout);
	    }

	    /**
	     * 执行滑动
	     *
	     * @param {string} direction 滑动方向
	     */


	    _createClass(Carousel, [{
	        key: 'slider',
	        value: function slider(direction) {
	            var self = this;
	            direction = direction || 'next';
	            this.animate({
	                delay: 17,
	                duration: 1500,
	                delta: function delta(p) {
	                    return Math.pow(p, 4);
	                },
	                step: function step(delta) {
	                    if (direction == 'next') {
	                        this.dom.style.left = '-' + parseInt(this.currentImage * this.imageWidth + delta * this.imageWidth) + 'px';
	                    } else if (direction == 'prev') {
	                        this.dom.style.left = '-' + parseInt(this.currentImage * this.imageWidth - delta * this.imageWidth) + 'px';
	                    }
	                },
	                callback: function callback() {
	                    this.sliding = false;
	                    if (direction == 'next') {
	                        this.currentImage++;
	                    } else if (direction == 'prev') {
	                        this.currentImage--;
	                    }

	                    // if it doesn’t slied to the last image, keep sliding
	                    if (this.currentImage < this.imageNumber - 1 && this.currentImage > 0) {
	                        this.loopTimeout = setTimeout(function () {
	                            self.slider();
	                        }, this._timeout);
	                    }
	                    // if current image it’s the first one, it slides back to the last one
	                    else if (this.currentImage === 0) {
	                            this.goBack(this.lastImageNum);
	                            this.loopTimeout = setTimeout(function () {
	                                self.slider();
	                            }, this._timeout);
	                        }
	                        // if current image it’s the last one, it slides back to the first one
	                        else {
	                                // call the goBack function to slide to the first image
	                                this.goBack(this.firstImageNum);
	                                this.loopTimeout = setTimeout(function () {
	                                    self.slider();
	                                }, this._timeout);
	                            }
	                }
	            });
	        }

	        /**
	         * 滑动动画
	         *
	         * @param {object} opts 滑动配置
	         */

	    }, {
	        key: 'animate',
	        value: function animate(opts) {
	            var self = this;
	            this.sliding = true;
	            var start = new Date();
	            var id = setInterval(function () {
	                var timePassed = new Date() - start;
	                var progress = timePassed / opts.duration;
	                if (progress > 1) {
	                    progress = 1;
	                }
	                var delta = opts.delta.bind(self)(progress);

	                opts.step.bind(self)(delta);
	                if (progress == 1) {
	                    clearInterval(id);
	                    opts.callback.bind(self)();
	                }
	            }, opts.delay || 17);
	        }
	    }, {
	        key: 'prev',
	        value: function prev() {
	            var self = this;
	            var id = setInterval(function () {
	                if (!self.sliding) {
	                    clearTimeout(self.loopTimeout);
	                    self.slider('prev');
	                    clearInterval(id);
	                }
	            }, 17);
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            var self = this;
	            var id = setInterval(function () {
	                if (!self.sliding) {
	                    clearTimeout(self.loopTimeout);
	                    self.slider();
	                    clearInterval(id);
	                }
	            }, 17);
	        }

	        /**
	         * 跳转到某一页
	         *
	         * @param {number} toNumber 跳转页
	         */

	    }, {
	        key: 'goBack',
	        value: function goBack(toNumber) {
	            this.currentImage = toNumber;
	            this.dom.style.left = '-' + parseInt(this.currentImage * this.imageWidth) + 'px';
	        }

	        /**
	         * 更新轮播图宽度
	         */

	    }, {
	        key: 'update',
	        value: function update() {
	            this.imageWidth = this.items[0].offsetWidth;
	        }
	    }]);

	    return Carousel;
	}();

	exports.default = Carousel;

/***/ },

/***/ 134:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file svg线条动画模块
	 * @author yuzi.ma(yuzi.ma@upai.com)
	 */
	var SvgLine = function () {
	    /**
	     * 初始化线条
	     *
	     * @param {string} el 动画线条选择器
	     * @param {string} duration 线条变化时间
	     * @param {string} index 线条变化次序
	     */
	    function SvgLine(el, duration, index) {
	        _classCallCheck(this, SvgLine);

	        this.onSection = false;
	        this.animationTime = 1;
	        this.svgLine = document.querySelector(el);
	        this.pathArr = [].slice.call(this.svgLine.querySelectorAll('path'));
	        this.index = index;
	        this.pathArr.forEach(function (path) {
	            var length = path.getTotalLength();
	            // Clear any previous transition
	            path.style.transition = path.style.WebkitTransition = 'none';
	            // Set up the starting positions
	            path.style.strokeDasharray = length + ' ' + length;
	            path.style.strokeDashoffset = length;
	            // Trigger a layout so styles are calculated & the browser
	            // picks up the starting position before animating
	            path.getBoundingClientRect();
	            // Define our transition
	            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + duration + 's ease-in-out';
	        });
	        this.pathArr = this.pathArr.concat([].slice.call(document.querySelector(el).querySelectorAll('circle')));
	        this.replaceSvg();
	    }

	    /**
	     * 顺序动画
	     */


	    _createClass(SvgLine, [{
	        key: 'animationGo',
	        value: function animationGo() {
	            var delay = 0;
	            var animationTime = this.animationTime;
	            this.pathArr.forEach(function (path) {
	                setTimeout(function () {
	                    go(path);
	                }, delay);
	                if (path.localName !== 'circle') {
	                    delay += Number(animationTime) * 1000;
	                }
	            });
	            function go(el) {
	                var _this = this;

	                if (el.localName !== 'circle') {
	                    if (msieversion() > 8 || msieversion() == 'edge') {
	                        (function () {
	                            /*jshint validthis:true */
	                            var step = el.style.strokeDashoffset * 17 / (Number.parseInt(_this.animationTime) * 1000);
	                            var id = setInterval(function () {
	                                if (Number.parseInt(el.style.strokeDashoffset) <= 0) {
	                                    el.style.strokeDashoffset = '0px';
	                                    clearInterval(id);
	                                } else {
	                                    el.style.strokeDashoffset = Number.parseInt(el.style.strokeDashoffset) - step + 'px';
	                                }
	                            }, 17);
	                        })();
	                    } else {
	                        el.style.strokeDashoffset = '0';
	                    }
	                } else {
	                    el.style.visibility = 'visible';
	                }
	            }
	        }

	        /**
	         * 逆序动画
	         */

	    }, {
	        key: 'animationBack',
	        value: function animationBack() {
	            var delay = 0;
	            var animationTime = this.animationTime;
	            this.pathArr.forEach(function (path) {
	                if (path.localName !== 'circle') {
	                    (function () {
	                        var length = path.getTotalLength();
	                        setTimeout(function () {
	                            back(path, length);
	                        }, delay);
	                        delay += Number(animationTime) * 1000;
	                    })();
	                } else {
	                    setTimeout(function () {
	                        back(path);
	                    }, delay);
	                }
	            });
	            function back(el, offset) {
	                var _this2 = this;

	                if (el.localName !== 'circle') {
	                    el.style.strokeDashoffse = 0;
	                    if (msieversion() > 8 || msieversion() == 'edge') {
	                        (function () {
	                            /*jshint validthis:true */
	                            var step = offset * 17 / (Number.parseInt(_this2.animationTime) * 1000);
	                            var id = setInterval(function () {
	                                if (Number.parseInt(el.style.strokeDashoffset) >= offset) {
	                                    el.style.strokeDashoffset = offset;
	                                    clearInterval(id);
	                                } else {
	                                    el.style.strokeDashoffset = Number.parseInt(el.style.strokeDashoffset) + step + 'px';
	                                }
	                            }, 17);
	                        })();
	                    } else {
	                        el.style.strokeDashoffset = offset;
	                    }
	                } else {
	                    el.style.visibility = 'hidden';
	                }
	            }
	        }
	    }, {
	        key: 'replaceSvg',
	        value: function replaceSvg() {
	            if (msieversion() <= 8 && msieversion()) {
	                if (this.index === 3) {
	                    this.svgLine.style.marginLeft = 0;
	                }
	                var pngDom = document.createElement('img');
	                pngDom.setAttribute('src', '/assets/index/line' + this.index + '.png');
	                this.svgLine.replaceChild(pngDom, this.svgLine.querySelector('svg'));
	            }
	        }
	    }]);

	    return SvgLine;
	}();

	// detect if the browser is IE


	function msieversion() {
	    var ua = window.navigator.userAgent;
	    var msie = ua.indexOf("MSIE ");
	    if (msie > 0) {
	        return Number.parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
	    } else if (ua.indexOf('rv:11') > 0) {
	        return 11;
	    } else if (ua.indexOf("Edge") > 0) {
	        return 'edge';
	    } else {
	        return false;
	    }
	    return false;
	}

	function createNew(el, duration) {
	    return new SvgLine(el, duration);
	}

	exports.createNew = createNew;

/***/ }

/******/ });