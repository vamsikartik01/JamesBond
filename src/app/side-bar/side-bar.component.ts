import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() enableToggleButton: boolean = false;
  @Output() toggledSidebar = new EventEmitter<boolean>()

  toggleBar(): void{
    this.toggledSidebar.emit(true);
  }
}
