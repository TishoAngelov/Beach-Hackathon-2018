import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { FlagFormComponent } from './flag-form/flag-form.component';
import { HomeComponent } from 'src/app/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new-flag', component: FlagFormComponent },
  { path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
