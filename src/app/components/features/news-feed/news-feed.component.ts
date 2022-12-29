import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsFeedService } from '../../../services/news-feed.service';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
  providers: []
})
export class NewsFeedComponent implements OnInit,AfterViewInit {
  articles: Array<Article> = [];
  subscription: Subscription;
  errorMsg: string;

  constructor(private newsFeedService: NewsFeedService,private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.newsFeedService.fetchArticles()
    //   .subscribe((res: any) => 
    //     this.articles = res,
    //   )
  }

  ngAfterViewInit() {
    
  }

}
