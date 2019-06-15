(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-Home-home-module~Pages-Leagues-leagues-list-leagues-module~Pages-Settings-settings-mod~d134829c"],{

/***/ "./src/app/Models/BaseLeague.ts":
/*!**************************************!*\
  !*** ./src/app/Models/BaseLeague.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BaseLeague = /** @class */ (function () {
    function BaseLeague(id, name) {
        this.id = id;
        this.name = name;
    }
    return BaseLeague;
}());
/* harmony default export */ __webpack_exports__["default"] = (BaseLeague);


/***/ }),

/***/ "./src/app/Models/CustomLeague.ts":
/*!****************************************!*\
  !*** ./src/app/Models/CustomLeague.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLeague */ "./src/app/Models/BaseLeague.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomLeague = /** @class */ (function (_super) {
    __extends(CustomLeague, _super);
    function CustomLeague(id, name, members) {
        var _this = _super.call(this, id, name) || this;
        _this.members = members;
        return _this;
    }
    return CustomLeague;
}(_BaseLeague__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (CustomLeague);


/***/ }),

/***/ "./src/app/Models/League.ts":
/*!**********************************!*\
  !*** ./src/app/Models/League.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLeague__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLeague */ "./src/app/Models/BaseLeague.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var League = /** @class */ (function (_super) {
    __extends(League, _super);
    function League(id, name, members) {
        if (id === void 0) { id = -1; }
        if (name === void 0) { name = ''; }
        if (members === void 0) { members = new Map(); }
        var _this = _super.call(this, id, name) || this;
        _this.members = members;
        return _this;
    }
    League.prototype.sort = function () {
        return Array.from(this.members.values()).sort(function (a, b) { return b.team.overallPoints - a.team.overallPoints; });
    };
    return League;
}(_BaseLeague__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (League);


/***/ }),

/***/ "./src/app/Services/bonus-point/bonus-point.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Services/bonus-point/bonus-point.service.ts ***!
  \*************************************************************/
