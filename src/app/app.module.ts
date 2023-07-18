import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodyComponent } from './body/body.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { RoutinesListComponent } from './side-bar/routines-list/routines-list.component';
import { RoutineListItemComponent } from './side-bar/routines-list/routine-list-item/routine-list-item.component';
import { RoomsListComponent } from './side-bar/rooms-list/rooms-list.component';
import { RoomsListItemComponent } from './side-bar/rooms-list/rooms-list-item/rooms-list-item.component';
import { WeatherComponent } from './right-side-bar/weather/weather.component';
import { WeatherInfoComponent } from './right-side-bar/weather/weather-info/weather-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    BodyComponent,
    RightSideBarComponent,
    RoutinesListComponent,
    RoutineListItemComponent,
    RoomsListComponent,
    RoomsListItemComponent,
    WeatherComponent,
    WeatherInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
