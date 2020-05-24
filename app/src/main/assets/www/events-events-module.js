(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./src/app/pages/events/events.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.module.ts ***!
  \***********************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/events/events.page.ts");







var routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]
    }
];
var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
        })
    ], EventsPageModule);
    return EventsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/events.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Upcoming Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card *ngFor=\"let value of data\" (click)=\"NextPageActivity(value)\">\n\n    <div class=\"parentDiv\">\n    <div class=\"maindate\">   \n        <span class=\"dateValue\">{{value.start_date_month}}</span>\n        <span class=\"dateValuenum\">{{value.start_date_day}} </span>\n    </div>\n\n    <div class=\"maindateTwo\">   \n        <span class=\"vanueTitle\">{{value.name}}</span>\n        <span class=\"guestCss\">{{value.start_date_day}}{{value.start_date_month}}-{{value.end_date_day}}{{value.end_date_month}} ({{value.attending_count}} guests) </span>\n        \n      </div>\n\n    </div>\n\n    \n\n\n      <!-- <div class=\"maindateThree\">   \n          <span class=\"venueTitleThree\">{{value.place.name}}</span>\n          <span class=\"guestHouseThree\">{{value.place.location.city}} {{value.place.location.state}} {{value.place.location.country}} </span>\n          \n        </div> -->\n\n\n    \n\n</ion-card >\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/events/events.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maindate {\n  display: grid;\n  margin-left: 19px;\n  margin-top: 20px; }\n\n.maindateTwo {\n  display: grid;\n  margin-left: 30px;\n  margin-top: 24px; }\n\n.list-ios-margin-bottom {\n  margin-bottom: 0px; }\n\n.list-ios {\n  margin-bottom: 0px !important; }\n\n.dateValue {\n  font-size: 20px;\n  font-weight: bold;\n  color: #f58c29; }\n\n.dateValuenum {\n  font-size: 25px;\n  font-weight: 900; }\n\n.parentDiv {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-bottom: 20px; }\n\n.guestCss {\n  font-size: 15px;\n  font-weight: 500; }\n\n.vanueTitle {\n  font-size: 16px;\n  font-weight: bold; }\n\n.maindateThree {\n  width: 200px;\n  margin-top: 23px;\n  display: grid;\n  margin-left: 13px; }\n\n.venueTitleThree {\n  font-size: 12px;\n  font-weight: bold;\n  padding-left: 1px;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.guestHouseThree {\n  font-size: 12px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNHLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbkI7RUFDRyxrQkFBa0IsRUFBQTs7QUFHckI7RUFDRyw2QkFBNkIsRUFBQTs7QUFHaEM7RUFDRyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFJakI7RUFDRyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFHdEI7RUFDRyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUlwQjtFQUNHLFlBQVk7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUVyQjtFQUNHLGVBQWU7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDRyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcbiAgIGJsdWU6ICAgICMzODdlZjUsXG4gICBzZWNvbmRhcnk6ICAjMzJkYjY0LFxuICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgIGRhcms6ICAgICAgICAgICMyMjIsXG4gICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbik7XG5cblxuLm1haW5kYXRle1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xuICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1haW5kYXRlVHdve1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgbWFyZ2luLXRvcDogMjRweDtcbiAgIFxufVxuLmxpc3QtaW9zLW1hcmdpbi1ib3R0b217XG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5saXN0LWlvc3tcbiAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZVZhbHVle1xuICAgZm9udC1zaXplOiAyMHB4O1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBjb2xvcjogI2Y1OGMyOTtcbn1cblxuXG4uZGF0ZVZhbHVlbnVte1xuICAgZm9udC1zaXplOiAyNXB4O1xuICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnBhcmVudERpdntcbiAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmd1ZXN0Q3Nze1xuICAgZm9udC1zaXplOiAxNXB4O1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnZhbnVlVGl0bGV7XG4gICBmb250LXNpemU6IDE2cHg7XG4gICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4ubWFpbmRhdGVUaHJlZXtcbiAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG4udmVudWVUaXRsZVRocmVle1xuICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDogMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmd1ZXN0SG91c2VUaHJlZXtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/events/events.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/events/events.page.ts ***!
  \*********************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EventsPage = /** @class */ (function () {
    function EventsPage(router, shared) {
        this.router = router;
        this.shared = shared;
        this.currentColor = 'light';
    }
    EventsPage.prototype.ngOnInit = function () {
    };
    EventsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallevents.ServiceCallRequestEventsData().then(function (res) {
                // debugger
                _this.response = res;
                _this.data = _this.response.content.data;
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    EventsPage.prototype.NextPageActivity = function (data) {
        this.router.navigate(['/menu/first/tabs/tab1/events/events-details'], { state: { data: data } });
    };
    EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.page.html */ "./src/app/pages/events/events.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./events.page.scss */ "./src/app/pages/events/events.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EventsPage);
    return EventsPage;
}());



/***/ })

}]);
//# sourceMappingURL=events-events-module.js.map