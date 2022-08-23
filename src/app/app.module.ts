import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UsComponent } from './components/us/us.component';
import { WorldComponent } from './components/world/world.component';
import { ScienceComponent } from './components/science/science.component';
import { ArtsComponent } from './components/arts/arts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { UploadImgComponent } from './components/upload-img/upload-img.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsComponent,
    WorldComponent,
    ScienceComponent,
    ArtsComponent,
    FilterPipe,
    AddNewsComponent,
    UploadImgComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
