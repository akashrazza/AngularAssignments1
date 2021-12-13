import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  //  constructor(){console.log('constructor')}
  transform(value: any, name : string) {
    // console.log('inside transform')
    if(name == ''){
      return value;
    }
    return value.filter((user:any)=>user.firstName.startsWith(name));
  }

}
