
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from 'src/app/admin/business/products.model';
import { ProductsService } from 'src/app/admin/business/products.service';
@Component({
  selector: 'app-men-shirts',
  standalone: true,
  imports: [CommonModule,RouterModule,
    HttpClientModule
  ],
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css']
})
export class MenShirtsComponent {
  products:Products[]=[];
  constructor(private productsService: ProductsService){}
  ngOnInit(): void {

    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.fetchProducts().subscribe((products: Products[]) => {
      this.products = products;
      console.log(this.products); // Xem dữ liệu trong console
    });
  }
}
