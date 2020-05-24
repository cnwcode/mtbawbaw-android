(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/pages/tab1/tab1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");







var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf='theme == \"winter\"'>\n    <ion-toolbar class=\"toolBarCss\" [color]=\"currentColor\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button class=\"menuButton\"></ion-menu-button>\n        </ion-buttons>\n        <img alt=\"logo\" class=\"logoImage\" src=\"assets/img/logo_iPhone.png\">\n    </ion-toolbar>\n    <div class=\"headerTemp\">\n        <ion-grid>\n            <ion-row class=\"headerTempRow\">\n                <!-- <ion-col class=\"Topcss\">\n               {{weatherData1.day}}  \n               </ion-col> -->\n                <ion-col class=\"addBorder\">\n                    {{weatherData1.day}}\n                </ion-col>\n                <ion-col class=\"addBorder\">\n                    Natural Depth\n                </ion-col>\n                <ion-col class=\"addBorder\">\n                    Snowmaking Depth\n                </ion-col>\n                <ion-col size=\"5\">\n                    Road Status\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid>\n            <ion-row class=\"headerTempRowVal\">\n                <!-- <ion-col class=\"FirstCal\">\n               {{weatherData1.time}} \n               </ion-col> -->\n                <ion-col class=\"secoundCal\">\n                    {{weatherData1.current_temp}}\n                </ion-col>\n                <ion-col class=\"thirdCal\">\n                    {{weatherData.winter_avg_natural_depth_value}} CM\n                </ion-col>\n                <ion-col>\n                    {{weatherData.winter_avg_snowmaking_depth_value}} CM\n                </ion-col>\n                <ion-col class=\"RoadCss\" size=\"5\">\n                    <span [ngClass]=\"istext ? 'shortText-w':'LongText-w'\">{{weatherData.winter_road_status}} </span><br>\n                    <div *ngIf=\"weatherData?.winter_road_status.length > 25\" class=\"mainDiv\">\n                        <div *ngIf=\"!buttonHide\" (click)=\"buttonClick()\" class=\"down\">\n                        </div>\n                        <div *ngIf=\"buttonHide\" (click)=\"buttonClick()\" class=\"up\">\n                        </div>\n                    </div>\n                    <!-- <ion-button *ngIf=\"!buttonHide\"class =\"readbutton\" (click)=\"buttonClick()\"> read more</ion-button>\n      <ion-button *ngIf=\"buttonHide\" class =\"readbutton\" (click)=\"buttonClick()\"> read Less</ion-button> -->\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <!-- <ion-grid  class=\"gridClassLast\"> -->\n        <!-- <ion-row class=\"headerColorCss\">\n      See full report\n      </ion-row>\n      <ion-row class=\"headerColorCss\">\n      View snow cams\n      </ion-row> -->\n        <!-- </ion-grid> -->\n        <div class=\"buttonClassTempReport\">\n            <ion-button class=\"buttonHeader\" (click)=\"openWeather()\" color=\"light\">View snow report</ion-button>\n            <ion-button class=\"buttonHeader\" (click)=\"openCams()\" color=\"light\">View snow Cams</ion-button>\n        </div>\n    </div>\n</ion-header>\n<ion-content *ngIf='theme == \"winter\"'>\n    <!-- <ion-button expand=\"block\" routerLink=\"/menu/first/tabs/tab1/details\" routerDirection=\"forward\">\n      Details forward\n      </ion-button> -->\n    <div class=\"spinnerClass\" *ngIf=\"message != 'success'\">\n        <ion-spinner icon=\"lines\" class=\"spinnerImage\"></ion-spinner>\n    </div>\n    <ion-slides [options]=\"slideOpts\" class=\"slidesCss\" pager=\"true\">\n        <ion-slide *ngFor=\"let homeSlide of slide\">\n            <div class=\"MainLabelDivSlide\">\n                <label class=\"sliderLabel\">{{homeSlide.heading}}</label>\n                <label class=\"sliderlabel2\">{{homeSlide.subheading}}</label>\n                <ion-button (click)=\"slideButton(homeSlide)\" *ngIf='homeSlide.slider_action_text != \"\"' class=\"buttonText\">{{homeSlide.slider_action_text}}</ion-button>\n            </div>\n            <img class=\"slideImaage\" src={{homeSlide.thumb}} />\n        </ion-slide>\n    </ion-slides>\n    <ion-card *ngIf='BoolImgae == true' class=\"cardAvater\">\n        <ion-item lines=\"none\">\n            <ion-avatar class=\"avaterClass\" item-left>\n                <img src={{image}}>\n            </ion-avatar>\n            <h2 class=\"HeaderAvater\">{{firstname}} {{lastname}}</h2>\n        </ion-item>\n        <p class=\"parClassAvater\">MTbawbaw pts:{{points}}</p>\n        <!-- <div class=\"goldCss\">Gold Member</div> -->\n    </ion-card>\n    <ion-card *ngIf='BoolImgae != true' class=\"cardForLogin\">\n        <h3 class=\"titleWithLogo\"><img alt=\"logo\" src=\"assets/img/logo_iPhone.png\"> &nbsp; Loyalty Program</h3>\n        <h6 style=\"margin: 5px 0 20px;\">Login/Register to access loyalty Programs</h6>\n        <ion-button routerLink=\"login\" class=\"buttonHeader\" color=\"light\">Login</ion-button>\n        &nbsp;\n        <ion-button routerLink=\"registraion\" class=\"buttonHeader\" color=\"light\">Register</ion-button>\n    </ion-card>\n    <table class=\"hoildayTabel\" width=\"100%\">\n        <tr>\n            <td *ngFor=\"let item of imagearray let i = index\" (click)=\"open(i)\" class=\"HoildayCss\" width=\"25%\"><img class=\"holdayImageClass\" src={{item.imageName}}><span class=\"holdayImageClasstext\">{{item.imageText}}</span></td>\n        </tr>\n    </table>\n    <div class=\"bottomCssHoliday\">\n        <div class=\"winterCss\"> Winter Activities </div>\n        <table class=\"hoildayTabel\" width=\"100%\">\n            <tr>\n                <td *ngFor=\"let items of activity; let i = index\" (click)=\"openActivity(items)\" class=\"HoildayCss1\" width=\"33%\">\n                    <div class=\"imageDiv\">\n                        <img class=\"holdayImageClass1\" src={{items.post_icon}}>\n                    </div>\n                    <span class=\"holdayImageClasstext\">{{items.title}}</span>\n                </td>\n            </tr>\n        </table>\n        <!-- <ion-button [color]=\"currentColorButton\"  (click)=\"openActivityAll()\" class=\"buttonGet\">Find out more</ion-button> -->\n    </div>\n    <!-- <div class=\"FooterMain\">\n      <div class=\"FooterTitle\">\n          {{footertitle}}\n        </div>\n      \n        <img  class=\"footerImage\" src={{footerImage}}>\n      \n        </div> -->\n    <div class=\"imageHeightFotter\">\n        <span class=\"left rightFooterCss\">{{footertitle}} </span><span class=\"right footerImage\"><img class=\"imageHeightFotter\" src={{footerImage}}></span>​\n    </div>\n</ion-content>\n<ion-header *ngIf='theme == \"summer\"'>\n    <ion-toolbar class=\"toolBarCss\" [color]=\"currentColor\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button class=\"menuButton\"></ion-menu-button>\n        </ion-buttons>\n        <img alt=\"logo\" class=\"logoImage\" src=\"assets/img/logo_iPhone.png\">\n    </ion-toolbar>\n    <div class=\"headerTemp\">\n        <ion-grid>\n            <ion-row class=\"headerTempRow\">\n                <!-- <ion-col class=\"Topcss\">\n               {{weatherData1.day}}   \n               </ion-col> -->\n                <ion-col class=\"addBorder\">\n                    {{weatherData1.day}}\n                </ion-col>\n                <ion-col class=\"addBorder\">\n                    Min Temp\n                </ion-col>\n                <ion-col class=\"\">\n                    Max Temp\n                </ion-col>\n                \n                <!-- <ion-col size=\"5\">\n                    Road Status\n\n                </ion-col> -->\n            </ion-row>\n            \n        </ion-grid>\n        <ion-grid>\n            <ion-row class=\"headerTempRowVal\">\n                <!-- <ion-col class=\"FirstCal\">\n               {{weatherData1.time}} \n               </ion-col> -->\n                <ion-col class=\"secoundCal\">\n                    {{weatherData1.current_temp}}\n                </ion-col>\n                <ion-col class=\"thirdCal\">\n                    {{weatherData1.min_temp}}\n                </ion-col>\n                <ion-col>\n                    {{weatherData1.max_temp}}\n                </ion-col>\n                \n                \n\n            </ion-row>\n\n        </ion-grid>\n        <ion-grid>\n            <ion-row class=\"headerTempRow\">\n                <!-- <ion-col class=\"Topcss\">\n               {{weatherData1.day}}   \n               </ion-col> -->\n               \n                <ion-col size=\"6\" class=\"addBorder\">\n                    Next Event\n\n                </ion-col>\n                <ion-col size=\"6\">\n                    Road Status\n\n                </ion-col>\n                \n            </ion-row>\n            \n        </ion-grid>\n        <ion-grid>\n            <ion-row class=\"headerTempRow\">\n                <ion-col class=\"secoundCal\" size=\"6\" [ngClass]=\"{'pad-r-25':istext2}\">\n                    <p [ngClass]=\"istext2 ? 'LongText' : 'shortText'\">{{weatherData1.summer_next_event}}</p><br>\n                    <div *ngIf=\"weatherData1?.summer_next_event.length > 25\" class=\"mainDiv\">\n                        <div *ngIf=\"!buttonHide2\" (click)=\"buttonClick2()\" class=\"down\">\n                        </div>\n                        <div *ngIf=\"buttonHide2\" (click)=\"buttonClick2()\" class=\"up\">\n                        </div>\n                    </div>\n                </ion-col>\n\n                <ion-col class=\"RoadCss\" size=\"6\" [ngClass]=\"{'pad-r-25':istext}\">\n                    <p [ngClass]=\"istext ? 'LongText' : 'shortText'\">{{weatherData.summer_road_status}}</p><br>\n                    <div *ngIf=\"weatherData?.summer_road_status.length > 25\" class=\"mainDiv\">\n                        <div *ngIf=\"!buttonHide\" (click)=\"buttonClick()\" class=\"down\">\n                        </div>\n                        <div *ngIf=\"buttonHide\" (click)=\"buttonClick()\" class=\"up\">\n                        </div>\n                    </div>\n                </ion-col>\n                \n                <!-- <ion-col size=\"5\" style=\"text-align: left;margin-top: -20px;padding-left: 15px;\">\n                     &nbsp; <span style=\"font-weight: 800;font-size: 11px;\">{{weatherData1.summer_next_event}}</span>\n                </ion-col> -->\n            </ion-row>\n\n        </ion-grid>\n        <!-- <ion-grid class=\"gridClassLast\">\n      <ion-row class=\"headerColorCss\">\n          See trail conditions\n      </ion-row>\n      <ion-row class=\"headerColorCss\">\n          View live cameras\n        </ion-row>\n        <ion-row class=\"headerColorCss\">\n            Subscribe\n          </ion-row>\n      </ion-grid>  -->\n        <!-- <ion-button  class=\"buttonHeader\" color=\"light\">View report</ion-button> -->\n        <div class=\"buttonClassTempReport\">\n            <ion-button class=\"buttonHeader\" (click)=\"openWeather()\" color=\"light\">View report</ion-button>\n            <ion-button class=\"buttonHeader\" (click)=\"openCams()\" color=\"light\">View live Cams</ion-button>\n        </div>\n    </div>\n</ion-header>\n<ion-content *ngIf='theme == \"summer\"'>\n    <!-- <ion-button expand=\"block\" routerLink=\"/menu/first/tabs/tab1/details\" routerDirection=\"forward\">\n      Details forward\n      </ion-button> -->\n    <div class=\"spinnerClass\" *ngIf=\"message != 'success'\">\n        <ion-spinner icon=\"lines\" class=\"spinnerImage\"></ion-spinner>\n    </div>\n    <ion-slides [options]=\"slideOpts\" class=\"slidesCss\" pager=\"true\">\n        <ion-slide *ngFor=\"let homeSlide of slide\">\n            <div class=\"MainLabelDivSlide\">\n                <label class=\"sliderLabel\">{{homeSlide.heading}}</label>\n                <label class=\"sliderlabel2\">{{homeSlide.subheading}}</label>\n                <ion-button *ngIf='homeSlide.slider_action_text != \"\"' (click)=\"slideButton(homeSlide)\" class=\"buttonText\">{{homeSlide.slider_action_text}}</ion-button>\n            </div>\n            <img class=\"slideImaage\" src={{homeSlide.thumb}} />\n        </ion-slide>\n    </ion-slides>\n    <ion-card *ngIf='BoolImgae == true' class=\"cardAvater\">\n        <ion-item lines=\"none\">\n            <ion-avatar class=\"avaterClass\" item-left>\n                <img src={{image}}>\n            </ion-avatar>\n            <h2 class=\"HeaderAvater\">{{firstname}} {{lastname}}</h2>\n        </ion-item>\n        <p class=\"parClassAvater\">MTbawbaw pts: {{points}}</p>\n        <!-- <div class=\"goldCss\">Gold Member</div> -->\n    </ion-card>\n    <ion-card *ngIf='BoolImgae != true' class=\"cardForLogin\">\n        <h3 class=\"titleWithLogo\"><img alt=\"logo\" src=\"assets/img/logo_iPhone.png\"> &nbsp; Loyalty Program</h3>\n        <h6 style=\"margin: 5px 0 20px;\">Login/Register to access loyalty Programs</h6>\n        <ion-button routerLink=\"login\" class=\"buttonHeader\" color=\"light\">Login</ion-button>\n        &nbsp;\n        <ion-button routerLink=\"registraion\" class=\"buttonHeader\" color=\"light\">Register</ion-button>\n    </ion-card>\n    <table class=\"hoildayTabel\" width=\"100%\">\n        <tr>\n            <td *ngFor=\"let item of imagearray let i = index\" (click)=\"open(i)\" class=\"HoildayCss\" width=\"25%\"><img class=\"holdayImageClass\" src={{item.imageName}}><span class=\"holdayImageClasstext\">{{item.imageText}}</span></td>\n        </tr>\n    </table>\n    <div class=\"bottomCssHoliday\">\n        <div class=\"winterCss\"> Summer Activities </div>\n        <table class=\"hoildayTabel\" width=\"100%\">\n            <tr>\n                <td *ngFor=\"let items of activity; let i = index \" class=\"HoildayCss1\" (click)=\"openActivity(items)\" width=\"33%\">\n                    <div class=\"imageDiv\">\n                        <img class=\"holdayImageClass1\" src={{items.post_icon}}>\n                    </div>\n                    <span class=\"holdayImageClasstext\" [innerHtml]=\"breakWords(items.title)\"><!-- <marquee *ngIf=\"i==1\" behavior=\"scroll\" direction=\"left\">{{items.title}}</marquee> --></span>\n                </td>\n            </tr>\n        </table>\n        <!-- <ion-button [color]=\"currentColorButton\"  (click)=\"openActivityAll()\" class=\"buttonGet\">Find out more</ion-button> -->\n    </div>\n    <!-- <div class=\"FooterMain\">\n      <div class=\"FooterTitle\">\n          {{footertitle}}\n        </div>\n      \n        <img  class=\"footerImage\" src={{footerImage}}>\n      \n        </div> -->\n    <div class=\"imageHeightFotter\">\n        <span class=\"left rightFooterCss\">{{footertitle}} </span><span class=\"right footerImage\"><img class=\"imageHeightFotter\" src={{footerImage}}></span>​\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logoImage {\n  width: 32%;\n  margin-top: 5%;\n  float: right; }\n\n.pad-r-25 {\n  padding-right: 25px; }\n\n.menuButton {\n  margin-top: 20px;\n  margin-left: 8px; }\n\n.headerTemp {\n  background: #f58c29;\n  width: 90%;\n  margin-left: 5%;\n  position: absolute;\n  z-index: 22;\n  margin-top: -60px;\n  border-radius: 4px;\n  padding: 10px 0px; }\n\n.cardForLogin {\n  margin: 0;\n  padding: 10px 10px 25px;\n  text-align: center;\n  background: #222428;\n  color: #fff;\n  border-radius: 0; }\n\n.titleWithLogo {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  color: #f58b2a; }\n\n.titleWithLogo img {\n  width: 60px;\n  margin: 0;\n  height: 23px; }\n\n.slideClass {\n  height: 70vh !important;\n  width: auto !important; }\n\n.cardAvater {\n  height: 15%; }\n\n.avaterClass {\n  margin-top: 6%;\n  height: 70%;\n  width: 15%; }\n\n.HeaderAvater {\n  margin-left: 4%;\n  margin-top: -1%; }\n\n.parClassAvater {\n  margin-left: 22.5%;\n  margin-top: -7%;\n  position: absolute;\n  color: #f58c29; }\n\n.buttonText {\n  --background:rgb(245,140,41);\n  --background-activated:rgb(245,140,41);\n  --background-focused:rgb(245,140,41);\n  --background-hover:rgb(245,140,41);\n  width: 140px;\n  margin-top: 13px; }\n\n.goldCss {\n  position: relative;\n  text-align: right;\n  margin-top: -8%;\n  margin-right: 1%;\n  color: #f58c29; }\n\n.HoildayCss {\n  display: inline-grid;\n  font-size: 9px;\n  margin-top: 8%;\n  text-align: -webkit-center; }\n\n.HoildayCss1 {\n  display: inline-block;\n  font-size: 14px;\n  margin-top: 8%;\n  text-align: -webkit-center;\n  color: white;\n  vertical-align: middle;\n  height: 120px;\n  font-weight: 600; }\n\n.hoildayTabel {\n  margin-left: 1%; }\n\n.holdayImageClass {\n  width: 55%; }\n\n.holdayImageClass1 {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  width: 28px; }\n\n.holdayImageClasstext {\n  margin-top: 10px; }\n\n.bottomCssHoliday {\n  background-color: #f58c29;\n  margin-top: 10%;\n  padding-bottom: 5%; }\n\n.winterCss {\n  text-align: center;\n  position: relative;\n  padding-top: 4%;\n  color: white;\n  font-size: 25px;\n  font-weight: 700; }\n\n.navBarCss {\n  background-color: #222;\n  height: 8%; }\n\n.headerTempRow {\n  color: white;\n  font-size: 9px;\n  font-weight: 400;\n  text-align: center;\n  width: 100%;\n  flex-wrap: nowrap; }\n\n.headerTempRowVal {\n  color: white;\n  font-weight: 800;\n  text-align: center;\n  margin-top: -6%;\n  font-size: 11px;\n  flex-wrap: nowrap; }\n\n.thirdCal {\n  margin-left: -3px; }\n\n.addBorder {\n  border-right: 0.1px solid white; }\n\n.Topcss {\n  font-size: 12px; }\n\n.headerColorCss {\n  margin-left: 1%;\n  color: white;\n  margin-top: 1.5%;\n  font-weight: 900;\n  text-decoration: underline !important;\n  margin-bottom: 5px; }\n\n.buttonHeader {\n  width: 37%;\n  font-size: 8px; }\n\n.toolBarCss {\n  height: 133px; }\n\n.sliderLabel {\n  color: white;\n  font-weight: bold;\n  font-size: 25px;\n  display: block; }\n\n.gridClassLast {\n  margin-top: -2%; }\n\n.sliderlabel2 {\n  padding: 0px 4px;\n  font-size: 18px;\n  display: block;\n  margin-top: 10px;\n  color: white; }\n\n.spinnerClass {\n  text-align: center;\n  position: absolute;\n  margin-top: 52%;\n  z-index: 1;\n  height: 141%;\n  width: 100%; }\n\n.spinnerImage {\n  width: 15%;\n  height: 15%;\n  color: #f58c29; }\n\n.imageDiv {\n  border-radius: 50%;\n  width: 68px;\n  height: 68px;\n  border: 1px solid white;\n  background: #ff9b53;\n  margin-bottom: 7px; }\n\n.slidesCss {\n  height: 365px;\n  position: relative; }\n\n.slideImaage {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  height: 365px;\n  width: 100%; }\n\nion-slides {\n  --bullet-background: white;\n  --bullet-background-active: rgb(255,155,83)\n; }\n\n.buttonGet {\n  margin-left: 13px;\n  margin-top: 26px; }\n\nion-button.buttonGet {\n  background-color: #ff9b53; }\n\n.buttonClassTempReport {\n  display: block;\n  text-align: center; }\n\n.MainLabelDivSlide {\n  text-align: center;\n  position: absolute; }\n\n.FooterTitle {\n  margin-left: 7px;\n  padding-top: 16px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #ff9b53; }\n\n.FooterMain {\n  height: 52px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%; }\n\n.footerImage {\n  width: 30%;\n  padding-right: 15px; }\n\n.right {\n  float: right; }\n\n.left {\n  float: left; }\n\n.rightFooterCss {\n  margin-top: 16px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #ff9b53;\n  width: 70%;\n  padding-left: 15px; }\n\n.imageHeightFotter {\n  height: 50px; }\n\nion-loading.custom {\n  --background: transparent;\n  --spinner-color: #ff9b53; }\n\n.LongText {\n  display: block;\n  max-width: 100%;\n  margin: 0 auto;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-top: -20px;\n  font-weight: bold;\n  font-size: 11px; }\n\n.shortText {\n  display: block;\n  max-width: 95%;\n  margin: 0 auto;\n  margin-right: 5%;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: -20px;\n  font-weight: bold;\n  white-space: nowrap;\n  font-size: 11px; }\n\n.LongText-w {\n  display: block;\n  max-width: 100%;\n  margin: 0 auto;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-weight: bold;\n  font-size: 11px; }\n\n.shortText-w {\n  display: block;\n  max-width: 95%;\n  margin: 0 auto;\n  margin-right: 5%;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: bold;\n  white-space: nowrap;\n  font-size: 11px; }\n\n.readbutton {\n  --background:transparent;\n  margin-bottom: -6px; }\n\n.down {\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 4px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg); }\n\n.mainDiv {\n  width: 100%;\n  margin-top: -26px;\n  position: absolute;\n  right: 5px;\n  text-align: right;\n  top: 10px; }\n\n.up {\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 4px; }\n\n@supports (-webkit-overflow-scrolling: touch) {\n  /* CSS specific to iOS devices */\n  /* iphone X */\n  @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n    .headerTemp {\n      margin-top: -23px !important; } }\n  /* iphone XR */\n  @media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n    .headerTemp {\n      margin-top: -23px !important; } }\n  /* iphone XS */\n  @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n    .headerTemp {\n      margin-top: -23px !important; } }\n  /* iphone XS Max */\n  @media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n    .headerTemp {\n      margin-top: -23px !important; } } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsbUJBQW1CO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUd2QjtFQUNFLFNBQVM7RUFDUCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UsMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVztFQUNULFNBQVM7RUFDVCxZQUFZLEVBQUE7O0FBaUNkO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUlkO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFzQixFQUFBOztBQUV4QjtFQUNFLDRCQUFhO0VBQ2Isc0NBQXVCO0VBQ3ZCLG9DQUFxQjtFQUNyQixrQ0FBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFzQixFQUFBOztBQUl4QjtFQUNFLG9CQUFvQjtFQUNs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QUEsRUFHMUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZHJvaWRcbi5sb2dvSW1hZ2V7XG4gIHdpZHRoOiAzMiU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wYWQtci0yNXtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cbi8vYW5kcm9pZFxuICAubWVudUJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4vL2FuZHJvaWRcbiAgLmhlYWRlclRlbXB7XG4gICAgYmFja2dyb3VuZDogI2Y1OGMyOTtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyMjtcbiAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gIH1cblxuLmNhcmRGb3JMb2dpbntcbiAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyNDI4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi50aXRsZVdpdGhMb2dve1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgY29sb3I6ICNmNThiMmE7XG5cbn1cblxuLnRpdGxlV2l0aExvZ28gaW1ne1xuICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAyM3B4O1xufVxuXG4vL2lvc1xuLy8gLmxvZ29JbWFnZXtcbi8vICAgd2lkdGg6IDMyJTtcbi8vICAgbWFyZ2luLXRvcDogMCU7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vIH1cblxuXG5cbi8vaW9zXG4vLyAubWVudUJ1dHRvbntcbi8vICAgbWFyZ2luLXRvcDogMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICB9XG5cblxuXG4vL0lPc1xuLy8gLmhlYWRlclRlbXB7XG4vLyAgIGJhY2tncm91bmQ6ICNmNThjMjk7XG4vLyAgICAgd2lkdGg6IDkwJTtcbi8vICAgICBtYXJnaW4tbGVmdDogNSU7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHotaW5kZXg6IDIyO1xuLy8gICAgIG1hcmdpbi10b3A6IC00NXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbi8vIH1cblxuXG4gIC5zbGlkZUNsYXNze1xuICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2FyZEF2YXRlcntcbiAgICBoZWlnaHQ6IDE1JTtcbiAgfVxuXG4gIC5hdmF0ZXJDbGFzc3tcbiAgICBtYXJnaW4tdG9wOiA2JTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogMTUlO1xufVxuICBcbiBcbi5IZWFkZXJBdmF0ZXJ7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgbWFyZ2luLXRvcDogLTElO1xufVxuLnBhckNsYXNzQXZhdGVye1xuICBtYXJnaW4tbGVmdDogMjIuNSU7XG4gIG1hcmdpbi10b3A6IC03JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogcmdiKDI0NSwxNDAsNDEpXG59XG4uYnV0dG9uVGV4dHtcbiAgLS1iYWNrZ3JvdW5kOnJnYigyNDUsMTQwLDQxKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDpyZ2IoMjQ1LDE0MCw0MSk7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYigyNDUsMTQwLDQxKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOnJnYigyNDUsMTQwLDQxKTtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG4uZ29sZENzc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTglO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xuICBjb2xvcjogcmdiKDI0NSwxNDAsNDEpICAgXG59XG5cblxuLkhvaWxkYXlDc3N7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuLkhvaWxkYXlDc3Mxe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG4uaG9pbGRheVRhYmVse1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5ob2xkYXlJbWFnZUNsYXNze1xud2lkdGg6IDU1JTtcbn1cbi5ob2xkYXlJbWFnZUNsYXNzMXtcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIFxufVxuXG4uaG9sZGF5SW1hZ2VDbGFzc3RleHR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAkY29sb3JzOiAoXG4gICAgYmx1ZTogICAgIzM4N2VmNSxcbiAgICBzZWNvbmRhcnk6ICAjMzJkYjY0LFxuICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCwgIC8vIHRoZSBsaWdodCBjb2xvciB3ZSdyZSB1c2luZ1xuICAgIGRhcms6ICAgICAgICAgICMyMjIsXG4gICAgb3JhbmdsZTogICAgICAgI2Y1OGMyOS8vIHRoZSBkYXJrIGNvbG9yIHdlJ3JlIHVzaW5nXG4gKTtcbiBcblxuXG4uYm90dG9tQ3NzSG9saWRheXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGMyOTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbi53aW50ZXJDc3N7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDQlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm5hdkJhckNzc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgaGVpZ2h0IDogOCU7XG59XG5cbi8vIC5oZWFkZXJUZW1we1xuLy8gICBiYWNrZ3JvdW5kOiAjZjU4YzI5O1xuLy8gICAgIHdpZHRoOiA5MCU7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB6LWluZGV4OiAyMjtcbi8vICAgICBtYXJnaW4tdG9wOiAtNTRweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgICAgcGFkZGluZzogMTBweCAwcHg7XG4vLyB9XG5cbi5oZWFkZXJUZW1wUm93e1xuICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cblxuLmhlYWRlclRlbXBSb3dWYWx7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtNiU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwXG59XG5cbi5GaXJzdENhbHtcbiAgLy8gbWFyZ2luLWxlZnQ6IDElO1xufVxuXG4uc2Vjb3VuZENhbHtcbiAgLy8gbWFyZ2luLWxlZnQ6IDIuNSU7XG59XG5cbi50aGlyZENhbHtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbi5hZGRCb3JkZXJ7XG4gIGJvcmRlci1yaWdodDogMC4xcHggc29saWQgd2hpdGU7IFxufVxuXG4uVG9wY3Nze1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5oZWFkZXJDb2xvckNzc3tcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEuNSU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ1dHRvbkhlYWRlcntcbiAgd2lkdGg6IDM3JTtcbiAgZm9udC1zaXplOiA4cHg7ICBcbn1cblxuLnRvb2xCYXJDc3N7XG4gIGhlaWdodDogMTMzcHg7XG59XG5cbi5zbGlkZXJMYWJlbHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdyaWRDbGFzc0xhc3R7XG4gIG1hcmdpbi10b3A6IC0yJTtcbn1cbi5zbGlkZXJsYWJlbDJ7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3Bpbm5lckNsYXNze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDUyJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogMTQxJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4uc3Bpbm5lckltYWdle1xuICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMTUlO1xuICAgIGNvbG9yOiAjZjU4YzI5O1xufVxuXG5cbi5pbWFnZURpdntcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA2OHB4O1xuICAgIGhlaWdodDogNjhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDE1NSw4Myk7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG5cbi5zbGlkZXNDc3N7XG5oZWlnaHQ6IDM2NXB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5zbGlkZUltYWFnZXtcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNjVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHJnYigyNTUsMTU1LDgzKVxufVxuXG5cbi5idXR0b25HZXR7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4OyAgICBcbiAgbWFyZ2luLXRvcDogMjZweDtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbi5idXR0b25HZXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWI1MztcbiAgfVxuXG4gIC5idXR0b25DbGFzc1RlbXBSZXBvcnR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Sb2FkQ3Nze1xuICAgIFxuICB9XG5cbiAgLk1haW5MYWJlbERpdlNsaWRle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuXG4gIC5Gb290ZXJUaXRsZXtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmY5YjUzO1xuICB9XG5cbiAgLkZvb3Rlck1haW57XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmZvb3RlckltYWdle1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuXG4gIC5yaWdodHtcbiAgICBmbG9hdDpyaWdodDtcbiAgfVxuICBcbiAgLmxlZnR7XG4gICAgZmxvYXQ6bGVmdDtcbiAgfVxuICAucmlnaHRGb290ZXJDc3N7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmOWI1MztcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfVxuXG4gIC5pbWFnZUhlaWdodEZvdHRlcntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICBpb24tbG9hZGluZy5jdXN0b217XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXNwaW5uZXItY29sb3I6ICNmZjliNTM7XG4gIH1cblxuLy8gICAuTG9uZ1RleHR7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIC8vIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuLy8gICBtYXgtd2lkdGg6IDg1JTtcbi8vICAgLy8gZmxvYXQ6IGxlZnQ7XG4vLyAgIC8vIG1hcmdpbi1sZWZ0OiAyJTtcbiAgXG4vLyAgIC8vIGhlaWdodDogMzJweDtcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIC8vIG1hcmdpbi1yaWdodDogNnB4O1xuLy8gICBtYXJnaW4tdG9wOiAtMjBweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbi8vICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbi8vICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyB9XG5cbi8vIC5zaG9ydFRleHR7XG4vLyAgIC8vIGRpc3BsYXk6IGlubGluZTtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIC8vIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuLy8gICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIC8vIGhlaWdodDogMzJweDtcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIC8vIG1hcmdpbi1yaWdodDogNnB4O1xuLy8gICAvLyBmbG9hdDogbGVmdDtcbi8vICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xuICBcbi8vICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuLy8gICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgbWFyZ2luLXRvcDogLTIwcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBcbi8vIH1cbiAgLkxvbmdUZXh0e1xuICAgIC8vIGRpc3BsYXk6IGlubGluZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8vIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIC8vIGZsb2F0OiBsZWZ0O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnNob3J0VGV4dHtcbiAgLy8gZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLy8gZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogOTUlO1xuICAvLyBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAvLyBmbG9hdDogbGVmdDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xuICBcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDExcHg7XG4gIFxufVxuLkxvbmdUZXh0LXd7XG4gICAgLy8gZGlzcGxheTogaW5saW5lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgLy8gZmxvYXQ6IGxlZnQ7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xuICAgIFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uc2hvcnRUZXh0LXd7XG4gIC8vIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgLy8gaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgLy8gZmxvYXQ6IGxlZnQ7XG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcbiAgXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC8vIG1hcmdpbi10b3A6IC0yMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBcbn1cblxuLnJlYWRidXR0b257XG4tLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG5tYXJnaW4tYm90dG9tOiAtNnB4O1xufVxuXG4uZG93bntcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xuICAvLyBtYXJnaW4tdG9wOiAtMjlweDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiAtNnB4O1xufVxuICBcbi5tYWluRGl2e1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRvcDogMTBweDtcbn1cblxuXG4udXAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHg7XG4gIC8vIGZsb2F0OiByaWdodDtcbiAgIC8vIG1hcmdpbi10b3A6IC01cHg7XG4gICAvLyBtYXJnaW4tcmlnaHQ6IC02cHg7XG59XG5cblxuQHN1cHBvcnRzICgtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2gpIHtcbiAgLyogQ1NTIHNwZWNpZmljIHRvIGlPUyBkZXZpY2VzICovIFxuICBcblxuLyogaXBob25lIFggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA4MTJweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgeyBcbiAgLmhlYWRlclRlbXB7XG4gICAgbWFyZ2luLXRvcDotMjNweCAhaW1wb3J0YW50O1xuICAgICAgIFxuICBcbiAgICB9XG59XG5cbi8qIGlwaG9uZSBYUiAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0IDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAyKSB7IFxuICAuaGVhZGVyVGVtcHtcbiAgICBtYXJnaW4tdG9wOi0yM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgXG4gIFxuICAgIH1cbn1cblxuLyogaXBob25lIFhTICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQgOiA4MTJweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDMpIHsgXG4gIC5oZWFkZXJUZW1we1xuICAgIG1hcmdpbi10b3A6LTIzcHggIWltcG9ydGFudDtcbiAgICAgICBcbiAgXG4gICAgfVxufVxuXG4vKiBpcGhvbmUgWFMgTWF4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQgOiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDMpIHtcbiAgLmhlYWRlclRlbXB7XG4gICAgbWFyZ2luLXRvcDotMjNweCAhaW1wb3J0YW50O1xuICAgICAgIFxuICBcbiAgICB9XG4gfVxuXG5cbiAgXG5cblxuICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/pages/image-modal/image-modal.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");















