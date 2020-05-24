(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./src/app/pages/offers/offers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.module.ts ***!
  \***********************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/pages/offers/offers.page.ts");







var routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]
    }
];
var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
        })
    ], OffersPageModule);
    return OffersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/offers/offers.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"container\">\n\n        <div *ngFor=\"let items of response\" [ngClass]=\"{'Aplha': userPoints <= items.points}\" class=\"control-group\">\n\n              <div style=\"padding: 10px;box-sizing: border-box;width: 100%;\">\n\n     <div style=\"width: 73%;display: inline-block;vertical-align: top;margin-top: 15px;\"><h2 style=\"font-size: 14px;text-align: left;margin: 0;color:#5b5959;\">{{items.title}}</h2>\n      <span style=\"font-size: 14px;text-align: left;margin: 0;color: #AAA7A4;;\">{{items.points}} Points</span>\n\n      </div>\n     <div style=\"width: 25%;display: inline-block;\"><img src={{items.banner_image}} class=\"offer_img\"/></div>\n    </div>\n\n\n\n\n    <div class=\"offer_bottom_section\">\n     <a (click) =\"Redeem(items)\" class=\"redeem_code\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i> Redeem Now</a>\n     <a (click) =\"Generate(items)\"  class=\"generate_code\"><i class=\"fa fa-ticket\" aria-hidden=\"true\"></i> Generate Code</a>\n    </div>\n        </div>\n \n \n  \n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/offers/offers.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  margin: 0 auto;\n  padding: 10px;\n  box-sizing: border-box; }\n\n.control-group {\n  box-shadow: 0px 1px 5px 1px rgba(176, 175, 175, 0.75);\n  background: #fff;\n  width: 100%;\n  border-radius: 2px;\n  margin-bottom: 12px; }\n\n.offer_img {\n  width: 100%;\n  height: 70px;\n  width: 70px;\n  border-radius: 50%; }\n\n.offer_bottom_section {\n  padding: 10px;\n  border-top: 1px solid #e1dfdf; }\n\n.redeem_code, .generate_code {\n  color: #F58C29;\n  padding: 5px;\n  cursor: pointer;\n  font-size: 15px; }\n\n.Aplha {\n  opacity: 0.3;\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUUxQjtFQUlFLHFEQUFxRDtFQUNyRCxnQkFBZ0I7RUFBQyxXQUFXO0VBQUMsa0JBQWtCO0VBQUMsbUJBQW1CLEVBQUE7O0FBRXJFO0VBQVcsV0FBVztFQUFDLFlBQVk7RUFBQyxXQUFXO0VBQUMsa0JBQWtCLEVBQUE7O0FBRWhFO0VBQXNCLGFBQWE7RUFDbkMsNkJBQTZCLEVBQUE7O0FBRTdCO0VBQTZCLGNBQWE7RUFBQyxZQUFZO0VBQUMsZUFBYztFQUFDLGVBQWUsRUFBQTs7QUFFdEY7RUFDSSxZQUFZO0VBQ1osb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcbiAgIGJsdWU6ICAgICMzODdlZjUsXG4gICBzZWNvbmRhcnk6ICAjMzJkYjY0LFxuICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgIGRhcms6ICAgICAgICAgICMyMjIsXG4gICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbik7XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jb250cm9sLWdyb3Vwe1xuXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMXB4IHJnYmEoMTc2LCAxNzUsIDE3NSwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCA1cHggMXB4IHJnYmEoMTc2LCAxNzUsIDE3NSwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDFweCByZ2JhKDE3NiwgMTc1LCAxNzUsIDAuNzUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO3dpZHRoOiAxMDAlO2JvcmRlci1yYWRpdXM6IDJweDttYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm9mZmVyX2ltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6IDcwcHg7d2lkdGg6IDcwcHg7Ym9yZGVyLXJhZGl1czogNTAlO31cblxuICAub2ZmZXJfYm90dG9tX3NlY3Rpb257cGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWRmZGY7fVxuICBcbiAgLnJlZGVlbV9jb2RlLCAuZ2VuZXJhdGVfY29kZXtjb2xvcjojRjU4QzI5O3BhZGRpbmc6IDVweDtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6IDE1cHg7fVxuXG4gIC5BcGxoYXtcbiAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/offers/offers.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/offers/offers.page.ts ***!
  \*********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var OffersPage = /** @class */ (function () {
    function OffersPage(alertController, shared) {
        this.alertController = alertController;
        this.shared = shared;
        this.currentColor = 'light';
    }
    OffersPage.prototype.ngOnInit = function () {
    };
    OffersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCalloffers.ServiceCallRequestoffersData().then(function (res) {
                _this.response = res;
                _this.response = _this.response.content.offers;
                var profile = localStorage.getItem('profile');
                _this.data = JSON.parse(profile);
                _this.userPoints = parseInt(_this.data.content.profile.points);
                _this.userId = _this.data.content.profile.user_id;
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    OffersPage.prototype.Redeem = function (items) {
        this.presentAlertConfirm(items);
    };
    OffersPage.prototype.presentAlertConfirm = function (items) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            message: 'Please redeem this offer only in front of the shopkeeper or ask the shopkeeper to redeem this offer for you',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Redeem Now',
                                    handler: function () {
                                        if (navigator.onLine) {
                                            _this.shared.ServiceCallRedeem.ServiceCallRequestRedeemCodeData(_this.userId, items.id).then(function (res) {
                                                _this.responseValue = res;
                                                if (_this.responseValue.message == "success") {
                                                    localStorage.setItem('profile', JSON.stringify(_this.responseValue));
                                                    _this.shared.showAlert("Offer has been successfully redeemed", "Congratulations");
                                                }
                                                else {
                                                    _this.shared.showAlert(_this.responseValue.content, "Alert");
                                                }
                                            }, function (err) {
                                            });
                                        }
                                        else {
                                            _this.shared.displayNetworkUpdate('No Internet Connection');
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OffersPage.prototype.Generate = function (items) {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallGenerateCode.ServiceCallRequestGenerateCodeData(this.userId, items.id).then(function (res) {
                _this.responseValue = res;
                _this.shared.showAlert(_this.responseValue.content, "Offer Redeem Code");
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.page.html */ "./src/app/pages/offers/offers.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./offers.page.scss */ "./src/app/pages/offers/offers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], OffersPage);
    return OffersPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offers-module.js.map