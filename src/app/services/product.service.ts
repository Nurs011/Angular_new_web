import {Component, Injectable, OnInit} from '@angular/core';
import {LoggingService} from "./logging.service";
import {Product} from '../product';

@Injectable()
export class ProductService {

  constructor(
    private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    let productList: Product[];
    productList = [
      new Product('Jeans', 55, 15000),
      new Product('Cardigan', 50, 10000),
      new Product('Jamper', 42, 19000),
      new Product('Hoodi', 36, 7000),
    ];

    this.loggingService.log('List of products: ' + productList);

    return productList;
  }
}

export class ServicesComponent {
}
