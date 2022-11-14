import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blank-widget',
  template: `
    <div *ngIf="!displayWidget else widget" class="blank-container">
     <button class="add-widget-button" (click)="OnAddWidget()">+</button>
     <modal 
      *ngIf="addWidget"
      (close)="onHandleClose()" 
      (clicked)="onHandleClicked()"
      buttonText="Add Widget"
      >
      <form class="widget-form">
        <div class="form-labels">
          <label class="widget-form-label">Choose Widget: </label>
        </div>
        <div class="form-inputs">
          <select (change)="onTypeSelect($event)" class="widget-form-select">
            <option *ngFor="let widgetType of widgetTypes">{{widgetType}}</option>
          </select>
        </div>
      </form>
     </modal>
    </div>
    <ng-template #widget>
      <widget-container [type]="widgetType"></widget-container>
    </ng-template>
  `,
  styleUrls: ['./widget.component.css'],
})
export class BlankWidgetComponent implements OnInit {
  addWidget: boolean = false;
  displayWidget: boolean = false;
  widgetTypes: Array<string> = ['calender','weather', 'tech', 'facts'];
  widgetType: string = 'blank';

  constructor() { }

  ngOnInit(): void {
  }

  OnAddWidget() {
    this.addWidget = true;
  }

  onHandleClose() {
    this.addWidget = false;
  }

  onHandleClicked() {
    this.displayWidget = true;
  }

  onTypeSelect(event: any) {
    console.log(event.target.value);
    this.widgetType = event.target.value;
  }

}