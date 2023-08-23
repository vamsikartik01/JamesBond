export class Device {
    public id: string;
    public name: string;
    public type: string;
    public mode: string;
    public status: string;
    public roomId: string;
    public hubId: string;
    public accountSid: string;
    public isFavorite: boolean;
    public value: boolean;
    public hubPort: string;

    constructor(id: string, name: string, type: string, mode: string, roomId: string, hubId: string, accountSid: string, status: string = 'offline',favorite: boolean = false, value: boolean = false, hubPort: string){
        this.id = id;
        this.name = name;
        this.mode = mode;
        this.type = type;
        this.status = status;
        this.roomId = roomId;
        this.hubId = hubId;
        this.accountSid = accountSid;
        this.isFavorite = favorite;
        this.value = value;
        this.hubPort = hubPort;
    }

    setFavorite(){
        this.isFavorite = true;
    }

    removeFavorite(){
        this.isFavorite = false;
    }
}