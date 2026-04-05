import { create } from '@storybook/theming';
import '../src/tokens/globals.css';

const raptorTheme = create({
  base: 'light',
  brandTitle: 'Raptor Design System',
  brandUrl: 'https://raptortech.com',
  brandTarget: '_blank',

  // Colors
  colorPrimary: '#F97316',
  colorSecondary: '#EA580C',

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E5E5E5',
  appBorderRadius: 10,

  // Text
  textColor: '#171717',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#737373',

  // Toolbar
  barTextColor: '#525252',
  barSelectedColor: '#F97316',
  barHoverColor: '#EA580C',
  barBg: '#FFFFFF',

  // Form
  inputBg: '#FFFFFF',
  inputBorder: '#D4D4D4',
  inputTextColor: '#171717',
  inputBorderRadius: 8,

  // Font
  fontBase: '"DM Sans", sans-serif',
  fontCode: 'monospace',
});

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      theme: raptorTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'surface', value: '#FAFAFA' },
        { name: 'dark', value: '#171717' },
      ],
    },
    layout: 'centered',
  },
};

export default preview;
