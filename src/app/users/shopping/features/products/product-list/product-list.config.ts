
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
import { productListRoutes } from './product-list.routes';
let modules = [
 CommonModule,
 RouterModule.forRoot(productListRoutes),


];

export const productListConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      productListRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
  ],
};
