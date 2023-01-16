import {Auth} from './auth';
import {User} from '../../register/user';

export class LoginDataSource {

  private constructor() { }
  private static instance: LoginDataSource;

  public auth: Auth = new Auth("", "");
  public user: User | undefined;
  public static getInstance(): LoginDataSource {
    if (!LoginDataSource.instance) {
      LoginDataSource.instance = new LoginDataSource();
    }

    return LoginDataSource.instance;
  }

  getAuth(): Auth{
    return this.auth;
  }

  loggedIn(): boolean{
    return this.user !== undefined;
  }

  isAdmin(): boolean{
    return this.user?.role == "admin";
  }

  notLoggedIn(): boolean{
    return this.user == null;
  }
}
