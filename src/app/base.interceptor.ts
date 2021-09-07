import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = `58a7c679`;
    const url = `https://omdbapi.com/?apikey=58a7c679`;
    // return next.handle(request);
    return next.handle(request.clone({url: url ,setHeaders: { API_KEY }}));
  }
}
