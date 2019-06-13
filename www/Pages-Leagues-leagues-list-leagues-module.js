(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Leagues-leagues-list-leagues-module"],{

/***/ "./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"closeModal()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-label class=\"header\">Custom League</ion-label>\n    <ion-buttons slot=\"secondary\">\n      <ion-button href=\"/tabs/settings\">\n        <ion-icon slot=\"icon-only\" src=\"../../assets/icons/tools.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-label position=\"stacked\">\n      League Name\n    </ion-label>\n    <ion-input [(ngModel)]=\"newLeagueName\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-list>\n    <ion-list-header>\n      Members\n    </ion-list-header>\n    <ion-item lines=\"inset\" *ngFor=\"let member of newMembers\">\n      <ion-label>\n        {{ member }}\n      </ion-label>\n      <ion-button slot=\"end\" color=\"danger\" (click)=\"removeMember(member)\" >REMOVE</ion-button>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      FPL Id\n    </ion-label>\n    <ion-input [(ngModel)]=\"memberId\" type=\"number\" placeholder=\"Enter FPL Id\"></ion-input>\n    <ion-button slot=\"end\" color=\"danger\" (click)=\"addMember(memberId)\">Add</ion-button>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-button slot=\"fixed\" color=\"danger\" expand=\"block\" (click)=\"createLeague()\">Create League</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider {\n  margin: 4em 0 1em 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUFwcC9GYW50YXN5Rm9vdGJhbGxMaXZlL3NyYy9hcHAvUGFnZXMvTGVhZ3Vlcy9jdXN0b20tbGVhZ3Vlcy9jdXN0b20tbGVhZ3Vlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvTGVhZ3Vlcy9jdXN0b20tbGVhZ3Vlcy9jdXN0b20tbGVhZ3Vlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVyIHtcbiAgICBtYXJnaW46IDRlbSAwIDFlbSAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomLeaguesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLeaguesComponent", function() { return CustomLeaguesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var src_app_Services_leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/leagues/custom-league.service */ "./src/app/Services/leagues/custom-league.service.ts");
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



var CustomLeaguesComponent = /** @class */ (function () {
    function CustomLeaguesComponent(customLeagueService, modalController) {
        this.customLeagueService = customLeagueService;
        this.modalController = modalController;
        this.newMembers = [];
        this.customLeagues = [];
        this.newLeagueName = '';
        this.memberId = null;
    }
    CustomLeaguesComponent.prototype.ngOnInit = function () { };
    CustomLeaguesComponent.prototype.createLeague = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.newLeagueName || this.newMembers.length === 0) {
                            // NEED TO ADD ALERT/TOAST 
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.customLeagueService.create(this.newLeagueName, this.newMembers)];
                    case 1:
                        _a.sent();
                        this.closeModal();
                        return [2 /*return*/, null];
                }
            });
        });
    };
    CustomLeaguesComponent.prototype.addMember = function (id) {
        if (id == null || id > 70000000) {
            // display toast saying id is too big!
        }
        else if (!this.isMemberPresent(id)) {
            this.newMembers.push(id);
        }
        this.memberId = null;
    };
    CustomLeaguesComponent.prototype.isMemberPresent = function (id) {
        return this.newMembers.includes(id);
    };
    CustomLeaguesComponent.prototype.closeModal = function () {
        this.modalController.dismiss();
    };
    CustomLeaguesComponent.prototype.removeMember = function (memberId) {
        if (memberId == null) {
            return;
        }
        this.newMembers = this.newMembers.filter(function (member) { return member !== memberId; });
    };
    CustomLeaguesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-leagues',
            template: __webpack_require__(/*! ./custom-leagues.component.html */ "./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.html"),
            styles: [__webpack_require__(/*! ./custom-leagues.component.scss */ "./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_Services_leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_2__["CustomLeagueService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], CustomLeaguesComponent);
    return CustomLeaguesComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Leagues/leagues-detail/league.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Pages/Leagues/leagues-detail/league.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header [title]=\"'LEAGUE'\"></app-header> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"closeModal()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-label class=\"header\">LEAGUE</ion-label>\n    <ion-buttons slot=\"secondary\">\n      <ion-button href=\"/tabs/settings\">\n        <ion-icon slot=\"icon-only\" src=\"../../assets/icons/tools.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\n\n<ion-content class=\"background-content\" *ngIf=\"!showSpinner\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPulldown($event)\">\n    <ion-refresher-content refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\"></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"new-member-id__input__container\">\n    <ion-input [(ngModel)]=\"newMemberId\" type=\"number\" placeholder=\"Enter new Id...\"></ion-input>\n    <ion-button color=\"danger\" (click)=\"addMember(newMemberId, league.id)\">Add</ion-button>\n  </div>\n\n  <div class=\"league__table\">\n    <ion-item lines=\"none\" *ngIf=\"isCustom\" class=\"custom-league__controls\">\n      <ion-button slot=\"start\" color=\"danger\" (click)=\"openAddMemberModal()\">\n        Add Member\n      </ion-button>\n      <ion-button slot=\"end\" color=\"danger\" (click)=\"deleteLeague()\">\n        Delete\n      </ion-button>\n    </ion-item>\n    <ion-list-header>\n      {{ league.name }}\n    </ion-list-header>\n\n    <ion-grid class=\"league__table__content\" align-items-center justify-content-center>\n      <ion-row (click)=\"onPlayerSelected(member.team.id)\" class=\"league__table__content__member\"\n        *ngFor=\"let member of leagueStanding; let i = index; \" align-items-center justify-content-center>\n        <ion-col size=\"1\">\n          {{ i + 1}}\n        </ion-col>\n        <ion-col class=\"league__table__content__member__name\" size=\"5\" text-wrap>\n          <h4>{{ member.team.name }}</h4>\n          <h6>{{ member.name }}</h6>\n          <ion-badge *ngIf=\"member.activeChip.length > 0\" color=\"danger\">{{ member.activeChip }}</ion-badge>\n        </ion-col>\n        <ion-col class=\"league__table__content__member__name\">\n          <h4>\n            {{ member.team.overallPoints }}\n          </h4>\n          <h6>\n            {{ member.team.gameweekPoints }}\n          </h6>\n        </ion-col>\n        <ion-col class=\"league__table__content__member__name\">\n          <h4>{{member.gameweekTransfers}} <ion-text *ngIf=\"member.gameweekTransfersCost > 0\" color=\"danger\"\n              style=\"font-size: 0.7em;\">(-{{ member.gameweekTransfersCost }})</ion-text>\n          </h4>\n          <h6>Transfers</h6>\n        </ion-col>\n        <ion-col class=\"league__table__content__member__captain\">\n          <img [src]=\"member.team.captainImage\" [alt]=\"member.team.captainName\">\n          <ion-text text-wrap>{{ member.team.captainName }} (C)</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/Leagues/leagues-detail/league.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/Pages/Leagues/leagues-detail/league.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center; }\n\n.custom-league__controls > div {\n  background: inherit; }\n\n.league__table {\n  background: #f5f5f6;\n  height: auto;\n  min-height: 100vh; }\n\n.league__table__content {\n    font-size: 11px; }\n\n.league__table__content__member {\n      margin-bottom: 1em;\n      padding: 0em 1em;\n      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n      border-radius: 1em;\n      min-height: 5rem;\n      background-color: #fff;\n      transition: all .2s linear; }\n\n.league__table__content__member__name {\n        padding: 0; }\n\n.league__table__content__member__name h4,\n        .league__table__content__member__name h6 {\n          margin: 0;\n          padding: 0;\n          font-size: 1em; }\n\n.league__table__content__member__name h6 {\n          font-weight: 800;\n          color: #989898;\n          margin-bottom: 0.4em; }\n\n.league__table__content__member__name h4 {\n          font-size: 1.15em;\n          font-weight: bold; }\n\n.league__table__content__member__captain {\n        padding: 0;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n        align-items: center;\n        font-weight: 800;\n        font-size: 0.8em;\n        color: rgba(0, 0, 0, 0.7);\n        text-align: center; }\n\n.league__table__content__member__captain img {\n          height: 4em;\n          width: 4em;\n          border-radius: 50%;\n          -o-object-fit: contain;\n             object-fit: contain;\n          -o-object-position: center;\n             object-position: center;\n          margin-bottom: .6em;\n          box-shadow: 0 0 9px rgba(0, 0, 0, 0.2); }\n\n.league__table__content__member:active {\n        -webkit-transform: scale(1.05);\n                transform: scale(1.05);\n        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.4); }\n\n.new-member-id__input__container {\n  display: none;\n  position: absolute;\n  z-index: 1000;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  background: white;\n  flex-direction: column;\n  padding: 2em;\n  border-radius: 2em;\n  width: 80%;\n  transition: all .5s linear;\n  box-shadow: rgba(0, 0, 0, 0.6) 1px 1px 1000em 100em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUFwcC9GYW50YXN5Rm9vdGJhbGxMaXZlL3NyYy9hcHAvUGFnZXMvTGVhZ3Vlcy9sZWFndWVzLWRldGFpbC9sZWFndWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDQyxrQkFBa0IsRUFBQTs7QUFHbkI7RUFFRSxtQkFBbUIsRUFBQTs7QUFLcEI7RUFDQyxtQkFkd0I7RUFlbEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUV2QjtJQUNDLGVBcEJrQixFQUFBOztBQXNCbEI7TUFDQyxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLDJDQUEyQztNQUMzQyxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QiwwQkFBMEIsRUFBQTs7QUFFMUI7UUFDZ0IsVUFBVSxFQUFBOztBQUR6Qjs7VUFJQyxTQUFTO1VBQ1QsVUFBVTtVQUNWLGNBQWMsRUFBQTs7QUFOZjtVQVVDLGdCQUFnQjtVQUNoQixjQUFjO1VBQ2Qsb0JBQW9CLEVBQUE7O0FBWnJCO1VBZ0JDLGlCQUFpQjtVQUNqQixpQkFBaUIsRUFBQTs7QUFJbkI7UUFDZ0IsVUFBVTtRQUN6QixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsa0JBQWtCLEVBQUE7O0FBVGxCO1VBWUMsV0FBVztVQUNYLFVBQVU7VUFDVixrQkFBa0I7VUFDbEIsc0JBQW1CO2FBQW5CLG1CQUFtQjtVQUNuQiwwQkFBdUI7YUFBdkIsdUJBQXVCO1VBQ3ZCLG1CQUFtQjtVQUNuQixzQ0FBc0MsRUFBQTs7QUFoRHhDO1FBcURDLDhCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLDRDQUE0QyxFQUFBOztBQVN6QztFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0RBQTRDO1VBQTVDLDRDQUE0QztFQUM1QyxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixtREFBbUQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0xlYWd1ZXMvbGVhZ3Vlcy1kZXRhaWwvbGVhZ3VlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyaWQtZm9udC1zaXplOiAxMXB4O1xuJGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjY7XG5cbi5oZWFkZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdXN0b20tbGVhZ3VlX19jb250cm9scyB7XG5cdD4gZGl2IHtcblx0XHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xuXHR9XG59XG5cbi5sZWFndWUge1xuXHQmX190YWJsZSB7XG5cdFx0YmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG5cblx0XHQmX19jb250ZW50IHtcblx0XHRcdGZvbnQtc2l6ZTogJGdyaWQtZm9udC1zaXplO1xuXG5cdFx0XHQmX19tZW1iZXIge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxZW07XG5cdFx0XHRcdHBhZGRpbmc6IDBlbSAxZW07XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDFlbTtcblx0XHRcdFx0bWluLWhlaWdodDogNXJlbTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cblx0XHRcdFx0Jl9fbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0aDQsXG5cdFx0XHRcdFx0aDYge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGg2IHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzk4OTg5ODtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNGVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xNWVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jl9fY2FwdGFpbiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdFx0XHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDRlbTtcblx0XHRcdFx0XHRcdHdpZHRoOiA0ZW07XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0XHRcdFx0b2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAuNmVtO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAwIDlweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLm5ldy1tZW1iZXItaWQge1xuICAgICZfX2lucHV0IHtcbiAgICAgICAgJl9fY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGxpbmVhcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC42KSAxcHggMXB4IDEwMDBlbSAxMDBlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/Leagues/leagues-detail/league.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Pages/Leagues/leagues-detail/league.component.ts ***!
  \******************************************************************/
