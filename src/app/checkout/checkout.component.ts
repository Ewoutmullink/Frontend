import { Component, OnInit } from '@angular/core';
import {CheckoutDataSource} from './chechout.datasource';
import {LoginDataSource} from '../login/login/loginDataSource';
import {ProductDataSource} from '../product/product/ProductDataSource';
import {Router} from '@angular/router';
import {CheckoutService} from './checkout.service';

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
  constructor(private router: Router, private checkoutService: CheckoutService) { }
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
    this.productDataSource.productList.forEach(value => {
      this.totalAmount = value.price;
    });
  }

  order(): void{
  //   this.checkoutService.resetCart(this.loginDataSource.user.username).subscribe((response) => {
  //
  //     },
  //     (error: any) => {
  //       console.error('An error occurred, ', error);
  //     });
  //   this.router.navigate(['']);
  }
}
