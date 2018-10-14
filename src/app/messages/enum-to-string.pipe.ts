import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eNumAsString'
})

export class ENumAsStringPipe implements PipeTransform {
    transform(value: number, enumType: any): any {
      console.log(value, enumType)
        return enumType[value].split(/(?=[A-Z])/).join().replace(",", " ");
    }
}