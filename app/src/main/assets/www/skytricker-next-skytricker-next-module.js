(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skytricker-next-skytricker-next-module"],{

/***/ "./src/app/pages/skytricker-next/skytricker-next.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/skytricker-next/skytricker-next.module.ts ***!
  \*****************************************************************/
/*! exports provided: SkytrickerNextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkytrickerNextPageModule", function() { return SkytrickerNextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _skytricker_next_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skytricker-next.page */ "./src/app/pages/skytricker-next/skytricker-next.page.ts");







var routes = [
    {
        path: '',
        component: _skytricker_next_page__WEBPACK_IMPORTED_MODULE_6__["SkytrickerNextPage"]
    }
];
var SkytrickerNextPageModule = /** @class */ (function () {
    function SkytrickerNextPageModule() {
    }
    SkytrickerNextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_skytricker_next_page__WEBPACK_IMPORTED_MODULE_6__["SkytrickerNextPage"]]
        })
    ], SkytrickerNextPageModule);
    return SkytrickerNextPageModule;
}());



/***/ }),

/***/ "./src/app/pages/skytricker-next/skytricker-next.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/skytricker-next/skytricker-next.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar   [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>STATS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-list-header>\n            STATS\n          </ion-list-header>\n      <ion-item >\n        <ion-icon slot=\"start\" ios=\"ios-body\" md=\"md-body\"></ion-icon>\n        <ion-label class=\"labelLeft\" slot=\"end\">Distance:<br>{{distance}}km</ion-label>\n      </ion-item>\n\n      <ion-item >\n          <ion-icon slot=\"start\" ios=\"ios-speedometer\" md=\"md-speedometer\"></ion-icon>\n          <ion-label class=\"labelLeft\" slot=\"end\">Average Speed:<br>{{speed}}km/h</ion-label>\n        </ion-item>\n    \n\n    <ion-item >\n        <ion-icon slot=\"start\"  ios=\"ios-time\" md=\"md-time\"></ion-icon>\n        <ion-label class=\"labelLeft\" slot=\"end\">Total Time:<br>{{time}}</ion-label>\n      </ion-item>\n  </ion-list>\n\n\n  <div #map id=\"map\" class=\"geight\"></div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/skytricker-next/skytricker-next.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/skytricker-next/skytricker-next.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".geight {\n  height: 65%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9za3l0cmlja2VyLW5leHQvc2t5dHJpY2tlci1uZXh0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQztFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NreXRyaWNrZXItbmV4dC9za3l0cmlja2VyLW5leHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxuICAgIGJsdWU6ICAgICMzODdlZjUsXG4gICAgc2Vjb25kYXJ5OiAgIzMyZGI2NCxcbiAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgICBkYXJrOiAgICAgICAgICAjMjIyLFxuICAgIG9yYW5nbGU6ICAgICAgICNmNThjMjkvLyB0aGUgZGFyayBjb2xvciB3ZSdyZSB1c2luZ1xuICk7XG4gXG5cbiAuZ2VpZ2h0e1xuICAgICBoZWlnaHQ6IDY1JTtcbiB9Il19 */"

/***/ }),

/***/ "./src/app/pages/skytricker-next/skytricker-next.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/skytricker-next/skytricker-next.page.ts ***!
  \***************************************************************/
/*! exports provided: SkytrickerNextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkytrickerNextPage", function() { return SkytrickerNextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SkytrickerNextPage = /** @class */ (function () {
    function SkytrickerNextPage(geolocation) {
        this.geolocation = geolocation;
        this.trackedRoute = [];
        this.currentMapTrack = null;
        this.currentColor = 'light';
        this.distance = localStorage.getItem('distance');
        this.speed = localStorage.getItem('Average Speed');
        this.time = localStorage.getItem('TotalTime');
        this.trackedRoute = JSON.parse(localStorage.getItem('trackedRoute'));
    }
    SkytrickerNextPage.prototype.ngOnInit = function () {
        this.startMapVal();
    };
    SkytrickerNextPage.prototype.redrawPath = function (path) {
        if (this.currentMapTrack) {
            this.currentMapTrack.setMap(null);
        }
        if (path.length > 1) {
            this.currentMapTrack = new google.maps.Polyline({
                path: path,
                geodesic: true,
                strokeColor: '#f58c29',
                strokeOpacity: 1.0,
                strokeWeight: 7
            });
            this.currentMapTrack.setMap(this.map);
        }
    };
    SkytrickerNextPage.prototype.startMapVal = function () {
        var _this = this;
        var posMaceio = { lat: -9.616139, lng: -35.817239 };
        var map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 18,
            center: posMaceio,
            mapTypeId: 'roadmap'
        });
        var infoWindow = new google.maps.InfoWindow({ map: map });
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log(pos);
                //start position
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map
                });
                map.setCenter(pos);
                _this.map = map;
                _this.redrawPath(_this.trackedRoute);
                _this.draw();
            }, function () {
                _this.handleLocationError(true, infoWindow, map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, infoWindow, map.getCenter());
        }
    };
    SkytrickerNextPage.prototype.draw = function () {
        var _this = this;
        this.positionSubscription = this.geolocation.watchPosition()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (p) { return p.coords !== undefined; }) //Filter Out Errors
        )
            .subscribe(function (data) {
            setTimeout(function () {
                _this.redrawPath(_this.trackedRoute);
            }, 3000);
        });
    };
    SkytrickerNextPage.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SkytrickerNextPage.prototype, "mapElement", void 0);
    SkytrickerNextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skytricker-next',
            template: __webpack_require__(/*! ./skytricker-next.page.html */ "./src/app/pages/skytricker-next/skytricker-next.page.html"),
            styles: [__webpack_require__(/*! ./skytricker-next.page.scss */ "./src/app/pages/skytricker-next/skytricker-next.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], SkytrickerNextPage);
    return SkytrickerNextPage;
}());



/***/ })

}]);
//# sourceMappingURL=skytricker-next-skytricker-next-module.js.map