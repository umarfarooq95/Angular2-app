"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ComponentSplittingDemoComponent = (function () {
    function ComponentSplittingDemoComponent() {
        this.serverName = '';
        this.serverContent = '';
        this.serverElement = [];
    }
    ComponentSplittingDemoComponent.prototype.ngOnInit = function () {
    };
    ComponentSplittingDemoComponent.prototype.onServerAdd = function () {
        var serverObj = {
            serverName: this.serverName,
            serverContent: this.serverContent,
            type: "server"
        };
        this.serverElement.push(serverObj);
    };
    ComponentSplittingDemoComponent.prototype.onServerBluePrintAdd = function () {
        var serverBluePrintObj = {
            serverName: this.serverName,
            serverContent: this.serverContent,
            type: "bluePrint"
        };
        this.serverElement.push(serverBluePrintObj);
    };
    ComponentSplittingDemoComponent = __decorate([
        core_1.Component({
            selector: 'app-component-splitting-demo',
            templateUrl: './component-splitting-demo.component.html',
            styleUrls: ['./component-splitting-demo.component.css']
        })
    ], ComponentSplittingDemoComponent);
    return ComponentSplittingDemoComponent;
}());
exports.ComponentSplittingDemoComponent = ComponentSplittingDemoComponent;
//# sourceMappingURL=component-splitting-demo.component.js.map