import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// Import all the components for which navigation service has to be activated 
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ForgotPassordComponent } from '../forgot-passord/forgot-passord.component';
 import { AuthGuard } from "../shared/guard/auth.guard";
 import { VerifyEmailComponent } from '../verify-email/verify-email.component';
 
 import { SecureInnerPagesGuard } from "../shared/guard/secure-inner-pages.guard.guard";
 import { ProfileComponent } from "../customerdashboard/profile/profile.component";
 import {VehiclesComponent} from '../customerdashboard/vehicles/vehicles.component'
import { GenerateqrComponent } from '../servicestation/generateqr/generateqr.component';
import { HomepageComponent } from '../homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SigninComponent },
  { path: 'register-user', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPassordComponent },
   { path: 'verify-email-address', component: VerifyEmailComponent },
   { path: 'customer-profile', component: ProfileComponent },
   { path: 'vehicle-register', component: VehiclesComponent },
   { path: 'qr-generator', component: GenerateqrComponent },
   {path:  'home' ,component:HomepageComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
