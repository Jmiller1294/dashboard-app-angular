import { Binary } from "@angular/compiler";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { LibraryService } from "src/app/services/library.service";

@Component({
  selector: 'modal',
  template: `
    <div class="backdrop"></div>
    <div class="modal-box">
      <div class="modal-box-actions-top">
        <button class="close-btn" (click)="onClose()">X</button>
      </div>
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
            <button type="button" class="add-new-topic"(click)="onAddNewTopic()">Add New Topic</button>
          </P>
          <p>
            <input 
            (input)="onNameChanged($event)" type="text" class="url-input"/>
          </p> 
          <p>
            <input (input)="onUrlChanged($event)" placeholder="https://example.com" type="url" class="url-input"/>
          </p> 
        </div> 
      </form>
      <div class="modal-box-actions-bottom">
        <button class="cancel-btn" (click)="onClose()">Cancel</button>
        <button class="add-article-btn" (click)="onAddArticle($event)">Add Article</button>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  @Output() close = new EventEmitter<void>();
  categories: Array<any> = [];
  selectedTopic: string = 'Binary Tree';
  newTopic: string;
  name: string;
  url: string;
  selectedCategory: string = 'Data Structures';
  topics: Array<any> = [];

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.categories = this.libraryService.getCategories();
    this.topics = this.libraryService.getCategoryTopics(this.selectedCategory);
  }

  onClose() {
    this.close.emit();
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
    this.close.emit();
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