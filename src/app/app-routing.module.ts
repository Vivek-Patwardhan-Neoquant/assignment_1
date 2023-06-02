import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from 'src/services/auth.guard';
import { UserlistComponent } from './shared/userlist/userlist.component';
import { ResourcesComponent } from './shared/resources/resources.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'users',
    component: UserlistComponent,
    outlet: 'dash-userlist'
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
