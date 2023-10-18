import { Injectable, EventEmitter } from "@angular/core";
import { Hub } from "../models/hub.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HubService {
    private url: string = "https://jamesbond.3dns.me/api"
    //private url: string = "http://localhost:2000"
    HubsEvent = new EventEmitter<Hub[]>()
    private hubs: Hub[] = []

    constructor(private http: HttpClient){}

    GetHubs(){
        this.http.get(this.url+"/gethubs/1").subscribe(responseData => {
            var hubs = Object.values(responseData);
            this.hubs = [];
            hubs.forEach(hub => {
                var roomObj = new Hub(hub['id'], hub['name'], hub['ref_id'], hub['accountSid']) 
                this.hubs.push(roomObj)
            });
            console.log("hubs",this.hubs)
            this.HubsEvent.emit(this.hubs);
        })
    }

    GetAllHubs(): Hub[] {
        return this.hubs
    }

    GetHub(hubId: string): Hub {
        return this.hubs.find(hub => hub.id == hubId)
    }

    GetRefId(hubId: string): string{
        return this.hubs.find(hub => hub.id == hubId).refId
    }

    AddHub(name: string, refId: string){
        var url = this.url+"/addhub/1?name="+name+"&refid="+refId
        console.log(url)
        this.http.post(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.GetHubs()
            }
        )
    }

    EditHub(id: string, name:string, refId: string) {
        var url = this.url+"/edithub/1?id="+id+"&name="+name+"&refid="+refId
        console.log(url)
        this.http.put(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.GetHubs()
            }
        )
    }

    DeleteHub(id: string){
        var url = this.url+"/deletehub/1?id="+id
        console.log("delete request ", url)
        this.http.delete(url).subscribe(
            responseData => {
                console.log(responseData)
                this.GetHubs()
            }
        )
    }
}