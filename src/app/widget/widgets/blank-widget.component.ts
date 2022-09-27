import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blank-widget',
  template: `
    <div class="blank-container">
     <span class="add-widget-button">+</span>
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class BlankWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}