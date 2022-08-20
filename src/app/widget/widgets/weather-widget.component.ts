import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-widget',
  template: `
    <div class="weather-container">
      weather-widget
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}