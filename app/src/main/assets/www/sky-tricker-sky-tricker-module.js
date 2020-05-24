(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sky-tricker-sky-tricker-module"],{

/***/ "./src/app/pages/sky-tricker/sky-tricker.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sky-tricker/sky-tricker.module.ts ***!
  \*********************************************************/
/*! exports provided: SkyTrickerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkyTrickerPageModule", function() { return SkyTrickerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sky_tricker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sky-tricker.page */ "./src/app/pages/sky-tricker/sky-tricker.page.ts");







var routes = [
    {
        path: '',
        component: _sky_tricker_page__WEBPACK_IMPORTED_MODULE_6__["SkyTrickerPage"]
    }
];
var SkyTrickerPageModule = /** @class */ (function () {
    function SkyTrickerPageModule() {
    }
    SkyTrickerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sky_tricker_page__WEBPACK_IMPORTED_MODULE_6__["SkyTrickerPage"]]
        })
    ], SkyTrickerPageModule);
    return SkyTrickerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sky-tricker/sky-tricker.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/sky-tricker/sky-tricker.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons  (click)=\"ionicBckClick()\" slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Ski Tracker</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list (click)=\"skyTrcikerClick()\">\n        <ion-item>\n          Important Tips on Tracking\n        </ion-item>\n      </ion-list>\n\n      <ion-list class=\"ionitem\">\n          <ion-item>\n            Tracking\n            <ion-toggle color=\"dark\"  (ionChange)=\"update($event)\" slot=\"end\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list class=\"ionitem\">\n          <ion-item>\n            Timer\n            <div slot=\"end\">   {{time}}</div>\n           \n          </ion-item>\n        </ion-list>\n\n      <div class=\"HeadrDiv\">\n    View and Share Logs \n        </div>\n\n\n        <ion-list>\n            <ion-item>\n           <div> \n             Distance: {{km}} km\n           </div>\n              </ion-item>\n              \n          </ion-list>\n\n\n          <div #map id=\"map\"></div>\n\n          \n</ion-content> -->\n\n\n\n<div class=\"container\">\n  <div id=\"content\" style=\"\">\n     <div class=\"content-top-section\">\n <div class=\"live-tracking cts\"><i class=\"fa fa-map-marker\"></i>Live Tracking</div>\n <div class=\"live-recording cts hide\">Recording<div class=\"timer\">00:00:00</div></div>\n <div class=\"live-stats cts toggle-stats hide\">Stats</div>\n</div>\n     <div class=\"content-middle-section\">\n <div id=\"map\" class=\"map-section\"></div>\t\t\t\t\n <div id=\"stats\" class=\"live-stats-section hide\">\n   <div class=\"lss-distance lss-statistics-cmn\">\t\t\t\t\t\t\n     <div id=\"owl-carousel-distance\" class=\"owl-carousel owl-theme\">\n       <div class=\"item\"><h2>DISTANCE</h2><div class=\"lss-value\">0.00</div><div class=\"lss-unit\">km</div></div>\n     </div>\n   </div>\n   <div class=\"lss-speed lss-statistics-cmn\">\t\t\t\t\t\t\n     <div id=\"owl-carousel-speed\" class=\"owl-carousel owl-theme\">\n       <div class=\"item\"><h2>AVERAGE SPEED</h2><div class=\"lss-value\">0.0</div><div class=\"lss-unit\">km/h</div></div>\n       <div class=\"item\"><h2>CURRENT SPEED</h2><div class=\"lss-value\">0.0</div><div class=\"lss-unit\">km/h</div></div>\n       <div class=\"item\"><h2>AVERAGE PACE</h2><div class=\"lss-value\">00:00</div><div class=\"lss-unit\">min/km</div></div>\n     </div>\n     \n   </div>\n   <div class=\"lss-time lss-statistics-cmn\">\n     <div id=\"owl-carousel-time\" class=\"owl-carousel owl-theme\">\n       <div class=\"item\"><h2>MOVING TIME</h2><div class=\"lss-value\">00:00:00</div><div class=\"lss-unit\"></div></div>\n       <div class=\"item\"><h2>RECORDING TIME</h2><div class=\"lss-value\">00:00:00</div><div class=\"lss-unit\"></div></div>\n       <div class=\"item\"><h2>TOTAL TIME</h2><div class=\"lss-value\">00:00:00</div><div class=\"lss-unit\"></div></div>\n     </div>\n     \n   </div>\n   <div class=\"lss-elevation lss-statistics-cmn\">\t\t\t\t\t\t\n     <div id=\"owl-carousel-elevation\" class=\"owl-carousel owl-theme\">\n       <div class=\"item\"><h2>ELEVATION GAIN</h2><div class=\"lss-value\">0</div><div class=\"lss-unit\">m</div></div>\n       <div class=\"item\"><h2>ELEVATION LOSS</h2><div class=\"lss-value\">0</div><div class=\"lss-unit\">m</div></div>\n       <div class=\"item\"><h2>CURRENT ELEVATION</h2><div class=\"lss-value\">0</div><div class=\"lss-unit\">m</div></div>\t\t\n     </div>\n     \n   </div>\n </div>\t\t\t\t\n</div>\n     <div class=\"content-bottom-section\">\n <a href=\"javascript:void(0);\" class=\"btn-sec start-recording startButton\">\n             <i class=\"fa fa-circle\"></i>Start Recording\n </a>\n</div>\n     <div class=\"content-sticky-section\">\n <div class=\"play-pause\"><span class=\"resumeButton slideleft\">Resume</span><span class=\"stopButton slideleft\">Finish</span><span class=\"pauseButton slideleft\"><i class=\"fa fa-square\"></i></span></div>\n</div>\t\t\t\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/sky-tricker/sky-tricker.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/sky-tricker/sky-tricker.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".HeadrDiv {\n  width: 100%;\n  height: 40px;\n  background: #f58c29;\n  text-align: center;\n  padding-top: 7px;\n  font-size: 18px;\n  font-weight: 900;\n  color: white; }\n\n#map {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  margin: 0;\n  background-color: #221F21; }\n\n.container {\n  width: 300px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  overflow: hidden; }\n\n#content {\n  padding: 0px;\n  text-align: center;\n  background-color: #fff; }\n\n.container .content-top-section {\n  background: #000;\n  color: #fff;\n  float: left;\n  width: 100%;\n  padding: 4px 5px;\n  box-sizing: border-box;\n  height: 41px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.container .content-top-section .cts {\n  width: 38%;\n  float: left;\n  box-sizing: border-box; }\n\n.container .content-top-section .cts .fa {\n  padding: 0px 3px 0 0; }\n\n.container .content-top-section .live-tracking {\n  background: #f58c29;\n  border-radius: 10px;\n  padding: 5px 4px;\n  font-size: 12px;\n  margin: 5px 0 0 0;\n  width: 34%; }\n\n.container .content-top-section .live-recording {\n  padding: 1px 4px;\n  font-size: 12px;\n  text-transform: uppercase; }\n\n.container .content-top-section .live-recording .timer {\n  width: 100%;\n  display: inline-block;\n  font-size: 18px;\n  line-height: 18px;\n  font-weight: bold; }\n\n.container .content-top-section .live-stats {\n  background: #f58c29;\n  border-radius: 10px;\n  padding: 5px 4px;\n  width: 28%;\n  margin: 5px 0 0 0;\n  float: right;\n  font-size: 14px; }\n\n.container .content-middle-section {\n  height: 450px;\n  background: #fff;\n  float: left;\n  width: 100%;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.container .content-middle-section .map-section {\n  width: 100%;\n  height: 100%;\n  background: #000; }\n\n.container .content-middle-section .live-stats-section {\n  height: auto;\n  background: #fff; }\n\n.container .content-middle-section .live-stats-section .lss-statistics-cmn .item h2 {\n  margin: 9px 0 6px 0;\n  font-size: 15px;\n  font-weight: normal;\n  color: #333; }\n\n.container .content-middle-section .live-stats-section .lss-statistics-cmn .item .lss-value {\n  display: inline-block;\n  font-size: 60px;\n  font-weight: bold;\n  line-height: 60px; }\n\n.container .content-middle-section .live-stats-section .lss-statistics-cmn .item .lss-unit {\n  display: inline-block;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 20px; }\n\n.container .content-middle-section .live-stats-section .lss-time .item .lss-value {\n  font-size: 48px;\n  line-height: 50px; }\n\n.container .content-middle-section .live-stats-section .lss-statistics-cmn .owl-controls .owl-page span {\n  border-radius: 1px;\n  width: 22px;\n  height: 3px;\n  margin: 0 3px;\n  background: #869791; }\n\n.container .content-middle-section .live-stats-section .lss-statistics-cmn .owl-controls .owl-page.active span {\n  background: #f58c29; }\n\n.container .content-bottom-section {\n  background: #000;\n  float: left;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-transform: translate(0%, 0%);\n  transform: translate(0%, 0%);\n  z-index: 99; }\n\n.container .content-bottom-section.slideleft {\n  -webkit-transform: translate(-100%, 0%);\n  transform: translate(-100%, 0%); }\n\n.container .content-bottom-section a.start-recording {\n  background: #f58c29;\n  border-radius: 30px;\n  padding: 12px 25px;\n  font-size: 20px;\n  margin: 5px 0 5px 0;\n  color: #fff;\n  width: 95%;\n  text-decoration: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: bold;\n  position: relative; }\n\n.container .content-bottom-section a.start-recording .fa {\n  color: #f90c20;\n  position: absolute;\n  left: 35px;\n  top: 14px; }\n\n.container .content-bottom-section a.start-recording:hover {\n  background-color: #f58c29;\n  opacity: 0.82; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block; }\n\n.container .content-sticky-section {\n  position: fixed;\n  bottom: 35px;\n  text-align: left; }\n\n.container .content-sticky-section span {\n  color: #fff;\n  display: inline-block;\n  padding: 16px 28px;\n  box-sizing: border-box;\n  font-size: 22px;\n  font-weight: bold;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-transform: translate(0%, 0%);\n  transform: translate(0%, 0%);\n  cursor: pointer; }\n\n.container .content-sticky-section span.slideleft {\n  -webkit-transform: translate(-209%, 0%);\n  transform: translate(-209%, 0%); }\n\n.container .content-sticky-section .resumeButton {\n  background: #4C8C2B; }\n\n.container .content-sticky-section .stopButton {\n  background: #F90721;\n  border-radius: 0 30px 30px 0;\n  padding: 16px 31px; }\n\n.container .content-sticky-section .pauseButton {\n  background: #fff;\n  border-radius: 0 30px 30px 0;\n  padding: 16px 18px 16px 14px;\n  position: absolute;\n  left: 0;\n  line-height: 30px;\n  height: 55px; }\n\n.container .content-sticky-section .pauseButton.slideleft {\n  -webkit-transform: translate(-100%, 0%);\n  transform: translate(-100%, 0%); }\n\n.container .content-sticky-section .pauseButton.black-pause {\n  background: #333; }\n\n.container .content-sticky-section .pauseButton .fa {\n  color: #f90c20; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9za3ktdHJpY2tlci9za3ktdHJpY2tlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0M7RUFDRyxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQVNmO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFhZjtFQUFLLFNBQVE7RUFBQyx5QkFBeUIsRUFBQTs7QUFDdkM7RUFBVyxZQUFXO0VBQUMsa0JBQWtCO0VBQUMsUUFBTztFQUFDLFNBQVM7RUFBc0Msd0NBQXVDO0VBQUMsZ0NBQStCO0VBQUMsZ0JBQWUsRUFBQTs7QUFDeEw7RUFBUyxZQUFXO0VBQUMsa0JBQWtCO0VBQUMsc0JBQXNCLEVBQUE7O0FBQzlEO0VBQWdDLGdCQUFnQjtFQUFDLFdBQVc7RUFBQyxXQUFXO0VBQUMsV0FBVztFQUFDLGdCQUFnQjtFQUFDLHNCQUFzQjtFQUFDLFlBQVc7RUFBQyxpQ0FBd0I7RUFBeEIseUJBQXdCLEVBQUE7O0FBQ2pLO0VBQXFDLFVBQVM7RUFBQyxXQUFXO0VBQUMsc0JBQXNCLEVBQUE7O0FBQ2pGO0VBQXlDLG9CQUFvQixFQUFBOztBQUM3RDtFQUErQyxtQkFBbUI7RUFBQyxtQkFBbUI7RUFBQyxnQkFBZ0I7RUFBQyxlQUFlO0VBQUMsaUJBQWlCO0VBQUMsVUFBVSxFQUFBOztBQUNwSjtFQUFnRCxnQkFBZ0I7RUFBQyxlQUFlO0VBQUMseUJBQXlCLEVBQUE7O0FBQzFHO0VBQXVELFdBQVc7RUFBQyxxQkFBcUI7RUFBQyxlQUFlO0VBQUMsaUJBQWdCO0VBQUMsaUJBQWlCLEVBQUE7O0FBQzNJO0VBQTRDLG1CQUFrQjtFQUFDLG1CQUFrQjtFQUFDLGdCQUFlO0VBQUMsVUFBVTtFQUFDLGlCQUFpQjtFQUFDLFlBQVk7RUFBQyxlQUFlLEVBQUE7O0FBRTNKO0VBQW1DLGFBQVk7RUFBQyxnQkFBZTtFQUFDLFdBQVU7RUFBQyxXQUFVO0VBQUMsaUNBQXdCO0VBQXhCLHlCQUF3QixFQUFBOztBQUM5RztFQUFnRCxXQUFVO0VBQUMsWUFBVztFQUFDLGdCQUFlLEVBQUE7O0FBQ3RGO0VBQXVELFlBQVc7RUFBQyxnQkFBZSxFQUFBOztBQUVsRjtFQUFvRixtQkFBa0I7RUFBQyxlQUFlO0VBQUMsbUJBQWtCO0VBQUMsV0FBVSxFQUFBOztBQUNwSjtFQUE0RixxQkFBb0I7RUFBQyxlQUFjO0VBQUMsaUJBQWdCO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ2xLO0VBQTJGLHFCQUFvQjtFQUFDLGVBQWM7RUFBQyxpQkFBZ0I7RUFBQyxpQkFBZ0IsRUFBQTs7QUFDaEs7RUFBa0YsZUFBYztFQUFDLGlCQUFnQixFQUFBOztBQUdqSDtFQUF3RyxrQkFBaUI7RUFBQyxXQUFVO0VBQUMsV0FBVTtFQUFDLGFBQVk7RUFBQyxtQkFBa0IsRUFBQTs7QUFFL0s7RUFBK0csbUJBQWtCLEVBQUE7O0FBRWpJO0VBQW1DLGdCQUFlO0VBQUMsV0FBVTtFQUFDLFdBQVU7RUFBQyxrQkFBa0I7RUFBQyxTQUFTO0VBQStCLGlDQUFnQztFQUFDLHlCQUF3QjtFQUFtQyxvQ0FBb0M7RUFBQyw0QkFBNEI7RUFBQyxXQUFXLEVBQUE7O0FBQzdTO0VBQWtGLHVDQUF1QztFQUFDLCtCQUErQixFQUFBOztBQUN6SjtFQUFxRCxtQkFBa0I7RUFBQyxtQkFBa0I7RUFBQyxrQkFBaUI7RUFBQyxlQUFjO0VBQUMsbUJBQWtCO0VBQUMsV0FBVTtFQUFDLFVBQVM7RUFBQyxxQkFBb0I7RUFBQyxzQkFBcUI7RUFBQyxlQUFjO0VBQUMscUJBQXFCO0VBQUMsaUJBQWlCO0VBQUMsa0JBQWlCLEVBQUE7O0FBQ3ZSO0VBQXlELGNBQWE7RUFBQyxrQkFBa0I7RUFBQyxVQUFTO0VBQUMsU0FBUSxFQUFBOztBQUM1RztFQUEyRCx5QkFBd0I7RUFBQyxhQUFZLEVBQUE7O0FBQ2hHO0VBQU0sd0JBQXVCLEVBQUE7O0FBQzdCO0VBQU0sY0FBYSxFQUFBOztBQUVuQjtFQUFtQyxlQUFjO0VBQUMsWUFBVztFQUFDLGdCQUFlLEVBQUE7O0FBQzdFO0VBQXdDLFdBQVc7RUFBQyxxQkFBb0I7RUFBQyxrQkFBaUI7RUFBQyxzQkFBcUI7RUFBQyxlQUFjO0VBQUMsaUJBQWdCO0VBQStCLGlDQUFnQztFQUFDLHlCQUF3QjtFQUFtQyxvQ0FBb0M7RUFBQyw0QkFBNEI7RUFBQyxlQUFjLEVBQUE7O0FBQzNWO0VBQXVGLHVDQUF1QztFQUFDLCtCQUErQixFQUFBOztBQUM5SjtFQUFpRCxtQkFBa0IsRUFBQTs7QUFDbkU7RUFBK0MsbUJBQWtCO0VBQUMsNEJBQTJCO0VBQUMsa0JBQWlCLEVBQUE7O0FBQy9HO0VBQWdELGdCQUFlO0VBQUMsNEJBQTJCO0VBQUMsNEJBQTJCO0VBQUMsa0JBQWtCO0VBQUMsT0FBTztFQUFDLGlCQUFnQjtFQUFDLFlBQVcsRUFBQTs7QUFDL0s7RUFBK0YsdUNBQXVDO0VBQUMsK0JBQStCLEVBQUE7O0FBQ3RLO0VBQTRELGdCQUFlLEVBQUE7O0FBQzNFO0VBQW9ELGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NreS10cmlja2VyL3NreS10cmlja2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcbiAgICBibHVlOiAgICAjMzg3ZWY1LFxuICAgIHNlY29uZGFyeTogICMzMmRiNjQsXG4gICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICBsaWdodDogICAgICAjZjRmNGY0LCAgLy8gdGhlIGxpZ2h0IGNvbG9yIHdlJ3JlIHVzaW5nXG4gICAgZGFyazogICAgICAgICAgIzIyMixcbiAgICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbiApO1xuXG4gLkhlYWRyRGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjU4YzI5OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuXG5cbiAuaW9uaXRlbXtcbiAgICAkbGlzdC1pb3MtbWFyZ2luLWJvdHRvbTowcHg7XG4gfVxuXG4gLy9hbmRyb2lkXG4gI21hcCB7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDogMTAwJTtcbiB9XG5cbiAvL2lvc1xuLy8gICNtYXAge1xuLy8gICAgd2lkdGg6IDEwMCU7XG4vLyAgICBoZWlnaHQ6IDgwJTtcbi8vICB9XG5cblxuXG5cblxuYm9keXttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiAjMjIxRjIxO31cbi5jb250YWluZXJ7d2lkdGg6MzAwcHg7cG9zaXRpb246IGFic29sdXRlO3RvcDo1MCU7bGVmdDogNTAlOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtvdmVyZmxvdzpoaWRkZW47fVxuI2NvbnRlbnR7cGFkZGluZzowcHg7dGV4dC1hbGlnbjogY2VudGVyO2JhY2tncm91bmQtY29sb3I6ICNmZmY7fVxuLmNvbnRhaW5lciAuY29udGVudC10b3Atc2VjdGlvbntiYWNrZ3JvdW5kOiAjMDAwO2NvbG9yOiAjZmZmO2Zsb2F0OiBsZWZ0O3dpZHRoOiAxMDAlO3BhZGRpbmc6IDRweCA1cHg7Ym94LXNpemluZzogYm9yZGVyLWJveDtoZWlnaHQ6NDFweDt0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7fVxuLmNvbnRhaW5lciAuY29udGVudC10b3Atc2VjdGlvbiAuY3Rze3dpZHRoOjM4JTtmbG9hdDogbGVmdDtib3gtc2l6aW5nOiBib3JkZXItYm94O31cbi5jb250YWluZXIgLmNvbnRlbnQtdG9wLXNlY3Rpb24gLmN0cyAuZmF7cGFkZGluZzogMHB4IDNweCAwIDA7fVxuLmNvbnRhaW5lciAuY29udGVudC10b3Atc2VjdGlvbiAubGl2ZS10cmFja2luZ3tiYWNrZ3JvdW5kOiAjZjU4YzI5O2JvcmRlci1yYWRpdXM6IDEwcHg7cGFkZGluZzogNXB4IDRweDtmb250LXNpemU6IDEycHg7bWFyZ2luOiA1cHggMCAwIDA7d2lkdGg6IDM0JTt9XG4uY29udGFpbmVyIC5jb250ZW50LXRvcC1zZWN0aW9uIC5saXZlLXJlY29yZGluZ3twYWRkaW5nOiAxcHggNHB4O2ZvbnQtc2l6ZTogMTJweDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO31cbi5jb250YWluZXIgLmNvbnRlbnQtdG9wLXNlY3Rpb24gLmxpdmUtcmVjb3JkaW5nIC50aW1lcnt3aWR0aDogMTAwJTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Zm9udC1zaXplOiAxOHB4O2xpbmUtaGVpZ2h0OjE4cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxuLmNvbnRhaW5lciAuY29udGVudC10b3Atc2VjdGlvbiAubGl2ZS1zdGF0c3tiYWNrZ3JvdW5kOiNmNThjMjk7Ym9yZGVyLXJhZGl1czoxMHB4O3BhZGRpbmc6NXB4IDRweDt3aWR0aDogMjglO21hcmdpbjogNXB4IDAgMCAwO2Zsb2F0OiByaWdodDtmb250LXNpemU6IDE0cHg7fVxuXG4uY29udGFpbmVyIC5jb250ZW50LW1pZGRsZS1zZWN0aW9ue2hlaWdodDo0NTBweDtiYWNrZ3JvdW5kOiNmZmY7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO3RyYW5zaXRpb246YWxsIDAuM3MgZWFzZTt9XG4uY29udGFpbmVyIC5jb250ZW50LW1pZGRsZS1zZWN0aW9uIC5tYXAtc2VjdGlvbnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6IzAwMDt9XG4uY29udGFpbmVyIC5jb250ZW50LW1pZGRsZS1zZWN0aW9uIC5saXZlLXN0YXRzLXNlY3Rpb257aGVpZ2h0OmF1dG87YmFja2dyb3VuZDojZmZmO31cbi5jb250YWluZXIgLmNvbnRlbnQtbWlkZGxlLXNlY3Rpb24gLmxpdmUtc3RhdHMtc2VjdGlvbiAubHNzLXN0YXRpc3RpY3MtY21uIC5pdGVte31cbi5jb250YWluZXIgLmNvbnRlbnQtbWlkZGxlLXNlY3Rpb24gLmxpdmUtc3RhdHMtc2VjdGlvbiAubHNzLXN0YXRpc3RpY3MtY21uIC5pdGVtIGgye21hcmdpbjo5cHggMCA2cHggMDtmb250LXNpemU6IDE1cHg7Zm9udC13ZWlnaHQ6bm9ybWFsO2NvbG9yOiMzMzM7fVxuLmNvbnRhaW5lciAuY29udGVudC1taWRkbGUtc2VjdGlvbiAubGl2ZS1zdGF0cy1zZWN0aW9uIC5sc3Mtc3RhdGlzdGljcy1jbW4gLml0ZW0gLmxzcy12YWx1ZXtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6NjBweDtmb250LXdlaWdodDpib2xkO2xpbmUtaGVpZ2h0OiA2MHB4O31cbi5jb250YWluZXIgLmNvbnRlbnQtbWlkZGxlLXNlY3Rpb24gLmxpdmUtc3RhdHMtc2VjdGlvbiAubHNzLXN0YXRpc3RpY3MtY21uIC5pdGVtIC5sc3MtdW5pdHtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MjBweDtmb250LXdlaWdodDpib2xkO2xpbmUtaGVpZ2h0OjIwcHg7fVxuLmNvbnRhaW5lciAuY29udGVudC1taWRkbGUtc2VjdGlvbiAubGl2ZS1zdGF0cy1zZWN0aW9uIC5sc3MtdGltZSAuaXRlbSAubHNzLXZhbHVle2ZvbnQtc2l6ZTo0OHB4O2xpbmUtaGVpZ2h0OjUwcHg7fVxuLmNvbnRhaW5lciAuY29udGVudC1taWRkbGUtc2VjdGlvbiAubGl2ZS1zdGF0cy1zZWN0aW9uIC5sc3Mtc3RhdGlzdGljcy1jbW4gLm93bC1jb250cm9sc3t9XG4uY29udGFpbmVyIC5jb250ZW50LW1pZGRsZS1zZWN0aW9uIC5saXZlLXN0YXRzLXNlY3Rpb24gLmxzcy1zdGF0aXN0aWNzLWNtbiAub3dsLWNvbnRyb2xzIC5vd2wtcGFnZXt9XG4uY29udGFpbmVyIC5jb250ZW50LW1pZGRsZS1zZWN0aW9uIC5saXZlLXN0YXRzLXNlY3Rpb24gLmxzcy1zdGF0aXN0aWNzLWNtbiAub3dsLWNvbnRyb2xzIC5vd2wtcGFnZSBzcGFue2JvcmRlci1yYWRpdXM6MXB4O3dpZHRoOjIycHg7aGVpZ2h0OjNweDttYXJnaW46MCAzcHg7YmFja2dyb3VuZDojODY5NzkxO31cbi5jb250YWluZXIgLmNvbnRlbnQtbWlkZGxlLXNlY3Rpb24gLmxpdmUtc3RhdHMtc2VjdGlvbiAubHNzLXN0YXRpc3RpY3MtY21uIC5vd2wtY29udHJvbHMgLm93bC1wYWdlLmFjdGl2ZXt9XG4uY29udGFpbmVyIC5jb250ZW50LW1pZGRsZS1zZWN0aW9uIC5saXZlLXN0YXRzLXNlY3Rpb24gLmxzcy1zdGF0aXN0aWNzLWNtbiAub3dsLWNvbnRyb2xzIC5vd2wtcGFnZS5hY3RpdmUgc3BhbntiYWNrZ3JvdW5kOiNmNThjMjk7fVxuXG4uY29udGFpbmVyIC5jb250ZW50LWJvdHRvbS1zZWN0aW9ue2JhY2tncm91bmQ6IzAwMDtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogMDstbW96LXRyYW5zaXRpb246YWxsIDAuM3MgZWFzZTstd2Via2l0LXRyYW5zaXRpb246YWxsIDAuM3MgZWFzZTt0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpOy13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO3otaW5kZXg6IDk5O31cbi5jb250YWluZXIgLmNvbnRlbnQtYm90dG9tLXNlY3Rpb24uc2xpZGVsZWZ0ey1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTstd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTt9XG4uY29udGFpbmVyIC5jb250ZW50LWJvdHRvbS1zZWN0aW9uIGEuc3RhcnQtcmVjb3JkaW5ne2JhY2tncm91bmQ6I2Y1OGMyOTtib3JkZXItcmFkaXVzOjMwcHg7cGFkZGluZzoxMnB4IDI1cHg7Zm9udC1zaXplOjIwcHg7bWFyZ2luOjVweCAwIDVweCAwO2NvbG9yOiNmZmY7d2lkdGg6OTUlO3RleHQtZGVjb3JhdGlvbjpub25lO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6IGJvbGQ7cG9zaXRpb246cmVsYXRpdmU7fVxuLmNvbnRhaW5lciAuY29udGVudC1ib3R0b20tc2VjdGlvbiBhLnN0YXJ0LXJlY29yZGluZyAuZmF7Y29sb3I6I2Y5MGMyMDtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDozNXB4O3RvcDoxNHB4O31cbi5jb250YWluZXIgLmNvbnRlbnQtYm90dG9tLXNlY3Rpb24gYS5zdGFydC1yZWNvcmRpbmc6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjU4YzI5O29wYWNpdHk6MC44Mjt9XG4uaGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XG4uc2hvd3tkaXNwbGF5OmJsb2NrO31cblxuLmNvbnRhaW5lciAuY29udGVudC1zdGlja3ktc2VjdGlvbntwb3NpdGlvbjpmaXhlZDtib3R0b206MzVweDt0ZXh0LWFsaWduOmxlZnQ7fVxuLmNvbnRhaW5lciAuY29udGVudC1zdGlja3ktc2VjdGlvbiBzcGFue2NvbG9yOiAjZmZmO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MTZweCAyOHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LXNpemU6MjJweDtmb250LXdlaWdodDpib2xkOy1tb3otdHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlOy13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlO3RyYW5zaXRpb246YWxsIDAuM3MgZWFzZTstbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO3RyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7Y3Vyc29yOnBvaW50ZXI7fVxuLmNvbnRhaW5lciAuY29udGVudC1zdGlja3ktc2VjdGlvbiBzcGFuLnNsaWRlbGVmdHstbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMDklLCAwJSk7LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjA5JSwgMCUpO3RyYW5zZm9ybTogdHJhbnNsYXRlKC0yMDklLCAwJSk7fVxuLmNvbnRhaW5lciAuY29udGVudC1zdGlja3ktc2VjdGlvbiAucmVzdW1lQnV0dG9ue2JhY2tncm91bmQ6IzRDOEMyQjt9XG4uY29udGFpbmVyIC5jb250ZW50LXN0aWNreS1zZWN0aW9uIC5zdG9wQnV0dG9ue2JhY2tncm91bmQ6I0Y5MDcyMTtib3JkZXItcmFkaXVzOjAgMzBweCAzMHB4IDA7cGFkZGluZzoxNnB4IDMxcHg7fVxuLmNvbnRhaW5lciAuY29udGVudC1zdGlja3ktc2VjdGlvbiAucGF1c2VCdXR0b257YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MCAzMHB4IDMwcHggMDtwYWRkaW5nOjE2cHggMThweCAxNnB4IDE0cHg7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDA7bGluZS1oZWlnaHQ6MzBweDtoZWlnaHQ6NTVweDt9XG4uY29udGFpbmVyIC5jb250ZW50LXN0aWNreS1zZWN0aW9uIC5wYXVzZUJ1dHRvbi5zbGlkZWxlZnR7LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpOy13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO31cbi5jb250YWluZXIgLmNvbnRlbnQtc3RpY2t5LXNlY3Rpb24gLnBhdXNlQnV0dG9uLmJsYWNrLXBhdXNle2JhY2tncm91bmQ6IzMzMzt9XG4uY29udGFpbmVyIC5jb250ZW50LXN0aWNreS1zZWN0aW9uIC5wYXVzZUJ1dHRvbiAuZmF7Y29sb3I6I2Y5MGMyMDt9Il19 */"

/***/ }),

