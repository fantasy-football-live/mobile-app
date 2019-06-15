(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-News-news-module"],{

/***/ "./src/app/Pages/News/news.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/News/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.page */ "./src/app/Pages/News/news.page.ts");
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
        component: _news_page__WEBPACK_IMPORTED_MODULE_5__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_5__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/News/news.page.html":
/*!*******************************************!*\
  !*** ./src/app/Pages/News/news.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'NEWS'\"></app-header>\n<ion-backdrop *ngIf=\"showSpinner\" tappable=\"false\"></ion-backdrop>\n<app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item data-aos=\"fade-up\" lines=\"inset\" button *ngFor=\"let post of latestPosts\" (click)=\"openNewsStory(post.url)\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"post.image\" alt=\"post.title\">\n      </ion-avatar>\n      <ion-label text-wrap>\n        <h2>{{ post.title }}</h2>\n        <p> {{ post.url }} </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/News/news.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/News/news.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-link {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.main-logo {\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Eb2N1bWVudHMvUHJvamVjdHMvRmFudGFzeUZvb3RiYWxsTGl2ZS9tb2JpbGUtYXBwL3NyYy9hcHAvUGFnZXMvTmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9OZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtbGluayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4tbG9nbyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/News/news.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/News/news.page.ts ***!
  \*****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_reddit_data_reddit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/reddit-data/reddit.service */ "./src/app/Services/reddit-data/reddit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsPage = /** @class */ (function () {
    function NewsPage(redditService) {
        this.redditService = redditService;
        this.title = 'NEWS';
        this.showSpinner = true;
        this.latestPosts = [];
    }
    NewsPage.prototype.ngOnInit = function () {
        this.getLatestPosts();
    };
    /**
     * @description fetches the latest posts from reddit
     */
    NewsPage.prototype.getLatestPosts = function () {
        var _this = this;
        this.redditService.getLatestLinkPosts().then(function (posts) {
            _this.latestPosts = posts;
            _this.showSpinner = false;
        });
    };
    NewsPage.prototype.refresh = function (event) {
        this.getLatestPosts();
        event.target.complete();
    };
    /**
     * @description opens the link selected by the user
     * @param url url of link to be opened
     */
    NewsPage.prototype.openNewsStory = function (url) {
        window.open(url);
    };
    NewsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/Pages/News/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/Pages/News/news.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_Services_reddit_data_reddit_service__WEBPACK_IMPORTED_MODULE_1__["RedditService"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ }),

/***/ "./src/app/Services/reddit-data/reddit.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Services/reddit-data/reddit.service.ts ***!
  \********************************************************/
/*! exports provided: RedditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditService", function() { return RedditService; });
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


var RedditService = /** @class */ (function () {
    function RedditService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    RedditService.prototype.getLatestLinkPosts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpRequestService.fetch('https://www.reddit.com/r/fantasypl/new/.json?limit=80')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.data.children.filter(function (post) { return !post.data.is_self; }).map(function (post) {
                                return {
                                    url: post.data.url,
                                    title: post.data.title,
                                    image: post.data.thumbnail
                                };
                            })];
                }
            });
        });
    };
    RedditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_request_http_request_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"]])
    ], RedditService);
    return RedditService;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-News-news-module.js.map