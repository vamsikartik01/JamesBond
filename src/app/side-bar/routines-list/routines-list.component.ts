import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.component.html',
  styleUrls: ['./routines-list.component.css']
})
export class RoutinesListComponent {
  @Input() routineitems: {name: string}[] = [];
}
