import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Custom Interceptor');
    const API_KEY = `58a7c679`;
    const url = `https://omdbapi.com/?apikey=`;
    console.log(request);
    request = request.clone({
      url: url + API_KEY + request.url
    });
    return next.handle(request)
  }
 
}
