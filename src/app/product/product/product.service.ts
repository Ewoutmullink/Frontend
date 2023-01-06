import {HttpService} from '../../service/HttpService';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { ProductDataSource } from './ProductDataSource';
import {AddProduct} from './addProduct';
import {LoginDataSource} from "../../login/login/loginDataSource";
import { Product } from './Product';

@Injectable()
export class ProductService {

  private productDataSource = ProductDataSource.getInstance();

  constructor(private httpService: HttpService) {
  }

  getProducts(): Observable<any> {
    return this.httpService.getAll('product');
  }


  addProduct(add: AddProduct): Observable<any> {
    let product = this.productDataSource.productList.find(p => p.id == add.productId)
    console.log(product)
    return this.httpService.post('product/card/' + add.id +'/', product);
  }
}