var Tab1Page = /** @class */ (function () {
    function Tab1Page(callNumber, modalController, events, plt, loadingController, _browser, router, shared, network, toast, transfer, file) {
        var _this = this;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.events = events;
        this.plt = plt;
        this.loadingController = loadingController;
        this._browser = _browser;
        this.router = router;
        this.shared = shared;
        this.network = network;
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.onlineOffline = navigator.onLine;
        this.istext = false;
        this.buttonHide = false;
        this.istext2 = false;
        this.buttonHide2 = false;
        this.imagearray = [
            {
                imageName: "assets/img/packages.png",
                imageText: "Packages"
            },
            {
                imageName: "assets/img/Whats_on.png",
                imageText: "What’s On"
            },
            {
                imageName: "assets/img/Live_cam.png",
                imageText: "Live Cam"
            },
            {
                imageName: "assets/img/getting_here.png",
                imageText: "Getting Here"
            },
            {
                imageName: "assets/img/accomodation.png",
                imageText: "Accommodation"
            },
            {
                imageName: "assets/img/village_map.png",
                imageText: "Village Map"
            },
            {
                imageName: "assets/img/ski_tracker.png",
                imageText: "Run Tracker"
            },
            {
                imageName: "assets/img/hospitality.png",
                imageText: "Hospitality"
            }
        ];
        this.currentColor = 'dark';
        this.currentColorButton = 'orangle';
        this.slideOpts = {
            zoom: false
        };
        // this.shared.showLoading()
        events.subscribe('Logout', function (time) {
            _this.BoolImgae = false;
        });
        events.subscribe('userFisrt:created', function (user) {
            _this.firstCall();
        });
    }
    Tab1Page.prototype.ionViewDidEnter = function () {
        this.firstCall();
    };
    Tab1Page.prototype.firstCall = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallHome.ServiceCallRequestHomeData().then(function (res) {
                //  this.shared.hideLoading()
                // debugger
                localStorage.setItem("homeArray", JSON.stringify(res));
                _this.value = JSON.parse(localStorage.getItem("homeArray"));
                _this.getItem(_this.value);
            }, function (err) {
                //   this.shared.hideLoading()
                _this.value = JSON.parse(localStorage.getItem("homeArray"));
                _this.getItem(_this.value);
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
            this.value = JSON.parse(localStorage.getItem("homeArray"));
            this.getItem(this.value);
        }
        var login = localStorage.getItem('login');
        if (login == 'true') {
            this.BoolImgae = true;
            var profile = localStorage.getItem('profile');
            this.data = JSON.parse(profile);
            this.firstname = this.data.content.profile.first_name;
            this.lastname = this.data.content.profile.last_name;
            this.points = this.data.content.profile.points;
            this.image = this.data.content.profile.profile_image;
            if (this.image == "") {
                this.image = "https://mountbawbaw.thesmarter.website/administrator/components/com_mtbawbaw/assets/images/profile/profile.png";
            }
        }
        else {
            this.BoolImgae = false;
        }
    };
    Tab1Page.prototype.slideButton = function (data) {
        var value = data;
        if (value.slider_action_type == "link") {
            if (value.slider_action_link != '' || value.slider_action_link != undefined) {
                var opts = "location=yes,clearcache=yes,hidespinner=no";
                this._browser.create(value.slider_action_link, '_blank', opts);
            }
        }
        else if (value.slider_action_type == "tel") {
            if (value.slider_action_link != '' || value.slider_action_link != undefined) {
                // let opts : string = "location=yes,clearcache=yes,hidespinner=no"
                // this._browser.create(value.slider_action_link, '_blank', opts);
                this.callNumber.callNumber(value.slider_action_link, true)
                    .then(function (res) { return console.log('Launched dialer!', res); })
                    .catch(function (err) { return console.log('Error launching dialer', err); });
            }
        }
    };
    Tab1Page.prototype.getItem = function (res) {
        this.response = res;
        this.slide = this.response.content.slides;
        this.theme = this.response.content.configuration.app_theme;
        localStorage.setItem("theme", this.theme);
        this.activity = this.response.content.activities;
        this.message = this.response.message;
        this.weatherData = this.response.content.configuration;
        // alert(this.weatherData.summer_road_status.length);
        // if(this.weatherData.summer_road_status.length > 20){
        //   this.istext = false;
        // }
        this.weatherData1 = this.response.content.weather;
        // alert(this.weatherData1.summer_next_event.length);
        // if(this.weatherData1.summer_next_event > 20){
        //   this.istext2 = false;
        // }
        console.log(this.weatherData1);
        this.footertitle = this.response.content.footer.footer_heading;
        this.footerImage = this.response.content.footer.footer_logo_image;
    };
    Tab1Page.prototype.open = function (index) {
        if (navigator.onLine) {
            if (index == 3) {
                this.router.navigate(['/menu/first/tabs/tab1/details']);
            }
            else if (index == 0) {
                // this.router.navigate(['/menu/first/tabs/tab1/packages']);
                this.packages();
            }
            else if (index == 4) {
                this.accomodation();
            }
            else if (index == 2) {
                this.router.navigate(['/menu/first/tabs/tab1/live-cam']);
            }
            else if (index == 7) {
                this.router.navigate(['/menu/first/tabs/tab1/hospitality'], { state: { theme: this.theme } });
            }
            else if (index == 5) {
                this.villageMap();
                // this.router.navigate(['/menu/first/tabs/tab1/village-map'],{ state: {theme:this.theme } });
            }
            else if (index == 1) {
                // this.villageMap()
                this.router.navigate(['/menu/first/tabs/tab1/events']);
            }
            else if (index == 6) {
                // this.villageMap()
                this.router.navigate(['/menu/first/tabs/tab1/skytrciker-new']);
            }
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    Tab1Page.prototype.accomodation = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallAccomodation.ServiceCallRequestAccomodationData().then(function (res) {
                _this.acourl = res;
                var data = _this.acourl.content.accommodation[0].iframe_url;
                _this.router.navigate(['/menu/first/tabs/tab1/accommodation'], { state: { acourl: data } });
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    Tab1Page.prototype.packages = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallPackages.ServiceCallRequestPackagesData().then(function (res) {
                _this.acourl = res;
                var data = _this.acourl.content.packages[0].iframe_url;
                _this.router.navigate(['/menu/first/tabs/tab1/packages'], { state: { acourl: data } });
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    Tab1Page.prototype.villageMap = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallVillage.ServiceCallRequestVillage().then(function (res) {
                // debugger
                _this.VillageMap = res;
                _this.data = _this.VillageMap.content.posts[0];
                _this.summerMap = _this.data.smpdf_files[0];
                _this.winterMap = _this.data.wmpdf_files[0];
                if (_this.theme == 'winter') {
                    _this.openModel(_this.winterMap);
                    // let opts : string = "location=yes,clearcache=yes,hidespinner=no"
                    // if (this.plt.is('ios')) {
                    //   window.open(this.winterMap, "_blank",opts);
                    // }else{
                    //   window.open(this.winterMap, "_system",opts);
                    // }
                    // this._browser.create(this.winterMap, '_blank', opts);
                }
                else {
                    _this.openModel(_this.summerMap);
                    // let opts : string = "location=yes,clearcache=yes,hidespinner=no"
                    //    if (this.plt.is('ios')) {
                    //     window.open(this.summerMap, "_blank",opts);
                    // }else{
                    //   window.open(this.summerMap, "_system",opts);
                    // }
                    //this._browser.create(this.summerMap, '_blank', opts);
                }
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    Tab1Page.prototype.openModel = function (url) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__["ImageModalPage"],
            componentProps: {
                img: url
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    Tab1Page.prototype.openActivity = function (items) {
        // this.router.navigate(['/menu/first/tabs/tab1/activity'],{ state: { activity: this.activity,theme:this.theme } });
        var _this = this;
        if (items.activity_action == 'iframe') {
            var opts = "location=yes,clearcache=yes,hidespinner=no";
            var browser_1 = this._browser.create(items.iframe_url, '_blank', opts);
            var mimeType = '';
            browser_1.on('loadstart').subscribe(function (data) {
                // console.log("URL IS",data.url);
                var url = decodeURIComponent(data.url).replace(/\+/g, '%20').replace(/\+/g, '%2526').replace(/\+/g, '%2520');
                var urlSplits = url.split('/');
                var extension = url.substr(url.length - 4);
                if (extension == '.pdf') {
                    _this.shared.toastmsg('Downloading...');
                    _this.shared.showLoading();
                    mimeType = "application/pdf";
                    var targetPath = _this.file.externalRootDirectory + "Download/" + urlSplits[urlSplits.length - 1];
                    var options = {};
                    var args = {
                        url: url,
                        targetPath: targetPath,
                        options: options,
                        mimeType: mimeType
                    };
                    browser_1.close(); // close window or you get exception
                    var self = _this;
                    document.addEventListener('deviceready', function () {
                        setTimeout(function () {
                            self.downloadfile(args); // call the function which will download the file 1s after the window is closed, just in case..
                        }, 1000);
                    });
                }
                else if (extension == '.gpx') {
                    _this.shared.toastmsg('Downloading...');
                    _this.shared.showLoading();
                    mimeType = "application/octet-stream";
                    var targetPath = _this.file.externalRootDirectory + "Download/" + urlSplits[urlSplits.length - 1];
                    var options = {};
                    // alert(targetPath)
                    var args = {
                        url: url,
                        targetPath: targetPath,
                        options: options,
                        mimeType: mimeType
                    };
                    browser_1.close(); // close window or you get exception
                    var self = _this;
                    document.addEventListener('deviceready', function () {
                        setTimeout(function () {
                            self.downloadfile(args); // call the function which will download the file 1s after the window is closed, just in case..
                        }, 1000);
                    });
                }
                // this.downloadfile(data)
            }, function (err) {
                console.log("InAppBrowser Loadstop Event Error: " + err);
            });
        }
        else {
            this.router.navigate(['/menu/first/tabs/tab1/activity-next'], { state: { data: items } });
        }
    };
    Tab1Page.prototype.downloadfile = function (args) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var uri = encodeURI(args.url);
        fileTransfer.download(uri, // file's uri
        args.targetPath).then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            _this.shared.hideLoading();
            _this.shared.openFile(entry.toURL(), args.mimeType);
            // if(args.mimeType == 'application/pdf'){
            // }else{
            //   this.file.readAsText()
            // }
        }, function (error) {
            console.log(error);
            _this.shared.hideLoading();
            // handle error
        });
    };
    Tab1Page.prototype.openActivityAll = function () {
        this.router.navigate(['/menu/first/tabs/tab1/activity'], { state: { activity: this.activity, theme: this.theme } });
    };
    Tab1Page.prototype.openWeather = function () {
        if (navigator.onLine) {
            this.router.navigate(['/menu/first/tabs/tab1/weather-report'], { state: { theme: this.theme } });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    Tab1Page.prototype.openCams = function () {
        this.router.navigate(['/menu/first/tabs/tab1/live-cam']);
    };
    Tab1Page.prototype.ngOnInit = function () {
    };
    Tab1Page.prototype.buttonClick = function () {
        this.istext = this.istext ? false : true;
        this.buttonHide = this.buttonHide ? false : true;
    };
    Tab1Page.prototype.buttonClick2 = function () {
        this.istext2 = this.istext2 ? false : true;
        this.buttonHide2 = this.buttonHide2 ? false : true;
    };
    Tab1Page.prototype.breakWords = function (word) {
        var w = word.split(' ');
        if (w.length > 2) {
            var str = word;
            var n = 2; // second space
            var a = str.split(' ');
            var first = a.slice(0, n).join(' ');
            var second = a.slice(n).join(' ');
            return first + '<br>' + second;
        }
        else {
            return word;
        }
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tab1",
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/pages/tab1/tab1.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map