import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
export class RecipeService {
  private recipes:Recipe[] = [
    new Recipe('Sample', 'Sampe', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
  ];

  getRecipes() {
    return this.recipes.slice()
  }

  selectedRecipe = new EventEmitter<Recipe>()
}
