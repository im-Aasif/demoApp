import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { BoldDirective } from './directives/bold/bold.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    NavbarComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
