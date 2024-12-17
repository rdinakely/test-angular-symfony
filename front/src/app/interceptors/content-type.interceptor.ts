import {HttpHandlerFn, HttpRequest} from '@angular/common/http';

export function contentTypeInterceptor(request: HttpRequest<any>, next: HttpHandlerFn) {
  const modifiedRequest = request.clone({
    headers: request.headers.set('Content-Type', 'application/ld+json'),
  });
  return next(modifiedRequest);
}
