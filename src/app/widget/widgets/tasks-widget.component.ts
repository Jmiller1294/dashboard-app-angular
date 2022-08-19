import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-widget',
  template: `
    <div class="tasks-container">
        <h2>Tasks</h2>
        <input type="text" />
        <ul>
          <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1"> I have a bike</label><br>  
          </li>
          <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1"> I have a bike</label><br>
          </li>
          <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1"> I have a bike</label><br>  
          </li>
          <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1"> I have a bike</label><br>  
          </li>
          <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1"> I have a bike</label><br>  
          </li>
        </ul>
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class TasksWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}