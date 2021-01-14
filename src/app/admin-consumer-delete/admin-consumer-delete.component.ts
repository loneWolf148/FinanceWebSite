import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminservicesService } from '../services/admin-services/adminservices.service';

@Component({
  selector: 'app-admin-consumer-delete',
  templateUrl: './admin-consumer-delete.component.html',
  styleUrls: ['./admin-consumer-delete.component.css']
})
export class AdminConsumerDeleteComponent implements OnInit {

  constructor(private adminservice: AdminservicesService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (window.confirm("Are you sure to delete this Customer")) {
      const UserName = this.ActivatedRoute.snapshot.paramMap.get("id");
      this.adminservice.deleteConsumer(UserName).subscribe(data => {
        window.alert(data);
        this.router.navigate(["/admin-dashboard/"]);
      }, (error) => {
        window.alert(error);
        this.router.navigate(["/admin-dashboard/"]);
      });
    }
    else {
      this.router.navigate(["/admin-dashboard/"]);
    }
  }
}
