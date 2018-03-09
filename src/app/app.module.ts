import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ComponentSplittingDemoComponent } from './component-databinding-deep-dive/component-splitting-demo/component-splitting-demo.component';
import { CockpitComponent } from './component-databinding-deep-dive/cockpit/cockpit.component';
import { ServerElementComponent } from './component-databinding-deep-dive/server-element/server-element.component';
import { BasicHighlightDirective } from './Directive/basic-highlight-directive';
import { BetterHighlightDirective } from './Directive/better-highlight.directive';
import { UnlessDirective } from './Directive/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { AccountComponent } from './Services/account/account.component';
import { NewAccountComponent } from './Services/new-account/new-account.component';
import {LoggingService} from "./Services/logging.services";
import {ShoppingListService} from "./shopping-list/shopping-list.service";


import { HomeComponent } from './Routing/home/home.component';
import { UsersComponent } from './Routing/users/users.component';
import { RoutingServersComponent } from './Routing/servers/servers.component';
import { UserComponent } from './Routing/users/user/user.component';
import { EditServerComponent } from './Routing/servers/edit-server/edit-server.component';
import { RoutingServerComponent } from './Routing/servers/server/routing.server.component';
import { ServersService } from './Routing/servers/servers.service';
import {Routes,RouterModule} from "@angular/router";

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'user/:userId',component:UserComponent},
  {path:'servers',component:RoutingServersComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    HeaderComponent,
    ServerComponent,
    ServersComponent,
    DatabindingComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ComponentSplittingDemoComponent,
    CockpitComponent,
    ServerElementComponent,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    RoutingServersComponent,
    UserComponent,
    EditServerComponent,
    RoutingServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService,ShoppingListService,ServersService],//because shoppinglist service use in recipe also soo we are import here
  bootstrap: [AppComponent]
})
export class AppModule { }
