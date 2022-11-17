import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject, throwError } from "rxjs";
import { Article } from "../models/article.model";
import { catchError } from "rxjs";

@Injectable({providedIn: 'root'})
export class NewsFeedService {
  newsLoaded: boolean = false;
  newsData:any = {};

  constructor(private http: HttpClient) {}

  fetchArticles() {
    if(!this.newsLoaded) {
      this.newsData = this.http.get<{articles: []}>('https://newsapi.org/v2/top-headlines?country=us&apiKey='
      + '0176803c14204800ae658c2d02a9c37f'
      ) 
      .pipe(
        map((val) => val.articles),
        catchError(this.errorHandler)
      )
      this.newsLoaded = true;
    }
    return this.newsData;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message)|| new Error("Server Error"));
  }
}