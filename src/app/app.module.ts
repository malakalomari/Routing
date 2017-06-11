import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';


import {ImageDetailsComponent} from './image-details.component';
import { LocalstorageService } from './localstorage.service';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';
// import { CountryComponent } from './country.component';
import { HttpService } from './http.service';




@NgModule({
  declarations: [
    AppComponent,
    ImageDetailsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule
  ],
  providers: [LocalstorageService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
