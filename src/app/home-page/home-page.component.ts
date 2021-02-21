import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  count: number = 0;

  counting() {
    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
