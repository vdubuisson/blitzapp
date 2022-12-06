import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  RouteReuseStrategy,
  withPreloading,
} from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    importProvidersFrom(IonicModule.forRoot()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
}).catch((err) => console.error(err));
