import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {baseUrlInterceptor} from './interceptors/base-url.interceptor';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {contentTypeInterceptor} from './interceptors/content-type.interceptor';
import {authorizationInterceptor} from './interceptors/authorization.interceptor';

registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor,
        contentTypeInterceptor,
        authorizationInterceptor,
      ])
    ),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ]
};
