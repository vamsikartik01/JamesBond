import { Component, Input } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { ControlPanelService } from 'src/app/services/controlpanel.service';
import { HubService } from 'src/app/services/hub.service';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent {
  @Input() deviceItem: Device;

  constructor(private controlPanelService: ControlPanelService, private hubService: HubService){}

  toggleStatus(){
    this.deviceItem.value = !this.deviceItem.value;
  }

  toggleStatusOn(){
    this.controlPanelService.setValue(this.deviceItem.id,  "1", this.deviceItem.hubPort, this.hubService.GetRefId(this.deviceItem.hubId))
  }

  toggleStatusOff(){
    this.controlPanelService.setValue(this.deviceItem.id,  "0", this.deviceItem.hubPort, this.hubService.GetRefId(this.deviceItem.hubId))
  }

}
