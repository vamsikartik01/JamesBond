import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

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
import { NotesNewComponent } from './right-side-bar/notes-new/notes-new.component';
import { GreetingComponent } from './body/home/greeting/greeting.component';
import { NoteViewerComponent } from './body/home/note-viewer/note-viewer.component';
import { HomeComponent } from './body/home/home.component';
import { ControlPanelComponent } from './body/control-panel/control-panel.component';
import { DeviceComponent } from './body/control-panel/device/device.component';
import { NoteService } from './services/notes.service';
import { ControlPanelService } from './services/controlpanel.service';

const appRoutes: Routes = [
  { path: '',component:HomeComponent },
  { path: 'room/:id',component:ControlPanelComponent },
];

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
    WeatherInfoComponent,
    NotesNewComponent,
    GreetingComponent,
    NoteViewerComponent,
    HomeComponent,
    ControlPanelComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [NoteService, ControlPanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
