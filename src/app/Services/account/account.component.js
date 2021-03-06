"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AccountComponent = (function () {
    //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
    function AccountComponent(loggingServiceInj, accountService) {
        this.loggingServiceInj = loggingServiceInj;
        this.accountService = accountService;
    }
    AccountComponent.prototype.onSetTo = function (status) {
        //this.statusChanged.emit({id: this.id, newStatus: status});
        this.accountService.onUpdateSttaus(this.id, status);
        //console.log('A server status changed, new status: ' + status);
        //this.loggingServiceInj.loggedToConsole(status)
        this.accountService.statusUpdated.subscribe(function (status) { return alert('New Status ' + status); });
        this.accountService.statusUpdated.emit(status);
    };
    __decorate([
        core_1.Input()
    ], AccountComponent.prototype, "account");
    __decorate([
        core_1.Input()
    ], AccountComponent.prototype, "id");
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'app-account',
            templateUrl: './account.component.html',
            styleUrls: ['./account.component.css']
        })
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map