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

const routes: Routes = [
  { path: "admin-verify/:id", component: AdminVerifyComponent },
  { path: "admin-consumer-delete/:id", component: AdminConsumerDeleteComponent },
  { path: "admin-consumer-edit/:id", component: AdminConsumerEditComponent },
  { path: "admin-consumer-verify", component: AdminConsumerVerifyComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },

  { path: "admin-login", component: AdminLoginComponent },
  { path: "consumer-login", component: ConsumerLoginComponent },

  { path: "home", component: HomeComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "forget-password", component: ForgetPasswordComponent },

  { path: "consumer-dashboard/:id", component: ConsumerDashboardComponent },

  { path: "product-order/:id", component: ProductOrderComponent },
  { path: "product-list", component: ProductListComponent },

  { path: "register", component: RegisterComponent },
  
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
