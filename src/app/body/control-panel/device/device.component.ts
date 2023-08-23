import { Component, Input } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { ControlPanelService } from 'src/app/services/controlpanel.service';
import { HubService } from 'src/app/services/hub.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent {
  @Input() deviceItem: Device;
  @Input() roomId: string;

  constructor(private controlPanelService: ControlPanelService, private hubService: HubService){}

  toggleStatusOn(){

    this.controlPanelService.setValue(this.deviceItem.id, "1", this.deviceItem.hubPort, this.hubService.GetRefId(this.deviceItem.hubId))
  }

  toggleStatusOff(){
    this.controlPanelService.setValue(this.deviceItem.id, "0", this.deviceItem.hubPort, this.hubService.GetRefId(this.deviceItem.hubId))
  }

  starDevice(){
    this.controlPanelService.setFavorite(this.deviceItem.id, true)
  }

  unStarDevice(){
    this.controlPanelService.setFavorite(this.deviceItem.id, false)
  }
}
