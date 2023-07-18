import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  username: string = 'Kartik';
  routineItemsList = [{'name':'routine 1'},{'name':'routine 2'},{'name':'routine 3'},{'name':'routine 4'},{'name':'routine 5'}]
  @Input() enableToggleButton: boolean = false;
  @Output() toggledSidebar = new EventEmitter<boolean>()

  toggleBar(): void{
    this.toggledSidebar.emit(true);
  }
}
