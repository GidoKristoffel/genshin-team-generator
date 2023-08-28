import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { VideoBgComponent } from './components/video-bg/video-bg.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SwitchIconComponent } from './components/switch-icon/switch-icon.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { CharacterAvailabilityFilterComponent } from './components/character-availability-filter/character-availability-filter.component';
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { RegionFilterComponent } from './components/region-filter/region-filter.component';
import { WeaponFilterComponent } from './components/weapon-filter/weapon-filter.component';
import { SubFiltersComponent } from './components/sub-filters/sub-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VideoBgComponent,
    CharacterCardComponent,
    SwitchIconComponent,
    FiltersComponent,
    CharacterAvailabilityFilterComponent,
    RegionFilterComponent,
    WeaponFilterComponent,
    SubFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
