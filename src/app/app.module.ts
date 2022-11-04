import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
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
import { CalenderComponent } from './public/pages/calender/calender.component';
import { BlankWidgetComponent } from './features/widgets/blank-widget.component';
import { LibraryComponent } from './public/pages/library/library.component';
import { SettingsComponent } from './public/pages/settings/settings.component';
import { StocksComponent } from './public/pages/stocks/stocks.component';
import { TasksComponent } from './public/pages/tasks/tasks.component';
import { CardComponent } from './features/card/card.component';
import { LibraryCategoryComponent } from './public/pages/library/library.category.component';
import { LibraryTopicComponent } from './public/pages/library/library.topic.component';
import { NewsFeedService } from './features/news-feed/news-feed.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'library', component: LibraryComponent, children: [
    { path: ':categories', component: LibraryCategoryComponent },
    { path: ':categories/:topic', component: LibraryTopicComponent },
  ] },
  { path: 'stocks', component: StocksComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'settings', component: SettingsComponent },
];

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
    CalenderComponent,
    SettingsComponent,
    LibraryComponent,
    TasksComponent,
    StocksComponent,
    CardComponent,
    LibraryCategoryComponent,
    LibraryTopicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
