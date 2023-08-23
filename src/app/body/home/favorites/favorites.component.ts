import { Component } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { ControlPanelService } from 'src/app/services/controlpanel.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  devicesFav: Device[];
  constructor(private controlpanelService: ControlPanelService){}

  ngOnInit(){
    this.devicesFav = this.controlpanelService.getFavDevices();

    this.controlpanelService.DeviceEvent.subscribe(
      () => {
        this.devicesFav = this.controlpanelService.getFavDevices();
      }
    );
  }
}
