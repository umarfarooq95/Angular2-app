"use strict";
var recipe_model_1 = require("./recipe.model");
var core_1 = require("@angular/core");
var RecipeService = (function () {
    function RecipeService() {
        this.recipes = [
            new recipe_model_1.Recipe('Sample', 'Sampe', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
        ];
        this.selectedRecipe = new core_1.EventEmitter();
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map