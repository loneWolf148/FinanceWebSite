import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminLoginService } from '../services/login-services/admin-login-services/admin-login.service';

import { IUser } from '../models/login-models/IUser';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  readonly model: IUser = {
    UserName: null,
    Password: null
  };

  constructor(private adminLoginService: AdminLoginService, private router: Router) { }

  ngOnInit(): void { }

  adminlogin() {
    this.adminLoginService.Login(this.model).subscribe(admin => {
      console.log(admin);
      window.alert("Logged in Successfully");
      this.router.navigate(["/admin-dashboard"]);
    }, error => {
      window.alert(error);
    });
  }

}
