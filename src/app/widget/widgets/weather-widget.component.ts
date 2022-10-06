import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'weather-widget',
  template: `
    <div class="weather-container">
      <div class="row">
        <img class="weather-icon" src="../../../assets/sun.png" />
        <div class="column">
        </div>
      </div>
      <div class="row">
        <div class="column">
          dvdfvfdvdfvfdv
          vdfvdfvdfvdfv
          dfvdfvfdvdfvdf
        </div>
        <div class="column">
          dvdfvfdvdfvfdv
          vdfvdfvdfvdfv
          dfvdfvfdvdfvdf
        </div>
        <div class="column">
          dvdfvfdvdfvfdv
          vdfvdfvdfvdfv
          dfvdfvfdvdfvdf
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {
  @Input() weatherData: any;
  d: string = "hello";
  console = console;
  // @Output() widgetClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}