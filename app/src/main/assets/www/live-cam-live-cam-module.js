(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["live-cam-live-cam-module"],{

/***/ "./src/app/pages/live-cam/live-cam.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/live-cam/live-cam.module.ts ***!
  \***************************************************/
/*! exports provided: LiveCamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveCamPageModule", function() { return LiveCamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _live_cam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live-cam.page */ "./src/app/pages/live-cam/live-cam.page.ts");







var routes = [
    {
        path: '',
        component: _live_cam_page__WEBPACK_IMPORTED_MODULE_6__["LiveCamPage"]
    }
];
var LiveCamPageModule = /** @class */ (function () {
    function LiveCamPageModule() {
    }
    LiveCamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_live_cam_page__WEBPACK_IMPORTED_MODULE_6__["LiveCamPage"]]
        })
    ], LiveCamPageModule);
    return LiveCamPageModule;
}());



/***/ }),

/***/ "./src/app/pages/live-cam/live-cam.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/live-cam/live-cam.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Live Cam</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n<div class=\"cameraLive\">\n    Cameras are usually updated every 15minutes from 7am to 7pm.\n  </div>\n\n  <ion-card *ngFor=\"let data of cameraData\">\n    <img src={{data}}  (click)=\"openPreview(data)\">\n  </ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/live-cam/live-cam.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/live-cam/live-cam.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cameraLive {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9saXZlLWNhbS9saXZlLWNhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXZlLWNhbS9saXZlLWNhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXG4gICBibHVlOiAgICAjMzg3ZWY1LFxuICAgc2Vjb25kYXJ5OiAgIzMyZGI2NCxcbiAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICBsaWdodDogICAgICAjZjRmNGY0LCAgLy8gdGhlIGxpZ2h0IGNvbG9yIHdlJ3JlIHVzaW5nXG4gICBkYXJrOiAgICAgICAgICAjMjIyLFxuICAgb3JhbmdsZTogICAgICAgI2Y1OGMyOS8vIHRoZSBkYXJrIGNvbG9yIHdlJ3JlIHVzaW5nXG4pO1xuXG5cbi5jYW1lcmFMaXZle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICAgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/live-cam/live-cam.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/live-cam/live-cam.page.ts ***!
  \*************************************************/
/*! exports provided: LiveCamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveCamPage", function() { return LiveCamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/pages/image-modal/image-modal.page.ts");





var LiveCamPage = /** @class */ (function () {
    function LiveCamPage(shared, modalController) {
        this.shared = shared;
        this.modalController = modalController;
        this.currentColor = 'light';
    }
    LiveCamPage.prototype.ngOnInit = function () {
    };
    LiveCamPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallLiveCam.ServiceCallRequestLiveCamData().then(function (res) {
                // debugger
                _this.response = res;
                _this.cameraData = _this.response.content.livecamera;
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    LiveCamPage.prototype.openPreview = function (img) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_4__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    LiveCamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-cam',
            template: __webpack_require__(/*! ./live-cam.page.html */ "./src/app/pages/live-cam/live-cam.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./live-cam.page.scss */ "./src/app/pages/live-cam/live-cam.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], LiveCamPage);
    return LiveCamPage;
}());



/***/ })

}]);
//# sourceMappingURL=live-cam-live-cam-module.js.map