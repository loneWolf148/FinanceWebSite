import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminservicesService } from './../services/admin-services/adminservices.service';

import { IConsumer } from '../models/admin-models/iconsumer';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  consumerlist: IConsumer[] = [];

  constructor(private adminservice: AdminservicesService, private router: Router) { }

  ngOnInit(): void {
    this.adminservice.getVerifiedConsumers().subscribe(data => {
      this.consumerlist = data;
    }, (error) => {
      window.alert(error);
      this.router.navigate(["/home/"]);
    })
  }

  deductEmi() {
    this.adminservice.deductEmi().subscribe(response => {
      window.alert(response);
    }, error => {
      window.alert(error);
    });
  }
}
