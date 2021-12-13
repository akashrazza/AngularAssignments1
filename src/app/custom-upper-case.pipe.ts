import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUpperCase'
})
export class CustomUpperCasePipe implements PipeTransform {

  transform(value: string): string {
    // console.log('test')
    value = value.toLowerCase();
    
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
