(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weather-report-weather-report-module"],{

/***/ "./src/app/pages/weather-report/weather-report.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/weather-report/weather-report.module.ts ***!
  \***************************************************************/
/*! exports provided: WeatherReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherReportPageModule", function() { return WeatherReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weather_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-report.page */ "./src/app/pages/weather-report/weather-report.page.ts");







var routes = [
    {
        path: '',
        component: _weather_report_page__WEBPACK_IMPORTED_MODULE_6__["WeatherReportPage"]
    }
];
var WeatherReportPageModule = /** @class */ (function () {
    function WeatherReportPageModule() {
    }
    WeatherReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_weather_report_page__WEBPACK_IMPORTED_MODULE_6__["WeatherReportPage"]]
        })
    ], WeatherReportPageModule);
    return WeatherReportPageModule;
}());



/***/ }),

/***/ "./src/app/pages/weather-report/weather-report.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/weather-report/weather-report.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf='theme == \"winter\"'>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title >Weather Panel</ion-title>\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n<ion-content class=\"card-background-page\" *ngIf='theme == \"winter\"'>\n\n    <ion-card>\n        <img alt=\"logo\" class=\"heightImage\" src={{weatherBanner}} >\n        <div class=\"card-title\">{{weatherTitle}}</div>\n      </ion-card>\n\n    <!-- <div>\n  \n        <img alt=\"logo\" class=\"bannerImage\" src={{weatherBanner}} > \n        <div class=\"labelText\">{{weatherTitle}}</div>\n      </div> -->\n\n    <ion-grid class=\"gridView\"> \n        <ion-row class=\"gridRow\">\n          <ion-col class=\"fontSizeCall1top paddingClass\">\n            {{day}}\n          </ion-col>\n          <ion-col class=\"fontSizeCall addBorder paddingClass\">\n              Natural Depth\n          </ion-col>\n          <ion-col class=\"fontSizeCall addBorder paddingClass\">\n              Snowmaking Depth\n          </ion-col>\n          <ion-col class=\"fontSizeCall paddingClass\" size=\"4\">\n            Road Status\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n\n        <ion-grid class=\"gridView2\"> \n            <ion-row class=\"gridRow\">\n              <ion-col class=\"fontSizeCall1\">\n                {{current_temp}}\n              </ion-col>\n              <ion-col class=\"fontSizeCall1\">\n              {{natural_depth}}\n              </ion-col>\n              <ion-col class=\"fontSizeCall1\">\n                {{snowmaking_depth}}\n              </ion-col>\n              <ion-col class=\"fontSizeCall1\" size=\"4\">\n                {{road_status}}\n              </ion-col>\n            </ion-row>\n            </ion-grid>\n\n\n\n\n\n<div class=\"background\">\n\n<div class=\"CloudDiv\"> Cloud _ </div>\n<ion-grid class=\"gridView1\"> \n    <ion-row class=\"gridRow\">\n      <ion-col >\n          Gust Km/h\n      </ion-col>\n      <ion-col >\n          Air Temp\n      </ion-col>\n      <ion-col >\n          The dew point\n      </ion-col>\n      <ion-col >\n          Rain Trace\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n\n    <ion-grid class=\"\"> \n        <ion-row class=\"gridRow\">\n          <ion-col >\n              <div class=\"circle\">{{gust_kmh}}</div>\n          </ion-col>\n          <ion-col >\n              <div class=\"circle\">{{air_temp}}</div>\n          </ion-col>\n          <ion-col >\n              <div class=\"circle\">{{dewpt}}</div>\n          </ion-col>\n          <ion-col >\n              <div class=\"circle\">{{rain_trace}}</div>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n\n  </div>\n\n\n  <p class=\"contentTest\"> \n{{banner_desc}}\n    </p>\n\n    \n<ion-card>\n  \n    <div class=\"mainDiv\">\n      <div class=\"ImageMainDiv\"> \n          <img  class=\"Image\" src=\"assets/img/Lift.png\" alt=\"your image\">\n      </div>\n      <div class=\"textMainDiv\">   \n          <span class=\"unit-top\">{{winter_lifts?.length}}</span>\n          <span class=\"unit-separator\">/</span>\n          <span class=\"unit-down\">{{lifts?.length}} </span>\n          \n      </div>\n\n\n      </div>\n\n\n      <!-- <div class=\"mainDiv\">\n          <div class=\"mainDivLift\"> \n              lifts\n          </div>\n          <div class=\"Seemore\"  *ngIf=\"moreliftsif\" (click)=\"liftsClick()\" >   \n             See More\n          </div>\n          </div> -->\n\n          <div>\n              <span class=\"left mainDivLiftwinter\">lifts </span><span *ngIf=\"moreliftsif\"   (click)=\"liftsClick()\" class=\"right Seemore\">See More</span>​\n    \n    </div>\n\n          <ion-grid class=\"ClassIonGrid\" *ngIf=\"liftsif\"> \n            <ion-row *ngFor=\"let homelifts of lifts\">\n              <ion-col class=\"textAlignCss textAlignCss\">\n                  <div>{{homelifts.title}}</div>\n              </ion-col>\n              <ion-col  class=\"textAlignCss\">\n                  <div  class=\"{{homelifts.compare == 'true' ? 'DotGreen' : 'Dot'}}\" class=\"Dot\"></div>\n                  <!-- <div class=\"DotGreen\"></div> -->\n              </ion-col>\n            </ion-row>\n            </ion-grid>\n            \n\n            <div class=\"seeless\"  *ngIf=\"liftsif\" (click)=\"liftsClick()\" >   \n                See less\n             </div>\n\n  </ion-card>\n        \n\n\n\n\n\n  <!-- two  lift -->\n\n  <ion-card>\n  \n    <div class=\"mainDiv\">\n      <div class=\"ImageMainDiv\"> \n          <img  class=\"Image\" src=\"assets/img/runs.png\" alt=\"your image\">\n      </div>\n      <div class=\"textMainDiv\">   \n          <span class=\"unit-top\">{{winter_runs?.length}}</span>\n          <span class=\"unit-separator\">/</span>\n          <span class=\"unit-down\">{{runs?.length}} </span>\n          \n      </div>\n\n\n      </div>\n\n\n      <!-- <div class=\"mainDiv\">\n          <div class=\"mainDivLift\"> \n             Runs\n          </div>\n          <div class=\"Seemore\" *ngIf=\"moreRunsif\" (click)=\"RunsClick()\">   \n             See More\n          </div>\n          </div> -->\n\n          <div>\n              <span class=\"left mainDivLiftwinter\">Runs </span><span *ngIf=\"moreRunsif\"   (click)=\"RunsClick()\" class=\"right Seemore\">See More</span>​\n    \n    </div>\n\n\n          <ion-grid class=\"ClassIonGrid\" *ngIf=\"Runsif\"> \n              <ion-row *ngFor=\"let homeruns of runs\">\n                <ion-col class=\"textAlignCss textAlignCss\" >\n                    <div>{{homeruns.title}}</div>\n                </ion-col>\n                <ion-col  class=\"textAlignCss\" >\n                    <div  class=\"{{homeruns.compare == 'true' ? 'DotGreen' : 'Dot'}}\" class=\"Dot\"></div>\n                    <!-- <div class=\"DotGreen\"></div> -->\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n\n\n              <div class=\"seeless\"  *ngIf=\"Runsif\" (click)=\"RunsClick()\" >   \n                  See less\n               </div>\n\n  </ion-card>\n\n\n  <!-- third  lift -->\n\n  <ion-card>\n  \n    <div class=\"mainDiv\">\n      <div class=\"ImageMainDiv\"> \n          <img  class=\"ImageLaastSummer\" src=\"assets/img/tobaggan.png\" alt=\"your image\">\n      </div>\n      <div class=\"textMainDiv\">   \n          <span class=\"unit-top\">{{winter_tobogganing?.length}}</span>\n          <span class=\"unit-separator\">/</span>\n          <span class=\"unit-down\">{{tobogganing?.length}} </span>\n          \n      </div>\n\n\n      </div>\n\n\n      <!-- <div class=\"mainDiv\">\n          <div class=\"mainDivLift\"> \n            Tobogganing\n          </div>\n          <div class=\"Seemore\" *ngIf=\"moreTobogganingif\" (click)=\"TobogganingClick()\">   \n             See More\n          </div>\n          </div> -->\n\n          <div>\n              <span class=\"left mainDivLift\">Tobogganing </span><span *ngIf=\"moreTobogganingif\"   (click)=\"TobogganingClick()\" class=\"right Seemore\">See More</span>​\n    \n    </div>\n\n\n\n          <ion-grid class=\"ClassIonGrid\" *ngIf=\"Tobogganingif\"> \n              <ion-row *ngFor=\"let hometobogganing of tobogganing\">\n                <ion-col class=\"textAlignCss textAlignCss\">\n                    <div>{{hometobogganing.title}}</div>\n                </ion-col>\n                <ion-col  class=\"textAlignCss\">\n                    <div  class=\"{{hometobogganing.compare == 'true' ? 'DotGreen' : 'Dot'}}\" class=\"Dot\"></div>\n                    <!-- <div class=\"DotGreen\"></div> -->\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n\n              <div class=\"seeless\"  *ngIf=\"Tobogganingif\" (click)=\"TobogganingClick()\" >   \n                  See less\n               </div>\n\n\n\n  </ion-card>\n\n\n\n\n<!-- fourth  lift -->\n\n<ion-card>\n\n    <div class=\"mainDiv\">\n        <div class=\"ImageMainDiv\"> \n            <img  class=\"ImageLaastSummer\" src=\"assets/img/leaf.png\" alt=\"your image\">\n        </div>\n        <div class=\"textMainDiv\">   \n            <span class=\"unit-top\">{{winter_Cross_Country?.length}}</span>\n            <span class=\"unit-separator\">/</span>\n            <span class=\"unit-down\">{{Cross_Country?.length}} </span>\n            \n        </div>\n  \n  \n        </div>\n\n\n        <div>\n            <span class=\"left mainDivLift\">Cross Country Trails </span><span *ngIf=\"moreCountryif\"   (click)=\"countryClick()\" class=\"right Seemore\">See More</span>​\n  \n  </div>\n\n\n  <ion-grid class=\"ClassIonGrid\" *ngIf=\"Countryif\"> \n      <ion-row *ngFor=\"let hometcounter of counter\">\n        <ion-col class=\"textAlignCss textAlignCss\">\n            <div>{{hometcounter.title}}</div>\n        </ion-col>\n        <ion-col  class=\"textAlignCss\">\n            <div  class=\"{{hometcounter.compare == 'true' ? 'DotGreen' : 'Dot'}}\" class=\"Dot\"></div>\n            <!-- <div class=\"DotGreen\"></div> -->\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n\n\n      <div class=\"seeless\"  *ngIf=\"Countryif\" (click)=\"countryClick()\" >   \n          See less\n       </div>\n\n</ion-card>\n  \n\n\n\n\n\n\n       \n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- summmer report -->\n\n\n\n\n\n\n\n\n\n\n<ion-header *ngIf='theme == \"summer\"'>\n  <ion-toolbar   [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button  defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title >Weather Panel</ion-title>\n  </ion-toolbar>\n\n<!-- <div>\n  \n    <img alt=\"logo\" class=\"bannerImage\" src={{weatherBanner}} > \n    <div class=\"labelText\">{{weatherTitle}}</div>\n  </div> -->\n\n</ion-header>\n\n\n<ion-content class=\"card-background-page\"  *ngIf='theme == \"summer\"'>\n\n    <ion-card>\n        <img alt=\"logo\" class=\"heightImage\" src={{weatherBanner}} >\n        <div class=\"card-title\">{{weatherTitle}}</div>\n      </ion-card>\n\n\n\n    <ion-grid class=\"gridView\"> \n        <ion-row>\n          <ion-col class=\"fontSizeCall1top paddingClass\">\n            {{day}}\n          </ion-col>\n          <ion-col class=\"fontSizeCall addBorder paddingClass\">\n              Min Temp\n          </ion-col>\n          <ion-col class=\"fontSizeCall addBorder paddingClass\">\n              Max Temp\n          </ion-col>\n          <ion-col class=\"fontSizeCall paddingClass\" size=\"4\">\n            Road Status\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n\n        <ion-grid class=\"gridView2\"> \n            <ion-row>\n              <ion-col class=\"fontSizeCall1\">\n                {{current_temp}}\n              </ion-col>\n              <ion-col class=\"fontSizeCall1\">\n              {{natural_depth}}\n              </ion-col>\n              <ion-col class=\"fontSizeCall1\">\n                {{snowmaking_depth}}\n              </ion-col>\n              <ion-col class=\"fontSizeCall1\" size=\"4\">\n                {{road_status}}\n              </ion-col>\n            </ion-row>\n            </ion-grid>\n\n\n\n\n\n<div class=\"background\">\n\n<div class=\"CloudDiv\"> Cloud _ </div>\n<ion-grid class=\"gridView1\"> \n    <ion-row>\n      <ion-col >\n          Gust Km/h\n      </ion-col>\n      <ion-col >\n          Air Temp\n      </ion-col>\n      <ion-col >\n          The dew point\n      </ion-col>\n      <ion-col >\n          Rain Trace\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n\n    <ion-grid class=\"\"> \n        <ion-row>\n          <ion-col >\n              <div class=\"circle\">{{gust_kmh}}</div>\n          </ion-col>\n          <ion-col >\n              <div class=\"circle\">{{air_temp}}</div>\n          </ion-col>\n          <ion-col >\n              <div class=\"circle\">{{dewpt}}</div>\n          </ion-col>\n          <ion-col >\n              <div class=\"circle\">{{rain_trace}}</div>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n\n  </div>\n\n\n  <p class=\"contentTest\"> \n{{banner_desc}}\n    </p>\n\n    \n<ion-card>\n  \n    <div class=\"mainDiv\">\n      <div class=\"ImageMainDiv\"> \n          <img  class=\"Image\" src=\"assets/img/runs.png\" alt=\"your image\">\n      </div>\n      <div class=\"textMainDiv\">   \n          <span class=\"unit-top\">{{winter_lifts?.length}}</span>\n          <span class=\"unit-separator\">/</span>\n          <span class=\"unit-down\">{{lifts?.length}} </span>\n          \n      </div>\n\n\n      </div>\n\n\n      <!-- <div class=\"mainDiv\">\n          <div class=\"mainDivLift\"> \n              Walking Trails\n          </div>\n          <div class=\"Seemore\"  *ngIf=\"moreliftsif\" (click)=\"liftsClick()\" >   \n             See More\n          </div>\n          </div> -->\n\n\n          <div>\n              <span class=\"left mainDivLift\">Walking Trails </span><span *ngIf=\"moreliftsif\"   (click)=\"liftsClick()\" class=\"right Seemore\">See More</span>​\n    \n    </div>\n\n          <ion-grid class=\"ClassIonGrid\"  *ngIf=\"liftsif\"> \n            <ion-row *ngFor=\"let homelifts of lifts\">\n              <ion-col class=\"textAlignCss textAlignCss\">\n                  <div>{{homelifts.title}}</div>\n              </ion-col>\n              <ion-col  class=\"textAlignCss\">\n                  <div  class=\"{{homelifts.compare == 'true' ? 'DotGreen' : 'Dot'}}\" class=\"Dot\"></div>\n                  <!-- <div class=\"DotGreen\"></div> -->\n              </ion-col>\n            </ion-row>\n            </ion-grid>\n            \n\n            <div class=\"seeless\"  *ngIf=\"liftsif\" (click)=\"liftsClick()\" >   \n                See less\n             </div>\n\n  </ion-card>\n        \n\n\n\n\n\n  <!-- two  lift -->\n\n  <ion-card>\n  \n    <div class=\"mainDiv\">\n      <div class=\"ImageMainDiv\"> \n          <img  class=\"Image\" src=\"assets/img/runs.png\" alt=\"your image\">\n      </div>\n      <div class=\"textMainDiv\">   \n          <span class=\"unit-top\">{{winter_runs?.length}}</span>\n          <span class=\"unit-separator\">/</span>\n          <span class=\"unit-down\">{{runs?.length}} </span>\n          \n      </div>\n\n\n      </div>\n\n\n      <!-- <div class=\"mainDiv\"> -->\n          <!-- <div class=\"mainDivLift\"> \n              Mountain Bike Trails \n          </div>\n          <div class=\"Seemore\" *ngIf=\"moreRunsif\" (click)=\"RunsClick()\">   \n             See More\n          </div>\n          </div> -->\n<div>\n          <span class=\"left mainDivLift\">Mountain Bike Trails </span><span *ngIf=\"moreRunsif\"   (click)=\"RunsClick()\" class=\"right Seemore\">See More</span>​\n\n</div>\n          <ion-grid class=\"ClassIonGrid\"  *ngIf=\"Runsif\"> \n              <ion-row *ngFor=\"let homeruns of runs\">\n                <ion-col class=\"textAlignCss textAlignCss\" >\n                    <div>{{homeruns.title}}</div>\n                </ion-col>\n                <ion-col  class=\"textAlignCss\" >\n                    <div  class=\"{{homeruns.compare == 'true' ? 'DotGreen' : 'Dot'}}\" class=\"Dot\"></div>\n                    <!-- <div class=\"DotGreen\"></div> -->\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n\n\n              <div class=\"seeless\"  *ngIf=\"Runsif\" (click)=\"RunsClick()\" >   \n                  See less\n               </div>\n\n  </ion-card>\n\n\n  <!-- third  lift -->\n\n  <ion-card>\n  \n    <div class=\"mainDiv\">\n      <div class=\"ImageMainDiv\"> \n          <img  class=\"ImageLaastSummer\" src=\"assets/img/cycle.png\" alt=\"your image\">\n      </div>\n      <div class=\"textMainDiv\">   \n          <span class=\"unit-top\">{{winter_tobogganing?.length}}</span>\n          <span class=\"unit-separator\">/</span>\n          <span class=\"unit-down\">{{tobogganing?.length}} </span>\n          \n      </div>\n\n\n      </div>\n\n\n      <!-- <div class=\"mainDiv\">\n          <div class=\"mainDivLift\"> \n              Activities\n          </div>\n          <div class=\"Seemore\" *ngIf=\"moreTobogganingif\" (click)=\"TobogganingClick()\">   \n             See More\n          </div>\n          </div> -->\n\n\n\n          <div>\n              <span class=\"left mainDivLift\">Activities</span><span *ngIf=\"moreTobogganingif\"   (click)=\"TobogganingClick()\" class=\"right Seemore\">See More</span>​\n    \n    </div>\n\n\n          <ion-grid class=\"ClassIonGrid\" *ngIf=\"Tobogganingif\"> \n              <ion-row *ngFor=\"let hometobogganing of tobogganing\">\n                <ion-col class=\"textAlignCss textAlignCss\">\n                    <div>{{hometobogganing.title}}</div>\n                </ion-col>\n                <ion-col  class=\"textAlignCss\">\n                    <div  class=\"{{hometobogganing.compare == 'true' ? 'DotGreen' : 'Dot'}}\" class=\"Dot\"></div>\n                    <!-- <div class=\"DotGreen\"></div> -->\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n\n              <div class=\"seeless\"  *ngIf=\"Tobogganingif\" (click)=\"TobogganingClick()\" >   \n                  See less\n               </div>\n\n\n\n  </ion-card>\n       \n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/weather-report/weather-report.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/weather-report/weather-report.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarHeight {\n  height: 140px;\n  background: #F0F0F0; }\n\n.bannerImage {\n  position: absolute;\n  margin-top: -58px;\n  z-index: 25;\n  padding-left: 15px;\n  padding-right: 15px;\n  height: 200px; }\n\n.titleClass {\n  margin-top: 11px; }\n\n.ButtonBack {\n  margin-top: 18px; }\n\n.labelText {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 39;\n  color: white;\n  font-size: 20px;\n  margin-top: 42px;\n  font-weight: 800; }\n\n.gridView {\n  margin-top: 16px;\n  text-align: center; }\n\n.gridView2 {\n  text-align: center;\n  margin-top: -14px; }\n\n.fontSizeCall {\n  font-size: 10px;\n  color: darkgray; }\n\n.fontSizeCall1 {\n  font-size: 10px;\n  font-weight: 700; }\n\n.fontSizeCall1top {\n  font-size: 10px;\n  font-weight: 700;\n  color: black; }\n\n.addBorder {\n  border-right: 0.05px solid darkgray; }\n\n.paddingClass {\n  padding-top: 2px !important; }\n\n.background {\n  background: black;\n  height: 200px;\n  margin-top: 11px; }\n\n.CloudDiv {\n  color: white;\n  font-size: 24px;\n  font-weight: 800;\n  padding-top: 8px;\n  padding-left: 8px; }\n\n.gridView1 {\n  color: lightgrey;\n  font-size: 14px;\n  text-align: center;\n  font-weight: 800; }\n\n.circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  font-size: 17px;\n  color: #fff;\n  line-height: 61px;\n  border: 1px solid;\n  margin-left: 8px;\n  text-align: center;\n  font-weight: 800; }\n\n.contentTest {\n  text-align: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.liftImage {\n  width: 49px;\n  margin-left: 11px; }\n\n.mainDiv {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: inline-flex; }\n\n.ImageMainDiv {\n  width: 50%;\n  text-align: center; }\n\n.Image {\n  width: 49px;\n  /* padding-left: 24px; */\n  margin-top: 13px;\n  margin-left: 37px; }\n\n.textMainDiv {\n  text-align: center;\n  width: 50%;\n  margin-top: 10px;\n  font-size: 28px; }\n\n.unit-top {\n  font-size: 48px;\n  color: #70D006; }\n\n.unit-separator {\n  font-size: 26px;\n  color: black;\n  font-weight: 100; }\n\n.unit-down {\n  font-size: 18px; }\n\n.mainDivLift {\n  font-size: 18px;\n  font-weight: 800;\n  margin-left: 16px;\n  margin-top: 15px;\n  color: black;\n  margin-bottom: 10px; }\n\n.Seemore {\n  margin-top: 16px;\n  font-size: 18px;\n  text-decoration: underline;\n  color: #ff9b53;\n  margin-right: 38px; }\n\n.Dot {\n  content: ' ';\n  width: 11px;\n  height: 11px;\n  background: #F00000;\n  border-radius: 50%;\n  margin-left: 70px; }\n\n.DotGreen {\n  content: ' ';\n  width: 11px;\n  height: 11px;\n  background: green;\n  border-radius: 50%;\n  margin-left: 70px; }\n\n.textAlignCss {\n  text-align: center; }\n\n.seeless {\n  text-align: center;\n  margin-top: 16px;\n  font-size: 18px;\n  text-decoration: underline;\n  margin-bottom: 12px;\n  color: #ff9b53; }\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 42%;\n  font-size: 18px;\n  width: 100%;\n  font-weight: bold;\n  color: #fff; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.0em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff; }\n\n.heightImage {\n  height: 170px; }\n\n.right {\n  float: right; }\n\n.left {\n  float: left; }\n\n.ImageLaastSummer {\n  width: 49px;\n  margin-top: 24px;\n  margin-left: 37px; }\n\n.ClassIonGrid {\n  margin-top: 33px; }\n\n.mainDivLiftwinter {\n  font-size: 18px;\n  font-weight: 800;\n  margin-left: 39px;\n  margin-top: 15px;\n  color: black;\n  margin-bottom: 10px; }\n\n.gridRow {\n  flex-wrap: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy93ZWF0aGVyLXJlcG9ydC93ZWF0aGVyLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0M7RUFDRyxhQUFhO0VBQ2IsbUJBQ0YsRUFBQTs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR25CO0VBQ0csa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBTW5CO0VBQ0csZ0JBQWdCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNHLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFFcEI7RUFDRyxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdsQjtFQUNHLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbkI7RUFDRyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBRUgsRUFBQTs7QUFHQTtFQUNHLG1DQUFtQyxFQUFBOztBQUVyQztFQUNJLDJCQUEyQixFQUFBOztBQUkvQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLFdBQVc7RUFDWCwyQkFBb0I7RUFBcEIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUd0QjtFQUNFLFdBQVc7RUFDWCx3QkFBQTtFQUNBLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0Usa0JBQ0YsRUFBQTs7QUFNQTtFQUNFLGtCQUFrQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsY0FBc0IsRUFBQTs7QUFHMUI7RUFHSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBSnRCO0VBUUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBYmY7RUFpQkksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFLZjtFQUNFLGFBQWEsRUFBQTs7QUFNZjtFQUNFLFlBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVc7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlYXRoZXItcmVwb3J0L3dlYXRoZXItcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcbiAgICBibHVlOiAgICAjMzg3ZWY1LFxuICAgIHNlY29uZGFyeTogICMzMmRiNjQsXG4gICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICBsaWdodDogICAgICAjZjRmNGY0LCAgLy8gdGhlIGxpZ2h0IGNvbG9yIHdlJ3JlIHVzaW5nXG4gICAgZGFyazogICAgICAgICAgIzIyMixcbiAgICBvcmFuZ2xlOiAgICAgICAjZjU4YzI5Ly8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbiApO1xuXG4gLnRvb2xiYXJIZWlnaHR7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMEYwXG4gIH1cbiAgXG5cbiAgLmJhbm5lckltYWdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAtNThweDtcbiAgICB6LWluZGV4OiAyNTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLnRpdGxlQ2xhc3N7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgfVxuXG4gIC5CdXR0b25CYWNre1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gIH1cblxuIC5sYWJlbFRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiAzOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiB9XG5cblxuXG4gIFxuIC5ncmlkVmlld3tcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiAuZ3JpZFZpZXcye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiB9XG4gLmZvbnRTaXplQ2FsbHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IGRhcmtncmF5O1xuIH1cblxuIC5mb250U2l6ZUNhbGwxe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuIH1cblxuIC5mb250U2l6ZUNhbGwxdG9we1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiBibGFja1xuXG4gfVxuXG5cbiAuYWRkQm9yZGVye1xuICAgIGJvcmRlci1yaWdodDogMC4wNXB4IHNvbGlkIGRhcmtncmF5OyBcbiAgfVxuICAucGFkZGluZ0NsYXNze1xuICAgICAgcGFkZGluZy10b3A6IDJweCAhaW1wb3J0YW50O1xuICB9XG4gXG5cbiAgLmJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgaGVpZ2h0OiAyMDBweDsgICBcbiAgICBtYXJnaW4tdG9wOiAxMXB4OyBcbiAgfVxuICAuQ2xvdWREaXZ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cblxuICAuZ3JpZFZpZXcxe1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY2lyY2xlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogNjFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5cbi5jb250ZW50VGVzdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7ICAgXG59XG5cbi5saWZ0SW1hZ2V7XG4gICAgd2lkdGg6IDQ5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG4gIFxuXG4ubWFpbkRpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLkltYWdlTWFpbkRpdntcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLkltYWdle1xuICB3aWR0aDogNDlweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAyNHB4OyAqL1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMzdweDtcbn1cblxuLnRleHRNYWluRGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4udW5pdC10b3B7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGNvbG9yOiAjNzBEMDA2O1xufVxuXG4udW5pdC1zZXBhcmF0b3J7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogMTAwOyAgICBcbn1cblxuLnVuaXQtZG93bntcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYWluRGl2TGlmdHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4uU2VlbW9yZXtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICNmZjliNTM7XG4gIG1hcmdpbi1yaWdodDogMzhweDtcbn1cblxuXG4uRG90e1xuICBjb250ZW50OiAnICc7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNGMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5cbi5Eb3RHcmVlbntcbiAgY29udGVudDogJyAnO1xuICB3aWR0aDogMTFweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuXG4udGV4dEFsaWduQ3Nze1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgLS1vZmZzZXQtdG9wOiAtMTQwcHggIWltcG9ydGFudDtcbi8vIH1cblxuLnNlZWxlc3N7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGNvbG9yOiByZ2IoMjU1LDE1NSw4Mylcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MiU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbn1cblxuLmhlaWdodEltYWdle1xuICBoZWlnaHQ6IDE3MHB4O1xufVxuXG5cblxuXG4ucmlnaHR7XG4gIGZsb2F0OnJpZ2h0O1xufVxuXG4ubGVmdHtcbiAgZmxvYXQ6bGVmdDtcbn1cblxuLkltYWdlTGFhc3RTdW1tZXJ7XG4gIHdpZHRoOiA0OXB4O1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM3cHg7XG59XG5cbi5DbGFzc0lvbkdyaWR7XG4gIG1hcmdpbi10b3A6IDMzcHg7XG59XG5cbi5tYWluRGl2TGlmdHdpbnRlcntcbiAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDM5cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4uZ3JpZFJvd3tcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/weather-report/weather-report.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/weather-report/weather-report.page.ts ***!
  \*************************************************************/
