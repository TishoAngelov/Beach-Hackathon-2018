import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatCardModule
 } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlagFormComponent } from './flag-form/flag-form.component';
import { DetailMapComponent } from './detail-map/detail-map.component';
import { HomeComponent } from './home/home.component';

import { FileSelectDirective } from 'ng2-file-upload';
import { MarkerInfoComponent } from './detail-map/marker-info/marker-info.component';
import { YagaModule } from '@yaga/leaflet-ng2';
import { FlagSevice } from './services/flags.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    FlagFormComponent,
    FileSelectDirective,
    MarkerInfoComponent,
    DetailMapComponent
  ],
  imports: [
    YagaModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlGiVwuebeamPH77r6usLJxEfQahuL7Wo'
    }),
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule
  ],
  exports: [
    YagaModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [FlagSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
