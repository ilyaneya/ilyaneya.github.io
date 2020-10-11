import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.url.includes('api-token-auth')) {
      return next.handle(req.clone());
    }
    return next.handle(
      req.clone({
        headers: req.headers.append('Authorization', 'token' + ' ' + localStorage.getItem('token'))
      })
    );
  }
}
