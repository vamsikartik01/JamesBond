import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent {
  @Input() itemData: {'icon':string,'parameter':string, 'value':string} = {'icon':'','parameter':'','value':'0'}
}
