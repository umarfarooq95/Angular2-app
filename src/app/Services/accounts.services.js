"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AccountServices = (function () {
    function AccountServices(loggingService) {
        this.loggingService = loggingService;
        this.accounts = [
            {
                name: 'Master Account',
                status: 'active'
            },
            {
                name: 'Testaccount',
                status: 'inactive'
            },
            {
                name: 'Hidden Account',
                status: 'unknown'
            }
        ];
        this.statusUpdated = new core_1.EventEmitter();
    }
    AccountServices.prototype.onAddAccount = function (name, status) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.loggedToConsole(status);
    };
    AccountServices.prototype.onUpdateSttaus = function (id, status) {
        this.accounts[id].status = status;
        this.loggingService.loggedToConsole(status);
    };
    AccountServices = __decorate([
        core_1.Injectable()
    ], AccountServices);
    return AccountServices;
}());
exports.AccountServices = AccountServices;
//# sourceMappingURL=accounts.services.js.map