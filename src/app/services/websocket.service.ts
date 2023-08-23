import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    private url: string = "jamesbond.3dns.me"
    private socket: WebSocket;

    constructor(){
        this.socket = new WebSocket("ws://"+this.url+":2000/wsjames");
    }

    getSocket(): WebSocket {
        return this.socket;
    }

}