/***/ "./src/app/pages/sky-tricker/sky-tricker.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/sky-tricker/sky-tricker.page.ts ***!
  \*******************************************************/
/*! exports provided: SkyTrickerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkyTrickerPage", function() { return SkyTrickerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");







var SkyTrickerPage = /** @class */ (function () {
    function SkyTrickerPage(locationAccuracy, router, geolocation, plt) {
        this.locationAccuracy = locationAccuracy;
        this.router = router;
        this.geolocation = geolocation;
        this.plt = plt;
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
        this.previousTracks = [];
        this.timeBegan = null;
        this.timeStopped = null;
        this.stoppedDuration = 0;
        this.started = null;
        this.running = false;
        this.blankTime = "00:00.000";
        this.time = "00:00.000";
        this.currentColor = 'light';
    }
    SkyTrickerPage.prototype.mapLoad = function () {
        var _this = this;
        this.plt.ready().then(function () {
            var mapOptions = {
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.geolocation.getCurrentPosition().then(function (pos) {
                var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                _this.map.setCenter(latLng);
                _this.map.setZoom(15);
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    SkyTrickerPage.prototype.ngOnInit = function () {
    };
    SkyTrickerPage.prototype.skyTrcikerClick = function () {
        this.router.navigate(['/menu/first/tabs/tab1/sky-tricker/sky-tricker-details']);
    };
    SkyTrickerPage.prototype.update = function (event) {
        var _this = this;
        if (event.detail.checked == true) {
            this.reset();
            this.start();
            this.mapLoad();
            this.setAccuracy();
            this.isTracking = true;
            this.trackedRoute = [];
            this.km = 0;
            this.positionSubscription = this.geolocation.watchPosition()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (p) { return p.coords !== undefined; }) //Filter Out Errors
            )
                .subscribe(function (data) {
                setTimeout(function () {
                    _this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
                    _this.redrawPath(_this.trackedRoute);
                }, 0);
            });
        }
        else {
            this.stop();
            this.positionSubscription.unsubscribe();
        }
    };
    SkyTrickerPage.prototype.redrawPath = function (path) {
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
    SkyTrickerPage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    SkyTrickerPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    SkyTrickerPage.prototype.ionicBckClick = function () {
        this.positionSubscription.unsubscribe();
    };
    SkyTrickerPage.prototype.setAccuracy = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return console.log('Request successful'); }, function (error) { return console.log('Error requesting location permissions', error); });
            }
        });
    };
    SkyTrickerPage.prototype.start = function () {
        if (this.running)
            return;
        if (this.timeBegan === null) {
            this.reset();
            this.timeBegan = new Date();
        }
        if (this.timeStopped !== null) {
            var newStoppedDuration = (+new Date() - this.timeStopped);
            this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
        }
        this.started = setInterval(this.clockRunning.bind(this), 10);
        this.running = true;
    };
    SkyTrickerPage.prototype.stop = function () {
        this.running = false;
        this.timeStopped = new Date();
        clearInterval(this.started);
    };
    SkyTrickerPage.prototype.reset = function () {
        this.running = false;
        clearInterval(this.started);
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        this.time = this.blankTime;
    };
    SkyTrickerPage.prototype.zeroPrefix = function (num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    };
    SkyTrickerPage.prototype.clockRunning = function () {
        var currentTime = new Date();
        var timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration);
        var hour = timeElapsed.getUTCHours();
        var min = timeElapsed.getUTCMinutes();
        var sec = timeElapsed.getUTCSeconds();
        // let ms = timeElapsed.getUTCMilliseconds();
        this.time =
            this.zeroPrefix(hour, 2) + ":" +
                this.zeroPrefix(min, 2) + ":" +
                this.zeroPrefix(sec, 2) + ".";
        //this.zeroPrefix(ms, 3);
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SkyTrickerPage.prototype, "mapElement", void 0);
    SkyTrickerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sky-tricker',
            template: __webpack_require__(/*! ./sky-tricker.page.html */ "./src/app/pages/sky-tricker/sky-tricker.page.html"),
            styles: [__webpack_require__(/*! ./sky-tricker.page.scss */ "./src/app/pages/sky-tricker/sky-tricker.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], SkyTrickerPage);
    return SkyTrickerPage;
}());



/***/ })

}]);
//# sourceMappingURL=sky-tricker-sky-tricker-module.js.map