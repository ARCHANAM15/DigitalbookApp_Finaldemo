import { Component, OnInit } from '@angular/core';
import { loginData } from '../Models/loginData';
import { LoginServicesService } from '../services/login-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType:string ='';
  alertlogin:boolean=false

  constructor(private _service:LoginServicesService,private _router:Router,private _auth:LoginServicesService) { }
 UserDataModel:loginData=new loginData();
  ngOnInit(): void {
  }
  loginUser(){
    
    console.log(this._auth.getToken());
    
    this.alertlogin=true
   
   if(this.userType=="Author")
   {
    this._service.loginUser(this.UserDataModel).subscribe(res=>{
      localStorage.setItem('username',this.UserDataModel.userName); 
    
      localStorage.setItem('tocken',res.token)
      localStorage.setItem('userid',res.userid);
      localStorage.setItem('usertype',res.userType)
      
      this._router.navigate(['author']);
      
   },res=>{});
  }
  if(this.userType=="Reader")
  { 
  
      this._service.readerlogin(this.UserDataModel).subscribe(res=>{
        localStorage.setItem('username',this.UserDataModel.userName); 
      
        localStorage.setItem('tocken',res.token)
        localStorage.setItem('userid',res.userid);
        localStorage.setItem('usertype',res.userType)
        
    this._router.navigate([''])
    
  },res=>{});
  }
   
    
   }
  selectUserType(event:any){
    
this.userType=event.target.value;
console.log(this.userType);
  }
  closealert(){
    this.alertlogin=false
  }
}
