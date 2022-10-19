import { Component, ElementRef, OnInit } from '@angular/core';
import { WidgetsService } from './widgets.service';
import { Stock } from 'src/app/shared/models/stock.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'stock-widget',
  template: `
    <div class="stock-container">
      <table>
        <thead>
          <th *ngFor="let title of titles">{{title}}</th>
        </thead>
        <tbody>
          <tr *ngFor="let stock of stocks">
            <td>{{stock['Global Quote']['01. symbol']}}</td>
            <td>{{stock['Global Quote']['02. open'].slice(0,-2)}}</td>
            <td>{{stock['Global Quote']['05. price'].slice(0,-2)}}</td>
            <td>{{stock['Global Quote']['03. high'].slice(0,-2)}}</td>
            <td>{{stock['Global Quote']['04. low'].slice(0,-2)}}</td>
            <td>{{stock['Global Quote']['09. change']}}</td>
          </tr>
        </tbody>
      </table>
      <!-- <div class="stock-title" >
        <h4 *ngFor="let title of titles">{{title}}</h4>
      </div>
      <div class="stock-info" *ngFor="let stock of stocks">
        <p>{{stock['Global Quote']['01. symbol']}}</p>
        <p>{{stock['Global Quote']['02. open']}}</p>
        <p>{{stock['Global Quote']['05. price']}}</p>
        <p>{{stock['Global Quote']['03. high']}}</p>
        <p>{{stock['Global Quote']['04. low']}}</p>
        <p>{{stock['Global Quote']['09. change']}}</p>
      </div> -->
    </div>
  `,
  styleUrls: ['./widget.component.css'],
})
export class StockWidgetComponent implements OnInit {
  titles = ['Symbol','Open','Price','High','Low','Change'];
  stocks:any;

  constructor(private widgetsService:WidgetsService) { }

  ngOnInit(): void {
    this.widgetsService.fetchStockData()
    // .pipe(map((val: any) => { return val['Global Quote']}))
    // .subscribe((val : any) => { console.log(val[0]['Global Quote']['01. symbol'])})
    .subscribe( val =>
      this.stocks = val
    )
  }

}