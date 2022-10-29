import { Component, OnInit } from '@angular/core';

export const images = [
  {
    class: "home-icon",
    url: '../../../assets/icons8-home-grey.png',
    path: '/'
  },
  {
    class: "calender-icon",
    url: '../../../assets/icons8-calendar-grey.png',
    path: '/calender'
  },
  {
    class: "library-icon",
    url: '../../../assets/icons8-book-shelf-grey.png',
    path: '/library'
  },
  {
    class: "stocks-icon",
    url: '../../../assets/icons8-stocks-grey.png',
    path: 'stocks'
  },
  {
    class: "list-icon",
    url: '../../../assets/icons8-list-grey.png',
    path: '/list'
  },
  {
    class: "settings-icon",
    url: '../../../assets/icons8-engineering-grey.png',
    path: '/settings'
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
