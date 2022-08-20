import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender-widget',
  template: `
    <div class="calender-container">
      calender-widget
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class CalenderWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}