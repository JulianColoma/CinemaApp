import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviescheduleComponent } from './components/movieschedule/movieschedule.component';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviescheduleComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
