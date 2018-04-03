import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  Recipes:Recipe[];
  subscription:Subscription;

  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private RecipeService:RecipeService, private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.RecipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.Recipes = recipes
      }
    );
    this.Recipes = this.RecipeService.getRecipes()
  }

  /* onSelectedRecipe(recipe:Recipe) {
   this.recipeWasSelected.emit(recipe)
   }*/

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
