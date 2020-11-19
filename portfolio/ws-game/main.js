(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/diegoosvaldodemoura/Desktop/katas/practical-programming/my-wordgame/ws-game/src/main.ts */"zUnb");


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

/***/ "H9aC":
/*!****************************************!*\
  !*** ./src/app/tile/tile.component.ts ***!
  \****************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TileComponent {
    constructor() {
    }
    ngOnInit() {
        const letter = this.tile.letter;
    }
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["app-tile"]], inputs: { tile: "tile" }, decls: 2, vars: 1, consts: [[1, "tile__content"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tile.letter);
    } }, styles: [".tile__content[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3RpbGUvdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWxlIHtcblxuICAmX19jb250ZW50IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tile',
                templateUrl: './tile.component.html',
                styleUrls: ['./tile.component.scss']
            }]
    }], function () { return []; }, { tile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Ludi":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board.service */ "VXsB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GridComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tile_r3.letter);
} }
function GridComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_div_0_div_1_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class GridComponent {
    constructor(BoardService) {
        this.BoardService = BoardService;
    }
    /* testing */
    ngOnInit() {
        this.gameGrid = this.BoardService.generateBoard(_constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_1__["WORD_LIST"]);
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]])], decls: 1, vars: 1, consts: [["class", "grid__row", 4, "ngFor", "ngForOf"], [1, "grid__row"], ["class", "grid__tile", 4, "ngFor", "ngForOf"], [1, "grid__tile"], [1, "grid__tile--content"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameGrid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".grid__row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n.grid__tile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 3rem;\n  height: 3rem;\n  padding: 0.2rem 0.1rem 0.2rem 0.2rem;\n  margin: 0.1rem;\n  border: 0.1rem solid #eaf8bf;\n  background-color: #eca400;\n  transition: all 0.2s ease-in-out;\n}\n.grid__tile[_ngcontent-%COMP%]:hover {\n  background-color: #eaf8bf;\n  border: 0.1rem solid #eca400;\n  transform: scale(110%);\n}\n.grid__tile--content[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: sans-serif;\n  font-size: 2rem;\n  color: #001d4a;\n  text-shadow: 0.1rem 0.1rem 0.1rem #27476e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQUZKO0FBSUk7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGTjtBQUtJO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7QUFITiIsImZpbGUiOiJzcmMvYXBwL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcblxuICAmX19yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmX190aWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgcGFkZGluZzogMC4ycmVtIDAuMXJlbSAwLjJyZW0gMC4ycmVtO1xuICAgIG1hcmdpbjogMC4xcmVtO1xuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICNlYWY4YmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTQwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjZWFmOGJmO1xuICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2VjYTQwMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTEwJSk7XG4gICAgfVxuXG4gICAgJi0tY29udGVudCB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogIzAwMWQ0YTtcbiAgICAgIHRleHQtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuMXJlbSAjMjc0NzZlO1xuICAgIH1cblxuICB9XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss'],
                providers: [_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]]
            }]
    }], function () { return [{ type: _board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] }]; }, null); })();


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
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ "Ludi");



