import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { ConsumerLoginService } from '../services/login-services/consumer-login-services/consumer-login.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerAuthGuard implements CanActivate {
  constructor(private consumerLoginService: ConsumerLoginService, private router: Router) { }

  canActivate(): boolean {
    const authenticated = this.consumerLoginService.isAuthenticated;
    if (!authenticated) {
      this.router.navigate(["consumer-login"]);
    }
    return authenticated;
  }
}
