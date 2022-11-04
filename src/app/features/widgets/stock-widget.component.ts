import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import WidgetsService from './widgets.service';
import { Stock } from 'src/app/shared/models/stock.model';
import { delay, map, Observable, shareReplay, Subject, Subscription, take, takeUntil, takeWhile } from 'rxjs';

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
    </div>
  `,
  styleUrls: ['./widget.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StockWidgetComponent implements OnInit {
  titles = ['Symbol','Open','Price','High','Low','Change'];
  stocks:Array<any> = [];
  subscription: Subscription;

  constructor(private cdRef: ChangeDetectorRef, private widgetsService:WidgetsService) {
  }

  ngOnInit(): void {
    // console.log('init stock');
    //   this.subscription = this.widgetsService.fetchStockData() 
    //   .subscribe(val => {
    //     console.log(val)
    //     this.stocks = val
    //     this.cdRef.detectChanges()
    //   })
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

}