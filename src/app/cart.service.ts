import { Injectable } from '@angular/core';
import { Product } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _products: Product[];

  constructor() {
    this._products = [];
  }

  addProduct(product: Product) {
    this._products = [...this._products, product];
  }

  removeProduct(id: number) {
    const index = this._products.findIndex(product => product.id === id);
    if (index !== -1) {
      this._products.splice(index, 1);
    }
  }

  get products() {
    return this._products;
  }
  
}
