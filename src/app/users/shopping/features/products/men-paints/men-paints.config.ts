
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
import { menPaintsRoutes } from './men-paints.routes';
let modules = [
 CommonModule,
 RouterModule.forRoot(menPaintsRoutes),


];

export const menPaintsConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      menPaintsRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
  ],
};
