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

  constructor() {}



}