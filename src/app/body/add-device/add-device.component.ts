import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ControlPanelService } from 'src/app/services/controlpanel.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {
  @ViewChild('devicename') deviceNameObj: ElementRef;
  @ViewChild('devicetype') deviceTypeObj: ElementRef;

  newDeviceName: string;
  newDeviceType: string;
  newRoomName: string;
  newRoomId: string;

  editDevice: boolean = false;
  deviceId: string;
  deviceTypes: string[];

  constructor(private controlPanelService: ControlPanelService,
    private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.editDevice = this.route.snapshot.queryParams['edit'];
    this.deviceId = this.route.snapshot.queryParams['deviceid'];
    this.route.params.subscribe(
      (params: Params) => {
        this.newRoomName = params['roomname'];
        this.newRoomId = params['roomid'];
      }
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.editDevice = params['edit'];
    });
    this.deviceTypes = this.controlPanelService.getDeviceTypes();
  }

  addDevice(){
    this.newDeviceName = this.deviceNameObj.nativeElement.value;
    this.newDeviceType = this.deviceTypeObj.nativeElement.value;
    if (this.newDeviceName ==="" || this.newDeviceType === ""){
      return null
    }
    this.controlPanelService.addDevice(this.newDeviceName, this.newDeviceType, this.newRoomName);
    alert("Device : "+this.newDeviceName+" is created!");
    this.router.navigate(['/room',this.newRoomId]);
  }

  editDeviceInfo(){
    this.newDeviceName = this.deviceNameObj.nativeElement.value;
    this.newDeviceType = this.deviceTypeObj.nativeElement.value;
    if (this.newDeviceName ==="" || this.newDeviceType === ""){
      return null
    }
    this.controlPanelService.editDevice(this.deviceId, this.newDeviceName, this.newDeviceType);
    alert("Device : "+this.newDeviceName+" is created!");
    this.router.navigate(['/room',this.newRoomId]);
  }

  deleteDeviceInfo(){
    this.controlPanelService.deleteDevice(this.deviceId);
    alert("Successfully deleted the device!");
    this.router.navigate(['/room',this.newRoomId]);
  }

}
