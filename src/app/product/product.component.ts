import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { IProduct } from '../models/product-models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private router: Router) {}

  ngOnInit(): void { }

  buyProduct(): void {
    this.router.navigate([`/product-order/${this.product.ProductID}/${this.product.ImagePosition}`]);
  }
}
