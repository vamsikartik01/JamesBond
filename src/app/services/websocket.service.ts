import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    private socket: WebSocket;

    constructor(){
        this.socket = new WebSocket('ws://localhost:2000/wsjames');
    }

    getSocket(): WebSocket {
        return this.socket;
    }

}