"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CockpitComponent = (function () {
    function CockpitComponent() {
        this.serverCreated = new core_1.EventEmitter();
        this.serverBluePrintCreated = new core_1.EventEmitter();
        /*Output Is used to emit the custom Events we can pass the Event data whatever we want..In this case We want a
        * serverName,serverContent Value*/
        this.serverName = '';
        this.serverContent = '';
    }
    CockpitComponent.prototype.ngOnInit = function () {
    };
    CockpitComponent.prototype.onServerAdd = function () {
        this.serverCreated.emit({ serverName: this.serverName, serverContent: this.serverContent });
        /*Emit is the function that the emit the custom events*/
    };
    CockpitComponent.prototype.onServerBluePrintAdd = function () {
        this.serverBluePrintCreated.emit({ serverName: this.serverName, serverContent: this.serverContent });
        /*Emit is the function that the emit the custom events*/
    };
    __decorate([
        core_1.Output()
    ], CockpitComponent.prototype, "serverCreated");
    __decorate([
        core_1.Output()
    ], CockpitComponent.prototype, "serverBluePrintCreated");
    CockpitComponent = __decorate([
        core_1.Component({
            selector: 'app-cockpit',
            templateUrl: './cockpit.component.html',
            styleUrls: ['./cockpit.component.css']
        })
    ], CockpitComponent);
    return CockpitComponent;
}());
exports.CockpitComponent = CockpitComponent;
//# sourceMappingURL=cockpit.component.js.map