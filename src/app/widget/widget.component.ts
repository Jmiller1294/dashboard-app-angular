import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TasksWidgetComponent } from './widgets/tasks-widget.component';
import { NewsWidgetComponent } from './widgets/news-widget.component';
import { CalenderWidgetComponent } from './widgets/calender-widget.component';
import { WeatherWidgetComponent } from './widgets/weather-widget.component';
import { StockWidgetComponent } from './widgets/stock-widget.component';
import { ComponentRef } from '@angular/core';

@Component({
  selector: 'widget',
  template: `
    <ng-container #widgetContainer></ng-container>
  `,
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  @Input() type: string;
  @ViewChild('widgetContainer', { read: ViewContainerRef }) con:any;
  classType: string;
  

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    this.getWidgetType(this.type)
  }

  getWidgetType(type:String) {
    switch(type) {
      case 'tasks':
        this.con.createComponent(TasksWidgetComponent);
        break;
      case 'news':
        this.con.createComponent(NewsWidgetComponent);
        break;
      case 'calender':
        this.con.createComponent(CalenderWidgetComponent);
        break;
      case 'weather':
        this.con.createComponent(WeatherWidgetComponent);
        break;
      case 'stocks':
        this.con.createComponent(StockWidgetComponent);
        break;
      default:
        null
    }
  }

}
