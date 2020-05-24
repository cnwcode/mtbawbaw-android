(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["village-map-village-map-module"],{

/***/ "./src/app/pages/village-map/village-map.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/village-map/village-map.module.ts ***!
  \*********************************************************/
/*! exports provided: VillageMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageMapPageModule", function() { return VillageMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _village_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./village-map.page */ "./src/app/pages/village-map/village-map.page.ts");







var routes = [
    {
        path: '',
        component: _village_map_page__WEBPACK_IMPORTED_MODULE_6__["VillageMapPage"]
    }
];
var VillageMapPageModule = /** @class */ (function () {
    function VillageMapPageModule() {
    }
    VillageMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_village_map_page__WEBPACK_IMPORTED_MODULE_6__["VillageMapPage"]]
        })
    ], VillageMapPageModule);
    return VillageMapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/village-map/village-map.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/village-map/village-map.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar  [color]=\"currentColor\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Village Map</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n    <!-- <iframe src=\"https://research.google.com/pubs/archive/44678.pdf\" width=\"100%\" height=\"100%\"></iframe>  -->\n\n    <!-- <iframe  width=\"100%\" height=\"100%\" src=\"{{winterMap}}\"  ></iframe> -->\n\n\n    <iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(winterMap)' frameborder=\"0\"\n    webkitallowfullscreen mozallowfullscreen allowfullscreen>\n</iframe>\n   \n    <!-- <img src={{winterMap}}  class=\"villageMap\" (click)=\"openPreview()\"> -->\n  </ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/village-map/village-map.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/village-map/village-map.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".villageMap {\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy92aWxsYWdlLW1hcC92aWxsYWdlLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRyxZQUFZO0VBQ1gsc0JBQW1CO0tBQW5CLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlsbGFnZS1tYXAvdmlsbGFnZS1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxuICAgYmx1ZTogICAgIzM4N2VmNSxcbiAgIHNlY29uZGFyeTogICMzMmRiNjQsXG4gICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCwgIC8vIHRoZSBsaWdodCBjb2xvciB3ZSdyZSB1c2luZ1xuICAgZGFyazogICAgICAgICAgIzIyMixcbiAgIG9yYW5nbGU6ICAgICAgICNmNThjMjkvLyB0aGUgZGFyayBjb2xvciB3ZSdyZSB1c2luZ1xuKTtcblxuLnZpbGxhZ2VNYXB7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/village-map/village-map.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/village-map/village-map.page.ts ***!
  \*******************************************************/
/*! exports provided: VillageMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageMapPage", function() { return VillageMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/pages/image-modal/image-modal.page.ts");








var VillageMapPage = /** @class */ (function () {
    function VillageMapPage(modalController, document, router, shared, sanitizer) {
        this.modalController = modalController;
        this.document = document;
        this.router = router;
        this.shared = shared;
        this.sanitizer = sanitizer;
        this.pdfSrc = '';
        this.currentColor = 'light';
        this.theme = this.router.getCurrentNavigation().extras.state.theme;
    }
    VillageMapPage.prototype.ngOnInit = function () {
    };
    VillageMapPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallVillage.ServiceCallRequestVillage().then(function (res) {
                // debugger
                _this.VillageMap = res;
                _this.data = _this.VillageMap.content.posts[0];
                if (_this.theme == 'winter') {
                    _this.winterMap = _this.data.wmpdf_files[0];
                    console.log(_this.winterMap);
                }
                else {
                    _this.winterMap = _this.data.smpdf_files[0];
                    console.log(_this.winterMap);
                }
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    // getTrustedUrl(url:any){ 
    //   this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //  }
    VillageMapPage.prototype.onLoad = function () {
        //  this.shared.hideLoading()
    };
    VillageMapPage.prototype.openPreview = function () {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__["ImageModalPage"],
            componentProps: {
                img: this.winterMap
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    VillageMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-village-map',
            template: __webpack_require__(/*! ./village-map.page.html */ "./src/app/pages/village-map/village-map.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            styles: [__webpack_require__(/*! ./village-map.page.scss */ "./src/app/pages/village-map/village-map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["DocumentViewer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], VillageMapPage);
    return VillageMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=village-map-village-map-module.js.map