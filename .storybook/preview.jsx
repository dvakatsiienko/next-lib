/* Core */
import React from 'react';
import { ThemeProvider } from 'styled-components';

const darkTheme = {};

const lightTheme = {};

const withTheme = (Story, context) => {
  const { theme } = context.parameters;

  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;

  // <GlobalStyle />

  return (
    <ThemeProvider theme={storyTheme}>
      <Story />
    </ThemeProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [withTheme];
