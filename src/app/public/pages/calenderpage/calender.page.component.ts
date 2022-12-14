import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender-page',
  template: `
    <div>
      <calender-container></calender-container>
    </div>
  `,
  styleUrls: ['./calender.page.component.css']
})
export class CalenderPageComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}