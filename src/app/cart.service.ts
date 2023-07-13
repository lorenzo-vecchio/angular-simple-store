import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }

  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  
}
