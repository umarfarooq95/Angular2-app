import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RecipesModule} from "./recipe/recipes.module";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {DatabindingComponent} from './databinding/databinding.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {ComponentSplittingDemoComponent} from './component-databinding-deep-dive/component-splitting-demo/component-splitting-demo.component';
import {CockpitComponent} from './component-databinding-deep-dive/cockpit/cockpit.component';
import {ServerElementComponent} from './component-databinding-deep-dive/server-element/server-element.component';
import {BasicHighlightDirective} from './Directive/basic-highlight-directive';
import {BetterHighlightDirective} from './Directive/better-highlight.directive';
import {UnlessDirective} from './Directive/unless.directive';
import {DropdownDirective} from './shared/dropdown.directive';
import {AccountComponent} from './Services/account/account.component';
import {NewAccountComponent} from './Services/new-account/new-account.component';
import {LoggingService} from "./Services/logging.services";
import {ShoppingListService} from "./shopping-list/shopping-list.service";


import {HomeComponent} from './Routing/home/home.component';
import {UsersComponent} from './Routing/users/users.component';
import {RoutingServersComponent} from './Routing/servers/servers.component';
import {UserComponent} from './Routing/users/user/user.component';
import {EditServerComponent} from './Routing/servers/edit-server/edit-server.component';
import {RoutingServerComponent} from './Routing/servers/server/routing.server.component';
import {ServersService} from './Routing/servers/servers.service';
import {PageNotFoundComponent} from './Routing/page-not-found/page-not-found.component';
import {RoutingExampleRouteModule} from "./Routing/routing.module";
import {AppRoutingModule} from "./app-routing.module";



import { ObservableHomeComponent } from './Observables/home/home.component';
import { ObservableUserComponent } from './Observables/user/user.component';
import {ObservableRoutingModule} from './observable-routing-module';
import { FormComponent } from './Forms/form/form.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component'
import {RecipeService} from "./recipe/recipe.service";
import { PipesComponent } from './pipes/pipes.component';
import {ShortenPipe} from "./pipes/shorten.pipe";
import { FilterPipe } from './pipes/filter.pipe';
import { MakingComponent } from './Making-HTTP-req/making.component';
import {SampleHttpService} from "./Making-HTTP-req/sample-http-service";
import {HttpClientModule} from "@angular/common/http";
import {DataStorageService} from "./shared/data.storage.service";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";




@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    HeaderComponent,
    ServerComponent,
    ServersComponent,
    DatabindingComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ComponentSplittingDemoComponent,
    CockpitComponent,
    ServerElementComponent,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
   /* AccountComponent,
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    RoutingServersComponent,
    UserComponent,
    EditServerComponent,
    RoutingServerComponent,
    PageNotFoundComponent*/
    ObservableHomeComponent,
    ObservableUserComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    MakingComponent,
    SignupComponent,
    SigninComponent
    //FormComponent,
    //ReactiveFormsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,//this form module is for template driven approach
    //RoutingExampleRouteModule,
    AppRoutingModule,
    //ObservableRoutingModule,
    HttpClientModule,
    RecipesModule
  ],
  providers: [LoggingService, ShoppingListService, ServersService,RecipeService,SampleHttpService,DataStorageService,AuthService,AuthGuard],//because shoppinglist service use in recipe also soo we are import here
  bootstrap: [AppComponent]
})
export class AppModule {
}
