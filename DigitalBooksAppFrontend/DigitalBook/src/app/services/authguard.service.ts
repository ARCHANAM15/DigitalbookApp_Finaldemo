import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginServicesService } from './login-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  implements CanActivate{

  constructor(private _auth:LoginServicesService,private _router:Router,private jwt: JwtHelperService) {}
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this._auth.logginIn()){
      return true;
    }
    else{
      this._router.navigate(['']);
      return false;
    }
  }
  gettoken():number{
    console.log(localStorage.getItem('tocken'))
    return  Number(this.jwt.decodeToken(localStorage.getItem('tocken')?.toString()).unique_name);
}

}



