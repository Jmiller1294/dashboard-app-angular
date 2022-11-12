import { Component, OnInit } from '@angular/core';
import WidgetsService from '../../../services/widgets.service';

@Component({
  selector: 'app-random-fact-widget',
  template: 
  `
    <div class="facts-container">
      Random Fact Widget!
    </div>
  `,
  styleUrls: ['./widget.component.css'],
})
export class RandomFactWidgetComponent implements OnInit {

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    // this.widgetsService.fetchRandomFactData()
    //   .subscribe()
  }

}
