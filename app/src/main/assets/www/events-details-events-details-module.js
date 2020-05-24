(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-details-events-details-module"],{

/***/ "./src/app/pages/events-details/events-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/events-details/events-details.module.ts ***!
  \***************************************************************/
/*! exports provided: EventsDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsDetailsPageModule", function() { return EventsDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-details.page */ "./src/app/pages/events-details/events-details.page.ts");







var routes = [
    {
        path: '',
        component: _events_details_page__WEBPACK_IMPORTED_MODULE_6__["EventsDetailsPage"]
    }
];
var EventsDetailsPageModule = /** @class */ (function () {
    function EventsDetailsPageModule() {
    }
    EventsDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_events_details_page__WEBPACK_IMPORTED_MODULE_6__["EventsDetailsPage"]]
        })
    ], EventsDetailsPageModule);
    return EventsDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events-details/events-details.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/events-details/events-details.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Events Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card >\n    <img src={{image}}>\n\n    <div class=\"parentDiv\">\n      <div class=\"maindate\">   \n          <span class=\"dateValue\">{{start_date_month}}</span>\n          <span class=\"dateValuenum\">{{start_date_day}} </span>\n      </div>\n\n      <div class=\"maindateTwo\">   \n        <span class=\"vanueTitle\">{{name}}</span>\n        <span class=\"guestCss\">{{start_date}} </span> \n        \n      </div>\n      </div>\n\n\n      <div class=\"parentDivsecound\">\n          <ion-icon class=\"timeIcon\" ios=\"ios-locate\" md=\"md-locate\"></ion-icon>\n        <div class=\"maindateThree\">   \n          <span class=\"vanueTitle\">{{place}}</span>\n          <span class=\"guestCss\">{{city}} {{state}} {{country}}</span> \n          \n        </div>\n        </div>\n\n\n        <ion-card-content class=\"contentCss\">\n           {{descripstion}}\n          </ion-card-content>\n\n    \n  </ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/events-details/events-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/events-details/events-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parentDiv {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-bottom: 12px; }\n\n.parentDivsecound {\n  border-top: 1px solid;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-bottom: 20px;\n  border-bottom: 1px solid; }\n\n.maindate {\n  display: grid;\n  margin-left: 19px;\n  margin-top: 20px; }\n\n.maindateTwo {\n  display: grid;\n  margin-left: 45px;\n  margin-top: 26px; }\n\n.dateValue {\n  font-size: 20px;\n  font-weight: bold;\n  color: #f58c29; }\n\n.dateValuenum {\n  font-size: 25px;\n  font-weight: 900; }\n\n.vanueTitle {\n  font-size: 16px;\n  font-weight: bold; }\n\n.guestCss {\n  font-size: 15px;\n  font-weight: 500; }\n\n.timeIcon {\n  font-size: 34px;\n  margin-top: 15px;\n  margin-left: 19px; }\n\n.maindateThree {\n  display: grid;\n  margin-left: 45px;\n  margin-top: 15px;\n  margin-bottom: 20px; }\n\n.contentCss {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9ldmVudHMtZGV0YWlscy9ldmVudHMtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRywyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUduQjtFQUNHLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSW5CO0VBQ0csZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBSWpCO0VBQ0csZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUduQjtFQUNHLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHcEI7RUFDRyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSW5CO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHcEI7RUFDRyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdEI7RUFDRyxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1kZXRhaWxzL2V2ZW50cy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcbiAgIGJsdWU6ICAgICMzODdlZjUsXG4gICBzZWNvbmRhcnk6ICAjMzJkYjY0LFxuICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgIGRhcms6ICAgICAgICAgICMyMjIsXG4gICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbik7XG5cblxuLnBhcmVudERpdntcbiAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiB9XG5cbiAucGFyZW50RGl2c2Vjb3VuZHtcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiB9XG5cbiAubWFpbmRhdGV7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW4tbGVmdDogMTlweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuIH1cbiBcbiAubWFpbmRhdGVUd297XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuIFxuXG4gLmRhdGVWYWx1ZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmNThjMjk7XG4gfVxuIFxuIFxuIC5kYXRlVmFsdWVudW17XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gfVxuXG4gLnZhbnVlVGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cblxuIC5ndWVzdENzc3tcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiB9XG4gXG5cbiAudGltZUljb257XG4gICBmb250LXNpemU6IDM0cHg7XG4gICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgbWFyZ2luLWxlZnQ6IDE5cHg7XG4gfVxuXG4ubWFpbmRhdGVUaHJlZXtcbiAgIGRpc3BsYXk6IGdyaWQ7XG4gICBtYXJnaW4tbGVmdDogNDVweDtcbiAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudENzc3tcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/events-details/events-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/events-details/events-details.page.ts ***!
  \*************************************************************/
/*! exports provided: EventsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsDetailsPage", function() { return EventsDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EventsDetailsPage = /** @class */ (function () {
    function EventsDetailsPage(router) {
        this.router = router;
        this.currentColor = 'light';
        var data = this.router.getCurrentNavigation().extras.state.data;
        this.image = data.image;
        this.start_date_month = data.start_date_month;
        this.start_date_day = data.start_date_day;
        this.name = data.name;
        this.start_date = data.start_date;
        this.place = data.place.name;
        this.city = data.place.location.city;
        this.state = data.place.location.state;
        this.country = data.place.location.country;
        this.descripstion = data.description;
    }
    EventsDetailsPage.prototype.ngOnInit = function () {
    };
    EventsDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events-details',
            template: __webpack_require__(/*! ./events-details.page.html */ "./src/app/pages/events-details/events-details.page.html"),
            styles: [__webpack_require__(/*! ./events-details.page.scss */ "./src/app/pages/events-details/events-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventsDetailsPage);
    return EventsDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=events-details-events-details-module.js.map