import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  roomsList: {'id':string, 'name':string}[] = [{'id':'1','name': 'Room 1'},{'id':'2','name': 'Room 2'},{'id':'3','name': 'Room 3'},{'id':'4','name': 'Room 4'},{'id':'5','name': 'Room 5'},{'id':'6','name': 'Room 6'}]
}
