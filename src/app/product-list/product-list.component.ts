import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../services/product-serives/product.service';

import { IProduct } from '../models/product-models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  private readonly minPosition = 20;
  private readonly maxPosition = 50

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      for (const product of products) {
        this.products.push({
          ProductID: product.ProductID,
          ProductName: product.ProductName,
          ProductCost: product.ProductCost,
          ProductDetails: product.ProductDetails,
          ProductAvailability: product.ProductAvailability,
          ImagePosition: this.getRandomImagePosition()
        });
      }
    }, error => {
      window.alert(error);
      this.router.navigate(["/home/"]);
    });
  }

  getRandomImagePosition() {
    return Math.floor(Math.random() * (this.maxPosition - this.minPosition) + this.minPosition) % 5;
  }
}
