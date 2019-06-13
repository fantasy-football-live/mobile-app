(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Home-home-module"],{

/***/ "./src/app/Pages/Home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/Home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/Pages/Home/home.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/components.module */ "./src/app/Components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/Pages/Home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/Pages/Home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'HOME'\"></app-header>\n<app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\n<ion-content padding *ngIf=\"!showSpinner\">\n  <div *ngIf=\"!user\" class=\"input-container\">\n    <ion-item>\n      <ion-label position=\"stacked\">\n        Enter your FPL Id to begin...\n      </ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"FplId\">\n      </ion-input>\n    </ion-item>\n    <ion-button (click)=\"onFantasyIdEntered(FplId)\" shape=\"round\" expand=\"block\" color=\"danger\">Enter</ion-button>\n    <p class=\"privacy__link\">Check out our privacy policy <a target=\"_blank\" href=\"https://www.privacypolicies.com/privacy/view/5aab9410c306ad31ac1853eeeebe6b6a\">here</a></p>\n  </div>\n\n  <div *ngIf=\"user\">\n    <div class=\"home__card\">\n      <div class=\"home__card__badge\">\n        <img [src]=\"user.countryImage\" alt=\"\">\n      </div>\n      <div class=\"home__card__name\">\n        <h6> {{ user.name }} </h6>\n        <p> {{ user.team.name }}</p>\n      </div>\n\n      <div class=\"home__card__points\">\n        <h6>{{ user.team.overallPoints }}</h6>\n        <p>Total Points</p>\n      </div>\n    </div>\n\n    <ion-item-divider class=\"home__divider\">\n      <ion-label>\n        <ion-text color=\"danger\">\n          Transfers:</ion-text>\n        {{ user.gameweekTransfers }}\n      </ion-label>\n      <ion-label class=\"home__divider__rank\" slot=\"end\">\n        <ion-text color=\"danger\">\n          Rank:</ion-text>\n        {{ user.overallRank }}\n      </ion-label>\n    </ion-item-divider>\n\n    <div>\n      <ion-grid class=\"home__services\">\n        <ion-row>\n          <ion-col size=\"4\" class=\"home__square\" (click)=\"navigateTo('/team')\">\n            <ion-icon src=\"../../assets/icons/soccer-jersey.svg\" size=\"large\" color=\"danger\"></ion-icon>\n            <ion-label text-wrap>\n              Team\n            </ion-label>\n          </ion-col>\n          <ion-col data-aos=\"fade-up\" data-aos-delay=\"2000\" data-aos-duration=\"2000\" size=\"4\" class=\"home__square\"\n            (click)=\"navigateTo('/leagues')\">\n            <ion-icon src=\" ../../assets/icons/trophy.svg\" size=\"large\" color=\"danger\">\n            </ion-icon>\n            <ion-label text-wrap>\n              Leagues\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"4\" class=\"home__square\" data-aos=\"fade-right\" (click)=\"navigateTo('/news')\">\n            <ion-icon name=\"paper\" size=\"large\" color=\"danger\"></ion-icon>\n            <ion-label text-wrap>\n              News\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-list>\n      <ion-list-header>\n        <h6>Fixtures</h6>\n      </ion-list-header>\n      <ion-item *ngFor=\"let fixture of upcomingFixtures;\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img src=\"\" alt=\"\">\n        </ion-avatar>\n        <ion-label class=\"home__fixture\" text-center>\n          <h6>\n            {{ fixture.home_team }} vs {{ fixture.away_team }}\n          </h6>\n          <p>\n            {{ fixture.time }}\n          </p>\n        </ion-label>\n        <ion-avatar slot=\"end\">\n          <img src=\"\" alt=\"\">\n        </ion-avatar>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/Home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/Home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-direction: column;\n  height: 100%; }\n\n.privacy__link {\n  font-size: 0.7em; }\n\n.home__square {\n  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.2);\n  border-radius: 0.5em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.home__services {\n  margin-top: 1.2em;\n  margin-bottom: 1.5em;\n  color: rgba(203, 18, 58, 0.88); }\n\n.home__card {\n  height: 30vh;\n  width: 100%;\n  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.2);\n  margin-bottom: 1em;\n  border-radius: 0.5em;\n  background: linear-gradient(rgba(240, 172, 46, 0.88), rgba(203, 18, 58, 0.88)), url('stadium.webp');\n  background-size: cover;\n  background-origin: padding-box;\n  display: grid;\n  padding: 1em;\n  grid-auto-rows: 1fr;\n  grid-auto-columns: 1fr;\n  grid-template-areas: \". . .\" \"badge . .\" \"name . points\";\n  transition: all .5s -1s linear; }\n\n.home__card__name {\n    grid-area: name;\n    color: white;\n    font-weight: 600;\n    font-size: 0.75em;\n    text-shadow: 4px 3px 4px rgba(0, 0, 0, 0.5);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end; }\n\n.home__card__name p {\n      margin: 0;\n      font-size: 0.75em; }\n\n.home__card__name h6 {\n      font-size: 1.5em;\n      font-weight: bold; }\n\n.home__card__badge {\n    grid-area: badge; }\n\n.home__card__badge img {\n      height: 3em;\n      width: 3em;\n      border-radius: 50%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: center;\n         object-position: center;\n      box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.2); }\n\n.home__card__points {\n    color: #fff;\n    font-weight: 600;\n    font-size: 0.75em;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-end;\n    text-shadow: 4px 3px 4px rgba(0, 0, 0, 0.5);\n    grid-area: points; }\n\n.home__card__points p {\n      margin: 0;\n      font-size: 0.75em;\n      margin-top: 0.4em; }\n\n.home__card__points h6 {\n      margin: 0;\n      font-size: 1.5em;\n      font-weight: 600; }\n\n.home__divider {\n  padding-right: 16px; }\n\n.home__divider__rank {\n    overflow: inherit; }\n\n.home__fixture h6 {\n  font-weight: bold;\n  font-size: 0.75em; }\n\n.home__fixture p {\n  font-size: 0.75em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUFwcC9GYW50YXN5Rm9vdGJhbGxMaXZlL3NyYy9hcHAvUGFnZXMvSG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQixFQUFBOztBQUloQjtFQUNJLGdEQXRCa0M7RUF1QmxDLG9CQXJCYTtFQXNCYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDhCQW5DcUIsRUFBQTs7QUFzQ3pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxnREF2Q2tDO0VBd0NsQyxrQkFBa0I7RUFDbEIsb0JBdkNhO0VBd0NiLG1HQUErRTtFQUMvRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix3REFHbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBRTlCO0lBQ0ksZUFBZTtJQUNmLFlBeERjO0lBeURkLGdCQUFnQjtJQUNoQixpQkFBeUI7SUFDekIsMkNBdkRnQztJQXdEaEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUIsRUFBQTs7QUFSNUI7TUFXTyxTQUFTO01BQ1QsaUJBQXlCLEVBQUE7O0FBWmhDO01BZ0JPLGdCQW5FQztNQW9FRCxpQkFBaUIsRUFBQTs7QUFJekI7SUFXSSxnQkFBZ0IsRUFBQTs7QUFYbkI7TUFHTyxXQTVFQTtNQTZFQSxVQTdFQTtNQThFQSxrQkFBa0I7TUFDbEIsb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQiwwQkFBdUI7U0FBdkIsdUJBQXVCO01BQ3ZCLGdEQXBGMEIsRUFBQTs7QUEwRmxDO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDJDQTdGZ0M7SUEyR2hDLGlCQUFpQixFQUFBOztBQXRCcEI7TUFXTyxTQUFTO01BQ1QsaUJBQXlCO01BQ3pCLGlCQUFpQixFQUFBOztBQWJ4QjtNQWlCTyxTQUFTO01BQ1QsZ0JBeEdDO01BeUdELGdCQUFnQixFQUFBOztBQVM1QjtFQUNJLG1CQUFtQixFQUFBOztBQUVuQjtJQUNJLGlCQUFpQixFQUFBOztBQUl4QjtFQUVPLGlCQUFpQjtFQUNqQixpQkFBeUIsRUFBQTs7QUFIaEM7RUFPTyxpQkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcmVkOiByZ2JhKDIwMywgMTgsIDU4LCAwLjg4KTtcbiR5ZWxsb3c6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjg4KTtcbiRzaGFkb3c6IC4yZW0gLjJlbSAuM2VtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuJGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuJGJhZGdlLXNpemU6IDNlbTtcbiRmb250LXNpemU6IDEuNWVtO1xuJHRleHQtc2hhZG93OiA0cHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbi5pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcml2YWN5X19saW5rIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4uaG9tZSB7XG4gICAgJl9fc3F1YXJlIHtcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX3NlcnZpY2VzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS4yZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICAgICAgICBjb2xvcjogJHJlZDtcbiAgICB9XG5cbiAgICAmX19jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCR5ZWxsb3csICRyZWQpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdGFkaXVtLndlYnAnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcIi4gLiAuXCJcbiAgICAgICAgICAgIFwiYmFkZ2UgLiAuXCJcbiAgICAgICAgICAgIFwibmFtZSAuIHBvaW50c1wiO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIC0xcyBsaW5lYXI7XG5cbiAgICAgICAgJl9fbmFtZSB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IG5hbWU7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAvIDI7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplIC8gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDYge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2JhZGdlIHtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRiYWRnZS1zaXplO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkYmFkZ2Utc2l6ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBiYWRnZTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX3BvaW50cyB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUgLyAyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdztcblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC40ZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdyaWQtYXJlYTogcG9pbnRzO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgICZfX2RpdmlkZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gICAgICAgICZfX3Jhbmsge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19maXh0dXJlIHtcbiAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUgLyAyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/Home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_fixtures_fixture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/fixtures/fixture.service */ "./src/app/Services/fixtures/fixture.service.ts");
/* harmony import */ var src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/main-user/main-user.service */ "./src/app/Services/main-user/main-user.service.ts");
/* harmony import */ var src_app_Services_static_data_static_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/static-data/static.data.service */ "./src/app/Services/static-data/static.data.service.ts");
/* harmony import */ var src_app_Services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/login/login.service */ "./src/app/Services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(mainUserService, router, staticDataService, fixtureService, loginService) {
        this.mainUserService = mainUserService;
        this.router = router;
        this.staticDataService = staticDataService;
        this.fixtureService = fixtureService;
        this.loginService = loginService;
        this.showSpinner = true;
        this.upcomingFixtures = [];
        this.FplId = null;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([
            this.staticDataService.getUpcomingFixtures(),
            this.staticDataService.getTeams()
        ]).then(function (_a) {
            var fixtures = _a[0], teams = _a[1];
            _this.upcomingFixtures = _this.fixtureService.createFixtureList(fixtures, teams);
            _this.mainUserService.loadSavedUser().then(function (user) {
                // this.loginService.login();
                _this.user = user;
                _this.showSpinner = false;
            });
        });
    };
    HomePage.prototype.onFantasyIdEntered = function (id) {
        var _this = this;
        this.mainUserService.createUser(id).then(function (user) {
            _this.user = user;
            _this.showSpinner = false;
        });
    };
    HomePage.prototype.navigateTo = function (url) {
        this.router.navigateByUrl("/tabs" + url);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/Pages/Home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/Pages/Home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_3__["MainUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_Services_static_data_static_data_service__WEBPACK_IMPORTED_MODULE_4__["StaticDataService"],
            src_app_Services_fixtures_fixture_service__WEBPACK_IMPORTED_MODULE_2__["FixtureService"],
            src_app_Services_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/Services/fixtures/fixture.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Services/fixtures/fixture.service.ts ***!
  \******************************************************/
/*! exports provided: FixtureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixtureService", function() { return FixtureService; });
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

var FixtureService = /** @class */ (function () {
    function FixtureService() {
    }
    FixtureService.prototype.getBadge = function (team) {
        return "/assets/badges/" + team + ".png";
    };
    FixtureService.prototype.getTeamName = function (teams, id) {
        return teams.find(function (team) { return team.id === id; }).name;
    };
    FixtureService.prototype.createFixtureList = function (fixtures, teams) {
        var _this = this;
        return fixtures.map(function (fixture) {
            var _a = [_this.getTeamName(teams, fixture.team_h), _this.getTeamName(teams, fixture.team_a)], homeTeam = _a[0], awayTeam = _a[1];
            return {
                home_team: homeTeam,
                away_team: awayTeam,
                time: fixture.kickoff_time_formatted,
                badge_home: _this.getBadge(homeTeam)
            };
        });
    };
    FixtureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FixtureService);
    return FixtureService;
}());



/***/ }),

