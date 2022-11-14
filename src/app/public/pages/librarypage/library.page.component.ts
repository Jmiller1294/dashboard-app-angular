import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../../../services/library.service';


@Component({
  selector: 'library-page',
  template: `
    <div>
      <library-container></library-container>
    </div>
  `,
})
export class LibraryPageComponent {
  categories: Array<any> = [];
  topicAdded: boolean = false;

  constructor(private cdRef: ChangeDetectorRef, 
              private router: Router, 
              public route: ActivatedRoute,
              private libraryService: LibraryService) {}



}