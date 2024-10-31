import { adminRoutes } from './admin.routes';
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

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

let modules = [
  HttpClientModule,
  BrowserAnimationsModule,
  BrowserModule,
  RouterModule.forRoot(adminRoutes),

];

export const adminConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      adminRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
  ],
};
