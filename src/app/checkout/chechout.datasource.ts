import {Product} from '../product/product/Product';
import {CheckoutService} from './checkout.service';
import {Observable} from 'rxjs';
import {Cart} from './cart';


export class CheckoutDataSource {
  private constructor() { }
  private static instance: CheckoutDataSource;
  public productList: Product[] = [];


  public static getInstance(): CheckoutDataSource{
    if (!CheckoutDataSource.instance) {
      CheckoutDataSource.instance = new CheckoutDataSource();
    }

    return CheckoutDataSource.instance;
  }

}
