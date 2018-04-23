import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {RoutingExampleRouteModule} from "./Routing/routing.module";
import {AppRoutingModule} from "./app-routing.module";
import {ObservableRoutingModule} from './observable-routing-module';
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {DatabindingComponent} from './databinding/databinding.component';
import {ComponentSplittingDemoComponent} from './component-databinding-deep-dive/component-splitting-demo/component-splitting-demo.component';
import {CockpitComponent} from './component-databinding-deep-dive/cockpit/cockpit.component';
import {ServerElementComponent} from './component-databinding-deep-dive/server-element/server-element.component';
import {AccountComponent} from './Services/account/account.component';
import {NewAccountComponent} from './Services/new-account/new-account.component';
import {HomeComponent} from './Routing/home/home.component';
import {UsersComponent} from './Routing/users/users.component';
import {RoutingServersComponent} from './Routing/servers/servers.component';
import {UserComponent} from './Routing/users/user/user.component';
import {EditServerComponent} from './Routing/servers/edit-server/edit-server.component';
import {RoutingServerComponent} from './Routing/servers/server/routing.server.component';
import { ObservableHomeComponent } from './Observables/home/home.component';
import { ObservableUserComponent } from './Observables/user/user.component';
import {PageNotFoundComponent} from './Routing/page-not-found/page-not-found.component';
import { FormComponent } from './Forms/form/form.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component'
import { MakingComponent } from './Making-HTTP-req/making.component';
import { PipesComponent } from './pipes/pipes.component';




import {BasicHighlightDirective} from './Directive/basic-highlight-directive';
import {BetterHighlightDirective} from './Directive/better-highlight.directive';
import {UnlessDirective} from './Directive/unless.directive';

import {LoggingService} from "./Services/logging.services";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {ServersService} from './Routing/servers/servers.service';
import {RecipeService} from "./recipe/recipe.service";
import {ShortenPipe} from "./pipes/shorten.pipe";
import { FilterPipe } from './pipes/filter.pipe';
import {SampleHttpService} from "./Making-HTTP-req/sample-http-service";
import {DataStorageService} from "./shared/data.storage.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";




@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    ServerComponent,
    ServersComponent,
    DatabindingComponent,
    ComponentSplittingDemoComponent,
    CockpitComponent,
    ServerElementComponent,
    BetterHighlightDirective,
    UnlessDirective,
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
    //FormComponent,
    //ReactiveFormsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RoutingExampleRouteModule,
    AppRoutingModule,
    //ObservableRoutingModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [LoggingService, ShoppingListService, ServersService,RecipeService,SampleHttpService,DataStorageService,AuthService,AuthGuard],//because shoppinglist service use in recipe also soo we are import here
  bootstrap: [AppComponent]
})
export class AppModule {
}
