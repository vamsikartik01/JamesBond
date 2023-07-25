export class Device {
    public id: string;
    public name: string;
    public type: string;
    public status: boolean;
    public room: string;

    constructor(name: string, type: string, status: boolean, room: string){
        this.id = Date.now().toString();
        this.name = name;
        this.type = type;
        this.status = status;
        this.room = room;
    }
}