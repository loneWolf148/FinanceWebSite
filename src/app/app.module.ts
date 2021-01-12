import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminConsumerVerifyComponent } from './admin-consumer-verify/admin-consumer-verify.component';
import { AdminConsumerEditComponent } from './admin-consumer-edit/admin-consumer-edit.component';
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminConsumerDeleteComponent } from './admin-consumer-delete/admin-consumer-delete.component';
import { AdminVerifyComponent } from './admin-verify/admin-verify.component';
import { ConsumerLoginComponent } from './consumer-login/consumer-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { AdminservicesService } from './services/admin-services/adminservices.service';
import { AdminLoginService } from './services/login-services/admin-login-services/admin-login.service';
import { ConsumerLoginService } from './services/login-services/consumer-login-services/consumer-login.service';
import { OrderService } from './services/product-serives/order.service';
import { ProductService } from './services/product-serives/product.service';
import { ConsumerServiceService } from './services/consumer-services/consumer-service.service';
import { RegisterservicesService } from './services/register-serivces/registerservices.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ProductOrderComponent,
    HomeComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminConsumerVerifyComponent,
    AdminConsumerEditComponent,
    ConsumerDashboardComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    AdminConsumerDeleteComponent,
    AdminVerifyComponent,
    ConsumerLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AdminservicesService,
    AdminLoginService,
    ConsumerLoginService,
    ProductService,
    OrderService,
    ConsumerServiceService,
    RegisterservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
