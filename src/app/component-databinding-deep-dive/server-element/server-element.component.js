"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ServerElementComponent = (function () {
    /*Input is used to know the this property we can use for property binding*/
    /*we can pass the alias to the custom property binding if we use alias then the property name will not exist we use only
    * the alias property*/
    function ServerElementComponent() {
    }
    ServerElementComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('srvElem')
    ], ServerElementComponent.prototype, "element");
    ServerElementComponent = __decorate([
        core_1.Component({
            selector: 'app-server-element',
            templateUrl: './server-element.component.html',
            styleUrls: ['./server-element.component.css']
        })
    ], ServerElementComponent);
    return ServerElementComponent;
}());
exports.ServerElementComponent = ServerElementComponent;
//# sourceMappingURL=server-element.component.js.map