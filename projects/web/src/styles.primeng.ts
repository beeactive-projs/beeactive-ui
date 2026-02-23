import Lara from '@primeuix/themes/lara';
import { definePreset } from '@primeuix/themes';
import {
  primary,
  success,
  info,
  warning,
  danger,
  surfaceLight,
  surfaceDark,
  secondary,
} from './theme-colors';

// export const BeeActiveLara = definePreset(Lara, {
//   semantic: {
//     primary,
//     success,
//     info,
//     warning,
//     danger,
//     colorScheme: {
//       light: {
//         primary: {
//           color: '{primary.600}',
//           contrastColor: '#ffffff',
//           hoverColor: '{primary.700}',
//           activeColor: '{primary.800}',
//         },
//         highlight: {
//           background: '{primary.50}',
//           focusBackground: '{primary.100}',
//           color: '{primary.700}',
//           focusColor: '{primary.800}',
//         },
//         surface: surfaceLight,
//       },
//       dark: {
//         primary: {
//           color: '{primary.500}',
//           contrastColor: '{primary.950}',
//           hoverColor: '{primary.300}',
//           activeColor: '{primary.200}',
//         },
//         highlight: {
//           background: 'rgba(251, 191, 36, .16)',
//           focusBackground: 'rgba(251, 191, 36, .24)',
//           color: '{primary.300}',
//           focusColor: '{primary.200}',
//         },
//         surface: surfaceDark,
//       },
//     },
//   },
// });

export const BeeActiveLara = definePreset(Lara, {
  semantic: {
    primary,
    success,
    info,
    warning,
    danger,
    secondary,
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '{secondary.800}',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          // Tinted navy wash for selected rows, focus rings, chips.
          // background: '#eef4fa', // secondary.50
          // focusBackground: '#dce9f5', // secondary.100
          // color: '#1e3a5f', // secondary.800
          // focusColor: '#0f1720', // secondary.900
        },
        surface: surfaceLight,
      },
      dark: {
        primary: {
          color: '{primary.500}',
          contrastColor: '{secondary.800}',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          // Warm gold wash — matches the rgba used for badge-paused in dark.
          // background: 'rgba(245, 158, 11, 0.16)',
          // focusBackground: 'rgba(245, 158, 11, 0.24)',
          // color: '{primary.400}',
          // focusColor: '{primary.300}',
        },
        surface: surfaceDark,
      },
    },
  },
});
