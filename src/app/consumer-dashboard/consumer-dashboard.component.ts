import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConsumerServiceService } from '../services/consumer-services/consumer-service.service';

import { ICard } from '../models/consumer-models/icard';
import { ICredit } from '../models/consumer-models/icredit';
import { IPurchasedProducts } from '../models/consumer-models/ipurchasedproducts';
import { IRecentTransactions } from '../models/consumer-models/irecenttransactions';

@Component({
  selector: 'app-consumer-dashboard',
  templateUrl: './consumer-dashboard.component.html',
  styleUrls: ['./consumer-dashboard.component.css']
})
export class ConsumerDashboardComponent implements OnInit {
  public username: string;
  getcard: ICard;
  getcredit: ICredit;
  getpurchasedproducts: IPurchasedProducts;
  getrecenttransactions: IRecentTransactions;

  constructor(private consumerservice: ConsumerServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    const username = this.activatedRoute.snapshot.paramMap.get("id");
    this.username = username;
  }

  getCard(username: string) {
    this.consumerservice.GetCardDetails(username).subscribe((card: ICard) => {
      this.getcard = card;
      console.log(this.getcard);
    }, error => {
      window.alert(error);
      this.router.navigate(["/home/"]);
    })
  }

  getCredit(username: string) {
    this.consumerservice.GetCreditDetails(username).subscribe((credit: ICredit) => {
      this.getcredit = credit;
      console.log(this.getcredit);
    }, error => {
      window.alert(error);
      this.router.navigate(["/home/"]);
    })
  }

  getProducts(username: string) {
    this.consumerservice.GetPurchasedProducts(username).subscribe((product: IPurchasedProducts) => {
      this.getpurchasedproducts = product;
      console.log(this.getpurchasedproducts);
    }, error => {
      window.alert(error);
      this.router.navigate(["/home/"]);
    })
  }

  getTransactions(username: string) {
    this.consumerservice.GetRecentTransactions(username).subscribe((transaction: IRecentTransactions) => {
      this.getrecenttransactions = transaction;
      console.log(this.getrecenttransactions);
    }, error => {
      window.alert(error);
      this.router.navigate(["/home/"]);
    })
  }

  ngOnInit(): void {
    this.getCard(this.username);
    this.getCredit(this.username);
    this.getProducts(this.username);
    this.getTransactions(this.username);
  }
}
