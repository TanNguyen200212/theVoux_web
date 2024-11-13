import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cartItems';
  private cartSubject = new BehaviorSubject<any[]>(this.getCartItems());
  cartItems$ = this.cartSubject.asObservable();
  constructor() {}

  getCartItems(): any[] {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  setCartItems(items: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  addToCart(item: any): void {
    const items = this.getCartItems() ;
    const existItem = items.find((cartItem) => cartItem.id === item.id);
    if (existItem) {
      existItem.quantity = (existItem.quantity || 0) + 1;
    } else {
     // item.quantity = 1;
     const newItem = { ...item, quantity: 1 };
      items.push(newItem);

    }
     this.setCartItems(items);
     this.cartSubject.next(items);
  }

  removeFromCart(index: number): void {
    const items = this.getCartItems();
    items.splice(index, 1);
    this.setCartItems(items);
  }

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
    this.cartSubject.next([]);
  }

  updateQuantity(index: number, quantity: number): void {
    const items = this.getCartItems();
    if (items[index]) {
      items[index].quantity = quantity;
      this.setCartItems(items);

      this.cartSubject.next(items);
    }
  }
}
