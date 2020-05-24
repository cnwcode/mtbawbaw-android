(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./src/app/pages/forgot/forgot.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/pages/forgot/forgot.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }
];
var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"loginColor\">\n\n    <div class=\"container\">\n        <div id=\"content\">\n           <!-- Begin Content -->\n           <div id=\"logo\" class=\"logo-sec\">\n              <img src=\"assets/img/log.png\">\n           </div>\n     <p style=\"color: #f58c29;font-size: 18px;\">Forgot Password?</p>\n     <p style=\"color: #f58c29;margin-bottom: 34px;font-size: 14px;\">We just need your registered Email Id to sent your password reset instructions.</p>\n           <form id=\"form-login\">\t\t\t\t\n       <div class=\"control-group\">\n         <div class=\"input-prepend\">\n           <span class=\"add-on comn-sec\">\n             <i class=\"fa fa-envelope\"></i>\n           </span>\n           <input name=\"email\" id=\"mod-reg-email\" [(ngModel)]=\"email\" type=\"email\" class=\"comn-sec\" placeholder=\"Email\" size=\"15\">\n           <a class=\"tooltip comn-sec tooltip\">\n            <i class=\"fa fa-question-circle\"></i>\n            <span class=\"tooltiptext\">Enter Email</span>\n           </a>\n         </div>\n       </div>\n       <div class=\"control-group\">\n         <div class=\"btn-group\">\n           <button (click) =\"reset()\" class=\"btn-sec login-button\" style=\"margin-top: 15px;\">\n           <i class=\"fa fa-lock\"></i>\n           Reset Password\n           </button>\t\t\t\t\t\t\n         </div>\n       </div>\n           </form>\n        </div>\n     </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  background-color: #221F21; }\n\n.container {\n  width: 300px;\n  position: absolute;\n  top: 44%;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: -180px; }\n\n#content {\n  padding: 15px;\n  text-align: center;\n  background-color: #000;\n  border: 1px solid #000; }\n\n#content #logo img {\n  padding-top: 25px;\n  padding-bottom: 20px;\n  width: 170px; }\n\nform {\n  margin: 0 0 18px; }\n\nform .control-group {\n  margin-bottom: 9px;\n  box-sizing: border-box; }\n\nform .control-group .input-prepend {\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box; }\n\nform .control-group .comn-sec {\n  box-sizing: border-box;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle; }\n\nform .control-group .comn-sec.add-on {\n  box-sizing: border-box;\n  margin-right: -3px;\n  width: 45px;\n  border-radius: 3px 0 0 3px;\n  padding: 3px 0;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  text-align: center; }\n\nform .control-group .comn-sec.add-on .fa {\n  font-size: 16px;\n  line-height: 26px;\n  color: #333; }\n\nform .control-group input {\n  width: 182px;\n  background: #fff;\n  border: 1px solid #ccc;\n  padding: 4px 6px; }\n\nform .control-group .comn-sec.tooltip {\n  margin-left: -5px;\n  width: 48px;\n  border-radius: 0 3px 3px 0;\n  padding: 4px 0;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  text-align: center; }\n\nform .control-group .comn-sec.tooltip .fa {\n  font-size: 16px;\n  line-height: 26px;\n  color: #333; }\n\nform .control-group .login-button {\n  box-sizing: border-box;\n  cursor: pointer;\n  background-color: #f58c29;\n  margin-top: 30px;\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #fff;\n  font-size: 16px;\n  display: inline-block;\n  width: 100%;\n  padding: 7px 0; }\n\nform .control-group .login-button:hover {\n  background-color: #f58c29;\n  opacity: 0.82; }\n\n.loginColor {\n  --ion-background-color:#000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFLLFNBQVE7RUFBQyx5QkFBeUIsRUFBQTs7QUFDdkM7RUFBVyxZQUFXO0VBQUMsa0JBQWtCO0VBQUMsUUFBTztFQUFDLFNBQVM7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0IsRUFBQTs7QUFDbEc7RUFBUyxhQUFZO0VBQUMsa0JBQWtCO0VBQUMsc0JBQXVCO0VBQUMsc0JBQXNCLEVBQUE7O0FBQ3ZGO0VBQW1CLGlCQUFpQjtFQUFDLG9CQUFvQjtFQUFDLFlBQVksRUFBQTs7QUFDdEU7RUFBSyxnQkFBZ0IsRUFBQTs7QUFDckI7RUFBb0Isa0JBQWlCO0VBQUMsc0JBQXFCLEVBQUE7O0FBQzNEO0VBQW1DLHFCQUFxQjtFQUFDLHNCQUFzQjtFQUFDLFdBQVU7RUFBQyxzQkFBcUIsRUFBQTs7QUFFaEg7RUFBOEIsc0JBQXFCO0VBQUMsWUFBVztFQUFDLHFCQUFvQjtFQUFDLHNCQUFzQixFQUFBOztBQUMzRztFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFDQSxFQUFBOztBQUNKO0VBQXlDLGVBQWU7RUFBQyxpQkFBZ0I7RUFBQyxXQUFVLEVBQUE7O0FBQ3BGO0VBQTBCLFlBQVc7RUFBQyxnQkFBZTtFQUFDLHNCQUFxQjtFQUFDLGdCQUFlLEVBQUE7O0FBQzNGO0VBQXNDLGlCQUFpQjtFQUFDLFdBQVU7RUFBQywwQkFBeUI7RUFBQyxjQUFjO0VBQUMsc0JBQXNCO0VBQUMsc0JBQXNCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQzVLO0VBQTBDLGVBQWU7RUFBQyxpQkFBZ0I7RUFBQyxXQUFVLEVBQUE7O0FBQ3JGO0VBQWtDLHNCQUFxQjtFQUFDLGVBQWM7RUFBQyx5QkFBeUI7RUFBQyxnQkFBZ0I7RUFBQyxrQkFBa0I7RUFBQyxvQ0FBaUM7RUFBQyxXQUFXO0VBQUMsZUFBYztFQUFDLHFCQUFvQjtFQUFDLFdBQVU7RUFBQyxjQUFhLEVBQUE7O0FBQy9PO0VBQXdDLHlCQUF5QjtFQUFDLGFBQVksRUFBQTs7QUFFOUU7RUFDSSw4QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5e21hcmdpbjowO2JhY2tncm91bmQtY29sb3I6ICMyMjFGMjE7fVxuLmNvbnRhaW5lcnt3aWR0aDozMDBweDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjQ0JTtsZWZ0OiA1MCU7bWFyZ2luLWxlZnQ6IC0xNTBweDttYXJnaW4tdG9wOiAtMTgwcHg7fVxuI2NvbnRlbnR7cGFkZGluZzoxNXB4O3RleHQtYWxpZ246IGNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwIDtib3JkZXI6IDFweCBzb2xpZCAjMDAwO31cbiNjb250ZW50ICNsb2dvIGltZ3twYWRkaW5nLXRvcDogMjVweDtwYWRkaW5nLWJvdHRvbTogMjBweDt3aWR0aDogMTcwcHg7fVxuZm9ybXttYXJnaW46IDAgMCAxOHB4O31cbmZvcm0gLmNvbnRyb2wtZ3JvdXB7bWFyZ2luLWJvdHRvbTo5cHg7Ym94LXNpemluZzpib3JkZXItYm94O31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmlucHV0LXByZXBlbmR7ZGlzcGxheTogaW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7d2lkdGg6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3g7fVxuZm9ybSAuY29udHJvbC1ncm91cCAuaW5wdXQtcHJlcGVuZCAuYWRkLW9ue31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2Vje2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MzVweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2VjLmFkZC1vbntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1yaWdodDogLTNweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICBwYWRkaW5nOiAzcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuZm9ybSAuY29udHJvbC1ncm91cCAuY29tbi1zZWMuYWRkLW9uIC5mYXtmb250LXNpemU6IDE2cHg7bGluZS1oZWlnaHQ6MjZweDtjb2xvcjojMzMzO31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgaW5wdXR7d2lkdGg6MTgycHg7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztwYWRkaW5nOjRweCA2cHg7fVxuZm9ybSAuY29udHJvbC1ncm91cCAuY29tbi1zZWMudG9vbHRpcHttYXJnaW4tbGVmdDogLTVweDt3aWR0aDo0OHB4O2JvcmRlci1yYWRpdXM6MCAzcHggM3B4IDA7cGFkZGluZzogNHB4IDA7YmFja2dyb3VuZC1jb2xvcjogI2VlZTtib3JkZXI6IDFweCBzb2xpZCAjY2NjO3RleHQtYWxpZ246IGNlbnRlcjt9XG5mb3JtIC5jb250cm9sLWdyb3VwIC5jb21uLXNlYy50b29sdGlwIC5mYXtmb250LXNpemU6IDE2cHg7bGluZS1oZWlnaHQ6MjZweDtjb2xvcjojMzMzO31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmxvZ2luLWJ1dHRvbntib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjogI2Y1OGMyOTttYXJnaW4tdG9wOiAzMHB4O2JvcmRlci1yYWRpdXM6IDNweDtib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7Y29sb3I6ICNmZmY7Zm9udC1zaXplOjE2cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOjdweCAwO31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmxvZ2luLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4YzI5O29wYWNpdHk6MC44Mjt9XG5cbi5sb2dpbkNvbG9ye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");



var ForgotPage = /** @class */ (function () {
    function ForgotPage(shared) {
        this.shared = shared;
    }
    ForgotPage.prototype.ngOnInit = function () {
    };
    ForgotPage.prototype.reset = function () {
        var _this = this;
        if (this.email == null || this.email == "" || this.email == undefined) {
            this.shared.displayNetworkUpdate('Email Cannot be blank');
        }
        else {
            var data = this.validateEmail(this.email);
            if (data == false) {
                this.shared.displayNetworkUpdate('Please check your email ID');
            }
            else {
                if (navigator.onLine) {
                    this.shared.ServiceCallforgot.ServiceCallRequestForgotData(this.email).then(function (res) {
                        _this.response = res;
                        _this.shared.displayNetworkUpdate(_this.response.content);
                    }, function (err) {
                    });
                }
                else {
                    this.shared.displayNetworkUpdate('No Internet Connection');
                }
            }
        }
    };
    ForgotPage.prototype.validateEmail = function (email) {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    };
    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.page.html */ "./src/app/pages/forgot/forgot.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/pages/forgot/forgot.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ForgotPage);
    return ForgotPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module.js.map