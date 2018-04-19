import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeComponent} from "./recipe.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";


const recipeRoutes:Routes = [
  {path: 'recipes', component: RecipeComponent,
    children:[
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent,canActivate:[AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent,canActivate:[AuthGuard]},
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule{

}
