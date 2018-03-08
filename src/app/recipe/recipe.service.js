"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var recipe_model_1 = require("./recipe.model");
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../shared/ingredient.model");
var RecipeService = (function () {
    function RecipeService(slService) {
        this.slService = slService;
        this.recipes = [
            new recipe_model_1.Recipe('Cheese Burger', 'What Else Do you Want?', 'https://i.ytimg.com/vi/a40xP-CvBAw/maxresdefault.jpg', [
                new ingredient_model_1.Ingredient('Meat', 1),
                new ingredient_model_1.Ingredient('French Fries', 20)
            ]),
            new recipe_model_1.Recipe('French Fries', 'Yummy...', 'http://img.taste.com.au/MudZOM3z/taste/2016/11/french-fries-87711-1.jpeg', [
                new ingredient_model_1.Ingredient('Potato', 5),
                new ingredient_model_1.Ingredient('Meat', 3)
            ])
        ];
        this.selectedRecipe = new core_1.EventEmitter();
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.addIngredientToShoppingList = function (Ingredient) {
        this.slService.addIngForRecipe(Ingredient);
    };
    RecipeService = __decorate([
        core_1.Injectable()
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map