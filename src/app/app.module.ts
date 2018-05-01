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
import { ObservableHomeComponent } from './Observables/home/home.component';
import { ObservableUserComponent } from './Observables/user/user.component';
import { MakingComponent } from './Making-HTTP-req/making.component';
import { PipesComponent } from './pipes/pipes.component';




import {BasicHighlightDirective} from './Directive/basic-highlight-directive';
import {BetterHighlightDirective} from './Directive/better-highlight.directive';
import {UnlessDirective} from './Directive/unless.directive';


import {ServersService} from './Routing/servers/servers.service';
import {ShortenPipe} from "./pipes/shorten.pipe";
import { FilterPipe } from './pipes/filter.pipe';
import {SampleHttpService} from "./Making-HTTP-req/sample-http-service";
import {FormModule} from "./Forms/form.module";




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
    AccountComponent,
    NewAccountComponent,
    ObservableHomeComponent,
    ObservableUserComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    MakingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RoutingExampleRouteModule,
    AppRoutingModule,
    ObservableRoutingModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    FormModule
  ],
  providers: [ServersService,SampleHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
