import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender-page',
  template: `
    <h1>calender</h1>
  `,
  styleUrls: ['./calender.page.component.css']
})
export class CalenderPageComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}