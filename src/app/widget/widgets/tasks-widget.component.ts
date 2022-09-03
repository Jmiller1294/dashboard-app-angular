import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'tasks-widget',
  template: `
    <div class="tasks-container">
        <h2>Tasks</h2>
        <form id="tasks-form" 
          [formGroup]="tasksForm" 
          (keyup.enter)="onEnterKeyPress($event)">
          <textarea class="tasks-input-box"
           formControlName="tasks">
          </textarea>
        </form>
        <ul class="tasks-list" *ngFor="let task of tasksArray">
          <li>
            <input type="checkbox" id="task">
            <label for="vehicle1">{{task}}</label><br>  
          </li>
        </ul>
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class TasksWidgetComponent implements OnInit {
  tasksForm: FormGroup;
  tasksArray: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.tasksForm = new FormGroup({
      'tasks': new FormControl(null)
    });
  }

  onEnterKeyPress(event: any) {
    this.tasksArray = event.target.value.split(",");
    console.log(this.tasksArray);
  }

}