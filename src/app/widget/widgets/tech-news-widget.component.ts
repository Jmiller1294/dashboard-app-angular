import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'tech-news-widget',
  template: 
  `
    <div class="facts-container">
      <h1>{{this.techNews[this.articleNumber].title}}</h1>
      <p>
        {{this.techNews[this.articleNumber].description}}
      </p>
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class TechNewsWidgetComponent implements OnInit {
  articleNumber:number = 0;
  techNews:any = [
    {
      title: "Hello",
      description: "Good Afternoon this is your news"
    },
    {
      title: "More News",
      description: "Welcome to more news"
    },
    {
      title: "Last News",
      description: "End of the day news"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.incrementArticle(), 5000);
  }

  incrementArticle() {
    if(this.articleNumber < this.techNews.length - 1) {
      this.articleNumber += 1;
    }
    else {
      this.articleNumber = 0;
    }
    
  }
}