class AppComponent {
    constructor() {
        this.title = 'Word Search Game';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 5rem;\n  text-align: center;\n  color: #001d4a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDFkNGE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VXsB":
/*!**********************************!*\
  !*** ./src/app/board.service.ts ***!
  \**********************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fill_grid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fill-grid.service */ "u8vX");



class BoardService {
    constructor(DiegoGridService) {
        this.DiegoGridService = DiegoGridService;
    }
    generateBoard(gridSize, wordList) {
        return this.DiegoGridService.generateBoard(gridSize, wordList);
    }
}
BoardService.ɵfac = function BoardService_Factory(t) { return new (t || BoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fill_grid_service__WEBPACK_IMPORTED_MODULE_1__["FillGridService"])); };
BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BoardService, factory: BoardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _fill_grid_service__WEBPACK_IMPORTED_MODULE_1__["FillGridService"] }]; }, null); })();


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
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/grid.component */ "Ludi");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tile/tile.component */ "H9aC");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
        _tile_tile_component__WEBPACK_IMPORTED_MODULE_5__["TileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
                    _tile_tile_component__WEBPACK_IMPORTED_MODULE_5__["TileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: GRID_WIDTH, GRID_HEIGHT, GRID_SIZE, DIRECTIONS, WORD_LIST, ALPHABET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_WIDTH", function() { return GRID_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_HEIGHT", function() { return GRID_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_SIZE", function() { return GRID_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTIONS", function() { return DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORD_LIST", function() { return WORD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHABET", function() { return ALPHABET; });
// Const declaration
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;
const GRID_SIZE = 20;
const DIRECTIONS = [
    'horizontal',
    'vertical',
    'diagonal'
];
const WORD_LIST = [
    'Ditto',
    'Arbok',
    'Eevee',
    'Entei',
    'Gloom',
    'Ekans',
    'Pichu',
    'Aipom',
    'Duduo',
    'Pikachu',
    'bulbasaur',
    'Squirtle',
    'Charmander'
];
const ALPHABET = 'abcdefghijklmnoprstuvwy';


/***/ }),

/***/ "u8vX":
/*!**************************************!*\
  !*** ./src/app/fill-grid.service.ts ***!
  \**************************************/
/*! exports provided: FillGridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillGridService", function() { return FillGridService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "l207");



class FillGridService {
    constructor() {
        this.grid = [];
        this.alphabet = _constants__WEBPACK_IMPORTED_MODULE_1__["ALPHABET"];
        this.words = _constants__WEBPACK_IMPORTED_MODULE_1__["WORD_LIST"];
        this.gridWidth = _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_WIDTH"];
        this.gridHeight = _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_HEIGHT"];
        this.gridSize = _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"];
        this.directions = _constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTIONS"];
        // Given the direction calculates the next Square.
        this.nextTile = {
            horizontal: (indexColumn, indexRow, distance) => ({ indexColumn: indexColumn + distance, indexRow }),
            vertical: (indexColumn, indexRow, distance) => ({ indexColumn, indexRow: indexRow + distance }),
            diagonal: (indexColumn, indexRow, distance) => ({ indexColumn: indexColumn + distance, indexRow: indexRow + distance })
        };
        // given the grid dimensions, and the tile position check if the word fits.
        this.isDirectionValid = {
            horizontal: (width, height, indexColumn, indexRow, wordLength) => width >= indexColumn + wordLength,
            vertical: (width, height, indexColumn, indexRow, wordLength) => height >= indexRow + wordLength,
            diagonal: (width, height, indexColumn, indexRow, wordLength) => (width >= indexColumn + wordLength) && (height >= indexRow + wordLength)
        };
        // If the result of isDirectionValid returns false.
        this.skipTiles = {
            horizontal: (indexColumn, indexRow, wordLength) => ({ indexColumn: indexColumn = 0, indexRow: indexRow + 1 }),
            vertical: (indexColumn, indexRow, wordLength) => ({ indexColumn: indexColumn = 0, indexRow: indexRow + 100 }),
            diagonal: (indexColumn, indexRow, wordLength) => ({ indexColumn: indexColumn = 0, indexRow: indexRow + 1 })
        };
    }
    generateBoard(gridSize, wordList) {
        this.words = wordList;
        this.gridSize = gridSize;
        this.generateGrid();
        this.placeWord();
        return this.grid;
    }
    // Generate grid of empty tiles.
    generateGrid() {
        for (let i = 0; i < this.gridHeight; i++) {
            this.grid.push([]);
            for (let j = 0; j < this.gridWidth; j++) {
                this.grid[i].push({ letter: '_' });
            }
        }
    }
    pickRandomWord() {
        let length = this.words.length;
        let randomWord = this.words.splice((Math.floor(Math.random() * length)), 1);
        return randomWord[0];
    }
    // Find all available locations to place the word in every direction.
    getAvailableLocations(word) {
        const locations = [];
        const wordLength = word.length;
        for (let j = 0; j < this.directions.length; j++) {
            const direction = this.directions[j];
            const checkDirection = this.isDirectionValid[direction];
            const nextTile = this.nextTile[direction];
            let indexColumn = 0;
            let indexRow = 0;
            while (indexRow < this.gridHeight) {
                // check if the word fits in the space available at all.
                if (checkDirection(this.gridWidth, this.gridHeight, indexColumn, indexRow, wordLength)) {
                    // If it fits, check the next tile for the length of the word to make sure words don't overlap.
                    let isOverlap = this.checkForOverlap(word, indexColumn, indexRow, nextTile);
                    if (isOverlap === 0) {
                        locations.push({ indexColumn, indexRow, direction });
                    }
                    indexColumn++;
                    if (indexColumn >= this.gridWidth) {
                        indexColumn = 0;
                        indexRow++;
                    }
                }
                else {
                    let skipDirection = this.skipTiles[direction];
                    skipDirection = skipDirection(indexColumn, indexRow, wordLength);
                    indexColumn = skipDirection.indexColumn;
                    indexRow = skipDirection.indexRow;
                }
            }
        }
        return locations;
    }
    ;
    checkForOverlap(word, indexColumn, indexRow, getNextTile) {
        let overlap = 0;
        for (let k = 0; k < word.length; k++) {
            let nextTile = getNextTile(indexColumn, indexRow, k);
            let tile = this.grid[nextTile.indexRow][nextTile.indexColumn];
            if (tile.letter === '_') {
                overlap = overlap;
            }
            else {
                overlap--;
            }
        }
        return overlap;
    }
    placeWord() {
        while (this.words.length >= 1) {
            // get random word to place in the grid.
            const word = this.pickRandomWord();
            // get all available locations for placing the word.
            const locations = this.getAvailableLocations(word);
            // select available locations at random.
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            // place word in the selected location.
            this.placeWordInGrid(word, randomLocation);
        }
        return this.grid;
    }
    placeWordInGrid(word, randomLocation) {
        for (let i = 0, length = word.length; i < length; i++) {
            let next = this.nextTile[randomLocation.direction];
            next = next(randomLocation.indexColumn, randomLocation.indexRow, i);
            let tile = {
                letter: word[i],
                indexRow: next.indexRow,
                indexColumn: next.indexColumn,
                isWord: true,
                isSelected: false
            };
            this.grid[next.indexRow][next.indexColumn] = tile;
        }
    }
    ;
}
FillGridService.ɵfac = function FillGridService_Factory(t) { return new (t || FillGridService)(); };
FillGridService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FillGridService, factory: FillGridService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FillGridService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
;


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




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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