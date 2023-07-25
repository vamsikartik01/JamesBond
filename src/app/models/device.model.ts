export class Device {
    public id: string;
    public name: string;
    public type: string;
    public status: boolean;

    constructor(name: string, type: string, status: boolean){
        this.id = Date.now().toString();
        this.name = name;
        this.type = type;
        this.status = status;
    }
}