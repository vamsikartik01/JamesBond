import { Component, Input } from '@angular/core';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-rooms-list-item',
  templateUrl: './rooms-list-item.component.html',
  styleUrls: ['./rooms-list-item.component.css']
})
export class RoomsListItemComponent {
  @Input() roomItem: Room;
}
