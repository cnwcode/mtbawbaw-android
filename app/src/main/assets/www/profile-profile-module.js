(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"loginColor\">\n\n   \n    <div class=\"container\">\n        <div id=\"content\" style=\"background-color: #fff;border: 1px solid #fff;\">\n           <!-- Begin Content -->\n\n           <form id=\"form-login\">\n       <div class=\"control-group\">\n         <div class=\"input-prepend\">\n           <div class=\"editprofilepic\">\n             <div (click) =\"GetImage()\" class=\"userdp\">\n               <img src=\"{{image}}\" id=\"prof_logo\" alt=\"profile_logo\">\n             </div>\n             <!-- <div class=\"dpbrowsebtn\"> -->\n               <!-- <span>Browse</span> -->\n               <!-- <input id=\"blogpic\" name=\"blogpic\" type=\"file\" title=\"\"  class=\"hasTooltip\" data-original-title=\"Profile pic ratio 400px x 400px\" aria-invalid=\"false\">\n             </div> -->\n           </div>\n           <p style=\"color:#f58c29\">MtBawBaw pts: <strong>{{points}}</strong></p>\n         </div>\n       </div>\n              <div class=\"control-group\">\n                 <div class=\"input-prepend\">\n                    <span class=\"add-on comn-sec\">\n                    <i class=\"fa fa-user\"></i>\n                    </span>\n                    <input name=\"firstname\" [(ngModel)]=\"firstname\" id=\"mod-reg-firstname\" type=\"text\" class=\"comn-sec\" size=\"15\">\n                    <a class=\"tooltip comn-sec tooltip\">\n                    <i class=\"fa fa-question-circle\"></i>\n                    <span class=\"tooltiptext\">Enter First name</span>\n                    </a>\n                 </div>\n              </div>\n              <div class=\"control-group\">\n                 <div class=\"input-prepend\">\n                    <span class=\"add-on comn-sec\">\n                    <i class=\"fa fa-user\"></i>\n                    </span>\n                    <input name=\"lastname\" [(ngModel)]=\"lastname\" id=\"mod-reg-lastname\" type=\"text\" class=\"comn-sec\"  size=\"15\">\n                     <a class=\"tooltip comn-sec tooltip\">\n                    <i class=\"fa fa-question-circle\"></i>\n                    <span class=\"tooltiptext\">Enter Last name</span>\n                    </a>\n                 </div>\n               </div>\n               <div class=\"control-group\">\n                 <div class=\"input-prepend\">\n                    <span class=\"add-on comn-sec\">\n                    <i class=\"fa fa-phone\"></i>\n                    </span>\n                    <input type=\"number\" name=\"phone\" [(ngModel)]=\"phone\" (keypress)=\"blockSpecialChar($event)\" id=\"mod-reg-phone\" class=\"comn-sec\" placeholder=\"\" size=\"15\">\n                     <a class=\"tooltip comn-sec tooltip\">\n                    <i class=\"fa fa-question-circle\"></i>\n                    <span class=\"tooltiptext\">Enter Phone number</span>\n                    </a>\n                 </div>\n              </div>\n              <div class=\"control-group\">\n                 <div class=\"input-prepend\">\n                    <span class=\"add-on comn-sec\">\n                    <i class=\"fa fa-envelope\"></i>\n                    </span>\n                    <input name=\"email\" id=\"mod-reg-email\" type=\"email\" class=\"comn-sec\" [(ngModel)]=\"email\"  size=\"15\">\n                    <a class=\"tooltip comn-sec tooltip\">\n                    <i class=\"fa fa-question-circle\"></i>\n                    <span class=\"tooltiptext\">Enter Email</span>\n                    </a>\n                 </div>\n              </div>\n              <div class=\"control-group\">\n                 <div class=\"input-prepend\">\n                    <span class=\"add-on comn-sec\">\n                    <i class=\"fa fa-lock\"></i>\n                    </span>\n                    <input name=\"password\" id=\"mod-reg-password\" [(ngModel)]=\"password1\"  type=\"password\" class=\"comn-sec\" placeholder=\"Password\" size=\"15\">\n                     <a class=\"tooltip comn-sec tooltip\">\n                    <i class=\"fa fa-question-circle\"></i>\n                    <span class=\"tooltiptext\">Enter Password</span>\n                    </a>\n                 </div>\n              </div>\n              \n        <div class=\"control-group\">\n                 <div class=\"input-prepend\">\n                    <span class=\"add-on comn-sec\">\n                    <i class=\"fa fa-lock\"></i>\n                    </span>\n                    <input name=\"passwd\" id=\"mod-reg-password\" [(ngModel)]=\"password2\"  type=\"password\" class=\"comn-sec\" placeholder=\"Re-Password\" size=\"15\">\n                     <a class=\"tooltip comn-sec tooltip\">\n                    <i class=\"fa fa-question-circle\"></i>\n                    <span class=\"tooltiptext\">Enter Confirm Password</span>\n                    </a>\n                 </div>\n              </div>\n        <div class=\"control-group\">\n                 <div class=\"btn-group\">\n                    <button (click) =\"update()\"  class=\"btn-sec login-button\">\n                    <i class=\"fa fa-pencil-square-o\"></i>\n                    Update\n                    </button>\n                 </div>\n              </div>\n           </form>\n        </div>\n     </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editprofilepic {\n  border-radius: 100%;\n  margin: auto;\n  max-width: 150px;\n  overflow: hidden;\n  position: relative;\n  margin-bottom: 14px; }\n\n.userdp img {\n  vertical-align: middle;\n  max-width: 100%;\n  height: 150px; }\n\n.dpbrowsebtn span {\n  background: rgba(0, 0, 0, 0.35) none repeat scroll 0 0;\n  bottom: 0;\n  color: #fff;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: bold;\n  left: 0;\n  letter-spacing: 2px;\n  padding: 5px 0 10px;\n  position: absolute;\n  text-transform: uppercase;\n  top: auto;\n  -webkit-transition: all 0.3s linear 0s;\n  transition: all 0.3s linear 0s;\n  width: 100%;\n  text-align: center; }\n\n.dpbrowsebtn input {\n  bottom: 0;\n  cursor: pointer;\n  opacity: 0;\n  padding: 3px 0 6px;\n  position: absolute;\n  width: 100%;\n  z-index: 999;\n  height: 100%; }\n\n.dpbrowsebtn:hover span {\n  background: rgba(0, 0, 0, 0.55) none repeat scroll 0 0;\n  font-size: 14px;\n  padding: 90px 0 70px; }\n\nbody {\n  margin: 0;\n  background-color: #221F21; }\n\n.container {\n  width: 300px;\n  position: absolute;\n  top: 32%;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: -180px; }\n\n#content {\n  padding: 15px;\n  text-align: center;\n  background-color: #000;\n  border: 1px solid #000; }\n\n#content #logo img {\n  padding-top: 25px;\n  padding-bottom: 40px;\n  width: 180px; }\n\nform {\n  margin: 0 0 18px; }\n\nform .control-group {\n  margin-bottom: 9px;\n  box-sizing: border-box; }\n\nform .control-group .input-prepend {\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box; }\n\nform .control-group .comn-sec {\n  box-sizing: border-box;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle; }\n\nform .control-group .comn-sec.add-on {\n  box-sizing: border-box;\n  margin-right: -5px;\n  width: 45px;\n  border-radius: 3px 0 0 3px;\n  padding: 3px 0;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  text-align: center; }\n\nform .control-group .comn-sec.add-on .fa {\n  font-size: 16px;\n  line-height: 26px;\n  color: #333; }\n\nform .control-group input {\n  width: 182px;\n  background: #fff;\n  border: 1px solid #ccc;\n  padding: 4px 6px; }\n\nform .control-group .comn-sec.tooltip {\n  margin-left: -5px;\n  width: 48px;\n  border-radius: 0 3px 3px 0;\n  padding: 4px 0;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  text-align: center; }\n\nform .control-group .comn-sec.tooltip .fa {\n  font-size: 16px;\n  line-height: 26px;\n  color: #333; }\n\nform .control-group .login-button {\n  box-sizing: border-box;\n  cursor: pointer;\n  background-color: #f58c29;\n  margin-top: 30px;\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #fff;\n  font-size: 16px;\n  display: inline-block;\n  width: 100%;\n  padding: 7px 0; }\n\nform .control-group .login-button:hover {\n  background-color: #f58c29;\n  opacity: 0.82; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxzREFBc0Q7RUFDdEQsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxzQ0FBOEI7RUFBOUIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVoQjtFQUNJLHNEQUFzRDtFQUN0RCxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7O0FBR3hCO0VBQUssU0FBUTtFQUFDLHlCQUF5QixFQUFBOztBQUN2QztFQUFXLFlBQVc7RUFBQyxrQkFBa0I7RUFBQyxRQUFPO0VBQUMsU0FBUztFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQixFQUFBOztBQUNsRztFQUFTLGFBQVk7RUFBQyxrQkFBa0I7RUFBQyxzQkFBdUI7RUFBQyxzQkFBc0IsRUFBQTs7QUFDdkY7RUFBbUIsaUJBQWlCO0VBQUMsb0JBQW9CO0VBQUMsWUFBWSxFQUFBOztBQUN0RTtFQUFLLGdCQUFnQixFQUFBOztBQUNyQjtFQUFvQixrQkFBaUI7RUFBQyxzQkFBcUIsRUFBQTs7QUFDM0Q7RUFBbUMscUJBQXFCO0VBQUMsc0JBQXNCO0VBQUMsV0FBVTtFQUFDLHNCQUFxQixFQUFBOztBQUVoSDtFQUE4QixzQkFBcUI7RUFBQyxZQUFXO0VBQUMscUJBQW9CO0VBQUMsc0JBQXNCLEVBQUE7O0FBQzNHO0VBQXFDLHNCQUFxQjtFQUFDLGtCQUFrQjtFQUFDLFdBQVU7RUFBQywwQkFBMEI7RUFBQyxjQUFjO0VBQUMsc0JBQXNCO0VBQUMsc0JBQXNCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ25NO0VBQXlDLGVBQWU7RUFBQyxpQkFBZ0I7RUFBQyxXQUFVLEVBQUE7O0FBQ3BGO0VBQTBCLFlBQVc7RUFBQyxnQkFBZTtFQUFDLHNCQUFxQjtFQUFDLGdCQUFlLEVBQUE7O0FBQzNGO0VBQXNDLGlCQUFpQjtFQUFDLFdBQVU7RUFBQywwQkFBeUI7RUFBQyxjQUFjO0VBQUMsc0JBQXNCO0VBQUMsc0JBQXNCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQzVLO0VBQTBDLGVBQWU7RUFBQyxpQkFBZ0I7RUFBQyxXQUFVLEVBQUE7O0FBQ3JGO0VBQWtDLHNCQUFxQjtFQUFDLGVBQWM7RUFBQyx5QkFBeUI7RUFBQyxnQkFBZ0I7RUFBQyxrQkFBa0I7RUFBQyxvQ0FBaUM7RUFBQyxXQUFXO0VBQUMsZUFBYztFQUFDLHFCQUFvQjtFQUFDLFdBQVU7RUFBQyxjQUFhLEVBQUE7O0FBQy9PO0VBQXdDLHlCQUF5QjtFQUFDLGFBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXG4gICBibHVlOiAgICAjMzg3ZWY1LFxuICAgc2Vjb25kYXJ5OiAgIzMyZGI2NCxcbiAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICBsaWdodDogICAgICAjZjRmNGY0LCAgLy8gdGhlIGxpZ2h0IGNvbG9yIHdlJ3JlIHVzaW5nXG4gICBkYXJrOiAgICAgICAgICAjMjIyICAgLy8gdGhlIGRhcmsgY29sb3Igd2UncmUgdXNpbmdcbik7XG5cbi5lZGl0cHJvZmlsZXBpYyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLnVzZXJkcCBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG59XG4uZHBicm93c2VidG4gc3BhbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxlZnQ6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiA1cHggMCAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRvcDogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRwYnJvd3NlYnRuIGlucHV0IHtcbiAgICBib3R0b206IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZzogM3B4IDAgNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmRwYnJvd3NlYnRuOmhvdmVyIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogOTBweCAwIDcwcHg7XG59XG5cbmJvZHl7bWFyZ2luOjA7YmFja2dyb3VuZC1jb2xvcjogIzIyMUYyMTt9XG4uY29udGFpbmVye3dpZHRoOjMwMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzIlO2xlZnQ6IDUwJTttYXJnaW4tbGVmdDogLTE1MHB4O21hcmdpbi10b3A6IC0xODBweDt9XG4jY29udGVudHtwYWRkaW5nOjE1cHg7dGV4dC1hbGlnbjogY2VudGVyO2JhY2tncm91bmQtY29sb3I6ICMwMDAgO2JvcmRlcjogMXB4IHNvbGlkICMwMDA7fVxuI2NvbnRlbnQgI2xvZ28gaW1ne3BhZGRpbmctdG9wOiAyNXB4O3BhZGRpbmctYm90dG9tOiA0MHB4O3dpZHRoOiAxODBweDt9XG5mb3Jte21hcmdpbjogMCAwIDE4cHg7fVxuZm9ybSAuY29udHJvbC1ncm91cHttYXJnaW4tYm90dG9tOjlweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7fVxuZm9ybSAuY29udHJvbC1ncm91cCAuaW5wdXQtcHJlcGVuZHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTt3aWR0aDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9XG5mb3JtIC5jb250cm9sLWdyb3VwIC5pbnB1dC1wcmVwZW5kIC5hZGQtb257fVxuZm9ybSAuY29udHJvbC1ncm91cCAuY29tbi1zZWN7Ym94LXNpemluZzpib3JkZXItYm94O2hlaWdodDozNXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuZm9ybSAuY29udHJvbC1ncm91cCAuY29tbi1zZWMuYWRkLW9ue2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tcmlnaHQ6IC01cHg7d2lkdGg6NDVweDtib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtwYWRkaW5nOiAzcHggMDtiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO2JvcmRlcjogMXB4IHNvbGlkICNjY2M7dGV4dC1hbGlnbjogY2VudGVyO31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2VjLmFkZC1vbiAuZmF7Zm9udC1zaXplOiAxNnB4O2xpbmUtaGVpZ2h0OjI2cHg7Y29sb3I6IzMzMzt9XG5mb3JtIC5jb250cm9sLWdyb3VwIGlucHV0e3dpZHRoOjE4MnB4O2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNjY2M7cGFkZGluZzo0cHggNnB4O31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2VjLnRvb2x0aXB7bWFyZ2luLWxlZnQ6IC01cHg7d2lkdGg6NDhweDtib3JkZXItcmFkaXVzOjAgM3B4IDNweCAwO3BhZGRpbmc6IDRweCAwO2JhY2tncm91bmQtY29sb3I6ICNlZWU7Ym9yZGVyOiAxcHggc29saWQgI2NjYzt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuZm9ybSAuY29udHJvbC1ncm91cCAuY29tbi1zZWMudG9vbHRpcCAuZmF7Zm9udC1zaXplOiAxNnB4O2xpbmUtaGVpZ2h0OjI2cHg7Y29sb3I6IzMzMzt9XG5mb3JtIC5jb250cm9sLWdyb3VwIC5sb2dpbi1idXR0b257Ym94LXNpemluZzpib3JkZXItYm94O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6ICNmNThjMjk7bWFyZ2luLXRvcDogMzBweDtib3JkZXItcmFkaXVzOiAzcHg7Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO2NvbG9yOiAjZmZmO2ZvbnQtc2l6ZToxNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMCU7cGFkZGluZzo3cHggMDt9XG5mb3JtIC5jb250cm9sLWdyb3VwIC5sb2dpbi1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogI2Y1OGMyOTtvcGFjaXR5OjAuODI7fVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");