/***/ "./src/app/Services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http, nativeHttp) {
        this.http = http;
        this.nativeHttp = nativeHttp;
    }
    LoginService.prototype.ngOnInit = function () { };
    LoginService.prototype.login = function () {
        var _this = this;
        var p = {
            picks: [
                {
                    element: 498,
                    position: 1,
                    is_captain: true,
                    is_vice_captain: false
                },
                {
                    element: 268,
                    position: 2,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 113,
                    position: 3,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 292,
                    position: 4,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 339,
                    position: 5,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 270,
                    position: 6,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 302,
                    position: 7,
                    is_captain: false,
                    is_vice_captain: false
                },
                { element: 122, position: 8, is_captain: false, is_vice_captain: true },
                {
                    element: 305,
                    position: 9,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 437,
                    position: 10,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 280,
                    position: 11,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 190,
                    position: 12,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 208,
                    position: 13,
                    is_captain: false,
                    is_vice_captain: false
                },
                {
                    element: 425,
                    position: 14,
                    is_captain: false,
                    is_vice_captain: false
                },
                { element: 93, position: 15, is_captain: false, is_vice_captain: false }
            ]
        };
        var loginData = {
            login: 'davidhiggins1712@gmail.com',
            password: 'matchy123*',
            app: 'plfpl-web',
            redirect_uri: 'https://fantasy.premierleague.com/a/login'
        };
        this.http
            .get('http://192.168.0.178:5000/login')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (token) {
            return _this.http.post('http://192.168.0.178:5000/substitutions', {
                picks: p,
                token: token.text()
            });
        }))
            .subscribe();
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Home-home-module.js.map