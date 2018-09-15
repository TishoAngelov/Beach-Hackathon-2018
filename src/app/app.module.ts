import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FlagFormComponent } from './flag-form/flag-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    DetailsComponent,
    FlagFormComponent, 
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
