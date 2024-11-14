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
  constructor (private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
    this.loadCart();
   }

  loadCart(): void {
   this.cartItems = this.cartService.getCartItems();
  }

  addItemTocart(item:any){
    this.cartService.addToCart(item);
   this.loadCart();
  }
  removeItemFromCart(index: number): void {
    this.cartService.removeFromCart(index);
   this.loadCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
   this.loadCart();
  }



  get totalPrice(){
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }


  plusQuantity(index:number):void{
    const item =this.cartItems[index];
    if(item){
      item.quantity= (item.quantity || 1) + 1;
      this.cartService.updateQuantity(index, item.quantity);
      this.loadCart();
    }
  }
  minQuantity(index:number):void{
    const item =this.cartItems[index];
    if(item && item.quantity > 1){
      item.quantity  -= 1;
      this.cartService.updateQuantity(index, item.quantity);
      this.loadCart();
    }
  }
}
