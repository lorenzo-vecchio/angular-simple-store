import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, ProductsRoot } from '../models';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy  {
  id?: number
  subscription?: Subscription
  private httpSubscription?: Subscription;
  product?: Product
  loading = false
  currentSlide = 0;
  productsRoot?: ProductsRoot;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private cartService: CartService,
    private location: Location
    ) {
    const {id} = route.snapshot.params
    this.id = id


  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const {id} = params
      this.id = id
    })
    this.httpSubscription = this.http
      .get<Product>('https://dummyjson.com/products/' + this.id)
      .subscribe({
        next: (value) => {
          this.product = value;
          this.loading = false;
        },
      });
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
    this.subscription?.unsubscribe()
  }

  nextSlide() {
    if (this.product?.images && this.currentSlide === this.product.images.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }
  
  prevSlide() {
    if (this.product?.images && this.currentSlide === 0) {
      this.currentSlide = this.product.images.length - 1;
    } else {
      this.currentSlide--;
    }
  }

  onAddToCart(){
    if (this.product) {
      this.cartService.addProduct(this.product)
    }
  }

  goBack() {
    this.location.back()
  }

  alreadyInCart() {
    if (this.product && this.product.id) {
      const foundIndex = this.cartService.products.findIndex(item => item.id === this.product?.id);
      return foundIndex > -1;
    } else {
      return false;
    }
  }

  onRemoveFromCart() {
    if (this.product) {
      this.cartService.removeProduct(this.product.id);
    }
  }
}
