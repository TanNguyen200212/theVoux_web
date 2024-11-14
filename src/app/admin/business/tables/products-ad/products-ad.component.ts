
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DashboardInfoComponent, DialogData } from '../../dashboard/dashboard-info/dashboard-info.component';
import { RouterModule } from '@angular/router';
import { Products } from '../../products.model';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from '../../dashboard/add-product/add-product.component';
import { ProductsService } from '../../products.service';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-products-ad',
  standalone: true,
  imports: [ RouterModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule

  ],
  templateUrl: './products-ad.component.html',
  styleUrls: ['./products-ad.component.css']
})
export class ProductsAdComponent {
  ngForm = false;
  error = null;
  displayedColumns: string[] = ['category','imageUrl','name', 'description', 'price', 'actions'];
  dataSource: any[] = [];
  isFetching: boolean = false;
  loadedProducts: Products[] = [];
  private _snackBar = Inject(MatSnackBar);
products: any;

  constructor(
    private Http: HttpClient,
  //  public dialogRef: MatDialogRef<AddProductComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private productsService: ProductsService,
  //  private fb: FormBuilder,
  private changeDetectorRef: ChangeDetectorRef
  ) {}

  //xu li du lieu khi dong hop thoai
  openDialogPr(products?: Products): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: {
        // title: this.title,
        // content: this.content,
        // title: post ? post.title : '',
        // content: post ? post.content : '',
        isEditMode: !!products,
      },
      height: '600px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      //mo hop thoai va dki vao afterclosed tp cha
      // if (result) {
      //   if (result.action == 'add') {
      //     this.loadedProducts.unshift(result.dataP);
      //     this.dataSource = [...this.loadedProducts];
      //   } else if (result.action == 'edit') {
      //     const index = this.loadedProducts.findIndex(
      //       (p) => p.id === result.data.id
      //     );
      //     this.loadedProducts[index] = result.dataP;
      //   }
      // }
    });
    //
  }

  ngOnInit() {
    this.productsService.isFetching = true;
    this.productsService.fetchProducts().subscribe((products) => {
      this.loadedProducts = products;
      this.dataSource = [...this.loadedProducts];
      // this.postsService.isFetching = false;
      // this.postsService.loadedPosts = posts;
    });
    this.productsService.fetchProducts().subscribe((products) => {
      this.dataSource = products;
    });
  }

  // kéo toàn bộ post sau khi thêm mới, nếu có 1k thì phải kéo về mới toàn bộ 1000 có cách nào tối ưu không, xài redux hay, tạo 1 mảng local lấy trước dữ liueej từ api, nếu thêm mới thì thêm chèn cái mới vào local, call api riêng hay api có phân trang
  onFetchProducts() {
    this.productsService.fetchProducts().subscribe((products) => {
      this.loadedProducts = products;
      // this.postsService.isFetching = false;
      // this.postsService.loadedPosts = posts;
    });
  }

  // onClearProducts() {
  //   // Send Http request
  //   this.productsService.deleteProducts().subscribe(() => {
  //     this.loadedProducts = [];
  //   });
  // }

  onDelete(productsId: string) {
    
    if (confirm('Bạn có chắc chắn muốn xóa ?')) {
      this.productsService.deleteProduct(productsId).subscribe(() => {
        console.log('xoá thành công');
        this.onFetchProducts(); // Refresh the table after deletion
      });
    }
  }

 //edit
 onEdit(products: Products): void {
  const dialogRef = this.dialog.open(AddProductComponent, {
    width: '300px',
    data: { ...products}, // Pass a copy of the post to the dialog
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.productsService
        .updateProducts(products.id!, result)
        .subscribe((responseData) => {

          this._snackBar.open('Post updated successfully', 'Close', {
            duration: 3000,
          });
          this.products = this.products.map((p: { id: string | undefined }) =>
            p.id === products.id ? { ...responseData } : p
          );
          // Refresh the table after editing
          // console.log('createAndStorePost.............', responseData);
          console.log('Editing Product ID:', products.id);
          console.log('Updated Product ID from Response:', responseData.id);
        });
    }
    this.onFetchProducts();
  });
}
}
