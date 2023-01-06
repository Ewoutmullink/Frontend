import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-check-dialog',
  templateUrl: './check-dialog.component.html',
  styleUrls: ['./check-dialog.component.css']
})
export class CheckDialogComponent {
  constructor(public dialogRef: MatDialogRef<CheckDialogComponent>) {}
}
