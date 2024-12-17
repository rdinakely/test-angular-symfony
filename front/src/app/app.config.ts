import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {baseUrlInterceptor} from './interceptors/base-url.interceptor';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {contentTypeInterceptor} from './interceptors/content-type.interceptor';

registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([baseUrlInterceptor, contentTypeInterceptor])
    ),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ]
};