/*! exports provided: BonusPointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusPointService", function() { return BonusPointService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
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


var BonusPointService = /** @class */ (function () {
    function BonusPointService(storage) {
        this.storage = storage;
    }
    BonusPointService.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('include-bonus-points').then(function (include) {
            _this.inlcudeBonusPoints = include;
        });
    };
    BonusPointService.prototype.getUserSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inlcude;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('include-bonus-points')];
                    case 1:
                        inlcude = _a.sent();
                        return [2 /*return*/, inlcude];
                }
            });
        });
    };
    BonusPointService.prototype.includeBonusPoints = function (val) {
        if (val === void 0) { val = true; }
        this.updateSetting(val);
    };
    BonusPointService.prototype.updateSetting = function (val) {
        this.storage.set('include-bonus-points', val);
    };
    /**
     *
     * @param fixtures array of gameweek fixtures
     * @param id player id we are looking for
     */
    BonusPointService.prototype.parseLiveBonusPoints = function (fixtures, id) {
        var totalPointsBonus = 0;
        for (var _i = 0, fixtures_1 = fixtures; _i < fixtures_1.length; _i++) {
            var fixture = fixtures_1[_i];
            for (var _a = 0, _b = fixture.stats; _a < _b.length; _a++) {
                var stat = _b[_a];
                // change to bps from stat and calculate top 3 players
                if (stat && stat.bps) {
                    var matchBPS = new Map();
                    var topBps = {
                        first: 0,
                        second: 0,
                        third: 0
                    };
                    this.parseBonusPointData(stat.bps.a, topBps, matchBPS);
                    this.parseBonusPointData(stat.bps.h, topBps, matchBPS);
                    var topBonusPlayers = matchBPS.get(topBps.first);
                    var secondBonusPlayers = matchBPS.get(topBps.second);
                    var thirdBonusPlayers = matchBPS.get(topBps.third);
                    var finalBPS = [[], [], []];
                    /**
                     * rules for how bonus points are give is defined at https://fantasy.premierleague.com/a/help
                     * index 0 corresponds to 1 bonus point
                     * index 1 => 2 bonus points
                     * index 2 => 3 bonus points
                     */
                    if (topBonusPlayers && topBonusPlayers.length > 1) {
                        // tie at the top so top players get 3 points and second gets one
                        finalBPS[2] = topBonusPlayers;
                        finalBPS[0] = secondBonusPlayers;
                    }
                    else if (secondBonusPlayers && secondBonusPlayers.length > 1) {
                        // tie in 2nd so top player gets 3 and tied players get 2, no 1 bonus point given
                        finalBPS[2] = topBonusPlayers;
                        finalBPS[1] = secondBonusPlayers;
                    }
                    else {
                        finalBPS[0] = thirdBonusPlayers;
                        finalBPS[1] = secondBonusPlayers;
                        finalBPS[2] = topBonusPlayers;
                    }
                    // check if current player has bonus points attributed to him
                    for (var i = 0; i < finalBPS.length; i++) {
                        var curr = finalBPS[i];
                        for (var _c = 0, curr_1 = curr; _c < curr_1.length; _c++) {
                            var player = curr_1[_c];
                            if (player.element === id) {
                                totalPointsBonus += i + 1;
                            }
                        }
                    }
                }
            }
        }
        return totalPointsBonus;
    };
    /**
     *
     * @param data {Array} an array of players with their live BPS points
     * @param bps object that stores the values of the 1st, 2nd and 3rd highest scores
     * @param matchBPS Map of BPS values to players
     */
    BonusPointService.prototype.parseBonusPointData = function (data, bps, matchBPS) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var player = data_1[_i];
            var value = player.value;
            var arr = matchBPS.get(value) || [];
            arr.push(player);
            matchBPS.set(player.value, arr);
            if (value > bps.first) {
                bps.third = bps.second;
                bps.second = bps.first;
                bps.first = value;
            }
            else if (value > bps.second && value !== bps.first) {
                bps.third = bps.second;
                bps.second = value;
            }
            else if (value > bps.third && value !== bps.first && value !== bps.second) {
                bps.third = value;
            }
        }
    };
    BonusPointService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
    ], BonusPointService);
    return BonusPointService;
}());



/***/ }),

/***/ "./src/app/Services/fantasy-player/fantasy-player.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Services/fantasy-player/fantasy-player.service.ts ***!
  \*******************************************************************/
/*! exports provided: FantasyPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FantasyPlayerService", function() { return FantasyPlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/FantasyPlayer */ "./src/app/Models/FantasyPlayer.ts");
/* harmony import */ var src_app_Models_SoccerPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/SoccerPlayer */ "./src/app/Models/SoccerPlayer.ts");
/* harmony import */ var src_app_Models_Team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/Team */ "./src/app/Models/Team.ts");
/* harmony import */ var _gameweek_data_gameweek_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gameweek-data/gameweek-data.service */ "./src/app/Services/gameweek-data/gameweek-data.service.ts");
/* harmony import */ var _gameweek_history_gameweek_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameweek-history/gameweek-history.service */ "./src/app/Services/gameweek-history/gameweek-history.service.ts");
/* harmony import */ var _soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../soccer-player/soccerplayer.service */ "./src/app/Services/soccer-player/soccerplayer.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _bonus_point_bonus_point_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bonus-point/bonus-point.service */ "./src/app/Services/bonus-point/bonus-point.service.ts");
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









