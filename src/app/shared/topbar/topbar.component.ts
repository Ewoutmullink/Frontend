import { Component, OnInit } from '@angular/core';
import {LoginDataSource} from '../../login/login/loginDataSource';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public loginDataSource = LoginDataSource.getInstance();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.loginDataSource.user = null!;
    this.router.navigate(['']);
  }
}
