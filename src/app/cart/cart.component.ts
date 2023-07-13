import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor (protected cartService: CartService) {
    
  }
}
