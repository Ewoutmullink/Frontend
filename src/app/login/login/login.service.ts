import {HttpService} from '../../service/HttpService';
import {LoginDataSource} from './loginDataSource';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class LoginService{

  private loginDataSource = LoginDataSource.getInstance();

  constructor(private httpService: HttpService) {
  }

  login(): Observable<any>{
    return this.httpService.post('users/login', this.loginDataSource.getAuth());
  }
}
