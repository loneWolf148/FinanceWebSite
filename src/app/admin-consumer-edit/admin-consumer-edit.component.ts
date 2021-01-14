import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminservicesService } from '../services/admin-services/adminservices.service';

import { IConsumer } from '../models/admin-models/iconsumer';

@Component({
  selector: 'app-admin-consumer-edit',
  templateUrl: './admin-consumer-edit.component.html',
  styleUrls: ['./admin-consumer-edit.component.css']
})
export class AdminConsumerEditComponent implements OnInit {
  consumer: IConsumer = {
    UserName: null,
    Name: null,
    Address: null,
    PhoneNumber: null,
    Email: null
  };

  constructor(private adminservices: AdminservicesService, private router: Router, private route: ActivatedRoute) { }

  getConsumerInfo(UserName: string) {
    this.adminservices.getConsumer(UserName).subscribe((data: IConsumer) => {
      this.consumer = data;
    })
  }

  saveConsumer(): void {
    console.log(this.consumer);
    this.adminservices.editConsumer(this.consumer).subscribe((_) => {
      this.router.navigate(['/admin-dashboard']);
    }, error => {
      window.alert(error);
      this.router.navigate(["/admin-dashboard/"]);
    }
    );
  }

  ngOnInit(): void {
    const UserName = this.route.snapshot.paramMap.get('id');
    this.getConsumerInfo(UserName);
  }
}
