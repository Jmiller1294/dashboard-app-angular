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

@Component({
  selector: 'home-page',
  templateUrl: './home.page.component.html',
})
export class HomePageComponent implements 
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

}
