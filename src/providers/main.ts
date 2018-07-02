import { Injectable } from '@angular/core';
import {HttpModule, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
/*
  Generated class for the MainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainProvider { 
  public lang : string = 'en';
  public baseUrl:String = 'http://hefny.me/test/adminPanel/' ;
  public customer;
  
  constructor(public http: Http) {
    console.log('Hello MainProvider Provider');
  }
 
  logIn(email , password){
    let body = {
      email : email,
      password : password
    }

    return this.http.post(this.baseUrl+'sellerLogin',body).map(res=> res.json());
  }
  updateAccount(firstname,lastname,phone,email ,id, oldPassword , newPassword ){
    let body = {
      firstname : firstname,
      lastname : lastname,
      phone : phone,
      email : email,
      id:id,
      oldPassword : oldPassword,
      newPassword : newPassword
      
    }

    return this.http.post(this.baseUrl+'updateSellerInfo',body).map(res=> res.json());
  }
  viewProducts(sellerid){
    console.log('sellerid',sellerid)
    let body = {
      id:sellerid
    }

    return this.http.post(this.baseUrl+'ViewProductApp',body).map(res=> res.json());
  }

  viewEarnings(sellerid){
    let body = {
      id:sellerid
    }

    return this.http.post(this.baseUrl+'ViewEarnApp',body).map(res=> res.json());
  }
}
