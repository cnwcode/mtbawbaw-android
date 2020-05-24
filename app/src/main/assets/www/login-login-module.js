(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n \n<ion-content class=\"loginColor\">\n <div class=\"container\">\n         <div id=\"content\">\n            <!-- Begin Content -->\n            <div id=\"logo\" class=\"logo-sec\">\n               <img src=\"assets/img/log.png\">\n            </div>\n            <form id=\"form-login\">\n               <div class=\"control-group\">\n                  <div class=\"input-prepend\">\n                     <span class=\"add-on comn-sec\">\n                     <!-- <i class=\"fa fa-user\"></i> -->\n                     <ion-icon ios=\"ios-person\" md=\"md-person\"></ion-icon>\n                     </span>\n                     <input name=\"username\" [(ngModel)]=\"username\" id=\"mod-login-username\" type=\"text\" class=\"input-medium comn-sec\" placeholder=\"Email Id\" size=\"15\">\n                     <a  class=\"tooltip comn-sec\">\n                     <!-- <i class=\"fa fa-question-circle\"></i> -->\n                     <!-- <ion-icon ios=\"ios-help-circle\" md=\"md-help-circle\"></ion-icon> -->\n                     </a>\n                  </div>\n               </div>\n               \n\n               \n               <div class=\"control-group\">\n                  <div class=\"input-prepend\">\n                     <span class=\"add-on comn-sec\">\n                     <!-- <i class=\"fa fa-lock\"></i> -->\n                     <ion-icon ios=\"ios-lock\" md=\"md-lock\"></ion-icon>\n                     </span>\n                     <input name=\"passwd\" [(ngModel)]=\"password\" id=\"mod-login-password\" type=\"password\" class=\"input-medium comn-sec\" placeholder=\"Password\" size=\"15\">\n                     <a  class=\"tooltip comn-sec\">\n                     <!-- <i class=\"fa fa-question-circle\"></i> -->\n                     <!-- <ion-icon ios=\"ios-help-circle\" md=\"md-help-circle\"></ion-icon> -->\n                     </a>\n                  </div>\n               </div>\n               <div class=\"control-group\">\n                  <div class=\"btn-group\">\n                     <button (click) =\"login()\" class=\"btn-sec login-button\">\n                     <i class=\"fa fa-lock\"></i>\n                     Log in\n                     </button>\n                  </div>\n               </div>\n            </form>\n            <div class=\"forgotPassword\" (click) =\"forgotPassword()\"  >Forgot Password?</div>\n         </div>\n      </div>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  background-color: #000000; }\n\n.container {\n  width: 300px;\n  position: absolute;\n  top: 48%;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: -180px; }\n\n#content {\n  padding: 15px;\n  text-align: center;\n  background-color: #000;\n  border: 1px solid #000; }\n\n#content #logo img {\n  padding-top: 25px;\n  padding-bottom: 40px;\n  width: 170px; }\n\nform {\n  margin: 0 0 18px; }\n\nform .control-group {\n  margin-bottom: 9px;\n  box-sizing: border-box; }\n\nform .control-group .input-prepend {\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box; }\n\nform .control-group .comn-sec {\n  box-sizing: border-box;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle; }\n\nform .control-group .comn-sec.add-on {\n  box-sizing: border-box;\n  margin-right: -3px;\n  width: 45px;\n  border-radius: 3px 0 0 3px;\n  padding: 9px 0;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  text-align: center; }\n\nform .control-group .comn-sec.add-on .fa {\n  font-size: 16px;\n  line-height: 26px;\n  color: #333; }\n\nform .control-group input {\n  width: 182px;\n  background: #fff;\n  border: 1px solid #ccc;\n  padding: 4px 6px; }\n\nform .control-group .comn-sec.tooltip {\n  margin-left: -5px;\n  width: 48px;\n  border-radius: 0 3px 3px 0;\n  padding: 4px 0;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  text-align: center; }\n\nform .control-group .comn-sec.tooltip .fa {\n  font-size: 16px;\n  line-height: 26px;\n  color: #333; }\n\nform .control-group .login-button {\n  box-sizing: border-box;\n  cursor: pointer;\n  background-color: #f58c29;\n  margin-top: 30px;\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #fff;\n  font-size: 16px;\n  display: inline-block;\n  width: 100%;\n  padding: 7px 0; }\n\nform .control-group .login-button:hover {\n  background-color: #f58c29;\n  opacity: 0.82; }\n\n.loginColor {\n  --ion-background-color:#000000; }\n\n.forgotPassword {\n  color: #f58c29;\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFBSyxTQUFRO0VBQUMseUJBQXlCLEVBQUE7O0FBQ3ZDO0VBQVcsWUFBVztFQUFDLGtCQUFrQjtFQUNyQyxRQUFPO0VBQ1AsU0FBUztFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQixFQUFBOztBQUNwRDtFQUFTLGFBQVk7RUFBQyxrQkFBa0I7RUFBQyxzQkFBdUI7RUFBQyxzQkFBc0IsRUFBQTs7QUFDdkY7RUFBbUIsaUJBQWlCO0VBQUMsb0JBQW9CO0VBQUMsWUFBWSxFQUFBOztBQUN0RTtFQUFLLGdCQUFnQixFQUFBOztBQUNyQjtFQUFvQixrQkFBaUI7RUFBQyxzQkFBcUIsRUFBQTs7QUFDM0Q7RUFBbUMscUJBQXFCO0VBQUMsc0JBQXNCO0VBQUMsV0FBVTtFQUFDLHNCQUFxQixFQUFBOztBQUVoSDtFQUNJLHNCQUFxQjtFQUFDLFlBQVc7RUFBQyxxQkFBb0I7RUFBQyxzQkFBc0IsRUFBQTs7QUFFakY7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQ0osRUFBQTs7QUFDQTtFQUF5QyxlQUFlO0VBQUMsaUJBQWdCO0VBQUMsV0FBVSxFQUFBOztBQUNwRjtFQUEwQixZQUFXO0VBQUMsZ0JBQWU7RUFBQyxzQkFBcUI7RUFBQyxnQkFBZSxFQUFBOztBQUMzRjtFQUFzQyxpQkFBaUI7RUFBQyxXQUFVO0VBQUMsMEJBQXlCO0VBQUMsY0FBYztFQUFDLHNCQUFzQjtFQUFDLHNCQUFzQjtFQUFDLGtCQUFrQixFQUFBOztBQUM1SztFQUEwQyxlQUFlO0VBQUMsaUJBQWdCO0VBQUMsV0FBVSxFQUFBOztBQUNyRjtFQUFrQyxzQkFBcUI7RUFBQyxlQUFjO0VBQUMseUJBQXlCO0VBQUMsZ0JBQWdCO0VBQUMsa0JBQWtCO0VBQUMsb0NBQWlDO0VBQUMsV0FBVztFQUFDLGVBQWM7RUFBQyxxQkFBb0I7RUFBQyxXQUFVO0VBQUMsY0FBYSxFQUFBOztBQUMvTztFQUF3Qyx5QkFBeUI7RUFBQyxhQUFZLEVBQUE7O0FBRTlFO0VBQ0ksOEJBQXVCLEVBQUE7O0FBSzNCO0VBQ0ksY0FBYztFQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxuICAgYmx1ZTogICAgIzM4N2VmNSxcbiAgIHNlY29uZGFyeTogICMzMmRiNjQsXG4gICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCwgIC8vIHRoZSBsaWdodCBjb2xvciB3ZSdyZSB1c2luZ1xuICAgZGFyazogICAgICAgICAgIzIyMixcbiAgIG9yYW5nbGU6ICAgICAgICNmNThjMjkvLyB0aGUgZGFyayBjb2xvciB3ZSdyZSB1c2luZ1xuKTtcblxuXG5cblxuYm9keXttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO31cbi5jb250YWluZXJ7d2lkdGg6MzAwcHg7cG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo0OCU7XG4gICAgbGVmdDogNTAlO21hcmdpbi1sZWZ0OiAtMTUwcHg7bWFyZ2luLXRvcDogLTE4MHB4O31cbiNjb250ZW50e3BhZGRpbmc6MTVweDt0ZXh0LWFsaWduOiBjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjogIzAwMCA7Ym9yZGVyOiAxcHggc29saWQgIzAwMDt9XG4jY29udGVudCAjbG9nbyBpbWd7cGFkZGluZy10b3A6IDI1cHg7cGFkZGluZy1ib3R0b206IDQwcHg7d2lkdGg6IDE3MHB4O31cbmZvcm17bWFyZ2luOiAwIDAgMThweDt9XG5mb3JtIC5jb250cm9sLWdyb3Vwe21hcmdpbi1ib3R0b206OXB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDt9XG5mb3JtIC5jb250cm9sLWdyb3VwIC5pbnB1dC1wcmVwZW5ke2Rpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO3dpZHRoOjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94O31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmlucHV0LXByZXBlbmQgLmFkZC1vbnt9XG5mb3JtIC5jb250cm9sLWdyb3VwIC5jb21uLXNlY3tcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0OjM1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2VjLmFkZC1vbntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1yaWdodDogLTNweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICBwYWRkaW5nOiA5cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5mb3JtIC5jb250cm9sLWdyb3VwIC5jb21uLXNlYy5hZGQtb24gLmZhe2ZvbnQtc2l6ZTogMTZweDtsaW5lLWhlaWdodDoyNnB4O2NvbG9yOiMzMzM7fVxuZm9ybSAuY29udHJvbC1ncm91cCBpbnB1dHt3aWR0aDoxODJweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NHB4IDZweDt9XG5mb3JtIC5jb250cm9sLWdyb3VwIC5jb21uLXNlYy50b29sdGlwe21hcmdpbi1sZWZ0OiAtNXB4O3dpZHRoOjQ4cHg7Ym9yZGVyLXJhZGl1czowIDNweCAzcHggMDtwYWRkaW5nOiA0cHggMDtiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO2JvcmRlcjogMXB4IHNvbGlkICNjY2M7dGV4dC1hbGlnbjogY2VudGVyO31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2VjLnRvb2x0aXAgLmZhe2ZvbnQtc2l6ZTogMTZweDtsaW5lLWhlaWdodDoyNnB4O2NvbG9yOiMzMzM7fVxuZm9ybSAuY29udHJvbC1ncm91cCAubG9naW4tYnV0dG9ue2JveC1zaXppbmc6Ym9yZGVyLWJveDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4YzI5O21hcmdpbi10b3A6IDMwcHg7Ym9yZGVyLXJhZGl1czogM3B4O2JvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtjb2xvcjogI2ZmZjtmb250LXNpemU6MTZweDtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDAlO3BhZGRpbmc6N3B4IDA7fVxuZm9ybSAuY29udHJvbC1ncm91cCAubG9naW4tYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6ICNmNThjMjk7b3BhY2l0eTowLjgyO31cblxuLmxvZ2luQ29sb3J7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDAwMDAwO1xuXG59XG5cblxuLmZvcmdvdFBhc3N3b3Jke1xuICAgIGNvbG9yOiAjZjU4YzI5O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(events, router, shared) {
        this.events = events;
        this.router = router;
        this.shared = shared;
        this.currentColor = 'light';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var name = this.username;
        var password = this.password;
        if (name == undefined || name == "" || password == undefined || password == "") {
            this.shared.displayNetworkUpdate('Username and password Cannot be blank');
        }
        else {
            if (navigator.onLine) {
                this.shared.ServiceCallLogin.ServiceCallRequestLoginData(name, password).then(function (res) {
                    _this.response = res;
                    if (_this.response.user_id == "") {
                        _this.shared.displayNetworkUpdate(_this.response.content);
                    }
                    else {
                        _this.events.publish('login', Date.now());
                        localStorage.setItem('login', 'true');
                        localStorage.setItem('profile', JSON.stringify(_this.response));
                        _this.router.navigate(['/menu/first/tabs/tab1']);
                    }
                }, function (err) {
                });
            }
            else {
                this.shared.displayNetworkUpdate('No Internet Connection');
            }
        }
    };
    LoginPage.prototype.forgotPassword = function () {
        this.router.navigate(['/menu/first/tabs/tab1/login/forgot']);
    };
    LoginPage.prototype.loginback = function () {
        this.router.navigate(['/menu/first/tabs/tab1']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map