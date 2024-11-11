
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
import { productDetailsRoutes } from './product-detail.routes';
let modules = [
 CommonModule,
 RouterModule.forRoot(productDetailsRoutes),


];

export const productDetailsConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      productDetailsRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
  ],
};
