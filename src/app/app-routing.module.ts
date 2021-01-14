import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminConsumerDeleteComponent } from './admin-consumer-delete/admin-consumer-delete.component';
import { AdminConsumerEditComponent } from './admin-consumer-edit/admin-consumer-edit.component';
import { AdminConsumerVerifyComponent } from './admin-consumer-verify/admin-consumer-verify.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminVerifyComponent } from './admin-verify/admin-verify.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ConsumerLoginComponent } from './consumer-login/consumer-login.component';

import { AdminAuthGuard } from './guards/admin-auth.guard';
import { ConsumerAuthGuard } from './guards/consumer-auth.guard';

const routes: Routes = [
  { path: "admin-verify/:id", component: AdminVerifyComponent, canActivate: [AdminAuthGuard] },
  { path: "admin-consumer-delete/:id", component: AdminConsumerDeleteComponent, canActivate: [AdminAuthGuard] },
  { path: "admin-consumer-edit/:id", component: AdminConsumerEditComponent, canActivate: [AdminAuthGuard] },
  { path: "admin-consumer-verify", component: AdminConsumerVerifyComponent, canActivate: [AdminAuthGuard] },
  { path: "admin-dashboard", component: AdminDashboardComponent, canActivate: [AdminAuthGuard] },

  { path: "admin-login", component: AdminLoginComponent },
  { path: "consumer-login", component: ConsumerLoginComponent },

  { path: "home", component: HomeComponent },

  { path: "change-password/:id", component: ChangePasswordComponent, canActivate: [ConsumerAuthGuard] },
  { path: "forget-password", component: ForgetPasswordComponent },

  { path: "consumer-dashboard/:id", component: ConsumerDashboardComponent, canActivate: [ConsumerAuthGuard] },

  { path: "product-order/:id/:position", component: ProductOrderComponent, canActivate: [ConsumerAuthGuard] },
  { path: "product-list", component: ProductListComponent, canActivate: [ConsumerAuthGuard] },

  { path: "register", component: RegisterComponent },

  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
