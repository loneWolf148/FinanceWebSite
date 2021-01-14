import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConsumerLoginService } from '../services/login-services/consumer-login-services/consumer-login.service';

import { IChangePassword } from '../models/login-models/IChangePassword';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  readonly password: IChangePassword = {
    OldPassword: null,
    NewPassword: null
  };
  userName: string;

  constructor(private consumerLoginService: ConsumerLoginService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.consumerLoginService.authenticatedConsumerIdentity;
  }

  changePassword(): void {
    this.consumerLoginService.ChangePassword(this.password).subscribe(response => {
      window.alert(response);
      this.consumerLoginService.logout();
      this.router.navigate(["/consumer-login/"]);
    }, error => {
      window.alert(error);
    })
  }
}