"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EditServerComponent = (function () {
    function EditServerComponent(serversService) {
        this.serversService = serversService;
        this.serverName = '';
        this.serverStatus = '';
    }
    EditServerComponent.prototype.ngOnInit = function () {
        this.server = this.serversService.getServer(1);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    };
    EditServerComponent.prototype.onUpdateServer = function () {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    };
    EditServerComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-server',
            templateUrl: './edit-server.component.html',
            styleUrls: ['./edit-server.component.css']
        })
    ], EditServerComponent);
    return EditServerComponent;
}());
exports.EditServerComponent = EditServerComponent;
//# sourceMappingURL=edit-server.component.js.map