import { Component } from '@angular/core';
import { ControlPanelService } from 'src/app/services/controlpanel.service';
import { ActivatedRoute, Params } from '@angular/router'
import { Device } from 'src/app/models/device.model';
import { RoomService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  devices: Device[];
  deviceId: string;
  roomName: string;

  constructor(private controlPanelService: ControlPanelService,
    private roomService: RoomService,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.deviceId = this.route.snapshot.params['id'];
    this.roomName = this.route.snapshot.queryParams['roomname'];
    this.devices = this.controlPanelService.getCurrentDevices(this.deviceId)
    console.log("devices", this.devices)
    this.route.params.subscribe(
      (params: Params) => {
        this.deviceId = params['id']
        this.devices = this.controlPanelService.getCurrentDevices(this.deviceId)
        console.log("devices", this.devices)
      }
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.roomName = params['roomname'];
      }
    );
    this.controlPanelService.DeviceEvent.subscribe(
      () => {
        this.devices = this.controlPanelService.getCurrentDevices(this.deviceId);
      }
    );
  }
}
