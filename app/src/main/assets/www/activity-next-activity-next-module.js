(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-next-activity-next-module"],{

/***/ "./src/app/pages/activity-next/activity-next.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/activity-next/activity-next.module.ts ***!
  \*************************************************************/
/*! exports provided: ActivityNextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityNextPageModule", function() { return ActivityNextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_next_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-next.page */ "./src/app/pages/activity-next/activity-next.page.ts");







var routes = [
    {
        path: '',
        component: _activity_next_page__WEBPACK_IMPORTED_MODULE_6__["ActivityNextPage"]
    }
];
var ActivityNextPageModule = /** @class */ (function () {
    function ActivityNextPageModule() {
    }
    ActivityNextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activity_next_page__WEBPACK_IMPORTED_MODULE_6__["ActivityNextPage"]]
        })
    ], ActivityNextPageModule);
    return ActivityNextPageModule;
}());



/***/ }),

/***/ "./src/app/pages/activity-next/activity-next.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/activity-next/activity-next.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>{{titleval}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf='ActivityAction == \"page\"'>\n  <ion-card >\n      <img src={{bannerImage}}>\n      <ion-card-header>\n          <ion-card-title>{{title}}</ion-card-title>\n        </ion-card-header>\n      <ion-card-content class=\"large\" [innerHTML]=\"description\"></ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n<!-- <ion-content *ngIf='ActivityAction == \"iframe\"' >\n<iframe (load)=\"onLoad()\" class=\"FrameClass\" [src]='this.safeUrl' frameborder=\"0\" target=\"_parent\" ></iframe>\n\n</ion-content> -->"

/***/ }),

/***/ "./src/app/pages/activity-next/activity-next.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/activity-next/activity-next.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".FrameClass {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9hY3Rpdml0eS1uZXh0L2FjdGl2aXR5LW5leHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXR5LW5leHQvYWN0aXZpdHktbmV4dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRnJhbWVDbGFzc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7ICBcbiAgfVxuXG4gICRjb2xvcnM6IChcbiAgICBibHVlOiAgICAjMzg3ZWY1LFxuICAgIHNlY29uZGFyeTogICMzMmRiNjQsXG4gICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICBsaWdodDogICAgICAjZjRmNGY0LCAgLy8gdGhlIGxpZ2h0IGNvbG9yIHdlJ3JlIHVzaW5nXG4gICAgZGFyazogICAgICAgICAgIzIyMixcbiAgICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbiApO1xuIFxuXG4gLmxhcmdle1xuICAgXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/activity-next/activity-next.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/activity-next/activity-next.page.ts ***!
  \***********************************************************/
/*! exports provided: ActivityNextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityNextPage", function() { return ActivityNextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");






var ActivityNextPage = /** @class */ (function () {
    function ActivityNextPage(shared, sanitizer, _element, router, _browser) {
        this.shared = shared;
        this.sanitizer = sanitizer;
        this._element = _element;
        this.router = router;
        this._browser = _browser;
        var data = this.router.getCurrentNavigation().extras.state.data;
        this.bannerImage = data.banner_image;
        this.currentColor = 'light';
        this.title = data.detail_title;
        this.description = data.description;
        this.ActivityAction = data.activity_action;
        this.frameUrl = data.iframe_url;
        this.titleval = data.title;
        // this.getTrustedUrl(this.frameUrl);
        if (this.ActivityAction == 'iframe') {
            var opts = "location=yes,clearcache=yes,hidespinner=no";
            this._browser.create(this.frameUrl, '_blank', opts);
        }
    }
    ActivityNextPage.prototype.ngOnInit = function () {
        this._enableDynamicHyperlinks();
    };
    ActivityNextPage.prototype.getTrustedUrl = function (url) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ActivityNextPage.prototype._enableDynamicHyperlinks = function () {
        var _this = this;
        // Provide a minor delay to allow the HTML to be rendered and 'found'
        // within the view template
        setTimeout(function () {
            // Query the DOM to find ALL occurrences of the <a> hyperlink tag
            var urls = _this._element.nativeElement.querySelectorAll('a');
            // Iterate through these
            urls.forEach(function (url) {
                // Listen for a click event on each hyperlink found
                url.addEventListener('click', function (event) {
                    // Retrieve the href value from the selected hyperlink
                    _this._link = event.target.href;
                    // Log values to the console and open the link within the InAppBrowser plugin
                    console.log('Name is: ' + event.target.innerText);
                    console.log('Link is: ' + _this._link);
                    // alert(this._link);
                    // alert(this._link.indexOf('tel'));
                    if (_this._link.indexOf('tel') > -1) {
                    }
                    else {
                        event.preventDefault();
                        _this._launchInAppBrowser(encodeURI(_this._link));
                    }
                }, false);
            });
        }, 1000);
    };
    ActivityNextPage.prototype._launchInAppBrowser = function (link) {
        var opts = "location=yes,clearcache=yes,hidespinner=no";
        this._browser.create(link, '_blank', opts);
    };
    ActivityNextPage.prototype.onLoad = function () {
        this.shared.hideLoading();
    };
    ActivityNextPage.prototype.ionViewWillLeave = function () {
        this.shared.hideLoading();
    };
    ActivityNextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity-next',
            template: __webpack_require__(/*! ./activity-next.page.html */ "./src/app/pages/activity-next/activity-next.page.html"),
            styles: [__webpack_require__(/*! ./activity-next.page.scss */ "./src/app/pages/activity-next/activity-next.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
    ], ActivityNextPage);
    return ActivityNextPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-next-activity-next-module.js.map