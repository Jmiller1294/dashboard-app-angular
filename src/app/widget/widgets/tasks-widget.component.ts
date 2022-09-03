import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'tasks-widget',
  template: `
    <div class="tasks-container">
        <h2>Tasks</h2>
        <form class="tasks-input-form" 
          [formGroup]="tasksForm" 
          (keyup.enter)="onEnterKeyPress()">
          <textarea class="tasks-input-box"
            formControlName="tasks-input">
          </textarea>
          <div formArrayName="tasks" 
            class="tasks-list-form" 
            *ngFor="let taskControl of tasksArrayControl; let i = index"
            >
              <input type="checkbox" id="task" [formControlName]="i">
              <label for="vehicle1"> {{taskControl.getRawValue()}}</label><br>
          </div>
        </form>
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class TasksWidgetComponent implements OnInit {
  tasksForm: FormGroup;
  console = console;
  constructor() { }

  ngOnInit(): void {
    this.tasksForm = new FormGroup({
      'tasks-input': new FormControl(null),
      'tasks': new FormArray([])
    });
  }

  get tasksArrayControl() {
    return (this.tasksForm.get('tasks') as FormArray).controls;
  }

  onEnterKeyPress() {
    const tasks = this.tasksForm.get('tasks-input')?.value.split(",");
    tasks.map((task: any) => {
      const control = new FormControl(task);
      (<FormArray>this.tasksForm.get('tasks')).push(control);
    })
    this.tasksForm.get('tasks-input')?.setValue(null);
  }
}