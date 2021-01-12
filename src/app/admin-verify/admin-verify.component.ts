import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdminservicesService } from './../services/admin-services/adminservices.service';

@Component({
  selector: 'app-admin-verify',
  templateUrl: './admin-verify.component.html',
  styleUrls: ['./admin-verify.component.css']
})
export class AdminVerifyComponent implements OnInit {
  userName: string;

  constructor(private adminservices: AdminservicesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userName = this.activatedRoute.snapshot.paramMap.get("id");
  }

  saveconsumer(): void {
    this.adminservices.getConsumer(this.userName).subscribe(consumer => {
      this.adminservices.verifyConsumer(consumer).subscribe(result => {
        window.alert(result);
        this.router.navigate(["/admin-dashboard/"]);
      }, error => {
        window.alert(error);
        this.router.navigate(["/admin-dashboard/"]);
      })
    }, error => {
      window.alert(error);
      this.router.navigate(["/admin-dashboard/"]);
    })
  }

  ngOnInit(): void { }
}
