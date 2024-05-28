import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './users/user.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.userService.getToken();

    if (
      request.url === 'http://localhost:8000/api/book/getbooks' ||
      request.url === 'http://localhost:8000/api/register' ||
      request.url === 'http://localhost:8000/api/login' ||
      request.url === 'http://localhost:8000/api/book/getbook/:id'
    ) {
      request = request.clone();
    } else {
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    }

    return next.handle(request);
  }
}
