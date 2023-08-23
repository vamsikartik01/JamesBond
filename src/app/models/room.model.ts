export class Room{
    public id: string;
    public name: string;
    public accountSid: string;

    constructor(id: string, name: string, accountSid: string){
        this.id = id;
        this.name = name;
        this.accountSid = accountSid;
    }
}