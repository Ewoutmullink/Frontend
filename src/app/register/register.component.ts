import { Component, OnInit } from '@angular/core';
import {RegisterDatasource} from './register.datasource';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public item = { color: 'light' };
  public registerDataSource = RegisterDatasource.getInstance();
  public booleanClicked = false;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    this.registerService.register().subscribe((response) => {

      },
      (error) => {
        console.error('An error occurred, ', error);
      });
    this.router.navigate(['']);
  }

  clickedNotReady() {
    this.booleanClicked = true;
  }
}