/*! exports provided: LeagueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueComponent", function() { return LeagueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var src_app_Services_leagues_leagues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/leagues/leagues.service */ "./src/app/Services/leagues/leagues.service.ts");
/* harmony import */ var src_app_Components_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Components/team-page/team-page.component */ "./src/app/Components/team-page/team-page.component.ts");
/* harmony import */ var src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/main-user/main-user.service */ "./src/app/Services/main-user/main-user.service.ts");
/* harmony import */ var src_app_Services_leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/leagues/custom-league.service */ "./src/app/Services/leagues/custom-league.service.ts");
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







var LeagueComponent = /** @class */ (function () {
    function LeagueComponent(modalController, navParams, leaguesService, mainUserService, customLeagueService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.leaguesService = leaguesService;
        this.mainUserService = mainUserService;
        this.customLeagueService = customLeagueService;
        this.league = null;
        this.showSpinner = true;
        this.maxTries = 5;
        this.leagueStanding = [];
        this.isCustom = false;
        this.newMemberId = null;
    }
    LeagueComponent.prototype.ngOnInit = function () {
        this.retrieveLeagueData();
    };
    LeagueComponent.prototype.retrieveLeagueData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, league, custLeague;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isCustom = this.navParams.data.isCustom;
                        id = this.navParams.data.leagueId;
                        if (!!this.isCustom) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.leaguesService.getLeague(id)];
                    case 1:
                        league = _a.sent();
                        return [2 /*return*/, this.onLeagueLoaded(league)];
                    case 2: return [4 /*yield*/, this.customLeagueService.getLeague(id)];
                    case 3:
                        custLeague = _a.sent();
                        this.customLeagueService
                            .fetchLeagueData(custLeague)
                            .then(function (league_2) { return _this.onLeagueLoaded(league_2); });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LeagueComponent.prototype.onLeagueLoaded = function (league) {
        this.league = league;
        this.leagueStanding = this.league.sort();
        this.showSpinner = false;
        return this.league;
    };
    /**
     * @description the league view is a modal, this closes it
     */
    LeagueComponent.prototype.closeModal = function () {
        this.modalController.dismiss();
    };
    /**
     * @param event method that responds to the refresh pulldown event on the view
     */
    LeagueComponent.prototype.refreshPulldown = function (event) {
        this.retrieveLeagueData().then(function () { return event.target.complete(); });
    };
    /**
     * @description loads a detailed view of the player selected
     * @param playerId id of the player in the league selected by the user
     */
    LeagueComponent.prototype.onPlayerSelected = function (playerId) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedPlayer, modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedPlayer = this.league.members.get(playerId);
                        return [4 /*yield*/, this.modalController.create({
                                component: src_app_Components_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_3__["TeamPageComponent"],
                                componentProps: {
                                    fantasyPlayer: selectedPlayer,
                                    showCloseButton: true
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * deletes a custom league
     */
    LeagueComponent.prototype.deleteLeague = function () {
        this.customLeagueService.remove(this.league);
        this.customLeagueService.saveToDatabase();
        this.modalController.dismiss();
        return;
    };
    LeagueComponent.prototype.addMember = function (id, leagueId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (id === null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.customLeagueService.addMemberToLeague(id, leagueId)];
                    case 1:
                        _a.sent();
                        this.retrieveLeagueData().then(function () {
                            document.querySelector('.new-member-id__input__container').style.display = 'none';
                            _this.newMemberId = null;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LeagueComponent.prototype.openAddMemberModal = function () {
        document.querySelector('.new-member-id__input__container').style.display = 'flex';
    };
    LeagueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-league',
            template: __webpack_require__(/*! ./league.component.html */ "./src/app/Pages/Leagues/leagues-detail/league.component.html"),
            styles: [__webpack_require__(/*! ./league.component.scss */ "./src/app/Pages/Leagues/leagues-detail/league.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            src_app_Services_leagues_leagues_service__WEBPACK_IMPORTED_MODULE_2__["LeaguesService"],
            src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_4__["MainUserService"],
            src_app_Services_leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_5__["CustomLeagueService"]])
    ], LeagueComponent);
    return LeagueComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Leagues/leagues-list/leagues.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Leagues/leagues-list/leagues.module.ts ***!
  \**************************************************************/
/*! exports provided: LeaguesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaguesPageModule", function() { return LeaguesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _leagues_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leagues.page */ "./src/app/Pages/Leagues/leagues-list/leagues.page.ts");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/components.module */ "./src/app/Components/components.module.ts");
/* harmony import */ var _leagues_detail_league_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leagues-detail/league.component */ "./src/app/Pages/Leagues/leagues-detail/league.component.ts");
/* harmony import */ var src_app_Components_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Components/team-page/team-page.component */ "./src/app/Components/team-page/team-page.component.ts");
/* harmony import */ var _custom_leagues_custom_leagues_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom-leagues/custom-leagues.component */ "./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _leagues_page__WEBPACK_IMPORTED_MODULE_5__["LeaguesPage"]
    }
];
var LeaguesPageModule = /** @class */ (function () {
    function LeaguesPageModule() {
    }
    LeaguesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [_leagues_detail_league_component__WEBPACK_IMPORTED_MODULE_7__["LeagueComponent"], src_app_Components_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_8__["TeamPageComponent"], _custom_leagues_custom_leagues_component__WEBPACK_IMPORTED_MODULE_9__["CustomLeaguesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_leagues_page__WEBPACK_IMPORTED_MODULE_5__["LeaguesPage"], _leagues_detail_league_component__WEBPACK_IMPORTED_MODULE_7__["LeagueComponent"], _custom_leagues_custom_leagues_component__WEBPACK_IMPORTED_MODULE_9__["CustomLeaguesComponent"]]
        })
    ], LeaguesPageModule);
    return LeaguesPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/Leagues/leagues-list/leagues.page.html":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Leagues/leagues-list/leagues.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'LEAGUES'\"></app-header>\n\n<ion-content padding>\n  <ion-list *ngIf=\"mainUserService.user\" lines=\"inset\">\n    <ion-list-header>\n      <ion-label>FPL Leagues</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let league of mainUserService.user.leagues\" lines=\"inset\" inset (click)=\"openLeague(league.id)\"\n      detail>\n      <ion-label class=\"leagues\" text-wrap>\n        <h2>\n          <strong> {{ league.name }}</strong>\n        </h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <!-- Custom Leagues -->\n  <ion-list *ngIf=\"customLeagueService.customLeagues.length > 0\">\n    <ion-list-header>\n      <ion-label>\n        Custom Leagues\n      </ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let league of customLeagueService.customLeagues\" lines=\"inset\" inset\n      (click)=\"openLeague(league.id, true)\" detail>\n      <ion-label class=\"leagues\" text-wrap>\n        <h2>\n          <strong> {{ league.name }}</strong>\n        </h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" (click)=\"openAddCustomLeagueModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/Leagues/leagues-list/leagues.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Leagues/leagues-list/leagues.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leagues {\n  font-size: 12px; }\n  .leagues h2 {\n    font-size: 1em; }\n  .leagues p {\n    font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUFwcC9GYW50YXN5Rm9vdGJhbGxMaXZlL3NyYy9hcHAvUGFnZXMvTGVhZ3Vlcy9sZWFndWVzLWxpc3QvbGVhZ3Vlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7RUFEbkI7SUFJUSxjQUFjLEVBQUE7RUFKdEI7SUFRUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9MZWFndWVzL2xlYWd1ZXMtbGlzdC9sZWFndWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFndWVzIHtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Leagues/leagues-list/leagues.page.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/Leagues/leagues-list/leagues.page.ts ***!
  \************************************************************/
