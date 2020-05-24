(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skytrciker-new-skytrciker-new-module"],{

/***/ "./node_modules/@ionic-native/social-sharing/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ionic-native/social-sharing/index.js ***!
  \************************************************************/
/*! exports provided: SocialSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSharing", function() { return SocialSharing; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SocialSharingOriginal = /** @class */ (function (_super) {
    __extends(SocialSharingOriginal, _super);
    function SocialSharingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharingOriginal.prototype.share = function (message, subject, file, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharingOriginal.prototype.shareWithOptions = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.canShareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaTwitter = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaFacebook = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaInstagram = function (message, image) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaWhatsApp = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaSMS = function (messge, phoneNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.canShareViaEmail = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharingOriginal.prototype.shareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.setIPadPopupCoordinates = function (targetBounds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharingOriginal.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharingOriginal.pluginName = "SocialSharing";
    SocialSharingOriginal.plugin = "cordova-plugin-x-socialsharing";
    SocialSharingOriginal.pluginRef = "plugins.socialsharing";
    SocialSharingOriginal.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharingOriginal.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
    return SocialSharingOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var SocialSharing = new SocialSharingOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NvY2lhbC1zaGFyaW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdDckMsaUNBQWlCOzs7O0lBYWxELDZCQUFLLGFBQ0gsT0FBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsSUFBd0IsRUFDeEIsR0FBWTtJQWFkLHdDQUFnQixhQUFDLE9BTWhCO0lBa0JELG1DQUFXLGFBQ1QsT0FBZSxFQUNmLE9BQWdCLEVBQ2hCLE9BQWdCLEVBQ2hCLEtBQWMsRUFDZCxHQUFZO0lBaUJkLHVDQUFlLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0lBZ0I3RCx3Q0FBZ0IsYUFDZCxPQUFlLEVBQ2YsS0FBYyxFQUNkLEdBQVk7SUFrQmQsNERBQW9DLGFBQ2xDLE9BQWUsRUFDZixLQUFjLEVBQ2QsR0FBWSxFQUNaLGdCQUF5QjtJQWMzQix5Q0FBaUIsYUFBQyxPQUFlLEVBQUUsS0FBYTtJQWdCaEQsd0NBQWdCLGFBQ2QsT0FBZSxFQUNmLEtBQWMsRUFDZCxHQUFZO0lBa0JkLGtEQUEwQixhQUN4QixRQUFnQixFQUNoQixPQUFlLEVBQ2YsS0FBYyxFQUNkLEdBQVk7SUFjZCxtQ0FBVyxhQUFDLE1BQWMsRUFBRSxXQUFtQjtJQVcvQyx3Q0FBZ0I7SUFtQmhCLHFDQUFhLGFBQ1gsT0FBZSxFQUNmLE9BQWUsRUFDZixFQUFZLEVBQ1osRUFBYSxFQUNiLEdBQWMsRUFDZCxLQUF5QjtJQW1CM0IsZ0NBQVEsYUFDTixPQUFlLEVBQ2YsT0FBZSxFQUNmLE9BQWdCLEVBQ2hCLEtBQWMsRUFDZCxHQUFZO0lBYWQsK0NBQXVCLGFBQUMsWUFBb0I7SUFVNUMsd0NBQWdCLGFBQUMsZUFBa0M7Ozs7Ozt3QkF0VHJEO0VBeUNtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNvY2lhbCBTaGFyaW5nXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNoYXJlIHRleHQsIGZpbGVzLCBpbWFnZXMsIGFuZCBsaW5rcyB2aWEgc29jaWFsIG5ldHdvcmtzLCBzbXMsIGFuZCBlbWFpbC5cbiAqXG4gKiBGb3IgQnJvd3NlciB1c2FnZSBjaGVjayBvdXQgdGhlIFdlYiBTaGFyZSBBUEkgZG9jczogaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1NvY2lhbFNoYXJpbmctUGhvbmVHYXAtUGx1Z2luIzUtd2ViLXNoYXJlLWFwaVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU29jaWFsU2hhcmluZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc29jaWFsLXNoYXJpbmcvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvY2lhbFNoYXJpbmc6IFNvY2lhbFNoYXJpbmcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIENoZWNrIGlmIHNoYXJpbmcgdmlhIGVtYWlsIGlzIHN1cHBvcnRlZFxuICogdGhpcy5zb2NpYWxTaGFyaW5nLmNhblNoYXJlVmlhRW1haWwoKS50aGVuKCgpID0+IHtcbiAqICAgLy8gU2hhcmluZyB2aWEgZW1haWwgaXMgcG9zc2libGVcbiAqIH0pLmNhdGNoKCgpID0+IHtcbiAqICAgLy8gU2hhcmluZyB2aWEgZW1haWwgaXMgbm90IHBvc3NpYmxlXG4gKiB9KTtcbiAqXG4gKiAvLyBTaGFyZSB2aWEgZW1haWxcbiAqIHRoaXMuc29jaWFsU2hhcmluZy5zaGFyZVZpYUVtYWlsKCdCb2R5JywgJ1N1YmplY3QnLCBbJ3JlY2lwaWVudEBleGFtcGxlLm9yZyddKS50aGVuKCgpID0+IHtcbiAqICAgLy8gU3VjY2VzcyFcbiAqIH0pLmNhdGNoKCgpID0+IHtcbiAqICAgLy8gRXJyb3IhXG4gKiB9KTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NvY2lhbFNoYXJpbmcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi14LXNvY2lhbHNoYXJpbmcnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnNvY2lhbHNoYXJpbmcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1NvY2lhbFNoYXJpbmctUGhvbmVHYXAtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2hhcmluZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNoYXJlcyB1c2luZyB0aGUgc2hhcmUgc2hlZXRcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gVGhlIG1lc3NhZ2UgeW91IHdvdWxkIGxpa2UgdG8gc2hhcmUuXG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9IFRoZSBzdWJqZWN0XG4gICAqIEBwYXJhbSBmaWxlIHtzdHJpbmd8c3RyaW5nW119IFVSTChzKSB0byBmaWxlKHMpIG9yIGltYWdlKHMpLCBsb2NhbCBwYXRoKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIG9yIGJhc2U2NCBkYXRhIG9mIGFuIGltYWdlLiBPbmx5IHRoZSBmaXJzdCBmaWxlL2ltYWdlIHdpbGwgYmUgdXNlZCBvbiBXaW5kb3dzIFBob25lLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IEEgVVJMIHRvIHNoYXJlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDVcbiAgfSlcbiAgc2hhcmUoXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICBzdWJqZWN0Pzogc3RyaW5nLFxuICAgIGZpbGU/OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICB1cmw/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucyBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3Qgb3IgYW4gZXJyb3IgbWVzc2FnZSAocmVxdWlyZXMgcGx1Z2luIHZlcnNpb24gNS4xLjArKVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7b2JqZWN0fSBUaGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgbWVzc2FnZSwgc3ViamVjdCwgZmlsZXMsIHVybCBhbmQgY2hvb3NlclRpdGxlIHByb3BlcnRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgc2hhcmVXaXRoT3B0aW9ucyhvcHRpb25zOiB7XG4gICAgbWVzc2FnZT86IHN0cmluZztcbiAgICBzdWJqZWN0Pzogc3RyaW5nO1xuICAgIGZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGNob29zZXJUaXRsZT86IHN0cmluZztcbiAgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB5b3UgY2FuIHNoYXJlIHZpYSBhIHNwZWNpZmljIGFwcC5cbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gQXBwIG5hbWUgb3IgcGFja2FnZSBuYW1lLiBFeGFtcGxlczogaW5zdGFncmFtIG9yIGNvbS5hcHBsZS5zb2NpYWwuZmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDUsXG4gICAgZXJyb3JJbmRleDogNixcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBjYW5TaGFyZVZpYShcbiAgICBhcHBOYW1lOiBzdHJpbmcsXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICBzdWJqZWN0Pzogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gVHdpdHRlclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIHNoYXJlVmlhVHdpdHRlcihtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIEZhY2Vib29rIHdpdGggYSBwYXN0ZSBtZXNzYWdlIGhpbnRcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHBhcmFtIHBhc3RlTWVzc2FnZUhpbnQge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rV2l0aFBhc3RlTWVzc2FnZUhpbnQoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZyxcbiAgICBwYXN0ZU1lc3NhZ2VIaW50Pzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBJbnN0YWdyYW1cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgc2hhcmVWaWFJbnN0YWdyYW0obWVzc2FnZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIFdoYXRzQXBwXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgc2hhcmVWaWFXaGF0c0FwcChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3RcbiAgICogQHBhcmFtIHJlY2VpdmVyIHtzdHJpbmd9IFBhc3MgcGhvbmUgbnVtYmVyIG9uIEFuZHJvaWQsIGFuZCBBZGRyZXNzYm9vayBJRCAoYWJpZCkgb24gaU9TXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ30gSW1hZ2UgdG8gc2VuZCAoZG9lcyBub3Qgd29yayBvbiBpT1NcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBMaW5rIHRvIHNlbmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwVG9SZWNlaXZlcihcbiAgICByZWNlaXZlcjogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIFNNU1xuICAgKiBAcGFyYW0gbWVzc2dlIHtzdHJpbmd9IG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIge3N0cmluZ30gTnVtYmVyIG9yIG11bHRpcGxlIG51bWJlcnMgc2VwZXJhdGVkIGJ5IGNvbW1hc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIHNoYXJlVmlhU01TKG1lc3NnZTogc3RyaW5nLCBwaG9uZU51bWJlcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHlvdSBjYW4gc2hhcmUgdmlhIGVtYWlsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgY2FuU2hhcmVWaWFFbWFpbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSB2aWEgRW1haWxcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIHRvIHtzdHJpbmdbXX1cbiAgICogQHBhcmFtIGNjIHtzdHJpbmdbXX0gT3B0aW9uYWxcbiAgICogQHBhcmFtIGJjYyB7c3RyaW5nW119IE9wdGlvbmFsXG4gICAqIEBwYXJhbSBmaWxlcyB7c3RyaW5nfHN0cmluZ1tdfSBPcHRpb25hbCBVUkwgb3IgbG9jYWwgcGF0aCB0byBmaWxlKHMpIHRvIGF0dGFjaFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICAgIHN1Y2Nlc3NJbmRleDogNixcbiAgICBlcnJvckluZGV4OiA3XG4gIH0pXG4gIHNoYXJlVmlhRW1haWwoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1YmplY3Q6IHN0cmluZyxcbiAgICB0bzogc3RyaW5nW10sXG4gICAgY2M/OiBzdHJpbmdbXSxcbiAgICBiY2M/OiBzdHJpbmdbXSxcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBBcHBOYW1lXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgc2hhcmVWaWEoXG4gICAgYXBwTmFtZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBzdWJqZWN0Pzogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWZpbmVzIHRoZSBwb3B1cCBwb3NpdGlvbiBiZWZvcmUgY2FsbCB0aGUgc2hhcmUgbWV0aG9kLlxuICAgKiBAcGFyYW0gdGFyZ2V0Qm91bmRzIHtzdHJpbmd9IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIHNldElQYWRQb3B1cENvb3JkaW5hdGVzKHRhcmdldEJvdW5kczogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTYXZlIGFuIGFycmF5IG9mIGltYWdlcyB0byB0aGUgY2FtZXJhIHJvbGxcbiAgICogQHBhcmFtICB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlT3JGaWxlQXJyYXkgU2luZ2xlIG9yIG11bHRpcGxlIGZpbGVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT4gfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBzYXZlVG9QaG90b0FsYnVtKGZpbGVPckZpbGVBcnJheTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./src/app/pages/skytrciker-new/skytrciker-new.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/skytrciker-new/skytrciker-new.module.ts ***!
  \***************************************************************/
/*! exports provided: SkytrcikerNewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkytrcikerNewPageModule", function() { return SkytrcikerNewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _skytrciker_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skytrciker-new.page */ "./src/app/pages/skytrciker-new/skytrciker-new.page.ts");







var routes = [
    {
        path: '',
        component: _skytrciker_new_page__WEBPACK_IMPORTED_MODULE_6__["SkytrcikerNewPage"]
    }
];
var SkytrcikerNewPageModule = /** @class */ (function () {
    function SkytrcikerNewPageModule() {
    }
    SkytrcikerNewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_skytrciker_new_page__WEBPACK_IMPORTED_MODULE_6__["SkytrcikerNewPage"]]
        })
    ], SkytrcikerNewPageModule);
    return SkytrcikerNewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/skytrciker-new/skytrciker-new.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/skytrciker-new/skytrciker-new.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  [color]=\"currentColor\">\n      <ion-buttons  slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Run Tracker</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header>\n  <ion-toolbar>\n    <div class=\"mainHeader\">\n    <div class=\"newButton\">\n    <ion-button>\n      Live Tracking\n    </ion-button>\n  </div>\n  <div class=\"mainRec\">\n    <p class=\"newRec\">Recording</p>\n    <p class=\"newRec\">{{time}}</p>\n\n  </div>\n \n  <div *ngIf=\"!StatusShow\" class=\"newButton\">\n      <!-- <ion-button  (click)=\"Status()\"  disabled={{buttonDisabled}} class=\"status\">\n        STATS\n      </ion-button> -->\n      <ion-button  (click)=\"Status()\"  class=\"status\">\n        STATS\n      </ion-button>\n    </div>\n\n    <div *ngIf=\"StatusShow\" class=\"newButton\">\n      <ion-button (click)=\"mapShow()\"  class=\"status\">\n        map\n      </ion-button>\n    </div>\n\n  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  \n  <div #map id=\"map\" class=\"heightmap\"></div>\n      <ion-fab *ngIf=\"footerHide\" class=\"fab\" slot=\"fixed\">\n          <ion-fab-button class=\"fabColor\">\n            <ion-icon name=\"pause\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-list *ngIf=\"pauseIf\" side=\"top\">\n            <ion-fab-button (click)=\"Resume()\" class=\"fabButton\" style=\"font-size: 13px;\">Resume</ion-fab-button>\n          </ion-fab-list>\n          <ion-fab-list *ngIf=\"!pauseIf\" side=\"top\">\n            <ion-fab-button (click)=\"Pause()\" class=\"fabButton\" style=\"font-size: 13px;\">Pause</ion-fab-button>\n          </ion-fab-list>\n            <ion-fab-list side=\"end\">\n                <ion-fab-button class=\"fabButton\" style=\"font-size: 13px;\" (click)=\"finish()\">Finish </ion-fab-button>\n              </ion-fab-list>\n        </ion-fab>\n\n\n        <ion-list *ngIf=\"StatusShow\">\n            <ion-list-header>\n                STATS\n              </ion-list-header>\n          <ion-item >\n            <ion-icon slot=\"start\" ios=\"ios-body\" md=\"md-body\"></ion-icon>\n            <ion-label class=\"labelLeft\" slot=\"end\">Distance:<br>{{kmShowany}}km</ion-label>\n          </ion-item>\n\n          <ion-item >\n              <ion-icon slot=\"start\" ios=\"ios-speedometer\" md=\"md-speedometer\"></ion-icon>\n              <ion-label class=\"labelLeft\" slot=\"end\">Average Speed:<br>{{speed}}km/h</ion-label>\n            </ion-item>\n        \n\n        <ion-item >\n            <ion-icon slot=\"start\"  ios=\"ios-time\" md=\"md-time\"></ion-icon>\n            <ion-label class=\"labelLeft\" slot=\"end\">Total Time:<br>{{currenttime}}</ion-label>\n          </ion-item>\n\n          <ion-item (click)=\"share()\">\n              <ion-icon slot=\"start\" ios=\"ios-share-alt\" md=\"md-share-alt\"></ion-icon>\n              <ion-label class=\"labelLeft\" slot=\"end\">Share Stats</ion-label>\n            </ion-item>\n\n          <!-- <ion-item >\n              <ion-icon ios=\"ios-share-alt\" md=\"md-share-alt\"></ion-icon>\n              <ion-label class=\"labelLeft\" slot=\"end\">Share STATS</ion-label>\n            </ion-item> -->\n      </ion-list>\n\n\n      <ion-item-divider class=\"Color\">\n        <ion-label class=\"PREVIOUS\">\n          PREVIOUS STATS\n        </ion-label>\n      </ion-item-divider>\n      <ion-item >\n        <ion-label (click)=\"nextData()\" class=\"labelLeft\" >CHECK PREVIOUS STATS</ion-label>\n      </ion-item>\n\n      </ion-content>\n\n\n<ion-footer *ngIf=\"!footerHide\">\n  <div class=\"recordingMain\">    \n    <ion-button (click)=\"startRecording()\" class=\"recording\">\n        Start Recording\n      </ion-button>\n    </div>  \n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/skytrciker-new/skytrciker-new.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/skytrciker-new/skytrciker-new.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #000; }\n\nion-button {\n  --background: #f58c29;\n  font-weight: 600;\n  font-size: 10px; }\n\nion-button.recording {\n  --background: #f58c29;\n  width: 100%; }\n\nion-footer {\n  --background: #f58c29; }\n\n.recordingMain {\n  background: #000; }\n\n.recordingMain {\n  background: #000;\n  padding: 10px; }\n\n.mainHeader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 5px; }\n\n.mainRec {\n  margin-top: 6px;\n  text-align: center; }\n\n.newRec {\n  margin: 0px;\n  color: #fff; }\n\n.mainRec {\n  margin-top: 6px;\n  text-align: center; }\n\n.heightmap {\n  height: 100%; }\n\n.fabColor {\n  --background: #f58c29; }\n\n.fabButton {\n  font-size: 13px;\n  width: 55px;\n  height: 55px; }\n\n.hide {\n  background: red; }\n\n.Color {\n  background: #f58c29;\n  color: white; }\n\n.PREVIOUS {\n  margin: auto; }\n\n.fab {\n  margin-top: 370px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQU1QUFMvd3d3L21vbmtleUVudGVycHJpc2VzL01UIEJBVyBCQVcvbXRCYXdCYXctaW9uaWMvc3JjL2FwcC9wYWdlcy9za3l0cmNpa2VyLW5ldy9za3l0cmNpa2VyLW5ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUM7RUFDRyxrQkFBYSxFQUFBOztBQUlqQjtFQUNJLHFCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxxQkFBYTtFQUVqQixXQUFXLEVBQUE7O0FBR1g7RUFDSSxxQkFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBSWpCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixZQUFZLEVBQUE7O0FBT2hCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZUFBZSxFQUFBOztBQVFuQjtFQUNJLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2t5dHJjaWtlci1uZXcvc2t5dHJjaWtlci1uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxuICAgIGJsdWU6ICAgICMzODdlZjUsXG4gICAgc2Vjb25kYXJ5OiAgIzMyZGI2NCxcbiAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICAvLyB0aGUgbGlnaHQgY29sb3Igd2UncmUgdXNpbmdcbiAgICBkYXJrOiAgICAgICAgICAjMjIyLFxuICAgIG9yYW5nbGU6ICAgICAgICNmNThjMjkvLyB0aGUgZGFyayBjb2xvciB3ZSdyZSB1c2luZ1xuICk7XG5cblxuIGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDtcbn1cblxuXG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2Y1OGMyOTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaW9uLWJ1dHRvbi5yZWNvcmRpbmd7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjU4YzI5O1xuICAgIFxud2lkdGg6IDEwMCU7XG59XG5cbmlvbi1mb290ZXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjU4YzI5O1xuXG59XG4ucmVjb3JkaW5nTWFpbntcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ucmVjb3JkaW5nTWFpbntcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbn1cblxuLm1haW5IZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5pb24tYnV0dG9uLnN0YXR1c3tcblxufVxuXG4ubWFpblJlY3tcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3UmVje1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFpblJlY3tcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlaWdodG1hcHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uZmFiQ29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjU4YzI5O1xufVxuXG4uZmFiQnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG59XG4uaGlkZXtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5sYWJlbExlZnR7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IC03MHB4O1xufVxuXG5cbi5Db2xvcntcbiAgICBiYWNrZ3JvdW5kOiAjZjU4YzI5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLlBSRVZJT1VTe1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmZhYntcbiAgICBtYXJnaW4tdG9wOiAzNzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/skytrciker-new/skytrciker-new.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/skytrciker-new/skytrciker-new.page.ts ***!
  \*************************************************************/
/*! exports provided: SkytrcikerNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkytrcikerNewPage", function() { return SkytrcikerNewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/http.service */ "./src/app/api/http.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing */ "./node_modules/@ionic-native/social-sharing/index.js");











var SkytrcikerNewPage = /** @class */ (function () {
    function SkytrcikerNewPage(shared, androidPermissions, router, locationAccuracy, geolocation, plt) {
        this.shared = shared;
        this.androidPermissions = androidPermissions;
        this.router = router;
        this.locationAccuracy = locationAccuracy;
        this.geolocation = geolocation;
        this.plt = plt;
        this.polylines = [];
        this.options = {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 0
        };
        this.timeBegan = null;
        this.timeStopped = null;
        this.stoppedDuration = 0;
        this.started = null;
        this.running = false;
        this.blankTime = "00:00:00";
        this.time = "00:00:00";
        this.trackedRoute = [];
        this.currentMapTrack = null;
        this.km = 0;
        this.currentColor = 'light';
        //this.mapLoad()
        this.footerHide = false;
        this.pauseIf = false;
        this.StatusShow = false;
        // this.buttonDisabled = true;
        this.checkGPSPermission();
    }
    SkytrcikerNewPage.prototype.ngOnInit = function () {
        this.startMap();
    };
    SkytrcikerNewPage.prototype.checkGPSPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
                _this.askToTurnOnGPS();
            }
            else {
                //If not having permission ask for permission
                _this.requestGPSPermission();
            }
        }, function (err) {
            alert(err);
        });
    };
    SkytrcikerNewPage.prototype.requestGPSPermission = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                console.log("4");
            }
            else {
                //Show 'GPS Permission Request' dialogue
                _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(function () {
                    // call method to turn on GPS
                    _this.askToTurnOnGPS();
                }, function (error) {
                    //Show alert if user click on 'No Thanks'
                    console.log('requestPermission Error requesting location permissions ');
                });
            }
        });
    };
    SkytrcikerNewPage.prototype.askToTurnOnGPS = function () {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            // this.getLocationCoordinates()
        }, function (error) { return console.log('Error requesting location permissions '); });
    };
    SkytrcikerNewPage.prototype.startMap = function () {
        var _this = this;
        var posMaceio = {
            lat: -9.616139,
            lng: -35.817239
        };
        var map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            posMaceio: posMaceio,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        });
        var infoWindow = new google.maps.InfoWindow({
            map: map
        });
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log(pos);
                //start position
                _this.addPolyLine(pos);
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                // this.map.setCenter(latLng);
                //this.map.setZoom(15);
                // this.saveallReacord()
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map
                });
                map.setCenter(pos);
                _this.map = map;
            }, function () {
                _this.handleLocationError(true, infoWindow, map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, infoWindow, map.getCenter());
        }
    };
    SkytrcikerNewPage.prototype.addPolyLine = function (latLng) {
        this.polylines.push(latLng);
        if (this.polylines.length > 1) {
            var flightPath = new google.maps.Polyline({
                path: this.polylines,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
            flightPath.setMap(this.map);
        }
    };
    SkytrcikerNewPage.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    };
    SkytrcikerNewPage.prototype.mapLoad = function () {
        var _this = this;
        this.plt.ready().then(function () {
            var mapOptions = {
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.geolocation.getCurrentPosition().then(function (pos) {
                var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                _this.map.setCenter(latLng);
                _this.map.setZoom(15);
                _this.saveallReacord();
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    SkytrcikerNewPage.prototype.draw = function () {
        // this.setAccuracy()
        var _this = this;
        var options = {
            timeout: 130000,
            enableHighAccuracy: false
        };
        this.positionSubscription = this.geolocation.watchPosition(options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (p) { return p.coords !== undefined; }) //Filter Out Errors
        )
            .subscribe(function (data) {
            setTimeout(function () {
                console.log("speed", data);
                _this.trackedRoute.push({
                    lat: data.coords.latitude,
                    lng: data.coords.longitude
                });
                _this.redrawPath(_this.trackedRoute);
                console.log(_this.trackedRoute);
            }, 3000);
        });
    };
    SkytrcikerNewPage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
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
    SkytrcikerNewPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    SkytrcikerNewPage.prototype.redrawPath = function (path) {
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
    SkytrcikerNewPage.prototype.setAccuracy = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return console.log('Request successful'); }, function (error) { return console.log('Error requesting location permissions', error); });
            }
        });
    };
    SkytrcikerNewPage.prototype.start = function () {
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
    SkytrcikerNewPage.prototype.zeroPrefix = function (num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    };
    SkytrcikerNewPage.prototype.clockRunning = function () {
        var currentTime = new Date();
        var timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration);
        var hour = timeElapsed.getUTCHours();
        var min = timeElapsed.getUTCMinutes();
        var sec = timeElapsed.getUTCSeconds();
        // let ms = timeElapsed.getUTCMilliseconds();
        this.time =
            this.zeroPrefix(hour, 2) + ":" +
                this.zeroPrefix(min, 2) + ":" +
                this.zeroPrefix(sec, 2) + "";
        //this.zeroPrefix(ms, 3);
    };
    ;
    SkytrcikerNewPage.prototype.stop = function () {
        this.running = false;
        this.timeStopped = new Date();
        clearInterval(this.started);
    };
    SkytrcikerNewPage.prototype.reset = function () {
        this.running = false;
        clearInterval(this.started);
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        this.time = this.blankTime;
    };
    SkytrcikerNewPage.prototype.startRecording = function () {
        this.footerHide = true;
        this.start();
        this.draw();
        // this.buttonDisabled = false;
    };
    SkytrcikerNewPage.prototype.finish = function () {
        this.saveallReacord();
        document.getElementById("map").classList.add("heightmap");
        this.footerHide = false;
        this.reset();
        this.currentMapTrack.setMap(null);
        this.positionSubscription.unsubscribe();
        // this.buttonDisabled = true;
        this.StatusShow = false;
        this.trackedRoute = [];
    };
    SkytrcikerNewPage.prototype.saveallReacord = function () {
        localStorage.removeItem('distance');
        localStorage.removeItem('Average Speed');
        localStorage.removeItem('TotalTime');
        localStorage.removeItem('trackedRoute');
        localStorage.setItem('distance', this.kmShowany);
        localStorage.setItem('Average Speed', this.speed);
        localStorage.setItem('TotalTime', this.currenttime);
        localStorage.setItem('trackedRoute', JSON.stringify(this.trackedRoute));
    };
    SkytrcikerNewPage.prototype.nextData = function () {
        var data = localStorage.getItem('distance');
        if (data == null || data == undefined || data == 'undefined') {
            alert("There is no previous stats to be shown.");
        }
        else {
            this.router.navigate(['/menu/first/tabs/tab1/skytrciker-new/skytricker-next']);
        }
    };
    SkytrcikerNewPage.prototype.Pause = function () {
        this.positionSubscription.unsubscribe();
        this.pauseIf = true;
        this.stop();
    };
    SkytrcikerNewPage.prototype.Resume = function () {
        this.pauseIf = false;
        this.start();
        this.draw();
    };
    SkytrcikerNewPage.prototype.Status = function () {
        //if  (this.trackedRoute.length !=0) {
        document.getElementById("map").classList.remove("heightmap");
        this.StatusShow = true;
        var track1 = this.trackedRoute[0];
        var trackLast = this.trackedRoute[this.trackedRoute.length - 1];
        for (var i = 0; i < this.trackedRoute.length - 1; i++) {
            var track1_1 = this.trackedRoute[i];
            var track2 = this.trackedRoute[i + 1];
            var currentkm = this.getDistanceFromLatLonInKm(track1_1.lat, track1_1.lng, track2.lat, track2.lng);
            console.log(currentkm);
            this.km = this.km + currentkm;
            this.kmShowany = this.km.toFixed(3);
            this.currenttime = this.time;
            var spliArray = this.currenttime.split(":", 3);
            console.log("currentTime", spliArray);
            var totalSeconds = 0;
            for (var i_1 = 0; i_1 <= 2; i_1++) {
                if (i_1 == 0) {
                    totalSeconds += (parseInt(spliArray[i_1]) * 60 * 60);
                }
                else if (i_1 == 1) {
                    totalSeconds += (parseInt(spliArray[i_1]) * 60);
                }
                else {
                    totalSeconds += parseInt(spliArray[i_1]);
                }
            }
            var hours = totalSeconds / 3600;
            var speedVal = this.km / hours;
            this.speed = speedVal.toFixed(3);
        }
        //  }else{
        //   alert("Not have enough data")
        //  }
        //   if  (this.trackedRoute.length-1 !=0) {
        //    let track1=this.trackedRoute[0];
        //    let trackLast=this.trackedRoute[this.trackedRoute.length-1];
        //  for(let i = 0; i < this.trackedRoute.length-1; i++){
        //    let track1=this.trackedRoute[i];
        //    let track2=this.trackedRoute[i+1];
        //    this.km +=this.getDistanceFromLatLonInKm(track1.lat,track1.lng,track2.lat,track2.lng)
        //    console.log("value",track1,track2)
        //    console.log("distance",this.km)
        //  }
        //    }else{
        //   alert("Not have enough data to calculate km distance.")
        //  }
    };
    SkytrcikerNewPage.prototype.mapShow = function () {
        document.getElementById("map").classList.add("heightmap");
        this.StatusShow = false;
    };
    SkytrcikerNewPage.prototype.share = function () {
        var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFLklEQVRo3u2XayxkZxjH52aMMd0Mg5kua9262VqLkW0bqVt1NmJ3pbMu3Vp1aRermhRLq6XUpVEkImK/SqSJCBHhi9SHJjRFqsEnjVYbsQT9UHHdbET8e573OGMMBmm63TTnTZ6c897OeX7P7bxHIpFI8D8REUQEEUFEEBFEBBFBRBARRAQRQUSQ/xZEKpUyeV4vlslkTORyObsKOtjOH9cXdLXR98Wy7D8wJn/j5eUFHx+f56Kso6Mjbt++BbPZjOTkZISHh6OsrAxxcXFsvqSkBCkpKYiPj2ceU6vVSEpKQmxsLFxcXJieeg8PeHt7w9XV9QDEwcEB09PTWF5ehlarZROCy62FxkjOY1m60h6FQsGExqIiI5F2/z4efPgBUzAvLw91dXXw9/dn8zXVVbh6JQDp76ex8YyMDNTU1KClpQUFBQX4hhv7urYWj4qKoFQqD0CImCC2t7eh0Wj+7RCAb8AVXPLxwyVff3h6XoTRaITJZOKAedA3o2MReycJ8QlmJCUmcl5LQSJ3DQ4Oxk3T2wgKMSIi+i0Yb7xuyR8LyNzcHPb29tDf34/u7m709PQckq6uLrS2tiItLQ1OTk5HYOieHihYvbCwEBMTExgYGEBHRwdKS0vh58uHrtlPiZ/vaRHrpThcAKT89RWNBN/e0uENAz/voJBbWx5hrhL8aHZCqv++1609QiDU1tfXsbGxcUS2trYgtMnJSXhwMUp7BcVtpbi4GPPz85iamsLS0hLb9+zpNl6LiMHNlyVAhSd+SddBIRMgDowynqoDvtTj1wwdnJVymyiQYuRdV+Cri8i6xhtULt0HIQsvLCxgc3MTer3eoqB1flAeGQwGdHZ2MqXIwtaKU+KFhoYiLCyMSVBQEEJCQpjQeH19Pds3ODjI1n93l1PmCwMeXFPxBUDOPycrUAUU6/HsY3fgUz1KwtSH5u/6O3Iv1+OHZJejVYtAFhcXGYhOp7ObE1RlqDU1NfGJGxWFkZERnLWN/zTG9pkucwqV6PEbZ3W1gn+2s4MUf2Rx3ijwwCdGNTY/csdfuW5wd5JZQm/8PRfgMz3u+CqtvXHUI0LI2CazUK0yMzOZQrVc1aAyura2xvqUB1R9srOzkZOTY5Hc3FxkZWWhsrKSrRsdHbE8c+AdLVBmQKGRt3rpDTVQbkBX/AXWb415iQsxAxoj+AKU/irnrc8N+D5Re/x3hHKEQCg/hPJLoSWUWxIh2VJTU5lC5eXlLGSo9fX1nVqpyNM8yKhlLMbLgXnl90wdAnUKLGe7MW8E6fi8u3xBji3OK0/z3XHdTYHxe7w3TN5HvMGDkGWfPHmC3d1dBAYG2lUoPz+fKUQfMIp/alSZTgMR1gogcpn0wCvFfGJTTjzmvGCdE7Xhzkz5WQ4WRR4YNGutK9WBCOeXiooK9iKqTr29vWhsbERVVRWqq6uZUCi1tbVhZ2eHrYuIiGAFYHZ2lvWHhobYx8t6jyCU6DMzM2xdQ0ODpaSyHPPkvPLIg0FscNb30sgOWdtVJcUKeYqDoXWR3HrrUn3sWYuOBcPDw+zDeFyj8bGxMSQkJByqVu3t7VhdXbWb5CsrK2huboZKpdrPwQOrtkRrsPrQDQ+vHyqnlmvaVRX+zHFDU6TmeG+cdGik84ufnx8CAgIsQn3bimZdEOhEYLtHEDobUR7aCz2qWPbmlfJz/I9QmJ129BC+4Cf1Tzu62332KePS8/5YCcrZij3Ik/acxThnUFL81RVBRBARRAQRQUQQEUQEEUFEEBHkhZW/AQQascEjyqX7AAAAAElFTkSuQmCC';
        var string = 'Distance:' + this.kmShowany + '\nAverage Speed:' + this.speed + '\nTotal Time:' + this.currenttime;
        if (this.km == undefined || this.km == null) {
            this.shared.displayNetworkUpdate('Not have enough data to share');
        }
        else {
            _ionic_native_social_sharing__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"].share("MountBawBaw STATS\n" + string, '', base64, "https://mountbawbaw.thesmarter.website");
        }
    };
    SkytrcikerNewPage.prototype.displayLocationElevation = function (location, elevator, infowindow) {
        // Initiate the location request
        elevator.getElevationForLocations({
            'locations': [location]
        }, function (results, status) {
            infowindow.setPosition(location);
            if (status === 'OK') {
                // Retrieve the first result
                if (results[0]) {
                    // Open the infowindow indicating the elevation at the clicked position.
                    infowindow.setContent('The elevation at this point <br>is ' +
                        results[0].elevation + ' meters.');
                }
                else {
                    infowindow.setContent('No results found');
                }
            }
            else {
                infowindow.setContent('Elevation service failed due to: ' + status);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SkytrcikerNewPage.prototype, "mapElement", void 0);
    SkytrcikerNewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skytrciker-new',
            template: __webpack_require__(/*! ./skytrciker-new.page.html */ "./src/app/pages/skytrciker-new/skytrciker-new.page.html"),
            styles: [__webpack_require__(/*! ./skytrciker-new.page.scss */ "./src/app/pages/skytrciker-new/skytrciker-new.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], SkytrcikerNewPage);
    return SkytrcikerNewPage;
}());



/***/ })

}]);
//# sourceMappingURL=skytrciker-new-skytrciker-new-module.js.map