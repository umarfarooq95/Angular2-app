import {NgModule} from "@angular/core";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeComponent} from "./recipe.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecipeRoutingModule} from "./recipe.routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {
}
