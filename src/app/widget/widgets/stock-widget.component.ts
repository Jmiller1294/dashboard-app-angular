import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock-widget',
  template: `
    <div class="stock-container">
     <div class="stock-info">
      <p>sfgsdgdfsg</p>
      <p>sfgsdgdfs</p>
      <p>sfgsdgdfs</p>
      <p>sfgsdgdf</p>
     </div>
     <div class="stock-info">
      <p>sfgsdgdfsg</p>
      <p>sfgsdgdfs</p>
      <p>sfgsdgdfs</p>
      <p>sfgsdgdf</p>
     </div>
     <div class="stock-info">
      <p>sfgsdgdfsg</p>
      <p>sfgsdgdfs</p>
      <p>sfgsdgdfs</p>
      <p>sfgsdgdf</p>
     </div>
     <div class="stock-info">
      <p>sfgsdgdfsg</p>
      <p>sfgsdgdfs</p>
      <p>sfgsdgdfs</p>
      <p>sfgsdgdf</p>
     </div>
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class StockWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}