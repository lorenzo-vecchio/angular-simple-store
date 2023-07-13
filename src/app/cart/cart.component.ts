import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
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

  constructor (protected cartService: CartService) {
    
  }
}
