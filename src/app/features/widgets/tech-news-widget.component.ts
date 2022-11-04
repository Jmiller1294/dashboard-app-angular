import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import WidgetsService from './widgets.service';

interface news {
  title: string;
  description: string;
}

@Component({
  selector: 'tech-news-widget',
  template: 
  `
    <div class="tech-news-container">
      <a [href]="this.techNews[this.articleNumber]?.url"
        target="_blank" class="tech-news-link">
        <h4>{{this.techNews[this.articleNumber]?.title}}</h4>
      </a>
      <br />
      <p class="tech-news-desc">
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
    // this.widgetsService.fetchTechNewsData()
    // .subscribe((val:any )=> {
    //   this.techNews = val
    //   this.cdRef.detectChanges()
    //   console.log(this.techNews);
    // })
    // console.log(this.techNews);
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
