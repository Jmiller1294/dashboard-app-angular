import { ChangeDetectionStrategy, ChangeDetectorRef, 
  Component, 
  ElementRef, EventEmitter, 
  Input, 
  OnInit, 
  Output, 
  ViewChild, 
  ViewContainerRef } from '@angular/core';
import { TasksWidgetComponent } from './tasks-widget.component';
import { NewsWidgetComponent } from './news-widget.component';
import { CalenderWidgetComponent } from './calender-widget.component';
import { WeatherWidgetComponent } from './weather-widget.component';
import { StockWidgetComponent } from './stock-widget.component';
import { RandomFactWidgetComponent } from './random-fact-widget.component';
import { TechNewsWidgetComponent } from './tech-news-widget.component';
import { ComponentRef } from '@angular/core';
import { BlankWidgetComponent } from './blank-widget.component';

@Component({
  selector: 'widget',
  template: `
    <ng-container #widgetContainer></ng-container>
  `,
  styleUrls: ['./widget.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {
  @Input() type: string;
  @ViewChild('widgetContainer', { read: ViewContainerRef }) widgetContainer: ViewContainerRef;
  classType: string;
  
  

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getWidgetType(this.type);
    this.cdRef.detectChanges();
  }

  getWidgetType(type:String) {
    switch(type) {
      case 'tasks':
        this.widgetContainer.createComponent(TasksWidgetComponent);
        break;
      case 'news':
        this.widgetContainer.createComponent(NewsWidgetComponent);
        break;
      case 'calender':
        this.widgetContainer.createComponent(CalenderWidgetComponent);
        break;
      case 'weather':
        this.widgetContainer.createComponent(WeatherWidgetComponent);
        break;
      case 'stocks':
        this.widgetContainer.createComponent(StockWidgetComponent);
        break;
      case 'facts':
        this.widgetContainer.createComponent(RandomFactWidgetComponent);
        break;
      case 'tech':
        this.widgetContainer.createComponent(TechNewsWidgetComponent);
        break;
      default:
        this.widgetContainer.createComponent(BlankWidgetComponent);
    }
  }

}
