import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Weather } from "src/app/shared/models/weather.model";
import { catchError, combineLatest, delay, forkJoin, map, Observable, retry, shareReplay, take, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export default class WidgetsService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.776676&lon=-73.971321&appid=';
  stockUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo';
  weatherApiKey = '3a3d701928322f6c8b5ad5d274165ef3';
  stockApiKey = 'ARY3R9NDMNDTS247';
  stockNames:Array<string> = ['IBM','TSLA', 'MSFT', 'GME','NVDA'];
  stockData:Array<Observable<any>> = [];
  weatherData:any = {};
  techNewsData:any = {}
  weatherLoaded: boolean = false;
  stocksLoaded: boolean = false;
  techNewsLoaded: boolean = false;
  
  constructor(private http: HttpClient) {}

  fetchWeatherData() {
    if(!this.weatherLoaded) {
      this.weatherData = this.http.get<any>(this.weatherUrl
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
        }),
        shareReplay(1)
      )
      this.weatherLoaded = true;
    }
    return this.weatherData;
  }

  fetchStockData() {
    if(!this.stocksLoaded) {
      this.stockNames.forEach(name => {  
        this.stockData.push(
          this.http.get<{}>(
            'https://www.alphavantage.co/query?' +
            `function=GLOBAL_QUOTE&symbol=${name}&apikey=demo` +
            this.stockApiKey
          )
          .pipe(
            shareReplay(1),
            catchError(this.errorHandler)
          )
        )
      })
      this.stocksLoaded = true;
    }
    return forkJoin(this.stockData)
  }

  fetchTechNewsData() {
    if(!this.techNewsLoaded) {
      this.techNewsData = this.http.get<{articles: []}>('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey='
        + '0176803c14204800ae658c2d02a9c37f'
      ) 
      .pipe(
        map((val) => val.articles),
        catchError(this.errorHandler),
        shareReplay(1)
      )
      this.techNewsLoaded;
    }
    return this.techNewsData;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message) || new Error("Server Error"));
  }
}
