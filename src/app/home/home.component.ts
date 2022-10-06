import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges 
} from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements 
OnInit, 
OnChanges, 
AfterContentInit,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input()
  data: any;

  constructor() { 
    console.log('constructor called!');
  }
  ngOnDestroy(): void {
  }
  ngAfterViewChecked(): void {
  }
  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
  }

  ngOnInit(): void {
    console.log('ngOninit called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  clicked(data: string) {
    console.log(data);
  }

}
