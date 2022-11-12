import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stocks',
  template: `
    <h1>stocks</h1>
  `,
  styleUrls: ['./stocks.page.component.css']
})
export class StocksPageComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}