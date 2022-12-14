import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dashboard';

  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
  }

}
