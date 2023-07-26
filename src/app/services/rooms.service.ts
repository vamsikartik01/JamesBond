import { EventEmitter } from "@angular/core";

import { Room } from "../models/room.model";

export class RoomService {
    roomEvent = new EventEmitter<Room[]>();
    private rooms: Room[] = [
        new Room('1','Hall'),
        new Room('2','Lewis Room'),
        new Room('3','Max Room'),
        new Room('4','Lando Room'),
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

    deleteRoom(id: string){
        this.rooms = this.rooms.filter(
            (obj) => obj.id !== id
        )
        this.roomEvent.emit(this.rooms);
    }
}