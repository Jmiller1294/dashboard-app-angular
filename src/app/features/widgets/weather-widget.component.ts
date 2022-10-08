import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Weather } from 'src/app/shared/models/weather.model';
import { WidgetsService } from './widgets.service';

export enum WeatherIcons {
  default = "../../../assets/sun.png",
  sunny = "../../../assets/sunnny.png",
  clouds = "../../../assets/clouds.png",
  rain ="../../../assets/rainy.png",
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
        <div class="column">
          <div class="con">
            <div class="row">
              dsfdfs
              ssdfsf
            </div>
            <div class="row">
              sdfdffff
              ffffffff
            </div>
          </div>
        </div>
        <div class="column">
          <div class="con">
            <div class="row">
              sdfdffff
              ffffffff
            </div>
            <div class="row">
              sdfdffff
              ffffffff
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