import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imPurePipe',
  pure : false
})
export class ImPurePipePipe implements PipeTransform {
  constructor(){
    console.log("This is Impure Pipe Constructor")
  }
  transform(value: any,): number {
    console.log("This is Impure pipe transform")
    return value;
  }

}
