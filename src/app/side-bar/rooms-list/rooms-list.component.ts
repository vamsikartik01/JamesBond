import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hub } from 'src/app/models/hub.model';
import { Room } from 'src/app/models/room.model';
import { HubService } from 'src/app/services/hub.service';
import { RoomService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  roomsList: Room[];
  hubsList: Hub[];

  constructor(private roomService: RoomService, private hubService: HubService, private http: HttpClient){}

  ngOnInit(){
    this.roomService.getRooms()  
    this.hubService.GetHubs()
    this.roomService.roomEvent.subscribe(
      (rooms: Room[]) => {
        this.roomsList = rooms;
      }
    );
    this.hubService.HubsEvent.subscribe(
      (hubs: Hub[]) => {
        this.hubsList = hubs;
      }
    );
  }
}