var FantasyPlayerService = /** @class */ (function () {
    function FantasyPlayerService(gameweekDataService, gameweekHistoryService, soccerPlayerService, storage, bonusPointService) {
        this.gameweekDataService = gameweekDataService;
        this.gameweekHistoryService = gameweekHistoryService;
        this.soccerPlayerService = soccerPlayerService;
        this.storage = storage;
        this.bonusPointService = bonusPointService;
        this.positionMap = {
            1: 'Goalkeeper',
            2: 'Defender',
            3: 'Midfielder',
            4: 'Forward'
        };
    }
    /**
   *
   * @param id fpl id
   * @description creates a fantasy premier league player
   * @returns FantasyPlayer object
   */
    FantasyPlayerService.prototype.createPlayer = function (id, liveData, soccerPlayers, currentGameweek) {
        return __awaiter(this, void 0, void 0, function () {
            var key, stored, userGameweekData, playerData, team, previousGameweeksHistory, newFantasyPlayer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = "id-" + id + " gameweek-" + currentGameweek;
                        return [4 /*yield*/, this.storage.get(key)];
                    case 1:
                        stored = _a.sent(), userGameweekData = null, playerData = null, team = null, previousGameweeksHistory = null, newFantasyPlayer = null;
                        if (!!stored) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.gameweekDataService.getGameweekData(id, currentGameweek)];
                    case 2:
                        userGameweekData = _a.sent();
                        return [4 /*yield*/, this.gameweekHistoryService.fetch(id)];
                    case 3:
                        previousGameweeksHistory = _a.sent();
                        playerData = this.parsePlayerData(userGameweekData, previousGameweeksHistory, currentGameweek),
                            team = new src_app_Models_Team__WEBPACK_IMPORTED_MODULE_3__["default"](id, playerData.teamName, playerData.lastWeekOverallPoints),
                            newFantasyPlayer = new src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_1__["default"](playerData.activeChip, playerData.bank, playerData.value, playerData.countryImage, 0, playerData.gameweekTransfers, playerData.gameweekTransfersCost, id, playerData.leagues, playerData.name, playerData.overallRank, team);
                        this.storage.set(key, {
                            userGameweekData: userGameweekData,
                            previousGameweeksHistory: previousGameweeksHistory,
                            playerData: playerData,
                            team: team,
                            newFantasyPlayer: newFantasyPlayer
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        userGameweekData = stored.userGameweekData;
                        previousGameweeksHistory = stored.previousGameweeksHistory;
                        playerData = stored.playerData;
                        team = new src_app_Models_Team__WEBPACK_IMPORTED_MODULE_3__["default"](id, playerData.teamName, playerData.lastWeekOverallPoints);
                        newFantasyPlayer = stored.newFantasyPlayer;
                        newFantasyPlayer.team = team;
                        _a.label = 5;
                    case 5:
                        this.populateSquad(playerData.picks, newFantasyPlayer, liveData, soccerPlayers);
                        return [2 /*return*/, newFantasyPlayer];
                }
            });
        });
    };
    /**
     * extracts relevant data from objects return from FPL API
     * @param userGameweekData {}
     * @param previousGameweekHistory {}
     * @param currentGameweek {number}
     */
    FantasyPlayerService.prototype.parsePlayerData = function (userGameweekData, previousGameweekHistory, currentGameweek) {
        var leagues = previousGameweekHistory.leagues.classic, activeChip = userGameweekData.active_chip, name = previousGameweekHistory.entry.player_first_name + " " + previousGameweekHistory
            .entry.player_last_name, countryImage = "assets/country_flags/" + previousGameweekHistory.entry
            .player_region_short_iso + ".gif", teamName = previousGameweekHistory.entry.name, lastWeekOverallPoints = previousGameweekHistory.history.find(function (gameweek) { return gameweek.event === currentGameweek - 1; }).total_points, picks = userGameweekData.picks, value = userGameweekData.entry_history.value, bank = userGameweekData.entry_history.bank, gameweekTransfers = userGameweekData.entry_history.event_transfers, gameweekTransfersCost = userGameweekData.entry_history.event_transfers_cost, overallRank = previousGameweekHistory.history.pop().overall_rank;
        return {
            leagues: leagues,
            activeChip: activeChip,
            name: name,
            countryImage: countryImage,
            teamName: teamName,
            lastWeekOverallPoints: lastWeekOverallPoints,
            picks: picks,
            bank: bank,
            value: value,
            gameweekTransfers: gameweekTransfers,
            gameweekTransfersCost: gameweekTransfersCost,
            overallRank: overallRank
        };
    };
    FantasyPlayerService.prototype.populateSquad = function (picks, fantasyPlayer, liveData, players) {
        // tslint:disable-next-line: prefer-const
        var totalPoints = 0;
        var livePlayerData = liveData['elements'];
        var liveFixturesData = liveData['fixtures'];
        for (var _i = 0, picks_1 = picks; _i < picks_1.length; _i++) {
            var pick = picks_1[_i];
            var currentPlayer = players.get(pick.element), position = this.positionMap[currentPlayer.element_type], image = this.soccerPlayerService.getPhotoUrl(currentPlayer.id, players), playerStats = livePlayerData[currentPlayer.id]['stats'], currentPlayerGWPoints = playerStats['total_points'] -
                playerStats['bonus'] +
                this.bonusPointService.parseLiveBonusPoints(liveFixturesData, currentPlayer.id), newPlayer = new src_app_Models_SoccerPlayer__WEBPACK_IMPORTED_MODULE_2__["default"](pick.element, image, null, currentPlayerGWPoints, currentPlayer.web_name, position);
            // calculate total gameweek points
            if (fantasyPlayer.activeChip === 'bboost' || pick.position < 12) {
                totalPoints += currentPlayerGWPoints * pick.multiplier;
            }
            // add players to position arrays
            if (pick.position < 12) {
                fantasyPlayer.team[position + "s"].push(newPlayer);
            }
            else {
                fantasyPlayer.team["Bench"].push(newPlayer);
            }
            if (pick.is_captain) {
                newPlayer.gameweekPoints *= pick.multiplier;
                fantasyPlayer.team.captainId = pick.element;
                fantasyPlayer.team.captainName = newPlayer.name;
                fantasyPlayer.team.captainImage = image;
            }
        }
        fantasyPlayer.team.gameweekPoints = totalPoints;
        fantasyPlayer.team.overallPoints += totalPoints - fantasyPlayer.gameweekTransfersCost;
        return fantasyPlayer;
    };
    FantasyPlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_gameweek_data_gameweek_data_service__WEBPACK_IMPORTED_MODULE_4__["GameweekDataService"],
            _gameweek_history_gameweek_history_service__WEBPACK_IMPORTED_MODULE_5__["GameweekHistoryService"],
            _soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_6__["SoccerPlayerService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _bonus_point_bonus_point_service__WEBPACK_IMPORTED_MODULE_8__["BonusPointService"]])
    ], FantasyPlayerService);
    return FantasyPlayerService;
}());



