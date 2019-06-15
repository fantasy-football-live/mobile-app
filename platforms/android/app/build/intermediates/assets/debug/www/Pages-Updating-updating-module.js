(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Updating-updating-module"],{

/***/ "./src/app/Pages/Updating/updating.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/Updating/updating.module.ts ***!
  \***************************************************/
/*! exports provided: UpdatingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingPageModule", function() { return UpdatingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _updating_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updating.page */ "./src/app/Pages/Updating/updating.page.ts");
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Components/components.module */ "./src/app/Components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _updating_page__WEBPACK_IMPORTED_MODULE_5__["UpdatingPage"]
    }
];
var UpdatingPageModule = /** @class */ (function () {
    function UpdatingPageModule() {
    }
    UpdatingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_updating_page__WEBPACK_IMPORTED_MODULE_5__["UpdatingPage"]]
        })
    ], UpdatingPageModule);
    return UpdatingPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/Updating/updating.page.html":
/*!***************************************************!*\
  !*** ./src/app/Pages/Updating/updating.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Updating'\"></app-header>\n\n<ion-content padding>\n  <div  class=\"updating\">\n      <h1>GAME IS UPDATING...</h1>\n\n      <p>Come back when the first game has kicked off</p>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/Updating/updating.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Pages/Updating/updating.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circular path {\n  fill: none; }\n\n.circular {\n  width: 30em;\n  height: 20em;\n  margin: 3em auto 0; }\n\n.circular svg {\n  overflow: visible;\n  display: block; }\n\n.updating {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvUGFnZXMvVXBkYXRpbmcvdXBkYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvVXBkYXRpbmcvdXBkYXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmN1bGFyIHBhdGh7XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuICBcbiAgLmNpcmN1bGFyIHtcbiAgICB3aWR0aDogMzBlbTtcbiAgICBoZWlnaHQ6IDIwZW07XG4gICAgbWFyZ2luOiAzZW0gYXV0byAwO1xuICB9XG4gIFxuICAuY2lyY3VsYXIgc3ZnIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC51cGRhdGluZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Updating/updating.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/Updating/updating.page.ts ***!
  \*************************************************/
/*! exports provided: UpdatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingPage", function() { return UpdatingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdatingPage = /** @class */ (function () {
    function UpdatingPage() {
    }
    UpdatingPage.prototype.ngOnInit = function () {
    };
    UpdatingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updating',
            template: __webpack_require__(/*! ./updating.page.html */ "./src/app/Pages/Updating/updating.page.html"),
            styles: [__webpack_require__(/*! ./updating.page.scss */ "./src/app/Pages/Updating/updating.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdatingPage);
    return UpdatingPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Updating-updating-module.js.map