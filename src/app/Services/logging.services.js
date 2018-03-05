"use strict";
var LoggingService = (function () {
    function LoggingService() {
    }
    LoggingService.prototype.loggedToConsole = function (status) {
        console.log('A server status changed, new status: ' + status);
    };
    return LoggingService;
}());
exports.LoggingService = LoggingService;
//# sourceMappingURL=logging.services.js.map