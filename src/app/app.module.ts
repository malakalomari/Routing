import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {ImageDetailsComponent} from './image-details.component';
import { LocalstorageService } from './localstorage.service';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ImageDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
