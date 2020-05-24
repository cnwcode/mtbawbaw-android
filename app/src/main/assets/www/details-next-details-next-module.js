(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-next-details-next-module"],{

/***/ "./src/app/pages/details-next/details-next.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/details-next/details-next.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailsNextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsNextPageModule", function() { return DetailsNextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_next_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-next.page */ "./src/app/pages/details-next/details-next.page.ts");







var routes = [
    {
        path: '',
        component: _details_next_page__WEBPACK_IMPORTED_MODULE_6__["DetailsNextPage"]
    }
];
var DetailsNextPageModule = /** @class */ (function () {
    function DetailsNextPageModule() {
    }
    DetailsNextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_next_page__WEBPACK_IMPORTED_MODULE_6__["DetailsNextPage"]]
        })
    ], DetailsNextPageModule);
    return DetailsNextPageModule;
}());



/***/ }),

/***/ "./src/app/pages/details-next/details-next.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/details-next/details-next.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Getting here</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n \n  <ion-card >\n      <img src={{bannerImage}}>\n      <ion-card-header>\n          <ion-card-title>{{title}}</ion-card-title>\n        </ion-card-header>\n      <ion-card-content class=\"large\" [innerHTML]=\"description\"></ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/details-next/details-next.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/details-next/details-next.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMtbmV4dC9kZXRhaWxzLW5leHQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/details-next/details-next.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/details-next/details-next.page.ts ***!
  \*********************************************************/
/*! exports provided: DetailsNextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsNextPage", function() { return DetailsNextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");




var DetailsNextPage = /** @class */ (function () {
    function DetailsNextPage(router, _element, _browser) {
        this.router = router;
        this._element = _element;
        this._browser = _browser;
        var data = this.router.getCurrentNavigation().extras.state.example;
        this.currentColor = 'light';
        this.bannerImage = data.banner_image;
        this.title = data.title;
        this.description = data.description;
        this._enableDynamicHyperlinks();
    }
    DetailsNextPage.prototype.ngOnInit = function () {
    };
    DetailsNextPage.prototype._enableDynamicHyperlinks = function () {
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
                    // event.preventDefault();
                    _this._link = event.target.href;
                    // Log values to the console and open the link within the InAppBrowser plugin
                    console.log('Name is: ' + event.target.innerText);
                    console.log('Link is: ' + _this._link);
                    if (_this._link.indexOf('tel') > -1) {
                    }
                    else {
                        event.preventDefault();
                        _this._launchInAppBrowser(encodeURI(_this._link));
                    }
                    // this._launchInAppBrowser(this._link);
                }, false);
            });
        }, 1000);
    };
    DetailsNextPage.prototype._launchInAppBrowser = function (link) {
        var opts = "location=yes,clearcache=yes,hidespinner=no";
        this._browser.create(link, '_blank', opts);
    };
    DetailsNextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-next',
            template: __webpack_require__(/*! ./details-next.page.html */ "./src/app/pages/details-next/details-next.page.html"),
            styles: [__webpack_require__(/*! ./details-next.page.scss */ "./src/app/pages/details-next/details-next.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
    ], DetailsNextPage);
    return DetailsNextPage;
}());



/***/ })

}]);
//# sourceMappingURL=details-next-details-next-module.js.map