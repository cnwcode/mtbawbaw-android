(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["packages-packages-module"],{

/***/ "./src/app/pages/packages/packages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/packages/packages.module.ts ***!
  \***************************************************/
/*! exports provided: PackagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPageModule", function() { return PackagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _packages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packages.page */ "./src/app/pages/packages/packages.page.ts");







var routes = [
    {
        path: '',
        component: _packages_page__WEBPACK_IMPORTED_MODULE_6__["PackagesPage"]
    }
];
var PackagesPageModule = /** @class */ (function () {
    function PackagesPageModule() {
    }
    PackagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_packages_page__WEBPACK_IMPORTED_MODULE_6__["PackagesPage"]]
        })
    ], PackagesPageModule);
    return PackagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/packages/packages.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/packages/packages.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar   [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Packages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>  \n<!-- <iframe (load)=\"onLoad()\"   class=\"FrameClass\" src=\"https://mountbawbaw.com.au/packages?source=app\" frameborder=\"0\" target=\"_parent\" ></iframe> -->\n\n<iframe (load)=\"onLoad()\" class=\"FrameClass\" [src]='this.safeUrl' frameborder=\"0\" target=\"_parent\" ></iframe>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/packages/packages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/packages/packages.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".FrameClass {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9wYWNrYWdlcy9wYWNrYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFja2FnZXMvcGFja2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkZyYW1lQ2xhc3N7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyAgXG4gIH1cblxuXG4gICRjb2xvcnM6IChcbiAgIGJsdWU6ICAgICMzODdlZjUsXG4gICBzZWNvbmRhcnk6ICAjMzJkYjY0LFxuICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgIGRhcms6ICAgICAgICAgICMyMjIsXG4gICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbik7XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/packages/packages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/packages/packages.page.ts ***!
  \*************************************************/
/*! exports provided: PackagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPage", function() { return PackagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var PackagesPage = /** @class */ (function () {
    function PackagesPage(sanitizer, router, shared) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.shared = shared;
        this.currentColor = 'light';
        this.url = this.router.getCurrentNavigation().extras.state.acourl;
        this.getTrustedUrl(this.url);
    }
    PackagesPage.prototype.getTrustedUrl = function (url) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    PackagesPage.prototype.ngOnInit = function () {
        this.shared.showLoading();
    };
    PackagesPage.prototype.onLoad = function () {
        this.shared.hideLoading();
    };
    PackagesPage.prototype.ionViewWillLeave = function () {
        this.shared.hideLoading();
    };
    PackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-packages',
            template: __webpack_require__(/*! ./packages.page.html */ "./src/app/pages/packages/packages.page.html"),
            styles: [__webpack_require__(/*! ./packages.page.scss */ "./src/app/pages/packages/packages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PackagesPage);
    return PackagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=packages-packages-module.js.map