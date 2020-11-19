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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "grid__tile--selected": a0 }; };
const _c1 = function (a0) { return { "is-word": a0 }; };
class TileComponent {
    constructor() {
        this.onTileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleTile() {
        if (this.tile.isSelected && typeof this.tile.letterPosition !== 'number' && this.tile.isWord) {
            this.tile.isSelected = this.tile.isSelected;
        }
        else {
            this.tile.isSelected = !this.tile.isSelected;
        }
        this.onTileSelected.emit(this.tile);
    }
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["grid-tile"]], inputs: { tile: "tile" }, outputs: { onTileSelected: "onTileSelected" }, decls: 3, vars: 7, consts: [[1, "grid__tile", 3, "ngClass", "click"], [1, "tile__content", 3, "ngClass"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TileComponent_Template_div_click_0_listener() { return ctx.toggleTile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.tile.isSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.tile.isWord));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tile.letter, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["html[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n}\n.grid__tile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n  padding: 0.2rem 0.1rem 0.2rem 0.2rem;\n  margin: 0rem;\n  border: 0.1rem solid #5e5e5e;\n  background-color: #aaaaaa;\n  transition: all 0.2s ease-in-out;\n}\n.grid__tile--selected[_ngcontent-%COMP%] {\n  background-color: #5e5e5e;\n  border-color: #333333;\n}\n.grid__tile[_ngcontent-%COMP%]:hover {\n  background-color: #5e5e5e;\n  border: 0.1rem solid #333333;\n  transform: scale(110%);\n}\n.tile__content[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: sans-serif;\n  font-size: 2rem;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLDhFQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQ05GO0FEU0E7RUFDRSx5QkFYTTtBQ0tSO0FBSEU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSx5QkRUUztFQ1VULGdDQUFBO0FBS0o7QUFISTtFQUNFLHlCRGRRO0VDZVIscUJEaEJNO0FDcUJaO0FBRkk7RUFDRSx5QkRuQlE7RUNvQlIsNEJBQUE7RUFDQSxzQkFBQTtBQUlOO0FBR0U7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEbkNJO0FDbUNSIiwiZmlsZSI6InNyYy9hcHAvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFyaWFibGVzXG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZGFyay1ncmV5OiAjMzMzMzMzO1xuJG1lZGl1bS1ncmV5OiAjNWU1ZTVlO1xuJGxpZ2h0LWdyZXk6ICNhYWFhYWE7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlOyAvLyAxcmVtID0gMTBweFxufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjokd2hpdGU7XG59IiwiQGltcG9ydCAnL3NyYy9zdHlsZXMuc2Nzcyc7XG5cbi5ncmlkIHtcblxuICAmX190aWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjFyZW0gMC4ycmVtIDAuMnJlbTtcbiAgICBtYXJnaW46IDByZW07XG4gICAgXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJG1lZGl1bS1ncmV5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAmLS1zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWdyZXk7XG4gICAgICBib3JkZXItY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgfVxuXG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkbWVkaXVtLWdyZXk7XG4gICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZGFyay1ncmV5O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMTAlKTtcbiAgICB9XG4gIH1cbn1cblxuLnRpbGUge1xuXG4gICZfX2NvbnRlbnQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'grid-tile',
                templateUrl: './tile.component.html',
                styleUrls: ['./tile.component.scss']
            }]
    }], function () { return []; }, { tile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onTileSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tile/tile.component */ "H9aC");







function GridComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTileSelected", function GridComponent_div_0_div_1_Template_grid_tile_onTileSelected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.checkForWord($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tile", tile_r3);
} }
function GridComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class GridComponent {
    constructor(BoardService) {
        this.BoardService = BoardService;
        this.word = [];
        this.wordList = _constants__WEBPACK_IMPORTED_MODULE_1__["WORD_LIST"];
    }
    ngOnInit() {
        this.gameGrid = this.BoardService.generateBoard(_constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_1__["WORD_LIST"]);
    }
    checkForWord($event) {
        if ($event.isWord) {
            if ($event.letterPosition.length && this.word.length === $event.letterPosition[0]) {
                this.word[$event.letterPosition[0]] = $event.letter;
            }
            else if ($event.letterPosition.length && this.word.length === $event.letterPosition[1]) {
                this.word[$event.letterPosition[1]] = $event.letter;
            }
            else {
                this.word[$event.letterPosition] = $event.letter;
            }
            const wordToCheck = this.word.join('');
            for (let [i, word] of this.wordList.entries()) {
                if (wordToCheck === word) {
                    alert(`You caught a wild ${word}`);
                    console.log(`You caught a wild ${word}`);
                    this.word = [];
                }
            }
        }
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]])], decls: 1, vars: 1, consts: [["class", "grid__row", 4, "ngFor", "ngForOf"], [1, "grid__row"], [4, "ngFor", "ngForOf"], [3, "tile", "onTileSelected"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameGrid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__["TileComponent"]], styles: [".grid__row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcbiBcblxuICAmX19yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });
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
        this.title = 'Pokemon Catcher';
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
        this.wordCounter = 0;
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
        this.fillEmptySpots();
        return this.grid;
    }
    // Generate grid of empty tiles.
    generateGrid() {
        for (let i = 0; i < this.gridHeight; i++) {
            this.grid.push([]);
            for (let j = 0; j < this.gridWidth; j++) {
                this.grid[i].push({ letter: '_', isWord: false });
            }
        }
    }
    getWord() {
        let sortedWords = this.words.sort((a, b) => b.length - a.length);
        let getOneWord = sortedWords[this.wordCounter];
        this.wordCounter++;
        return getOneWord;
    }
    // Find all available locations to place the word in every direction.
    getAvailableLocations(word) {
        const locations = [];
        const wordLength = word.length;
        let biggestOverlap = 0;
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
                    let overlap = this.checkForOverlap(word, indexColumn, indexRow, nextTile);
                    if (overlap >= biggestOverlap || overlap === 0) {
                        biggestOverlap = overlap;
                        locations.push({ indexColumn, indexRow, direction, overlap: biggestOverlap });
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
        return this.optimizeOverlaps(locations, biggestOverlap);
    }
    ;
    checkForOverlap(word, indexColumn, indexRow, getNextTile) {
        let overlap = 0;
        for (let k = 0; k < word.length; k++) {
            let nextTile = getNextTile(indexColumn, indexRow, k);
            let tile = this.grid[nextTile.indexRow][nextTile.indexColumn];
            if (tile.letter === word[k]) {
                overlap++;
            }
            else if (tile.letter !== '_') {
                return -1;
            }
        }
        return overlap;
    }
    optimizeOverlaps(locations, biggestOverlap) {
        let overlapLocations = [];
        for (let [i, location] of locations.entries()) {
            if (location.overlap >= biggestOverlap) {
                overlapLocations.push(location);
            }
        }
        return overlapLocations;
    }
    placeWord() {
        let length = this.words.length;
        while (length) {
            const word = this.getWord();
            const locations = this.getAvailableLocations(word);
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            this.placeWordInGrid(word, randomLocation);
            length--;
        }
        return this.grid;
    }
    placeWordInGrid(word, randomLocation) {
        for (let i = 0, length = word.length; i < length; i++) {
            let next = this.nextTile[randomLocation.direction];
            next = next(randomLocation.indexColumn, randomLocation.indexRow, i);
            let tile = this.buildTile(word, next, i);
            this.grid[next.indexRow][next.indexColumn] = tile;
        }
    }
    ;
    buildTile(word, next, i) {
        if (this.grid[next.indexRow][next.indexColumn].letter === word[i]) {
            let previousLetterPosition = this.grid[next.indexRow][next.indexColumn].letterPosition;
            const tile = {
                letter: word[i],
                indexRow: next.indexRow,
                indexColumn: next.indexColumn,
                isWord: true,
                isSelected: false,
                letterPosition: [previousLetterPosition, i]
            };
            return tile;
        }
        else {
            const tile = {
                letter: word[i],
                indexRow: next.indexRow,
                indexColumn: next.indexColumn,
                isWord: true,
                isSelected: false,
                letterPosition: i
            };
            return tile;
        }
    }
    fillEmptySpots() {
        for (let row of this.grid) {
            let i = 0;
            while (i < this.gridWidth) {
                if (row[i].letter === "_") {
                    row[i].letter = this.pickRandomLetter();
                }
                i++;
            }
        }
    }
    ;
    pickRandomLetter() {
        const letterIndex = Math.floor(Math.random() * this.alphabet.length);
        const randomLetter = this.alphabet[letterIndex];
        return randomLetter;
    }
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