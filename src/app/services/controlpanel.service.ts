import { Device } from "../models/device.model";

export class ControlPanelService {
    private deviceTypes: string[] = [
        'default','fan', 'light', 'bulb', 'tv', 'ac', 'server'
    ]

    private allDevices: Device[] = [
        new Device('Tube Light','light',false, 'Room 3'),
        new Device('Tube Light','light',false, 'Room 3'),
        new Device('Tube Light','light',false, 'Room 3'),
        new Device('Tube Light','light',false, 'Room 3'),
        new Device('Tube Light','light',false, 'Room 3'),
        new Device('Tube Light','light',false, 'Room 3'),
        new Device('Tube Light','light',false, 'Room 3'),
        new Device('Tube Light','light',true, 'Room 3'),
        new Device('Tube Light 1','light',false, 'Room 1'),
        new Device('Tube Light 1','light',false, 'Room 1'),
        new Device('Tube Light 1','light',false, 'Room 1'),
        new Device('Tube Light 1','light',false, 'Room 1'),
        new Device('Tube Light 1','light',false, 'Room 1'),
        new Device('Tube Light','light',false, 'Room 1'),
        new Device('Tube Light','light',false, 'Room 1'),
        new Device('Tube Light','light',true, 'Room 1'),
        new Device('Tube Light 2','light',false, 'Room 2'),
        new Device('Tube Light 2','light',false, 'Room 2'),
        new Device('Tube Light 2','light',false, 'Room 2'),
        new Device('Tube Light 2','light',false, 'Room 2'),
        new Device('Tube Light 2','light',false, 'Room 2'),
        new Device('Tube Light 2','light',false, 'Room 2'),
        new Device('Tube Light 2','light',false, 'Room 2'),
        new Device('Tube Light','light',true, 'Room 2'),
    ];

    private favoriteDevices: Device[] = [
        new Device('Tube Light fav','light',false, 'Room 2'),
        new Device('Tube Light','light',false, 'Room 2'),
        new Device('Tube Light','light',false, 'Room 4'),
        new Device('Tube Light','light',false, 'Room 2'),
        new Device('Tube Light fav','light',false, 'Room 3'),
        new Device('Tube Light','light',false, 'Room 1'),
        new Device('Tube Light','light',false, 'Room 4'),
        new Device('Tube Light','light',false, 'Room 1'),
    ];

    getCurrentDevices(id: string, name: string) {
        return this.allDevices.filter((obj) => obj.room === name).slice()
    }

    getAllDevices(){
        return this.allDevices.slice();
    }

    getFavDevices(){
        return this.favoriteDevices.slice();
    }

    addDevice(name: string, type: string, roomname: string){
        this.allDevices.push(new Device(name, type, false, roomname));
    }

    editDevice(id: string, name: string, type: string){
        this.allDevices.forEach((obj)=>{
            if(obj['id']===id){
                obj.name = name;
                obj.type = type;
            }
        });
    }

    deleteDevice(id: string){
        this.allDevices = this.allDevices.filter(
            (obj) => obj.id !== id
        );
    }

    getDeviceTypes(){
        return this.deviceTypes;
    }
}