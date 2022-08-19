import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-widget',
  template: `
    <div [ngStyle]=" {'height': '250px', 'background-color': 'purple', 'margin-bottom': '20px'}">
      weather-widget
    </div>
  `,
})
export class WeatherWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}