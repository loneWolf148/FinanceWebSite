import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConsumerLoginService } from '../services/login-services/consumer-login-services/consumer-login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  userName: string = null;
  emailAddress: string = null;

  constructor(private consumerLoginService: ConsumerLoginService, private router: Router) { }

  ngOnInit(): void { }

  forgetPassword(): void {
    this.consumerLoginService.ForgetPassword(this.userName, this.emailAddress).subscribe(response => {
      window.alert(response);
      this.router.navigate(["/consumer-login/"]);
    }, error => {
      window.alert(error);
    })
  }
}
