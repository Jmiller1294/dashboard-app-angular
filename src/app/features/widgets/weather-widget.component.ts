import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Weather } from 'src/app/shared/models/weather.model';
import { WidgetsService } from './widgets.service';

export enum WeatherIcons {
  default = "../../../assets/sun.png",
  sunny = "../../../assets/sunnny.png",
  clouds = "../../../assets/cloudy-day.png",
  snow = "../../../assets/snowflake.png",
  thunder = "../../../assets/snowflake.png",
  rain = "../../../assets/rainy.png",
  humidity = "../../../assets/humidity.png",
  pressure = "../../../assets/thermometer.png",
  wind = "../../../assets/wind.png",
  rainSmall = "../../../assets/rainy-small.png"
};


@Component({
  selector: 'weather-widget',
  template: `
    <div class="weather-container">
      <div class="row cen">
        <h3>{{weatherData?.location}}</h3>
      </div>
      <div class="row">
        <div class="column">
          <div class="con-3">
            <img class="weather-icon" [src]="getWeatherImage(weatherData?.weatherType)" />
            <h4>{{weatherData?.weatherType}}</h4>
          </div>
        </div>
        <div class="column">
          <div class="con-2">
            <span class="weather-temp">{{convertTemp(weatherData?.temp)}}&#176;C</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="column center">
          <div class="row marg">
            <div class="column cen">
              <img class="wind-icon"[src]="icons.wind" />
            </div>
            <div class="column sdd">
              Wind &nbsp; &nbsp; &nbsp; {{weatherData?.wind}} km/h
            </div>
          </div>
          <div class="row marg">
            <div class="column cen">
              <img class="wind-icon"[src]="icons.pressure" />
            </div>
            <div class="column sdd">
              Pressure {{weatherData?.pressure}} mbar
            </div>
          </div>
        </div>
        <div class="column center">
        <div class="row marg">
            <div class="column cen">
              <img class="wind-icon"[src]="icons.rainSmall" />
            </div>
            <div class="column sdd">
              Low / High {{convertTemp(weatherData?.tempMin)}} 
              &#176;C / {{convertTemp(weatherData?.tempHigh)}}&#176;C
            </div>
          </div>
          <div class="row marg">
            <div class="column cen">
              <img class="wind-icon"[src]="icons.humidity" />
            </div>
            <div class="column sdd">
              Humidity {{weatherData?.humidity}}%
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {
  d: string = "hello";
  weatherData: any;
  icons = WeatherIcons;

  constructor(private widgetsService:WidgetsService) { }

  ngOnInit(): void {
    this.widgetsService.fetchWeatherData()
      .subscribe(res => 
        this.weatherData = res
      )
  }

  getWeatherImage(weatherType: string) {
    switch(weatherType) {
      case 'Clouds':
        return WeatherIcons.clouds;
      case 'Rainy':
        return WeatherIcons.rain;
      case 'Sunny':
        return WeatherIcons.sunny;
      case 'Snow':
        return WeatherIcons.snow;
      case 'Thunder':
        return WeatherIcons.thunder;
      default:
        return WeatherIcons.default;
    }
  }

  convertTemp(kelvin: number) {
    return Math.round((9/5) * (kelvin - 273) + 32);
  }

  ngAfterViewInit() {
  }
}