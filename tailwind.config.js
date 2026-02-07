// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: ['./projects/web/src/**/*.{html,ts}'],
//   theme: {
//     extend: {
//       colors: {
//         // Primary - Deep Steel Blue
//         primary: {
//           50: '#f3f6fb',
//           100: '#e3eaf4',
//           200: '#c1d0e6',
//           300: '#9bb2d4',
//           400: '#6f8dbf',
//           500: '#4a6eaa',
//           600: '#335892',
//           700: '#274878',
//           800: '#203d66',
//           900: '#1e3a5f', // Main primary
//           950: '#0f1e33',
//         },

//         // Highlight - Honey Gold
//         highlight: {
//           50: '#fffbeb',
//           100: '#fef3c7',
//           200: '#fde68a',
//           300: '#fcd34d',
//           400: '#fbbf24',
//           500: '#f59e0b', // Main highlight
//           600: '#d97706',
//           700: '#b45309',
//           800: '#92400e',
//           900: '#78350f',
//           950: '#451a03',
//         },

//         // Accent - Warm Brown
//         accent: {
//           50: '#fff7ed',
//           100: '#ffedd5',
//           200: '#fed7aa',
//           300: '#fdba74',
//           400: '#fb923c',
//           500: '#f97316',
//           600: '#ea580c',
//           700: '#c2410c',
//           800: '#b45309', // Main accent
//           900: '#7c2d12',
//           950: '#431407',
//         },

//         // Secondary - Dark Navy/Charcoal
//         secondary: {
//           50: '#f3f4f6',
//           100: '#e5e7eb',
//           200: '#cbd5e1',
//           300: '#94a3b8',
//           400: '#64748b',
//           500: '#475569',
//           600: '#334155',
//           700: '#1e293b',
//           800: '#172033',
//           900: '#0f1720', // Main secondary
//           950: '#070b10',
//         },

//         // Success - Emerald Green
//         success: {
//           50: '#ecfdf5',
//           100: '#d1fae5',
//           200: '#a7f3d0',
//           300: '#6ee7b7',
//           400: '#34d399',
//           500: '#10b981',
//           600: '#059669', // Main success
//           700: '#047857',
//           800: '#065f46',
//           900: '#064e3b',
//           950: '#022c22',
//         },

//         // Danger - Red
//         danger: {
//           50: '#fef2f2',
//           100: '#fee2e2',
//           200: '#fecaca',
//           300: '#fca5a5',
//           400: '#f87171',
//           500: '#ef4444',
//           600: '#dc2626', // Main danger
//           700: '#b91c1c',
//           800: '#991b1b',
//           900: '#7f1d1d',
//           950: '#450a0a',
//         },

//         // Surface colors for light/dark themes
//         surface: {
//           0: 'rgb(var(--surface-0) / <alpha-value>)',
//           50: 'rgb(var(--surface-50) / <alpha-value>)',
//           100: 'rgb(var(--surface-100) / <alpha-value>)',
//           200: 'rgb(var(--surface-200) / <alpha-value>)',
//           300: 'rgb(var(--surface-300) / <alpha-value>)',
//           400: 'rgb(var(--surface-400) / <alpha-value>)',
//           500: 'rgb(var(--surface-500) / <alpha-value>)',
//           600: 'rgb(var(--surface-600) / <alpha-value>)',
//           700: 'rgb(var(--surface-700) / <alpha-value>)',
//           800: 'rgb(var(--surface-800) / <alpha-value>)',
//           900: 'rgb(var(--surface-900) / <alpha-value>)',
//         },
//       },

//       fontFamily: {
//         sans: [
//           'Inter',
//           'ui-sans-serif',
//           'system-ui',
//           '-apple-system',
//           'BlinkMacSystemFont',
//           'Segoe UI',
//           'Roboto',
//           'sans-serif',
//         ],
//         heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
//       },

//       animation: {
//         'fade-in': 'fadeIn 0.5s ease-in-out',
//         'slide-up': 'slideUp 0.5s ease-out',
//         'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },

//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(10px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//       },
//     },
//   },

//   plugins: [require('tailwindcss-primeui')],

