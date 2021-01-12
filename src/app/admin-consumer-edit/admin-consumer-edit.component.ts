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

  editConsumer() {
    this.adminservices.editConsumer(this.consumer).subscribe((error) => {
      window.alert(error);
      this.router.navigate(['/admin-dashboard']);
    }, error => {
      window.alert(error);
      this.router.navigate(["/admin-dashboard/"]);
    }
    );
  }

  saveConsumer(consumer: IConsumer): void {
    this.consumer = consumer;
    this.editConsumer();
  }

  ngOnInit(): void {
    const UserName = this.route.snapshot.paramMap.get('id');
    this.getConsumerInfo(UserName);
  }
}
