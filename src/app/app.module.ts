import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailsComponent } from './details/details.component';
import { FlagFormComponent } from './flag-form/flag-form.component';
import { DetailMapComponent } from './detail-map/detail-map.component';
import { HomeComponent } from './home/home.component';

import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    DetailsComponent,
    FlagFormComponent,
    FileSelectDirective,
    DetailsComponent,
    DetailMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlGiVwuebeamPH77r6usLJxEfQahuL7Wo'
    }),
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
