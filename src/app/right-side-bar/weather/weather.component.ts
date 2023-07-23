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
    {'icon':'05.png','parameter':'Visibility','value':'9 km'},
    {'icon':'04.png','parameter':'Air Pressure','value':'999 hPa'},
    {'icon':'06.png','parameter':'Air Quality','value':'37'}
  ]
}

//https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&units=metric&appid=557a6bcec20fdacb549cbed37d7c25c0
