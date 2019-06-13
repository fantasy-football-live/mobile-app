(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Settings-settings-module"],{

/***/ "./src/app/Pages/Settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/Settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/Pages/Settings/settings.page.ts");
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
        component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/Settings/settings.page.html":
/*!***************************************************!*\
  !*** ./src/app/Pages/Settings/settings.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'SETTINGS'\"></app-header>\n<ion-content padding>\n  <ion-list *ngIf=\"mainUserService.user\">\n    <ion-item>\n      <ion-label position=\"stacked\">\n        <h2>Change Id</h2>\n        <p>Current - {{ mainUserService.user.id }} </p>\n      </ion-label>\n      <ion-button color=\"danger\" slot=\"end\" (click)=\"toggleIdInput()\">\n        <ion-text *ngIf=\"!canEnterNewId\">\n          Update\n        </ion-text>\n        <ion-text *ngIf=\"canEnterNewId\">\n          Close\n        </ion-text>\n      </ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-label>Privacy Policy</ion-label>\n      <a target=\"_blank\" href=\"https://www.privacypolicies.com/privacy/view/5aab9410c306ad31ac1853eeeebe6b6a\">\n        <ion-button color=\"danger\">VIEW</ion-button>\n      </a>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<div class=\"settings__input__container\" *ngIf=\"canEnterNewId\">\n  <ion-input [(ngModel)]=\"newID\" type=\"number\" placeholder=\"Enter new Id...\"></ion-input>\n  <ion-button color=\"danger\" slot=\"end\" (click)=\"updateId(newID)\">Update</ion-button>\n</div>"

/***/ }),

/***/ "./src/app/Pages/Settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Pages/Settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings__input__container {\n  position: absolute;\n  z-index: 1000;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  padding: 2em;\n  border-radius: 2em;\n  width: 80%;\n  transition: all .5s linear;\n  box-shadow: rgba(0, 0, 0, 0.6) 1px 1px 1000em 100em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUFwcC9GYW50YXN5Rm9vdGJhbGxMaXZlL3NyYy9hcHAvUGFnZXMvU2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULG9EQUE0QztVQUE1Qyw0Q0FBNEM7RUFDNUMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLG1EQUFtRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvU2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzIHtcbiAgICAmX19pbnB1dCB7XG4gICAgICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBsaW5lYXI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNikgMXB4IDFweCAxMDAwZW0gMTAwZW07XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/Settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_bonus_point_bonus_point_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/bonus-point/bonus-point.service */ "./src/app/Services/bonus-point/bonus-point.service.ts");
/* harmony import */ var src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/main-user/main-user.service */ "./src/app/Services/main-user/main-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(bonusPointService, mainUserService) {
        this.bonusPointService = bonusPointService;
        this.mainUserService = mainUserService;
        this.includeBonusPoints = false;
        this.canEnterNewId = false;
        this.newID = null;
    }
    SettingsPage.prototype.ngOnInit = function () { };
    SettingsPage.prototype.toggleIdInput = function () {
        this.canEnterNewId = !this.canEnterNewId;
    };
    SettingsPage.prototype.updateId = function (id) {
        if (!id) {
            return null;
        }
        this.mainUserService.updateUser(id);
        this.canEnterNewId = !this.canEnterNewId;
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/Pages/Settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/Pages/Settings/settings.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_Services_bonus_point_bonus_point_service__WEBPACK_IMPORTED_MODULE_1__["BonusPointService"],
            src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_2__["MainUserService"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Settings-settings-module.js.map