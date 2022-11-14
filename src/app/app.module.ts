import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './containers/home/home.container.component';
import { HomePageComponent } from './public/pages/homepage/home.page.component';
import { WidgetContainerComponent } from './containers/widget/widget.container.component.';
import { SidebarComponent } from './components/features/sidebar/sidebar.component';
import { TasksWidgetComponent } from './components/features/widgets/tasks-widget.component';
import { NewsWidgetComponent } from './components/features/widgets/news-widget.component';
import { CalenderWidgetComponent } from './components/features/widgets/calender-widget.component';
import { StockWidgetComponent } from './components/features/widgets/stock-widget.component';
import { WeatherWidgetComponent } from './components/features/widgets/weather-widget.component';
import { NewsFeedComponent } from './components/features/news-feed/news-feed.component';
import { RandomFactWidgetComponent } from './components/features/widgets/random-fact-widget.component';
import { TechNewsWidgetComponent } from './components/features/widgets/tech-news-widget.component';
import { CalenderPageComponent } from './public/pages/calenderpage/calender.page.component';
import { BlankWidgetComponent } from './components/features/widgets/blank-widget.component';
import { LibraryPageComponent } from './public/pages/librarypage/library.page.component';
import { SettingsPageComponent } from './public/pages/settingspage/settings.component';
import { StocksPageComponent } from './public/pages/stockspage/stocks.page.component';
import { TasksPageComponent } from './public/pages/taskspage/tasks.page.component';
import { CardComponent } from './components/features/card/card.component';
import { LibraryCategoryComponent } from './components/features/library/library.category.component';
import { LibraryTopicComponent } from './components/features/library/library.topic.component';
import { LibraryContainerComponent } from './containers/library/library.container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './components/features/modal/modal.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'calender', component: CalenderPageComponent },
  { path: 'library', component: LibraryPageComponent, children: [
    { path: ':categories', component: LibraryCategoryComponent },
    { path: ':categories/:topic', component: LibraryTopicComponent },
  ] },
  { path: 'stocks', component: StocksPageComponent },
  { path: 'tasks', component: TasksPageComponent },
  { path: 'settings', component: SettingsPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WidgetContainerComponent,
    TasksWidgetComponent,
    TechNewsWidgetComponent,
    NewsWidgetComponent,
    CalenderWidgetComponent,
    StockWidgetComponent,
    WeatherWidgetComponent,
    SidebarComponent,
    NewsFeedComponent,
    RandomFactWidgetComponent,
    BlankWidgetComponent,
    CalenderPageComponent,
    SettingsPageComponent,
    LibraryPageComponent,
    TasksPageComponent,
    StocksPageComponent,
    CardComponent,
    LibraryCategoryComponent,
    LibraryTopicComponent,
    LibraryContainerComponent,
    ModalComponent,
    HomeContainerComponent
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
