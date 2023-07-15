import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() toggleNavbar = new EventEmitter<boolean>()
  @Output() toggleRightbar = new EventEmitter<boolean>()
  toggleBar(): void{
    this.toggleNavbar.emit(true)
  }
  toggleRightBar(): void{
    this.toggleRightbar.emit(true)
  }
}
