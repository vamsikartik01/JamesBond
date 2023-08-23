import { EventEmitter, Injectable } from "@angular/core";
import { Weather } from "../models/weather.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private weatherData: Weather
    weatherEvent = new EventEmitter<Weather>()

    constructor(private http: HttpClient){this.getWeather()}

    getWeather(){
        this.http.get("http://localhost:2000/weather/1").subscribe(responseData => {
            this.weatherData = new Weather(responseData)
            console.log("weather1",this.weatherData)
            this.weatherEvent.emit(this.weatherData)
        })
    }
}