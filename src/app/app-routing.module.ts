import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { DetailsComponent } from 'src/app/details/details.component';
import { RegisterComponent } from 'src/app/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
