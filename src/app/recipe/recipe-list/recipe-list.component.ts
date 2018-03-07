import {Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  Recipes:Recipe[]

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private RecipeService:RecipeService) {
  }

  ngOnInit() {
    this.Recipes = this.RecipeService.getRecipes()
  }

  onSelectedRecipe(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
