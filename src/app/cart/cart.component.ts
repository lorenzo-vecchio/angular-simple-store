import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor (protected cartService: CartService, private router: Router) {
    
  }

  goToProduct(id: number) {
    this.router.navigate(['/products', id])
  }

  onRemoveFromCart(id: number) {
    this.cartService.removeProduct(id);
  }
}
