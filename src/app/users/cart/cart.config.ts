import { CommonModule } from '@angular/common';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './cart.routes';
let modules = [CommonModule, RouterModule.forRoot(cartRoutes)];

export const cartConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      cartRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
  ],
};
