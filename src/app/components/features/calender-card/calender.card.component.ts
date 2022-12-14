import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'calender-card',
  template: `
    <div 
      [ngClass]="cardType === 
        'date' ? 'calender-card-con-date' 
        : 'calender-card-con-day'">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./calender.card.component.css']
})
export class CalenderCardComponent {
  @Input() cardType: string;
  

  constructor(private cdRef: ChangeDetectorRef) {}



}