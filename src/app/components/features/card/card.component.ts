import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  template: `
  <div class="card-container">
    <img class="card-icon"[src]="this.imgSrc" />
    <h2>{{this.categoryName}}</h2>
  </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() imgSrc:string;
  @Input() categoryName:string;
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

  }

}