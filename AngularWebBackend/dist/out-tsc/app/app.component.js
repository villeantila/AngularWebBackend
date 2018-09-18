var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'testisivu';
        this.orderCount = -1;
        this.customers = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make the HTTP request
        this.http.get('/api/values/ordercount').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.orderCount = parseInt(data.toString());
        });
        this.http.get('/api/values/lastnorders/5').subscribe(function (data) {
            _this.customers = data;
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
// C:\Users\ville\source\repos\AngularWebBackend\AngularWebBackend
//# sourceMappingURL=app.component.js.map