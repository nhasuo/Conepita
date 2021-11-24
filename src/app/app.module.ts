import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './shared/header/header.component';
import { CommonService } from './service/common.service';
import { MapService } from './service/map.service';
import { StreerviewComponent } from './streerview/streerview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    HeaderComponent,
    StreerviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
  ],
  providers: [CommonService, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
