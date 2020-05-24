(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registraion-registraion-module"],{

/***/ "./src/app/pages/registraion/registraion.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/registraion/registraion.module.ts ***!
  \*********************************************************/
/*! exports provided: RegistraionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistraionPageModule", function() { return RegistraionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registraion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registraion.page */ "./src/app/pages/registraion/registraion.page.ts");







var routes = [
    {
        path: '',
        component: _registraion_page__WEBPACK_IMPORTED_MODULE_6__["RegistraionPage"]
    }
];
var RegistraionPageModule = /** @class */ (function () {
    function RegistraionPageModule() {
    }
    RegistraionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registraion_page__WEBPACK_IMPORTED_MODULE_6__["RegistraionPage"]]
        })
    ], RegistraionPageModule);
    return RegistraionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registraion/registraion.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/registraion/registraion.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"loginColor\">\n <div class=\"container\">\n         <div id=\"content\">\n            <!-- Begin Content -->\n            <div id=\"logo\" class=\"logo-sec\">\n               <img src=\"assets/img/log.png\">\n            </div>\n            <form id=\"form-login\">\n               <div class=\"control-group\">\n                  <div class=\"input-prepend\">\n                     <span class=\"add-on comn-sec\">\n                     <i class=\"fa fa-user\"></i>\n                     </span>\n                     <input name=\"firstname\" [(ngModel)]=\"firstName\" id=\"mod-reg-firstname\" type=\"text\" class=\"comn-sec\" placeholder=\"Firstname *\" size=\"15\">\n                     <a class=\"tooltip comn-sec\">\n                     <!-- <i class=\"fa fa-question-circle\"></i> -->\n                     </a>\n                  </div>\n               </div>\n               <div class=\"control-group\">\n                  <div class=\"input-prepend\">\n                     <span class=\"add-on comn-sec\">\n                     <i class=\"fa fa-user\"></i>\n                     </span>\n                     <input name=\"lastname\" [(ngModel)]=\"lastName\"  id=\"mod-reg-lastname\" type=\"text\" class=\"comn-sec\" placeholder=\"Lastname *\" size=\"15\">\n                     <a  class=\"tooltip comn-sec\">\n                     <!-- <i class=\"fa fa-question-circle\"></i> -->\n                     </a>\n                  </div>\n                </div>\n                <div class=\"control-group\">\n                  <div class=\"input-prepend\">\n                     <span class=\"add-on comn-sec\">\n                     <i class=\"fa fa-phone\"></i>\n                     </span>\n                     <input name=\"phone\" id=\"mod-reg-phone\" (keypress)=\"blockSpecialChar($event)\" [(ngModel)]=\"phone\"  type=\"tel\" class=\"comn-sec\" placeholder=\"Phone\" size=\"15\">\n                     <a  class=\"tooltip comn-sec\">\n                     <!-- <i class=\"fa fa-question-circle\"></i> -->\n                     </a>\n                  </div>\n               </div>\n               <div class=\"control-group\">\n                  <div class=\"input-prepend\">\n                     <span class=\"add-on comn-sec\">\n                     <i class=\"fa fa-envelope\"></i>\n                     </span>\n                     <input name=\"email\" id=\"mod-reg-email\" [(ngModel)]=\"email\"  type=\"email\" class=\"comn-sec\" placeholder=\"Email *\" size=\"15\">\n                     <a  class=\"tooltip comn-sec\">\n                     <!-- <i class=\"fa fa-question-circle\"></i> -->\n                     </a>\n                  </div>\n               </div>\n               <div class=\"control-group\">\n                  <div class=\"input-prepend\">\n                     <span class=\"add-on comn-sec\">\n                     <i class=\"fa fa-lock\"></i>\n                     </span>\n                     <input name=\"passwd\" id=\"mod-reg-password\" [(ngModel)]=\"password\"  type=\"password\" class=\"comn-sec\" placeholder=\"Password *\" size=\"15\">\n                     <a  class=\"tooltip comn-sec\">\n                     <!-- <i class=\"fa fa-question-circle\"></i> -->\n                     </a>\n                  </div>\n               </div>\n               <!-- <div class=\"control-group\">\n                  <div class=\"input-prepend\">\n                     <span class=\"add-on comn-sec\">\n                     <i class=\"fa fa-lock\"></i>\n                     </span>\n                     <input name=\"passwd\" id=\"mod-reg-password\" type=\"password\" class=\"comn-sec\" placeholder=\"Re-Password\" size=\"15\">\n                     <a href=\"#\" class=\"tooltip comn-sec\">\n                     <i class=\"fa fa-question-circle\"></i>\n                     </a>\n                  </div>\n               </div> -->\n               \n               <div class=\"control-group\">\n                  <div class=\"btn-group\">\n                     <button (click) =\"registration()\" class=\"btn-sec login-button\">\n                     <i class=\"fa fa-lock\"></i>\n                     Sign Up\n                     </button>\n                  </div>\n               </div>\n            </form>\n         </div>\n      </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/registraion/registraion.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/registraion/registraion.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  background-color: #000000; }\n\n.container {\n  width: 300px;\n  position: absolute;\n  top: 39%;\n  left: 50%;\n  margin-left: -150px;\n  margin-top: -180px; }\n\n#content {\n  padding: 15px;\n  text-align: center;\n  background-color: #000;\n  border: 1px solid #000; }\n\n#content #logo img {\n  padding-top: 25px;\n  padding-bottom: 40px;\n  width: 170px; }\n\nform {\n  margin: 0 0 18px; }\n\nform .control-group {\n  margin-bottom: 9px;\n  box-sizing: border-box; }\n\nform .control-group .input-prepend {\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box; }\n\nform .control-group .comn-sec {\n  box-sizing: border-box;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle; }\n\nform .control-group .comn-sec.add-on {\n  box-sizing: border-box;\n  margin-right: -3px;\n  width: 45px;\n  border-radius: 3px 0 0 3px;\n  padding: 5px 0;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  text-align: center; }\n\nform .control-group .comn-sec.add-on .fa {\n  font-size: 16px;\n  line-height: 26px;\n  color: #333; }\n\nform .control-group input {\n  width: 182px;\n  background: #fff;\n  border: 1px solid #ccc;\n  padding: 4px 6px; }\n\nform .control-group .comn-sec.tooltip {\n  margin-left: -5px;\n  width: 48px;\n  border-radius: 0 3px 3px 0;\n  padding: 4px 0;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  text-align: center; }\n\nform .control-group .comn-sec.tooltip .fa {\n  font-size: 16px;\n  line-height: 26px;\n  color: #333; }\n\nform .control-group .login-button {\n  margin-bottom: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n  background-color: #f58c29;\n  margin-top: 30px;\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #fff;\n  font-size: 16px;\n  display: inline-block;\n  width: 100%;\n  padding: 7px 0; }\n\nform .control-group .login-button:hover {\n  background-color: #f58c29;\n  opacity: 0.82; }\n\n.loginColor {\n  --ion-background-color:#000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9yZWdpc3RyYWlvbi9yZWdpc3RyYWlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyxTQUFRO0VBQUMseUJBQXlCLEVBQUE7O0FBQ3ZDO0VBQVcsWUFBVztFQUFDLGtCQUFrQjtFQUNyQyxRQUFPO0VBQUMsU0FBUztFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQixFQUFBOztBQUM1RDtFQUFTLGFBQVk7RUFBQyxrQkFBa0I7RUFBQyxzQkFBdUI7RUFBQyxzQkFBc0IsRUFBQTs7QUFDdkY7RUFBbUIsaUJBQWlCO0VBQUMsb0JBQW9CO0VBQUMsWUFBWSxFQUFBOztBQUN0RTtFQUFLLGdCQUFnQixFQUFBOztBQUNyQjtFQUFvQixrQkFBaUI7RUFBQyxzQkFBcUIsRUFBQTs7QUFDM0Q7RUFBbUMscUJBQXFCO0VBQUMsc0JBQXNCO0VBQUMsV0FBVTtFQUFDLHNCQUFxQixFQUFBOztBQUVoSDtFQUE4QixzQkFBcUI7RUFBQyxZQUFXO0VBQUMscUJBQW9CO0VBQUMsc0JBQXNCLEVBQUE7O0FBQzNHO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUNKLEVBQUE7O0FBRUE7RUFBeUMsZUFBZTtFQUFDLGlCQUFnQjtFQUFDLFdBQVUsRUFBQTs7QUFDcEY7RUFBMEIsWUFBVztFQUFDLGdCQUFlO0VBQUMsc0JBQXFCO0VBQUMsZ0JBQWUsRUFBQTs7QUFDM0Y7RUFBc0MsaUJBQWlCO0VBQUMsV0FBVTtFQUFDLDBCQUF5QjtFQUFDLGNBQWM7RUFBQyxzQkFBc0I7RUFBQyxzQkFBc0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDNUs7RUFBMEMsZUFBZTtFQUFDLGlCQUFnQjtFQUFDLFdBQVUsRUFBQTs7QUFDckY7RUFDSSxtQkFBbUI7RUFDbkIsc0JBQXFCO0VBQUMsZUFBYztFQUFDLHlCQUF5QjtFQUFDLGdCQUFnQjtFQUFDLGtCQUFrQjtFQUFDLG9DQUFpQztFQUFDLFdBQVc7RUFBQyxlQUFjO0VBQUMscUJBQW9CO0VBQUMsV0FBVTtFQUFDLGNBQWEsRUFBQTs7QUFDak47RUFBd0MseUJBQXlCO0VBQUMsYUFBWSxFQUFBOztBQUU5RTtFQUNJLDhCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cmFpb24vcmVnaXN0cmFpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwfVxuLmNvbnRhaW5lcnt3aWR0aDozMDBweDtwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjM5JTtsZWZ0OiA1MCU7bWFyZ2luLWxlZnQ6IC0xNTBweDttYXJnaW4tdG9wOiAtMTgwcHg7fVxuI2NvbnRlbnR7cGFkZGluZzoxNXB4O3RleHQtYWxpZ246IGNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwIDtib3JkZXI6IDFweCBzb2xpZCAjMDAwO31cbiNjb250ZW50ICNsb2dvIGltZ3twYWRkaW5nLXRvcDogMjVweDtwYWRkaW5nLWJvdHRvbTogNDBweDt3aWR0aDogMTcwcHg7fVxuZm9ybXttYXJnaW46IDAgMCAxOHB4O31cbmZvcm0gLmNvbnRyb2wtZ3JvdXB7bWFyZ2luLWJvdHRvbTo5cHg7Ym94LXNpemluZzpib3JkZXItYm94O31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmlucHV0LXByZXBlbmR7ZGlzcGxheTogaW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7d2lkdGg6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3g7fVxuZm9ybSAuY29udHJvbC1ncm91cCAuaW5wdXQtcHJlcGVuZCAuYWRkLW9ue31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2Vje2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MzVweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2VjLmFkZC1vbntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1yaWdodDogLTNweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2VjLmFkZC1vbiAuZmF7Zm9udC1zaXplOiAxNnB4O2xpbmUtaGVpZ2h0OjI2cHg7Y29sb3I6IzMzMzt9XG5mb3JtIC5jb250cm9sLWdyb3VwIGlucHV0e3dpZHRoOjE4MnB4O2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNjY2M7cGFkZGluZzo0cHggNnB4O31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmNvbW4tc2VjLnRvb2x0aXB7bWFyZ2luLWxlZnQ6IC01cHg7d2lkdGg6NDhweDtib3JkZXItcmFkaXVzOjAgM3B4IDNweCAwO3BhZGRpbmc6IDRweCAwO2JhY2tncm91bmQtY29sb3I6ICNlZWU7Ym9yZGVyOiAxcHggc29saWQgI2NjYzt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuZm9ybSAuY29udHJvbC1ncm91cCAuY29tbi1zZWMudG9vbHRpcCAuZmF7Zm9udC1zaXplOiAxNnB4O2xpbmUtaGVpZ2h0OjI2cHg7Y29sb3I6IzMzMzt9XG5mb3JtIC5jb250cm9sLWdyb3VwIC5sb2dpbi1idXR0b257XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjogI2Y1OGMyOTttYXJnaW4tdG9wOiAzMHB4O2JvcmRlci1yYWRpdXM6IDNweDtib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7Y29sb3I6ICNmZmY7Zm9udC1zaXplOjE2cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOjdweCAwO31cbmZvcm0gLmNvbnRyb2wtZ3JvdXAgLmxvZ2luLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4YzI5O29wYWNpdHk6MC44Mjt9XG5cbi5sb2dpbkNvbG9ye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/registraion/registraion.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/registraion/registraion.page.ts ***!
  \*******************************************************/
