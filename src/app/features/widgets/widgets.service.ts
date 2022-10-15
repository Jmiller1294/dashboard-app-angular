import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class WidgetsService {
  
  constructor(private http: HttpClient) {}

  FetchWeatherData() {
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?lat=40.776676&lon=-73.971321&appid=' 
      + '3a3d701928322f6c8b5ad5d274165ef3'
    )
    .pipe(
      map(val => {
        return Object.assign({}, {
          location: val.name,
          temp: val.main.temp,
          weatherType: val.weather[0]['main'],
          humidity: val.main.humidity,
          wind: val.wind.speed,
          pressure: val.main.pressure
        })
      })
    )
  }
}
