(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-Home-home-module~Pages-Leagues-leagues-list-leagues-module~Pages-News-news-module~Page~798e5fa8"],{

/***/ "./src/app/Components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/Components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/loading-spinner/loading-spinner.component */ "./src/app/Components/ui/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _team_page_pitch_pitch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-page/pitch/pitch.component */ "./src/app/Components/team-page/pitch/pitch.component.ts");
/* harmony import */ var _team_page_pitch_row_of_players_row_of_players_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-page/pitch/row-of-players/row-of-players.component */ "./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.ts");
/* harmony import */ var _ui_list_divider_list_divider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/list-divider/list-divider.component */ "./src/app/Components/ui/list-divider/list-divider.component.ts");
/* harmony import */ var _team_page_pitch_pitch_team_info_pitch_team_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-page/pitch/pitch-team-info/pitch-team-info.component */ "./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.ts");
/* harmony import */ var _team_page_pitch_player_photo_player_photo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team-page/pitch/player-photo/player-photo.component */ "./src/app/Components/team-page/pitch/player-photo/player-photo.component.ts");
/* harmony import */ var _team_page_team_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team-page/team-page.component */ "./src/app/Components/team-page/team-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                _ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"],
                _team_page_pitch_pitch_component__WEBPACK_IMPORTED_MODULE_5__["PitchComponent"],
                _team_page_pitch_row_of_players_row_of_players_component__WEBPACK_IMPORTED_MODULE_6__["RowOfPlayersComponent"],
                _ui_list_divider_list_divider_component__WEBPACK_IMPORTED_MODULE_7__["ListDividerComponent"],
                _team_page_pitch_pitch_team_info_pitch_team_info_component__WEBPACK_IMPORTED_MODULE_8__["PitchTeamInfoComponent"],
                _team_page_pitch_player_photo_player_photo_component__WEBPACK_IMPORTED_MODULE_9__["PlayerPhotoComponent"],
                _team_page_team_page_component__WEBPACK_IMPORTED_MODULE_10__["TeamPageComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                _ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"],
                _team_page_pitch_row_of_players_row_of_players_component__WEBPACK_IMPORTED_MODULE_6__["RowOfPlayersComponent"],
                _ui_list_divider_list_divider_component__WEBPACK_IMPORTED_MODULE_7__["ListDividerComponent"],
                _team_page_pitch_pitch_component__WEBPACK_IMPORTED_MODULE_5__["PitchComponent"],
                _team_page_pitch_player_photo_player_photo_component__WEBPACK_IMPORTED_MODULE_9__["PlayerPhotoComponent"],
                _team_page_team_page_component__WEBPACK_IMPORTED_MODULE_10__["TeamPageComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/tabs/home\">\n        <ion-icon slot=\"icon-only\" src=\"../../assets/icons/house-outline.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-label class=\"main-logo\">{{ title }}</ion-label>\n    <ion-buttons slot=\"secondary\">\n      <ion-button href=\"/tabs/settings\">\n        <ion-icon slot=\"icon-only\" src=\"../../assets/icons/tools.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>"

/***/ }),

/***/ "./src/app/Components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/Components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item lines=\"none\">\n  <ion-label text-wrap>\n      <h2 class=\"fantasy-player__heading\" text-uppercase><strong>{{ player.team.name }}</strong> </h2>\n      <p class=\"fantasy-player__heading\">GW Points - <strong>{{ player.team.gameweekPoints }} </strong>\n      </p>\n      <p class=\"fantasy-player__heading\">Overall Points - <strong>{{ player.team.overallPoints }} </strong>\n        <p class=\"fantasy-player__heading\">GW Transfers - <strong>{{ player.gameweekTransfers }} </strong>\n        </p>\n\n        <p class=\"fantasy-player__heading\">Value - <strong>{{ player.value / 10 }} </strong>\n        </p>\n        <p class=\"fantasy-player__heading\">Bank - <strong>{{ player.bank / 10 }} </strong>\n        </p>\n        <ion-badge size=\"small\" color=\"danger\">{{ player.activeChip }}</ion-badge>\n    </ion-label>\n    <ion-button shape=\"round\" size=\"small\" color=\"danger\" href=\"https://fantasy.premierleague.com/a/team/{{player.team.id}}\"\n      slot=\"end\">\n      <ion-label>VIEW TEAM ON FPL</ion-label>\n    </ion-button>\n</ion-item>"

