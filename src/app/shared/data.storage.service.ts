import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {RecipeService} from "../recipe/recipe.service";
import {Recipe} from "../recipe/recipe.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-23ed0.firebaseio.com/recipe.json?auth=' + token,
      this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get('https://ng-recipe-book-23ed0.firebaseio.com/recipe.json?auth=' + token)
      .map(
        (response) => {
          const recipes: any = response;
          for (let recipe of recipes) {
            if (!recipe['ingredients']) { 
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
