import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DetailMapComponent } from './detail-map/detail-map.component';
import { MarkerInfoComponent } from './detail-map/marker-info/marker-info.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,

  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule

} from '@angular/material';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    MarkerInfoComponent,
    DetailsComponent,
    DetailMapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlGiVwuebeamPH77r6usLJxEfQahuL7Wo'
    }),
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