/***/ }),

/***/ "./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fantasy-player__heading {\n  font-size: 0.7em;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0; }\n\n.main-logo {\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvQ29tcG9uZW50cy90ZWFtLXBhZ2UvcGl0Y2gvcGl0Y2gtdGVhbS1pbmZvL3BpdGNoLXRlYW0taW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3RlYW0tcGFnZS9waXRjaC9waXRjaC10ZWFtLWluZm8vcGl0Y2gtdGVhbS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhbnRhc3ktcGxheWVyIHtcbiAgICAmX19oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLm1haW4tbG9nbyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PitchTeamInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchTeamInfoComponent", function() { return PitchTeamInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/FantasyPlayer */ "./src/app/Models/FantasyPlayer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PitchTeamInfoComponent = /** @class */ (function () {
    function PitchTeamInfoComponent() {
    }
    PitchTeamInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], PitchTeamInfoComponent.prototype, "player", void 0);
    PitchTeamInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pitch-team-info',
            template: __webpack_require__(/*! ./pitch-team-info.component.html */ "./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.html"),
            styles: [__webpack_require__(/*! ./pitch-team-info.component.scss */ "./src/app/Components/team-page/pitch/pitch-team-info/pitch-team-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PitchTeamInfoComponent);
    return PitchTeamInfoComponent;
}());



/***/ }),

/***/ "./src/app/Components/team-page/pitch/pitch.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/pitch.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pitch\">\n    <app-row-of-players [players]=\"fantasyPlayer.team.Goalkeepers\" [fantasyPlayer]='fantasyPlayer'></app-row-of-players>\n    <app-row-of-players [players]=\"fantasyPlayer.team.Defenders\" [fantasyPlayer]='fantasyPlayer'></app-row-of-players>\n    <app-row-of-players [players]=\"fantasyPlayer.team.Midfielders\" [fantasyPlayer]='fantasyPlayer'></app-row-of-players>\n    <app-row-of-players [players]=\"fantasyPlayer.team.Forwards\" [fantasyPlayer]='fantasyPlayer'></app-row-of-players>\n    <app-list-divider [Title]=\"'Bench'\"></app-list-divider>\n    <app-row-of-players [players]=\"fantasyPlayer.team.Bench\" [fantasyPlayer]='fantasyPlayer'></app-row-of-players>\n</div>"

/***/ }),

/***/ "./src/app/Components/team-page/pitch/pitch.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/pitch.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdGVhbS1wYWdlL3BpdGNoL3BpdGNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/team-page/pitch/pitch.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/pitch.component.ts ***!
  \***************************************************************/
/*! exports provided: PitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchComponent", function() { return PitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/FantasyPlayer */ "./src/app/Models/FantasyPlayer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PitchComponent = /** @class */ (function () {
    function PitchComponent() {
    }
    PitchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], PitchComponent.prototype, "fantasyPlayer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PitchComponent.prototype, "captainId", void 0);
    PitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pitch',
            template: __webpack_require__(/*! ./pitch.component.html */ "./src/app/Components/team-page/pitch/pitch.component.html"),
            styles: [__webpack_require__(/*! ./pitch.component.scss */ "./src/app/Components/team-page/pitch/pitch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PitchComponent);
    return PitchComponent;
}());



/***/ }),

