import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
// import { RestaurantsignupComponent } from './restaurantsignup/restaurantsignup.component';
import { auth1Guard } from './auth1.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //  Default route
  { path: 'customerLogin', component: CustomerLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customerSignup', component: CustomerSignupComponent },
  { path: 'commonLogin', component: CustomerLoginComponent },
  { path: 'commonSignup', component: CustomerSignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [auth1Guard] },
  { path: 'profile', component: ProfileComponent, canActivate: [auth1Guard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
