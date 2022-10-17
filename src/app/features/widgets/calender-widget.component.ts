import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender-widget',
  template: `
    <div class="calender-widget-container">
      <div class="time">
        <span class="current-time">{{getCurrentTime()}}</span>
        <h5>{{getCurrentDay()}}</h5>
        <h3></h3>
      </div>
        <div>
          <mat-calendar 
            class="calendar"[(selected)]="selected"></mat-calendar>
        </div>
    </div>
  `,
  styleUrls: ['./widget.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CalenderWidgetComponent implements OnInit {
  selected: any;
  intervalId: any;
  today = new Date();


  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.getCurrentTime;
      this.cdRef.detectChanges();
    }, 30000);
  }

  getCurrentTime() {
    let currentTime = this.today.toLocaleTimeString();
    return currentTime.split(':').splice(0,2).join(':');
  }

  getCurrentDay() {
    return this.today.toLocaleDateString(
      undefined, 
      { weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      }
    );
  }

}