/*! exports provided: WeatherReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherReportPage", function() { return WeatherReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WeatherReportPage = /** @class */ (function () {
    function WeatherReportPage(shared, router) {
        this.shared = shared;
        this.router = router;
        this.Tobogganingif = false;
        this.Countryif = false;
        this.Runsif = false;
        this.liftsif = false;
        this.moreRunsif = true;
        this.moreTobogganingif = true;
        this.moreCountryif = true;
        this.moreliftsif = true;
        this.currentColor = 'light';
        this.theme = this.router.getCurrentNavigation().extras.state.theme;
    }
    WeatherReportPage.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.ServiceCallWeather.ServiceCallRequestWeatherData(this.theme).then(function (res) {
            // debugg
            _this.response = res;
            if (_this.theme == 'winter') {
                _this.winterValue();
            }
            else {
                _this.summer();
            }
        }, function (err) {
        });
    };
    WeatherReportPage.prototype.summer = function () {
        console.log(this.response);
        this.weatherBanner = this.response.content.weather.banner_image;
        this.weatherTitle = this.response.content.weather.banner_title;
        this.day = this.response.content.weather.day;
        this.current_temp = this.response.content.weather.current_temp;
        this.road_status = this.response.content.weather.road_status;
        this.natural_depth = this.response.content.weather.min_temp;
        this.snowmaking_depth = this.response.content.weather.max_temp;
        this.gust_kmh = this.response.content.weather.gust_kmh;
        this.rain_trace = this.response.content.weather.rain_trace;
        this.air_temp = this.response.content.weather.air_temp;
        this.dewpt = this.response.content.weather.dewpt;
        this.banner_desc = this.response.content.weather.banner_desc;
        this.lifts = this.response.content.weather.walkingtrails;
        this.winter_lifts = JSON.parse(this.response.content.weather.summer_walking_trails);
        this.compareLifs(this.lifts, this.winter_lifts);
        this.runs = this.response.content.weather.mountainbiketrails;
        this.winter_runs = JSON.parse(this.response.content.weather.summer_mountain_bike_trails);
        this.compareruns(this.runs, this.winter_runs);
        this.tobogganing = this.response.content.weather.activities;
        this.winter_tobogganing = JSON.parse(this.response.content.weather.summer_activities);
        this.comparetobogganing(this.tobogganing, this.winter_tobogganing);
    };
    WeatherReportPage.prototype.winterValue = function () {
        console.log(this.response);
        this.weatherBanner = this.response.content.weather.banner_image;
        this.weatherTitle = this.response.content.weather.banner_title;
        this.day = this.response.content.weather.day;
        this.current_temp = this.response.content.weather.current_temp;
        this.road_status = this.response.content.weather.road_status;
        this.natural_depth = this.response.content.weather.natural_depth;
        this.snowmaking_depth = this.response.content.weather.snowmaking_depth;
        this.gust_kmh = this.response.content.weather.gust_kmh;
        this.air_temp = this.response.content.weather.air_temp;
        this.dewpt = this.response.content.weather.dewpt;
        this.rain_trace = this.response.content.weather.rain_trace;
        this.banner_desc = this.response.content.weather.banner_desc;
        this.lifts = this.response.content.weather.lifts;
        this.winter_lifts = JSON.parse(this.response.content.weather.winter_lifts);
        this.runs = this.response.content.weather.runs;
        this.winter_runs = JSON.parse(this.response.content.weather.winter_runs);
        this.tobogganing = this.response.content.weather.tobogganing;
        this.winter_tobogganing = JSON.parse(this.response.content.weather.winter_tobogganing);
        this.compareLifs(this.lifts, this.winter_lifts);
        this.compareruns(this.runs, this.winter_runs);
        this.comparetobogganing(this.tobogganing, this.winter_tobogganing);
        // crosscountrytrails winter_crosscountrytrails
        this.Cross_Country = this.response.content.weather.crosscountrytrails;
        this.winter_Cross_Country = JSON.parse(this.response.content.weather.winter_crosscountrytrails);
        this.compareCross_Country(this.Cross_Country, this.winter_Cross_Country);
    };
    WeatherReportPage.prototype.compareLifs = function (arr1, arr2) {
        var objMap = {};
        arr1.forEach(function (e1) { return arr2.forEach(function (e2) {
            if (e1.id === e2) {
                Object.assign(e1, { compare: "true" });
            }
        }); });
        this.lifts = arr1;
    };
    WeatherReportPage.prototype.compareruns = function (arr1, arr2) {
        var objMap = {};
        arr1.forEach(function (e1) { return arr2.forEach(function (e2) {
            if (e1.id === e2) {
                Object.assign(e1, { compare: "true" });
            }
        }); });
        this.runs = arr1;
    };
    WeatherReportPage.prototype.comparetobogganing = function (arr1, arr2) {
        var objMap = {};
        arr1.forEach(function (e1) { return arr2.forEach(function (e2) {
            if (e1.id === e2) {
                Object.assign(e1, { compare: "true" });
            }
        }); });
        this.tobogganing = arr1;
    };
    WeatherReportPage.prototype.compareCross_Country = function (arr1, arr2) {
        var objMap = {};
        arr1.forEach(function (e1) { return arr2.forEach(function (e2) {
            if (e1.id === e2) {
                Object.assign(e1, { compare: "true" });
            }
        }); });
        this.counter = arr1;
    };
    WeatherReportPage.prototype.liftsClick = function () {
        this.liftsif = !this.liftsif;
        this.moreliftsif = !this.moreliftsif;
    };
    WeatherReportPage.prototype.RunsClick = function () {
        this.Runsif = !this.Runsif;
        this.moreRunsif = !this.moreRunsif;
    };
    WeatherReportPage.prototype.TobogganingClick = function () {
        this.Tobogganingif = !this.Tobogganingif;
        this.moreTobogganingif = !this.moreTobogganingif;
    };
    WeatherReportPage.prototype.countryClick = function () {
        this.Countryif = !this.Countryif;
        this.moreCountryif = !this.moreCountryif;
    };
    WeatherReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-report',
            template: __webpack_require__(/*! ./weather-report.page.html */ "./src/app/pages/weather-report/weather-report.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./weather-report.page.scss */ "./src/app/pages/weather-report/weather-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WeatherReportPage);
    return WeatherReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=weather-report-weather-report-module.js.map