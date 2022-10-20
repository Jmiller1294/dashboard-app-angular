import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import WidgetsService from './widgets.service';

interface news {
  title: string;
  description: string;
}

@Component({
  selector: 'tech-news-widget',
  template: 
  `
    <div class="facts-container">
      <h4>{{this.techNews[this.articleNumber]?.title}}</h4>
      <br />
      <p>
        {{this.techNews[this.articleNumber]?.description}}
      </p>
    </div>
  `,
  styleUrls: ['./widget.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TechNewsWidgetComponent implements OnInit {
  articleNumber:number = 0;
  intervalId:any;
  techNews: Array<any> = [];
  

  constructor(private cdRef: ChangeDetectorRef, private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.widgetsService.fetchTechNewsData()
    .subscribe(val => {
      this.techNews = val
      this.cdRef.detectChanges()
      console.log(this.techNews);
    })
    console.log(this.techNews);
  }

  ngAfterViewInit() {
     this.intervalId = setInterval(() => {
      this.incrementArticle();
      this.cdRef.detectChanges();
    }, 10000);
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
