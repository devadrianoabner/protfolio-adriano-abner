import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/app/styles/theme'; // ajuste o caminho se necessário

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
