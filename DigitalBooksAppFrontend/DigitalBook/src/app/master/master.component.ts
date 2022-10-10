import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
 
  constructor(private _auth:LoginServicesService) { }
  logo="././assets/image/bklogo.jpg"
 
  ngOnInit(): void {
  }
  LoggedIn(Input:boolean):boolean{
    if(Input){
      return this._auth.logginIn();
    }
    else{
      return !this._auth.logginIn();
    }
  }
  Logout(){
    this._auth.logoutUser();
  }
  

}
