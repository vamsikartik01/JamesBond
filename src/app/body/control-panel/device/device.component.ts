import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent {
  @Input() deviceItem: {'name': string,'type':string,'status':boolean};

  toggleStatus(){
    this.deviceItem.status = !this.deviceItem.status;
  }
}
