import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  productQuantity: number = 1;
  constructor (private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  get totalAmount(){
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }
}