/***/ "./src/app/Components/team-page/pitch/player-photo/player-photo.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/player-photo/player-photo.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-photo-container\">\n  <figure class=\"player-photo player-photo--box-shadow\" [ngClass]=\"{'player-photo__captain': isCaptain }\">\n    <img src='{{player.image}}' />\n  </figure>\n  <div class=\"player-text\">\n    <ul class=\"fixture-list\">\n      <li *ngFor=\"let fixture of player?.fixtures?.slice(0,5)\" class=\"fixture difficulty-{{fixture.difficulty}}\"></li>\n    </ul>\n    <h6>{{ player.name }}</h6>\n    <p>{{ player.gameweekPoints }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/team-page/pitch/player-photo/player-photo.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/player-photo/player-photo.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixture {\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  margin: 0.1em;\n  box-shadow: 0.2em 0.1em 0.2em rgba(0, 0, 0, 0.2); }\n  .fixture.difficulty-2 {\n    background-color: #00ff86; }\n  .fixture.difficulty-3 {\n    background-color: #ebebe4; }\n  .fixture.difficulty-4 {\n    background: #ff005a; }\n  .fixture.difficulty-5 {\n    background-color: #861d46; }\n  .fixture-list {\n    list-style: none;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: space-between; }\n  .player-photo {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0;\n  padding: .3em;\n  margin-bottom: 0.3em;\n  box-shadow: 0.1em 0.1em 0.5em 0.1em rgba(0, 0, 0, 0.2); }\n  .player-photo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n  .player-photo__captain::after {\n    content: \"C\";\n    width: 20px;\n    position: absolute;\n    height: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 37px;\n    margin-left: -10px;\n    /* left: -1px; */\n    border-radius: 50%;\n    background: #FBFF12;\n    font-weight: 600;\n    font-size: 0.8em;\n    color: black; }\n  .player-text {\n  margin-top: 0.2em;\n  color: black;\n  text-align: center; }\n  .player-text p {\n    margin: 0;\n    text-align: center;\n    font-size: 0.75em;\n    font-weight: 800; }\n  .player-text h6 {\n    margin: 0;\n    font-weight: 600;\n    font-size: .6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvQ29tcG9uZW50cy90ZWFtLXBhZ2UvcGl0Y2gvcGxheWVyLXBob3RvL3BsYXllci1waG90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnREFBZ0QsRUFBQTtFQUxwRDtJQVFRLHlCQUF5QixFQUFBO0VBUmpDO0lBWVEseUJBQXlCLEVBQUE7RUFaakM7SUFnQlEsbUJBQW1CLEVBQUE7RUFoQjNCO0lBb0JRLHlCQUF5QixFQUFBO0VBRzdCO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYiw4QkFBOEIsRUFBQTtFQUl0QztFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixzREEzQytDLEVBQUE7RUE2Qy9DO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7RUFHM0I7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBQTtJQUNBLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFNcEI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBSHRCO0lBTVEsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFUeEI7SUFhUSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdGVhbS1wYWdlL3BpdGNoL3BsYXllci1waG90by9wbGF5ZXItcGhvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc2hhZG93OiAwLjFlbSAwLjFlbSAwLjVlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbi5maXh0dXJlIHtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMC4xZW07XG4gICAgYm94LXNoYWRvdzogMC4yZW0gMC4xZW0gMC4yZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gICAgJi5kaWZmaWN1bHR5LTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjg2O1xuICAgIH1cblxuICAgICYuZGlmZmljdWx0eS0zIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlNDtcbiAgICB9XG5cbiAgICAmLmRpZmZpY3VsdHktNCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjAwNWE7XG4gICAgfVxuXG4gICAgJi5kaWZmaWN1bHR5LTUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODYxZDQ2O1xuICAgIH1cblxuICAgICYtbGlzdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxufVxuXG4ucGxheWVyLXBob3RvIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IC4zZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcblxuICAgICYtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fY2FwdGFpbjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIkNcIjtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdG9wOiAzN3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIC8qIGxlZnQ6IC0xcHg7ICovXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZCRkYxMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn1cblxuXG5cbi5wbGF5ZXItdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMC4yZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuXG4gICAgaDYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/team-page/pitch/player-photo/player-photo.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/player-photo/player-photo.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PlayerPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPhotoComponent", function() { return PlayerPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_SoccerPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/SoccerPlayer */ "./src/app/Models/SoccerPlayer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerPhotoComponent = /** @class */ (function () {
    function PlayerPhotoComponent() {
    }
    PlayerPhotoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_Models_SoccerPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], PlayerPhotoComponent.prototype, "player", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PlayerPhotoComponent.prototype, "isCaptain", void 0);
    PlayerPhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-photo',
            template: __webpack_require__(/*! ./player-photo.component.html */ "./src/app/Components/team-page/pitch/player-photo/player-photo.component.html"),
            styles: [__webpack_require__(/*! ./player-photo.component.scss */ "./src/app/Components/team-page/pitch/player-photo/player-photo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerPhotoComponent);
    return PlayerPhotoComponent;
}());



/***/ }),

