
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
import { menShirtsRoutes } from './men-shirts.routes';
let modules = [
 CommonModule,
 RouterModule.forRoot(menShirtsRoutes),


];

export const menShirtsConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      menShirtsRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
  ],
};
