import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsNavComponent } from './features/products/products-nav/products-nav.component';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ProductsNavComponent],
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {

}
