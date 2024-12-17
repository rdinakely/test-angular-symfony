import {HttpHandlerFn, HttpRequest} from '@angular/common/http';

export function baseUrlInterceptor(request: HttpRequest<any>, next: HttpHandlerFn) {
  const baseUrl = 'http://localhost:1234'

  const modifiedRequest = request.clone({
    url: `${baseUrl}${request.url}`
  });
  return next(modifiedRequest);
}
