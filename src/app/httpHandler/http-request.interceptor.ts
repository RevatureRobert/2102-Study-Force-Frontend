import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
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

    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${tk}`)
      .set('Access-Control-Allow-Origin', '*')
    });

    return next.handle(request);
  }
}
