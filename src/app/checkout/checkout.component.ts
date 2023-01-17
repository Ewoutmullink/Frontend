import { Component, OnInit } from '@angular/core';
import {CheckoutDataSource} from './chechout.datasource';
import {LoginDataSource} from '../login/login/loginDataSource';
import {ProductDataSource} from '../product/product/ProductDataSource';
import {Router} from '@angular/router';
import {CheckoutService} from './checkout.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public totalAmount = 0;
  public checkoutDataSource = CheckoutDataSource.getInstance();
  public loginDataSource = LoginDataSource.getInstance();
  public productDataSource = ProductDataSource.getInstance();
  public item = { color: 'dark' };
  constructor(private router: Router, private checkoutService: CheckoutService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.checkoutService.getCartOfUser(this.loginDataSource.user?.id!).subscribe((response) => {
        this.checkoutDataSource.productList = response.products;
      },
      (error) => {
        console.error('An error occurred, ', error);
      });
    this.total();
  }

  total(): void{
    this.totalAmount = 0;
    this.checkoutDataSource.productList.forEach(value => {
      this.totalAmount = Number(value.price) + Number(this.totalAmount);
    });
  }

  order(): void{
    this.checkoutDataSource.productList.forEach(product => {
      this.checkoutService.deleteProduct(this.loginDataSource.user?.id!, product.id).subscribe((response) => {
        },
        (error: any) => {
          console.error('An error occurred, ', error);
        });
    })
    this.router.navigate(['']);
    this.toastr.success('Bedankt voor je bestelling!', 'Besteld')
  }

  deleteProduct(productId: number) {
    this.checkoutDataSource.productList.filter(function(product){
      return product.id != productId;
    });
    this.toastr.error('Het product is verwijderd uit je mandje!', 'Verwijderd');
    this.checkoutService.deleteProduct(this.loginDataSource.user?.id!, productId).subscribe((response) => {
        this.ngOnInit();
      },
      (error: any) => {
        console.error('An error occurred, ', error);
      });

  }
}