/***/ "./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row justify-content-center>\n  <ion-col *ngFor=\"let player of players\" align-self-center>\n      <app-player-photo [player]=\"player\" [isCaptain]=\"fantasyPlayer.team.captainId === player.id\"></app-player-photo>\n  </ion-col>\n</ion-row>\n"

/***/ }),

/***/ "./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdGVhbS1wYWdlL3BpdGNoL3Jvdy1vZi1wbGF5ZXJzL3Jvdy1vZi1wbGF5ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RowOfPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowOfPlayersComponent", function() { return RowOfPlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/FantasyPlayer */ "./src/app/Models/FantasyPlayer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RowOfPlayersComponent = /** @class */ (function () {
    function RowOfPlayersComponent() {
    }
    RowOfPlayersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RowOfPlayersComponent.prototype, "players", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], RowOfPlayersComponent.prototype, "fantasyPlayer", void 0);
    RowOfPlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-of-players',
            template: __webpack_require__(/*! ./row-of-players.component.html */ "./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.html"),
            styles: [__webpack_require__(/*! ./row-of-players.component.scss */ "./src/app/Components/team-page/pitch/row-of-players/row-of-players.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RowOfPlayersComponent);
    return RowOfPlayersComponent;
}());



/***/ }),

/***/ "./src/app/Components/team-page/team-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/team-page/team-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"showCloseButton\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        Close\n      </ion-button>\n    </ion-buttons>\n    <ion-title>TEAM</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\n<ion-content *ngIf=\"!showSpinner\">\n  <app-pitch-team-info [player]=\"fantasyPlayer\"></app-pitch-team-info>\n\n  <ion-grid *ngIf=\"fantasyPlayer\">\n    <app-pitch [fantasyPlayer]=\"fantasyPlayer\"></app-pitch>\n\n    <app-list-divider *ngIf=\"gameweekTransfers.length > 0\" [Title]=\"'Transfers'\"></app-list-divider>\n\n    <ion-row *ngFor=\"let transfer of gameweekTransfers\">\n      <ion-col size='4'>\n        <app-player-photo [player]=\"transfer.transferIn\"></app-player-photo>\n      </ion-col>\n      <ion-col size='4' class=\"gameweek-transfers__icon\">\n        <ion-icon name=\"swap\"></ion-icon>\n      </ion-col>\n      <ion-col size='4'>\n        <app-player-photo [player]=\"transfer.transferOut\"></app-player-photo>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/Components/team-page/team-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Components/team-page/team-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gameweek-transfers__icon {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvQ29tcG9uZW50cy90ZWFtLXBhZ2UvdGVhbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdGVhbS1wYWdlL3RlYW0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1ld2Vlay10cmFuc2ZlcnNfX2ljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/team-page/team-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/team-page/team-page.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageComponent", function() { return TeamPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/FantasyPlayer */ "./src/app/Models/FantasyPlayer.ts");
/* harmony import */ var src_app_Services_transfers_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/transfers/transfer.service */ "./src/app/Services/transfers/transfer.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamPageComponent = /** @class */ (function () {
    function TeamPageComponent(transferService, modalController) {
        this.transferService = transferService;
        this.modalController = modalController;
        this.gameweekTransfers = [];
        this.showSpinner = true;
        this.showCloseButton = false;
    }
    TeamPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transferService.getGameweekTransfers(this.fantasyPlayer.team.id).then(function (transfers) {
            for (var _i = 0, transfers_1 = transfers; _i < transfers_1.length; _i++) {
                var transfer = transfers_1[_i];
                _this.gameweekTransfers.push(transfer);
            }
            _this.showSpinner = false;
        });
    };
    TeamPageComponent.prototype.closeModal = function () {
        this.modalController.dismiss();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], TeamPageComponent.prototype, "fantasyPlayer", void 0);
    TeamPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-page',
            template: __webpack_require__(/*! ./team-page.component.html */ "./src/app/Components/team-page/team-page.component.html"),
            styles: [__webpack_require__(/*! ./team-page.component.scss */ "./src/app/Components/team-page/team-page.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_Services_transfers_transfer_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], TeamPageComponent);
    return TeamPageComponent;
}());



/***/ }),

/***/ "./src/app/Components/ui/list-divider/list-divider.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Components/ui/list-divider/list-divider.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item-divider class=\"divider\">\n    <ion-label lines=\"inset\">\n        <ion-text>\n          {{Title}}\n        </ion-text>\n      </ion-label>\n</ion-item-divider>\n"

