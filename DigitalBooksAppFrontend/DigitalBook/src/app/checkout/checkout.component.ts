import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/booksmodel';
import { loginData } from '../Models/loginData';
import { order } from '../Models/ordermodel';
import { ReaderService } from '../services/reader.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginServicesService } from '../services/login-services.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  constructor(private http:HttpClient,private _services:ReaderService,private _Activatedroute:ActivatedRoute,private jwt: JwtHelperService,private _auth:LoginServicesService) { }
  paymentmthod:string ='';
  orderModel: order=new order();
  orderModels:Array<order>= new Array<order>();
  UserDataModel:loginData=new loginData();
  SearchBookModel: Book = new Book();
  ReaderName:string =""
  id:number=0
  bookid:number=0
 public currentusername=""
 public cureentuserid=""
 public orderstaus="shipping"
 ReaderId:number=0
 refundalert:boolean=false
 alertOrder:boolean=false
public readername=""


  ngOnInit(): void {
    let sub=this._Activatedroute.params.subscribe(params=>{
      if(params['id']){
        console.log(Number(atob(params['id'])))
        this.bookid= Number(atob(params['id']))
      }
      
     
    })
    //alert(localStorage.getItem('tocken'));
   
    this.cureentuserid=this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
    this.readername=this.jwt.decodeToken(this._auth.getToken()?.toString())?.userName;
    
  }
  
  
  purchase(){
    debugger;
    console.log(this.SearchBookModel);
    console.log("OrderModel",this.orderModel);
    this.UserDataModel.userName=localStorage.getItem('username');
    var bkorder={
     reader:this.UserDataModel.userName,
     address:this.orderModel.address,
    PaymentMethod:this.paymentmthod,
    bookid:this.bookid,
    ReaderId:this.cureentuserid,
    orderstatus:this.orderstaus,
   
   }
    console.log(bkorder);
   
    this._services.Orderbook(bkorder).subscribe(res=>this.Success(res),res=>console.log(res));
   this.alertOrder=true
   // this.http.post("https://localhost:44375/api/Order/order-create",createorder).subscribe(res=>this.Success(res),res=>console.log(res));

  }
  Success(input:any){
    console.log(input)
   this.orderModels=input;
  }
  selectpayment(event:any){
    debugger;
    this.paymentmthod=event.target.value;
    console.log(this.paymentmthod);
 }
 postsuccess(input :any){
   this.showMyOrders(input); 
 }
 showMyOrders(input:any){
   
  this.http.get("https://localhost:44302/api/Order/getReaderOrders?ReaderId="+input).subscribe(res => this.Success(res), res => console.log(res));
 }
// cancelOrder(input :any){
//// this.http.delete("https://localhost:44375/api/Order/cancel-order?id=" + input.id).subscribe(res => this.postsuccess(res), res => console.log(res));
   
  //}
  DeleteBook(input: any){
    
    this.http.delete("https://localhost:44302/api/Order/cancel-order?id=" + input.id).subscribe(res => this.postsuccess(res), res => console.log(res));
   this.refundalert=true
   
  }

  closealert(){
    this.refundalert=false
  }
 }



