import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  }, backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1E1E1E',
      },
      {
        name: 'light',
        value: '#FFF',
      },
    ],
  },
}