import { EventEmitter, Injectable } from "@angular/core";

import { Room } from "../models/room.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HubService } from "./hub.service";

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    roomEvent = new EventEmitter<Room[]>();
    private rooms: Room[];

    constructor(private http: HttpClient, private hubService:HubService){}

    getRooms() {
        this.http.get("http://jamesbond.3dns.me:2000/getrooms/1").subscribe(responseData => {
            var rooms = Object.values(responseData);
            this.rooms = [];
            rooms.forEach(room => {
                var roomObj = new Room(room['id'], room['name'], room['accountSid']) 
                this.rooms.push(roomObj)
            });
            console.log("rooms",this.rooms)
            this.roomEvent.emit(this.rooms);
            this.hubService.GetHubs();
        })
    }

    getRoom(id: string) {
        return (this.rooms ?? []).find(room => room.id == id);
        
    }

    addRoom(name: string){
        var url = "http://jamesbond.3dns.me:2000/addroom/1?name="+name
        console.log(url)
        this.http.post(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.getRooms()
            }
        )
    }

    editRoomName(id: string,name: string){
        var url = "http://jamesbond.3dns.me:2000/editroom/1?id="+id+"&name="+name
        console.log(url)
        this.http.put(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.getRooms()
            }
        )
    }

    deleteRoom(id: string){
        var url = "http://jamesbond.3dns.me:2000/deleteroom/1?id="+id
        console.log("delete request ", url)
        this.http.delete(url).subscribe(
            responseData => {
                console.log(responseData)
                this.getRooms()
            }
        )
        this.roomEvent.emit(this.rooms);
    }
}