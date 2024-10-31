import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BeautyDetailComponent } from './beauty-detail/beauty-detail.component';
@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [ CommonModule,RouterModule,BeautyDetailComponent],
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent {

}
