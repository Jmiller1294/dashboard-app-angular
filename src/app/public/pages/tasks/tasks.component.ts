import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  template: `
    <h1>tasks</h1>
  `,
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}