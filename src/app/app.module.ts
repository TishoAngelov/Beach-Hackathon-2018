import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DetailMapComponent } from './detail-map/detail-map.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MarkerInfoComponent } from './detail-map/marker-info/marker-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarkerInfoComponent,
    DetailsComponent,
    DetailMapComponent
  ],
  imports: [
    BrowserModule,
    YagaModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
