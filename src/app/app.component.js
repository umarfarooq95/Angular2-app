"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var accounts_services_1 = require("./Services/accounts.services");
var AppComponent = (function () {
    function AppComponent(accountService) {
        this.accountService = accountService;
        /*name = '';
         age = "qqq";*/
        this.accounts = [];
        this.featureSelected = 'recipe';
        this.value = 5;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.accounts = this.accountService.accounts;
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.featureSelected = feature;
    };
    AppComponent.prototype.onAccountAdded = function (newAccount) {
        this.accountService.onAddAccount(newAccount.name, newAccount.status);
    };
    AppComponent.prototype.onStatusChanged = function (updateInfo) {
        this.accountService.onUpdateSttaus(updateInfo.id, updateInfo.newStatus);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [accounts_services_1.AccountServices]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map