(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qa-scanner-qa-scanner-module"],{

/***/ "./src/app/pages/qa-scanner/qa-scanner.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/qa-scanner/qa-scanner.module.ts ***!
  \*******************************************************/
/*! exports provided: QaScannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaScannerPageModule", function() { return QaScannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qa_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qa-scanner.page */ "./src/app/pages/qa-scanner/qa-scanner.page.ts");







var routes = [
    {
        path: '',
        component: _qa_scanner_page__WEBPACK_IMPORTED_MODULE_6__["QaScannerPage"]
    }
];
var QaScannerPageModule = /** @class */ (function () {
    function QaScannerPageModule() {
    }
    QaScannerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_qa_scanner_page__WEBPACK_IMPORTED_MODULE_6__["QaScannerPage"]]
        })
    ], QaScannerPageModule);
    return QaScannerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/qa-scanner/qa-scanner.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/qa-scanner/qa-scanner.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>QRScanner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/qa-scanner/qa-scanner.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/qa-scanner/qa-scanner.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: none transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9xYS1zY2FubmVyL3FhLXNjYW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3FhLXNjYW5uZXIvcWEtc2Nhbm5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/qa-scanner/qa-scanner.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/qa-scanner/qa-scanner.page.ts ***!
  \*****************************************************/
/*! exports provided: QaScannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaScannerPage", function() { return QaScannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var QaScannerPage = /** @class */ (function () {
    function QaScannerPage(router, alertController, shared, qrScanner) {
        this.router = router;
        this.alertController = alertController;
        this.shared = shared;
        this.qrScanner = qrScanner;
        var profile = localStorage.getItem('profile');
        this.data = JSON.parse(profile);
        this.userId = this.data.content.profile.user_id;
    }
    QaScannerPage.prototype.ngOnInit = function () {
    };
    QaScannerPage.prototype.ionViewWillLeave = function () {
        this.qrScanner.destroy();
    };
    QaScannerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                console.log("coming");
                // start scanning
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.ServiceCall(text);
                    _this.scanSub.unsubscribe();
                    _this.qrScanner.destroy(); // stop scanning
                });
                _this.qrScanner.show();
            }
            else if (status.denied) {
                // camera permission was permanently denied
                _this.qrScanner.openSettings();
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) {
            _this.shared.displayNetworkUpdate(e);
        });
    };
    QaScannerPage.prototype.ServiceCall = function (text) {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallUsePoints.ServiceCallRequestUsePointsData(this.userId, text).then(function (res) {
                _this.response = res;
                if (_this.response.message == 'error') {
                    // this.shared.displayNetworkUpdate(this.response.content)
                    _this.showAlerts(_this.response.content, "Alert");
                }
                else {
                    // this.shared.displayNetworkUpdate('Successfully updated')
                    localStorage.setItem('profile', JSON.stringify(_this.response));
                    _this.showAlerts("Successfully redeemed", "Alert");
                }
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    QaScannerPage.prototype.showAlerts = function (connectionState, headerVal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: headerVal,
                            subHeader: '',
                            message: connectionState,
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['/menu/first/tabs/tab1']);
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
    QaScannerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qa-scanner',
            template: __webpack_require__(/*! ./qa-scanner.page.html */ "./src/app/pages/qa-scanner/qa-scanner.page.html"),
            styles: [__webpack_require__(/*! ./qa-scanner.page.scss */ "./src/app/pages/qa-scanner/qa-scanner.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"]])
    ], QaScannerPage);
    return QaScannerPage;
}());



/***/ })

}]);
//# sourceMappingURL=qa-scanner-qa-scanner-module.js.map