import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  template: `
    <h1>tasks</h1>
  `,
  styleUrls: ['./tasks.page.component.css']
})
export class TasksPageComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}