import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dashboard';
  loadedArticles: Array<object> = [];
  loadedWeatherData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.OnFetchArticles();
    this.onFetchWeatherData();
  }


  OnFetchArticles() {
    this.http.get<{articles: []}>('https://newsapi.org/v2/top-headlines?country=us&apiKey='
      + '0176803c14204800ae658c2d02a9c37f'
    ) 
    .subscribe(resp => {
      this.loadedArticles = resp.articles;
    })
  }

  onFetchWeatherData() {
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?lat=45&lon=45&appid=' 
      + '3a3d701928322f6c8b5ad5d274165ef3'
    )
    .subscribe(resp => {
      this.loadedWeatherData = resp;
    })
  }
}
