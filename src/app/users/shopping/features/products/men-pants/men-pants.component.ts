import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Products } from 'src/app/admin/business/products.model';
import { ProductsService } from 'src/app/admin/business/products.service';
@Component({
  selector: 'app-men-pants',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './men-pants.component.html',
  styleUrls: ['./men-pants.component.css']
})
export class MenPantsComponent {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  category: string = 'Men Pants';

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
