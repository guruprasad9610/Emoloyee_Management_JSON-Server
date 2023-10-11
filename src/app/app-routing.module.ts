import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { EmployeeComponent } from './MyComponents/employee/employee.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full" },

  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent},

  { path: '', component: NavbarComponent,
    children :
    [
      { path: "home", component:HomeComponent},
      { path: "employee", component:EmployeeComponent},
      { path: "profile", component:ProfileComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ 

}
