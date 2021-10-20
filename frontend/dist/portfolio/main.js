(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/diegodev/Documents/dev_projects/diegomouradev/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class HeaderComponent {
    constructor(route) {
        this.route = route;
        this.currentRouteComponent = '';
        this.isNavActive = false;
        this.animateToggle = false;
        this.currentRouteComponent = this.route.snapshot.data.urlPath;
    }
    ngOnInit() {
        this.toggleColor = {
            color: this.isNavActive ? '#b9f18c' : '#2786f5',
        };
        this.highlightToggle();
    }
    highlightToggle() {
        this.animateToggle = true;
    }
    toggleNav() {
        this.isNavActive = !this.isNavActive;
        this.toggleColor = {
            color: this.isNavActive ? '#b9f18c' : '#2786f5',
        };
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 27, vars: 8, consts: [[1, "main-header", 3, "ngClass"], [1, "navigation", 3, "ngClass"], [1, "navigation__links"], [1, "navigation__link"], ["routerLink", "/", 3, "ngClass", "click"], ["routerLink", "/about", 3, "ngClass", "click"], ["routerLink", "/projects/word-search-game", 3, "ngClass", "click"], ["routerLink", "/contact", 3, "ngClass", "click"], [1, "social__links"], [1, "social__link"], ["href", "https://twitter.com/_DiegoMoura", "target", "blank"], [1, "fab", "fa-twitter"], ["href", "https://github.com/diegomouradev", "target", "blank"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/diego-moura/", "target", "blank"], [1, "fab", "fa-linkedin-in"], [1, "navigation__toggle", 3, "ngStyle", "ngClass", "click"], [1, "fas", "fa-bars"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_7_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_25_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isNavActive ? "main-header__active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isNavActive ? "navigation__active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRouteComponent === "homepage" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRouteComponent === "about" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRouteComponent === "projects" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRouteComponent === "contact" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.toggleColor)("ngClass", ctx.animateToggle ? "slide-in-top" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".fade-in[_ngcontent-%COMP%] {\n  animation: fade-in 0.5s 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.fade-in-faster[_ngcontent-%COMP%] {\n  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n\n\n\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.slide-in-left[_ngcontent-%COMP%] {\n  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n\n\n\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.slide-in-right[_ngcontent-%COMP%] {\n  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n\n\n\n\n@keyframes slide-in-right {\n  0% {\n    transform: translateX(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n\n\n\n\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.main-header[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: -10rem;\n  left: 0;\n  background-color: #2786f5;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);\n}\n\n@media (max-width: 37.5em) {\n  .main-header[_ngcontent-%COMP%] {\n    top: -20rem;\n  }\n}\n\n.main-header__active[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0rem;\n  z-index: 10;\n}\n\n@media (max-width: 37.5em) {\n  .main-header__active[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.navigation[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 0.5fr;\n}\n\n.navigation__links[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n}\n\n@media (max-width: 37.5em) {\n  .navigation__links[_ngcontent-%COMP%] {\n    width: unset;\n    flex-wrap: unset;\n    flex-direction: column;\n  }\n}\n\n.navigation__link[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n@media (max-width: 37.5em) {\n  .navigation__link[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n.navigation__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b9f18c;\n  font-size: 1.8rem;\n  font-weight: 300;\n}\n\n@media (max-width: 37.5em) {\n  .navigation__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n}\n\n.navigation__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.navigation__active[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both;\n}\n\n@media (max-width: 37.5em) {\n  .navigation__active[_ngcontent-%COMP%] {\n    display: block;\n    grid-template-columns: unset;\n  }\n}\n\n.navigation__toggle[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  font-size: 3rem;\n  position: absolute;\n  top: 0.2rem;\n  right: 1rem;\n  cursor: pointer;\n  z-index: 20;\n}\n\n@media (max-width: 37.5em) {\n  .navigation__toggle[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n    width: 5rem;\n    height: 5rem;\n    background-color: #e7e7e7;\n    border-radius: 100%;\n    box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n@media (max-width: 37.5em) {\n  .main-header__active[_ngcontent-%COMP%]    ~ .navigation__toggle[_ngcontent-%COMP%] {\n    background-color: #2786f5;\n  }\n}\n\n.navigation__link[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.social__links[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.social__link[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.social__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b9f18c;\n  font-size: 1.8rem;\n  font-weight: 300;\n}\n\n@media (max-width: 37.5em) {\n  .social__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n}\n\n.social__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.slide-in-top[_ngcontent-%COMP%] {\n  animation: slide-in-top 0.5s 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Nhc3MvX2FuaW1hdGlvbnMuc2NzcyIsIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Fzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxtRUFBQTtBQ0NGOztBRENBO0VBRUUsOERBQUE7QUNFRjs7QURDQTs7Ozs7cURBQUE7O0FBT0E7Ozs7SUFBQTs7QUFhQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUdFLHVFQUFBO0FDREY7O0FER0E7Ozs7O3FEQUFBOztBQU9BOzs7O0lBQUE7O0FBaUJBO0VBQ0U7SUFFRSw4QkFBQTtJQUNBLFVBQUE7RUNERjtFREdBO0lBRUUsd0JBQUE7SUFDQSxVQUFBO0VDREY7QUFDRjs7QURHQTtFQUdFLHdFQUFBO0FDRkY7O0FES0E7Ozs7O3FEQUFBOztBQU9BOzs7O0lBQUE7O0FBaUJBO0VBQ0U7SUFFRSw2QkFBQTtJQUNBLFVBQUE7RUNIRjtFREtBO0lBRUUsd0JBQUE7SUFDQSxVQUFBO0VDSEY7QUFDRjs7QURNQTs7Ozs7bURBQUE7O0FBT0E7Ozs7RUFBQTs7QUFpQkE7RUFDRTtJQUVFLDhCQUFBO0lBQ0EsVUFBQTtFQ0xGO0VET0E7SUFFRSx3QkFBQTtJQUNBLFVBQUE7RUNMRjtBQUNGOztBQW5KQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EseUJDVFU7RURVVixnQ0FBQTtFQUNBLHdDQUFBO0FBcUpGOztBRWxKSTtFRlZKO0lBVUksV0FBQTtFQXNKRjtBQUNGOztBQXBKRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFzSko7O0FFNUpJO0VGR0Y7SUFNSSxXQUFBO0lBQ0EsWUFBQTtJQUVBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBc0pKO0FBQ0Y7O0FBbEpBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FBcUpGOztBQW5KRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSw2QkFBQTtBQW9KSjs7QUVoTEk7RUZ1QkY7SUFRSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQXFKSjtBQUNGOztBQWxKRTtFQUNFLGVBQUE7QUFvSko7O0FFMUxJO0VGcUNGO0lBSUksVUFBQTtFQXFKSjtBQUNGOztBQXBKSTtFQUNFLGNDekRPO0VEMERQLGlCQUFBO0VBQ0EsZ0JBQUE7QUFzSk47O0FFcE1JO0VGMkNBO0lBTUksaUJBQUE7RUF1Sk47QUFDRjs7QUFySk07RUFDRSwwQkFBQTtBQXVKUjs7QUFsSkU7RUFHRSwyRUFBQTtBQW1KSjs7QUVoTkk7RUYwREY7SUFNSSxjQUFBO0lBQ0EsNEJBQUE7RUFvSko7QUFDRjs7QUFqSkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFtSko7O0FFaE9JO0VGcUVGO0lBV0ksU0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQ2hHTTtJRGlHTixtQkFBQTtJQUNBLGlEQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFvSko7QUFDRjs7QUU5T0k7RUY4Rko7SUFFSSx5QkM5R1E7RURpUVY7QUFDRjs7QUFoSkE7RUFDRSwwQkFBQTtBQW1KRjs7QUEvSUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBa0pKOztBQS9JRTtFQUNFLGFBQUE7QUFpSko7O0FBaEpJO0VBQ0UsY0NoSU87RURpSVAsaUJBQUE7RUFDQSxnQkFBQTtBQWtKTjs7QUV2UUk7RUZrSEE7SUFNSSxpQkFBQTtFQW1KTjtBQUNGOztBQWpKTTtFQUNFLDBCQUFBO0FBbUpSOztBQTdJQTtFQUdFLHlFQUFBO0FBK0lGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWRlLWluIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC41cyAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuICBhbmltYXRpb246IGZhZGUtaW4gMC41cyAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xufVxuLmZhZGUtaW4tZmFzdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMTAtMTkgOTo1MjozM1xuICAgKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gICAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cbiAgICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogYW5pbWF0aW9uIGZhZGUtaW5cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc2xpZGUtaW4tbGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpXG4gICAgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTEwLTE5IDk6NTM6MTVcbiAgICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICAgKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXG4gICAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGFuaW1hdGlvbiBzbGlkZS1pbi1sZWZ0XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tbGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uc2xpZGUtaW4tcmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NClcbiAgICBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLWluLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMTAtMTkgOTo1NDoxMVxuICAgKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gICAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cbiAgICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogYW5pbWF0aW9uIHNsaWRlLWluLXJpZ2h0XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tcmlnaHQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMC0xOSA5OjQ3OjIzXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLWluLXRvcFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzL21peGluc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvYW5pbWF0aW9uc1wiO1xuXG4ubWFpbi1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IC0xMHJlbTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmx1ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDJweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbiAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtNjAwKSB7XG4gICAgdG9wOiAtMjByZW07XG4gIH1cblxuICAmX19hY3RpdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDByZW07XG4gICAgei1pbmRleDogMTA7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kKHdpZC02MDApIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuNWZyO1xuXG4gICZfX2xpbmtzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kKHdpZC02MDApIHtcbiAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgIGZsZXgtd3JhcDogdW5zZXQ7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQod2lkLTYwMCkge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgJiBhIHtcbiAgICAgIGNvbG9yOiAkbWFpbi1ncmVlbjtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcblxuICAgICAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtNjAwKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fYWN0aXZlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpXG4gICAgICByZXZlcnNlIGJvdGg7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgcmV2ZXJzZSBib3RoO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtNjAwKSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdW5zZXQ7XG4gICAgfVxuICB9XG5cbiAgJl9fdG9nZ2xlIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuMnJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMjA7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kKHdpZC02MDApIHtcbiAgICAgIHRvcDogMXJlbTtcbiAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgd2lkdGg6IDVyZW07XG4gICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1ncmV5O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4ubWFpbi1oZWFkZXJfX2FjdGl2ZSB+IC5uYXZpZ2F0aW9uX190b2dnbGUge1xuICBAaW5jbHVkZSByZXNwb25kKHdpZC02MDApIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1ibHVlO1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uX19saW5rIGEuYWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5zb2NpYWwge1xuICAmX19saW5rcyB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgJiBhIHtcbiAgICAgIGNvbG9yOiAkbWFpbi1ncmVlbjtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcblxuICAgICAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtNjAwKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zbGlkZS1pbi10b3Age1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tdG9wIDAuNXMgMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpXG4gICAgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi10b3AgMC41cyAxcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cbiIsIiRtYWluLWJsdWU6ICMyNzg2ZjU7XG4kbWFpbi1ncmVlbjogI2I5ZjE4YztcbiRtYWluLWdyZXk6IHJnYigyMzEsIDIzMSwgMjMxKTtcbiIsIkBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XG4gIEBpZiAkYnJlYWtwb2ludCA9PSB3aWQtMTIwMCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB3aWQtOTAwIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgQGlmICRicmVha3BvaW50ID09IHdpZC02MDAge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNy41ZW0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB3aWQtNDAwIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMjVlbSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgQGlmICRicmVha3BvaW50ID09IHdpZC0xODAwLW1vcmUge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTIuNWVtKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "6bE9":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProjectsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Word search game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angular 10 + pokeAPI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid pariatur, distinctio iusto repudiandae magni, deserunt et dolorum amet eligendi, officia sunt laboriosam minima. Error dolorum rem distinctio animi commodi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nulla delectus quisquam. Voluptas illo quibusdam quasi aperiam? Excepturi consequatur ipsam dolorum nam omnis! Ducimus beatae ullam esse, molestiae reiciendis animi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid pariatur, distinctio iusto repudiandae magni, deserunt et dolorum amet eligendi, officia sunt laboriosam minima. Error dolorum rem distinctio animi commodi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nulla delectus quisquam. Voluptas illo quibusdam quasi aperiam? Excepturi consequatur ipsam dolorum nam omnis! Ducimus beatae ullam esse, molestiae reiciendis animi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.animationOn ? "fade-in-faster" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.animationOn ? "slide-in-left" : "");
} }
function ProjectsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Memory Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "React + pokeAPI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid pariatur, distinctio iusto repudiandae magni, deserunt et dolorum amet eligendi, officia sunt laboriosam minima. Error dolorum rem distinctio animi commodi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nulla delectus quisquam. Voluptas illo quibusdam quasi aperiam? Excepturi consequatur ipsam dolorum nam omnis! Ducimus beatae ullam esse, molestiae reiciendis animi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.animationOn ? "fade-in-faster" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.animationOn ? "slide-in-left" : "");
} }
function ProjectsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NestedTodos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "VanillaJs + localStorage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid pariatur, distinctio iusto repudiandae magni, deserunt et dolorum amet eligendi, officia sunt laboriosam minima. Error dolorum rem distinctio animi commodi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nulla delectus quisquam. Voluptas illo quibusdam quasi aperiam? Excepturi consequatur ipsam dolorum nam omnis! Ducimus beatae ullam esse, molestiae reiciendis animi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.animationOn ? "fade-in-faster" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.animationOn ? "slide-in-left" : "");
} }
function ProjectsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Todo Tracker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angular12 + localStorage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid pariatur, distinctio iusto repudiandae magni, deserunt et dolorum amet eligendi, officia sunt laboriosam minima. Error dolorum rem distinctio animi commodi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nulla delectus quisquam. Voluptas illo quibusdam quasi aperiam? Excepturi consequatur ipsam dolorum nam omnis! Ducimus beatae ullam esse, molestiae reiciendis animi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.animationOn ? "fade-in-faster" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.animationOn ? "slide-in-left" : "");
} }
function ProjectsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Django Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Djago + Heroku");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid pariatur, distinctio iusto repudiandae magni, deserunt et dolorum amet eligendi, officia sunt laboriosam minima. Error dolorum rem distinctio animi commodi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nulla delectus quisquam. Voluptas illo quibusdam quasi aperiam? Excepturi consequatur ipsam dolorum nam omnis! Ducimus beatae ullam esse, molestiae reiciendis animi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.animationOn ? "fade-in-faster" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.animationOn ? "slide-in-left" : "");
} }
class ProjectsComponent {
    constructor(route) {
        this.route = route;
        this.animationOn = false;
        this.currentRoute = this.route.snapshot.data.project;
    }
    ngOnInit() {
        this.currentRoute = this.route.snapshot.data.project;
        this.animationOn = true;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 91, vars: 10, consts: [[1, "main-grid"], [1, "left"], [1, "project-grid"], ["class", "project-content", 4, "ngIf"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/v1634652607/diegomouradev/images/projects-title.webp", "alt", "", 1, "project-heading"], [1, "right"], [1, "projects-list"], [1, "projects-item", 3, "ngClass"], ["routerLink", "/projects/word-search-game"], [1, "projects-info"], [1, "projects-title"], [1, "projects-meta"], [1, "projects-description"], [1, "projects-links"], ["href", "https://pokemon-ws-game.netlify.app/", "target", "blank"], [1, "projects-icon"], [1, "fas", "fa-desktop"], ["href", "https://github.com/diegomouradev/pokemon-ws-game", "target", "blank"], [1, "fab", "fa-github"], ["routerLink", "/projects/memory-game"], ["href", "https://pokemon-memory-game-react.netlify.app/", "target", "blank"], ["href", "https://github.com/diegomouradev/pokemon-memory-game", "target", "blank"], ["routerLink", "/projects/nested-todos"], ["href", "https://nestedtodos.netlify.app/view/#/all", "target", "blank"], ["href", "https://github.com/diegomouradev/nestedTodos", "target", "blank"], ["routerLink", "/projects/todo-tracker"], ["href", "https://todo-app-angular-diego.netlify.app/", "target", "blank"], ["href", "https://github.com/diegomouradev/todo-app-angular", "target", "blank"], ["routerLink", "/projects/django-portfolio"], ["href", "https://diegomouradev.herokuapp.com/", "target", "blank"], ["href", "https://github.com/diegomouradev/portfolio_heroku", "target", "blank"], [1, "project-content"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/c_scale,w_604/v1634652607/diegomouradev/images/pokemon-word-search.webp", "alt", "", 1, "project-img", "img", 3, "ngClass"], [1, "project", 3, "ngClass"], [1, "project-title"], [1, "project-meta"], [1, "project-text"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/c_scale,w_604/v1634652608/diegomouradev/images/memory-game.webp", "alt", "", 1, "project-img", "img", 3, "ngClass"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/v1634652607/diegomouradev/images/nested-todo-app.webp", "alt", "", 1, "project-img", "img", 3, "ngClass"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/c_scale,w_604/v1634652607/diegomouradev/images/todo-tracker.webp", "alt", "", 1, "project-img", "img", 3, "ngClass"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/v1634652607/diegomouradev/images/django-portfolio.webp", "alt", "", 1, "project-img", "img", 3, "ngClass"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_div_3_Template, 9, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_4_Template, 9, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_5_Template, 9, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_div_6_Template, 9, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 9, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Word search game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Angular 10 + pokeAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Error aperiam veniam dicta officia ducimus tempore ex eius, dolorum esse accusantium enim, id ut vitae a assumenda? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Memory Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "React + pokeAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Error aperiam veniam dicta officia ducimus tempore ex eius, dolorum esse accusantium enim, id ut vitae a assumenda? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "NestedTodos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Vanilla JS + localStorage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Error aperiam veniam dicta officia ducimus tempore ex eius, dolorum esse accusantium enim, id ut vitae a assumenda? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Todo Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Angular 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Error aperiam veniam dicta officia ducimus tempore ex eius, dolorum esse accusantium enim, id ut vitae a assumenda? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Django Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Django + Heroku");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Error aperiam veniam dicta officia ducimus tempore ex eius, dolorum esse accusantium enim, id ut vitae a assumenda? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoute === "word_search_game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoute === "memory_game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoute === "nested_todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoute === "todo_tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoute === "django_heroku");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRoute === "word_search_game" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRoute === "memory_game" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRoute === "nested_todos" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRoute === "todo_tracker" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentRoute === "django_heroku" ? "active" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".fade-in[_ngcontent-%COMP%] {\n  animation: fade-in 0.5s 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.fade-in-faster[_ngcontent-%COMP%] {\n  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n\n\n\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.slide-in-left[_ngcontent-%COMP%] {\n  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n\n\n\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.slide-in-right[_ngcontent-%COMP%] {\n  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n\n\n\n\n@keyframes slide-in-right {\n  0% {\n    transform: translateX(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n\n\n\n\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n@media (max-width: 37.5em) {\n  .main-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n  }\n}\n\n.right[_ngcontent-%COMP%] {\n  background-color: #b9f18c;\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n\n@media (max-width: 37.5em) {\n  .right[_ngcontent-%COMP%] {\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n}\n\n.projects-list[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  grid-row: 1/-1;\n  padding: 5rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n@media (max-width: 56.25em) {\n  .projects-list[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 37.5em) {\n  .projects-list[_ngcontent-%COMP%] {\n    padding: 5rem 3rem 1rem 3rem;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.projects-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr min-content;\n  grid-template-rows: min-content;\n  padding: 1rem 0.9rem;\n  gap: 0.5rem;\n  border: 0.1rem solid #2786f5;\n  border-radius: 0.5rem;\n}\n\n@media (max-width: 56.25em) {\n  .projects-item[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    margin-right: 2rem;\n  }\n}\n\n@media (max-width: 37.5em) {\n  .projects-item[_ngcontent-%COMP%] {\n    width: 20rem;\n  }\n}\n\n.projects-info[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\n.projects-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.4rem 0.7rem rgba(0, 0, 0, 0.25);\n}\n\n.projects-item.active[_ngcontent-%COMP%] {\n  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);\n}\n\n.projects-title[_ngcontent-%COMP%], .projects-meta[_ngcontent-%COMP%], .projects-description[_ngcontent-%COMP%] {\n  font-size: 3.6rem;\n  font-weight: 600;\n  color: #2786f5;\n  line-height: 1;\n}\n\n@media (max-width: 56.25em) {\n  .projects-title[_ngcontent-%COMP%], .projects-meta[_ngcontent-%COMP%], .projects-description[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n}\n\n@media (max-width: 37.5em) {\n  .projects-title[_ngcontent-%COMP%], .projects-meta[_ngcontent-%COMP%], .projects-description[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n\n.projects-meta[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  font-weight: 300;\n}\n\n.projects-description[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 400;\n  line-height: 1;\n  margin-top: 1rem;\n}\n\n@media (max-width: 37.5em) {\n  .projects-description[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.projects-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n@media (max-width: 56.25em) {\n  .projects-links[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.projects-links[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  margin-right: 0.3rem;\n}\n\n@media (max-width: 56.25em) {\n  .projects-links[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n    margin-right: 0;\n  }\n}\n\n.projects-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2786f5;\n}\n\n.left[_ngcontent-%COMP%] {\n  background-color: #2786f5;\n}\n\n@media (max-width: 37.5em) {\n  .left[_ngcontent-%COMP%] {\n    grid-column: 1/2;\n    grid-row: 2/3;\n  }\n}\n\n.project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr min-content;\n}\n\n.project-content[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 2/-1;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(2, min-content);\n}\n\n@media (max-width: 56.25em) {\n  .project-content[_ngcontent-%COMP%] {\n    grid-column: 1/3;\n  }\n}\n\n.project-img[_ngcontent-%COMP%] {\n  padding: 5rem 5rem 1rem 5rem;\n}\n\n.project-text[_ngcontent-%COMP%], .project-title[_ngcontent-%COMP%], .project-meta[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  color: #b9f18c;\n  font-size: 1.6rem;\n  padding: 0 5rem 1rem 5rem;\n}\n\n@media (max-width: 56.25em) {\n  .project-text[_ngcontent-%COMP%], .project-title[_ngcontent-%COMP%], .project-meta[_ngcontent-%COMP%] {\n    padding: 0 3rem 1rem 3rem;\n  }\n}\n\n.project-title[_ngcontent-%COMP%] {\n  font-size: 3.6rem;\n  font-weight: 700;\n  padding: 0 5rem;\n}\n\n@media (max-width: 56.25em) {\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n    line-height: 1;\n    padding: 0 3rem 1rem 3rem;\n  }\n}\n\n.project-meta[_ngcontent-%COMP%] {\n  font-size: 2.4;\n  font-weight: 300;\n}\n\n.project-heading[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  height: 80vh;\n}\n\n@media (max-width: 56.25em) {\n  .project-heading[_ngcontent-%COMP%] {\n    height: 30vh;\n  }\n}\n\n.slide-in-right[_ngcontent-%COMP%] {\n  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n\n\n\n\n@keyframes slide-in-right {\n  0% {\n    transform: translateX(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Nhc3MvX2FuaW1hdGlvbnMuc2NzcyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Fzcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG1FQUFBO0FDQ0Y7O0FEQ0E7RUFFRSw4REFBQTtBQ0VGOztBRENBOzs7OztxREFBQTs7QUFPQTs7OztJQUFBOztBQWFBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBREVBO0VBR0UsdUVBQUE7QUNERjs7QURHQTs7Ozs7cURBQUE7O0FBT0E7Ozs7SUFBQTs7QUFpQkE7RUFDRTtJQUVFLDhCQUFBO0lBQ0EsVUFBQTtFQ0RGO0VER0E7SUFFRSx3QkFBQTtJQUNBLFVBQUE7RUNERjtBQUNGOztBREdBO0VBR0Usd0VBQUE7QUNGRjs7QURLQTs7Ozs7cURBQUE7O0FBT0E7Ozs7SUFBQTs7QUFpQkE7RUFDRTtJQUVFLDZCQUFBO0lBQ0EsVUFBQTtFQ0hGO0VES0E7SUFFRSx3QkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGOztBRE1BOzs7OzttREFBQTs7QUFPQTs7OztFQUFBOztBQWlCQTtFQUNFO0lBRUUsOEJBQUE7SUFDQSxVQUFBO0VDTEY7RURPQTtJQUVFLHdCQUFBO0lBQ0EsVUFBQTtFQ0xGO0FBQ0Y7O0FBbkpBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtBQXFKRjs7QUM5SUk7RURWSjtJQU1JLDBCQUFBO0lBQ0Esd0JBQUE7RUFzSkY7QUFDRjs7QUFuSkE7RUFDRSx5QkVmVztFRmdCWCxnQkFBQTtFQUNBLGFBQUE7RUFPQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQWdKRjs7QUM3Skk7RURDSjtJQU1JLGdCQUFBO0lBQ0EsYUFBQTtFQTBKRjtBQUNGOztBQW5KQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFxSkY7O0FDbExJO0VEc0JKO0lBVUksMkJBQUE7RUFzSkY7QUFDRjs7QUNqTEk7RURnQko7SUFhSSw0QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VBd0pGO0FBQ0Y7O0FBckpBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtFQUNBLHFCQUFBO0FBdUpGOztBQ3pNSTtFRDBDSjtJQVdJLG1CQUFBO0lBQ0Esa0JBQUE7RUF3SkY7QUFDRjs7QUN6TUk7RURvQ0o7SUFlSSxZQUFBO0VBMEpGO0FBQ0Y7O0FBdkpBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBMEpGOztBQXZKQTtFQUNFLCtDQUFBO0FBMEpGOztBQXZKQTtFQUNFLCtDQUFBO0FBMEpGOztBQXZKQTs7O0VBR0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNFdkZVO0VGd0ZWLGNBQUE7QUEwSkY7O0FDMU9JO0VEMEVKOzs7SUFTSSxpQkFBQTtFQTZKRjtBQUNGOztBQzNPSTtFRG9FSjs7O0lBWUksaUJBQUE7RUFpS0Y7QUFDRjs7QUE5SkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFpS0Y7O0FBOUpBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWlLRjs7QUMvUEk7RUQwRko7SUFPSSxhQUFBO0VBa0tGO0FBQ0Y7O0FBL0pBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBa0tGOztBQy9RSTtFRDJHSjtJQUlJLHNCQUFBO0lBQ0EsbUJBQUE7RUFvS0Y7QUFDRjs7QUFqS0E7RUFDRSxvQkFBQTtBQW9LRjs7QUN6Ukk7RURvSEo7SUFJSSxlQUFBO0VBcUtGO0FBQ0Y7O0FBbEtBO0VBQ0UsZUFBQTtFQUNBLGNFdElVO0FGMlNaOztBQWxLQTtFQUNFLHlCRTFJVTtBRitTWjs7QUNqU0k7RUQySEo7SUFJSSxnQkFBQTtJQUNBLGFBQUE7RUFzS0Y7QUFDRjs7QUFuS0E7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7QUFzS0Y7O0FBbktBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMENBQUE7QUFxS0Y7O0FDMVRJO0VEK0lKO0lBU0ksZ0JBQUE7RUFzS0Y7QUFDRjs7QUFuS0E7RUFDRSw0QkFBQTtBQXNLRjs7QUFuS0E7OztFQUdFLGdCQUFBO0VBQ0EsY0UzS1c7RUY0S1gsaUJBQUE7RUFDQSx5QkFBQTtBQXNLRjs7QUM1VUk7RURnS0o7OztJQVNJLHlCQUFBO0VBeUtGO0FBQ0Y7O0FBdktBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUEwS0Y7O0FDelZJO0VENEtKO0lBTUksaUJBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUEyS0Y7QUFDRjs7QUF4S0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUEyS0Y7O0FBeEtBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQTJLRjs7QUMzV0k7RUQ2TEo7SUFNSSxZQUFBO0VBNEtGO0FBQ0Y7O0FBektBO0VBR0Usd0VBQUE7QUEyS0Y7O0FBeEtBOzs7OzttREFBQTs7QUFPQTs7OztFQUFBOztBQWlCQTtFQUNFO0lBRUUsNkJBQUE7SUFDQSxVQUFBO0VBMEtGO0VBeEtBO0lBRUUsd0JBQUE7SUFDQSxVQUFBO0VBMEtGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFkZS1pbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDAuNXMgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNXMgMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbn1cbi5mYWRlLWluLWZhc3RlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTEwLTE5IDk6NTI6MzNcbiAgICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICAgKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXG4gICAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGFuaW1hdGlvbiBmYWRlLWluXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnNsaWRlLWluLWxlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KVxuICAgIGJvdGg7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMC0xOSA5OjUzOjE1XG4gICAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAgICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxuICAgKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBhbmltYXRpb24gc2xpZGUtaW4tbGVmdFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLWxlZnQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tbGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLnNsaWRlLWluLXJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpXG4gICAgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTEwLTE5IDk6NTQ6MTFcbiAgICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICAgKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXG4gICAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGFuaW1hdGlvbiBzbGlkZS1pbi1yaWdodFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1pbi1yaWdodCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMTAtMTkgOTo0NzoyM1xuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBzbGlkZS1pbi10b3BcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1pbi10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzL2FuaW1hdGlvbnNcIjtcblxuLm1haW4tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG5cbiAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtNjAwKSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICB9XG59XG5cbi5yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWdyZWVuO1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMS8yO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQod2lkLTYwMCkge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgfVxuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuLnByb2plY3RzLWxpc3Qge1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgZ3JpZC1yb3c6IDEvLTE7XG4gIHBhZGRpbmc6IDVyZW0gM3JlbTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICBAaW5jbHVkZSByZXNwb25kKHdpZC05MDApIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtNjAwKSB7XG4gICAgcGFkZGluZzogNXJlbSAzcmVtIDFyZW0gM3JlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4ucHJvamVjdHMtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICBwYWRkaW5nOiAxcmVtIDAuOXJlbTtcbiAgZ2FwOiAwLjVyZW07XG5cbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgJG1haW4tYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQod2lkLTkwMCkge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQod2lkLTYwMCkge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgfVxufVxuXG4ucHJvamVjdHMtaW5mbyB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzI7XG59XG5cbi5wcm9qZWN0cy1pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjRyZW0gMC43cmVtIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5wcm9qZWN0cy1pdGVtLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMC40cmVtIDAuNHJlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4ucHJvamVjdHMtdGl0bGUsXG4ucHJvamVjdHMtbWV0YSxcbi5wcm9qZWN0cy1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMy42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogJG1haW4tYmx1ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtOTAwKSB7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gIH1cbiAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtNjAwKSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbn1cblxuLnByb2plY3RzLW1ldGEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnByb2plY3RzLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQod2lkLTYwMCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnByb2plY3RzLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBAaW5jbHVkZSByZXNwb25kKHdpZC05MDApIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuLnByb2plY3RzLWxpbmtzIDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQod2lkLTkwMCkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG4ucHJvamVjdHMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICRtYWluLWJsdWU7XG59XG5cbi5sZWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmx1ZTtcblxuICBAaW5jbHVkZSByZXNwb25kKHdpZC02MDApIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gIH1cbn1cblxuLnByb2plY3QtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xufVxuXG4ucHJvamVjdC1jb250ZW50IHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDIvLTE7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcblxuICBAaW5jbHVkZSByZXNwb25kKHdpZC05MDApIHtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICB9XG59XG5cbi5wcm9qZWN0LWltZyB7XG4gIHBhZGRpbmc6IDVyZW0gNXJlbSAxcmVtIDVyZW07XG59XG5cbi5wcm9qZWN0LXRleHQsXG4ucHJvamVjdC10aXRsZSxcbi5wcm9qZWN0LW1ldGEge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBjb2xvcjogJG1haW4tZ3JlZW47XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDVyZW0gMXJlbSA1cmVtO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQod2lkLTkwMCkge1xuICAgIHBhZGRpbmc6IDAgM3JlbSAxcmVtIDNyZW07XG4gIH1cbn1cbi5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAgNXJlbTtcblxuICBAaW5jbHVkZSByZXNwb25kKHdpZC05MDApIHtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBwYWRkaW5nOiAwIDNyZW0gMXJlbSAzcmVtO1xuICB9XG59XG5cbi5wcm9qZWN0LW1ldGEge1xuICBmb250LXNpemU6IDIuNDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnByb2plY3QtaGVhZGluZyB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGhlaWdodDogODB2aDtcblxuICBAaW5jbHVkZSByZXNwb25kKHdpZC05MDApIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gIH1cbn1cblxuLnNsaWRlLWluLXJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpXG4gICAgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMC0xOSA5OjU0OjExXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLWluLXJpZ2h0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1yaWdodCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tcmlnaHQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCJAbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xuICBAaWYgJGJyZWFrcG9pbnQgPT0gd2lkLTEyMDAge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuICBAaWYgJGJyZWFrcG9pbnQgPT0gd2lkLTkwMCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB3aWQtNjAwIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzcuNWVtKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuICBAaWYgJGJyZWFrcG9pbnQgPT0gd2lkLTQwMCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDI1ZW0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB3aWQtMTgwMC1tb3JlIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEyLjVlbSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIkbWFpbi1ibHVlOiAjMjc4NmY1O1xuJG1haW4tZ3JlZW46ICNiOWYxOGM7XG4kbWFpbi1ncmV5OiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ContactComponent {
    constructor() {
        this.userName = '';
        this.userEmail = '';
        this.message = '';
    }
    ngOnInit() { }
    onFormSubmit($event) {
        console.log($event);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 22, vars: 3, consts: [[1, "main-grid"], [1, "left"], [1, "contact-intro"], ["src", "../../../assets/images/contact-title.png", "alt", ""], [1, "right"], [1, "contact-form", 3, "ngSubmit"], ["myForm", "ngForm"], [1, "input-wrapper"], ["id", "name-input", "type", "text", "name", "userName", "placeholder", "Your name", "required", "", 3, "ngModel", "ngModelChange"], ["for", "name-input"], ["type", "email", "id", "email-input", "name", "userEmail", "placeholder", "Your e-mail", "required", "", 3, "ngModel", "ngModelChange"], ["for", "email-input"], ["id", "message-input", "name", "message", "placeholder", "Hey! What's up?", "required", "", "rows", "15", "cols", "30", 3, "ngModel", "ngModelChange"], ["for", "message-input"], ["type", "submit", "value", "send"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci at esse animi eaque deleniti maxime! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_7_listener($event) { return ctx.onFormSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_10_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_14_listener($event) { return ctx.userEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your e-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sup?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 100vh;\n}\n\n.left[_ngcontent-%COMP%] {\n  background-color: #2786f5;\n  display: grid;\n  grid-template-columns: 1fr min-content;\n}\n\n.right[_ngcontent-%COMP%] {\n  background-color: #b9f18c;\n  grid-column: 2/3;\n  display: grid;\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  height: 100%;\n  justify-self: center;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n  position: relative;\n}\n\n.input-wrapper[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 2rem;\n  transform: translateY(3rem);\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\ninput[_ngcontent-%COMP%]:focus-within    ~ label[_ngcontent-%COMP%] {\n  color: #2786f5;\n  transform: translateY(-3rem);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:focus-within::placeholder {\n  color: transparent;\n}\n\ntextarea[_ngcontent-%COMP%]:focus-within    ~ label[_ngcontent-%COMP%] {\n  color: #2786f5;\n  transform: translateY(-3rem);\n  opacity: 1;\n}\n\ntextarea[_ngcontent-%COMP%]:focus-within::placeholder {\n  color: transparent;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2rem 3rem;\n  font-family: inherit;\n  border: 0.1rem solid #2786f5;\n  border-radius: 0.3rem;\n  color: #2786f5;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: inherit;\n  color: #2786f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkNUVTtFRFVWLGFBQUE7RUFDQSxzQ0FBQTtBQURGOztBQUlBO0VBQ0UseUJDZFc7RURlWCxnQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsY0M1Q1U7RUQ2Q1YsNEJBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0N0RFU7RUR1RFYsNEJBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDdEVVO0FEcUVaOztBQUlBOztFQUVFLG9CQUFBO0VBQ0EsY0M1RVU7QUQyRVoiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy9taXhpbnNcIjtcbi5tYWluLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xufVxuXG4ubGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJsdWU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xufVxuXG4ucmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1ncmVlbjtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmNvbnRhY3QtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5wdXQtd3JhcHBlciA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDJyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0OmZvY3VzLXdpdGhpbiB+IGxhYmVsIHtcbiAgY29sb3I6ICRtYWluLWJsdWU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3JlbSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlucHV0OmZvY3VzLXdpdGhpbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzLXdpdGhpbiB+IGxhYmVsIHtcbiAgY29sb3I6ICRtYWluLWJsdWU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3JlbSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbnRleHRhcmVhOmZvY3VzLXdpdGhpbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgJG1haW4tYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBjb2xvcjogJG1haW4tYmx1ZTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiAkbWFpbi1ibHVlO1xufVxuIiwiJG1haW4tYmx1ZTogIzI3ODZmNTtcbiRtYWluLWdyZWVuOiAjYjlmMThjO1xuJG1haW4tZ3JleTogcmdiKDIzMSwgMjMxLCAyMzEpO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'diegomoura.dev';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ "6bE9");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                    _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class HomepageComponent {
    constructor() {
        this.animationOn = false;
    }
    ngOnInit() {
        this.animationOn = true;
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 45, vars: 3, consts: [[1, "main-grid"], [1, "left"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/v1634652607/diegomouradev/images/diegomoura-home.webp", "alt", "diego moura", 1, "img", "main-title", 3, "ngClass"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/v1634652609/diegomouradev/images/diego-main-picture.webp", "alt", "diego moura", 1, "main-photo", 3, "ngClass"], [1, "right"], [1, "intro-text"], [1, "sub-title-wrapper"], ["src", "https://res.cloudinary.com/djot2xc6w/image/upload/v1634652608/diegomouradev/images/frontend-home.webp", "alt", "front-end", 1, "img", "sub-title", 3, "ngClass"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I am a Front-End developer who specializes in responsive and accessible web applications. Skills and experience include ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " and vanilla ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", along with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Angular2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ". I'm also adept in current web technologies such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ", CSS pre-processors like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ", restful ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ", and unit-testing libraries. To support my front-end skillset, I've also acquired a solid foundation in back-end development using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "NodeJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " - I find that full coverage across the stack enables me to go the extra mile when creating and problem solving. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.animationOn ? "slide-in-left" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.animationOn ? "fade-in" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.animationOn ? "slide-in-right" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".fade-in[_ngcontent-%COMP%] {\n  animation: fade-in 0.5s 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.fade-in-faster[_ngcontent-%COMP%] {\n  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n\n\n\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.slide-in-left[_ngcontent-%COMP%] {\n  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n\n\n\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.slide-in-right[_ngcontent-%COMP%] {\n  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n\n\n\n\n@keyframes slide-in-right {\n  0% {\n    transform: translateX(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n\n\n\n\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n@media (max-width: 37.5em) {\n  .main-grid[_ngcontent-%COMP%] {\n    height: 100%;\n    grid-template-columns: 1fr;\n  }\n}\n\n.left[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #2786f5;\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 100%;\n}\n\n@media (max-width: 37.5em) {\n  .left[_ngcontent-%COMP%] {\n    height: 100%;\n    grid-template-rows: repeat(2, 100%);\n  }\n}\n\n.main-title[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\n.main-photo[_ngcontent-%COMP%] {\n  width: 90%;\n  filter: grayscale(100%);\n  grid-column: 1/2;\n  grid-row: 1/2;\n  justify-self: center;\n  align-self: flex-end;\n}\n\n@media (max-width: 37.5em) {\n  .main-photo[_ngcontent-%COMP%] {\n    height: unset;\n    width: 100%;\n  }\n}\n\n.right[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #b9f18c;\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 1fr 0.5fr;\n}\n\n@media (max-width: 37.5em) {\n  .right[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    grid-row: 2/3;\n  }\n}\n\n.intro-text[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  font-weight: 400;\n  color: #79797c;\n  line-height: 1.2;\n  padding: 50px;\n  text-align: right;\n}\n\n@media (max-width: 75em) {\n  .intro-text[_ngcontent-%COMP%] {\n    grid-column: 1/3;\n    grid-row: 1/2;\n    padding: 5rem 3rem 3rem 3rem;\n  }\n}\n\n.intro-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #46494c;\n  font-weight: 700;\n}\n\n.sub-title-wrapper[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  align-self: flex-end;\n}\n\n@media (max-width: 37.5em) {\n  .sub-title-wrapper[_ngcontent-%COMP%] {\n    grid-column: 1/2;\n    display: flex;\n    justify-content: flex-end;\n  }\n}\n\n@media (max-width: 37.5em) {\n  .sub-title-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Nhc3MvX2FuaW1hdGlvbnMuc2NzcyIsIi4uLy4uLy4uLy4uL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Fzcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG1FQUFBO0FDQ0Y7O0FEQ0E7RUFFRSw4REFBQTtBQ0VGOztBRENBOzs7OztxREFBQTs7QUFPQTs7OztJQUFBOztBQWFBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBREVBO0VBR0UsdUVBQUE7QUNERjs7QURHQTs7Ozs7cURBQUE7O0FBT0E7Ozs7SUFBQTs7QUFpQkE7RUFDRTtJQUVFLDhCQUFBO0lBQ0EsVUFBQTtFQ0RGO0VER0E7SUFFRSx3QkFBQTtJQUNBLFVBQUE7RUNERjtBQUNGOztBREdBO0VBR0Usd0VBQUE7QUNGRjs7QURLQTs7Ozs7cURBQUE7O0FBT0E7Ozs7SUFBQTs7QUFpQkE7RUFDRTtJQUVFLDZCQUFBO0lBQ0EsVUFBQTtFQ0hGO0VES0E7SUFFRSx3QkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGOztBRE1BOzs7OzttREFBQTs7QUFPQTs7OztFQUFBOztBQWlCQTtFQUNFO0lBRUUsOEJBQUE7SUFDQSxVQUFBO0VDTEY7RURPQTtJQUVFLHdCQUFBO0lBQ0EsVUFBQTtFQ0xGO0FBQ0Y7O0FBbkpBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtBQXFKRjs7QUM5SUk7RURWSjtJQU1JLFlBQUE7SUFDQSwwQkFBQTtFQXNKRjtBQUNGOztBQW5KQTtFQUNFLGFBQUE7RUFDQSx5QkVqQlU7RUZrQlYsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUFxSkY7O0FDOUpJO0VEQ0o7SUFXSSxZQUFBO0lBQ0EsbUNBQUE7RUFzSkY7QUFDRjs7QUFuSkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFzSkY7O0FBbkpBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQXNKRjs7QUNsTEk7RURzQko7SUFTSSxhQUFBO0lBQ0EsV0FBQTtFQXVKRjtBQUNGOztBQXBKQTtFQUNFLGFBQUE7RUFDQSx5QkVuRFc7RUZvRFgsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLGdDQUFBO0FBc0pGOztBQ2pNSTtFRG9DSjtJQVdJLDJCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQXNKRjtBQUNGOztBQW5KQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBc0pGOztBQy9OSTtFRGtFSjtJQVVJLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLDRCQUFBO0VBdUpGO0FBQ0Y7O0FBcEpBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBdUpGOztBQXBKQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBdUpGOztBQ3JPSTtFRDJFSjtJQU1JLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0VBd0pGO0FBQ0Y7O0FDNU9JO0VEc0ZGO0lBRUksVUFBQTtFQXdKSjtBQUNGIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhZGUtaW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAwLjVzIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjVzIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG59XG4uZmFkZS1pbi1mYXN0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuICBhbmltYXRpb246IGZhZGUtaW4gMXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMC0xOSA5OjUyOjMzXG4gICAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAgICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxuICAgKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBhbmltYXRpb24gZmFkZS1pblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zbGlkZS1pbi1sZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NClcbiAgICBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMTAtMTkgOTo1MzoxNVxuICAgKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gICAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cbiAgICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogYW5pbWF0aW9uIHNsaWRlLWluLWxlZnRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWxlZnQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5zbGlkZS1pbi1yaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KVxuICAgIGJvdGg7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMS0xMC0xOSA5OjU0OjExXG4gICAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAgICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxuICAgKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBhbmltYXRpb24gc2xpZGUtaW4tcmlnaHRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1yaWdodCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tcmlnaHQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTEwLTE5IDk6NDc6MjNcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtaW4tdG9wXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy9hbmltYXRpb25zXCI7XG5cbi5tYWluLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQod2lkLTYwMCkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG4ubGVmdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJsdWU7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzI7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG5cbiAgQGluY2x1ZGUgcmVzcG9uZCh3aWQtNjAwKSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDEwMCUpO1xuICB9XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuLm1haW4tcGhvdG8ge1xuICB3aWR0aDogOTAlO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQod2lkLTYwMCkge1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnJpZ2h0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tZ3JlZW47XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAxLzI7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC41ZnI7XG4gIC8vIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcblxuICBAaW5jbHVkZSByZXNwb25kKHdpZC02MDApIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgfVxufVxuXG4uaW50cm8tdGV4dCB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNzk3OTdjO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBAaW5jbHVkZSByZXNwb25kKHdpZC0xMjAwKSB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIHBhZGRpbmc6IDVyZW0gM3JlbSAzcmVtIDNyZW07XG4gIH1cbn1cblxuLmludHJvLXRleHQgc3BhbiB7XG4gIGNvbG9yOiAjNDY0OTRjO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3ViLXRpdGxlLXdyYXBwZXIge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMi8zO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblxuICBAaW5jbHVkZSByZXNwb25kKHdpZC02MDApIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICYgaW1nIHtcbiAgICBAaW5jbHVkZSByZXNwb25kKHdpZC02MDApIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xuICBAaWYgJGJyZWFrcG9pbnQgPT0gd2lkLTEyMDAge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuICBAaWYgJGJyZWFrcG9pbnQgPT0gd2lkLTkwMCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB3aWQtNjAwIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzcuNWVtKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuICBAaWYgJGJyZWFrcG9pbnQgPT0gd2lkLTQwMCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDI1ZW0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB3aWQtMTgwMC1tb3JlIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEyLjVlbSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIkbWFpbi1ibHVlOiAjMjc4NmY1O1xuJG1haW4tZ3JlZW46ICNiOWYxOGM7XG4kbWFpbi1ncmV5OiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ "6bE9");








const routes = [
    {
        path: 'homepage',
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        data: { urlPath: 'homepage' },
    },
    {
        path: 'projects',
        children: [
            {
                path: 'word-search-game',
                component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                data: { project: 'word_search_game', urlPath: 'projects' },
            },
            {
                path: 'memory-game',
                component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                data: { project: 'memory_game', urlPath: 'projects' },
            },
            {
                path: 'nested-todos',
                component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                data: { project: 'nested_todos', urlPath: 'projects' },
            },
            {
                path: 'todo-tracker',
                component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                data: { project: 'todo_tracker', urlPath: 'projects' },
            },
            {
                path: 'django-portfolio',
                component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                data: { project: 'django_heroku', urlPath: 'projects' },
            },
        ],
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: { urlPath: 'about' },
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
        data: { urlPath: 'contact' },
    },
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map