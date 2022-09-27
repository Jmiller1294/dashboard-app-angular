import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock-widget',
  template: `
    <div class="stock-container">
      <div class="stock-info">
        <h4>Name</h4>
        <p>sfgsdgdfsg</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdf</p>
      </div>
      <div class="stock-info">
        <h4>Price</h4>
        <p>sfgsdgdfsg</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdf</p>
      </div>
      <div class="stock-info">
        <h4>Change</h4>
        <p>sfgsdgdfsg</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdf</p>
      </div>
      <div class="stock-info">
        <h4>Market Cap</h4>
        <p>sfgsdgdfsg</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdf</p>
      </div>
      <div class="stock-info">
        <h4>Yield</h4>
        <p>sfgsdgdfsg</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdfs</p>
        <p>sfgsdgdf</p>
      </div>
      <div class="stock-info">
        <h4>N/A</h4>
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