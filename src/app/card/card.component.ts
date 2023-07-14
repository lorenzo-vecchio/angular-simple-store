import { Component, Input } from '@angular/core';
import { Product } from '../models';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: Product = {
    id: -1,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  }

  constructor(private router: Router, private cartService: CartService) {}

  goToProduct(id: number) {
    this.router.navigate(['/products', id])
  }

  onAddToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  alreadyInCart(product: Product) {
    if (this.cartService.products.indexOf(product) > -1) return true;
    else return false;
  }
}
