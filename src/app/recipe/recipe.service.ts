import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Cheese Burger', 'What Else Do you Want?', 'https://i.ytimg.com/vi/a40xP-CvBAw/maxresdefault.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('French Fries', 'Yummy...', 'http://img.taste.com.au/MudZOM3z/taste/2016/11/french-fries-87711-1.jpeg', [
      new Ingredient('Potato', 5),
      new Ingredient('Meat', 3)
    ])
  ];

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index]
  }

  selectedRecipe = new EventEmitter<Recipe>()

  constructor(private slService: ShoppingListService) {

  }


  addIngredientToShoppingList(Ingredient: Ingredient[]) {
    this.slService.addIngForRecipe(Ingredient)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice())
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice())
  }
}
