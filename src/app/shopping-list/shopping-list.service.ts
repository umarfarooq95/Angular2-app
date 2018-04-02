import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from '@angular/core'
import {Subject} from "rxjs";
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>()
  private ingredients:Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomates", 10)
  ]

  getIngredients(){
    return this.ingredients.slice()
  }
  getIngredient(index:number){
    return this.ingredients[index]
  }

  addIngredients(ingredient:Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngForRecipe(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  updateIngredients(index:number,ingredient:Ingredient){
    this.ingredients[index] = ingredient
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
  deleteIngredients(index:number){
    this.ingredients.splice(index,1)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
