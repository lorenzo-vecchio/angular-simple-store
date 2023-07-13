import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountedPrice'
})
export class DiscountedPricePipe implements PipeTransform {

  transform(price: number, discountPercentage: number): number {
    return (price- (price / 100 * discountPercentage))
  }
}
