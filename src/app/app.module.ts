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
    RoomsListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
