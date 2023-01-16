import {HttpService} from '../service/HttpService';
import {RegisterDatasource} from './register.datasource';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class RegisterService{

  private registerDataSource = RegisterDatasource.getInstance();

  constructor( private httpService: HttpService) {
  }

  register(): Observable<any>{
    return this.httpService.post('users', this.registerDataSource.userRegister);
  }
}
