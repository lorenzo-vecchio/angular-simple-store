import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product, ProductsRoot} from '../models';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  //stati
  productsRoot?: ProductsRoot;
  loading = false;
  private httpSubscription?: Subscription;

  constructor(private http: HttpClient, private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
    this.httpSubscription = this.http
      .get<ProductsRoot>('https://dummyjson.com/products')
      .subscribe({
        next: (value) => {
          this.productsRoot = value;
          this.loading = false;
        },
      });
  }

  ngOnDestroy() {
    this.httpSubscription?.unsubscribe();
  }

  goToProduct(id: number) {
    this.router.navigate(['/products', id])
  }

  onAddToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
