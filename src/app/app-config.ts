import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { appInitializer } from './app-initializer';
import { APP_ROUTES } from './app-routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(appInitializer),
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
    ),
  ],
};
