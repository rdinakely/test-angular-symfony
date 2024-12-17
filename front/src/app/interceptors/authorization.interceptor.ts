import {HttpHandlerFn, HttpRequest} from '@angular/common/http';

export function authorizationInterceptor(request: HttpRequest<any>, next: HttpHandlerFn) {
  const token = localStorage.getItem('token');

  if (!token) {
    return next(request)
  }

  const modifiedRequest = request.clone({
    headers: request.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(modifiedRequest);
}
