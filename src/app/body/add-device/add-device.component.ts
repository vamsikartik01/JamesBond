import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hub } from 'src/app/models/hub.model';
import { ControlPanelService } from 'src/app/services/controlpanel.service';
import { HubService } from 'src/app/services/hub.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {
  @ViewChild('devicename') deviceNameObj: ElementRef;
  @ViewChild('devicetype') deviceTypeObj: ElementRef;
  @ViewChild('hubid') hubIdObj: ElementRef;
  @ViewChild('hubport') hubPortObj: ElementRef;

  newDeviceName: string;
  newDeviceType: string;
  newRoomName: string;
  newRoomId: string;
  newHubId: string;

  editDevice: boolean = false;
  deviceId: string;
  deviceName: string;
  deviceType: string;
  hubId: string;
  hubPort: string;

  deviceTypes: string[];
  hubPorts: string[];
  hubs: Hub[];

  constructor(private controlPanelService: ControlPanelService,
    private route: ActivatedRoute, private router: Router, private hubService: HubService){}

  ngOnInit(){
    this.editDevice = this.route.snapshot.queryParams['edit'];
    this.deviceId = this.route.snapshot.queryParams['deviceid'];
    this.deviceName = this.route.snapshot.queryParams['devicename'];
    this.deviceType = this.route.snapshot.queryParams['devicetype'];
    this.hubPort = this.route.snapshot.queryParamMap['hubport'];
    this.hubId = this.route.snapshot.queryParams['hubid']
    if (!this.editDevice) {this.deviceType = 'default'}
    this.route.params.subscribe(
      (params: Params) => {
        this.newRoomName = params['roomname'];
        this.newRoomId = params['roomid'];
      }
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.editDevice = params['edit'];
        this.hubPort = params['hubport'];
    });
    this.deviceTypes = this.controlPanelService.getDeviceTypes();
    this.hubPorts = this.controlPanelService.getHubPorts();
    this.hubs = this.hubService.GetAllHubs();
  }

  addDevice(){
    this.newDeviceName = this.deviceNameObj.nativeElement.value;
    this.newDeviceType = this.deviceTypeObj.nativeElement.value;
    this.newHubId = this.hubIdObj.nativeElement.value;
    this.hubPort = this.hubPortObj.nativeElement.value;
    console.log("hubid",this.newHubId);
    if (this.newDeviceName ==="" || this.newDeviceType === "" || this.newHubId === ""){
      return null
    }
    this.controlPanelService.addDevice(this.newDeviceName, this.newDeviceType, this.newRoomId, this.newHubId, this.hubPort);
    alert("Device : "+this.newDeviceName+" is created!");
    this.router.navigate(['/room',this.newRoomId]);
  }

  editDeviceInfo(){
    this.newDeviceName = this.deviceNameObj.nativeElement.value;
    this.newDeviceType = this.deviceTypeObj.nativeElement.value;
    this.newHubId = this.hubIdObj.nativeElement.value;
    this.hubPort = this.hubPortObj.nativeElement.value;
    if (this.newDeviceName ==="" || this.newDeviceType === ""){
      return null
    }
    this.controlPanelService.editDevice(this.deviceId, this.newDeviceName, this.newDeviceType, this.newHubId, this.hubPort);
    alert("Device : "+this.newDeviceName+" is created!");
    this.router.navigate(['/room',this.newRoomId]);
  }

  deleteDeviceInfo(){
    this.controlPanelService.deleteDevice(this.deviceId);
    alert("Successfully deleted the device!");
    this.router.navigate(['/room',this.newRoomId]);
  }

}
