import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings',
  template: `
    <h1>settings</h1>
  `,
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}