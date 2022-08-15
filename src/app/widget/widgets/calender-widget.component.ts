import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender-widget',
  template: `
    <div [ngStyle]=" {'height': '200px', 'background-color': 'purple', 'margin-bottom': '20px'}">
      calender-widget
    </div>
  `,
})
export class CalenderWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}