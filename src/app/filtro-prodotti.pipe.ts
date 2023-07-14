import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProdotti'
})
export class FiltroProdottiPipe<T> implements PipeTransform {
  transform(value: T[] | undefined, filtro: string, key: keyof T): T[] | undefined {
    if (!filtro) return value;
    const filteredProducts = value?.filter(p => p[key] === filtro);
    return filteredProducts;
  }
}