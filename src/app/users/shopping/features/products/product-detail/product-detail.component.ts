import { CartService } from './../../../../cart/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/admin/business/products.service';
import { Products } from 'src/app/admin/business/products.model';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { RelatedProductComponent } from '../related-product/related-product.component';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,RelatedProductComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: Products | null = null;
  products: Products[] = [];
  filteredProducts: Products[] = [];
  category: string = '';
  cartItems: any[] = [];
  productQuantity: number = 1;
  productId: string = '';
  product$!: Observable<any>;
  relatedProducts$!: Observable<any[]>;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.fetchProductDetails(productId);
    }



}

  fetchProductDetails(id: string) {
    this.productsService.getProductById(id).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }


  // plusQuantity(index:number):void{
  //   const item =this.cartItems[index];
  //   if(item){
  //     item.quantity= (item.quantity || 1) + 1;
  //     this.cartService.updateQuantity(index, item.quantity);
  //    // this.loadCart();
  //   }
  // }
  // minQuantity(index:number):void{
  //   const item =this.cartItems[index];
  //   if(item && item.quantity > 1){
  //     item.quantity  -= 1;
  //     this.cartService.updateQuantity(index, item.quantity);
  //   //  this.loadCart();
  //   }
  // }
  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  filterProductsByCategory() {
    this.filteredProducts = this.products.filter(
      (product) => product.category === this.category
    );
  }

  addToCart(){

    if(this.product){
      const productToAdd = { ...this.product, quantity: this.productQuantity };
      //this.cartItems.push(productToAdd);
      this.cartService.addToCart(productToAdd);
    alert('sản phẩm đã được thêm vào giỏ hàng');
    }

  }


}
