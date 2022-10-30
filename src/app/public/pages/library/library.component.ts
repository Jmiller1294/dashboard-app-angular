import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'library',
  template: `
    <h1>library</h1>
  `,
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}