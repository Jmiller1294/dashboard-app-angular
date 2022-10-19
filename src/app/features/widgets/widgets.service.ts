import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Weather } from "src/app/shared/models/weather.model";
import { catchError, forkJoin, map, Observable, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export default class WidgetsService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.776676&lon=-73.971321&appid=';
  stockUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo';
  weatherApiKey = '3a3d701928322f6c8b5ad5d274165ef3';
  stockApiKey = 'ARY3R9NDMNDTS247';
  stockNames:Array<string> = ['IBM','TSLA', 'MSFT', 'GME','NVDA'];
  stockData:Array<Observable<any>> = [];
  
  constructor(private http: HttpClient) {}

  fetchWeatherData() {
    return this.http.get<any>(this.weatherUrl
      + this.weatherApiKey
    )
    .pipe(
      map(val => {
        return Object.assign({}, {
          location: val.name,
          temp: val.main.temp,
          tempHigh: val.main.temp_max,
          tempMin: val.main.temp_min,
          weatherType: val.weather[0]['main'],
          humidity: val.main.humidity,
          wind: val.wind.speed,
          pressure: val.main.pressure
        })
      })
    )
  }

  fetchStockData() {
    this.stockNames.forEach(name => {
      this.stockData.push(
        this.http.get<any>(
          'https://www.alphavantage.co/query?' +
          `function=GLOBAL_QUOTE&symbol=${name}&apikey=demo` +
          this.stockApiKey
        )
        .pipe(
          catchError(this.errorHandler)
        )
      )
    })
    return forkJoin(this.stockData)
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message)|| new Error("Server Error"));
  }
}
