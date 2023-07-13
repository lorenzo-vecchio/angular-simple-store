import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormat'
})
export class DataFormatPipe implements PipeTransform {

  transform(value: string, limite: number = 7): string {
    if (value.length > limite) {
      return `${value.substring(0,limite)}...`
    }
    else return value
  }

}
