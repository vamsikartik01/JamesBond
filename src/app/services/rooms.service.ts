import { Room } from "../models/room.model";

export class RoomService {
    private rooms: Room[] = [
        new Room('1','Room 1'),
        new Room('2','Room 2'),
        new Room('3','Room 3'),
        new Room('4','Room 4'),
        new Room('5','Room 5'),
        new Room('6','Room 6'),
        new Room('7','Room 7'),
        new Room('8','Room 8'),
    ];

    getRooms(){
        return this.rooms.slice();
    }

    getRoom(id: string) {
        return this.rooms.find((room) => room['id'] === id);
    }

    addRoom(name: string){
        this.rooms.push(new Room(Date.now().toString(),name));
    }
}