import { Component } from '@angular/core';
import { ControlPanelService } from 'src/app/services/controlpanel.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  devices: {'name': string,'type':string,'status':boolean}[];
  deviceId: string;

  constructor(private controlPanelService: ControlPanelService,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.deviceId = this.route.snapshot.params['id'];
    this.devices = this.controlPanelService.getCurrentDevices(this.deviceId)
    this.route.params.subscribe(
      (params: Params) => {
        this.deviceId = params['id']
        this.devices = this.controlPanelService.getCurrentDevices(this.deviceId)
      }
    );
  }
}
