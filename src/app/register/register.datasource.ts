import {Auth} from '../login/login/auth';
import {User} from './user';

export class RegisterDatasource{
  private static instance: RegisterDatasource;

  public userRegister: User = new User('','','','','','','','guest')

  public static getInstance(): RegisterDatasource {
    if (!RegisterDatasource.instance) {
      RegisterDatasource.instance = new RegisterDatasource();
    }

    return RegisterDatasource.instance;
  }
}
