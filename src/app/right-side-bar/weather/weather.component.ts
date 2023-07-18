import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  City: string = 'Srikakulam';
  State: string = 'Andhra Pradesh';
  Country: string = 'India';
  temp: string = '25 *C';
  description: string = 'light rain';
  minTemp: string = '22 *C';
  maxTemp: string = '32 *C';

  infoItems1: {'icon':string,'parameter':string,'value':string}[] = [
    {'icon':'01.png','parameter':'Feels Like','value':'30*C'},
    {'icon':'02.png','parameter':'Wind','value':'11 mi/h'},
    {'icon':'03.png','parameter':'Humidity','value':'92 %'},
  ];
  infoItems2: {'icon':string,'parameter':string,'value':string}[] = [
    {'icon':'04.png','parameter':'Visibility','value':'9 km'},
    {'icon':'05.png','parameter':'Air Pressure','value':'999 hPa'},
    {'icon':'06.png','parameter':'Air Quality','value':'37'}
  ]
}
