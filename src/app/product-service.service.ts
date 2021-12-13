import { Injectable } from '@angular/core';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  product_array : Product[] = []
  getProductById(id :number){
    return this.product_array.filter((product_ele)=>product_ele.id==id)
  }
  getProductByName(name : string){
    return this.product_array.filter((product_ele)=>product_ele.name==name)
  }
  addProduct(product : Product){
    this.product_array.push(product);
  }
  deleteProduct(id:number){
    var index:number;
    for (let i in this.product_array){
      if(this.product_array[i].id==id){
        index=parseInt(i);
        break;
      }
    }
    
    this.product_array.splice(index, 1);
  }
}
