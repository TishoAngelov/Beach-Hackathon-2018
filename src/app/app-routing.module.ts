import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DetailsComponent } from './details/details.component';
import { FlagFormComponent } from './flag-form/flag-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new-flag', component: FlagFormComponent },
  { path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
