import {Routes, RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';


import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {RoutingServersComponent} from "./servers/servers.component";
import {RoutingServerComponent} from "./servers/server/routing.server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent, children: [
    {path: ':userId/:userName', component: UserComponent}
  ]
  },
  {
    path: 'servers', component: RoutingServersComponent, children: [
    {path: ':id', component: RoutingServerComponent},
    {path: ':id/edit', component: EditServerComponent},
  ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'},/*This is called Wild card Routes we can use Redirect also*/

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class RoutingExampleRouteModule {
  
}