var ProfilePage = /** @class */ (function () {
    function ProfilePage(camera, shared) {
        this.camera = camera;
        this.shared = shared;
        this.tooltipEvent = 'click';
        this.showArrow = true;
        this.duration = 3000;
        //  this.currentColor = 'dark';
        this.updateProfile();
    }
    ProfilePage.prototype.updateProfile = function () {
        var profile = localStorage.getItem('profile');
        this.data = JSON.parse(profile);
        this.firstname = this.data.content.profile.first_name;
        this.lastname = this.data.content.profile.last_name;
        this.email = this.data.content.profile.email;
        this.userid = this.data.user_id;
        this.phone = this.data.content.profile.phone;
        this.points = this.data.content.profile.points;
        this.image = this.data.content.profile.profile_image;
        if (this.image == "") {
            this.image = "https://mountbawbaw.thesmarter.website/administrator/components/com_mtbawbaw/assets/images/profile/profile.png";
        }
        if (this.phone != undefined || this.phone != null) {
            this.phone = this.data.content.profile.phone;
        }
    };
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.blockSpecialChar = function (e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    ProfilePage.prototype.update = function () {
        var _this = this;
        if (this.firstname == "" || this.firstname == undefined) {
            this.shared.displayNetworkUpdate('First Name cannot be blank');
        }
        else if (this.lastname == "" || this.lastname == undefined) {
            this.shared.displayNetworkUpdate('Last Name cannot be blank');
        }
        else if (this.email == "" || this.email == undefined) {
            this.shared.displayNetworkUpdate('Email cannot be blank');
        }
        else if (this.password2 != this.password1) {
            this.shared.displayNetworkUpdate('Password and Confirm Password must be same');
        }
        else {
            if (this.password1 == undefined && this.password2 == undefined) {
                this.password1 = '';
                this.password2 = '';
            }
            if (navigator.onLine) {
                this.shared.ServiceCallUpdateProfile.ServiceCallRequestProfileData(this.userid, this.firstname, this.lastname, this.phone, this.email, this.password1, this.password2, this.base64, this.mime).then(function (res) {
                    _this.response = res;
                    if (_this.response.message == 'error') {
                        _this.shared.displayNetworkUpdate(_this.response.content);
                    }
                    else {
                        localStorage.setItem('profile', JSON.stringify(_this.response));
                        _this.updateProfile();
                        _this.shared.displayNetworkUpdate('Profile Updated');
                    }
                }, function (err) {
                });
            }
            else {
                this.shared.displayNetworkUpdate('No Internet Connection');
            }
        }
    };
    ProfilePage.prototype.GetImage = function () {
        var _this = this;
        var options = {
            quality: 60,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        };
        this.shared.showLoading();
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.image = base64Image;
            _this.base64 = imageData;
            _this.mime = 'png';
            _this.shared.hideLoading();
            console.log();
        }, function (err) {
            _this.shared.hideLoading();
            // Handle error
        });
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map