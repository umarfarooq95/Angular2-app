"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RecipeListComponent = (function () {
    //@Output() recipeWasSelected = new EventEmitter<Recipe>();
    function RecipeListComponent(RecipeService, router, route) {
        this.RecipeService = RecipeService;
        this.router = router;
        this.route = route;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.Recipes = this.RecipeService.getRecipes();
    };
    /* onSelectedRecipe(recipe:Recipe) {
     this.recipeWasSelected.emit(recipe)
     }*/
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.css']
        })
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map