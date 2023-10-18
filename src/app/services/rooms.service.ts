import { EventEmitter, Injectable } from "@angular/core";

import { Room } from "../models/room.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HubService } from "./hub.service";

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    //private url: string = "http://localhost:2000"
    private url: string = "https://jamesbond.3dns.me/api"
    roomEvent = new EventEmitter<Room[]>();
    private rooms: Room[];

    constructor(private http: HttpClient, private hubService:HubService){}

    getRooms() {
        this.http.get(this.url+"/getrooms/1").subscribe(responseData => {
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
        var url = this.url+"/addroom/1?name="+name
        console.log(url)
        this.http.post(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.getRooms()
            }
        )
    }

    editRoomName(id: string,name: string){
        var url = this.url+"v/editroom/1?id="+id+"&name="+name
        console.log(url)
        this.http.put(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.getRooms()
            }
        )
    }

    deleteRoom(id: string){
        var url = this.url+"/deleteroom/1?id="+id
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