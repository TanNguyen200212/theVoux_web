import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsNavComponent } from './products-nav/products-nav.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductsNavComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

}
