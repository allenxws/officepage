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

	"use strict";

	__webpack_require__(184);

	(function () {
	    // 检测浏览器是否支持webp图片格式
	    function check_webp_feature(feature) {
	        var kTestImages = {
	            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
	            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
	            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
	            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
	        };
	        var testWebp = new Image();
	        testWebp.onload = function () {
	            var result = testWebp.width > 0 && testWebp.height > 0;
	            handleCheck(result);
	        };
	        testWebp.onerror = function () {
	            handleCheck(false);
	        };
	        testWebp.src = "data:image/webp;base64," + kTestImages[feature];

	        function handleCheck(result) {
	            if (!result) {
	                setTimeout(function () {
	                    alert('当前浏览器不支持 WebP 格式图片，请使用 Chrome 浏览器！');
	                }, 3000);
	            } else {
	                console.log('congratulations, your browser is supporting webp!');
	            }
	        }
	    }
	    check_webp_feature('lossy');

	    var rootPath = 'https://p.upyun.com/demo/webp';
	    $(document).ready(function () {
	        var gifSize = void 0;
	        var gifToWebpSize = void 0;
	        var pngSize = void 0;
	        var pngToWebpSize = void 0;
	        var jpgSize = void 0;
	        var jpgToWebpSize = void 0;
	        var animatedgifSize = void 0;
	        var animatedgifToWebpSize = void 0;
	        var gifSaved = void 0;
	        var jpgSaved = void 0;
	        var pngSaved = void 0;
	        var animatedgifSaved = void 0;
	        var currentIndex = 0;

	        // 图片加载节点
	        var imgGif = $('#img-gif')[0];
	        var imgGifToWebp = $('#img-gif-to-webp')[0];
	        var imgPng = $('#img-png')[0];
	        var imgPngToWebp = $('#img-png-to-webp')[0];
	        var imgJpg = $('#img-jpg')[0];
	        var imgJpgToWebp = $('#img-jpg-to-webp')[0];
	        var imgAnimatedGif = $('#img-animated-gif')[0];
	        var imgAnimatedGifToWebp = $('#img-to-animated-webp')[0];

	        // 图片大小节点
	        var imgGifSize = $('.gif > .text .picture-size-value');
	        var imgGifToWebpSize = $('.gif-to-webp > .text .picture-size-value');
	        var imgPngSize = $('.png > .text .picture-size-value');
	        var imgPngToWebpSize = $('.png-to-webp > .text .picture-size-value');
	        var imgJpgSize = $('.jpg > .text .picture-size-value');
	        var imgJpgToWebpSize = $('.jpg-to-webp > .text .picture-size-value');
	        var imgAnimatedGifSize = $('.animated-gif > .text .picture-size-value');
	        var imgAnimatedGifToWebpSize = $('.to-animated-webp > .text .picture-size-value');

	        // 图片尺寸节点
	        var imgGifRatio = $('.gif > .text .picture-ratio-value');
	        var imgGifToWebpRatio = $('.gif-to-webp > .text .picture-ratio-value');
	        var imgPngRatio = $('.png > .text .picture-ratio-value');
	        var imgPngToWebpRatio = $('.png-to-webp > .text .picture-ratio-value');
	        var imgJpgRatio = $('.jpg > .text .picture-ratio-value');
	        var imgJpgToWebpRatio = $('.jpg-to-webp > .text .picture-ratio-value');
	        var imgAnimatedGifRatio = $('.animated-gif > .text .picture-ratio-value');
	        var imgAnimatedGifToWebpRatio = $('.to-animated-webp > .text .picture-ratio-value');

	        // 首次加载
	        replaceImages(currentIndex);

	        // 点击换一批图片
	        $(".change").click(function () {
	            if (currentIndex === 9) {
	                currentIndex = 0;
	            } else {
	                currentIndex = currentIndex + 1;
	            }
	            resetData();
	            replaceImages(currentIndex);
	        });

	        // 重置数据
	        function resetData() {
	            gifSize = 0;
	            gifToWebpSize = 0;
	            pngSize = 0;
	            pngToWebpSize = 0;
	            jpgSize = 0;
	            jpgToWebpSize = 0;
	            animatedgifSize = 0;
	            animatedgifToWebpSize = 0;
	            gifSaved = 0;
	            jpgSaved = 0;
	            pngSaved = 0;
	            animatedgifSaved = 0;
	            $('.animated-gif > .picture .tag').text('动态 GIF');
	            $('.to-animated-webp > .picture .tag').text('动态 WebP');
	            // 隐藏压缩百分比信息节点（待数据获取成功后再显示）
	            $('.gif-to-webp > .text .save-size').hide();
	            $('.png-to-webp > .text .save-size').hide();
	            $('.jpg-to-webp > .text .save-size').hide();
	            $('.to-animated-webp > .text .save-size').hide();
	        }

	        // 显示下一批图片
	        function replaceImages(currentIndex) {
	            // 更新图片
	            $(imgGif).attr('src', rootPath + "/gif/" + currentIndex + ".gif");
	            $(imgGifToWebp).attr('src', rootPath + "/webp/gif-" + currentIndex + ".webp");
	            $(imgPng).attr('src', rootPath + "/png/" + currentIndex + ".png");
	            $(imgPngToWebp).attr('src', rootPath + "/webp/png-" + currentIndex + ".webp");
	            $(imgJpg).attr('src', rootPath + "/jpg/" + currentIndex + ".jpg");
	            $(imgJpgToWebp).attr('src', rootPath + "/webp/jpg-" + currentIndex + ".webp");
	            $(imgAnimatedGif).attr('src', rootPath + "/animated-gif/" + currentIndex + ".gif");
	            $(imgAnimatedGifToWebp).attr('src', rootPath + "/webp/animated-gif-" + currentIndex + ".webp");
	            // 更新图片大小信息
	            getImgSize(rootPath + "/gif/" + currentIndex + ".gif", 'gif');
	            getImgSize(rootPath + "/webp/gif-" + currentIndex + ".webp", 'gif-to-webp');
	            getImgSize(rootPath + "/png/" + currentIndex + ".png", 'png');
	            getImgSize(rootPath + "/webp/png-" + currentIndex + ".webp", 'png-to-webp');
	            getImgSize(rootPath + "/jpg/" + currentIndex + ".jpg", 'jpg');
	            getImgSize(rootPath + "/webp/jpg-" + currentIndex + ".webp", 'jpg-to-webp');
	            getImgSize(rootPath + "/animated-gif/" + currentIndex + ".gif", 'animated-gif');
	            getImgSize(rootPath + "/webp/animated-gif-" + currentIndex + ".webp", 'to-animated-webp');
	            // 更新图片尺寸信息
	            getImgRatio('img-gif');
	            getImgRatio('img-gif-to-webp');
	            getImgRatio('img-png');
	            getImgRatio('img-png-to-webp');
	            getImgRatio('img-jpg');
	            getImgRatio('img-jpg-to-webp');
	            getImgRatio('img-animated-gif');
	            getImgRatio('img-to-animated-webp');

	            // 更新图片压缩百分比信息
	            setTimeout(function () {
	                calculateSavedSize();
	            }, 1000);
	        }

	        // 获取图片大小并更新节点信息
	        function getImgSize(url, type) {
	            var xhr = new XMLHttpRequest();
	            xhr.open('HEAD', url + "?_=" + new Date().getTime(), true);
	            xhr.send();
	            xhr.onreadystatechange = function () {
	                if (xhr.readyState == 4) {
	                    if (xhr.status == 200) {
	                        // 获取图片大小并转换为K/M
	                        var imgSize = xhr.getResponseHeader('Content-Length');
	                        var transferedImgSize = imgSize / 1024;

	                        if (transferedImgSize > 1024) {
	                            transferedImgSize = (transferedImgSize / 1024).toFixed(1) + 'M';
	                        } else {
	                            transferedImgSize = transferedImgSize.toFixed(1) + 'K';
	                        }
	                        // 保存图片大小数据并更新节点信息
	                        if (type === 'animated-gif') {
	                            animatedgifSize = imgSize;
	                            imgAnimatedGifSize.text(transferedImgSize);
	                        } else if (type === 'to-animated-webp') {
	                            animatedgifToWebpSize = imgSize;
	                            imgAnimatedGifToWebpSize.text(transferedImgSize);
	                        } else if (type === 'gif') {
	                            gifSize = imgSize;
	                            imgGifSize.text(transferedImgSize);
	                        } else if (type === 'gif-to-webp') {
	                            gifToWebpSize = imgSize;
	                            imgGifToWebpSize.text(transferedImgSize);
	                        } else if (type === 'png') {
	                            pngSize = imgSize;
	                            imgPngSize.text(transferedImgSize);
	                        } else if (type === 'png-to-webp') {
	                            pngToWebpSize = imgSize;
	                            imgPngToWebpSize.text(transferedImgSize);
	                        } else if (type === 'jpg') {
	                            jpgSize = imgSize;
	                            imgJpgSize.text(transferedImgSize);
	                        } else if (type === 'jpg-to-webp') {
	                            jpgToWebpSize = imgSize;
	                            imgJpgToWebpSize.text(transferedImgSize);
	                        }
	                    } else {
	                        console.log('图片信息获取失败');
	                        if (type === 'animated-gif') {
	                            imgAnimatedGifSize.text('获取中');
	                        } else if (type === 'to-animated-webp') {
	                            imgAnimatedGifToWebpSize.text('获取中');
	                        } else if (type === 'gif') {
	                            imgGifSize.text('获取中');
	                        } else if (type === 'gif-to-webp') {
	                            imgGifToWebpSize.text('获取中');
	                        } else if (type === 'png') {
	                            imgPngSize.text('获取中');
	                        } else if (type === 'png-to-webp') {
	                            imgPngToWebpSize.text('获取中');
	                        } else if (type === 'jpg') {
	                            imgJpgSize.text('获取中');
	                        } else if (type === 'jpg-to-webp') {
	                            imgJpgToWebpSize.text('获取中');
	                        }
	                    }
	                }
	            };
	        }

	        // 计算压缩百分比并更新节点信息
	        function calculateSavedSize() {
	            gifSaved = ((gifSize - gifToWebpSize) / gifSize * 100).toFixed(0);
	            pngSaved = ((pngSize - pngToWebpSize) / pngSize * 100).toFixed(0);
	            jpgSaved = ((jpgSize - jpgToWebpSize) / jpgSize * 100).toFixed(0);
	            animatedgifSaved = ((animatedgifSize - animatedgifToWebpSize) / animatedgifSize * 100).toFixed(0);
	            if (gifSaved > 0) {
	                $('.gif-to-webp > .text .save-size').show();
	                $('.gif-to-webp > .text .save-size').text(gifSaved + "%");
	            }
	            if (pngSaved > 0) {
	                $('.png-to-webp > .text .save-size').show();
	                $('.png-to-webp > .text .save-size').text(pngSaved + "%");
	            }
	            if (jpgSaved > 0) {
	                $('.jpg-to-webp > .text .save-size').show();
	                $('.jpg-to-webp > .text .save-size').text(jpgSaved + "%");
	            }
	            if (animatedgifSaved > 0) {
	                $('.to-animated-webp > .text .save-size').show();
	                $('.to-animated-webp > .text .save-size').text(animatedgifSaved + "%");
	            }
	        }

	        // 获取图片尺寸并更新节点信息
	        function getImgRatio(imgId) {
	            document.getElementById(imgId).onload = function () {
	                var imgWidth = this.naturalWidth;
	                var imgHeight = this.naturalHeight;
	                if (imgId === 'img-gif') {
	                    imgGifRatio.text(imgWidth + " x " + imgHeight);
	                } else if (imgId === 'img-gif-to-webp') {
	                    imgGifToWebpRatio.text(imgWidth + " x " + imgHeight);
	                } else if (imgId === 'img-png') {
	                    imgPngRatio.text(imgWidth + " x " + imgHeight);
	                } else if (imgId === 'img-png-to-webp') {
	                    imgPngToWebpRatio.text(imgWidth + " x " + imgHeight);
	                } else if (imgId === 'img-jpg') {
	                    imgJpgRatio.text(imgWidth + " x " + imgHeight);
	                } else if (imgId === 'img-jpg-to-webp') {
	                    imgJpgToWebpRatio.text(imgWidth + " x " + imgHeight);
	                } else if (imgId === 'img-animated-gif') {
	                    imgAnimatedGifRatio.text(imgWidth + " x " + imgHeight);
	                } else if (imgId === 'img-to-animated-webp') {
	                    imgAnimatedGifToWebpRatio.text(imgWidth + " x " + imgHeight);
	                }
	            };
	        }

	        // 上传图片
	        $("#button-upload").click(function () {
	            // 重置数据
	            animatedgifSize = 0;
	            animatedgifToWebpSize = 0;
	            animatedgifSaved = 0;
	            $('.to-animated-webp > .text .save-size').hide();

	            $('#select-file').off('change'); // 撤销之前绑定的change事件

	            $('#select-file').click();
	            $('#select-file').change(function () {
	                var sourceUrl = void 0;
	                var webpUrl = void 0;
	                var fileName = $('#select-file')[0].files[0].name;
	                var fileSize = $('#select-file')[0].files[0].size;
	                var fileSuffix = fileName.split('.')[1].toLowerCase();
	                if (fileSuffix !== 'jpg' && fileSuffix !== 'jpeg' && fileSuffix !== 'gif' && fileSuffix !== 'png') {
	                    $('#select-file')[0].value = ''; // 清除input文件输入框
	                    alert('请选择 JPEG/GIF/PNG/动态 GIF 格式图片！');
	                    return false;
	                } else if (fileSize > 8388608) {
	                    $('#select-file')[0].value = ''; // 清除input文件输入框
	                    alert('请选择小于 8MB 的图片进行体验！');
	                    return false;
	                } else {
	                    $('#cover-gif').show();
	                    $('#cover-webp').show();
	                    if (fileSuffix === 'gif') {
	                        $('.animated-gif > .picture .tag').text('GIF');
	                        $('.to-animated-webp > .picture .tag').text('WebP');
	                    } else if (fileSuffix === 'png') {
	                        $('.animated-gif > .picture .tag').text('PNG');
	                        $('.to-animated-webp > .picture .tag').text('WebP');
	                    } else {
	                        $('.animated-gif > .picture .tag').text('JPG');
	                        $('.to-animated-webp > .picture .tag').text('WebP');
	                    }
	                    $.post('https://console.upyun.com/demo/webp/sign', {
	                        file_name: fileName
	                    }, function (data) {
	                        var parseData = JSON.parse(data);
	                        sourceUrl = parseData.source_url;
	                        webpUrl = parseData.webp_url;
	                        var uploadData = new FormData($('#uploadForm')[0]);
	                        uploadData.append('policy', parseData.policy);
	                        uploadData.append('authorization', parseData.authorization);
	                        $.ajax({
	                            url: 'https://v0.api.upyun.com/uprocess',
	                            type: 'POST',
	                            data: uploadData,
	                            cache: false,
	                            processData: false,
	                            contentType: false
	                        }).done(function (data, textStatus) {
	                            // 清除input文件输入框
	                            $('#select-file')[0].value = '';
	                            // 获取图片帧数，如为动态gif图片则更新标签
	                            if (JSON.parse(data)['image-type'] === 'GIF' && JSON.parse(data)['image-frames'] > 1) {
	                                $('.animated-gif > .picture .tag').text('动态 GIF');
	                                $('.to-animated-webp > .picture .tag').text('动态 WebP');
	                            }
	                            // 图片上传成功加载原始图片
	                            $(imgAnimatedGif).attr('src', sourceUrl);
	                            document.getElementById('img-animated-gif').onload = function () {
	                                var imgWidth = this.naturalWidth;
	                                var imgHeight = this.naturalHeight;
	                                imgAnimatedGifRatio.text(imgWidth + " x " + imgHeight);
	                                $('#cover-gif').hide();
	                                getImgSize(sourceUrl, 'animated-gif');
	                            };
	                            // 隔5秒后加载转换后的Webp格式图片
	                            setTimeout(function () {
	                                $(imgAnimatedGifToWebp).attr('src', webpUrl);
	                                document.getElementById('img-to-animated-webp').onload = function () {
	                                    var imgWidth = this.naturalWidth;
	                                    var imgHeight = this.naturalHeight;
	                                    imgAnimatedGifToWebpRatio.text(imgWidth + " x " + imgHeight);
	                                    $('#cover-webp').hide();
	                                    getImgSize(webpUrl, 'to-animated-webp');
	                                    setTimeout(function () {
	                                        animatedgifSaved = ((animatedgifSize - animatedgifToWebpSize) / animatedgifSize * 100).toFixed(0);
	                                        if (animatedgifSaved > 0) {
	                                            $('.to-animated-webp > .text .save-size').show();
	                                            $('.to-animated-webp > .text .save-size').text(animatedgifSaved + "%");
	                                        }
	                                    }, 1000);
	                                };
	                                document.getElementById('img-to-animated-webp').onerror = function () {
	                                    $('#cover-webp').hide();
	                                };
	                            }, 5000);
	                        }).fail(function (res, textStatus, error) {
	                            $('#select-file')[0].value = ''; // 清除input文件输入框
	                            try {
	                                var body = JSON.parse(res.responseText);
	                                alert('error: ' + body.message);
	                            } catch (e) {
	                                console.error(e);
	                            }
	                        });
	                    });
	                }
	            });
	        });
	    });
	})();

