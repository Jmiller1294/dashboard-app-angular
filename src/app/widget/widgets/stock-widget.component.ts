import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock-widget',
  template: `
    <div [ngStyle]=" {'height': '250px', 'background-color': 'purple', 'margin-bottom': '20px'}">
      stock-widget
    </div>
  `,
})
export class StockWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}