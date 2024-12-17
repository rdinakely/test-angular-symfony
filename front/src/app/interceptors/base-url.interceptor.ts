import {HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';

export function baseUrlInterceptor(request: HttpRequest<any>, next: HttpHandlerFn) {
  const baseUrl = environment.baseUrl

  const modifiedRequest = request.clone({
    url: `${baseUrl}${request.url}`
  });
  return next(modifiedRequest);
}