/***/ },

/***/ 3:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./webp.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./webp.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\nbody {\n  font-family: 'Microsoft YaHei', 微软雅黑, STXihei, 华文细黑, 'YouYuan', 幼圆, sans-serif;\n  position: relative;\n  width: 1164px;\n  margin: 0 auto;\n  font-size: 14px; }\n  body header {\n    position: relative;\n    padding-top: 20px;\n    padding-bottom: 20px; }\n    body header .upyun-logo {\n      position: relative;\n      display: block;\n      width: 155px;\n      height: 27px;\n      background: url(" + __webpack_require__(6) + ") no-repeat; }\n  body .section-one {\n    text-align: center; }\n    body .section-one .title {\n      margin-top: 0;\n      font-size: 40px;\n      color: #484848; }\n    body .section-one .description-main {\n      font-size: 18px;\n      color: #484848; }\n    body .section-one .description-sub {\n      margin-top: 8px;\n      margin-bottom: 8px;\n      font-size: 14px;\n      color: #484848; }\n    body .section-one #select-file {\n      display: none; }\n    body .section-one #button-upload {\n      display: inline-block;\n      margin-top: 26px;\n      padding: 8px 36px;\n      font-size: 18px;\n      color: #00a2e5;\n      border: 1px solid #00a2e5;\n      border-radius: 13px;\n      cursor: pointer;\n      transition: all .3s linear; }\n      body .section-one #button-upload:hover {\n        color: #fff;\n        background-color: #54c0ec;\n        border-color: #31a7d8; }\n  body .section-two .tag {\n    position: absolute;\n    top: 0;\n    width: 94px;\n    height: 26px;\n    line-height: 26px;\n    color: #fff;\n    background-color: rgba(0, 0, 0, 0.4); }\n  body .section-two .save-size {\n    display: none;\n    margin-left: 15px;\n    font-size: 12px;\n    padding: 3px 6px;\n    color: #2eb92e;\n    background-color: #fff;\n    border: 1px solid #37a037; }\n    body .section-two .save-size:before {\n      content: '';\n      display: inline-block;\n      position: relative;\n      top: 2px;\n      left: 2px;\n      width: 16px;\n      height: 14px;\n      vertical-align: middle;\n      background: url(" + __webpack_require__(186) + ") no-repeat;\n      background-size: 12.1px 9.9px; }\n  body .section-two .animate-format {\n    margin-top: 55px;\n    text-align: center; }\n    body .section-two .animate-format .transfer-arrow {\n      display: inline-block;\n      width: 30px;\n      height: 270px;\n      background: url(" + __webpack_require__(187) + ") no-repeat;\n      background-position: 9px center;\n      background-size: 11px 27px; }\n    body .section-two .animate-format .animated-gif, body .section-two .animate-format .to-animated-webp {\n      position: relative;\n      display: inline-block;\n      vertical-align: top; }\n      body .section-two .animate-format .animated-gif .picture, body .section-two .animate-format .to-animated-webp .picture {\n        width: 430px;\n        height: 270px;\n        background-color: #000; }\n        body .section-two .animate-format .animated-gif .picture > span, body .section-two .animate-format .to-animated-webp .picture > span {\n          display: block;\n          position: relative;\n          width: 430px;\n          height: 270px; }\n          body .section-two .animate-format .animated-gif .picture > span img, body .section-two .animate-format .to-animated-webp .picture > span img {\n            max-width: 100%;\n            max-height: 100%;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            margin: auto; }\n      body .section-two .animate-format .animated-gif .text, body .section-two .animate-format .to-animated-webp .text {\n        margin-top: 25px;\n        font-size: 14px;\n        color: #4b4b4b; }\n        body .section-two .animate-format .animated-gif .text .picture-size, body .section-two .animate-format .to-animated-webp .text .picture-size {\n          margin-right: 50px; }\n    body .section-two .animate-format .animated-gif {\n      margin-right: 27px; }\n      body .section-two .animate-format .animated-gif #cover-gif {\n        display: none;\n        position: absolute;\n        top: 0;\n        width: 430px;\n        height: 320px;\n        background-color: rgba(0, 0, 0, 0.4); }\n        body .section-two .animate-format .animated-gif #cover-gif img {\n          position: relative;\n          top: 100px; }\n        body .section-two .animate-format .animated-gif #cover-gif span {\n          display: block;\n          width: 100%;\n          position: absolute;\n          top: 145px;\n          text-align: center;\n          color: #eee; }\n    body .section-two .animate-format .to-animated-webp {\n      margin-left: 27px; }\n      body .section-two .animate-format .to-animated-webp .picture {\n        position: relative; }\n        body .section-two .animate-format .to-animated-webp .picture #cover-webp {\n          display: none;\n          position: absolute;\n          top: 0;\n          width: 430px;\n          height: 320px;\n          background-color: rgba(0, 0, 0, 0.4); }\n          body .section-two .animate-format .to-animated-webp .picture #cover-webp img {\n            position: relative;\n            top: 100px; }\n          body .section-two .animate-format .to-animated-webp .picture #cover-webp span {\n            display: block;\n            width: 100%;\n            position: absolute;\n            top: 145px;\n            text-align: center;\n            color: #eee; }\n      body .section-two .animate-format .to-animated-webp .text .picture-size {\n        position: absolute;\n        left: 40px; }\n      body .section-two .animate-format .to-animated-webp .text .picture-ratio {\n        position: absolute;\n        right: 40px; }\n  body .section-two .normal-format {\n    margin-top: 70px;\n    text-align: center; }\n    body .section-two .normal-format .gif, body .section-two .normal-format .gif-to-webp, body .section-two .normal-format .png, body .section-two .normal-format .png-to-webp, body .section-two .normal-format .jpg, body .section-two .normal-format .jpg-to-webp {\n      display: inline-block;\n      position: relative;\n      width: 164px;\n      height: 220px;\n      vertical-align: top; }\n      body .section-two .normal-format .gif .picture, body .section-two .normal-format .gif-to-webp .picture, body .section-two .normal-format .png .picture, body .section-two .normal-format .png-to-webp .picture, body .section-two .normal-format .jpg .picture, body .section-two .normal-format .jpg-to-webp .picture {\n        height: 164px;\n        background-color: #000; }\n        body .section-two .normal-format .gif .picture span, body .section-two .normal-format .gif-to-webp .picture span, body .section-two .normal-format .png .picture span, body .section-two .normal-format .png-to-webp .picture span, body .section-two .normal-format .jpg .picture span, body .section-two .normal-format .jpg-to-webp .picture span {\n          display: block;\n          position: relative;\n          width: 164px;\n          height: 164px;\n          overflow: hidden; }\n          body .section-two .normal-format .gif .picture span img, body .section-two .normal-format .gif-to-webp .picture span img, body .section-two .normal-format .png .picture span img, body .section-two .normal-format .png-to-webp .picture span img, body .section-two .normal-format .jpg .picture span img, body .section-two .normal-format .jpg-to-webp .picture span img {\n            max-height: 100%;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            margin: auto; }\n      body .section-two .normal-format .gif .text, body .section-two .normal-format .gif-to-webp .text, body .section-two .normal-format .png .text, body .section-two .normal-format .png-to-webp .text, body .section-two .normal-format .jpg .text, body .section-two .normal-format .jpg-to-webp .text {\n        position: relative;\n        margin-top: 15px;\n        text-align: left;\n        font-size: 14px; }\n        body .section-two .normal-format .gif .text > span, body .section-two .normal-format .gif-to-webp .text > span, body .section-two .normal-format .png .text > span, body .section-two .normal-format .png-to-webp .text > span, body .section-two .normal-format .jpg .text > span, body .section-two .normal-format .jpg-to-webp .text > span {\n          display: block; }\n          body .section-two .normal-format .gif .text > span.picture-size .save-size, body .section-two .normal-format .gif-to-webp .text > span.picture-size .save-size, body .section-two .normal-format .png .text > span.picture-size .save-size, body .section-two .normal-format .png-to-webp .text > span.picture-size .save-size, body .section-two .normal-format .jpg .text > span.picture-size .save-size, body .section-two .normal-format .jpg-to-webp .text > span.picture-size .save-size {\n            position: absolute;\n            top: -1px;\n            right: 0;\n            padding: 1px 2px; }\n          body .section-two .normal-format .gif .text > span.picture-ratio, body .section-two .normal-format .gif-to-webp .text > span.picture-ratio, body .section-two .normal-format .png .text > span.picture-ratio, body .section-two .normal-format .png-to-webp .text > span.picture-ratio, body .section-two .normal-format .jpg .text > span.picture-ratio, body .section-two .normal-format .jpg-to-webp .text > span.picture-ratio {\n            margin-top: 8px; }\n    body .section-two .normal-format .gif, body .section-two .normal-format .png, body .section-two .normal-format .jpg {\n      margin-right: 15px; }\n    body .section-two .normal-format .gif-to-webp, body .section-two .normal-format .png-to-webp {\n      margin-right: 30px; }\n  body footer {\n    margin-top: 20px;\n    margin-bottom: 50px; }\n    body footer .box {\n      text-align: right;\n      font-size: 14px;\n      padding-right: 38px;\n      color: #2ab3f3; }\n      body footer .box .change:before {\n        content: '';\n        display: inline-block;\n        width: 22px;\n        height: 15px;\n        vertical-align: middle;\n        background: url(" + __webpack_require__(188) + ") no-repeat;\n        background-size: 17px 14.45px; }\n      body footer .box .change:hover {\n        cursor: pointer; }\n      body footer .box .goto {\n        padding-left: 30px;\n        color: #484848; }\n        body footer .box .goto a {\n          padding-left: 8px;\n          color: #2ab3f3;\n          text-decoration: none; }\n          body footer .box .goto a:hover {\n            color: #2a96c7; }\n", ""]);

	// exports


/***/ },

