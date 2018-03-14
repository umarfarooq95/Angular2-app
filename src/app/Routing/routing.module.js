"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var core_1 = require('@angular/core');
var home_component_1 = require("./home/home.component");
var users_component_1 = require("./users/users.component");
var user_component_1 = require("./users/user/user.component");
var servers_component_1 = require("./servers/servers.component");
var routing_server_component_1 = require("./servers/server/routing.server.component");
var edit_server_component_1 = require("./servers/edit-server/edit-server.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'users', component: users_component_1.UsersComponent, children: [
            { path: ':userId/:userName', component: user_component_1.UserComponent }
        ]
    },
    {
        path: 'servers', component: servers_component_1.RoutingServersComponent, children: [
            { path: ':id', component: routing_server_component_1.RoutingServerComponent },
            { path: ':id/edit', component: edit_server_component_1.EditServerComponent },
        ]
    },
    { path: 'not-found', component: page_not_found_component_1.PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];
var RoutingExampleRouteModule = (function () {
    function RoutingExampleRouteModule() {
    }
    RoutingExampleRouteModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [router_1.RouterModule]
        })
    ], RoutingExampleRouteModule);
    return RoutingExampleRouteModule;
}());
exports.RoutingExampleRouteModule = RoutingExampleRouteModule;
//# sourceMappingURL=routing.module.js.map