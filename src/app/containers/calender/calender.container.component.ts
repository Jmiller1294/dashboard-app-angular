import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'calender-container',
  template: `
    <div class="calender-container">
      <h1 class="month">November</h1>
      <calender-card 
        *ngFor="let day of days" 
        cardType="day"
      >{{day}}</calender-card>

      <calender-card 
        (click)="getNum(i + 1)" 
        *ngFor="let in of counter(numDays); 
        let i = index" 
        cardType="date"
      ></calender-card>

      <calender-card 
        (click)="getNum(i + 1)"  
        *ngFor="let in of counter(this.lastDay); 
        let i = index" 
        cardType="date"
      >
        <span class="day">{{i + 1}}</span>
        <ng-container *ngIf="getDay(i + 1) === currentMonthCalDates[i]?.day">
          <div *ngFor="let event of currentMonthCalDates[i]?.events" class="event">{{event}}</div>
        </ng-container>
      </calender-card>

      <calender-card 
        (click)="getNumNext(i + 1)" 
        *ngFor="let in of counter(numDays); 
        let i = index" 
        cardType="date"
      >
        <span class="day">{{i + 1}}</span> 
        <ng-container *ngIf="getDay(i + 1) === currentMonthCalDates[i]?.day">
          <div *ngFor="let event of nextMonthCalDates[i]?.events" class="event">{{event}}</div>
        </ng-container>
      </calender-card>
    </div>
  `,
  styleUrls: ['./calender.container.component.css']
})
export class CalenderContainerComponent {
  days:Array<string> = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'];
  month: Array<string> = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  currentMonthCalDates: any = [];
  nextMonthCalDates: any = [];
  numDays:number;
  date = new Date();
  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();


  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.daysInThisMonth();
    this.createCurrentMonthDates();
    this.createNextMonthDates();
  }

  counter(i: number) {
    return new Array(i);
  }

  daysInThisMonth() {
    let firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1).toDateString();
    let tuesday = /Tue/g;
    let wednesday = /Wed/g;
    let thursday = /Thur/g;
    let friday = /Fri/g;
    let saturday = /Sat/g;
    let sunday = /Sun/g;
    let monday = /Mon/g;

    if(monday.test(firstDay)) {
      this.numDays = 0;
    }
    if(tuesday.test(firstDay)) {
      this.numDays = 1;
    }
    if(wednesday.test(firstDay)) {
      this.numDays = 2;
    }
    if(thursday.test(firstDay)) {
      this.numDays = 3;
    }
    if(friday.test(firstDay)) {
      this.numDays = 4;
    }
    if(saturday.test(firstDay)) {
      this.numDays = 5;
    }
    if(sunday.test(firstDay)) {
      this.numDays = 6;
    }
  }

  getDay(num:number) {
    return this.month[this.date.getMonth()] + " " + num.toString();
  }

  getNum(num:number) {
    console.log(this.month[this.date.getMonth()] + " " + num.toString());
    let ex = this.currentMonthCalDates.find((val: any) => val.day === this.month[this.date.getMonth()] + " " + num.toString());
    ex.events.push('hello');
  }

  getNumNext(num:number) {
    console.log(this.month[this.date.getMonth() + 1] ,num);
  }

  createCurrentMonthDates() {
    let month = this.month[this.date.getMonth()];
    for(let i = 0; i < this.lastDay; i++) {
      this.currentMonthCalDates.push({day: month + " " + (i + 1), events: ['golf','gym']})
    }
    console.log(this.currentMonthCalDates);
  }

  createNextMonthDates() {
    let month = this.month[this.date.getMonth() + 1];
    let nextMonthDays = 42 - (this.lastDay + this.numDays);

    for(let i = 0; i <nextMonthDays; i++) {
      this.nextMonthCalDates.push({day: month + " " + (i + 1), events: ['golf','gym']})
    }

    console.log(this.nextMonthCalDates);
  }

}