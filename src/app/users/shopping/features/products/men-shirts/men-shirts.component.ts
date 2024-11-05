import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from 'src/app/admin/business/products.model';
import { ProductsService } from 'src/app/admin/business/products.service';
@Component({
  selector: 'app-men-shirts',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css'],
})
export class MenShirtsComponent {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  category: string = 'one';
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.fetchProducts().subscribe(
      (products: Products[]) => {
        this.products = products;
        this.filterProductsByCategory();
        console.log(this.filteredProducts);
      },
      (error) => {
        console.error('Error fetching products:', error); // Log lỗi nếu có
      }
    );
  }
  filterProductsByCategory() {
    this.filteredProducts = this.products.filter(
      (product) => product.category === this.category
    );
  }
}
