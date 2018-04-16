import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {RecipeService} from "../recipe/recipe.service";
import {Recipe} from "../recipe/recipe.model";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipe() {
    return this.http.put('https://ng-recipe-book-23ed0.firebaseio.com/recipe.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-23ed0.firebaseio.com/recipe.json')
      .map(
        (response)=>{
          const recipes: any = response;
          for(let recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients'] = []
            }
          }
          return recipes
        }
      )
      .subscribe(
        (recipes) => {
          this.recipeService.setRecipes(recipes)
        }
      )
  }
}
