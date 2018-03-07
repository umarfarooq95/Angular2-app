"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NewAccountComponent = (function () {
    //@Output() accountAdded = new EventEmitter<{name:string, status:string}>();
    function NewAccountComponent(loggingServiceInj, accountService) {
        this.loggingServiceInj = loggingServiceInj;
        this.accountService = accountService;
    }
    NewAccountComponent.prototype.onCreateAccount = function (accountName, accountStatus) {
        /*  this.accountAdded.emit({
         name: accountName,
         status: accountStatus
         });*/
        this.accountService.onAddAccount(accountName, accountStatus);
        //console.log('A server status changed, new status: ' + accountStatus);
        //this.loggingServiceInj.loggedToConsole(accountStatus)
    };
    NewAccountComponent = __decorate([
        core_1.Component({
            selector: 'app-new-account',
            templateUrl: './new-account.component.html',
            styleUrls: ['./new-account.component.css']
        })
    ], NewAccountComponent);
    return NewAccountComponent;
}());
exports.NewAccountComponent = NewAccountComponent;
//# sourceMappingURL=new-account.component.js.map