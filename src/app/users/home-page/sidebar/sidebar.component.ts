import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // isMenuOpen: boolean = false;
  // onToggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
  onToggleMenu() {
    console.log('Button clicked');
    const drawer = document.getElementById('drawer-body-scrolling');
    if (drawer) {
        drawer.classList.toggle('-translate-x-full');
    }
}
onCloseMenu() {
  const drawer = document.getElementById('drawer-body-scrolling');
  if (drawer) {
      drawer.classList.add('-translate-x-full'); // Thêm lớp để ẩn sidebar
  }
}


}
