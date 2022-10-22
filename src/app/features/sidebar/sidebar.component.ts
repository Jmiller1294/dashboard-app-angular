import { Component, OnInit } from '@angular/core';

export const images = [
  {
    class: "home-icon",
    url: '../../../assets/icons8-home-grey.png'
  },
  {
    class: "calender-icon",
    url: '../../../assets/icons8-calendar-grey.png'
  },
  {
    class: "library-icon",
    url: '../../../assets/icons8-book-shelf-grey.png'
  },
  {
    class: "stocks-icon",
    url: '../../../assets/icons8-stocks-grey.png'
  },
  {
    class: "list-icon",
    url: '../../../assets/icons8-list-grey.png'
  },
  {
    class: "settings-icon",
    url: '../../../assets/icons8-engineering-grey.png'
  },
]


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
images: any = images;
imageUrl: any;
hover: boolean = false;

  constructor() {}

  ngOnInit(): void {}

}
