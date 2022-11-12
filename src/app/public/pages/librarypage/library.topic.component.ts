import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'library-topic',
  template: `
  <div class="topic-container">
    <h2>{{topic.name}}</h2>
    <ul>
      <li *ngFor=" let article of topic.articles">{{article.name}} - {{article.url}}</li>
    </ul>
  </div>
  `,
  styleUrls: ['./library.component.css']
})
export class LibraryTopicComponent implements OnInit {
  @Input() topic: any;
  
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    
  }

}