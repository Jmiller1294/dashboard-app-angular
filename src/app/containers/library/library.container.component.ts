import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../../services/library.service';


@Component({
  selector: 'library-container',
  template: `
    <ng-container *ngIf="route.children.length === 0">
      <div class='library-page-container'>
        <h1 class="header">Computer Science Library</h1>
        <button class="add-topic-btn"(click)="this.onAddTopic()">ADD TOPIC</button>
        <div class="cards-container">
          <card *ngFor="let category of categories" 
            [imgSrc]="category.icon" 
            [categoryName]="category.name"
            (click)="OnCardClick(category.name)"
            >
          </card>
        </div>
        <modal *ngIf="topicAdded" 
          (close)="onHandleClose()" 
          (clicked)="onHandleClicked()"
          [buttonText]="'Add Article'">
          <form class="add-topic-form">
            <div class="form-labels">
              <label>Category: </label>
              <label>Topic: </label>
              <label>New Topic: </label>
              <label>Name: </label>
              <label>URL: </label>
            </div>
            <div class="form-inputs">
              <p>
                <select (change)="onCategorySelect($event)">
                  <option *ngFor="let category of categories">{{category.name}}</option>
                </select>
              </p>
              <p>
                <select (change)="onTopicSelect($event)">
                  <option *ngFor="let topic of topics">{{topic.name}}</option>
                </select>
              </p>
              <P>
                <input (input)="onTopicChanged($event)" class="topic-input"/>
                <button type="button" 
                  class="add-new-topic" 
                  (click)="onAddNewTopic()">Add New Topic</button>
              </P>
              <p>
                <input 
                  (input)="onNameChanged($event)" 
                  type="text" 
                  class="url-input"/>
              </p> 
              <p>
                <input 
                  (input)="onUrlChanged($event)" 
                  placeholder="https://example.com" 
                  type="url" 
                  class="url-input"/>
              </p> 
            </div> 
          </form>
        </modal>
      </div>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./library.component.css']
})
export class LibraryContainerComponent implements OnInit {
  categories: Array<any> = [];
  topicAdded: boolean = false;
  selectedTopic: string = 'Binary Tree';
  newTopic: string;
  name: string;
  url: string;
  selectedCategory: string = 'Data Structures';
  topics: Array<any> = [];

  constructor(private cdRef: ChangeDetectorRef, 
              private router: Router, 
              public route: ActivatedRoute,
              private libraryService: LibraryService) {}

  ngOnInit() {
    this.categories = this.libraryService.getCategories();
    this.topics = this.libraryService.getCategoryTopics(this.selectedCategory);
  }

  OnCardClick(categoryName: string) {
    console.log('card clicked');
    this.libraryService.type = categoryName;
    this.router.navigate([categoryName], { relativeTo: this.route});
  }

  onAddTopic() {
    this.topicAdded = true;
  }

  onHandleClose() {
    this.topicAdded = false;
  }

  onHandleClicked() {

  }

  onCategorySelect(event: any) {
    this.selectedCategory = event.target.value;
    this.topics = this.libraryService.getCategoryTopics(this.selectedCategory);
  }

  onTopicSelect(event: any) {
    this.selectedTopic = event.target.value;
  }

  onAddArticle(event: any) {
    this.libraryService.addTopicArticle(this.selectedTopic, {name: this.name, url: this.url});
  }

  onAddNewTopic() {
    console.log(this.newTopic)
    this.libraryService.addNewTopic(this.selectedCategory, this.newTopic);
    this.topics = this.libraryService.getTopics();
  }

  onTopicChanged(event: any) {
    this.newTopic = event.target.value;
  }

  onUrlChanged(event: any) {
    this.url = event.target.value;
  }

  onNameChanged(event: any) {
    this.name = event.target.value;
  }


}