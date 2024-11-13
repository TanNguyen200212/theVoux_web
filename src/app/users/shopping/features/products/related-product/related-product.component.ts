import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from 'src/app/admin/business/products.model';
import { ProductsService } from 'src/app/admin/business/products.service';
@Component({
  selector: 'app-related-product',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css'],
})
export class RelatedProductComponent {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  category: string = 'Men Shirts';
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
