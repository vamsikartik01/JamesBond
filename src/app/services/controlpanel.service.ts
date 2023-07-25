import { Device } from "../models/device.model";

export class ControlPanelService {
    private currentDevices: Device[] = [
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',true),
    ];

    private roomOne: Device[] = [
        new Device('Tube Light 1','light',false),
        new Device('Tube Light 1','light',false),
        new Device('Tube Light 1','light',false),
        new Device('Tube Light 1','light',false),
        new Device('Tube Light 1','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',true),
    ];

    private roomTwo: Device[] = [
        new Device('Tube Light 2','light',false),
        new Device('Tube Light 2','light',false),
        new Device('Tube Light 2','light',false),
        new Device('Tube Light 2','light',false),
        new Device('Tube Light 2','light',false),
        new Device('Tube Light 2','light',false),
        new Device('Tube Light 2','light',false),
        new Device('Tube Light','light',true),
    ];

    private favoriteDevices: Device[] = [
        new Device('Tube Light fav','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light fav','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
        new Device('Tube Light','light',false),
    ];

    getCurrentDevices(id: string) {
        if (id==='1'){
            return this.roomOne.slice()
        } else if(id==='2'){
            return this.roomTwo.slice()
        }else{
            return this.currentDevices.slice()
        }   
    }

    getFavDevices(){
        return this.favoriteDevices.slice();
    }
}