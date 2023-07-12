import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, ProductsRoot } from '../models';

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

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
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
}
