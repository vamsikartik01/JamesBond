export class Weather {
    public name: string;
    public main: string;
    public description: string;
    public icon: string;
    public temp: number;
    public temp_min: number;
    public temp_max: number;
    public feels_like: number;
    public speed: number;
    public humidity: number;
    public visibility: number;
    public pressure: number;
    public air_quality: number;

    constructor(data: any){
        this.name = data.name;
        this.main = data.main;
        this.description = data.description;
        this.icon = data.icon;
        this.temp = data.temp;
        this.temp_min = data.temp_min;
        this.temp_max = data.temp_max;
        this.feels_like = data.feels_like;
        this.speed = data.speed;
        this.humidity = data.humidity;
        this.visibility = data.visibility;
        this.pressure = data.pressure;
        this.air_quality = data.air_quality;
    }

}