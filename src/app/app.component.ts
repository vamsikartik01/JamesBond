import { Component, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNavbar: boolean = false;
  isMobile: boolean = false;

  onToggleNavbar(){
    this.isNavbar = !this.isNavbar
  }

  @HostListener('window:resize',['$event'])
  onWindowResize(event: Event) {
    this.isNavbar = window.innerWidth <= 768;
    this.isMobile = window.innerWidth <= 768;
  }
}
