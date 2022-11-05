import { Binary } from "@angular/compiler";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { LibraryService } from "../public/pages/library/library.service";

@Component({
  selector: 'modal',
  template: `
    <div class="backdrop"></div>
    <div class="modal-box">
      <form class="add-topic-form">
        <select (change)="onCategorySelect($event)">
          <option *ngFor="let category of categories">{{category.name}}</option>
        </select>
        <p>
          <select (change)="onTopicSelect($event)">
            <option *ngFor="let topic of topics">{{topic.name}}</option>
          </select>
          <input (input)="onTopicChanged($event)"/>
          <button type="button" (click)="onAddNewTopic()">Add New Topic</button>
        </p>
        <input type="url" placeholder="https://example.com"/>
      </form>
      <div class="modal-box-actions">
        <button class="close-btn" (click)="onAddTopic($event)">Add Article</button>
        <button class="close-btn" (click)="onClose()">Close</button>
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
  selectedCategory: string = '';
  topics: Array<any> = [];

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.categories = this.libraryService.getCategories();
    this.topics = this.libraryService.getTopics();
  }

  onClose() {
    this.close.emit();
  }

  onCategorySelect(event: any) {
    this.selectedCategory = event.target.value;
  }

  onTopicSelect(event: any) {
    this.selectedTopic = event.target.value;
  }

  onAddTopic(event: any) {
    this.libraryService.addTopicArticle(this.selectedTopic, {name: `Woah ${this.selectedTopic}`, url: "htttpsfsdfsdf"});
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

}