/***/ }),

/***/ "./src/app/Services/gameweek-data/gameweek-data.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Services/gameweek-data/gameweek-data.service.ts ***!
  \*****************************************************************/
/*! exports provided: GameweekDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameweekDataService", function() { return GameweekDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-request/http-request.service */ "./src/app/Services/http-request/http-request.service.ts");
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


var GameweekDataService = /** @class */ (function () {
    function GameweekDataService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    GameweekDataService.prototype.getGameweekData = function (id, gameweek) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpRequestService.fetch("https://fantasy.premierleague.com/drf/entry/" + id + "/event/" + gameweek + "/picks")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GameweekDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"]])
    ], GameweekDataService);
    return GameweekDataService;
}());



/***/ }),

/***/ "./src/app/Services/gameweek-history/gameweek-history.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Services/gameweek-history/gameweek-history.service.ts ***!
  \***********************************************************************/
/*! exports provided: GameweekHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameweekHistoryService", function() { return GameweekHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-request/http-request.service */ "./src/app/Services/http-request/http-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameweekHistoryService = /** @class */ (function () {
    function GameweekHistoryService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    GameweekHistoryService.prototype.fetch = function (id) {
        return this.httpRequestService.fetch("https://fantasy.premierleague.com/drf/entry/" + id + "/history");
    };
    GameweekHistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"]])
    ], GameweekHistoryService);
    return GameweekHistoryService;
}());



/***/ }),

/***/ "./src/app/Services/leagues/custom-league.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Services/leagues/custom-league.service.ts ***!
  \***********************************************************/
