import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './User';

import { Observable } from 'rxjs';
// import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class RESTService {

  constructor(private httpclient : HttpClient) { }
  url = "http://localhost:3000/users";

  getdata() :Observable<any>{
    return this.httpclient.get(this.url);
  }
  adddata(userobj : User):Observable<any>{
     var header = {'content-type' : 'application/json'}
     var body = JSON.stringify(userobj);
    return this.httpclient.post(this.url,body,{'headers':header});
  }
  deletdata(id:string):Observable<any>{
    var custom_url = this.url+"/"+id;
    return this.httpclient.delete(custom_url);
  }
  
}
