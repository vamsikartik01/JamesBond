export class Device {
    public id: string;
    public name: string;
    public type: string;
    public status: boolean;
    public room: string;
    public isFavorite: boolean;

    constructor(name: string, type: string, status: boolean, room: string,favorite: boolean = false){
        this.id = Date.now().toString();
        this.name = name;
        this.type = type;
        this.status = status;
        this.room = room;
        this.isFavorite = favorite;
    }

    setFavorite(){
        this.isFavorite = true;
    }

    removeFavorite(){
        this.isFavorite = false;
    }
}