/***/ 186:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAJCAMAAADTuiYfAAAAM1BMVEUvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIvsGIPq9s1AAAAEHRSTlMADCgtNzg9RGVxqarP1tf7KHSIxAAAADdJREFUCNeNxskBgCAAwLACyqEC3X9aHjgAeQVIqibg5FepqtZyE7vbiBAeVd8AQJvOxi9/GWABsvIDHgRCsP4AAAAASUVORK5CYII="

/***/ },

/***/ 187:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAbCAMAAACdpIWPAAAAM1BMVEVMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEz7G59HAAAAEHRSTlMAAQQJEBkkMT9QY3iPqMPghcKzlQAAAGFJREFUGNN1kEEOgCAMBEGkCIqd/7/Wg6FtYuQ00zQsbCrJzyWBKYHVpIPmJRPmkjxhpiDD5Ia+pCjIn3iMwBHyjZvPBdsXYH+xYlcWheY4PpjD+8/wlQvdLFtDD9X7Cb09EqUE2fLpV6cAAAAASUVORK5CYII="

/***/ },

/***/ 188:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAMAAADqmnyMAAABBVBMVEUAof7///8Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof4Aof5gfuteAAAAVnRSTlMAAAECAwQFBgcICQoLDA4VFxgZHh8gJicoKSotLzEyNzs8PT4/QUJFR05SVlhcZGZpa21weHl7fn+FiYuPnaCytbe6vL7IztPV2t7g4uTm6e/19/n7/bfuCcsAAADQSURBVBgZPcGJOkJhFAXQvftRRCJTXGSex8wZMqaSoXvt938Ux7lfrQW4XHRWr58vDgM0cMvvcs0V0MBkriTFnY9Y0ikNTLiUqpMhFE8k7ZOE212FW4ilURJmCH070gUJYKtdQk9o6IUEyl11lpDKFWpqrc2g/CP9tipwpYbMOibmXvVcyCJVfFOySQB3+h5DT/6pSgKoSDX0BZIAQlPag4sOAw3MvKTb2cEwfpToMU8S/zYSSV+fXUn3WZJw0w9y7e0MDVIDUwfXN8fRCEDzB8WUJNX3nF2AAAAAAElFTkSuQmCC"

/***/ }

/******/ });