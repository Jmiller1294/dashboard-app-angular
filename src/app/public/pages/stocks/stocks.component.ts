import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stocks',
  template: `
    <h1>stocks</h1>
  `,
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}