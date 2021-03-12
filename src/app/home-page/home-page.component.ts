import { Component, OnInit } from '@angular/core';

import {ProductService} from '../services/product.service';

import {Product} from '../product';


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

  productList: Product[] = [];
  counting() {
    this.count++;
  }

  constructor(private productService: ProductService) {
    // this.productService = new ProductService();
  }
  getProducts(){
    this.productList = this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}
