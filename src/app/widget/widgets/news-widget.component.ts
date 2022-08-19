import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-widget',
  template: `
    <div [ngStyle]=" {'height': '250px', 'background-color': 'purple', 'margin-bottom': '20px'} ">
      news-widget
      adasdadas
      asdasdasdasdasdasd,adadaddasdsadasdasd
      desfdfsdfsdfsdfdsfsdfdsfsd
      sdfsdfsdfsdfsdfsdfsd
      sdfsdfsdfsdfsdfsdfsdsdfsdfsd
      sfsdfsdfsdfsdfs
    </div>
  `,
})
export class NewsWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}