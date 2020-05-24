(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-with-tabs-first-with-tabs-module"],{

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.module.ts ***!
  \*****************************************************************/
/*! exports provided: FirstWithTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstWithTabsPageModule", function() { return FirstWithTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _first_with_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-with-tabs.page */ "./src/app/pages/first-with-tabs/first-with-tabs.page.ts");







var routes = [
    {
        path: 'tabs',
        component: _first_with_tabs_page__WEBPACK_IMPORTED_MODULE_6__["FirstWithTabsPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: '../tab1/tab1.module#Tab1PageModule'
            },
            {
                path: 'tab1/facebook-redeem',
                loadChildren: '../facebook-redeem/facebook-redeem.module#FacebookRedeemPageModule'
            },
            {
                path: 'tab1/skytrciker-new/skytricker-next',
                loadChildren: '../skytricker-next/skytricker-next.module#SkytrickerNextPageModule'
            },
            {
                path: 'tab1/skytrciker-new',
                loadChildren: '../skytrciker-new/skytrciker-new.module#SkytrcikerNewPageModule'
            },
            {
                path: 'tab1/login/forgot',
                loadChildren: '../forgot/forgot.module#ForgotPageModule'
            },
            {
                path: 'tab1/qa-scanner',
                loadChildren: '../qa-scanner/qa-scanner.module#QaScannerPageModule'
            },
            {
                path: 'tab1/offers',
                loadChildren: '../offers/offers.module#OffersPageModule'
            },
            {
                path: 'tab1/profile',
                loadChildren: '../profile/profile.module#ProfilePageModule'
            },
            {
                path: 'tab1/sky-tricker',
                loadChildren: '../sky-tricker/sky-tricker.module#SkyTrickerPageModule'
            },
            {
                path: 'tab1/sky-tricker/sky-tricker-details',
                loadChildren: '../sky-tricker-details/sky-tricker-details.module#SkyTrickerDetailsPageModule'
            },
            {
                path: 'tab1/events/events-details',
                loadChildren: '../events-details/events-details.module#EventsDetailsPageModule'
            },
            {
                path: 'tab1/events',
                loadChildren: '../events/events.module#EventsPageModule'
            },
            {
                path: 'tab1/village-map',
                loadChildren: '../village-map/village-map.module#VillageMapPageModule'
            },
            {
                path: 'tab1/hospitality',
                loadChildren: '../hospitality/hospitality.module#HospitalityPageModule'
            },
            {
                path: 'tab1/weather-report',
                loadChildren: '../weather-report/weather-report.module#WeatherReportPageModule'
            },
            {
                path: 'tab1/activity',
                loadChildren: '../activity/activity.module#ActivityPageModule'
            },
            {
                path: 'tab1/activity/activity-next',
                loadChildren: '../activity-next/activity-next.module#ActivityNextPageModule'
            },
            {
                path: 'tab1/activity-next',
                loadChildren: '../activity-next/activity-next.module#ActivityNextPageModule'
            },
            {
                path: 'tab1/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            },
            {
                path: 'tab1/details/details-next',
                loadChildren: '../details-next/details-next.module#DetailsNextPageModule'
            },
            {
                path: 'tab1/live-cam',
                loadChildren: '../live-cam/live-cam.module#LiveCamPageModule'
            },
            {
                path: 'tab1/packages',
                loadChildren: '../packages/packages.module#PackagesPageModule'
            },
            {
                path: 'tab1/accommodation',
                loadChildren: '../accommodation/accommodation.module#AccommodationPageModule'
            },
            {
                path: 'tab1/login',
                loadChildren: '../login/login.module#LoginPageModule'
            },
            {
                path: 'tab1/registraion',
                loadChildren: '../registraion/registraion.module#RegistraionPageModule'
            },
            {
                path: 'tab2',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
            },
            {
                path: 'tab3',
                loadChildren: '../tab3/tab3.module#Tab3PageModule'
            },
            {
                path: 'tab4',
                loadChildren: '../tab4/tab4.module#Tab4PageModule'
            },
            {
                path: 'tab5',
                loadChildren: '../tab5/tab5.module#Tab5PageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
var FirstWithTabsPageModule = /** @class */ (function () {
    function FirstWithTabsPageModule() {
    }
    FirstWithTabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_first_with_tabs_page__WEBPACK_IMPORTED_MODULE_6__["FirstWithTabsPage"]]
        })
    ], FirstWithTabsPageModule);
    return FirstWithTabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n \n  <!-- <ion-tab-bar slot=\"bottom\"> -->\n \n    <!-- <ion-tab-button   tab=\"tab1\">\n      <ion-icon class=\"colorchnage\" name=\"home\"></ion-icon>\n     \n    </ion-tab-button>\n \n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"calendar\"></ion-icon>\n     \n    </ion-tab-button>\n\n\n\n  <ion-tab-button tab=\"tab3\">\n    <ion-icon name=\"headset\"></ion-icon>\n    \n  </ion-tab-button>\n\n\n\n<ion-tab-button tab=\"tab4\">\n  <ion-icon name=\"basket\"></ion-icon>\n  \n</ion-tab-button>\n\n\n\n<ion-tab-button tab=\"tab5\">\n  <ion-icon name=\"settings\"></ion-icon>\n\n</ion-tab-button> -->\n<!-- </ion-tab-bar> -->\n \n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color-selected:rgb(255,155,83); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9maXJzdC13aXRoLXRhYnMvZmlyc3Qtd2l0aC10YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVRztFQUNHLGdDQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlyc3Qtd2l0aC10YWJzL2ZpcnN0LXdpdGgtdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXG4gICBibHVlOiAgICAjMzg3ZWY1LFxuICAgc2Vjb25kYXJ5OiAgIzMyZGI2NCxcbiAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICBsaWdodDogICAgICAjZjRmNGY0LCAgLy8gdGhlIGxpZ2h0IGNvbG9yIHdlJ3JlIHVzaW5nXG4gICBkYXJrOiAgICAgICAgICAjMjIyICAgLy8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbik7XG5cblxuXG4gICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yLXNlbGVjdGVkIDpyZ2IoMjU1LDE1NSw4Myk7XG4gICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.page.ts ***!
  \***************************************************************/
/*! exports provided: FirstWithTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstWithTabsPage", function() { return FirstWithTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstWithTabsPage = /** @class */ (function () {
    function FirstWithTabsPage() {
    }
    FirstWithTabsPage.prototype.ngOnInit = function () {
    };
    FirstWithTabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first-with-tabs',
            template: __webpack_require__(/*! ./first-with-tabs.page.html */ "./src/app/pages/first-with-tabs/first-with-tabs.page.html"),
            styles: [__webpack_require__(/*! ./first-with-tabs.page.scss */ "./src/app/pages/first-with-tabs/first-with-tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstWithTabsPage);
    return FirstWithTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=first-with-tabs-first-with-tabs-module.js.map