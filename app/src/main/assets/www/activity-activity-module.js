(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-activity-module"],{

/***/ "./src/app/pages/activity/activity.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/activity/activity.module.ts ***!
  \***************************************************/
/*! exports provided: ActivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity.page */ "./src/app/pages/activity/activity.page.ts");







var routes = [
    {
        path: '',
        component: _activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]
    }
];
var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]]
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());



/***/ }),

/***/ "./src/app/pages/activity/activity.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/activity/activity.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title> {{theme}} Activity</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- <ion-grid>\n    <ion-row>\n        <ion-col *ngFor=\"let items of response\" width-90>\n            <ion-card>\n                sda\n            </ion-card>\n        </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n\n  <div class=\"row TopCss\">\n    <div *ngFor=\"let items of response\" class=\"column\">\n      <ion-card class=\"CardCss\"  (click)=\"NextPageActivity(items)\"  >\n        <img class=\"imageClass\"src={{items.banner_thumb}} >\n         <div class=\"TextClass\"> {{items.title}} </div>\n    </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/activity/activity.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/activity/activity.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column {\n  float: left;\n  width: 50%;\n  height: 220px;\n  /* Should be removed. Only for demonstration */ }\n\n/* Clear floats after the columns */\n\n.row:after {\n  display: table;\n  clear: both; }\n\n.TopCss {\n  padding-top: 15px; }\n\n.TextClass {\n  font-weight: bolder;\n  padding-top: 7px;\n  padding-left: 6px;\n  font-size: 12px; }\n\n.CardCss {\n  height: 208px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9hY3Rpdml0eS9hY3Rpdml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYiw4Q0FBQSxFQUErQzs7QUFHakQsbUNBQUE7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXR5L2FjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICAvKiBTaG91bGQgYmUgcmVtb3ZlZC4gT25seSBmb3IgZGVtb25zdHJhdGlvbiAqL1xuICB9XG4gIFxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbiAgLnJvdzphZnRlciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cblxuICAuVG9wQ3Nze1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG4gIC5UZXh0Q2xhc3N7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5DYXJkQ3Nze1xuICAgIGhlaWdodDogMjA4cHg7XG4gIH1cblxuXG4gICRjb2xvcnM6IChcbiAgIGJsdWU6ICAgICMzODdlZjUsXG4gICBzZWNvbmRhcnk6ICAjMzJkYjY0LFxuICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgIGRhcms6ICAgICAgICAgICMyMjIsXG4gICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbik7XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/activity/activity.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/activity/activity.page.ts ***!
  \*************************************************/
/*! exports provided: ActivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPage", function() { return ActivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ActivityPage = /** @class */ (function () {
    function ActivityPage(router) {
        this.router = router;
        var data = this.router.getCurrentNavigation().extras.state.activity;
        this.theme = this.router.getCurrentNavigation().extras.state.theme;
        this.response = data;
        this.currentColor = 'light';
    }
    ActivityPage.prototype.ngOnInit = function () {
    };
    ActivityPage.prototype.NextPageActivity = function (data) {
        this.router.navigate(['/menu/first/tabs/tab1/activity/activity-next'], { state: { data: data } });
    };
    ActivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.page.html */ "./src/app/pages/activity/activity.page.html"),
            styles: [__webpack_require__(/*! ./activity.page.scss */ "./src/app/pages/activity/activity.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ActivityPage);
    return ActivityPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-activity-module.js.map