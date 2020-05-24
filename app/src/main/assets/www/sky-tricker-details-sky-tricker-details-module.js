(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sky-tricker-details-sky-tricker-details-module"],{

/***/ "./src/app/pages/sky-tricker-details/sky-tricker-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/sky-tricker-details/sky-tricker-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: SkyTrickerDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkyTrickerDetailsPageModule", function() { return SkyTrickerDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sky_tricker_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sky-tricker-details.page */ "./src/app/pages/sky-tricker-details/sky-tricker-details.page.ts");







var routes = [
    {
        path: '',
        component: _sky_tricker_details_page__WEBPACK_IMPORTED_MODULE_6__["SkyTrickerDetailsPage"]
    }
];
var SkyTrickerDetailsPageModule = /** @class */ (function () {
    function SkyTrickerDetailsPageModule() {
    }
    SkyTrickerDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sky_tricker_details_page__WEBPACK_IMPORTED_MODULE_6__["SkyTrickerDetailsPage"]]
        })
    ], SkyTrickerDetailsPageModule);
    return SkyTrickerDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sky-tricker-details/sky-tricker-details.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/sky-tricker-details/sky-tricker-details.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar  [color]=\"currentColor\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Tracking Tips</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n<div class=\"tracking\">\nGPS works best when your phone has the least \nobstructed view of the sky .Keep your phone in a secure outer pocket while tracking.\nwhen Tracking is enabled Baw Baw tracks your postion continously.\n</div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sky-tricker-details/sky-tricker-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/sky-tricker-details/sky-tricker-details.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tracking {\n  text-align: center;\n  margin-top: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9za3ktdHJpY2tlci1kZXRhaWxzL3NreS10cmlja2VyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2t5LXRyaWNrZXItZGV0YWlscy9za3ktdHJpY2tlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFja2luZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbn1cblxuJGNvbG9yczogKFxuICAgIGJsdWU6ICAgICMzODdlZjUsXG4gICAgc2Vjb25kYXJ5OiAgIzMyZGI2NCxcbiAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgICBkYXJrOiAgICAgICAgICAjMjIyLFxuICAgIG9yYW5nbGU6ICAgICAgICNmNThjMjkvLyB0aGUgZGFyayBjb2xvciB3ZSdyZSB1c2luZ1xuICk7XG4gXG4gIl19 */"

/***/ }),

/***/ "./src/app/pages/sky-tricker-details/sky-tricker-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/sky-tricker-details/sky-tricker-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: SkyTrickerDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkyTrickerDetailsPage", function() { return SkyTrickerDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkyTrickerDetailsPage = /** @class */ (function () {
    function SkyTrickerDetailsPage() {
        this.currentColor = 'light';
    }
    SkyTrickerDetailsPage.prototype.ngOnInit = function () {
    };
    SkyTrickerDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sky-tricker-details',
            template: __webpack_require__(/*! ./sky-tricker-details.page.html */ "./src/app/pages/sky-tricker-details/sky-tricker-details.page.html"),
            styles: [__webpack_require__(/*! ./sky-tricker-details.page.scss */ "./src/app/pages/sky-tricker-details/sky-tricker-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkyTrickerDetailsPage);
    return SkyTrickerDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sky-tricker-details-sky-tricker-details-module.js.map