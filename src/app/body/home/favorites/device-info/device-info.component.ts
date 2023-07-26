import { Component, Input } from '@angular/core';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent {
  @Input() deviceItem: Device;

  toggleStatus(){
    this.deviceItem.status = !this.deviceItem.status;
  }

}
