import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent {
  @Input() enableRightbarButton: boolean = false;
  @Output() toggleRight = new EventEmitter<boolean>()

  note: string = "This is a note"

  toggleRightbar(): void{
    this.toggleRight.emit(true);
  }
}
