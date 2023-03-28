import { Component, OnInit } from '@angular/core';
import {ProductDataSource} from './ProductDataSource';
import {ProductService} from './product.service';
import {AddProduct} from './addProduct';
import {LoginDataSource} from '../../login/login/loginDataSource';
import { ToastrService } from 'ngx-toastr';
import {Product} from "./Product";

@Component({
  selector: 'app-product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {
  public item = {color: 'light'};
  public productDataSource = ProductDataSource.getInstance();
  private loginDataSource = LoginDataSource.getInstance();
  public searchTerm: string = '';

  constructor(private productService: ProductService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
        this.productDataSource.productList = response;
        this.productDataSource.productList.push(new Product(12, 'Pinoccio', "pinoccio die staat.", 59.99, "https://images.marktplaats.com/api/v1/listing-mp-p/images/60/60a6611d-6ab3-4f2f-93a1-22648ba8590b?rule=ecg_mp_eps$_84",
          ['https://images.marktplaats.com/api/v1/listing-mp-p/images/89/8995562b-74b9-485f-873d-84944f67f83d?rule=ecg_mp_eps$_86',
            'https://images.marktplaats.com/api/v1/listing-mp-p/images/34/345523e3-94d9-4641-8d2b-bbaca7a57455?rule=ecg_mp_eps$_84',
            'https://images.marktplaats.com/api/v1/listing-mp-p/images/f4/f444d794-12d5-4d98-8ccf-60c9143746cc?rule=ecg_mp_eps$_86',
          ]))
      },
      (error) => {
        console.error('An error occurred, ', error);
      });
  }

  /*addProduct(id: number): void {
    if(this.loginDataSource.loggedIn()){
      this.toastr.success('Het product is toegevoegd in je mandje!', 'Succes');
    }
    if(this.loginDataSource.notLoggedIn()){
      this.toastr.warning('Je bent niet ingelogd!', 'Waarschuwing');
    }
    const add = new AddProduct(this.loginDataSource.user!.id, id);
    this.productService.addToCardProduct(add).subscribe((response) => {
      },
      (error) => {
        console.error('An error occurred, ', error);
      });

}*/

}
