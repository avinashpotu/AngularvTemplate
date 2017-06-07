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
var core_1 = require("@angular/core");
var Message_1 = require("./Message");
var http_test_service_1 = require("./http-test.service");
var directives_1 = require("../node_modules/@angular/core/src/metadata/directives");
var AppComponent = (function () {
    function AppComponent(_httptestService) {
        this._httptestService = _httptestService;
        this.result = "";
    }
    // responseStatus:Object= [];
    AppComponent.prototype.submitFunc = function () {
        var _this = this;
        console.log("submit Post click happened " + this.message.firstname);
        this._httptestService.postComment(this.message).subscribe(function (data) { return _this.result = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Request Completed'); });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.message = new Message_1.Message();
    };
    return AppComponent;
}());
__decorate([
    directives_1.Input(),
    __metadata("design:type", Message_1.Message)
], AppComponent.prototype, "message", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<form method=\"post\" id=\"commentform\" class=\"form-control\" novalidate=\"\">\n             <input class=\"form-control\" type=\"text\" id =\"firstname\" placeholder=\"Enter firstname\" required [(ngModel)]=\"message.firstname\"><br><br>\n             <input class=\"form-control\"type=\"text\" id =\"lastname\" placeholder=\"Enter lastname\" required [(ngModel)]=\"message.lastname\"><br><br>\n             <input class=\"form-control\"type=\"text\" id=\"favcolor\" placeholder=\"Enter Favorite Color\" required [(ngModel)]=\"message.favcolor\"><br><br>\n            <input class=\"form-control btn btn-primary\" type=\"submit\" id =\"submit\"(click)='submitFunc();' >\n            <br><br>\n            </form>\n            <section>\n             <h4 class=\"well\">{{result}}</h4>\n            </section>",
        providers: [http_test_service_1.HTTPTestservcie]
    }),
    __metadata("design:paramtypes", [http_test_service_1.HTTPTestservcie])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map