/*! exports provided: CustomLeagueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLeagueService", function() { return CustomLeagueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _leagues_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leagues.service */ "./src/app/Services/leagues/leagues.service.ts");
/* harmony import */ var src_app_Models_CustomLeague__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/CustomLeague */ "./src/app/Models/CustomLeague.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
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




var CustomLeagueService = /** @class */ (function () {
    function CustomLeagueService(storage, leagueService) {
        this.storage = storage;
        this.leagueService = leagueService;
        this.customLeaguesKey = 'custom_leagues';
        this.customLeagues = [];
    }
    CustomLeagueService.prototype.create = function (leagueName, members) {
        return __awaiter(this, void 0, void 0, function () {
            var id, newCustomLeague;
            return __generator(this, function (_a) {
                id = this.generateId();
                newCustomLeague = new src_app_Models_CustomLeague__WEBPACK_IMPORTED_MODULE_2__["default"](id, leagueName, members);
                this.saveLeague(newCustomLeague);
                return [2 /*return*/];
            });
        });
    };
    CustomLeagueService.prototype.generateId = function () {
        var d = new Date();
        return d.getTime();
    };
    CustomLeagueService.prototype.saveLeague = function (customLeague) {
        this.customLeagues.push(customLeague);
        this.storage.set(this.customLeaguesKey, this.customLeagues);
    };
    CustomLeagueService.prototype.fetchLeagueData = function (league) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.leagueService.createLeague(league.members, league.name, league.id)];
                    case 1: 
                    // recreates league so data is fresh
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
   * retrieves league object from storage
   * @param id league id
   */
    CustomLeagueService.prototype.getLeague = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var leagues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(this.customLeaguesKey)];
                    case 1:
                        leagues = _a.sent();
                        return [2 /*return*/, leagues.find(function (league) { return league.id === id; })];
                }
            });
        });
    };
    CustomLeagueService.prototype.getLeagues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var leagues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(this.customLeaguesKey)];
                    case 1:
                        leagues = _a.sent();
                        this.customLeagues = leagues || [];
                        return [2 /*return*/, this.customLeagues];
                }
            });
        });
    };
    CustomLeagueService.prototype.remove = function (league) {
        this.customLeagues = this.customLeagues.filter(function (custom) { return custom.id !== league.id; });
    };
    CustomLeagueService.prototype.saveToDatabase = function () {
        this.storage.set(this.customLeaguesKey, this.customLeagues);
    };
    CustomLeagueService.prototype.addMemberToLeague = function (id, leagueId) {
        return __awaiter(this, void 0, void 0, function () {
            var custLeague;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        custLeague = this.customLeagues.find(function (league) { return league.id === leagueId; });
                        custLeague.members.push(id);
                        return [4 /*yield*/, this.saveToDatabase()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, custLeague];
                }
            });
        });
    };
    CustomLeagueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _leagues_service__WEBPACK_IMPORTED_MODULE_1__["LeaguesService"]])
    ], CustomLeagueService);
    return CustomLeagueService;
}());



/***/ }),

/***/ "./src/app/Services/leagues/leagues.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/leagues/leagues.service.ts ***!
  \*****************************************************/
/*! exports provided: LeaguesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaguesService", function() { return LeaguesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_League__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/League */ "./src/app/Models/League.ts");
/* harmony import */ var _fantasy_player_fantasy_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fantasy-player/fantasy-player.service */ "./src/app/Services/fantasy-player/fantasy-player.service.ts");
/* harmony import */ var _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-request/http-request.service */ "./src/app/Services/http-request/http-request.service.ts");
/* harmony import */ var _live_data_live_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../live-data/live.data.service */ "./src/app/Services/live-data/live.data.service.ts");
/* harmony import */ var _static_data_static_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-data/static.data.service */ "./src/app/Services/static-data/static.data.service.ts");
/* harmony import */ var _soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../soccer-player/soccerplayer.service */ "./src/app/Services/soccer-player/soccerplayer.service.ts");
/* harmony import */ var src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/FantasyPlayer */ "./src/app/Models/FantasyPlayer.ts");
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








