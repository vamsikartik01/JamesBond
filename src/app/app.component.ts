import { Component, HostListener, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNavbar: boolean = false;
  isMobile: boolean = false;
  isRightbar: boolean = false;
  isSidebar: boolean = false;

  onToggleNavbar(): void{
    this.isNavbar = !this.isNavbar
    this.isSidebar = !this.isSidebar
  }

  onToggleRightbar(): void{
    this.isNavbar = !this.isNavbar
    this.isRightbar = !this.isRightbar
  }

  @HostListener('window:resize',['$event'])
  onWindowResize(event: Event) {
    this.isMobile = window.innerWidth <= 768;
    this.isNavbar = window.innerWidth <= 768;
    this.isSidebar = window.innerWidth <= 768;
    this.isRightbar = window.innerWidth <= 768;
  }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768;
    this.isNavbar = window.innerWidth <= 768;
    this.isSidebar = window.innerWidth <= 768;
    this.isRightbar = window.innerWidth <= 768;
  }
}
