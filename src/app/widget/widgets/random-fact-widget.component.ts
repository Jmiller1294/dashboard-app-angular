import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-fact-widget',
  template: 
  `
    <div class="facts-container">
      Random Fact Widget!
    </div>
  `,
  styleUrls: ['../widget.component.css'],
})
export class RandomFactWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
