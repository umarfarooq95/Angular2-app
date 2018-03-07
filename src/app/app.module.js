"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var header_component_1 = require('../app/header/header.component');
var server_component_1 = require('../app/server/server.component');
var servers_component_1 = require('./servers/servers.component');
var databinding_component_1 = require('./databinding/databinding.component');
var recipe_component_1 = require('./recipe/recipe.component');
var recipe_list_component_1 = require('./recipe/recipe-list/recipe-list.component');
var recipe_detail_component_1 = require('./recipe/recipe-detail/recipe-detail.component');
var recipe_item_component_1 = require('./recipe/recipe-list/recipe-item/recipe-item.component');
var shopping_list_component_1 = require('./shopping-list/shopping-list.component');
var shopping_edit_component_1 = require('./shopping-list/shopping-edit/shopping-edit.component');
var component_splitting_demo_component_1 = require('./component-databinding-deep-dive/component-splitting-demo/component-splitting-demo.component');
var cockpit_component_1 = require('./component-databinding-deep-dive/cockpit/cockpit.component');
var server_element_component_1 = require('./component-databinding-deep-dive/server-element/server-element.component');
var basic_highlight_directive_1 = require('./Directive/basic-highlight-directive');
var better_highlight_directive_1 = require('./Directive/better-highlight.directive');
var unless_directive_1 = require('./Directive/unless.directive');
var dropdown_directive_1 = require('./shared/dropdown.directive');
var account_component_1 = require('./Services/account/account.component');
var new_account_component_1 = require('./Services/new-account/new-account.component');
var logging_services_1 = require("./Services/logging.services");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                basic_highlight_directive_1.BasicHighlightDirective,
                header_component_1.HeaderComponent,
                server_component_1.ServerComponent,
                servers_component_1.ServersComponent,
                databinding_component_1.DatabindingComponent,
                recipe_component_1.RecipeComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                recipe_item_component_1.RecipeItemComponent,
                shopping_list_component_1.ShoppingListComponent,
                shopping_edit_component_1.ShoppingEditComponent,
                component_splitting_demo_component_1.ComponentSplittingDemoComponent,
                cockpit_component_1.CockpitComponent,
                server_element_component_1.ServerElementComponent,
                better_highlight_directive_1.BetterHighlightDirective,
                unless_directive_1.UnlessDirective,
                dropdown_directive_1.DropdownDirective,
                account_component_1.AccountComponent,
                new_account_component_1.NewAccountComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [logging_services_1.LoggingService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map