/*! exports provided: LeaguesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaguesPage", function() { return LeaguesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var src_app_Pages_Leagues_leagues_detail_league_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pages/Leagues/leagues-detail/league.component */ "./src/app/Pages/Leagues/leagues-detail/league.component.ts");
/* harmony import */ var src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/main-user/main-user.service */ "./src/app/Services/main-user/main-user.service.ts");
/* harmony import */ var _custom_leagues_custom_leagues_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-leagues/custom-leagues.component */ "./src/app/Pages/Leagues/custom-leagues/custom-leagues.component.ts");
/* harmony import */ var src_app_Services_leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/leagues/custom-league.service */ "./src/app/Services/leagues/custom-league.service.ts");
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






var LeaguesPage = /** @class */ (function () {
    function LeaguesPage(modalController, mainUserService, customLeagueService) {
        this.modalController = modalController;
        this.mainUserService = mainUserService;
        this.customLeagueService = customLeagueService;
    }
    LeaguesPage.prototype.ngOnInit = function () { };
    /**
     * @param leagueId id of league
     * @description creates a modal view of the league selected by the user
     */
    LeaguesPage.prototype.openLeague = function (leagueId, isCustom) {
        if (isCustom === void 0) { isCustom = false; }
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (leagueId === null) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: src_app_Pages_Leagues_leagues_detail_league_component__WEBPACK_IMPORTED_MODULE_2__["LeagueComponent"],
                                animated: true,
                                componentProps: {
                                    leagueId: leagueId,
                                    isCustom: isCustom
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LeaguesPage.prototype.openAddCustomLeagueModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _custom_leagues_custom_leagues_component__WEBPACK_IMPORTED_MODULE_4__["CustomLeaguesComponent"],
                            animated: true
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LeaguesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leagues',
            template: __webpack_require__(/*! ./leagues.page.html */ "./src/app/Pages/Leagues/leagues-list/leagues.page.html"),
            styles: [__webpack_require__(/*! ./leagues.page.scss */ "./src/app/Pages/Leagues/leagues-list/leagues.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            src_app_Services_main_user_main_user_service__WEBPACK_IMPORTED_MODULE_3__["MainUserService"],
            src_app_Services_leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_5__["CustomLeagueService"]])
    ], LeaguesPage);
    return LeaguesPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Leagues-leagues-list-leagues-module.js.map