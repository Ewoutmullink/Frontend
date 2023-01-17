import { Component, OnInit } from '@angular/core';
import {RegisterDatasource} from './register.datasource';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public item = { color: 'dark' };
  public registerDataSource = RegisterDatasource.getInstance();
  public booleanClicked = false;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.registerDataSource.userRegister.username != null && this.registerDataSource.userRegister.password != null
      && this.registerDataSource.userRegister.street != null
      && this.registerDataSource.userRegister.zip != null
      && this.registerDataSource.userRegister.place != null
      && this.registerDataSource.userRegister.number != null
  ){
    this.registerService.register().subscribe((response) => {
        console.log('Response is: ', response);
      },
      (error) => {
        console.error('An error occurred, ', error);
      });
    this.router.navigate(['']);
  }else{
    }
  }

  clickedNotReady() {
    this.booleanClicked = true;
  }
}
