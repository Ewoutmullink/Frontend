import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { ProductComponent } from './product/product/Product.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {RegisterService} from './register/register.service';
import {LoginService} from './login/login/login.service';
import { AppRoutingModule } from './app-routing.module';
import {ProductService} from "./product/product/product.service";
import {CheckoutService} from "./checkout/checkout.service";
import { AdminComponent } from './admin/admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {MatButtonModule} from "@angular/material/button";
import { CheckDialogComponent } from './admin/check-dialog/check-dialog.component';
import {HttpService} from "./service/HttpService";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  HeaderModule, ImgModule,
  ModalModule,
  NavModule, SidebarModule
} from "@coreui/angular";
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    AdminComponent,
    ProductFormComponent,
    CheckDialogComponent,
    HomeComponent,
    ProductPageComponent,
    SearchFilterPipe,
    TermsComponent
  ],
  entryComponents: [ProductFormComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormModule,
    ButtonModule,
    ToastrModule.forRoot(),
    CardModule,
    ModalModule,
    HeaderModule,
    GridModule,
    NavModule,
    DropdownModule,
    SidebarModule,
    ImgModule,
  ],
  providers: [
    RegisterService,
    LoginService,
    ProductService,
    CheckoutService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