var LeaguesService = /** @class */ (function () {
    function LeaguesService(staticDataService, httpRequestService, fantasyPlayerService, liveDataService, soccerPlayerService) {
        this.staticDataService = staticDataService;
        this.httpRequestService = httpRequestService;
        this.fantasyPlayerService = fantasyPlayerService;
        this.liveDataService = liveDataService;
        this.soccerPlayerService = soccerPlayerService;
    }
    LeaguesService.prototype.createLeague = function (members, name, id) {
        if (id === void 0) { id = null; }
        return __awaiter(this, void 0, void 0, function () {
            var currentGameweek, soccerPlayers;
            var _this = this;
            return __generator(this, function (_a) {
                currentGameweek = null, soccerPlayers = null;
                return [2 /*return*/, Promise.all([
                        this.staticDataService.getCurrentGameweek(),
                        this.soccerPlayerService.getPlayers()
                    ])
                        .then(function (_a) {
                        var gameweek = _a[0], players = _a[1];
                        currentGameweek = gameweek;
                        soccerPlayers = players;
                        return _this.liveDataService.fetch(currentGameweek);
                    })
                        .then(function (liveData) {
                        return Promise.all(members.map(function (memberId) {
                            return _this.fantasyPlayerService
                                .createPlayer(memberId, liveData, soccerPlayers, currentGameweek)
                                .catch(function () {
                                // create new player with just basic info
                                var p = new src_app_Models_FantasyPlayer__WEBPACK_IMPORTED_MODULE_7__["default"]();
                                p.id = id;
                                p.name = 'failed';
                                return p;
                            });
                        }));
                    })
                        .then(function (fantasyPlayers) {
                        var membersMap = new Map();
                        // create map for easy retrieval of memebrs
                        for (var _i = 0, fantasyPlayers_1 = fantasyPlayers; _i < fantasyPlayers_1.length; _i++) {
                            var player = fantasyPlayers_1[_i];
                            if (player) {
                                membersMap.set(player.id, player);
                            }
                        }
                        var newLeague = new src_app_Models_League__WEBPACK_IMPORTED_MODULE_1__["default"](id, name, membersMap);
                        return newLeague;
                    })];
            });
        });
    };
    LeaguesService.prototype.getLeague = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var leagueData, membersIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpRequestService.fetch("https://fantasy.premierleague.com/drf/leagues-classic-standings/" + id)];
                    case 1:
                        leagueData = _a.sent();
                        membersIds = leagueData.standings.results.map(function (member) { return member.entry; });
                        return [2 /*return*/, this.createLeague(membersIds, leagueData.league.name, leagueData.league.id)];
                }
            });
        });
    };
    LeaguesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_static_data_static_data_service__WEBPACK_IMPORTED_MODULE_5__["StaticDataService"],
            _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"],
            _fantasy_player_fantasy_player_service__WEBPACK_IMPORTED_MODULE_2__["FantasyPlayerService"],
            _live_data_live_data_service__WEBPACK_IMPORTED_MODULE_4__["LiveDataService"],
            _soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_6__["SoccerPlayerService"]])
    ], LeaguesService);
    return LeaguesService;
}());



/***/ }),

/***/ "./src/app/Services/live-data/live.data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/live-data/live.data.service.ts ***!
  \*********************************************************/
/*! exports provided: LiveDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveDataService", function() { return LiveDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-request/http-request.service */ "./src/app/Services/http-request/http-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveDataService = /** @class */ (function () {
    function LiveDataService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    LiveDataService.prototype.fetch = function (gameweek) {
        return this.httpRequestService.fetch("https://fantasy.premierleague.com/drf/event/" + gameweek + "/live");
    };
    LiveDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"]])
    ], LiveDataService);
    return LiveDataService;
}());



/***/ }),

/***/ "./src/app/Services/main-user/main-user.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/main-user/main-user.service.ts ***!
  \*********************************************************/
