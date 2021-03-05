import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  count: number = 0;
  choice : number = 0;
  text : string = 'Select the section you are interested in' ;
  msg =  'Sale Top sales of the week month';

  counting() {
    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
