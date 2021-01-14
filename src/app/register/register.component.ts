import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterservicesService } from '../services/register-serivces/registerservices.service';

import { IConsumer } from '../models/register-models/iconsumer';
import { ICard } from '../models/register-models/icard';
import { IBank } from '../models/register-models/IBank';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  con: IConsumer = {
    UserName: null,
    Name: null,
    Email: null,
    PhoneNumber: null,
    Password: null,
    AccountNo: null,
    IFSC: null,
    Address: null,
    CardTypeNo: null,
    DateofBirth: null
  };

  cardTypes: ICard[] = [];
  banks: IBank[] = [];

  constructor(private registerservice: RegisterservicesService, private router: Router) { }

  saveConsumer(con: IConsumer): void {
    this.registerservice.Register(this.con).subscribe((data) => {
      console.log(`Card No is ${this.con.CardTypeNo}`);
      window.alert(data);
      this.router.navigate(['/home/']);
    }, error => {
      window.alert(error);
    });
  }

  ngOnInit(): void {
    this.registerservice.GetBanks().subscribe(banks => {
      this.banks = banks;
    }, error => {
      window.alert(error);
      this.router.navigate(["/home/"]);
    });

    this.registerservice.GetCardTypes().subscribe(cards => {
      this.cardTypes = cards;
    }, error => {
      window.alert(error);
      this.router.navigate(["/home/"]);
    });
  }
}