/***/ }),

/***/ "./src/app/Components/ui/list-divider/list-divider.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Components/ui/list-divider/list-divider.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider {\n  margin-bottom: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvQ29tcG9uZW50cy91aS9saXN0LWRpdmlkZXIvbGlzdC1kaXZpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JBSGlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3VpL2xpc3QtZGl2aWRlci9saXN0LWRpdmlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm90dG9tLW1hcmdpbjogMS41ZW07XG5cbi5kaXZpZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAkYm90dG9tLW1hcmdpbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/ui/list-divider/list-divider.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/ui/list-divider/list-divider.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListDividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDividerComponent", function() { return ListDividerComponent; });
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

var ListDividerComponent = /** @class */ (function () {
    function ListDividerComponent() {
    }
    ListDividerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListDividerComponent.prototype, "Title", void 0);
    ListDividerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-divider',
            template: __webpack_require__(/*! ./list-divider.component.html */ "./src/app/Components/ui/list-divider/list-divider.component.html"),
            styles: [__webpack_require__(/*! ./list-divider.component.scss */ "./src/app/Components/ui/list-divider/list-divider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListDividerComponent);
    return ListDividerComponent;
}());



/***/ }),

/***/ "./src/app/Components/ui/loading-spinner/loading-spinner.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Components/ui/loading-spinner/loading-spinner.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>"

/***/ }),

/***/ "./src/app/Components/ui/loading-spinner/loading-spinner.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Components/ui/loading-spinner/loading-spinner.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 50% auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\napp-loading-spinner {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvQ29tcG9uZW50cy91aS9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7RUFFckIsNERBQTREO0VBQzVELG9EQUFvRCxFQUFBOztBQUd4RDtFQUNJLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQThCO0VBQzlCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFFSTs7O0lBR0ksOEJBQThCLEVBQUE7RUFHbEM7SUFDSSw0QkFBOEIsRUFBQSxFQUFBOztBQUl0QztFQUVJOzs7SUFHSSxzQkFBc0I7SUFDdEIsOEJBQThCLEVBQUE7RUFHbEM7SUFDSSxvQkFBc0I7SUFDdEIsNEJBQThCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdWkvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1MCUgYXV0bztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuYXBwLWxvYWRpbmctc3Bpbm5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNwaW5uZXI+ZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uc3Bpbm5lciAucmVjdDIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuXG4uc3Bpbm5lciAucmVjdDMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xufVxuXG4uc3Bpbm5lciAucmVjdDQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xufVxuXG4uc3Bpbm5lciAucmVjdDUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcblxuICAgIDAlLFxuICAgIDQwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpXG4gICAgfVxuXG4gICAgMjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxLjApXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XG5cbiAgICAwJSxcbiAgICA0MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICB9XG5cbiAgICAyMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxLjApO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/ui/loading-spinner/loading-spinner.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Components/ui/loading-spinner/loading-spinner.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
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

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/Components/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/Components/ui/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/Models/FantasyPlayer.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/FantasyPlayer.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ "./src/app/Models/Team.ts");

var FantasyPlayer = /** @class */ (function () {
    function FantasyPlayer(activeChip, bank, value, countryImage, gameweekRank, gameweekTransfers, gameweekTransfersCost, id, leagues, name, overallRank, team) {
        if (activeChip === void 0) { activeChip = ''; }
        if (bank === void 0) { bank = 0; }
        if (value === void 0) { value = 0; }
        if (countryImage === void 0) { countryImage = ''; }
        if (gameweekRank === void 0) { gameweekRank = -1; }
        if (gameweekTransfers === void 0) { gameweekTransfers = 0; }
        if (gameweekTransfersCost === void 0) { gameweekTransfersCost = 0; }
        if (id === void 0) { id = -1; }
        if (leagues === void 0) { leagues = []; }
        if (name === void 0) { name = ''; }
        if (overallRank === void 0) { overallRank = -1; }
        if (team === void 0) { team = new _Team__WEBPACK_IMPORTED_MODULE_0__["default"](); }
        this.gameweekRank = 0;
        this.overallRank = 0;
        this.activeChip = activeChip;
        this.bank = bank;
        this.countryImage = countryImage;
        this.gameweekRank = gameweekRank;
        this.gameweekTransfers = gameweekTransfers;
        this.gameweekTransfersCost = gameweekTransfersCost;
        this.id = id;
        this.leagues = leagues;
        this.name = name;
        this.overallRank = overallRank;
        this.team = team;
        this.value = value;
        this.customLeagues = [];
    }
    return FantasyPlayer;
}());
/* harmony default export */ __webpack_exports__["default"] = (FantasyPlayer);


