import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'library-topic',
  template: `
  <div>
    <ul>
      <h1>{{topic.name}}</h1>
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