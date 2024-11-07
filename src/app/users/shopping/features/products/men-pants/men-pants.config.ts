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
import { menPantsRoutes } from '../men-pants/men-pants.routes';
let modules = [CommonModule, RouterModule.forRoot(menPantsRoutes)];

export const menPantsConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      menPantsRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
  ],
};
