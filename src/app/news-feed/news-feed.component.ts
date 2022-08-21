import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  @Input() 
  articles: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.articles);
  }

}
