import { Injectable,Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor(private injector:Injector) { }
  intercept(req:any,next:any) {
    let authservice=this.injector.get(AuthService);
    let tokenizedReq=req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authservice.getToken()}`
        }
      }
    )
    return next.handle(tokenizedReq)
  }
}

