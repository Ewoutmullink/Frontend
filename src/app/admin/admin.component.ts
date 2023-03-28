import { Component } from '@angular/core';
import {ProductDataSource} from "../product/product/ProductDataSource";
import {MatDialog} from '@angular/material/dialog';
import {ProductFormComponent} from "./product-form/product-form.component";
import {CheckDialogComponent} from "./check-dialog/check-dialog.component";
import {ProductService} from "../product/product/product.service";
import {Product} from "../product/product/Product";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public productDataSource = ProductDataSource.getInstance();
  public visibleAreYouSureDialog = false;
  public visibleEditDialog = false;
  public productId = 0;
  public item = { color: 'dark' };
  public product!: Product

  constructor(public dialog: MatDialog, private productService: ProductService) {}

  ngOnInit(): void {
    this.product = new Product(1,"","",1,"", []);
  }

  openDeleteDialog(id: number) {
    this.visibleAreYouSureDialog = !this.visibleAreYouSureDialog;
    this.productId = id;
  }

  deleteProduct(id: number){
    let product = this.productDataSource.productList.find(p => p.id == id)
    this.productDataSource.productList = this.productDataSource.productList.filter(obj =>{ return obj !== product});
    this.productService.deleteProduct(id).subscribe((response) => {
        this.ngOnInit()
      },
      (error) => {
      });
  }

  openChangeDialog(id: number) {
    this.visibleEditDialog= !this.visibleEditDialog;
    if(id != -1){
    this.product = this.productDataSource.productList.find(p => p.id == id)!;
    }else{
      this.product = new Product(0, "","",1,"", []);
    }
  }

  toggleVisable() {
    this.visibleAreYouSureDialog = !this.visibleAreYouSureDialog;
  }

  toggleVisableEdit() {
    this.visibleEditDialog = !this.visibleEditDialog;
  }

  handleLiveChange(event: any) {
    this.visibleAreYouSureDialog = event;
  }

  handleLiveChangeEdit(event: any) {
    this.visibleEditDialog = event;
  }

  editProduct() {
    this.productService.changeProduct(this.product).subscribe((response) => {
      },
      (error) => {
      });
    this.toggleVisableEdit()
  }
}
