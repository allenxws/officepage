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

	(function () {
	    /**
	     * 媒体报道--分页功能
	     * 每页显示10条新闻
	     */
	    document.addEventListener('DOMContentLoaded', pagerController);
	    function pagerController() {
	        var currentPage = 1;
	        var reportLists = document.querySelector('.report-list');

	        if (reportLists) {
	            reportLists = reportLists.children;
	        } else {
	            return;
	        }

	        var reportListsNum = [].slice.call(reportLists).length;
	        var pageNum = Math.ceil(reportListsNum / 10);

	        // 默认显示第1页10条报道
	        hideAll();
	        for (var i = 0; i < 10; i++) {
	            reportLists[i].className = 'show-li';
	        }

	        // 生成页码并绑定click事件，默认显示第1页并添加背景
	        var pagerCenter = document.querySelector('#pager-area .center');

	        var _loop = function _loop(_i) {
	            var newItem = document.createElement('li');
	            newItem.textContent = '' + (_i + 1);
	            newItem.addEventListener('click', function () {
	                showThisPage(_i + 1); //点击页码显示当前页面
	            });
	            pagerCenter.appendChild(newItem);
	        };

	        for (var _i = 0; _i < pageNum; _i++) {
	            _loop(_i);
	        }
	        pagerCenter.children[0].className = 'add-bgcolor';

	        // 所有分页图标绑定click事件
	        var arrowToFirst = document.querySelector('#pager-area .left .toFirst');
	        var arrowToPrev = document.querySelector('#pager-area .left .toPrev');
	        var arrowToNext = document.querySelector('#pager-area .right .toNext');
	        var arrowToLast = document.querySelector('#pager-area .right .toLast');
	        arrowToPrev.addEventListener('click', toPrev);
	        arrowToNext.addEventListener('click', toNext);
	        arrowToFirst.addEventListener('click', toFirst);
	        arrowToLast.addEventListener('click', toLast);

	        // 隐藏所有页面
	        function hideAll() {
	            for (var _i2 = 0; _i2 < reportListsNum; _i2++) {
	                var hideItem = reportLists[_i2];
	                hideItem.className = 'hide-li';
	            }
	        }

	        // 高亮显示当前页码
	        function highlightCurrentPage(page) {
	            for (var _i3 = 0; _i3 < pageNum; _i3++) {
	                pagerCenter.children[_i3].removeAttribute('class');
	            }
	            pagerCenter.children[page - 1].className = 'add-bgcolor';
	        }

	        // 滚动到页面顶部
	        function scrollToTop() {
	            window.scrollTo(0, 0);
	        }

	        // 点击页码显示当前页面
	        function showThisPage(page) {
	            hideAll();
	            // 显示页码对应页面
	            if (page === 1) {
	                for (var _i4 = 0; _i4 < 10; _i4++) {
	                    var showItem = reportLists[_i4];
	                    showItem.className = 'show-li';
	                }
	            } else if (page === pageNum) {
	                for (var _i5 = (pageNum - 1) * 10; _i5 < reportListsNum; _i5++) {
	                    var _showItem = reportLists[_i5];
	                    _showItem.className = 'show-li';
	                }
	            } else {
	                for (var _i6 = (page - 1) * 10; _i6 < page * 10; _i6++) {
	                    var _showItem2 = reportLists[_i6];
	                    _showItem2.className = 'show-li';
	                }
	            }
	            currentPage = page;
	            highlightCurrentPage(currentPage);
	            scrollToTop();
	        }

	        // 点击[下一页]图标
	        function toNext() {
	            if (currentPage < pageNum) {
	                hideAll();
	                // 显示下一页
	                if (currentPage === pageNum - 1) {
	                    for (var j = currentPage * 10; j < reportListsNum; j++) {
	                        var showItem = reportLists[j];
	                        showItem.className = 'show-li';
	                    }
	                } else {
	                    for (var _j = currentPage * 10; _j < (currentPage + 1) * 10; _j++) {
	                        var _showItem3 = reportLists[_j];
	                        _showItem3.className = 'show-li';
	                    }
	                }
	                currentPage += 1;
	                highlightCurrentPage(currentPage);
	                scrollToTop();
	            } else {
	                return;
	            }
	        }

	        // 点击[上一页]图标
	        function toPrev() {
	            if (currentPage > 1) {
	                hideAll();
	                // 显示上一页
	                if (currentPage === 2) {
	                    for (var j = 0; j < 10; j++) {
	                        var showItem = reportLists[j];
	                        showItem.className = 'show-li';
	                    }
	                } else {
	                    for (var _j2 = (currentPage - 2) * 10; _j2 < (currentPage - 1) * 10; _j2++) {
	                        var _showItem4 = reportLists[_j2];
	                        _showItem4.className = 'show-li';
	                    }
	                }
	                currentPage -= 1;
	                highlightCurrentPage(currentPage);
	                scrollToTop();
	            } else {
	                return;
	            }
	        }

	        // 点击[至第一页]图标
	        function toFirst() {
	            hideAll();
	            // 显示第一页
	            for (var j = 0; j < 10; j++) {
	                var showItem = reportLists[j];
	                showItem.className = 'show-li';
	            }
	            currentPage = 1;
	            highlightCurrentPage(currentPage);
	            scrollToTop();
	        }

	        // 点击[至最后一页]图标
	        function toLast() {
	            hideAll();
	            // 显示最后一页
	            for (var j = (pageNum - 1) * 10; j < reportListsNum; j++) {
	                var showItem = reportLists[j];
	                showItem.className = 'show-li';
	            }
	            currentPage = pageNum;
	            highlightCurrentPage(currentPage);
	            scrollToTop();
	        }
	    }
	})();

/***/ }
/******/ ]);