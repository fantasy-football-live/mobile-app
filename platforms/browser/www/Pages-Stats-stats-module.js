(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Stats-stats-module"],{

/***/ "./src/app/Pages/Stats/stats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/Stats/stats.module.ts ***!
  \*********************************************/
/*! exports provided: StatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPageModule", function() { return StatsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _stats_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stats.page */ "./src/app/Pages/Stats/stats.page.ts");
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
        component: _stats_page__WEBPACK_IMPORTED_MODULE_5__["StatsPage"]
    }
];
var StatsPageModule = /** @class */ (function () {
    function StatsPageModule() {
    }
    StatsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_stats_page__WEBPACK_IMPORTED_MODULE_5__["StatsPage"]]
        })
    ], StatsPageModule);
    return StatsPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/Stats/stats.page.html":
/*!*********************************************!*\
  !*** ./src/app/Pages/Stats/stats.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Fixture Difficulty'\"></app-header>\n<ion-content padding>\n    <ion-item lines=\"none\">\n        <ion-label>Weeks</ion-label>\n        <ion-range [(ngModel)]=\"fixtureRange\" step=\"1\" snaps=\"true\" (ionChange)=\"updateRank()\" value=\"6\" pin=\"true\" min=\"1\"\n            max=\"10\" color=\"danger\">\n            <ion-label slot=\"end\">10</ion-label>\n            <ion-label slot=\"start\">1</ion-label>\n        </ion-range>\n    </ion-item>\n    <ion-list>\n        <ion-item lines=\"none\" *ngFor=\"let team of teams;let i = index;\" text-wrap>\n            <ion-note slot=\"start\">{{ i + 1 }}</ion-note>\n            <ion-label>\n                <h3>{{ team }}</h3>\n                <div class=\"fixture-elements\">\n                    <span class=\"fixture-difficulty\" *ngFor=\" let fixture of teamFixtures.get(team)?.slice(0, fixtureRange)\"\n                        [class]=\"'fixture-difficulty fixture-difficulty-' + fixture.difficulty\"></span>\n                </div>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/Stats/stats.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Pages/Stats/stats.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixture-difficulty {\n  margin: 0.4rem;\n  margin-left: 0;\n  border-radius: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-weight: 600;\n  padding: 0.5em;\n  max-width: 10px; }\n  .fixture-difficulty-2 {\n    background: #00ff86; }\n  .fixture-difficulty-3 {\n    background: #ebebe4; }\n  .fixture-difficulty-4 {\n    background: #ff005a;\n    color: #ffffff; }\n  .fixture-difficulty-5 {\n    color: #ffffff;\n    background: #861d46; }\n  .fixture-elements {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvUGFnZXMvU3RhdHMvc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZSxFQUFBO0VBRWY7SUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtJQUNJLG1CQUFtQixFQUFBO0VBR3ZCO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtFQUdsQjtJQUNJLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTtFQUkzQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1N0YXRzL3N0YXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXh0dXJlLWRpZmZpY3VsdHkge1xuICAgIG1hcmdpbjogMC40cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgbWF4LXdpZHRoOiAxMHB4O1xuXG4gICAgJi0yIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwZmY4NjtcbiAgICB9XG5cbiAgICAmLTMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmU0O1xuICAgIH1cblxuICAgICYtNCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjAwNWE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cblxuICAgICYtNSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODYxZDQ2O1xuICAgIH1cbn1cblxuLmZpeHR1cmUtZWxlbWVudHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Stats/stats.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/Stats/stats.page.ts ***!
  \*******************************************/
