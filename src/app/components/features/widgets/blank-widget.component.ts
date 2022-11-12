import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blank-widget',
  template: `
    <div class="blank-container">
     <button class="add-widget-button">+</button>
    </div>
  `,
  styleUrls: ['./widget.component.css'],
})
export class BlankWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}