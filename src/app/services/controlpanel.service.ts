import { HttpClient } from "@angular/common/http";
import { Device } from "../models/device.model";
import { Injectable, EventEmitter } from "@angular/core";
import { WebsocketService } from "./websocket.service";

@Injectable({
    providedIn: 'root'
})
export class ControlPanelService {
    DeviceEvent = new EventEmitter<Device[]>()
    private deviceTypes: string[] = [
        'default','fan', 'light', 'tv', 'ac', 'server'
    ]
    private hubPorts: string[] = [
        '1', '2'
    ]
    private devices: Device[] = [];

    private allDevices: Device[] = [];

    constructor(private http: HttpClient){this.getAllDevices()}

    getCurrentDevices(id: string) {
        return this.devices.filter((obj) => obj.roomId == id).slice()
    }

    getAllDevices(){
        this.http.get("http://jamesbond.3dns.me:2000/getdevices/1").subscribe(responseData => {
            console.log(responseData)
            var devices = Object.values(responseData);
            this.devices = [];
            devices.forEach(device => {
                var roomObj = new Device(device['id'], device['Name'], device['type'], device['mode'], device['room_id'], device['hub_id'], device['accountSid'], device['status'], device['is_favorite'], device['value'], device['HubPort']) 
                this.devices.push(roomObj)
            });
            console.log("devices",this.devices)
            this.DeviceEvent.emit(this.devices)
        })
    }

    getFavDevices(){
        return this.devices.filter((obj) => obj.isFavorite == true).slice()
    }

    addDevice(name: string, type: string, roomId: string, hubId: string, hubPort: string){
        const mode = "output"
        var url = "http://jamesbond.3dns.me:2000/adddevice/1?name="+name+"&roomId="+roomId+"&hubId="+hubId+"&mode="+mode+"&type="+type+"&hubPort="+hubPort
        console.log(url)
        this.http.post(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.getAllDevices()
            }
        )
    }

    editDevice(id: string, name: string, type: string, hubId: string, hubPort: string){
        var url = "http://jamesbond.3dns.me:2000/editdevice/1?id="+id+"&name="+name+"&type="+type+"&hubPort="+hubPort+"&hubId="+hubId
        console.log(url)
        this.http.put(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.getAllDevices()
            }
        )
    }

    deleteDevice(id: string){
        var url = "http://jamesbond.3dns.me:2000/deletedevice/1?id="+id
        console.log("delete request ", url)
        this.http.delete(url).subscribe(
            responseData => {
                console.log(responseData)
                this.getAllDevices()
            }
        )
    }

    getDeviceTypes(){
        return this.deviceTypes;
    }

    getHubPorts(){
        return this.hubPorts;
    }

    setFavorite(id: string, value: boolean){
        var url = "http://jamesbond.3dns.me:2000/setfavorite/1?id="+id+"&value="+value
        console.log(url)
        this.http.put(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.getAllDevices()
            }
        )
    }

    setValue(id: string, value: string, hubPort: string, hubRefID: string){
        var url = "http://jamesbond.3dns.me:2000/setvalue/1?id="+id+"&value="+value+"&hubPort="+hubPort+"&hubRefId="+hubRefID
        console.log(url)
        this.http.put(url, {}).subscribe(
            responseData => {
                console.log(responseData)
                this.getAllDevices()
            }
        )
    }
}