/*! exports provided: StatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPage", function() { return StatsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/http-request/http-request.service */ "./src/app/Services/http-request/http-request.service.ts");
/* harmony import */ var src_app_Services_static_data_static_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/static-data/static.data.service */ "./src/app/Services/static-data/static.data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsPage = /** @class */ (function () {
    function StatsPage(fplDataService, staticDataService) {
        this.fplDataService = fplDataService;
        this.staticDataService = staticDataService;
        this.teamFixtures = new Map();
        this.teamFixturesAll = new Map();
        this.fixtureDifficulty = new Map();
        this.fixtureRange = 6;
    }
    StatsPage.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([this.staticDataService.getTeams(), this.getFixtures()])
            .then(function (_a) {
            var teams = _a[0], fixtures = _a[1];
            _this.teams = teams;
            var upcomingFixtures = fixtures.filter(function (fixture) { return !fixture.finished; });
            _this.createMapOfUpcomingFixtures(upcomingFixtures);
            return null;
        })
            .then(function () { return _this.updateRank(); });
    };
    /**
     *
     * @param fixtures array of upcoming fixtures
     */
    StatsPage.prototype.createMapOfUpcomingFixtures = function (upcomingFixures) {
        var _this = this;
        upcomingFixures.map(function (fixture) {
            var homeTeam = _this.getTeamName(fixture.team_h), awayTeam = _this.getTeamName(fixture.team_a);
            var homeFixture = {
                venue: 'home',
                difficulty: fixture.team_h_difficulty,
                opponent: awayTeam,
                team_name: homeTeam
            };
            var awayFixure = {
                venue: 'away',
                difficulty: fixture.team_a_difficulty,
                opponent: homeTeam,
                team_name: awayTeam
            };
            var homeTeamFixtures = _this.teamFixturesAll.get(homeTeam) || [], homeTeamDifficulty = _this.fixtureDifficulty.get(homeTeam) || 0;
            homeTeamFixtures.push(homeFixture);
            _this.teamFixturesAll.set(homeTeam, homeTeamFixtures);
            _this.fixtureDifficulty.set(homeTeam, homeTeamDifficulty + fixture.team_h_difficulty);
            var awayTeamFixtures = _this.teamFixturesAll.get(awayTeam) || [], awayTeamDifficulty = _this.fixtureDifficulty.get(awayTeam) || 0;
            awayTeamFixtures.push(awayFixure);
            _this.fixtureDifficulty.set(awayTeam, awayTeamDifficulty + fixture.team_a_difficulty);
            _this.teamFixturesAll.set(awayTeam, awayTeamFixtures);
        });
        this.teams = Array.from(this.teamFixturesAll.keys());
    };
    StatsPage.prototype.updateRank = function () {
        var _this = this;
        var teamfixtures = Array.from(this.teamFixturesAll);
        teamfixtures.map(function (_a) {
            var team = _a[0], fixures = _a[1];
            var totalDifficulty = fixures.slice(0, _this.fixtureRange).reduce(function (a, b) {
                return a + b.difficulty;
            }, 0);
            _this.fixtureDifficulty.set(team, totalDifficulty);
        });
        teamfixtures.sort(function (_a, _b) {
            var key1 = _a[0], value1 = _a[1];
            var key2 = _b[0], value2 = _b[1];
            return _this.fixtureDifficulty.get(key1) - _this.fixtureDifficulty.get(key2);
        });
        this.teamFixtures = new Map(teamfixtures);
        this.teams = Array.from(this.teamFixtures.keys());
    };
    StatsPage.prototype.getTeamName = function (id) {
        if (id < 1 || id > 20) {
            return;
        }
        return this.teams.find(function (team) { return team.id === id; }).name;
    };
    /**
     *
     * @param id FPL start their Team ids at 1 and using an array to sort teams is awkward as it starts at 0 index
     */
    StatsPage.prototype.getTeamNameStartingAtZeroIndex = function (id) {
        return this.getTeamName(id + 1);
    };
    /**
     * Get all the fixtures played this year
     */
    StatsPage.prototype.getFixtures = function () {
        return this.fplDataService.fetch('https://fantasy.premierleague.com/drf/fixtures/');
    };
    StatsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.page.html */ "./src/app/Pages/Stats/stats.page.html"),
            styles: [__webpack_require__(/*! ./stats.page.scss */ "./src/app/Pages/Stats/stats.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_Services_http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"],
            src_app_Services_static_data_static_data_service__WEBPACK_IMPORTED_MODULE_2__["StaticDataService"]])
    ], StatsPage);
    return StatsPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Stats-stats-module.js.map