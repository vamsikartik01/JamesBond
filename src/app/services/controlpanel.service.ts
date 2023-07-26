import { Device } from "../models/device.model";

export class ControlPanelService {
    private deviceTypes: string[] = [
        'default','fan', 'light', 'tv', 'ac', 'server'
    ]

    private allDevices: Device[] = [
        new Device('Tube Light','light',false, 'Max Room'),
        new Device('Bed Fan','fan',false, 'Max Room'),
        new Device('TV','tv',false, 'Max Room'),
        new Device('Study lamp','light',false, 'Max Room'),
        new Device('AC','ac',false, 'Max Room'),
        new Device('Lewis Fan(Stolen)','fan',false, 'Max Room'),
        new Device('Ceiling light 1','light',false, 'Max Room'),
        new Device('Ceiling light 2','light',true, 'Max Room'),
        new Device('Fan 2','fan',false, 'Hall', true),
        new Device('Fan 1','fan',false, 'Hall', true),
        new Device('Tube Light 1','light',false, 'Hall',true),
        new Device('Tube Light 2','light',false, 'Hall',true),
        new Device('F1 Tv','tv',false, 'Hall',true),
        new Device('AC','ac',false, 'Hall'),
        new Device('Ceiling Light 1','light',false, 'Hall'),
        new Device('Ceiling Light 2','light',true, 'Hall'),
        new Device('Light 44','light',false, 'Lewis Room', true),
        new Device('Fan 44','fan',false, 'Lewis Room'),
        new Device('Light 7','light',false, 'Lewis Room'),
        new Device('Fan 7','light',false, 'Lewis Room'),
        new Device('AC 44','ac',false, 'Lewis Room', true),
        new Device('TV 44','tv',false, 'Lewis Room'),
        new Device('Ceiling Light 44','light',false, 'Lewis Room'),
        new Device('My Twitch Server','server',true, 'Lando Room', true),
        new Device('Landos TV','tv',true, 'Lando Room'),
        new Device('Landos AC','ac',true, 'Lando Room'),
    ];

    getCurrentDevices(id: string, name: string) {
        return this.allDevices.filter((obj) => obj.room === name).slice()
    }

    getAllDevices(){
        return this.allDevices.slice();
    }

    getFavDevices(){
        return this.allDevices.filter((obj) => obj.isFavorite === true).slice()
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