import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
_loginUrl="https://localhost:44365/api/login/login-user"
_registerUrl="https://localhost:44365/api/login/register-user"
_loginurlReader="https://localhost:44302/api/ReaderLogin/login-reader"
_registerReaderUrl="https://localhost:44302/api/ReaderLogin/register-reader"
  constructor(private http:HttpClient,private _router:Router) { }

  loginUser(login :any){
    return this.http.post<any>(this._loginUrl,login);
  }
  readerlogin(readerlogin:any){
    return this.http.post<any>(this._loginurlReader,readerlogin);
  }
  getToken(){
    return localStorage.getItem('tocken');
  }
  registerUser(login:any){
    return this.http.post<any>(this._registerUrl,login);
  }

  registerReader(regreader:any){
    return this.http.post<any>(this._registerReaderUrl,regreader);
  }


  logoutUser(){
    
    localStorage.removeItem('tocken');
    localStorage.removeItem('username')
    this._router.navigate(['']);
  }

  logginIn(){
    return !!localStorage.getItem('tocken');
  }

  
  
 
}
