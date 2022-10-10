import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender-widget',
  template: `
    <div class="calender-widget-container">
      <div class="time">
        <h1>10:00<span class="morning">AM</span></h1>
        <h2>Monday</h2>
        <h3>Oct 10</h3>
      </div>
        <div>
          <mat-calendar 
            class="calendar"[(selected)]="selected"></mat-calendar>
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