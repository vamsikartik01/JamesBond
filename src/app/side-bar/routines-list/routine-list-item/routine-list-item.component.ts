import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-routine-list-item',
  templateUrl: './routine-list-item.component.html',
  styleUrls: ['./routine-list-item.component.css']
})
export class RoutineListItemComponent {
  @Input() routineListItem: {'name': string} = {'name': ''};

  startRoutine(name: string): void {
    alert(name+" started")
  }
}
