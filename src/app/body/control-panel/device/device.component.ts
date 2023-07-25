import { Component, Input } from '@angular/core';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent {
  @Input() deviceItem: Device;
  @Input() roomId: string;

  toggleStatus(){
    this.deviceItem.status = !this.deviceItem.status;
  }
}
