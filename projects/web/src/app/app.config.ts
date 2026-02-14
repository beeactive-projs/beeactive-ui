import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { definePreset } from '@primeuix/themes';
import { authInterceptor } from 'core';

import { routes } from './app.routes';

// const BeeActiveLara = definePreset(Lara, {
//   semantic: {
//     primary: {
//       50: '#fffbeb',
//       100: '#fef3c7',
//       200: '#fde68a',
//       300: '#fcd34d',
//       400: '#fbbf24',
//       500: '#f59e0b',
//       600: '#d97706',
//       700: '#b45309',
//       800: '#92400e',
//       900: '#78350f',
//       950: '#451a03',
//     },
//     success: {
//       50: '#f0fdf4',
//       100: '#dcfce7',
//       200: '#bbf7d0',
//       300: '#86efac',
//       400: '#4ade80',
//       500: '#22c55e', // Main success
//       600: '#16a34a',
//       700: '#15803d',
//       800: '#166534',
//       900: '#14532d',
//       950: '#052e16',
//     },
//     colorScheme: {
//       light: {
//         primary: {
//           color: '#f59e0b',
//           contrastColor: '#ffffff',
//           hoverColor: '#d97706',
//           activeColor: '#b45309',
//         },
//         highlight: {
//           background: '#fef3c7',
//           focusBackground: '#fde68a',
//           color: '#78350f',
//           focusColor: '#451a03',
//         },
//       },
//       dark: {
//         primary: {
//           color: '#fbbf24',
//           contrastColor: '#18181b',
//           hoverColor: '#fcd34d',
//           activeColor: '#fde68a',
//         },
//         highlight: {
//           background: 'rgba(251, 191, 36, .16)',
//           focusBackground: 'rgba(252, 211, 77, .24)',
//           color: '#fef3c7',
//           focusColor: '#fffbeb',
//         },
//       },
//     },
//   },
// });

const BeeActiveLara = definePreset(Lara, {
  // semantic: {
  //   primary: {
  //     50: '#f0f4f8',
  //     100: '#d9e2ec',
  //     200: '#bcccdc',
  //     300: '#9fb3c8',
  //     400: '#829ab1',
  //     500: '#1e3a5f',
  //     600: '#1a3354',
  //     700: '#162b48',
  //     800: '#12233d',
  //     900: '#0e1b31',
  //     950: '#0a1323',
  //   },
  //   highlight: {
  //     50: '#fffbeb',
  //     100: '#fef3c7',
  //     200: '#fde68a',
  //     300: '#fcd34d',
  //     400: '#fbbf24',
  //     500: '#f59e0b',
  //     600: '#d97706',
  //     700: '#b45309',
  //     800: '#92400e',
  //     900: '#78350f',
  //     950: '#451a03',
  //   },
  //   accent: {
  //     50: '#fef7ee',
  //     100: '#feefd6',
  //     200: '#fcd9ac',
  //     300: '#fabe77',
  //     400: '#f89640',
  //     500: '#f67b1a',
  //     600: '#b45309',
  //     700: '#964208',
  //     800: '#7c360d',
  //     900: '#662e0e',
  //     950: '#391503',
  //   },
  //   success: {
  //     50: '#ecfdf5',
  //     100: '#d1fae5',
  //     200: '#a7f3d0',
  //     300: '#6ee7b7',
  //     400: '#34d399',
  //     500: '#059669',
  //     600: '#047857',
  //     700: '#065f46',
  //     800: '#064e3b',
  //     900: '#064e3b',
  //     950: '#022c22',
  //   },
  //   danger: {
  //     50: '#fef2f2',
  //     100: '#fee2e2',
  //     200: '#fecaca',
  //     300: '#fca5a5',
  //     400: '#f87171',
  //     500: '#dc2626',
  //     600: '#b91c1c',
  //     700: '#991b1b',
  //     800: '#7f1d1d',
  //     900: '#7f1d1d',
  //     950: '#450a0a',
  //   },
  //   // Light theme colors
  //   colorScheme: {
  //     light: {
  //       primary: {
  //         color: '{primary.500}',
  //         contrastColor: '#ffffff',
  //         hoverColor: '{primary.600}',
  //         activeColor: '{primary.700}',
  //       },
  //       highlight: {
  //         background: '{highlight.50}',
  //         focusBackground: '{highlight.100}',
  //         color: '{highlight.700}',
  //         focusColor: '{highlight.800}',
  //       },
  //       surface: {
  //         0: '#ffffff',
  //         50: '#f8fafc',
  //         100: '#f1f5f9',
  //         200: '#e2e8f0',
  //         300: '#cbd5e1',
  //         400: '#94a3b8',
  //         500: '#64748b',
  //         600: '#475569',
  //         700: '#334155',
  //         800: '#1e293b',
  //         900: '#0f172a',
  //         950: '#020617',
  //       },
  //     },
  //     // Dark theme colors
  //     dark: {
  //       primary: {
  //         color: '{primary.400}',
  //         contrastColor: '{primary.950}',
  //         hoverColor: '{primary.300}',
  //         activeColor: '{primary.200}',
  //       },
  //       highlight: {
  //         background: 'rgba(245, 158, 11, .16)',
  //         focusBackground: 'rgba(245, 158, 11, .24)',
  //         color: '{highlight.300}',
  //         focusColor: '{highlight.200}',
  //       },
  //       surface: {
  //         0: '#0f1720',
  //         50: '#1a2332',
  //         100: '#212b3d',
  //         200: '#293548',
  //         300: '#324054',
  //         400: '#3d4d62',
  //         500: '#4a5b71',
  //         600: '#5a6c83',
  //         700: '#6d7f96',
  //         800: '#8394aa',
  //         900: '#9caabf',
  //         950: '#b7c2d4',
  //       },
  //     },
  //   },
  // },
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
    colorScheme: {
      light: {
        primary: {
          color: '{primary.600}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.700}',
          activeColor: '{primary.800}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '{primary.950}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}',
        },
        highlight: {
          background: 'rgba(251, 191, 36, .16)',
          focusBackground: 'rgba(251, 191, 36, .24)',
          color: '{primary.300}',
          focusColor: '{primary.200}',
        },
        surface: {
          0: '#0a0e18',
          50: '#0f172a',
          100: '#162032',
          200: '#1e293b',
          300: '#273447',
          400: '#334155',
          500: '#475569',
          600: '#64748b',
          700: '#94a3b8',
          800: '#cbd5e1',
          900: '#e2e8f0',
          950: '#f1f5f9',
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    providePrimeNG({
      theme: {
        preset: BeeActiveLara,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
  ],
};
