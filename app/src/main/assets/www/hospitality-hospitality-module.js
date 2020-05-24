(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospitality-hospitality-module"],{

/***/ "./src/app/pages/hospitality/hospitality.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/hospitality/hospitality.module.ts ***!
  \*********************************************************/
/*! exports provided: HospitalityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalityPageModule", function() { return HospitalityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hospitality_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hospitality.page */ "./src/app/pages/hospitality/hospitality.page.ts");







var routes = [
    {
        path: '',
        component: _hospitality_page__WEBPACK_IMPORTED_MODULE_6__["HospitalityPage"]
    }
];
var HospitalityPageModule = /** @class */ (function () {
    function HospitalityPageModule() {
    }
    HospitalityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hospitality_page__WEBPACK_IMPORTED_MODULE_6__["HospitalityPage"]]
        })
    ], HospitalityPageModule);
    return HospitalityPageModule;
}());



/***/ }),

/***/ "./src/app/pages/hospitality/hospitality.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/hospitality/hospitality.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar  [color]=\"currentColor\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Hospitality</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n    <ion-card *ngFor=\"let data of contentdata\" >\n        <img src={{data.banner_image}}>\n        <ion-card-header>\n            <ion-card-title>{{data.title}}</ion-card-title>\n          </ion-card-header>\n        <ion-card-content class=\"large\" [innerHTML]=\"data.description\"></ion-card-content>\n      </ion-card>\n\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/hospitality/hospitality.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/hospitality/hospitality.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvc3BpdGFsaXR5L2hvc3BpdGFsaXR5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hospitality/hospitality.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/hospitality/hospitality.page.ts ***!
  \*******************************************************/
/*! exports provided: HospitalityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalityPage", function() { return HospitalityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HospitalityPage = /** @class */ (function () {
    function HospitalityPage(shared, router) {
        this.shared = shared;
        this.router = router;
        this.currentColor = 'light';
        this.theme = this.router.getCurrentNavigation().extras.state.theme;
    }
    HospitalityPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallHost.ServiceCallRequestHost(this.theme).then(function (res) {
                // debugger
                _this.response = res;
                _this.contentdata = _this.response.content.hospitality;
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    HospitalityPage.prototype.ngOnInit = function () {
    };
    HospitalityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hospitality',
            template: __webpack_require__(/*! ./hospitality.page.html */ "./src/app/pages/hospitality/hospitality.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./hospitality.page.scss */ "./src/app/pages/hospitality/hospitality.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HospitalityPage);
    return HospitalityPage;
}());



/***/ })

}]);
//# sourceMappingURL=hospitality-hospitality-module.js.map