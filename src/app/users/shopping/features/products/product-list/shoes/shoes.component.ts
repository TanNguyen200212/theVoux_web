import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from 'src/app/admin/business/products.model';
import { ProductsService } from 'src/app/admin/business/products.service';
@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  category: string = 'Shoes';
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
