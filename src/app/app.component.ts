import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminLoginService } from './services/login-services/admin-login-services/admin-login.service';
import { ConsumerLoginService } from './services/login-services/consumer-login-services/consumer-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly webSiteTitle: string = "LT Fincorp";

  constructor(private adminLoginService: AdminLoginService,
    private consumerLoginService: ConsumerLoginService,
    private router: Router) { }

  isConsumerAuthenticated(): boolean {
    return this.consumerLoginService.isAuthenticated;
  }

  isAdminAuthenticated(): boolean {
    return this.adminLoginService.isAuthenticated;
  }

  isNoAuthenticated(): boolean {
    return !(this.adminLoginService.isAuthenticated || this.consumerLoginService.isAuthenticated);
  }

  getConsumerIdentity(): string {
    return this.consumerLoginService.authenticatedConsumerIdentity;
  }

  getConsumerName(): string {
    return this.consumerLoginService.authenticatedConsumerName;
  }

  getAdminName(): string {
    return this.adminLoginService.authenticatedAdminName;
  }

  adminSignOut(): void {
    this.adminLoginService.Logout();
    this.router.navigate(["/home/"]);
  }

  consumerSignOut(): void {
    this.consumerLoginService.logout();
    this.router.navigate(["/home/"]);
  }
}
