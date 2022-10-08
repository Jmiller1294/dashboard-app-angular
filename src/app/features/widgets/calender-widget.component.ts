import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender-widget',
  template: `
    <div class="calender-container">
      <div class="row">
        <mat-card class="demo-inline-calendar-card">
          <mat-calendar class="calender"[(selected)]="selected"></mat-calendar>
        </mat-card>   
      </div>
    </div>
  `,
  styleUrls: ['./widget.component.css'],
})
export class CalenderWidgetComponent implements OnInit {
  selected: any;

  constructor() { }

  ngOnInit(): void {
  }

}