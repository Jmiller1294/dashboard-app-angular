import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { topic } from 'src/app/models/topic.model';


@Component({
  selector: 'library-topic',
  template: `
    <div class="topic-container">
      <h2>{{topic.name}}</h2>
      <ul>
        <li *ngFor="let article of topic.articles">
          <a 
            class="article-link"
            [href]="article.url" 
            target="_blank">{{article.name}}</a>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./library.component.css']
})
export class LibraryTopicComponent implements OnInit {
  @Input() topic: topic;
  
  
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    
  }

}