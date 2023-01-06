import { Component } from '@angular/core';
import {ProductDataSource} from "../product/product/ProductDataSource";
import {MatDialog} from '@angular/material/dialog';
import {ProductFormComponent} from "./product-form/product-form.component";
import {CheckDialogComponent} from "./check-dialog/check-dialog.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public productDataSource = ProductDataSource.getInstance();

  constructor(public dialog: MatDialog) {}

  delete(id: number) {
    this.dialog.open( CheckDialogComponent, {
      position: {
        top: '50vh',
        left: '50vw'
      },
      panelClass:'setDialogeMiddle',
    });
  }

  change(id: number) {
    this.dialog.open( ProductFormComponent, {
      position: {
        top: '50vh',
        left: '50vw'
      },
      panelClass:'setDialogeMiddle',
    });
  }
}
