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
  components: {
    button: {
      colorScheme: {
        light: {
          outlined: {
            primary: {
              borderColor: '{primary.500}',
              color: '{primary.500}',
              hoverBackground: 'color-mix(in srgb, {primary.500} 10%, transparent)',
              activeBackground: 'color-mix(in srgb, {primary.500} 20%, transparent)',
            },
          },
          text: {
            secondary: {
              color: '{secondary.500}',
              hoverBackground: 'color-mix(in srgb, {secondary.600} 30%, transparent)',
              activeBackground: 'color-mix(in srgb, {secondary.700} 40%, transparent)',
            },
          },
        },
        dark: {
          outlined: {
            primary: {
              borderColor: '{primary.500}',
              color: '{primary.500}',
              hoverBackground: 'color-mix(in srgb, {primary.500} 10%, transparent)',
              activeBackground: 'color-mix(in srgb, {primary.500} 20%, transparent)',
            },
          },
          text: {
            secondary: {
              color: '{secondary.500}',
              hoverBackground: 'color-mix(in srgb, {secondary.600} 30%, transparent)',
              activeBackground: 'color-mix(in srgb, {secondary.700} 40%, transparent)',
            },
          },
        },
      },
    },
  },
});
