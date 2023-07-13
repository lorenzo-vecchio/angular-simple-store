import { Pipe, PipeTransform } from '@angular/core';
import { Product, ProductsRoot } from './models';

@Pipe({
  name: 'filtroProdotti'
})
export class FiltroProdottiPipe implements PipeTransform {

  transform(value: Product[] | undefined, filtro: string): Product[] | undefined {
    if (filtro === '' || undefined) return value;
    const filteredProducts = value?.filter(p => p.category === filtro);
    return filteredProducts;
  }

}
