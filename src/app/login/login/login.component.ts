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

  public item = { color: 'light' };
  ngOnInit(): void {

  }

  onClickLogin(): void{
    this.loginService.login().subscribe((response) => {

        if (response.username === this.loginDataSource.auth.username){
          this.loginDataSource.user = response;
          this.router.navigate(['']);
        }else{
        }
      },
      (error: any) => {
        console.error('An error occurred, ', error);
      });
  }
}
