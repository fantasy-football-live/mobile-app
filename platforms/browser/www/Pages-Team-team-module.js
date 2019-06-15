(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Team-team-module"],{

/***/ "./src/app/Pages/Team/team.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/Team/team.module.ts ***!
  \*******************************************/
/*! exports provided: TeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team.page */ "./src/app/Pages/Team/team.page.ts");
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
        component: _team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"]
    }
];
var TeamPageModule = /** @class */ (function () {
    function TeamPageModule() {
    }
    TeamPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_team_page__WEBPACK_IMPORTED_MODULE_5__["TeamPage"]]
        })
    ], TeamPageModule);
    return TeamPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/Team/team.page.html":
/*!*******************************************!*\
  !*** ./src/app/Pages/Team/team.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'TEAM'\"></app-header>\n<app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\n<ion-content *ngIf=\"!showSpinner\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshUser($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <app-team-page [fantasyPlayer]=\"mainUserService.user\"></app-team-page>\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/Team/team.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/Team/team.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pitch ion-col {\n  padding: 0;\n  margin-top: 5px; }\n\n.fixture {\n  margin: 0;\n  padding: 0;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  margin-right: 3px;\n  margin-bottom: 0.2em;\n  box-shadow: 3px 3px 4px #ccc; }\n\n.fixture.difficulty-2 {\n    background-color: #00ff86; }\n\n.fixture.difficulty-3 {\n    background-color: #ebebe4; }\n\n.fixture.difficulty-4 {\n    background: #ff005a; }\n\n.fixture.difficulty-5 {\n    background-color: #861d46; }\n\n.fixture-list {\n    list-style: none;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: space-between; }\n\n.player-photo {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid rgba(204, 204, 204, 0);\n  margin: 0;\n  margin-bottom: 0.3em; }\n\n.player-photo--no-border {\n    border: none; }\n\n.player-photo--box-shadow {\n    box-shadow: 7px 8px 9px 0px rgba(204, 204, 204, 0.71);\n    background: rgba(214, 214, 214, 0.509804); }\n\n.player-photo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.player-photo__captain::after {\n    content: \"C\";\n    width: 20px;\n    position: absolute;\n    height: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 37px;\n    margin-left: -10px;\n    /* left: -1px; */\n    border-radius: 50%;\n    background: #FBFF12;\n    font-weight: 600;\n    font-size: 0.8em;\n    color: black; }\n\n.player-text {\n  margin-top: 0.2em;\n  color: black;\n  text-align: center; }\n\n.player-text p {\n    margin: 0;\n    text-align: center;\n    font-size: 0.75em;\n    font-weight: 800; }\n\n.player-text h6 {\n    margin: 0;\n    font-weight: 600;\n    font-size: .6em; }\n\n.fantasy-player__heading {\n  font-size: 0.7em;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0; }\n\n.main-logo {\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvUGFnZXMvVGVhbS90ZWFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDRCQUE0QixFQUFBOztBQVJoQztJQVdRLHlCQUF5QixFQUFBOztBQVhqQztJQWVRLHlCQUF5QixFQUFBOztBQWZqQztJQW1CUSxtQkFBbUIsRUFBQTs7QUFuQjNCO0lBdUJRLHlCQUF5QixFQUFBOztBQUc3QjtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsOEJBQThCLEVBQUE7O0FBSXRDO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxTQUFTO0VBQ1Qsb0JBQW9CLEVBQUE7O0FBRXBCO0lBQ0ksWUFBWSxFQUFBOztBQUdoQjtJQUNJLHFEQUFxRDtJQUNyRCx5Q0FBeUMsRUFBQTs7QUFHN0M7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUFLM0I7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBQTtJQUNBLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBTXBCO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFIdEI7SUFNUSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFUeEI7SUFhUSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFLbkI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvVGVhbS90ZWFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waXRjaCB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG59XG5cbi5maXh0dXJlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4ICNjY2M7XG5cbiAgICAmLmRpZmZpY3VsdHktMiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmODY7XG4gICAgfVxuXG4gICAgJi5kaWZmaWN1bHR5LTMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmU0O1xuICAgIH1cblxuICAgICYuZGlmZmljdWx0eS00IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmMDA1YTtcbiAgICB9XG5cbiAgICAmLmRpZmZpY3VsdHktNSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NjFkNDY7XG4gICAgfVxuXG4gICAgJi1saXN0IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG59XG5cbi5wbGF5ZXItcGhvdG8ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDApO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcblxuICAgICYtLW5vLWJvcmRlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAmLS1ib3gtc2hhZG93IHtcbiAgICAgICAgYm94LXNoYWRvdzogN3B4IDhweCA5cHggMHB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC43MSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTQsIDIxNCwgMC41MDk4MDQpO1xuICAgIH1cblxuICAgICYtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaW1nIHt9XG5cbiAgICAmX19jYXB0YWluOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQ1wiO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0b3A6IDM3cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgLyogbGVmdDogLTFweDsgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkJGRjEyO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufVxuXG5cblxuLnBsYXllci10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG5cbiAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAuNmVtO1xuICAgIH1cbn1cblxuLmZhbnRhc3ktcGxheWVyIHtcbiAgICAmX19oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLm1haW4tbG9nbyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Team/team.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/Team/team.page.ts ***!
  \*****************************************/
