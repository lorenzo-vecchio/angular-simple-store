import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { DiscountedPricePipe } from './discounted-price.pipe';
import { FiltroProdottiPipe } from './filtro-prodotti.pipe';
import { LoginComponent } from './login/login.component';
import { AlreadyInCartDirective } from './already-in-cart.directive';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    PagenotfoundComponent,
    ProductComponent,
    CartComponent,
    DiscountedPricePipe,
    FiltroProdottiPipe,
    LoginComponent,
    AlreadyInCartDirective,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
