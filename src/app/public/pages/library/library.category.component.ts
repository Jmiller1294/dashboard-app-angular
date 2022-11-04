import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { LibraryService } from './library.service';

@Component({
  selector: 'library-category',
  template: `
    <div>
      <h1 class="category-header">{{this.categoryType}}</h1>
      <button>ADD CATEGORY</button>
      <button>ADD TOPIC</button>
      <div class="topics-container">
        <library-topic 
          *ngFor="let topic of topics" 
          [topic]="topic"
        >{{console.log(topic)}}</library-topic>
      </div>
    </div>
  `,
  styleUrls: ['./library.component.css']
})
export class LibraryCategoryComponent implements OnInit {  
  topics: any;
  categoryType: string;
  console = console;

  constructor(private cdRef: ChangeDetectorRef, private libraryService: LibraryService) {}

  ngOnInit() {
    this.topics = this.libraryService.getCategory()?.topics;
    this.categoryType = this.libraryService.type;
    this.console.log(this.topics)
  }

}