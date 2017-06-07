"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = require("../node_modules/@angular/core/src/di/metadata");
var http_1 = require("../node_modules/@angular/http/src/http");
require("rxjs/add/operator/map");
var HTTPTestservcie = (function () {
    function HTTPTestservcie(_http) {
        this._http = _http;
        this.posts_Url = 'https://bunkerdev.azure-api.net/codetest/api/people/add';
    }
    HTTPTestservcie.prototype.postComment = function (message) {
        return this._http.post(this.posts_Url, message, {})
            .map(function (res) { return res.json(); });
    };
    return HTTPTestservcie;
}());
HTTPTestservcie = __decorate([
    metadata_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HTTPTestservcie);
exports.HTTPTestservcie = HTTPTestservcie;
//# sourceMappingURL=http-test.service.js.map