//   corePlugins: {
//     preflight: false,
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./projects/web/src/**/*.{html,ts}'],
  theme: {
    extend: {
      // colors: {
      //   // BeeActive Primary - Honey Gold
      //   primary: {
      //     50: '#fffbeb',
      //     100: '#fef3c7',
      //     200: '#fde68a',
      //     300: '#fcd34d',
      //     400: '#fbbf24',
      //     500: '#f59e0b', // Main brand color - Honey Gold
      //     600: '#d97706',
      //     700: '#b45309',
      //     800: '#92400e',
      //     900: '#78350f',
      //     950: '#451a03',
      //   },
      //   // BeeActive Secondary - Bee Black
      //   secondary: {
      //     50: '#fafafa',
      //     100: '#f4f4f5',
      //     200: '#e4e4e7',
      //     300: '#d4d4d8',
      //     400: '#a1a1aa',
      //     500: '#71717a',
      //     600: '#52525b',
      //     700: '#3f3f46',
      //     800: '#27272a',
      //     900: '#18181b', // Main secondary - Deep Black
      //     950: '#09090b',
      //   },
      //   // BeeActive Accent - Nectar Orange
      //   accent: {
      //     50: '#fff7ed',
      //     100: '#ffedd5',
      //     200: '#fed7aa',
      //     300: '#fdba74',
      //     400: '#fb923c',
      //     500: '#f97316', // Main accent - Nectar Orange
      //     600: '#ea580c',
      //     700: '#c2410c',
      //     800: '#9a3412',
      //     900: '#7c2d12',
      //     950: '#431407',
      //   },
      //   // Success - Nature Green
      //   success: {
      //     50: '#f0fdf4',
      //     100: '#dcfce7',
      //     200: '#bbf7d0',
      //     300: '#86efac',
      //     400: '#4ade80',
      //     500: '#22c55e', // Main success
      //     600: '#16a34a',
      //     700: '#15803d',
      //     800: '#166534',
      //     900: '#14532d',
      //     950: '#052e16',
      //   },
      //   // Info - Sky Blue
      //   info: {
      //     50: '#f0f9ff',
      //     100: '#e0f2fe',
      //     200: '#bae6fd',
      //     300: '#7dd3fc',
      //     400: '#38bdf8',
      //     500: '#0ea5e9', // Main info
      //     600: '#0284c7',
      //     700: '#0369a1',
      //     800: '#075985',
      //     900: '#0c4a6e',
      //     950: '#082f49',
      //   },
      //   // Warning - Amber
      //   warning: {
      //     50: '#fffbeb',
      //     100: '#fef3c7',
      //     200: '#fde68a',
      //     300: '#fcd34d',
      //     400: '#fbbf24',
      //     500: '#f59e0b', // Main warning
      //     600: '#d97706',
      //     700: '#b45309',
      //     800: '#92400e',
      //     900: '#78350f',
      //     950: '#451a03',
      //   },
      //   // Danger - Red
      //   danger: {
      //     50: '#fef2f2',
      //     100: '#fee2e2',
      //     200: '#fecaca',
      //     300: '#fca5a5',
      //     400: '#f87171',
      //     500: '#ef4444', // Main danger
      //     600: '#dc2626',
      //     700: '#b91c1c',
      //     800: '#991b1b',
      //     900: '#7f1d1d',
      //     950: '#450a0a',
      //   },

      //   // Surface colors for light/dark themes
      //   surface: {
      //     0: 'rgb(var(--surface-0) / <alpha-value>)',
      //     50: 'rgb(var(--surface-50) / <alpha-value>)',
      //     100: 'rgb(var(--surface-100) / <alpha-value>)',
      //     200: 'rgb(var(--surface-200) / <alpha-value>)',
      //     300: 'rgb(var(--surface-300) / <alpha-value>)',
      //     400: 'rgb(var(--surface-400) / <alpha-value>)',
      //     500: 'rgb(var(--surface-500) / <alpha-value>)',
      //     600: 'rgb(var(--surface-600) / <alpha-value>)',
      //     700: 'rgb(var(--surface-700) / <alpha-value>)',
      //     800: 'rgb(var(--surface-800) / <alpha-value>)',
      //     900: 'rgb(var(--surface-900) / <alpha-value>)',
      //   },
      // },
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706', // Main — Rich Amber
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Main — Midnight Navy
          950: '#020617',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Main — Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        info: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        warning: {
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
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
  corePlugins: {
    preflight: false,
  },
};
