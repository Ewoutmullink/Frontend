import { Component, OnInit } from '@angular/core';
import {ProductDataSource} from './ProductDataSource';
import {ProductService} from './product.service';
import {AddProduct} from './addProduct';
import {LoginDataSource} from '../../login/login/loginDataSource';

@Component({
  selector: 'app-product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {
  public item = { color: 'dark' };
  public productDataSource = ProductDataSource.getInstance();
  private loginDataSource = LoginDataSource.getInstance();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
        this.productDataSource.productList = response;
        console.log(response)
      },
      (error) => {
        console.error('An error occurred, ', error);
      });
  }

  addProduct(id: number): void {
    console.log(id);
    const add = new AddProduct(this.loginDataSource.user!.id, id);
    this.productService.addProduct(add).subscribe((response) => {
      },
      (error) => {
        console.error('An error occurred, ', error);
      });
  }
}
