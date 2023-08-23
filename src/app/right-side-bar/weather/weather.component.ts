import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData = new Weather({});
  State: string = 'Andhra Pradesh';
  Country: string = 'India';
  temp: number = 0;
  description: string = 'light rain';
  minTemp: number = 0;
  maxTemp: number = 0;

  infoItems1: {'icon':string,'parameter':string,'value':number}[] = [
    {'icon':'01.png','parameter':'Feels Like','value':0},
    {'icon':'02.png','parameter':'Wind','value':11},
    {'icon':'03.png','parameter':'Humidity','value':92},
  ];
  infoItems2: {'icon':string,'parameter':string,'value':number}[] = [
    {'icon':'05.png','parameter':'Visibility','value':9 },
    {'icon':'04.png','parameter':'Air Pressure','value':999},
    {'icon':'06.png','parameter':'Air Quality','value':37}
  ]

  constructor(private weatherService: WeatherService){}

  ngOnInit(){
    this.weatherService.getWeather();
    this.weatherService.weatherEvent.subscribe(
      (weather: Weather) => {
        this.weatherData = weather;
        console.log("comp weather", this.weatherData);
        this.temp = Math.round(this.weatherData.temp);
        this.minTemp = Math.round(this.weatherData.temp_min);
        this.maxTemp = Math.round(this.weatherData.temp_max);
        this.infoItems1[0].value = this.weatherData.feels_like;
        this.infoItems1[1].value = this.weatherData.speed;
        this.infoItems1[2].value = this.weatherData.humidity;
        this.infoItems2[0].value = this.weatherData.visibility/1000;
        this.infoItems2[1].value = this.weatherData.pressure;
        this.infoItems2[2].value = this.weatherData.air_quality;
      }
    );    
  }

}