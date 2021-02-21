import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kids-page',
  templateUrl: './kids-page.component.html',
  styleUrls: ['./kids-page.component.scss']
})
export class KidsPageComponent implements OnInit {
  @Output() countBuying = new EventEmitter();
  Buying(): void {
    alert('The clothes was buyed');
    this.countBuying.emit();
  }

  constructor() { }
  ngOnInit(): void {
  }

}
