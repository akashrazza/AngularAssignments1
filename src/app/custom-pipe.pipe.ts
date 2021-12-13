import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  
  transform(value: number, tostr :string): number {
    var faren : number = 0
    if(tostr=='faren'){
        faren = (value - 32)/1.8
    }
    else if(tostr=='celcius'){
        faren = (value*1.8)+32
    }
    return faren
  }

}
