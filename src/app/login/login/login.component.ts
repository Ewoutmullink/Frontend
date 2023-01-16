import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {LoginDataSource} from './loginDataSource';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginDataSource = LoginDataSource.getInstance();

  constructor(private loginService: LoginService, private router: Router) { }

  public item = { color: 'dark' };
  ngOnInit(): void {

  }

  onClickLogin(): void{
    this.loginService.login().subscribe((response) => {
       console.log(response)
        if (response.username === this.loginDataSource.auth.username){
          this.loginDataSource.user = response;
          console.log(this.loginDataSource.user);
          this.router.navigate(['']);
        }else{
          console.log('no');
        }
      },
      (error: any) => {
        console.error('An error occurred, ', error);
      });
  }
}
