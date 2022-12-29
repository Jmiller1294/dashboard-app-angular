import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import WidgetsService from 'src/app/services/widgets.service';
import { Todo } from 'src/app/models/todo.model';

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
          >
            <div *ngFor="let taskControl of tasksArrayControl; let i = index">
              <input 
                type="checkbox" 
                class="checkbox"
                (change)="checkValues()"
                [formControlName]="i">
                <label class="tasks-name" for="">{{tasks[i]?.text}}</label>
            </div>
          </div>
        </form>
    </div>
  `,
  styleUrls: ['./widget.component.css'],
})
export class TasksWidgetComponent implements OnInit {
  tasksForm: FormGroup;
  tasks:Array<Todo> = [];
  console = console;
  isChecked = true;

  constructor(private cdRef: ChangeDetectorRef, private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.console.log("init")
    this.tasksForm = new FormGroup({
      'tasks-input': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'tasks': new FormArray([])
    });
    this.tasks.map((task: any) => {
      const control = new FormControl(task);
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
    });
    this.tasksForm.get('tasks-input')?.setValue(null);
    this.widgetsService.addTodo(tasks);
  }

  checkValues() {
    //remove tasks that are not checked
    (<FormArray>this.tasksForm.get('tasks')).value.map( (val: boolean, index: number) => {
      if(val === true) {
        this.tasks.splice(index, 1);
      }
    })

    //clear tasks form array
    (<FormArray>this.tasksForm.get('tasks')).clear();

    //create form controls for tasks array
    this.tasks.map((task: any) => {
      const control = new FormControl(false);
      (<FormArray>this.tasksForm.get('tasks')).push(control);
    });
    this.console.log('tasks form', this.tasksForm);
  }
}