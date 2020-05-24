(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accommodation-accommodation-module"],{

/***/ "./src/app/pages/accommodation/accommodation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/accommodation/accommodation.module.ts ***!
  \*************************************************************/
/*! exports provided: AccommodationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccommodationPageModule", function() { return AccommodationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accommodation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accommodation.page */ "./src/app/pages/accommodation/accommodation.page.ts");







var routes = [
    {
        path: '',
        component: _accommodation_page__WEBPACK_IMPORTED_MODULE_6__["AccommodationPage"]
    }
];
var AccommodationPageModule = /** @class */ (function () {
    function AccommodationPageModule() {
    }
    AccommodationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_accommodation_page__WEBPACK_IMPORTED_MODULE_6__["AccommodationPage"]]
        })
    ], AccommodationPageModule);
    return AccommodationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/accommodation/accommodation.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/accommodation/accommodation.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Accommodation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <iframe (load)=\"onLoad()\" class=\"FrameClass\" src=\"{{url}}\" frameborder=\"0\" target=\"_parent\" ></iframe> -->\n\n  <iframe (load)=\"onLoad()\" class=\"FrameClass\" [src]='this.safeUrl' frameborder=\"0\" target=\"_parent\" ></iframe>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/accommodation/accommodation.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/accommodation/accommodation.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".FrameClass {\n  width: 100%;\n  height: 100%; }\n\n.custom {\n  --background:#F4B004;\n  --spinner-color:#F94701; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9hY2NvbW1vZGF0aW9uL2FjY29tbW9kYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFhZDtFQUNFLG9CQUFhO0VBQ2IsdUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvbW1vZGF0aW9uL2FjY29tbW9kYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkZyYW1lQ2xhc3N7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7ICBcbn1cblxuJGNvbG9yczogKFxuICAgYmx1ZTogICAgIzM4N2VmNSxcbiAgIHNlY29uZGFyeTogICMzMmRiNjQsXG4gICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCwgIC8vIHRoZSBsaWdodCBjb2xvciB3ZSdyZSB1c2luZ1xuICAgZGFyazogICAgICAgICAgIzIyMixcbiAgIG9yYW5nbGU6ICAgICAgICNmNThjMjkvLyB0aGUgZGFyayBjb2xvciB3ZSdyZSB1c2luZ1xuKTtcblxuXG4uY3VzdG9te1xuICAtLWJhY2tncm91bmQ6I0Y0QjAwNDtcbiAgLS1zcGlubmVyLWNvbG9yOiNGOTQ3MDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/accommodation/accommodation.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/accommodation/accommodation.page.ts ***!
  \***********************************************************/
/*! exports provided: AccommodationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccommodationPage", function() { return AccommodationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var AccommodationPage = /** @class */ (function () {
    function AccommodationPage(sanitizer, router, loadingController, shared) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.loadingController = loadingController;
        this.shared = shared;
        this.currentColor = 'light';
        this.url = this.router.getCurrentNavigation().extras.state.acourl;
        this.getTrustedUrl(this.url);
    }
    AccommodationPage.prototype.ngOnInit = function () {
        this.shared.showLoading();
    };
    AccommodationPage.prototype.getTrustedUrl = function (url) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    AccommodationPage.prototype.onLoad = function () {
        this.shared.hideLoading();
    };
    AccommodationPage.prototype.ionViewWillLeave = function () {
        this.shared.hideLoading();
    };
    AccommodationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accommodation',
            template: __webpack_require__(/*! ./accommodation.page.html */ "./src/app/pages/accommodation/accommodation.page.html"),
            styles: [__webpack_require__(/*! ./accommodation.page.scss */ "./src/app/pages/accommodation/accommodation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], AccommodationPage);
    return AccommodationPage;
}());



/***/ })

}]);
//# sourceMappingURL=accommodation-accommodation-module.js.map