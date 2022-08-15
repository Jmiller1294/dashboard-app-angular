import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-widget',
  template: `
    <div [ngStyle]=" {'height': '300px', 'background-color': 'purple', 'margin-bottom': '20px' } ">
      tasks-widget
      adasdadas
      asdasdasdasdasdasd,adadaddasdsadasdasd
    </div>
  `,
})
export class TasksWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}