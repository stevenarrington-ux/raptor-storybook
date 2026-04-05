/**
 * Raptor Design System — Design Tokens
 *
 * Single source of truth for colors, typography, spacing, radii, and shadows.
 * These map 1:1 to the CSS custom properties in globals.css.
 * Use these in JS/React when you need tokens programmatically.
 *
 * Framework compatibility:
 *   - Shadcn/ui: map to CSS vars in tailwind.config
 *   - PrimeVue: map to preset theme tokens
 *   - Radix: use CSS vars directly
 */

export const colors = {
  primary: {
    50: '#FFF7ED', 100: '#FFEDD5', 200: '#FED7AA', 300: '#FDBA74',
    400: '#FB923C', 500: '#F97316', 600: '#EA580C', 700: '#C2410C', 800: '#9A3412',
  },
  neutral: {
    50: '#FAFAFA', 100: '#F5F5F5', 200: '#E5E5E5', 300: '#D4D4D4',
    400: '#A3A3A3', 500: '#737373', 600: '#525252', 700: '#404040',
    800: '#262626', 900: '#171717',
  },
  success: { 50: '#F0FDF4', 100: '#DCFCE7', 500: '#16A34A', 600: '#15803D', 700: '#166534' },
  danger: { 50: '#FEF2F2', 100: '#FEE2E2', 500: '#DC2626', 600: '#B91C1C', 700: '#991B1B' },
  warning: { 50: '#FFFBEB', 100: '#FEF3C7', 500: '#D97706', 600: '#B45309', 700: '#92400E' },
  info: { 50: '#EFF6FF', 100: '#DBEAFE', 500: '#2563EB', 600: '#1D4ED8', 700: '#1E40AF' },
  navy: { 500: '#312E81', 600: '#1E1B4B' },
  magenta: { 500: '#C026D3', 600: '#A21CAF' },
  teal: { 500: '#0D9488', 600: '#0F766E' },
};

export const typography = {
  fontFamily: {
    body: "'DM Sans', system-ui, -apple-system, sans-serif",
    display: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
  },
  fontSize: {
    xs: '0.75rem', sm: '0.8125rem', base: '0.875rem', md: '0.9375rem',
    lg: '1rem', xl: '1.125rem', '2xl': '1.25rem', '3xl': '1.5rem',
    '4xl': '1.75rem', '5xl': '2.25rem',
  },
  fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
};

export const spacing = {
  0: '0', 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem',
  5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem',
};

export const radius = {
  sm: '0.375rem', md: '0.625rem', lg: '0.875rem',
  xl: '1.125rem', '2xl': '1.5rem', full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px rgba(0,0,0,0.06)',
  md: '0 4px 12px -2px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.04)',
  lg: '0 12px 24px -4px rgba(0,0,0,0.1), 0 4px 8px -4px rgba(0,0,0,0.04)',
  focus: '0 0 0 3px rgba(249,115,22,0.25)',
  focusDanger: '0 0 0 3px rgba(220,38,38,0.25)',
  focusSuccess: '0 0 0 3px rgba(22,163,74,0.25)',
};

/** Badge variant color map — bold style (SmartPass-influenced) */
export const badgeVariants = {
  default: { bg: '#404040', color: '#fff' },
  primary: { bg: '#F97316', color: '#fff' },
  success: { bg: '#16A34A', color: '#fff' },
  danger: { bg: '#DC2626', color: '#fff' },
  warning: { bg: '#D97706', color: '#fff' },
  info: { bg: '#2563EB', color: '#fff' },
  navy: { bg: '#312E81', color: '#fff' },
  magenta: { bg: '#C026D3', color: '#fff' },
  teal: { bg: '#0D9488', color: '#fff' },
};
