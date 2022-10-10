import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  _orderBook="https://localhost:44302/api/Order/order-create";
  _getorderbyid="https://localhost:44302/api/Order/getReaderOrders"
  

  constructor(private http:HttpClient,private _router:Router) { }
 
   Orderbook(createorder:any){
     return this.http.post(this._orderBook,createorder)
  }
  //getbkOrderDtlsbyId(input:any){
   // return this.http.get<any>(this._getorderbyid+'?ReaderId='+input)
    
 // }

  

}

//this.http.get("https://localhost:44307/api/Author/GetAllAuthorBookByAuthorID?authorId="+input)