import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { AdminLoginService } from '../services/login-services/admin-login-services/admin-login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private adminLoginService: AdminLoginService, private router: Router) { }

  canActivate(): boolean {
    const authtenticated = this.adminLoginService.isAuthenticated;
    if (!authtenticated) {
      this.router.navigate(["/admin-login/"]);
    }
    return authtenticated;
  }
}
