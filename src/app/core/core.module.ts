import {NgModule} from "@angular/core";
import {AppHomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {LoggingService} from "../Services/logging.services";
import {AuthService} from "../auth/auth.service";
import {RecipeService} from "../recipe/recipe.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {DataStorageService} from "../shared/data.storage.service";

@NgModule({
  declarations:[
    AppHomeComponent,
    HeaderComponent
  ],
  imports:[
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent
  ],
  providers:[
    LoggingService,
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]//because shoppinglist service use in recipe also soo we are import here
})
export class CoreModule{

}
