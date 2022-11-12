import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'tasks-widget',
  template: `
    <div class="tasks-container">
        <form class="tasks-input-form" 
          [formGroup]="tasksForm" 
          (keyup.enter)="onEnterKeyPress()">
          <textarea class="tasks-input-box"
            formControlName="tasks-input">
          </textarea>
          <div formArrayName="tasks" 
            class="tasks-list" 
            *ngFor="let taskControl of tasksArrayControl; let i = index"
            >
              <input 
                  type="checkbox" 
                  id="task" 
                  (input)="checkValue()"
                  [formControlName]="i">
              <label class="tasks-name">{{tasks[i]}}</label>
          </div>
        </form>
    </div>
  `,
  styleUrls: ['./widget.component.css'],
})
export class TasksWidgetComponent implements OnInit {
  tasksForm: FormGroup;
  tasks:Array<string> = [];
  console = console;
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.tasksForm = new FormGroup({
      'tasks-input': new FormControl(null),
      'tasks': new FormArray([])
    });
    this.tasks.map((task: any) => {
      const control = new FormControl(false);
      (<FormArray>this.tasksForm.get('tasks')).push(control);
    })
    this.cdRef.detectChanges();
  }

  get tasksArrayControl() {
    return (this.tasksForm?.get('tasks') as FormArray).controls;
  }

  onEnterKeyPress() {
    const tasks = this.tasksForm.get('tasks-input')?.value?.split(",");
    tasks.map((task: any) => {
      const control = new FormControl(false);
      (<FormArray>this.tasksForm.get('tasks')).push(control);
    })
    this.tasksForm.get('tasks-input')?.setValue(null);
    this.tasks = this.tasks.concat(tasks)
    this.console.log(this.tasks)
  }

  checkValue() {
    this.console.log((this.tasksForm?.get('tasks') as FormArray).controls);
    const arr = this.tasksArrayControl.filter(task => {
      return task.value === false;
    });
    this.tasksForm.get('tasks')?.setValue(arr);
    this.console.log(this.tasksForm);
  }
}