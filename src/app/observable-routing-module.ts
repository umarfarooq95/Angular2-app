import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservableHomeComponent } from './Observables/home/home.component';
import { ObservableUserComponent } from './Observables/user/user.component';

const routes: Routes = [
  {path: '', component: ObservableHomeComponent},
  {path: 'user/:id', component: ObservableUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ObservableRoutingModule {

}