/*! exports provided: RegistraionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistraionPage", function() { return RegistraionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistraionPage = /** @class */ (function () {
    function RegistraionPage(router, shared, alertController) {
        //  this.currentColor='dark'
        this.router = router;
        this.shared = shared;
        this.alertController = alertController;
    }
    RegistraionPage.prototype.ngOnInit = function () {
    };
    RegistraionPage.prototype.blockSpecialChar = function (e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    RegistraionPage.prototype.registration = function () {
        var _this = this;
        if (this.firstName == undefined || this.firstName == "") {
            this.shared.displayNetworkUpdate('First Name cannot be blank');
        }
        else if (this.lastName == undefined || this.lastName == "") {
            this.shared.displayNetworkUpdate('Last Name cannot be blank');
        }
        else if (this.email == undefined || this.email == "") {
            this.shared.displayNetworkUpdate('Email cannot be blank');
        }
        else if (this.password == undefined || this.password == "") {
            this.shared.displayNetworkUpdate('Password cannot be blank');
        }
        else {
            var data = this.validateEmail(this.email);
            if (data == false) {
                this.shared.displayNetworkUpdate('Please check your email ID');
            }
            else {
                if (navigator.onLine) {
                    this.shared.ServiceCallRegistraion.ServiceCallRequestRegistraionData(this.firstName, this.lastName, this.phone, this.email, this.password).then(function (res) {
                        _this.response = res;
                        // this.shared.displayNetworkUpdate(this.response.content)
                        _this.presentAlert(_this.response.content);
                    }, function (err) {
                    });
                }
                else {
                    this.shared.displayNetworkUpdate('No Internet Connection');
                }
            }
        }
    };
    RegistraionPage.prototype.validateEmail = function (email) {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    };
    RegistraionPage.prototype.presentAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: message,
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['/menu/first/tabs/tab1/login']);
                                    }
                                }]
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
    RegistraionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registraion',
            template: __webpack_require__(/*! ./registraion.page.html */ "./src/app/pages/registraion/registraion.page.html"),
            providers: [_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            styles: [__webpack_require__(/*! ./registraion.page.scss */ "./src/app/pages/registraion/registraion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RegistraionPage);
    return RegistraionPage;
}());



/***/ })

}]);
//# sourceMappingURL=registraion-registraion-module.js.map