"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserComponent = (function () {
    function UserComponent(route) {
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {
            id: this.route.snapshot.params['userId'],
            name: this.route.snapshot.params['userName']
        };
        this.paramSubscription = this.route.params /*params is observable so we can use subscribe that if we use params it will not updated when the new route '
         change in the same component so we are using params...this method we can use as route reactively*/
            .subscribe(function (params) {
            _this.user.id = params['userId'];
            _this.user.name = params['userName'];
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        // manually but now we are using angular soo angular will do it for us...
        this.paramSubscription.unsubscribe();
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map