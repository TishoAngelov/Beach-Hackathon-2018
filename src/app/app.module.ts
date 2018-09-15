import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatTableModule,
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
import { FlagSevice } from './services/flags.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MarkerInfoComponent } from './detail-map/marker-info/marker-info.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { YagaModule } from '@yaga/leaflet-ng2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
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
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    YagaModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [FlagSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
