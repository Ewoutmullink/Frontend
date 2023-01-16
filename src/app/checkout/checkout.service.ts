import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpService} from "../service/HttpService";

@Injectable()
export class CheckoutService{


  constructor(private httpService: HttpService) {
  }

  resetCart(username: string): Observable<any>{
    return this.httpService.delete('cart', username);
  }

  getCartOfUser(username: string): Observable<any>{
    return this.httpService.get('users', username);
  }
}
