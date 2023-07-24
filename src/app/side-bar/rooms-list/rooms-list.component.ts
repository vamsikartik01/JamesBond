import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  roomsList: {'name':string}[] = [{'name': 'Room 1'},{'name': 'Room 2'},{'name': 'Room 3'},{'name': 'Room 4'},{'name': 'Room 5'},{'name': 'Room 6'}]
}
