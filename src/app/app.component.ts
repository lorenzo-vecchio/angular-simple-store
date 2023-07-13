import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-store';

  constructor(private cartService: CartService) {
  }

  get cartSize(): number {
    return this.cartService.products.length;
  }
}
