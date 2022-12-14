import { ChangeDetectionStrategy, ChangeDetectorRef, 
  Component, 
  ComponentRef, 
  ElementRef, EventEmitter, 
  Input, 
  OnInit, 
  Output, 
  ViewChild, 
  ViewContainerRef } from '@angular/core';
import { TasksWidgetComponent } from 'src/app/components/features/widgets/tasks-widget.component';
import { NewsWidgetComponent } from 'src/app/components/features/widgets/news-widget.component';
import { CalenderWidgetComponent } from 'src/app/components/features/widgets/calender-widget.component';
import { WeatherWidgetComponent } from 'src/app/components/features/widgets/weather-widget.component';
import { StockWidgetComponent } from 'src/app/components/features/widgets/stock-widget.component';
import { RandomFactWidgetComponent } from 'src/app/components/features/widgets/random-fact-widget.component';
import { TechNewsWidgetComponent } from 'src/app/components/features/widgets/tech-news-widget.component';
import { CustomWidgetComponent } from 'src/app/components/features/widgets/custom-widget.component';
import WidgetsService from 'src/app/services/widgets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'widget-container',
  template: `
    <ng-container #widgetContainer></ng-container>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WidgetContainerComponent implements OnInit {
  @Input() type: string;
  @ViewChild('widgetContainer', { read: ViewContainerRef }) widgetContainer: ViewContainerRef;
  weatherDataSubscription: Subscription;
  stockDataSubscription: Subscription;
  classType: string;
  dat: any;
  tasks:Array<string> = ['sdfsdfsdf','sdfsdfsdf','gdfgfgfg'];
  loaded: boolean = false;
  
  constructor(private cdRef: ChangeDetectorRef, private widgetsService: WidgetsService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.getWidgetType(this.type);
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    // this.weatherDataSubscription.unsubscribe();
    // this.stockDataSubscription.unsubscribe();
  }

  getWidgetType(type:String, data?: any) {
    switch(type) {
      case 'tasks':
        let TasksComponentRef: ComponentRef<TasksWidgetComponent>;
        TasksComponentRef = this.widgetContainer.createComponent(TasksWidgetComponent);
        TasksComponentRef.instance.tasks = this.tasks;
        break;
      case 'news':
        let NewsComponentRef: ComponentRef<NewsWidgetComponent>;
        NewsComponentRef = this.widgetContainer.createComponent(NewsWidgetComponent);
        break;
      case 'calender':
        let CalenderComponentRef: ComponentRef<CalenderWidgetComponent>;
        CalenderComponentRef = this.widgetContainer.createComponent(CalenderWidgetComponent);
        break;
      case 'weather':
        let WeatherComponentRef: ComponentRef<WeatherWidgetComponent>;
        this.weatherDataSubscription = this.widgetsService.fetchWeatherData()
          .subscribe((val: any ) => {
            WeatherComponentRef = this.widgetContainer.createComponent(WeatherWidgetComponent);
            WeatherComponentRef.instance.weatherData = val;
            this.cdRef.detectChanges();
          })
        break;
      case 'stocks':
        let StockComponentRef: ComponentRef<StockWidgetComponent>;
        this.stockDataSubscription = this.widgetsService.fetchStockData() 
          .subscribe(val => {
            StockComponentRef = this.widgetContainer.createComponent(StockWidgetComponent);
            StockComponentRef.instance.stocks = val;
            this.cdRef.detectChanges();
          })
        break;
      case 'facts':
        let FactsComponentRef: ComponentRef<RandomFactWidgetComponent>;
        FactsComponentRef = this.widgetContainer.createComponent(RandomFactWidgetComponent);
        break;
      case 'tech':
        let TechNewsComponentRef: ComponentRef<TechNewsWidgetComponent>;
        this.widgetsService.fetchTechNewsData()
          .subscribe((val:any )=> {
            TechNewsComponentRef = this.widgetContainer.createComponent(TechNewsWidgetComponent);
            TechNewsComponentRef.instance.techNews = val;
            console.log('tech news',val)
            this.cdRef.detectChanges();
        })
        break;
      default:
        let CustomComponentRef: ComponentRef<CustomWidgetComponent>;
        CustomComponentRef = this.widgetContainer.createComponent(CustomWidgetComponent);
    }
  }

}