/***/ }),

/***/ "./src/app/Models/SoccerPlayer.ts":
/*!****************************************!*\
  !*** ./src/app/Models/SoccerPlayer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SoccerPlayer = /** @class */ (function () {
    function SoccerPlayer(id, image, fixtures, gameweekPoints, name, position) {
        if (id === void 0) { id = -1; }
        if (image === void 0) { image = null; }
        if (fixtures === void 0) { fixtures = []; }
        if (gameweekPoints === void 0) { gameweekPoints = -1; }
        if (name === void 0) { name = ''; }
        if (position === void 0) { position = ''; }
        this.id = id;
        this.image = image;
        this.fixtures = fixtures;
        this.gameweekPoints = gameweekPoints;
        this.name = name;
        this.position = position;
    }
    return SoccerPlayer;
}());
/* harmony default export */ __webpack_exports__["default"] = (SoccerPlayer);


/***/ }),

/***/ "./src/app/Models/Team.ts":
/*!********************************!*\
  !*** ./src/app/Models/Team.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Team = /** @class */ (function () {
    function Team(id, name, overallPoints, Goalkeepers, Defenders, Midfielders, Forwards, Bench, captainId, value, bank) {
        if (id === void 0) { id = -1; }
        if (name === void 0) { name = ''; }
        if (overallPoints === void 0) { overallPoints = 0; }
        if (Goalkeepers === void 0) { Goalkeepers = []; }
        if (Defenders === void 0) { Defenders = []; }
        if (Midfielders === void 0) { Midfielders = []; }
        if (Forwards === void 0) { Forwards = []; }
        if (Bench === void 0) { Bench = []; }
        if (captainId === void 0) { captainId = 0; }
        if (value === void 0) { value = 0; }
        if (bank === void 0) { bank = 0; }
        this.bank = 0;
        this.id = id;
        this.name = name;
        this.overallPoints = overallPoints;
        this.gameweekPoints = 0;
        this.Goalkeepers = Goalkeepers;
        this.Defenders = Defenders;
        this.Midfielders = Midfielders;
        this.Forwards = Forwards;
        this.Bench = Bench;
        this.captainId = captainId;
        this.value = value;
        this.bank = bank;
    }
    return Team;
}());
/* harmony default export */ __webpack_exports__["default"] = (Team);


/***/ }),

/***/ "./src/app/Services/http-request/http-request.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Services/http-request/http-request.service.ts ***!
  \***************************************************************/
/*! exports provided: HttpRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestService", function() { return HttpRequestService; });
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(testHttp, http, device, router) {
        this.testHttp = testHttp;
        this.http = http;
        this.device = device;
        this.router = router;
    }
    /**
     * @description public method used to request data from external api
     * @param url string
     */
    HttpRequestService.prototype.fetch = function (url, params, header) {
        if (params === void 0) { params = {}; }
        if (header === void 0) { header = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.parseJsonData;
                        return [4 /*yield*/, this.fetchData(url, params, header)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    /**
     *
     * @param data returned response object from the http request
     * @description parse the json string from the response object
     */
    HttpRequestService.prototype.parseJsonData = function (res) {
        if (res.url === 'https://fantasy.premierleague.com/updating/') {
            this.router.navigateByUrl('/updating');
            return null;
        }
        if (this.device.cordova) {
            return JSON.parse(res.data);
        }
        return res;
    };
    /**
     * @description makes http calls
     * @param url {string}
     */
    HttpRequestService.prototype.fetchData = function (url, param, header) {
        if (param === void 0) { param = null; }
        if (header === void 0) { header = null; }
        if (this.device.cordova) {
            return this.http.get(url, param, header);
        }
        return this.testHttp.get(url).toPromise();
    };
    HttpRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_0__["Device"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HttpRequestService);
    return HttpRequestService;
}());



/***/ }),

/***/ "./src/app/Services/soccer-player/soccerplayer.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/Services/soccer-player/soccerplayer.service.ts ***!
  \****************************************************************/
