import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

interface news {
  title: string;
  description: string;
}

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
  styleUrls: ['./widget.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TechNewsWidgetComponent implements OnInit {
  articleNumber:number = 0;
  intervalId:any;
  


  
  techNews: Array<news> = [
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

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.incrementArticle();
      this.cdRef.detectChanges();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
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
