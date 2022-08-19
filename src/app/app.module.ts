import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasksWidgetComponent } from './widget/widgets/tasks-widget.component';
import { NewsWidgetComponent } from './widget/widgets/news-widget.component';
import { CalenderWidgetComponent } from './widget/widgets/calender-widget.component';
import { StockWidgetComponent } from './widget/widgets/stock-widget.component';
import { WeatherWidgetComponent } from './widget/widgets/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetComponent,
    TasksWidgetComponent,
    NewsWidgetComponent,
    CalenderWidgetComponent,
    StockWidgetComponent,
    WeatherWidgetComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
