import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {NgModule} from '@angular/core';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {AppHomeComponent} from "./core/home/home.component";



const appRoutes:Routes = [
  {path: '', component:AppHomeComponent},
  {path: 'recipes', loadChildren:'./recipe/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

