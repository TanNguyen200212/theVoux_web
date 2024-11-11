import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject(
    this.cartItems
  );

  constructor() {}

  getCartItems() {
    return this.cartSubject.asObservable();
  }
  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems); //update
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.cartSubject.next(this.cartItems); //update
  }

  getTotalItems() {
    return this.cartItems.length;
  }

  get totalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
