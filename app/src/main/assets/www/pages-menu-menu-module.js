(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: 'first',
                loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
            },
            {
                path: 'second',
                loadChildren: '../packages/packages.module#PackagesPageModule'
            },
            {
                path: 'third',
                loadChildren: '../second/second.module#SecondPageModule'
            },
            {
                path: 'second/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            }
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu contentId=\"content\">\n \n    <ion-header>\n      <ion-toolbar [color]=\"currentColor\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n \n    \n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <!-- <ion-item class=\"itemColor\" [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\"> -->\n          \n            <ion-item class=\"itemColor\" (click)=\"openPage(p.id)\">\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n\n        \n        </ion-menu-toggle>\n       \n \n        <!-- <ion-item tappable routerLink=\"/login\" routerDirection=\"root\">\n          <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item> -->\n \n      </ion-list>\n      <ion-item lines=\"none\" class=\"\"> \n\n        <ion-label class=\"lableTongle\" slot=\"start\">  App Theme </ion-label>\n\n        <label slot=\"end\" class=\"switch\">\n          <input class=\"switch-input\"  *ngIf=\"valueCheck\" (change)=\"checkBox($event)\" type=\"checkbox\" checked/>\n          <input class=\"switch-input\"  *ngIf=\"valueChecksecound\"  (change)=\"checkBox($event)\" type=\"checkbox\" />\n          <span class=\"switch-label\" data-on=\"Winter\" data-off=\"Summer\"></span> \n          <span class=\"switch-handle\"></span> \n        </label>\n      </ion-item>\n      \n \n    </ion-content>\n \n  </ion-menu>\n \n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n \n</ion-split-pane>"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n.itemColor {\n  border-left: 1px solid !important; }\n\n.switch {\n  position: relative;\n  display: block;\n  vertical-align: top;\n  width: 100px;\n  height: 30px;\n  padding: 3px;\n  margin: 0px 0px 0px 0px;\n  background: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px);\n  background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px);\n  border-radius: 18px;\n  box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  box-sizing: content-box; }\n\n.switch-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  box-sizing: content-box; }\n\n.switch-label {\n  position: relative;\n  display: block;\n  height: inherit;\n  font-size: 10px;\n  text-transform: uppercase;\n  background: #eceeef;\n  border-radius: inherit;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n  box-sizing: content-box; }\n\n.switch-label:before, .switch-label:after {\n  position: absolute;\n  top: 50%;\n  margin-top: -.5em;\n  line-height: 1;\n  -webkit-transition: inherit;\n  transition: inherit;\n  box-sizing: content-box; }\n\n.switch-label:before {\n  content: attr(data-off);\n  right: 11px;\n  color: #aaaaaa;\n  text-shadow: 0 1px rgba(255, 255, 255, 0.5); }\n\n.switch-label:after {\n  content: attr(data-on);\n  left: 11px;\n  color: #FFFFFF;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.2);\n  opacity: 0; }\n\n.switch-input:checked ~ .switch-label {\n  background: #E1B42B;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2); }\n\n.switch-input:checked ~ .switch-label:before {\n  opacity: 0; }\n\n.switch-input:checked ~ .switch-label:after {\n  opacity: 1; }\n\n.switch-handle {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 28px;\n  height: 28px;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(40%, #FFFFFF), to(#f0f0f0));\n  background: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n  background-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n  border-radius: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2); }\n\n.switch-handle:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -6px 0 0 -6px;\n  width: 12px;\n  height: 12px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#eeeeee), to(#FFFFFF));\n  background: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n  background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n  border-radius: 6px;\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.02); }\n\n.switch-input:checked ~ .switch-handle {\n  left: 74px;\n  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2); }\n\n/* Transition\n========================== */\n\n.switch-label, .switch-handle {\n  transition: All 0.3s ease;\n  -webkit-transition: All 0.3s ease;\n  -moz-transition: All 0.3s ease;\n  -o-transition: All 0.3s ease; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQStDLEVBQUE7O0FBWW5EO0VBQ0ksaUNBQWlDLEVBQUE7O0FBS3JDO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDZEQUE2RDtFQUM3RCxxRUFBcUU7RUFDckUsbUJBQW1CO0VBQ25CLG1FQUFtRTtFQUNuRSxlQUFlO0VBQ2YsdUJBQXNCLEVBQUE7O0FBRXZCO0VBQ0Msa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLHVCQUFzQixFQUFBOztBQUV2QjtFQUNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrRkFBa0Y7RUFDbEYsdUJBQXNCLEVBQUE7O0FBRXZCO0VBQ0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDJCQUEyQjtFQUczQixtQkFBbUI7RUFDbkIsdUJBQXNCLEVBQUE7O0FBRXZCO0VBQ0MsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsMkNBQTJDLEVBQUE7O0FBRTVDO0VBQ0Msc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLFVBQVUsRUFBQTs7QUFFWDtFQUNDLG1CQUFtQjtFQUNuQixpRkFBaUYsRUFBQTs7QUFFbEY7RUFDQyxVQUFVLEVBQUE7O0FBRVg7RUFDQyxVQUFVLEVBQUE7O0FBRVg7RUFDQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtHQUE0RDtFQUE1RCw0REFBNEQ7RUFDNUQsb0VBQW9FO0VBQ3BFLG1CQUFtQjtFQUNuQiwwQ0FBMEMsRUFBQTs7QUFFM0M7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUZBQXdEO0VBQXhELHdEQUF3RDtFQUN4RCxnRUFBZ0U7RUFDaEUsa0JBQWtCO0VBQ2xCLDJDQUEyQyxFQUFBOztBQUU1QztFQUNDLFVBQVU7RUFDViwyQ0FBMkMsRUFBQTs7QUFHNUM7NEJDYjRCOztBRGU1QjtFQUNDLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbSB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiRjb2xvcnM6IChcbiAgIGJsdWU6ICAgICMzODdlZjUsXG4gICBzZWNvbmRhcnk6ICAjMzJkYjY0LFxuICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgIGRhcms6ICAgICAgICAgICMyMjIgICAvLyB0aGUgZGFyayBjb2xvciB3ZSdyZSB1c2luZ1xuKTtcblxuXG4uaXRlbUNvbG9ye1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIWltcG9ydGFudDsgXG59XG5cblxuXG4uc3dpdGNoIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0d2lkdGg6IDEwMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdHBhZGRpbmc6IDNweDtcblx0bWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZWVlZWUsICNGRkZGRkYgMjVweCk7XG5cdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2VlZWVlZSwgI0ZGRkZGRiAyNXB4KTtcblx0Ym9yZGVyLXJhZGl1czogMThweDtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHdoaXRlLCBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xufVxuLnN3aXRjaC1pbnB1dCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRvcGFjaXR5OiAwO1xuXHRib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xufVxuLnN3aXRjaC1sYWJlbCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogaW5oZXJpdDtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRiYWNrZ3JvdW5kOiAjZWNlZWVmO1xuXHRib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xufVxuLnN3aXRjaC1sYWJlbDpiZWZvcmUsIC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRtYXJnaW4tdG9wOiAtLjVlbTtcblx0bGluZS1oZWlnaHQ6IDE7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogaW5oZXJpdDtcblx0LW1vei10cmFuc2l0aW9uOiBpbmhlcml0O1xuXHQtby10cmFuc2l0aW9uOiBpbmhlcml0O1xuXHR0cmFuc2l0aW9uOiBpbmhlcml0O1xuXHRib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xufVxuLnN3aXRjaC1sYWJlbDpiZWZvcmUge1xuXHRjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTtcblx0cmlnaHQ6IDExcHg7XG5cdGNvbG9yOiAjYWFhYWFhO1xuXHR0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLnN3aXRjaC1sYWJlbDphZnRlciB7XG5cdGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7XG5cdGxlZnQ6IDExcHg7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHR0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRvcGFjaXR5OiAwO1xufVxuLnN3aXRjaC1pbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1sYWJlbCB7XG5cdGJhY2tncm91bmQ6ICNFMUI0MkI7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCBpbnNldCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtbGFiZWw6YmVmb3JlIHtcblx0b3BhY2l0eTogMDtcbn1cbi5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xuXHRvcGFjaXR5OiAxO1xufVxuLnN3aXRjaC1oYW5kbGUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNHB4O1xuXHRsZWZ0OiA0cHg7XG5cdHdpZHRoOiAyOHB4O1xuXHRoZWlnaHQ6IDI4cHg7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkZGRkYgNDAlLCAjZjBmMGYwKTtcblx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjRkZGRkZGIDQwJSwgI2YwZjBmMCk7XG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5zd2l0Y2gtaGFuZGxlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0bWFyZ2luOiAtNnB4IDAgMCAtNnB4O1xuXHR3aWR0aDogMTJweDtcblx0aGVpZ2h0OiAxMnB4O1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWVlZWVlLCAjRkZGRkZGKTtcblx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlLCAjRkZGRkZGKTtcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xufVxuLnN3aXRjaC1pbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1oYW5kbGUge1xuXHRsZWZ0OiA3NHB4O1xuXHRib3gtc2hhZG93OiAtMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuIFxuLyogVHJhbnNpdGlvblxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zd2l0Y2gtbGFiZWwsIC5zd2l0Y2gtaGFuZGxlIHtcblx0dHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBBbGwgMC4zcyBlYXNlO1xuXHQtbW96LXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7XG5cdC1vLXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7XG59XG5cblxuXG4ubGFibGVUb25nbGV7XG4gICBcbn0iLCIuYWN0aXZlLWl0ZW0ge1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgfVxuXG4uaXRlbUNvbG9yIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAhaW1wb3J0YW50OyB9XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZWVlZSwgI0ZGRkZGRiAyNXB4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlLCAjRkZGRkZGIDI1cHgpO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggd2hpdGUsIGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XG5cbi5zd2l0Y2gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cblxuLnN3aXRjaC1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiAjZWNlZWVmO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxuXG4uc3dpdGNoLWxhYmVsOmJlZm9yZSwgLnN3aXRjaC1sYWJlbDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0uNWVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBpbmhlcml0O1xuICAtbW96LXRyYW5zaXRpb246IGluaGVyaXQ7XG4gIC1vLXRyYW5zaXRpb246IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XG5cbi5zd2l0Y2gtbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLW9mZik7XG4gIHJpZ2h0OiAxMXB4O1xuICBjb2xvcjogI2FhYWFhYTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxuXG4uc3dpdGNoLWxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLW9uKTtcbiAgbGVmdDogMTFweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG9wYWNpdHk6IDA7IH1cblxuLnN3aXRjaC1pbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNFMUI0MkI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCBpbnNldCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuXG4uc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7IH1cblxuLnN3aXRjaC1pbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1sYWJlbDphZnRlciB7XG4gIG9wYWNpdHk6IDE7IH1cblxuLnN3aXRjaC1oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkZGRkYgNDAlLCAjZjBmMGYwKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjRkZGRkZGIDQwJSwgI2YwZjBmMCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuXG4uc3dpdGNoLWhhbmRsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogLTZweCAwIDAgLTZweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZWVlZSwgI0ZGRkZGRik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2VlZWVlZSwgI0ZGRkZGRik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjAyKTsgfVxuXG4uc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWhhbmRsZSB7XG4gIGxlZnQ6IDc0cHg7XG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cblxuLyogVHJhbnNpdGlvblxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zd2l0Y2gtbGFiZWwsIC5zd2l0Y2gtaGFuZGxlIHtcbiAgdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBBbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/pages/image-modal/image-modal.page.ts");










var MenuPage = /** @class */ (function () {
    function MenuPage(modalController, qrScanner, events, menuCtrl, plt, router, shared) {
        var _this = this;
        this.modalController = modalController;
        this.qrScanner = qrScanner;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.plt = plt;
        this.router = router;
        this.shared = shared;
        this.selectedPath = '';
        this.pages3 = [
            {
                title: 'Home',
                url: '/menu/first',
                id: '1'
            },
            {
                title: 'Packages',
                url: '/menu/second',
                id: '2'
            },
            {
                title: 'Whats On',
                url: '/menu/second',
                id: '3'
            },
            {
                title: 'Live Cam',
                url: '/menu/second',
                id: '4'
            },
            {
                title: 'Getting Here',
                url: '/menu/second',
                id: '5'
            },
            {
                title: 'Accommodation',
                url: '/menu/second',
                id: '6'
            },
            {
                title: 'Village Map',
                url: '/menu/second',
                id: '7'
            },
            {
                title: 'Run Tracker',
                url: '/menu/second',
                id: '8'
            },
            {
                title: 'Hospitality',
                url: '/menu/second',
                id: '9'
            },
            {
                title: 'Registration',
                url: '/menu/registraion',
                id: '10'
            },
            {
                title: 'Login to Loyalty Program',
                url: '/menu/third',
                id: '11'
            }
        ];
        this.pages = [
            {
                title: 'Home',
                url: '/menu/first',
                id: '1'
            },
            {
                title: 'Packages',
                url: '/menu/second',
                id: '2'
            },
            {
                title: 'Whats On',
                url: '/menu/second',
                id: '3'
            },
            {
                title: 'Live Cam',
                url: '/menu/second',
                id: '4'
            },
            {
                title: 'Getting Here',
                url: '/menu/second',
                id: '5'
            },
            {
                title: 'Accommodation',
                url: '/menu/second',
                id: '6'
            },
            {
                title: 'Village Map',
                url: '/menu/second',
                id: '7'
            },
            {
                title: 'Run Tracker',
                url: '/menu/second',
                id: '8'
            },
            {
                title: 'Hospitality',
                url: '/menu/second',
                id: '9'
            },
            {
                title: 'Registration',
                url: '/menu/registraion',
                id: '10'
            },
            {
                title: 'Login to Loyalty Program',
                url: '/menu/third',
                id: '11'
            }
        ];
        this.pages1 = [
            {
                title: 'Home',
                url: '/menu/first',
                id: '1'
            },
            {
                title: 'Packages',
                url: '/menu/second',
                id: '2'
            },
            {
                title: 'Whats On',
                url: '/menu/second',
                id: '3'
            },
            {
                title: 'Live Cam',
                url: '/menu/second',
                id: '4'
            },
            {
                title: 'Getting Here',
                url: '/menu/second',
                id: '5'
            },
            {
                title: 'Accommodation',
                url: '/menu/second',
                id: '6'
            },
            {
                title: 'Village Map',
                url: '/menu/second',
                id: '7'
            },
            {
                title: 'Run Tracker',
                url: '/menu/second',
                id: '8'
            },
            {
                title: 'Hospitality',
                url: '/menu/second',
                id: '9'
            },
            {
                title: 'Offers',
                url: '/menu/second',
                id: '14'
            },
            {
                title: 'Profile',
                url: '/menu/registraion',
                id: '12'
            },
            {
                title: 'QR Scanner',
                url: '/menu/registraion',
                id: '15'
            },
            {
                title: 'Redeem Facebook Code',
                url: '/menu/registraion',
                id: '16'
            },
            {
                title: 'Logout',
                url: '/menu/registraion',
                id: '13'
            }
            // ,
            // {
            //   title: 'Login',
            //   url: '/menu/third'
            // }
        ];
        // alert('ll')
        events.subscribe('login', function (time) {
            _this.pages = _this.pages1;
        });
        this.currentColor = 'dark';
        this.router.navigate(['/menu/first']);
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
        var profile = localStorage.getItem('profile');
        if (profile != null || profile != undefined) {
            var data = JSON.parse(profile);
            var userid = data.user_id;
            if (userid == '') {
                this.pages = this.pages3;
            }
            else {
                this.pages = this.pages1;
            }
        }
        else {
        }
        this.checktheme();
    }
    MenuPage.prototype.ngDoCheck = function () {
        var theme = localStorage.getItem("theme");
        if (theme == "winter") {
            this.valueCheck = true;
            this.valueChecksecound = false;
        }
        else {
            this.valueCheck = false;
            this.valueChecksecound = true;
        }
    };
    MenuPage.prototype.checktheme = function () {
    };
    MenuPage.prototype.checkBox = function (eve) {
        if (eve.target.checked) {
            localStorage.setItem("theme", "winter");
            this.events.publish('userFisrt:created', "value");
        }
        else {
            localStorage.setItem("theme", "summer");
            this.events.publish('userFisrt:created', "value");
        }
    };
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.prototype.openPage = function (id) {
        if (id == 1) {
            // this.router.navigate(['/menu/first/tabs/tab1/home']);
        }
        else if (id == 2) {
            // this.router.navigate(['/menu/first/tabs/tab1/packages']);
            this.packages();
        }
        else if (id == 3) {
            this.router.navigate(['/menu/first/tabs/tab1/events']);
        }
        else if (id == 4) {
            this.router.navigate(['/menu/first/tabs/tab1/live-cam']);
        }
        else if (id == 5) {
            this.router.navigate(['/menu/first/tabs/tab1/details']);
        }
        else if (id == 6) {
            //this.router.navigate(['/menu/first/tabs/tab1/accommodation']);
            this.accomodation();
        }
        else if (id == 7) {
            this.villageMap();
            // this.router.navigate(['/menu/first/tabs/tab1/village-map'],{ state: {theme:this.theme } });
        }
        else if (id == 8) {
            // this.router.navigate(['/menu/first/tabs/tab1/sky-tricker']);
            this.router.navigate(['/menu/first/tabs/tab1/skytrciker-new']);
        }
        else if (id == 9) {
            this.router.navigate(['/menu/first/tabs/tab1/hospitality'], { state: { theme: this.theme } });
        }
        else if (id == 10) {
            this.router.navigate(['/menu/first/tabs/tab1/registraion']);
        }
        else if (id == 11) {
            this.router.navigate(['/menu/first/tabs/tab1/login']);
        }
        else if (id == 12) {
            this.router.navigate(['/menu/first/tabs/tab1/profile']);
        }
        else if (id == 13) {
            this.menuCtrl.close();
            this.pages = this.pages3;
            this.events.publish('Logout', Date.now());
            localStorage.setItem('login', 'false');
            localStorage.clear();
        }
        else if (id == 14) {
            this.router.navigate(['/menu/first/tabs/tab1/offers']);
        }
        else if (id == 15) {
            this.router.navigate(['/menu/first/tabs/tab1/qa-scanner']);
        }
        else if (id == 16) {
            this.router.navigate(['/menu/first/tabs/tab1/facebook-redeem']);
        }
    };
    MenuPage.prototype.villageMap = function () {
        var _this = this;
        if (navigator.onLine) {
            this.shared.ServiceCallVillage.ServiceCallRequestVillage().then(function (res) {
                // debugger
                _this.VillageMap = res;
                _this.data = _this.VillageMap.content.posts[0];
                _this.summerMap = _this.data.smpdf_files[0];
                _this.winterMap = _this.data.wmpdf_files[0];
                _this.theme = localStorage.getItem("theme");
                if (_this.theme == 'winter') {
                    var opts = "location=yes,clearcache=yes,hidespinner=no";
                    _this.openModel(_this.winterMap);
                    // this._browser.create(this.winterMap, '_blank', opts);
                    //   if (this.plt.is('ios')) {
                    //     window.open(this.winterMap, "_blank",opts);
                    // }else{
                    //   window.open(this.winterMap, "_system",opts);
                    // }
                }
                else {
                    _this.openModel(_this.summerMap);
                    //   let opts : string = "location=yes,clearcache=yes,hidespinner=no"
                    //   //this._browser.create(this.summerMap, '_blank', opts);
                    //   if (this.plt.is('ios')) {
                    //     window.open(this.summerMap, "_blank",opts);
                    // }else{
                    //   window.open(this.summerMap, "_system",opts);
                    // }
                }
            }, function (err) {
            });
        }
        else {
            this.shared.displayNetworkUpdate('No Internet Connection');
        }
    };
    MenuPage.prototype.openModel = function (url) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"],
            componentProps: {
                img: url
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    MenuPage.prototype.accomodation = function () {
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
    MenuPage.prototype.packages = function () {
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
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["QRScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module.js.map