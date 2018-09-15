import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DetailMapComponent } from './detail-map/detail-map.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { FlagFormComponent } from './flag-form/flag-form.component';
import { HomeComponent } from './home/home.component';
import { MarkerInfoComponent } from './detail-map/marker-info/marker-info.component';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';

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
    MatCardModule,
    MatDividerModule
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
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
