import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { paymentMethodsUser } from 'src/app/shared/user_payment_methods';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {
  // user_payment_method_url="http://localhost:3000/payment_user/";
  // user_payment_method_update_url="http://localhost:3000/payment/";
  // payment_methods_url="http://localhost:3000/payment_method/";



  user_payment_method_url='https://tollproject.herokuapp.com/payment_user/';
  user_payment_method_update_url='https://tollproject.herokuapp.com/payment/';
  payment_methods_url='https://tollproject.herokuapp.com/payment_method/';
  constructor(private http:HttpClient) { }
  getAllPaymentByUid(uid:any){
    return this.http.get(this.user_payment_method_url+uid);
  }
  updatePaymentUser(user:paymentMethodsUser){
    let body=JSON.stringify(user);
    return this.http.put(this.user_payment_method_update_url,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
  getAllPaymentMethods(){
    return this.http.get(this.payment_methods_url);
  }
}
