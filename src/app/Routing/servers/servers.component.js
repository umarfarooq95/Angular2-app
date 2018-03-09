"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RoutingServersComponent = (function () {
    function RoutingServersComponent(serversService) {
        this.serversService = serversService;
        this.servers = [];
    }
    RoutingServersComponent.prototype.ngOnInit = function () {
        this.servers = this.serversService.getServers();
    };
    RoutingServersComponent = __decorate([
        core_1.Component({
            selector: 'app-routing-servers',
            templateUrl: './servers.component.html',
            styleUrls: ['./servers.component.css']
        })
    ], RoutingServersComponent);
    return RoutingServersComponent;
}());
exports.RoutingServersComponent = RoutingServersComponent;
//# sourceMappingURL=servers.component.js.map