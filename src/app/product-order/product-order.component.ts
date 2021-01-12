import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product-serives/product.service';
import { OrderService } from '../services/product-serives/order.service';

import { IProduct } from '../models/product-models/IProduct';
import { IScheme } from '../models/product-models/IScheme';
import { IOrder } from '../models/product-models/IOrder';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {
  schemes: IScheme[] = [];
  selectedSchemeNo: number = -1;
  schemeEmiCost: number = null;

  selectedProductId: number;
  selectedProduct: IProduct = {
    ProductID: null,
    ProductName: null,
    ProductCost: null,
    ProductDetails: null,
    ProductAvailability: null
  };

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.selectedProductId = + this.activateRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.productService.getProduct(this.selectedProductId).subscribe(product => {
      this.selectedProduct = product;
    }, error => {
      window.alert(error);
      this.router.navigate(["/product-list/"]);
    });

    this.orderService.getEmiSchemes().subscribe(schemes => {
      this.schemes = schemes;
      if (this.schemes.length > 0) {
        this.selectedSchemeNo = this.schemes[0].SchemeNo;
        this.getMonthlyEmi();
      }
    }, error => {
      window.alert(error);
      this.router.navigate(["/product-list/"]);
    });
  }

  getMonthlyEmi(): void {
    if (this.selectedSchemeNo !== -1) {
      this.orderService.getMonthlyEmi(this.selectedProductId, this.selectedSchemeNo).subscribe(emiCost => {
        this.schemeEmiCost = emiCost;
      }, (error) => {
        window.alert(error);
        this.router.navigate(["/product-list/"]);
      })
    }
  }

  placeOrder() {
    const newOrder: IOrder = {
      ProductID: this.selectedProductId,
      UserName: "user1",
      SchemeNo: this.selectedSchemeNo
    };

    this.orderService.placeOrder(newOrder).subscribe(message => {
      window.alert(message);
      this.router.navigate(["/product-list/"])
    }, (error) => {
      window.alert(error);
      this.router.navigate(["/product-list/"]);
    });
  }
}
