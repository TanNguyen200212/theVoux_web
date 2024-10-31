
import { CommonModule } from '@angular/common';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideAnimations,
} from '@angular/platform-browser/animations';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { RouterModule } from '@angular/router';
import { beautyDetailRoutes } from './beauty-detail.routes';
let modules = [
 CommonModule,
 RouterModule.forRoot(beautyDetailRoutes),


];

export const beautyConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      beautyDetailRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
  ],
};
