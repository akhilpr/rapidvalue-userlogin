import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {  AuthGuardService as AuthGuard } from './guard/auth-guard.service';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user-details', component: UserDetailsComponent ,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
