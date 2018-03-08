"use strict";
var ingredient_model_1 = require("../shared/ingredient.model");
var core_1 = require('@angular/core');
var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new core_1.EventEmitter();
        this.ingredients = [
            new ingredient_model_1.Ingredient("Apples", 5),
            new ingredient_model_1.Ingredient("Tomates", 10)
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredients = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngForRecipe = function (ingredients) {
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
        var _a;
    };
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list.service.js.map