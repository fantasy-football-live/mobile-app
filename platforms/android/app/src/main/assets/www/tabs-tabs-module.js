(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/Guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/Guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/main-user/main-user.service */ "./src/app/Services/main-user/main-user.service.ts");
/* harmony import */ var _Services_leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/leagues/custom-league.service */ "./src/app/Services/leagues/custom-league.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginGuard = /** @class */ (function () {
    function LoginGuard(storage, router, mainUserService, customLeagueService) {
        this.storage = storage;
        this.router = router;
        this.mainUserService = mainUserService;
        this.customLeagueService = customLeagueService;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.storage.get('user').then(function (user) {
            if (user) {
                return true;
            }
            else {
                _this.router.navigateByUrl("/tabs/home");
                return false;
            }
        });
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_3__["MainUserService"],
            _Services_leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_4__["CustomLeagueService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/components.module */ "./src/app/Components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar color=\"light\" slot=\"bottom\">\n    <ion-tab-button tab=\"team\">\n      <ion-icon src=\"../../assets/icons/soccer-jersey.svg\"></ion-icon>\n      <ion-label>\n\n        <ion-text color=\"danger\">\n          TEAM\n        </ion-text>\n      </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"leagues\">\n      <ion-icon src=\"../../assets/icons/trophy.svg\"></ion-icon>\n\n      <ion-label>\n        <ion-text color=\"danger\">\n          LEAGUES\n        </ion-text>\n      </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon src=\"../../assets/icons/house-outline.svg\"></ion-icon>\n      <ion-label>\n        <ion-text color=\"danger\">\n          HOME\n        </ion-text>\n      </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"stats\">\n      <ion-icon name=\"pulse\"></ion-icon>\n      <ion-label>\n        <ion-text color=\"danger\">\n          STATS\n        </ion-text>\n      </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"news\">\n      <ion-icon name=\"paper\"></ion-icon>\n      <ion-label>\n        <ion-text color=\"danger\">\n          NEWS\n        </ion-text>\n      </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _Guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Guards/login.guard */ "./src/app/Guards/login.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: 'news',
                loadChildren: '../Pages/News/news.module#NewsPageModule',
                canActivate: [_Guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
            },
            { path: 'home', loadChildren: '../Pages/Home/home.module#HomePageModule' },
            {
                path: 'team',
                loadChildren: '../Pages/Team/team.module#TeamPageModule',
                canActivate: [_Guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
            },
            {
                path: 'settings',
                loadChildren: '../Pages/Settings/settings.module#SettingsPageModule',
                canActivate: [_Guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
            },
            {
                path: 'leagues',
                loadChildren: '../Pages/Leagues/leagues-list/leagues.module#LeaguesPageModule',
                canActivate: [_Guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
            },
            {
                path: 'stats',
                loadChildren: '../Pages/Stats/stats.module#StatsPageModule',
                canActivate: [_Guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map