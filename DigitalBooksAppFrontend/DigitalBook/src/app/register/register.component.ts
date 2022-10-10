import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginData } from '../Models/loginData';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterDataModel:loginData=new loginData();
  userType:string ='';
  alertregister:boolean=false
  constructor(private _service:LoginServicesService,private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.alertregister=true;
   if(this.userType=="Author"){
    this._service.registerUser(this.RegisterDataModel).subscribe(res=>{
      localStorage.setItem('tocken',res.token)
      
     this._router.navigate(['login'])
      },res=>console.log(res));
   }
   if(this.userType=="Reader"){
    this._service.registerReader(this.RegisterDataModel).subscribe(res=>{
      localStorage.setItem('tocken',res.token)
     
     this._router.navigate(['login'])
      },res=>console.log(res));
   }
   
  }

  closealert(){
    this.alertregister=false
  }
 
  selectUserType(event:any){
    
    this.userType=event.target.value;
    console.log(this.userType);
      }
}