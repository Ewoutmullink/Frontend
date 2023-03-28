import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {RegisterComponent} from "./register/register.component";
import {ProductComponent} from "./product/product/Product.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./home/home.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {TermsComponent} from "./terms/terms.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', component: ProductComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cart', component: CheckoutComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'product/:id', component: ProductPageComponent},
  { path: 'terms', component: TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
