export class Hub {
    public id: string
    public name: string
    public refId: string
    public accountSid: string

    constructor(id: string, name: string, refId: string, accountSid: string){
        this.id = id;
        this.name = name;
        this.refId = refId;
        this.accountSid = accountSid;
    }
}