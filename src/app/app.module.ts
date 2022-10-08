import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { WidgetComponent } from './features/widgets/widget.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { TasksWidgetComponent } from './features/widgets/tasks-widget.component';
import { NewsWidgetComponent } from './features/widgets/news-widget.component';
import { CalenderWidgetComponent } from './features/widgets/calender-widget.component';
import { StockWidgetComponent } from './features/widgets/stock-widget.component';
import { WeatherWidgetComponent } from './features/widgets/weather-widget.component';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { RandomFactWidgetComponent } from './features/widgets/random-fact-widget.component';
import { TechNewsWidgetComponent } from './features/widgets/tech-news-widget.component';
import { BlankWidgetComponent } from './features/widgets/blank-widget.component';
import { NewsFeedService } from './features/news-feed/news-feed.service';

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
