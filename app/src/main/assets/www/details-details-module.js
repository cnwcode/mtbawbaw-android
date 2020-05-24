(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./src/app/pages/details/details.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/details/details.page.ts");







var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/details/details.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Getting here</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content >\n \n  <ion-card *ngFor=\"let data of posts\">\n      <img src={{data.banner_image}} >\n      \n      <ion-card-header>\n          <ion-card-title>{{data.title}}</ion-card-title>\n        </ion-card-header>\n      <ion-card-content>\n          {{data.short_desc}}\n        </ion-card-content>\n  \n        <ion-button [color]=\"currentColorButton\" (click)=\"NextPage(data)\" class=\"buttonGet\">Find out more</ion-button>\n    </ion-card>\n\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/details/details.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonGet {\n  margin-left: 13px; }\n\nion-button.buttonGet {\n  background-color: #f58c29;\n  margin-bottom: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0EsaUJBQWlCLEVBQUE7O0FBSWpCO0VBQ0kseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcbiAgIGJsdWU6ICAgICMzODdlZjUsXG4gICBzZWNvbmRhcnk6ICAjMzJkYjY0LFxuICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgIGRhcms6ICAgICAgICAgICMyMjIsXG4gICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbik7XG5cblxuLmJ1dHRvbkdldHtcbm1hcmdpbi1sZWZ0OiAxM3B4OyAgICBcblxufVxuXG5pb24tYnV0dG9uLmJ1dHRvbkdldCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGMyOTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/details/details.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsPage = /** @class */ (function () {
    function DetailsPage(router, shared) {
        this.router = router;
        this.shared = shared;
        this.currentColor = 'light';
        this.currentColorButton = 'orangle';
    }
    DetailsPage.prototype.ngOnInit = function () {
    };
    DetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallGettingHere.ServiceCallRequestGettingHereData().then(function (res) {
                // debugger
                _this.response = res;
                _this.posts = _this.response.content.posts;
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    DetailsPage.prototype.NextPage = function (data) {
        this.router.navigate(['/menu/first/tabs/tab1/details/details-next'], { state: { example: data } });
    };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/pages/details/details.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/pages/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=details-details-module.js.map