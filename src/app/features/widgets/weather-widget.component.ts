import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Weather } from 'src/app/shared/models/weather.model';
import { WidgetsService } from './widgets.service';

export enum WeatherIcons {
  default = "../../../assets/sun.png",
  sunny = "../../../assets/sunnny.png",
  clouds = "../../../assets/clouds.png",
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
      <div class="row">
        <div class="column">
          <div class="con-3">
            <img class="weather-icon" [src]="getWeatherImage('clouds')" />
            {{weatherData?.weatherType}}
          </div>
        </div>
        <div class="column">
          <div class="con-2">
            <span class="weather-temp">{{convertTemp(289)}}&#176;C</span>
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
              Wind {{weatherData?.wind}}km/h
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
              Pressure {{weatherData?.pressure}} %
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
  weatherData: Weather | null;
  icons = WeatherIcons;

  constructor(private widgetsService:WidgetsService) { }

  ngOnInit(): void {
    this.widgetsService.FetchWeatherData()
      .subscribe(res => 
        this.weatherData = res
      )
  }

  getWeatherImage(weatherType: string) {
    switch(weatherType) {
      case 'Clouds':
        return WeatherIcons.clouds;
        break;
      case 'Rainy':
        return WeatherIcons.rain;
        break;
      case 'Sunny':
        return WeatherIcons.sunny;
        break;
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