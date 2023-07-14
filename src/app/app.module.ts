import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
