(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facebook-redeem-facebook-redeem-module"],{

/***/ "./src/app/pages/facebook-redeem/facebook-redeem.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/facebook-redeem/facebook-redeem.module.ts ***!
  \*****************************************************************/
/*! exports provided: FacebookRedeemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookRedeemPageModule", function() { return FacebookRedeemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _facebook_redeem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facebook-redeem.page */ "./src/app/pages/facebook-redeem/facebook-redeem.page.ts");







var routes = [
    {
        path: '',
        component: _facebook_redeem_page__WEBPACK_IMPORTED_MODULE_6__["FacebookRedeemPage"]
    }
];
var FacebookRedeemPageModule = /** @class */ (function () {
    function FacebookRedeemPageModule() {
    }
    FacebookRedeemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_facebook_redeem_page__WEBPACK_IMPORTED_MODULE_6__["FacebookRedeemPage"]]
        })
    ], FacebookRedeemPageModule);
    return FacebookRedeemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/facebook-redeem/facebook-redeem.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/facebook-redeem/facebook-redeem.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Redeem Facebook Code</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"MainDev\">\n  <p class=\"PointsDev\" >MtBawBaw pts: <strong>{{points}}</strong></p>\n\n  <input class=\"inputDev\" [(ngModel)]=\"facebookCode\" type=\"text\" placeholder=\"Redeem code\">\n<div>\n  <button (click) =\"update()\"   class=\"buttonvalue\">\n      Redeem Now\n    </button>\n    </div>\n</div>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/facebook-redeem/facebook-redeem.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/facebook-redeem/facebook-redeem.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".MainDev {\n  text-align: center;\n  padding-top: 70px; }\n\n.PointsDev {\n  color: #f58c29;\n  font-size: 19px; }\n\n.inputDev {\n  border: 1px solid;\n  border-radius: 25px;\n  height: 53px;\n  width: 245px;\n  text-align: center;\n  margin-top: 20px; }\n\n.buttonvalue {\n  color: white;\n  background: #f58c29;\n  height: 45px;\n  width: 150px;\n  margin-top: 40px;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9mYWNlYm9vay1yZWRlZW0vZmFjZWJvb2stcmVkZWVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFjZWJvb2stcmVkZWVtL2ZhY2Vib29rLXJlZGVlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLk1haW5EZXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuXG4uUG9pbnRzRGV2e1xuICAgIGNvbG9yOiAjZjU4YzI5O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmlucHV0RGV2e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIHdpZHRoOiAyNDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ1dHRvbnZhbHVle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjU4YzI5O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/facebook-redeem/facebook-redeem.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/facebook-redeem/facebook-redeem.page.ts ***!
  \***************************************************************/
/*! exports provided: FacebookRedeemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookRedeemPage", function() { return FacebookRedeemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");



var FacebookRedeemPage = /** @class */ (function () {
    function FacebookRedeemPage(shared) {
        this.shared = shared;
    }
    FacebookRedeemPage.prototype.ngOnInit = function () {
        this.getPoints();
    };
    FacebookRedeemPage.prototype.getPoints = function () {
        var profile = localStorage.getItem('profile');
        this.data = JSON.parse(profile);
        this.points = this.data.content.profile.points;
        this.userid = this.data.user_id;
    };
    FacebookRedeemPage.prototype.update = function () {
        var _this = this;
        if (this.facebookCode == '' || this.facebookCode == undefined) {
            this.shared.displayNetworkUpdate('Redeem code cannot be blank');
        }
        else {
            if (navigator.onLine) {
                this.shared.ServiceCallFacebook.ServiceCallRequestFacebookCode(this.userid, this.facebookCode).then(function (res) {
                    _this.response = res;
                    // this.shared.displayNetworkUpdate(this.response.content)
                    console.log(_this.response);
                    if (_this.response.message == 'error') {
                        _this.shared.displayNetworkUpdate(_this.response.content);
                    }
                    else {
                        localStorage.setItem('profile', JSON.stringify(_this.response));
                        _this.shared.displayNetworkUpdate("Successfully Redeem");
                        _this.getPoints();
                    }
                }, function (err) {
                });
            }
            else {
                this.shared.displayNetworkUpdate('No Internet Connection');
            }
        }
    };
    FacebookRedeemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facebook-redeem',
            template: __webpack_require__(/*! ./facebook-redeem.page.html */ "./src/app/pages/facebook-redeem/facebook-redeem.page.html"),
            styles: [__webpack_require__(/*! ./facebook-redeem.page.scss */ "./src/app/pages/facebook-redeem/facebook-redeem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], FacebookRedeemPage);
    return FacebookRedeemPage;
}());



/***/ })

}]);
//# sourceMappingURL=facebook-redeem-facebook-redeem-module.js.map