import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminservicesService } from './../services/admin-services/adminservices.service';

import { IConsumer } from '../models/admin-models/iconsumer';

@Component({
  selector: 'app-admin-consumer-verify',
  templateUrl: './admin-consumer-verify.component.html',
  styleUrls: ['./admin-consumer-verify.component.css']
})
export class AdminConsumerVerifyComponent implements OnInit {
  consumerlist: IConsumer[] = [];

  constructor(private adminservices: AdminservicesService, private router: Router) { }

  ngOnInit(): void {
    this.adminservices.getUnverifiedConsumers().subscribe(data => {
      this.consumerlist = data;
    }, error => {
      window.alert(error);
      this.router.navigate(["/admin-dashboard/"]);
    })
  }
}
