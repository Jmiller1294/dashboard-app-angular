import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
 
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
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { RandomFactWidgetComponent } from './widget/widgets/random-fact-widget.component';
import { TechNewsWidgetComponent } from './widget/widgets/tech-news-widget.component';
import { BlankWidgetComponent } from './widget/widgets/blank-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetComponent,
    TasksWidgetComponent,
    TechNewsWidgetComponent,
    NewsWidgetComponent,
    CalenderWidgetComponent,
    StockWidgetComponent,
    WeatherWidgetComponent,
    NavbarComponent,
    SidebarComponent,
    NewsFeedComponent,
    RandomFactWidgetComponent,
    BlankWidgetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
