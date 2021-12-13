import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe'
})
export class PurePipePipe implements PipeTransform {
  constructor(){
    console.log("This is Pure Pipe Constructor")
  }
  transform(value: number): number {
    console.log("This is Pure Pipe Transform")
    return value;
  }

}
