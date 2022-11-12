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
  


  constructor(private cdRef:ChangeDetectorRef) {
    this.intervalId = setInterval(() => {
      this.getCurrentTime();
      this.cdRef.detectChanges();
    }, 30000);
   }

  ngOnInit(): void {
    
  }

  getCurrentTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString();
    return currentTime.split(':').splice(0,2).join(':');
  }

  getCurrentDay() {
    let today = new Date();
    return today.toLocaleDateString(
      undefined, 
      { weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      }
    );
  }

}