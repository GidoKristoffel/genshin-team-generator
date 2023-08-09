import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { VideoBgComponent } from './components/video-bg/video-bg.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VideoBgComponent,
    CharacterCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
