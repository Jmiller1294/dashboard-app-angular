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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.OnFetchArticles();
  }


  OnFetchArticles() {
    this.http.get<{articles: []}>('https://newsapi.org/v2/top-headlines?country=us&apiKey='
      + '0176803c14204800ae658c2d02a9c37f'
    ) 
    .subscribe(resp => {
      console.log(resp.articles)
      this.loadedArticles = resp.articles;
    })
    console.log(this.loadedArticles);
  }
}
