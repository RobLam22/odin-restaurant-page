/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\nconsole.log(\"working\")\n\n;\n\n\n\nconst contentDiv = document.getElementById('content')\n\nconst navBtns = Array.from(document.getElementById('navbar').children)\nconsole.log(navBtns)\n\nnavBtns.forEach(btn => btn.addEventListener('click', e => loadContent(e.target.id)))\n\nconst loadContent = (pageId) => {\n    switch (pageId) {\n        case 'home':\n            contentDiv.innerHTML = '';\n            contentDiv.appendChild((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.home)())\n            break;\n        case 'menu':\n            contentDiv.innerHTML = '';\n            contentDiv.appendChild((0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)())\n            break;\n        case 'about':\n            contentDiv.innerHTML = '';\n            contentDiv.appendChild((0,_pages_about_js__WEBPACK_IMPORTED_MODULE_1__.about)())\n            break;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLENBQXVDO0FBQ0U7QUFDSDs7QUFFdEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvREFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0RBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNEQUFLO0FBQ3hDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcblxuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL3BhZ2VzL2hvbWUuanNcIjtcbmltcG9ydCB7IGFib3V0IH0gZnJvbSBcIi4vcGFnZXMvYWJvdXQuanNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL3BhZ2VzL21lbnUuanMnXG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbmNvbnN0IG5hdkJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKS5jaGlsZHJlbilcbmNvbnNvbGUubG9nKG5hdkJ0bnMpXG5cbm5hdkJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBsb2FkQ29udGVudChlLnRhcmdldC5pZCkpKVxuXG5jb25zdCBsb2FkQ29udGVudCA9IChwYWdlSWQpID0+IHtcbiAgICBzd2l0Y2ggKHBhZ2VJZCkge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWUoKSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnUoKSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhYm91dCc6XG4gICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dCgpKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nconst about = () => {\n    const aboutDiv = document.createElement('div');\n    aboutDiv.id = \"about\"\n    \n    const aboutTitle = document.createElement('h1');\n    aboutTitle.innerText = `RAVING RAMEN? WHO ARE WE`\n\n    aboutDiv.appendChild(aboutTitle)\n\n    return aboutDiv\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9wYWdlcy9hYm91dC5qcz9kZDcxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RGl2LmlkID0gXCJhYm91dFwiXG4gICAgXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYWJvdXRUaXRsZS5pbm5lclRleHQgPSBgUkFWSU5HIFJBTUVOPyBXSE8gQVJFIFdFYFxuXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSlcblxuICAgIHJldHVybiBhYm91dERpdlxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/about.js\n");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _imgs_noodles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/noodles.jpg */ \"./src/imgs/noodles.jpg\");\n// export const varName = ``\n\n\nconst home = () => {\n    const homeDiv = document.createElement('div');\n    homeDiv.id = \"home\"\n    \n    const homeTitle = document.createElement('h1');\n    homeTitle.innerText = `RAVING RAMEN`\n\n    const homeImg = document.createElement('img')\n    homeImg.src = _imgs_noodles_jpg__WEBPACK_IMPORTED_MODULE_0__\n\n    const introPara = document.createElement('p')\n    introPara.innerText = 'Welcome to the funkiest ramen joint! Pumping raving tunes to go with your raving ramen! Slurp down some yummy noodles along with some delish refreshments!'\n\n    const reviewDiv = document.createElement('div')\n    const reviews = [\n        {\n            name: \"Peter\", \n            feedback: \"best noods...\"\n        },\n        {\n            name: \"Jo\", \n            feedback: \"it was so good I almost threw up from eating too much\"\n        },\n        {\n            name: \"Paige\", \n            feedback: \"thumbs up!\"\n            },\n    ]\n\n    reviews.forEach(review => {\n        const dotPt = document.createElement('ul')\n        dotPt.innerText = `\"${review.feedback}\" - ${review.name}`\n        reviewDiv.appendChild(dotPt)\n    })\n\n\n    homeDiv.appendChild(homeTitle)\n    homeDiv.appendChild(homeImg)\n    homeDiv.appendChild(introPara)\n    homeDiv.appendChild(reviewDiv)\n\n    return homeDiv\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ3lDOztBQUVsQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsOENBQU87O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCLE1BQU0sWUFBWTtBQUNoRTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL3BhZ2VzL2hvbWUuanM/ODA3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgY29uc3QgdmFyTmFtZSA9IGBgXG5pbXBvcnQgbm9vZGxlcyBmcm9tICcuLi9pbWdzL25vb2RsZXMuanBnJ1xuXG5leHBvcnQgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZURpdi5pZCA9IFwiaG9tZVwiXG4gICAgXG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBob21lVGl0bGUuaW5uZXJUZXh0ID0gYFJBVklORyBSQU1FTmBcblxuICAgIGNvbnN0IGhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGhvbWVJbWcuc3JjID0gbm9vZGxlc1xuXG4gICAgY29uc3QgaW50cm9QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW50cm9QYXJhLmlubmVyVGV4dCA9ICdXZWxjb21lIHRvIHRoZSBmdW5raWVzdCByYW1lbiBqb2ludCEgUHVtcGluZyByYXZpbmcgdHVuZXMgdG8gZ28gd2l0aCB5b3VyIHJhdmluZyByYW1lbiEgU2x1cnAgZG93biBzb21lIHl1bW15IG5vb2RsZXMgYWxvbmcgd2l0aCBzb21lIGRlbGlzaCByZWZyZXNobWVudHMhJ1xuXG4gICAgY29uc3QgcmV2aWV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCByZXZpZXdzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlBldGVyXCIsIFxuICAgICAgICAgICAgZmVlZGJhY2s6IFwiYmVzdCBub29kcy4uLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiSm9cIiwgXG4gICAgICAgICAgICBmZWVkYmFjazogXCJpdCB3YXMgc28gZ29vZCBJIGFsbW9zdCB0aHJldyB1cCBmcm9tIGVhdGluZyB0b28gbXVjaFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUGFpZ2VcIiwgXG4gICAgICAgICAgICBmZWVkYmFjazogXCJ0aHVtYnMgdXAhXCJcbiAgICAgICAgICAgIH0sXG4gICAgXVxuXG4gICAgcmV2aWV3cy5mb3JFYWNoKHJldmlldyA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICBkb3RQdC5pbm5lclRleHQgPSBgXCIke3Jldmlldy5mZWVkYmFja31cIiAtICR7cmV2aWV3Lm5hbWV9YFxuICAgICAgICByZXZpZXdEaXYuYXBwZW5kQ2hpbGQoZG90UHQpXG4gICAgfSlcblxuXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lVGl0bGUpXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lSW1nKVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaW50cm9QYXJhKVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQocmV2aWV3RGl2KVxuXG4gICAgcmV0dXJuIGhvbWVEaXZcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.js\n");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n    const menuDiv = document.createElement('div');\n    menuDiv.id = \"menu\"\n    \n    const menuTitle = document.createElement('h1');\n    menuTitle.innerText = `MENU`\n\n    menuDiv.appendChild(menuTitle)\n\n    return menuDiv\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL3BhZ2VzL21lbnUuanM/OGFkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURpdi5pZCA9IFwibWVudVwiXG4gICAgXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gYE1FTlVgXG5cbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVUaXRsZSlcblxuICAgIHJldHVybiBtZW51RGl2XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/menu.js\n");

/***/ }),

/***/ "./src/imgs/noodles.jpg":
/*!******************************!*\
  !*** ./src/imgs/noodles.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cda25af81c904c66856e.jpg";

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;