import { EventEmitter } from "@angular/core";

import { Room } from "../models/room.model";

export class RoomService {
    roomEvent = new EventEmitter<Room[]>();
    private rooms: Room[] = [
        new Room('1','Room 1'),
        new Room('2','Room 2'),
        new Room('3','Room 3'),
        new Room('4','Room 4'),
    ];

    getRooms(){
        return this.rooms.slice();
    }

    getRoom(id: string) {
        return this.rooms.find((room) => room['id'] === id);
    }

    addRoom(name: string){
        this.rooms.push(new Room(Date.now().toString(),name));
        this.roomEvent.emit(this.rooms);
    }

    editRoomName(id: string,name: string){
        this.rooms.forEach((obj) => {
            if (obj.id === id){
                obj.name = name;
            }
        });
    }
}