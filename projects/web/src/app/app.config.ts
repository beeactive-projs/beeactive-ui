import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { definePreset } from '@primeuix/themes';

import { routes } from './app.routes';

const BeeActiveLara = definePreset(Lara, {
  semantic: {
    primary: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e', // Main success
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#f59e0b',
          contrastColor: '#ffffff',
          hoverColor: '#d97706',
          activeColor: '#b45309',
        },
        highlight: {
          background: '#fef3c7',
          focusBackground: '#fde68a',
          color: '#78350f',
          focusColor: '#451a03',
        },
      },
      dark: {
        primary: {
          color: '#fbbf24',
          contrastColor: '#18181b',
          hoverColor: '#fcd34d',
          activeColor: '#fde68a',
        },
        highlight: {
          background: 'rgba(251, 191, 36, .16)',
          focusBackground: 'rgba(252, 211, 77, .24)',
          color: '#fef3c7',
          focusColor: '#fffbeb',
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: BeeActiveLara,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities',
          },
        },
      },
    }),
  ],
};
