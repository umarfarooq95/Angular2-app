"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ingredient_model_1 = require("../../shared/ingredient.model");
var ShoppingEditComponent = (function () {
    //@Output() onIngredientAdded = new EventEmitter<Ingredient>()
    function ShoppingEditComponent(shoppinngListService) {
        this.shoppinngListService = shoppinngListService;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingEditComponent.prototype.onAddedItem = function () {
        var ingName = this.nameInput.nativeElement.value;
        var ingAmount = this.amountInput.nativeElement.value;
        var newIngredient = new ingredient_model_1.Ingredient(ingName, ingAmount);
        //this.onIngredientAdded.emit(newIngredient)
        this.shoppinngListService.addIngredients(newIngredient);
    };
    __decorate([
        core_1.ViewChild('nameInput')
    ], ShoppingEditComponent.prototype, "nameInput");
    __decorate([
        core_1.ViewChild('amountInput')
    ], ShoppingEditComponent.prototype, "amountInput");
    ShoppingEditComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-edit',
            templateUrl: './shopping-edit.component.html',
            styleUrls: ['./shopping-edit.component.css']
        })
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());
exports.ShoppingEditComponent = ShoppingEditComponent;
//# sourceMappingURL=shopping-edit.component.js.map