import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MyErrorStateMatcher } from '../home-page/news-letter/news-letter.component';
import { CartComponent } from '../cart/cart.component';
import { MatRadioModule } from '@angular/material/radio'; 
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule, ReactiveFormsModule,NgIf,
    MatFormFieldModule,
    MatInputModule,
    CartComponent,
    MatRadioModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
