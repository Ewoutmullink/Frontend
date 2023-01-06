import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {RegisterComponent} from "./register/register.component";
import {ProductComponent} from "./product/product/Product.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {AdminComponent} from "./admin/admin.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', component: ProductComponent},
  { path: 'cart', component: CheckoutComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
