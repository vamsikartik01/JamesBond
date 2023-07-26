import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RoomService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {
  @ViewChild('roomname') roomnameObj: ElementRef;
  newRoomName: string;
  editRoom: boolean = false;
  roomId: string;

  constructor(private roomService:RoomService, 
    private router: Router, 
    private route: ActivatedRoute){}

  ngOnInit(){
    this.editRoom = this.route.snapshot.queryParams['edit'];
    this.roomId = this.route.snapshot.queryParams['roomid'];
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.editRoom = params['edit'];
      }
    );
  }

  addRomm(){
    this.newRoomName = this.roomnameObj.nativeElement.value;
    if (this.newRoomName == "" ){
      return null
    }
    this.roomService.addRoom(this.newRoomName);
    alert("Room : "+this.newRoomName+" is created!");
    this.router.navigate(['']);
  }

  editRoomName(){
    this.newRoomName = this.roomnameObj.nativeElement.value;
    if (this.newRoomName == "" ){
      return null
    }
    this.roomService.editRoomName(this.roomId,this.newRoomName);
    alert("Successfully Edited Room name to "+this.newRoomName);
    this.router.navigate(['/room',this.roomId]);
  }

  deleteRoom(){
    this.roomService.deleteRoom(this.roomId);
    alert("Successfully deleted the Room!");
    this.router.navigate(['']);
  }
}
