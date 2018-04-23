import {NgModule} from "@angular/core";
import {AppHomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";

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
  ]
})
export class CoreModule{

}
