import {
  ApplicationConfig,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideExperimentalCheckNoChangesForDebug({
      interval: 1000, // run change detection every second
      useNgZoneOnStable: true, // run it when the NgZone is stable as well
      exhaustive: true, // check all components
    }),
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
  ],
};