/*! exports provided: TeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPage", function() { return TeamPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/main-user/main-user.service */ "./src/app/Services/main-user/main-user.service.ts");
/* harmony import */ var src_app_Services_soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/soccer-player/soccerplayer.service */ "./src/app/Services/soccer-player/soccerplayer.service.ts");
/* harmony import */ var src_app_Services_live_data_live_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/live-data/live.data.service */ "./src/app/Services/live-data/live.data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TeamPage = /** @class */ (function () {
    function TeamPage(soccerPlayerService, mainUserService, liveDataService) {
        this.soccerPlayerService = soccerPlayerService;
        this.mainUserService = mainUserService;
        this.liveDataService = liveDataService;
        this.showSpinner = true;
    }
    TeamPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mainUserService.user) {
            this.loadUpcomingFixtures().then(function () { return (_this.showSpinner = false); });
        }
    };
    TeamPage.prototype.loadFixtures = function (players) {
        return __awaiter(this, void 0, void 0, function () {
            var playerFixtures, index;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(players.map(function (player) { return _this.soccerPlayerService.getUpcomingFixtures(player.id); }))];
                    case 1:
                        playerFixtures = _a.sent();
                        for (index = 0; index < players.length; index++) {
                            players[index].fixtures = playerFixtures[index];
                        }
                        return [2 /*return*/, players];
                }
            });
        });
    };
    TeamPage.prototype.loadUpcomingFixtures = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.all([
                        this.loadFixtures(this.mainUserService.user.team.Goalkeepers),
                        this.loadFixtures(this.mainUserService.user.team.Defenders),
                        this.loadFixtures(this.mainUserService.user.team.Midfielders),
                        this.loadFixtures(this.mainUserService.user.team.Forwards),
                        this.loadFixtures(this.mainUserService.user.team.Bench)
                    ]).then(function (_a) {
                        var g = _a[0], d = _a[1], m = _a[2], f = _a[3], b = _a[4];
                        _this.mainUserService.user.team.Goalkeepers = g;
                        _this.mainUserService.user.team.Defenders = d;
                        _this.mainUserService.user.team.Midfielders = m;
                        _this.mainUserService.user.team.Forwards = f;
                        _this.mainUserService.user.team.Bench = b;
                        _this.mainUserService.save();
                    })];
            });
        });
    };
    TeamPage.prototype.refreshUser = function (event) {
        var _this = this;
        this.refresh().then(function () {
            event.target.complete();
            _this.loadUpcomingFixtures();
        });
    };
    TeamPage.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                user = this.mainUserService.user.id;
                // re creates user - needs to be optimised
                return [2 /*return*/, this.mainUserService.createUser(user)];
            });
        });
    };
    TeamPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.page.html */ "./src/app/Pages/Team/team.page.html"),
            styles: [__webpack_require__(/*! ./team.page.scss */ "./src/app/Pages/Team/team.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_Services_soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_2__["SoccerPlayerService"],
            src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_1__["MainUserService"],
            src_app_Services_live_data_live_data_service__WEBPACK_IMPORTED_MODULE_3__["LiveDataService"]])
    ], TeamPage);
    return TeamPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Team-team-module.js.map