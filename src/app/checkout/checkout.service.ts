import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpService} from "../service/HttpService";

@Injectable()
export class CheckoutService{


  constructor(private httpService: HttpService) {
  }

  deleteProduct(userId: string, productId: number): Observable<any>{
    console.log('product/' + userId + "/products" + productId)
    return this.httpService.delete('product/' + userId + "/products", productId);
  }

  getCartOfUser(username: string): Observable<any>{
    return this.httpService.get('users', username);
  }
}
