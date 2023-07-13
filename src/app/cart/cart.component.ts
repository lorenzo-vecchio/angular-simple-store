import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, ProductsRoot } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data = new Date();
  stringa = 'ciao come va, test pipes';
  testo = '';
  prodotti = [
    {codice: '001', nome: 'prodotto1', prezzo: 100, foto: '', categoria:1},
    {codice: '002', nome: 'prodotto2', prezzo: 150, foto: '', categoria:2},
    {codice: '003', nome: 'prodotto3', prezzo: 200, foto: '', categoria:1},
    {codice: '004', nome: 'prodotto4', prezzo: 50, foto: '', categoria:2},
    {codice: '005', nome: 'prodotto5', prezzo: 250, foto: '', categoria:1},
    {codice: '006', nome: 'prodotto6', prezzo: 300, foto: '', categoria:2},
  ]
  products$?: Observable<Product[]>

  constructor (protected cartService: CartService, private http: HttpClient) {
    
  }

  ngOnInit(): void {
      this.products$ = this.http.get<ProductsRoot>('https://dummyjson.com/products')
      .pipe(map((result) => {
        return result.products
      }))
  }

}