/*! exports provided: SoccerPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoccerPlayerService", function() { return SoccerPlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-request/http-request.service */ "./src/app/Services/http-request/http-request.service.ts");
/* harmony import */ var src_app_Models_SoccerPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/SoccerPlayer */ "./src/app/Models/SoccerPlayer.ts");
/* harmony import */ var _static_data_static_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-data/static.data.service */ "./src/app/Services/static-data/static.data.service.ts");
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




var SoccerPlayerService = /** @class */ (function () {
    function SoccerPlayerService(httpRequestService, staticDataService) {
        this.httpRequestService = httpRequestService;
        this.staticDataService = staticDataService;
        this.players = new Map();
    }
    SoccerPlayerService.prototype.ngOnInit = function () {
        this.load();
    };
    SoccerPlayerService.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arrayOfPlayers, playerMap, _i, arrayOfPlayers_1, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.staticDataService.getPlayers()];
                    case 1:
                        arrayOfPlayers = _a.sent(), playerMap = new Map();
                        for (_i = 0, arrayOfPlayers_1 = arrayOfPlayers; _i < arrayOfPlayers_1.length; _i++) {
                            player = arrayOfPlayers_1[_i];
                            playerMap.set(player.id, player);
                        }
                        this.players = playerMap;
                        return [2 /*return*/];
                }
            });
        });
    };
    SoccerPlayerService.prototype.getPlayerData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpRequestService.fetch("https://fantasy.premierleague.com/drf/element-summary/" + id)];
            });
        });
    };
    SoccerPlayerService.prototype.getPlayers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arrayOfPlayers, playerMap, _i, arrayOfPlayers_2, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.staticDataService.getPlayers()];
                    case 1:
                        arrayOfPlayers = _a.sent(), playerMap = new Map();
                        for (_i = 0, arrayOfPlayers_2 = arrayOfPlayers; _i < arrayOfPlayers_2.length; _i++) {
                            player = arrayOfPlayers_2[_i];
                            playerMap.set(player.id, player);
                        }
                        return [2 /*return*/, playerMap];
                }
            });
        });
    };
    SoccerPlayerService.prototype.createPlayer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new src_app_Models_SoccerPlayer__WEBPACK_IMPORTED_MODULE_2__["default"](id)];
            });
        });
    };
    SoccerPlayerService.prototype.getPlayerName = function (id, players) {
        return players.get(id).web_name;
    };
    SoccerPlayerService.prototype.getPhotoUrl = function (id, players) {
        var player = players.get(id);
        return '/assets/player_images/' + 'p' + player.photo.replace(/jpg/gi, 'webp');
    };
    SoccerPlayerService.prototype.getPlayer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.players.get(id)];
            });
        });
    };
    SoccerPlayerService.prototype.getUpcomingFixtures = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlayerData(id)];
                    case 1:
                        data = _a.sent();
                        // this.storage.set(key, data['fixtures']);
                        return [2 /*return*/, data['fixtures']];
                }
            });
        });
    };
    SoccerPlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"],
            _static_data_static_data_service__WEBPACK_IMPORTED_MODULE_3__["StaticDataService"]])
    ], SoccerPlayerService);
    return SoccerPlayerService;
}());



/***/ }),

/***/ "./src/app/Services/static-data/static.data.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Services/static-data/static.data.service.ts ***!
  \*************************************************************/
/*! exports provided: StaticDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataService", function() { return StaticDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-request/http-request.service */ "./src/app/Services/http-request/http-request.service.ts");
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



