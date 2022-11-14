import { Binary } from "@angular/compiler";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LibraryService } from "src/app/services/library.service";

@Component({
  selector: 'modal',
  template: `
    <div class="backdrop"></div>
    <div class="modal-box">
      <div class="modal-box-actions-top">
        <button class="close-btn" (click)="onClose()">X</button>
      </div>
      <ng-content></ng-content>
      <div class="modal-box-actions-bottom">
        <button class="cancel-btn" (click)="onClose()">Cancel</button>
        <button class="submit-btn" (click)="onClick()">{{buttonText}}</button>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  @Output() close = new EventEmitter<void>();
  @Output() clicked = new EventEmitter<void>();
  @Input() buttonText: string;
  

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    
  }

  onClose() {
    this.close.emit();
  }

  onClick() {
    this.clicked.emit();
  }

  
}