import { HttpClient,HttpRequest,HttpHandler, HttpEvent} from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { LoginServicesService } from './login-services.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authService = this.injector.get(LoginServicesService);
      let tokenizedreq = req.clone({
          headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      })

      return next.handle(tokenizedreq);
  }

  
}


