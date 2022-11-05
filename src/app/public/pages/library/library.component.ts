import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from './library.service';


@Component({
  selector: 'library',
  template: `
  <div class="library-page-container">
    <ng-container *ngIf="route.children.length === 0">
      <h1 class="header">Computer Science Library</h1>
      <button (click)="this.onAddTopic()">ADD TOPIC</button>
      <div class="cards-container">
        <card *ngFor="let category of categories" 
          [imgSrc]="category.icon" 
          [categoryName]="category.name"
          (click)="OnCardClick(category.name)"
          >
        </card>
      </div>
      <modal *ngIf="topicAdded" (close)="onHandleClose()"></modal>
    </ng-container>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  categories: Array<any> = [];
  topicAdded: boolean = false;

  constructor(private cdRef: ChangeDetectorRef, 
              private router: Router, 
              public route: ActivatedRoute,
              private libraryService: LibraryService) {}

  ngOnInit() {
    this.categories = this.libraryService.getCategories();
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

}