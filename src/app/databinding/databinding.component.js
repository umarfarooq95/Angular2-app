"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DatabindingComponent = (function () {
    function DatabindingComponent() {
        var _this = this;
        this.id = 10;
        this.status = "offline";
        this.isStatus = false;
        this.name = '';
        this.property = false;
        setTimeout(function () {
            _this.property = true;
        }, 2000);
    }
    DatabindingComponent.prototype.getStatus = function () {
        return this.status;
    };
    ;
    DatabindingComponent.prototype.onStatusChange = function () {
        this.isStatus = true;
        this.status = 'online';
    };
    DatabindingComponent.prototype.onUpdateName = function (event) {
        this.name = event.target.value;
    };
    DatabindingComponent = __decorate([
        core_1.Component({
            selector: 'app-databinding',
            templateUrl: './databinding.component.html',
            styleUrls: ['./databinding.component.css']
        })
    ], DatabindingComponent);
    return DatabindingComponent;
}());
exports.DatabindingComponent = DatabindingComponent;
//# sourceMappingURL=databinding.component.js.map