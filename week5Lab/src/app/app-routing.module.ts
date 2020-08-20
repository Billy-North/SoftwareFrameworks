import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: '', component: LoginComponent }, //Default route
  { path: 'login', component: LoginComponent,  pathMatch: 'full' },
  { path: 'account', component: AccountComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' }
  //{ path: 'account/:email', component: AccountComponent, pathMatch: 'full' },
  //path:'users/:id', for passing id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
