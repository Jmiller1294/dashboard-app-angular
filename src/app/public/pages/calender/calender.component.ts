import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender',
  template: `
    <h1>calender</h1>
  `,
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}