import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  roomsList: Room[];

  constructor(private roomService: RoomService){}

  ngOnInit(){
    this.roomsList = this.roomService.getRooms()  
  }
}
