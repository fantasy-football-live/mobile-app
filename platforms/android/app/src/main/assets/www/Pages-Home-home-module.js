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

module.exports = "<app-header [title]=\"'HOME'\"></app-header>\n<app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\n<ion-content padding *ngIf=\"!showSpinner\">\n  <div *ngIf=\"!user\" class=\"input-container\">\n    <ion-item>\n      <ion-label position=\"stacked\">\n        Enter your FPL Id to begin...\n      </ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"FplId\">\n      </ion-input>\n    </ion-item>\n    <ion-button (click)=\"onFantasyIdEntered(FplId)\" shape=\"round\" expand=\"block\" color=\"danger\">Enter</ion-button>\n    <p class=\"privacy__link\">Check out our privacy policy <a target=\"_blank\"\n        href=\"https://www.privacypolicies.com/privacy/view/5aab9410c306ad31ac1853eeeebe6b6a\">here</a></p>\n  </div>\n\n  <div *ngIf=\"user\">\n    <div class=\"home__card\">\n      <div class=\"home__card__badge\">\n        <img [src]=\"user.countryImage\" alt=\"\">\n      </div>\n      <div class=\"home__card__name\">\n        <h6> {{ user.name }} </h6>\n        <p> {{ user.team.name }}</p>\n      </div>\n\n      <div class=\"home__card__points\">\n        <h6>{{ user.team.overallPoints }}</h6>\n        <p>Total Points</p>\n      </div>\n    </div>\n\n    <ion-item-divider class=\"home__divider\">\n      <ion-label>\n        <ion-text color=\"danger\">\n          Transfers:</ion-text>\n        {{ user.gameweekTransfers }}\n      </ion-label>\n      <ion-label class=\"home__divider__rank\" slot=\"end\">\n        <ion-text color=\"danger\">\n          Rank:</ion-text>\n        {{ user.overallRank }}\n      </ion-label>\n    </ion-item-divider>\n    <ion-grid class=\"home__services\">\n      <ion-row justify-content-between>\n        <ion-col size=\"3\" class=\"home__square\" (click)=\"navigateTo('/team')\">\n          <ion-icon src=\"../../assets/icons/soccer-jersey.svg\" size=\"large\" color=\"danger\"></ion-icon>\n          <ion-label text-wrap>\n            Team\n          </ion-label>\n        </ion-col>\n        <ion-col data-aos=\"fade-up\" data-aos-delay=\"2000\" data-aos-duration=\"2000\" size=\"3\" class=\"home__square\"\n          (click)=\"navigateTo('/leagues')\">\n          <ion-icon src=\" ../../assets/icons/trophy.svg\" size=\"large\" color=\"danger\">\n          </ion-icon>\n          <ion-label text-wrap>\n            Leagues\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"3\" class=\"home__square\" data-aos=\"fade-right\" (click)=\"navigateTo('/news')\">\n          <ion-icon name=\"paper\" size=\"large\" color=\"danger\"></ion-icon>\n          <ion-label text-wrap>\n            News\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-between>\n        <ion-col size=\"3\" class=\"home__square\" (click)=\"navigateTo('/team')\">\n          <ion-icon name='football' size=\"large\" color=\"danger\"></ion-icon>\n          <ion-label text-wrap>\n            Fixtures\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- <ion-list>\n      <ion-list-header>\n        <h6>Fixtures</h6>\n      </ion-list-header>\n      <ion-item *ngFor=\"let fixture of upcomingFixtures;\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img src=\"\" alt=\"\">\n        </ion-avatar>\n        <ion-label class=\"home__fixture\" text-center>\n          <h6>\n            {{ fixture.home_team }} vs {{ fixture.away_team }}\n          </h6>\n          <p>\n            {{ fixture.time }}\n          </p>\n        </ion-label>\n        <ion-avatar slot=\"end\">\n          <img src=\"\" alt=\"\">\n        </ion-avatar>\n      </ion-item>\n    </ion-list> -->\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/Home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/Home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-direction: column;\n  height: 100%; }\n\n.privacy__link {\n  font-size: 0.7em; }\n\n.home__square {\n  box-shadow: 6px 3px 13px rgba(0, 0, 0, 0.2);\n  border-radius: 0.5em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: .5em 3em;\n  margin-bottom: 1em; }\n\n.home__services {\n  margin-top: 1.2em;\n  margin-bottom: 1.5em;\n  color: rgba(203, 18, 58, 0.88); }\n\n.home__card {\n  height: 30vh;\n  width: 100%;\n  box-shadow: 6px 3px 13px rgba(0, 0, 0, 0.2);\n  margin-bottom: 1em;\n  border-radius: 0.5em;\n  background: linear-gradient(rgba(240, 172, 46, 0.88), rgba(203, 18, 58, 0.88)), url('stadium.webp');\n  background-size: cover;\n  display: grid;\n  padding: 1em;\n  grid-auto-rows: 1fr;\n  grid-auto-columns: 1fr;\n  grid-template-areas: \". . .\" \"badge . .\" \"name . points\";\n  transition: all .5s -1s linear; }\n\n.home__card__name {\n    grid-area: name;\n    color: white;\n    font-weight: 600;\n    font-size: 0.75em;\n    text-shadow: 4px 3px 4px rgba(0, 0, 0, 0.5);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end; }\n\n.home__card__name p {\n      margin: 0;\n      font-size: 0.75em; }\n\n.home__card__name h6 {\n      font-size: 1.5em;\n      font-weight: bold; }\n\n.home__card__badge {\n    grid-area: badge; }\n\n.home__card__badge img {\n      height: 3em;\n      width: 3em;\n      border-radius: 50%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: center;\n         object-position: center;\n      box-shadow: 6px 3px 13px rgba(0, 0, 0, 0.2); }\n\n.home__card__points {\n    color: #fff;\n    font-weight: 600;\n    font-size: 0.75em;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-end;\n    text-shadow: 4px 3px 4px rgba(0, 0, 0, 0.5);\n    grid-area: points; }\n\n.home__card__points p {\n      margin: 0;\n      font-size: 0.75em;\n      margin-top: 0.4em; }\n\n.home__card__points h6 {\n      margin: 0;\n      font-size: 1.5em;\n      font-weight: 600; }\n\n.home__divider {\n  padding-right: 16px; }\n\n.home__divider__rank {\n    overflow: inherit; }\n\n.home__fixture h6 {\n  font-weight: bold;\n  font-size: 0.75em; }\n\n.home__fixture p {\n  font-size: 0.75em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvUGFnZXMvSG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQixFQUFBOztBQUloQjtFQUNJLDJDQXRCZ0M7RUF1QmhDLG9CQXJCYTtFQXNCYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsOEJBckNxQixFQUFBOztBQXdDekI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLDJDQXpDZ0M7RUEwQ2hDLGtCQUFrQjtFQUNsQixvQkF6Q2E7RUEwQ2IsbUdBQStFO0VBQy9FLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0RBR21CO0VBQ25CLDhCQUE4QixFQUFBOztBQUU5QjtJQUNJLGVBQWU7SUFDZixZQXpEYztJQTBEZCxnQkFBZ0I7SUFDaEIsaUJBQXlCO0lBQ3pCLDJDQXhEZ0M7SUF5RGhDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCLEVBQUE7O0FBUjVCO01BV08sU0FBUztNQUNULGlCQUF5QixFQUFBOztBQVpoQztNQWdCTyxnQkFwRUM7TUFxRUQsaUJBQWlCLEVBQUE7O0FBSXpCO0lBV0ksZ0JBQWdCLEVBQUE7O0FBWG5CO01BR08sV0E3RUE7TUE4RUEsVUE5RUE7TUErRUEsa0JBQWtCO01BQ2xCLG9CQUFpQjtTQUFqQixpQkFBaUI7TUFDakIsMEJBQXVCO1NBQXZCLHVCQUF1QjtNQUN2QiwyQ0FyRndCLEVBQUE7O0FBMkZoQztJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwyQ0E5RmdDO0lBNEdoQyxpQkFBaUIsRUFBQTs7QUF0QnBCO01BV08sU0FBUztNQUNULGlCQUF5QjtNQUN6QixpQkFBaUIsRUFBQTs7QUFieEI7TUFpQk8sU0FBUztNQUNULGdCQXpHQztNQTBHRCxnQkFBZ0IsRUFBQTs7QUFTNUI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFbkI7SUFDSSxpQkFBaUIsRUFBQTs7QUFJeEI7RUFFTyxpQkFBaUI7RUFDakIsaUJBQXlCLEVBQUE7O0FBSGhDO0VBT08saUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9Ib21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJlZDogcmdiYSgyMDMsIDE4LCA1OCwgMC44OCk7XG4keWVsbG93OiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44OCk7XG4kc2hhZG93OiA2cHggM3B4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuJHdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4kYm9yZGVyLXJhZGl1czogMC41ZW07XG4kYmFkZ2Utc2l6ZTogM2VtO1xuJGZvbnQtc2l6ZTogMS41ZW07XG4kdGV4dC1zaGFkb3c6IDRweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcblxuLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnByaXZhY3lfX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5ob21lIHtcbiAgICAmX19zcXVhcmUge1xuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gM2VtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuXG4gICAgJl9fc2VydmljZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICAgIGNvbG9yOiAkcmVkO1xuICAgIH1cblxuICAgICZfX2NhcmQge1xuICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJHllbGxvdywgJHJlZCksIHVybCgnLi4vLi4vLi4vYXNzZXRzL3N0YWRpdW0ud2VicCcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcIi4gLiAuXCJcbiAgICAgICAgICAgIFwiYmFkZ2UgLiAuXCJcbiAgICAgICAgICAgIFwibmFtZSAuIHBvaW50c1wiO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIC0xcyBsaW5lYXI7XG5cbiAgICAgICAgJl9fbmFtZSB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IG5hbWU7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAvIDI7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplIC8gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDYge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2JhZGdlIHtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRiYWRnZS1zaXplO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkYmFkZ2Utc2l6ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBiYWRnZTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX3BvaW50cyB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUgLyAyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdztcblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC40ZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdyaWQtYXJlYTogcG9pbnRzO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgICZfX2RpdmlkZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gICAgICAgICZfX3Jhbmsge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19maXh0dXJlIHtcbiAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUgLyAyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
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
    function LoginService(nativeHttp) {
        this.nativeHttp = nativeHttp;
    }
    LoginService.prototype.ngOnInit = function () { };
    // experimental
    LoginService.prototype.login = function () {
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
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__["HTTP"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Home-home-module.js.map