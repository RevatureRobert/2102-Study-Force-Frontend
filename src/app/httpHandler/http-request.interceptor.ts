import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tk = localStorage.getItem('access_token');
    if (request.headers.get('skip')) {
      return next.handle(request);
    }
    request = request.clone(
      {setHeaders: {Authorization: `Bearer ${tk}`}
      });

    return next.handle(request);
  }
}
