import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpService} from "../service/HttpService";
import {Product} from "../product/product/Product";

@Injectable()
export class CheckoutService{


  constructor(private httpService: HttpService) {
  }

  deleteProduct(userId: string, productId: number): Observable<any>{
    return this.httpService.delete('product/' + userId + "/products", productId);
  }

  getCartOfUser(username: string): Observable<any>{
    return this.httpService.get('users', username);
  }

  createOrder(list: Product[]){
    return this.httpService.post('orders', list)
  }
}
