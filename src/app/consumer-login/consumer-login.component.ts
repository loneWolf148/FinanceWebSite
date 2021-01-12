import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConsumerLoginService } from '../services/login-services/consumer-login-services/consumer-login.service';

import { IUser } from '../models/login-models/IUser';

@Component({
  selector: 'app-consumer-login',
  templateUrl: './consumer-login.component.html',
  styleUrls: ['./consumer-login.component.css']
})
export class ConsumerLoginComponent implements OnInit {
  readonly model: IUser = {
    UserName: null,
    Password: null
  };

  constructor(private consumerLoginService: ConsumerLoginService, private router: Router) { }

  ngOnInit(): void { }

  userlogin() {
    this.consumerLoginService.Login(this.model).subscribe(user => {
      window.alert("Loggin in Successfully");
      this.router.navigate(["/product-list/"]);
    }, error => {
      window.alert(error);
    });
  }
}
