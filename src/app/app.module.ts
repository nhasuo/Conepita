import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './shared/header/header.component';
import { CommonService } from './service/common.service';
import { MapService } from './service/map.service';
import { StreerviewComponent } from './streerview/streerview.component';
import { ToggleComponent } from './shared/toggle/toggle.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { DisplayComponent } from './display/display.component';
import { TimebarComponent } from './shared/timebar/timebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    HeaderComponent,
    StreerviewComponent,
    ToggleComponent,
    CarInfoComponent,
    DisplayComponent,
    TimebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [CommonService, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
