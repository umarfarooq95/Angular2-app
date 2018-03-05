"use strict";
var AccountServices = (function () {
    function AccountServices() {
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
    }
    AccountServices.prototype.onAddAccount = function (name, status) {
        this.accounts.push({ name: name, status: status });
    };
    AccountServices.prototype.onUpdateSttaus = function (id, status) {
        this.accounts[id].status = status;
    };
    return AccountServices;
}());
exports.AccountServices = AccountServices;
//# sourceMappingURL=accounts.services.js.map