var StaticDataService = /** @class */ (function () {
    function StaticDataService(httpRequestService, storage) {
        this.httpRequestService = httpRequestService;
        this.storage = storage;
        this.storageKey = 'bootstrap';
        this.updateDataTime = 'update-bootstrap-time';
    }
    /**
     * @Returns returns a promise containing bootstrap data
     * @description returns current gameweek, soccer player data, prem team data, next gw fixtures
     * @param returnValue {string} key of the data you wish to extract, leaving empty wil return all the data
     */
    StaticDataService.prototype.fetch = function (returnValue) {
        if (returnValue === void 0) { returnValue = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storage.get(this.updateDataTime).then(function (time) { return __awaiter(_this, void 0, void 0, function () {
                        var data, nextDeadline;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    data = null;
                                    if (!(time && Date.now() <= new Date(time).getTime())) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.storage.get(this.storageKey)];
                                case 1:
                                    data = _a.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, this.httpRequestService.fetch('https://fantasy.premierleague.com/drf/bootstrap-static')];
                                case 3:
                                    data = _a.sent();
                                    _a.label = 4;
                                case 4:
                                    this.staticData = data;
                                    nextDeadline = null;
                                    if (data.next_event_fixtures.length) {
                                        nextDeadline = data.next_event_fixtures[0]
                                            ? data.next_event_fixtures[0].deadline_time
                                            : null;
                                    }
                                    this.storage.set(this.updateDataTime, nextDeadline);
                                    this.storage.set(this.storageKey, this.staticData);
                                    return [2 /*return*/, returnValue != null ? data[returnValue] : data];
                            }
                        });
                    }); })];
            });
        });
    };
    StaticDataService.prototype.getCurrentGameweek = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch('current-event')];
            });
        });
    };
    StaticDataService.prototype.getUpcomingFixtures = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch('next_event_fixtures')];
            });
        });
    };
    StaticDataService.prototype.getTeams = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch('teams')];
            });
        });
    };
    StaticDataService.prototype.getPlayers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch('elements')];
            });
        });
    };
    StaticDataService.prototype.getPositionLabel = function (positionId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('element_types')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.find(function (type) { return type.id === positionId; }).singular_name];
                }
            });
        });
    };
    StaticDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_request_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
    ], StaticDataService);
    return StaticDataService;
}());



/***/ }),

/***/ "./src/app/Services/transfers/transfer.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/transfers/transfer.service.ts ***!
  \********************************************************/
/*! exports provided: TransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-request/http-request.service */ "./src/app/Services/http-request/http-request.service.ts");
/* harmony import */ var _static_data_static_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-data/static.data.service */ "./src/app/Services/static-data/static.data.service.ts");
/* harmony import */ var _soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../soccer-player/soccerplayer.service */ "./src/app/Services/soccer-player/soccerplayer.service.ts");
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





var TransferService = /** @class */ (function () {
    function TransferService(staticDataService, httpRequestService, soccerPlayerService, storage) {
        this.staticDataService = staticDataService;
        this.httpRequestService = httpRequestService;
        this.soccerPlayerService = soccerPlayerService;
        this.storage = storage;
    }
    TransferService.prototype.getGameweekTransfers = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var gameweek, players, data, transfers, key, stored;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.staticDataService.getCurrentGameweek()];
                    case 1:
                        gameweek = _a.sent();
                        return [4 /*yield*/, this.soccerPlayerService.getPlayers()];
                    case 2:
                        players = _a.sent();
                        return [4 /*yield*/, this.httpRequestService.fetch("https://fantasy.premierleague.com/drf/entry/" + id + "/transfers")];
                    case 3:
                        data = _a.sent();
                        transfers = data.history.filter(function (entry) { return entry.event === gameweek; });
                        key = "player-" + id + " gameweek-" + gameweek + " transfers";
                        return [4 /*yield*/, this.storage.get(key)];
                    case 4:
                        stored = _a.sent();
                        if (stored) {
                            return [2 /*return*/, stored];
                        }
                        return [2 /*return*/, transfers.map(function (transfer) {
                                var transferIn = _this.getTransferInfo(transfer.element_in, players), transferOut = _this.getTransferInfo(transfer.element_out, players);
                                return {
                                    transferIn: transferIn,
                                    transferOut: transferOut
                                };
                            })];
                }
            });
        });
    };
    TransferService.prototype.getTransferInfo = function (id, players) {
        var playerInName = this.soccerPlayerService.getPlayerName(id, players), playerInPhotoUrl = this.soccerPlayerService.getPhotoUrl(id, players);
        return {
            name: playerInName,
            image: playerInPhotoUrl
        };
    };
    TransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_static_data_static_data_service__WEBPACK_IMPORTED_MODULE_3__["StaticDataService"],
            _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"],
            _soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_4__["SoccerPlayerService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
    ], TransferService);
    return TransferService;
}());



/***/ })

}]);
//# sourceMappingURL=default~Pages-Home-home-module~Pages-Leagues-leagues-list-leagues-module~Pages-News-news-module~Page~798e5fa8.js.map