/*! exports provided: MainUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainUserService", function() { return MainUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _fantasy_player_fantasy_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fantasy-player/fantasy-player.service */ "./src/app/Services/fantasy-player/fantasy-player.service.ts");
/* harmony import */ var _Firebase_fcm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Firebase/fcm.service */ "./src/app/Services/Firebase/fcm.service.ts");
/* harmony import */ var _live_data_live_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../live-data/live.data.service */ "./src/app/Services/live-data/live.data.service.ts");
/* harmony import */ var _static_data_static_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-data/static.data.service */ "./src/app/Services/static-data/static.data.service.ts");
/* harmony import */ var _soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../soccer-player/soccerplayer.service */ "./src/app/Services/soccer-player/soccerplayer.service.ts");
/* harmony import */ var _leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leagues/custom-league.service */ "./src/app/Services/leagues/custom-league.service.ts");
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








var MainUserService = /** @class */ (function () {
    function MainUserService(storage, fantasyPlayerService, liveDataService, staticDataService, fcmService, soccerPlayerService, customLeagueService) {
        this.storage = storage;
        this.fantasyPlayerService = fantasyPlayerService;
        this.liveDataService = liveDataService;
        this.staticDataService = staticDataService;
        this.fcmService = fcmService;
        this.soccerPlayerService = soccerPlayerService;
        this.customLeagueService = customLeagueService;
        this.userKey = 'user';
    }
    MainUserService.prototype.loadSavedUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get(this.userKey)];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/, this.user];
                }
            });
        });
    };
    MainUserService.prototype.getSavedUserId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(this.userKey)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user.id];
                }
            });
        });
    };
    MainUserService.prototype.save = function () {
        this.storage.set(this.userKey, this.user);
    };
    /**
     * @description creates the main user of the app
     * @param id fpl id of user
     */
    MainUserService.prototype.createUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var gameweek, liveData, soccerPlayers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.staticDataService.getCurrentGameweek()];
                    case 1:
                        gameweek = _a.sent();
                        return [4 /*yield*/, this.liveDataService.fetch(gameweek)];
                    case 2:
                        liveData = _a.sent();
                        return [4 /*yield*/, this.soccerPlayerService.getPlayers()];
                    case 3:
                        soccerPlayers = _a.sent();
                        return [4 /*yield*/, this.fantasyPlayerService
                                .createPlayer(id, liveData, soccerPlayers, gameweek)
                                .then(function (user) {
                                _this.user = user;
                                _this.storage.set(_this.userKey, user);
                                _this.updateDeviceToken(_this.user.id);
                                return user;
                            })];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MainUserService.prototype.updateDeviceToken = function (id) {
        this.fcmService.getToken(id);
    };
    MainUserService.prototype.updateUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var customLeagues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customLeagueService.getLeagues()];
                    case 1:
                        customLeagues = _a.sent();
                        this.storage.clear();
                        this.customLeagueService.customLeagues = customLeagues;
                        this.customLeagueService.saveToDatabase();
                        return [4 /*yield*/, this.createUser(id)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MainUserService.prototype.getLivePoints = function () { };
    MainUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"],
            _fantasy_player_fantasy_player_service__WEBPACK_IMPORTED_MODULE_2__["FantasyPlayerService"],
            _live_data_live_data_service__WEBPACK_IMPORTED_MODULE_4__["LiveDataService"],
            _static_data_static_data_service__WEBPACK_IMPORTED_MODULE_5__["StaticDataService"],
            _Firebase_fcm_service__WEBPACK_IMPORTED_MODULE_3__["FcmService"],
            _soccer_player_soccerplayer_service__WEBPACK_IMPORTED_MODULE_6__["SoccerPlayerService"],
            _leagues_custom_league_service__WEBPACK_IMPORTED_MODULE_7__["CustomLeagueService"]])
    ], MainUserService);
    return MainUserService;
}());



/***/ })

}]);
//# sourceMappingURL=default~Pages-Home-home-module~Pages-Leagues-leagues-list-leagues-module~Pages-Settings-settings-mod~d134829c.js.map