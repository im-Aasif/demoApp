import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MovieslistService } from './services/movieslist/movieslist.service';
import { BoldDirective } from './directives/bold/bold.directive';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BoldDirective,
    NavbarComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [ MovieslistService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
