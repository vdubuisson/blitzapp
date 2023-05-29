import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  RouteReuseStrategy,
  withPreloading,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    importProvidersFrom(
      IonicModule.forRoot({
        innerHTMLTemplatesEnabled: true,
      }),
      IonicStorageModule.forRoot({ name: '_lgmj-db' })
    ),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
};
