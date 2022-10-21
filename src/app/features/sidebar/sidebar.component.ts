import { Component, OnInit } from '@angular/core';

export const images = [
  '../../../assets/icons8-home-50.png',
  '../../../assets/icons8-calendar-40.png',
  '../../../assets/icons8-technology-40.png',
  '../../../assets/icons8-tidy-shelf-40.png',
  '../../../assets/icons8-stocks-40 (1).png',
  '../../../assets/icons8-stormy-weather-40.png',
  '../../../assets/icons8-settings-40.png'
]

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
images: any = images;

  constructor() { }

  ngOnInit(): void {}

}
