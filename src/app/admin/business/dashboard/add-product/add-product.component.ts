import { ProductsService } from './../../products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';

export interface DialogData {
  name: string;
  price: string;
  category: string;
  imageUrl: string;
  description: string;
  id: string;
  isEditMode: boolean;
}
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productsForm!: FormGroup;
  isEditMode = false;
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {
    this.isEditMode = data.isEditMode;
    this.productsForm = this.fb.group({
      category: [data.category, Validators.required],
      imageUrl: [data.imageUrl, Validators.required], //,Validators.pattern('https?://.+')
      name: [data.name, Validators.required],
      description: [data.description, Validators.required],
      price: [data.price, Validators.required],
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnit() {
    this.isEditMode = !!this.data?.id;
    if (this.isEditMode) {
      this.productsForm.patchValue(this.data);
    }
    this.productsForm = new FormGroup({
      category: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      decription: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),

      // fetchManual: new FormControl('', Validators.required),
    });
  }

  onSubmitPr(): void {
    if (this.productsForm.valid) {
      if (this.isEditMode) {
        this.productsService
          .updateProducts(this.data.id, this.productsForm.value)
          .pipe(take(1))
          .subscribe((responseData) => {
            // this.dialogRef.close();
            this.dialogRef.close();
          });
      } else {
        // Create a new post
        this.productsService
          .createAndStoreProducts(
            this.productsForm.value.category,
            this.productsForm.value.imageUrl,
            this.productsForm.value.name,
            this.productsForm.value.description,
            this.productsForm.value.price
          )
          .pipe(take(1))
          .subscribe((responseData) => {
            this.dialogRef.close({ action: 'add', data: responseData });
          });
      }
      console.log('thanh cong');
    } else {
      console.log('Form không hợp lệ');
    }
  }
}
